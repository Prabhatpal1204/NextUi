import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "Ahead App",
  description: "Know yourself. Grow yourself.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
