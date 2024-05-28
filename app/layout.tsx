import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { siteConfig } from "@/utils/site";
import { fontSans } from "@/utils/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import NextTopLoader from "nextjs-toploader";
import TopGlow from "@/components/TopGlow";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen dark:bg-custom-gray font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <NextTopLoader color="red" />
          <TopGlow />
          <div className="relative flex flex-col h-screen overflow-x-hidden">
            <main className="container mx-auto max-w-7xl pt-5 px-6 flex-grow">
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
