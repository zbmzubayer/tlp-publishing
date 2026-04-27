import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import type Stripe from "stripe";
import { PrismaClient } from "@/generated/prisma/client";
import { stripe } from "@/lib/stripe";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const products = await stripe.prices.list({
    active: true,
    type: "recurring",
    expand: ["data.product"],
  });

  for (const item of products.data) {
    const product = item.product as Stripe.Product;
    const plan = await prisma.plan.upsert({
      where: { stripePriceId: item.id },
      create: {
        stripePriceId: item.id,
        stripeProductId: product.id,
        name: product.name,
        description: product.description,
        amount: item.unit_amount || 0,
        currency: item.currency,
        interval: item.recurring?.interval || "month",
        intervalCount: item.recurring?.interval_count,
        isActive: item.active,
      },
      update: {
        stripeProductId: product.id,
        name: product.name,
        description: product.description,
        amount: item.unit_amount || 0,
        currency: item.currency,
        interval: item.recurring?.interval || "month",
        intervalCount: item.recurring?.interval_count,
        isActive: item.active,
      },
    });
    console.log(`Upserted plan ${plan.name} with price ID ${plan.stripePriceId}`);
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });
