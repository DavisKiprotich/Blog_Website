import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "../../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Created by Davis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
