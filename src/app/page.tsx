"use client";

import { TypeAnimation } from 'react-type-animation';
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";
import { useState, useEffect } from "react";

export default function Home() {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    // Tính toán thời gian để hiển thị buttons sau khi hiệu ứng hoàn thành
    // 2000ms (delay) + 500ms (pause) + thời gian hiển thị text
    const totalTime = 2000 + 500 + (25 * 300); // 50ms/ký tự, ước tính 100 ký tự
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, totalTime);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main>
      <section className="relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto p-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <div className="min-h-[50px] mb-6">
                <TypeAnimation
                  sequence={[
                    "Chào mừng đến với TNT",
                    1000,
                    "Chào mừng đến với TNT",
                  ]}
                  wrapper="h1"
                  speed={50}
                  className="text-5xl font-bold"
                  cursor={false}
                  repeat={0}
                />
              </div>
              <div className="min-h-[120px] mb-8">
                <TypeAnimation
                  sequence={[
                    () => {
                      return new Promise((resolve) => setTimeout(resolve, 2000));
                    },
                    "Trong giai đoạn phát triển tiếp theo, TNT xác định sứ mệnh của mình là trở thành đối tác cung cấp các dịch vụ số hoá cho tổ chức, doanh nghiệp để góp phần mang lại thành công và gia tăng giá trị cho khách hàng trong xu thế chuyển đổi số và tạo dựng nền kinh tế số tại Việt Nam.",
                    1000,
                    "Trong giai đoạn phát triển tiếp theo, TNT xác định sứ mệnh của mình là trở thành đối tác cung cấp các dịch vụ số hoá cho tổ chức, doanh nghiệp để góp phần mang lại thành công và gia tăng giá trị cho khách hàng trong xu thế chuyển đổi số và tạo dựng nền kinh tế số tại Việt Nam.",
                  ]}
                  wrapper="p"
                  speed={75}
                  className="text-xl"
                  cursor={false}
                  repeat={0}
                />
              </div>
              <div className={`flex gap-4 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500 ease-out`}>
                <Link
                  href="/about"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Về chúng tôi
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Liên hệ ngay
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative h-[500px]">
              <Image
                src="/images/services/banner.png"
                alt="Banner Image"
                fill
                sizes='(max-width: 100%)'
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>Tại sao chọn chúng tôi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>Dịch vụ chất lượng cao</h3>
              <p className="text-gray-600">Cung cấp giải pháp nhanh chóng và hiệu quả cho doanh nghiệp của bạn</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>Uy tín, tận tâm</h3>
              <p className="text-gray-600">Uy tín và tận tâm là tiền đề để khách hàng mua sự tin tưởng và hài lòng</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>Hỗ trợ nhanh chóng</h3>
              <p className="text-gray-600">Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng phục vụ</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 mt-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12" style={{ color: theme.colors.primary }}>Lĩnh vực kinh doanh</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dịch vụ số hoá",
                description: "Chuyển đổi tài liệu giấy thành định dạng số, giúp doanh nghiệp dễ dàng quản lý và truy cập.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                href: "/services/digitalization"
              },
              {
                title: "Dịch vụ scan & nhập liệu",
                description: "Quét và số hoá tài liệu với độ chính xác cao, đảm bảo chất lượng và tốc độ xử lý.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                href: "/services/scan-data-entry"
              },
              {
                title: "Dịch vụ xử lý dữ liệu",
                description: "Phân tích và xử lý dữ liệu chuyên nghiệp, giúp doanh nghiệp đưa ra quyết định chính xác.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                href: "/services/data-processing"
              },
              {
                title: "Dịch vụ chuyển đổi số",
                description: "Hỗ trợ doanh nghiệp chuyển đổi quy trình làm việc sang môi trường số hiện đại.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                href: "/services/digital-transformation"
              },
              {
                title: "Dịch vụ chỉnh lý hồ sơ tài liệu",
                description: "Tổ chức và quản lý hồ sơ tài liệu một cách hệ thống và hiệu quả.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                ),
                href: "/services/document-management"
              },
              {
                title: "Dịch vụ tư vấn dự án công nghệ thông tin",
                description: "Tư vấn và triển khai các giải pháp công nghệ thông tin phù hợp với nhu cầu doanh nghiệp.",
                icon: (
                  <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                href: "/services/it-consulting"
              }
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="p-6">
                  <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <div className="flex items-center text-blue-600 group-hover:text-blue-700">
                    <span className="mr-2">Tìm hiểu thêm</span>
                    <svg className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 mt-8 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600">
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Phản hồi của khách hàng</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative h-[500px] overflow-hidden">
              <div className="absolute inset-0 flex flex-col space-y-4 animate-slide-up">
                {[
                  {
                    comment: "Dịch vụ số hoá của công ty TNT đã giúp chúng tôi tiết kiệm rất nhiều thời gian và chi phí trong việc quản lý tài liệu. Đội ngũ nhân viên chuyên nghiệp và tận tâm.",
                    avatar: "/images/services/avatar1.jpg",
                    name: "Ngô Bá Hùng",
                    position: "Giám đốc Công ty TB Rice"
                  },
                  {
                    comment: "Chúng tôi rất hài lòng với dịch vụ scan & nhập liệu. Độ chính xác cao và thời gian xử lý nhanh chóng. Chắc chắn sẽ tiếp tục hợp tác với TNT trong tương lai.",
                    avatar: "/images/services/avatar2.png",
                    name: "Lê Văn Xuân",
                    position: "Giám đốc Tài chính, Công ty TPsolar"
                  },
                  {
                    comment: "Dịch vụ xử lý dữ liệu đã giúp chúng tôi có cái nhìn tổng quan về hoạt động kinh doanh. Báo cáo chi tiết và dễ hiểu, giúp chúng tôi đưa ra quyết định chính xác hơn.",
                    avatar: "/images/services/avatar3.png",
                    name: "Trần Thị Nhung",
                    position: "Trưởng phòng Hành chính, Công ty Phi Linh Wedding"
                  },
                  {
                    comment: "Quá trình chuyển đổi số được thực hiện rất chuyên nghiệp. Đội ngũ tư vấn TNT luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc của chúng tôi.",
                    avatar: "/images/services/avatar4.jpg",
                    name: "Phạm Thị Duyên",
                    position: "Giám đốc Điều hành, Công ty GH Entertainment"
                  },
                  {
                    comment: "Dịch vụ chỉnh lý hồ sơ tài liệu đã giúp chúng tôi tổ chức lại kho tài liệu một cách hệ thống. Dễ dàng tìm kiếm và truy cập khi cần thiết.",
                    avatar: "/images/services/avatar5.jpg",
                    name: "Hoàng Văn Cảnh",
                    position: "Giám đốc Công nghệ, Công ty AMO"
                  },
                  {
                    comment: "Tư vấn dự án công nghệ thông tin rất hiệu quả. Đội ngũ chuyên gia của TNT có kinh nghiệm cao và hiểu rõ nhu cầu của doanh nghiệp chúng tôi.",
                    avatar: "/images/services/avatar6.jpg",
                    name: "Đỗ Thị Phương",
                    position: "Trưởng phòng Nhân sự, Công ty Misa"
                  }
                ].map((comment, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 hover:shadow-xl"
                    style={{
                      animation: `slideIn 0.5s ease-out ${index * 0.1}s`,
                      animationFillMode: 'both'
                    }}
                  >
                    <div className="flex mb-4">
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 mb-6 italic">"{comment.comment}"</p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={comment.avatar}
                          alt={comment.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{comment.name}</h4>
                        <p className="text-sm text-gray-500">{comment.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="/images/services/comment-banner.webp"
                alt="Testimonials Banner"
                className="w-full h-full object-cover"
                sizes='(max-width: 100%)'
              />
              <div className="absolute inset-0 flex items-center">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">Khách hàng tin tưởng TNT</h3>
                  <p className="text-lg mb-6">Hơn 100+ doanh nghiệp đã và đang sử dụng dịch vụ của chúng tôi</p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-4xl font-bold">98%</div>
                      <div className="text-sm">Khách hàng hài lòng</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">500+</div>
                      <div className="text-sm">Dự án hoàn thành</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold">5+</div>
                      <div className="text-sm">Năm kinh nghiệm</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
