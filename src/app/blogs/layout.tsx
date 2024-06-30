import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Insights on Poojas: Your Guide to Rituals, Homas, and Havans - Marathisarvapooja Blog",
  description: "Explore in-depth articles and guides on various Poojas, Homas, and Havans. Learn about rituals, traditions, and the significance of different ceremonies with insights from experienced Marathi Pandits in Bangalore. Stay informed and enrich your spiritual knowledge with Marathisarvapooja's blog.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className={inter.className}>
        {children}
      </main>
    </>

  );
}
