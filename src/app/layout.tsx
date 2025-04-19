import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Công Ty Của Chúng Tôi",
  description: "Landing page giới thiệu về công ty của chúng tôi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="container mx-auto mt-16 px-4 py-8" style={{ minHeight: "calc(100vh - 64px - 212px)" }}>
          {children}
        </main>
        <Footer />

        <div className="fixed bottom-4 right-4 flex flex-col space-y-2 z-50">
          <a
            href="https://zalo.me/your-zalo-id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0068ff] text-white p-3 rounded-full shadow-lg hover:bg-[#0055cc] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.491 2.89c-4.753 0-8.61 3.857-8.61 8.61 0 4.753 3.857 8.61 8.61 8.61 4.753 0 8.61-3.857 8.61-8.61 0-4.753-3.857-8.61-8.61-8.61zm0 15.82c-3.969 0-7.21-3.241-7.21-7.21s3.241-7.21 7.21-7.21 7.21 3.241 7.21 7.21-3.241 7.21-7.21 7.21z" />
            </svg>
          </a>
          <a
            href="https://m.me/your-page-id"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0084ff] text-white p-3 rounded-full shadow-lg hover:bg-[#0066cc] transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
          <a
            href="tel:+84123456789"
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
