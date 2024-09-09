import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsFont = Poppins({
  subsets: ['latin'],
  weight: ["500", "600", "900"],
});

export const metadata: Metadata = {
  title: "Bank Website || BEAR.",
  description: "Follow me for more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppinsFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
