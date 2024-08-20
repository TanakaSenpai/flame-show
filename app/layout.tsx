import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutCheck from "./LayoutCheck";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flame show",
  description:
    "It's one of the best shoe stores. You can find all kind of latest designed shoes in our shop.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutCheck>
          {children}
          <Toaster
            toastOptions={{
              style: {
                border: "1px solid gray",
                boxShadow: "inherit",
              },
            }}
            richColors
          />
        </LayoutCheck>
      </body>
    </html>
  );
}
