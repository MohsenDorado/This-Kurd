import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This Kurd",
  description: "This is Discord or maybe even This Kurd!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressContentEditableWarning>
        <body className={font.className}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="this-kurd-theme">{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
