import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";

export default function HomeLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
