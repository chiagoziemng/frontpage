import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Omar and Blasius | Design & Development Hub",
  description: "Grow your business with Omar and Blasius, a design and development hub specializing in custom web solutions.",
  keywords: "web design, web development, consultation, custom websites, UI/UX, Omar and Blasius, agency",
  authors: [{ name: "Omar and Blasius Limited" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>

        
        {children}
      </body>
    </html>
  );
}
