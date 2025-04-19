import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { theme } from "@/config/theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Công Ty Của Chúng Tôi",
  description: "Landing page giới thiệu về công ty của chúng tôi",
};

const businessAreas = [
  {
    name: "Dịch vụ số hoá",
    href: "/services/digitalization",
  },
  {
    name: "Dịch vụ scan & nhập liệu",
    href: "/services/scan-data-entry",
  },
  {
    name: "Dịch vụ xử lý dữ liệu",
    href: "/services/data-processing",
  },
  {
    name: "Dịch vụ chuyển đổi số",
    href: "/services/digital-transformation",
  },
  {
    name: "Dịch vụ chỉnh lý hồ sơ tài liệu",
    href: "/services/document-management",
  },
  {
    name: "Dịch vụ tư vấn dự án công nghệ thông tin",
    href: "/services/it-consulting",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md font-bold" style={{ color: theme.colors.text.primary }}>
          <nav className="container mx-auto px-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/" className="flex items-center font-bold">
                  <img src="/logo.png" alt="Logo" className="w-12 h-12" />
                  <span className="text-[#ED2C2C]">Tech</span>
                </Link>
              </div>
              <div className="space-x-6">
                <Link href="/" className="hover:text-blue-600">
                  Trang chủ
                </Link>
                <Link href="/about" className="hover:text-blue-600">
                  Về chúng tôi
                </Link>
                <div className="relative group inline-block">
                  <button className="hover:text-blue-600 py-2">
                    Lĩnh vực kinh doanh
                  </button>
                  <div className="absolute left-[-16px] invisible opacity-0 group-hover:visible group-hover:opacity-100 w-64 bg-white shadow-lg rounded-lg py-2 z-50 -mt-1 transform transition-all duration-300 ease-in-out translate-y-2 group-hover:translate-y-0">
                    {businessAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-200 transition-colors duration-200"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link href="/contact" className="hover:text-blue-600">
                  Liên hệ
                </Link>
              </div>
            </div>
          </nav>
        </header>
        
        <main className="container mx-auto mt-16 px-4 py-8" style={{ minHeight: "calc(100vh - 64px - 212px)" }}>
          {children}
        </main>

        <footer className="text-white" style={{ backgroundColor: theme.colors.background.gray }}>
          <div className="container mx-auto px-4 pt-8 pb-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <Link href="/" className="flex items-center font-bold">
                  <img src="/logo.png" alt="Logo" className="w-24 h-24" />
                  <span className="text-[#ED2C2C] text-[32px]">Tech</span>
                </Link>
                <p className="mt-4 text-[18px]">CÔNG TY CỔ PHẦN XÂY DỰNG VÀ PHÁT TRIỂN CÔNG NGHỆ TNT</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Liên hệ</h3>
                <p>Tên viết tắt: TNTG.,JSC</p>
                <p>Mã số DN: 0109431558</p>
                <p>Email: info.tnttech@gmail.com</p>
                <p>Điện thoại: (84) 123-456-789</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Địa chỉ</h3>
                <p>Số 7B1, ngách 79/6 đường Dương Quảng Hàm, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p>&copy; 2025 TNTTech. All rights reserved.</p>
            </div>
          </div>
        </footer>

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
