import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "../../components";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog Website",
  description: "Created by Davis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
