import { Inter } from "@next/font/google";
import { Header } from "@/components/header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <head />
      <body className="bg-begeClaro flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
