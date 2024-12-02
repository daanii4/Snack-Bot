import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SnackBot Control Center",
  description: "Control your SnackBot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex flex-col min-h-screen bg-gray-900 text-white">
          <header className="bg-gray-800 p-4 text-center text-xl font-bold">
            SnackBot Control Center
          </header>
          <section className="flex-grow">{children}</section>
          <footer className="bg-gray-800 p-2 text-center">
            © SnackBot 2024
          </footer>
        </main>
      </body>
    </html>
  );
}
