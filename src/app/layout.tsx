import type { Metadata } from "next";
import { Lato, Open_Sans } from "next/font/google";
import { TanstackQueryProvider } from "@/providers/TanstackQueryProvider";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "TLP Publishing Website",
  description:
    "At TLP Publishing, we operate as a holding company focused on reliable, strategic growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${lato.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
        <script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69b449dc3cf1bd8bd94fbfbf"
        ></script>
      </body>
    </html>
  );
}
