import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hookia",
  description: "Hookia, el mejor lugar de automatizaciones.",
  verification: {
    google: "tu-código-de-verificación",
    other: {
      "facebook-domain-verification": "bjp8wxkw78csq7cg8wyvyxomvog97k",
    }
  },
  alternates: {
    canonical: "https://hookia.com",
    languages: {
      "es-ES": "https://hookia.com",
      "es-CR": "https://cr.hookia.com",
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
