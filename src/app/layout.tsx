import { Inter } from "@next/font/google";
import { Header } from "@/components/header";
import "./globals.css";
import { ReactQueryProvider } from "@/utils/reactQuery";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
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
        <div className="w-full">
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </div>
      </body>
    </html>
  );
}
