import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seven UI/UX Design System",
  description: "Modern, high-fidelity UI/UX design implementations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased font-sans">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
