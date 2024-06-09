import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pandit in Bangalore Book Verified Pandits Online for Puja/Homa or Havan - Marathisarvapooja",
  description: "Experienced Marathi Pandits/Guruji in Bangalore for Puja/Homa or Havan. Book now at Marathisarvapooja.com or call ⭐ 7899148582. We offer puja services in different languages like Marathi, Kannada, Hindi, Tamil, Telugu. ⭐15+ Years Experienced ⭐11000+ Puja's Performed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
