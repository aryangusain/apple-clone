import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Apple",
  description: "A cloned Landing Page of apple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
