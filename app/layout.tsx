import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Omar and Blasius | Design & Development Hub",
  description: "Grow your business with omar and blasius, a design & development Hub.",
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
