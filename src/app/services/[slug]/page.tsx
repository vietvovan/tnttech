import { theme } from "@/config/theme";
import { notFound } from "next/navigation";
import Image from "next/image";

const services = {
  "digitalization": {
    title: "Dịch vụ số hoá",
    description: "Chuyển đổi tài liệu giấy thành dữ liệu số",
    image: "/images/services/digitalization.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ số hoá giúp chuyển đổi tài liệu giấy thành dữ liệu số, giúp doanh nghiệp dễ dàng quản lý, tìm kiếm và chia sẻ thông tin. Chúng tôi sử dụng công nghệ hiện đại để đảm bảo chất lượng và độ chính xác cao.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Thu thập và phân loại tài liệu</li>
            <li>Quét và xử lý tài liệu với độ phân giải cao</li>
            <li>Nhận dạng văn bản (OCR) và kiểm tra chất lượng</li>
            <li>Phân loại và tổ chức dữ liệu</li>
            <li>Xuất dữ liệu theo định dạng yêu cầu</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Tiết kiệm không gian lưu trữ</li>
            <li>Dễ dàng tìm kiếm và truy xuất thông tin</li>
            <li>Tăng cường bảo mật và kiểm soát truy cập</li>
            <li>Giảm thiểu rủi ro mất mát tài liệu</li>
            <li>Hỗ trợ làm việc từ xa và chia sẻ thông tin</li>
          </ul>
        </div>
      </div>
    `,
  },
  "scan-data-entry": {
    title: "Dịch vụ scan & nhập liệu",
    description: "Quét và nhập liệu chuyên nghiệp",
    image: "/images/services/scan-data-entry.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ scan & nhập liệu cung cấp giải pháp toàn diện cho việc quét tài liệu và nhập dữ liệu vào hệ thống. Chúng tôi đảm bảo độ chính xác cao và tuân thủ các tiêu chuẩn quốc tế.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Thu thập và phân loại tài liệu</li>
            <li>Quét tài liệu với thiết bị chuyên nghiệp</li>
            <li>Xử lý và tối ưu hóa hình ảnh</li>
            <li>Nhập liệu thủ công hoặc tự động (OCR)</li>
            <li>Kiểm tra và xác minh dữ liệu</li>
            <li>Xuất dữ liệu theo định dạng yêu cầu</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Tiết kiệm thời gian và nhân lực</li>
            <li>Giảm thiểu lỗi nhập liệu</li>
            <li>Dữ liệu được tổ chức và cấu trúc tốt</li>
            <li>Hỗ trợ nhiều định dạng xuất dữ liệu</li>
            <li>Bảo mật thông tin khách hàng</li>
          </ul>
        </div>
      </div>
    `,
  },
  "data-processing": {
    title: "Dịch vụ xử lý dữ liệu",
    description: "Xử lý và phân tích dữ liệu chuyên nghiệp",
    image: "/images/services/data-processing.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ xử lý dữ liệu giúp doanh nghiệp tối ưu hóa và phân tích dữ liệu để đưa ra quyết định kinh doanh thông minh. Chúng tôi cung cấp các giải pháp xử lý dữ liệu toàn diện từ thu thập đến phân tích.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Thu thập và tích hợp dữ liệu từ nhiều nguồn</li>
            <li>Làm sạch và chuẩn hóa dữ liệu</li>
            <li>Phân tích và khai phá dữ liệu</li>
            <li>Tạo báo cáo và biểu đồ trực quan</li>
            <li>Đề xuất giải pháp dựa trên phân tích</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Hiểu rõ hơn về khách hàng và thị trường</li>
            <li>Tối ưu hóa quy trình kinh doanh</li>
            <li>Phát hiện xu hướng và cơ hội mới</li>
            <li>Giảm chi phí vận hành</li>
            <li>Tăng hiệu quả ra quyết định</li>
          </ul>
        </div>
      </div>
    `,
  },
  "digital-transformation": {
    title: "Dịch vụ chuyển đổi số",
    description: "Đồng hành cùng doanh nghiệp trong hành trình số hóa",
    image: "/images/services/digital-transformation.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ chuyển đổi số giúp doanh nghiệp áp dụng công nghệ số vào quy trình kinh doanh, nâng cao hiệu quả và khả năng cạnh tranh. Chúng tôi cung cấp giải pháp toàn diện từ tư vấn đến triển khai.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Đánh giá hiện trạng và nhu cầu</li>
            <li>Xây dựng chiến lược chuyển đổi số</li>
            <li>Triển khai giải pháp công nghệ</li>
            <li>Đào tạo nhân viên</li>
            <li>Giám sát và tối ưu hóa</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Tăng hiệu suất và năng suất</li>
            <li>Giảm chi phí vận hành</li>
            <li>Cải thiện trải nghiệm khách hàng</li>
            <li>Tăng khả năng cạnh tranh</li>
            <li>Thích ứng với thị trường thay đổi</li>
          </ul>
        </div>
      </div>
    `,
  },
  "document-management": {
    title: "Dịch vụ chỉnh lý hồ sơ tài liệu",
    description: "Quản lý và tổ chức hồ sơ tài liệu chuyên nghiệp",
    image: "/images/services/document-management.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ chỉnh lý hồ sơ tài liệu giúp doanh nghiệp tổ chức và quản lý hồ sơ một cách hiệu quả, đảm bảo tuân thủ quy định và dễ dàng truy xuất khi cần thiết.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Thu thập và phân loại hồ sơ</li>
            <li>Sắp xếp và tổ chức theo hệ thống</li>
            <li>Quét và số hóa hồ sơ</li>
            <li>Xây dựng hệ thống quản lý hồ sơ</li>
            <li>Đào tạo nhân viên sử dụng hệ thống</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Tiết kiệm không gian lưu trữ</li>
            <li>Dễ dàng tìm kiếm và truy xuất hồ sơ</li>
            <li>Tuân thủ quy định về lưu trữ hồ sơ</li>
            <li>Giảm thiểu rủi ro mất mát hồ sơ</li>
            <li>Tăng hiệu quả làm việc</li>
          </ul>
        </div>
      </div>
    `,
  },
  "it-consulting": {
    title: "Dịch vụ tư vấn dự án công nghệ thông tin",
    description: "Tư vấn và triển khai giải pháp CNTT",
    image: "/images/services/it-consulting.jpg",
    content: `
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">Tổng quan</h2>
          <p>Dịch vụ tư vấn dự án công nghệ thông tin giúp doanh nghiệp lựa chọn và triển khai giải pháp CNTT phù hợp với nhu cầu kinh doanh. Chúng tôi cung cấp tư vấn chuyên sâu từ phân tích nhu cầu đến triển khai và hỗ trợ.</p>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Quy trình thực hiện</h2>
          <ol class="list-decimal pl-5 space-y-2">
            <li>Phân tích nhu cầu và hiện trạng</li>
            <li>Đề xuất giải pháp phù hợp</li>
            <li>Lập kế hoạch triển khai</li>
            <li>Triển khai và cấu hình hệ thống</li>
            <li>Đào tạo và hỗ trợ sau triển khai</li>
          </ol>
        </div>
        
        <div>
          <h2 class="text-2xl font-semibold mb-4">Lợi ích</h2>
          <ul class="list-disc pl-5 space-y-2">
            <li>Giải pháp CNTT phù hợp với nhu cầu</li>
            <li>Tối ưu hóa chi phí đầu tư</li>
            <li>Tăng hiệu quả vận hành</li>
            <li>Hỗ trợ kỹ thuật chuyên nghiệp</li>
            <li>Cập nhật công nghệ mới nhất</li>
          </ul>
        </div>
      </div>
    `,
  },
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary }}>
          {service.title}
        </h1>
        <p className="text-xl text-gray-600">{service.description}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Liên hệ tư vấn</h3>
              <p className="text-gray-600 mb-4">
                Bạn cần tư vấn chi tiết về dịch vụ này? Hãy để lại thông tin, chúng tôi sẽ liên hệ lại sớm nhất.
              </p>
              <a
                href="/contact"
                className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 