import { Header } from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="bg-begeClaro flex flex-col lg:flex-row">
        <div>
          <Header />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
