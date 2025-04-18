import { theme } from "@/config/theme";
import Link from "next/link";

const services = [
  {
    slug: "digitalization",
    title: "Dịch vụ số hoá",
    description: "Chuyển đổi tài liệu giấy thành dữ liệu số",
    icon: "📄",
  },
  {
    slug: "scan-data-entry",
    title: "Dịch vụ scan & nhập liệu",
    description: "Quét và nhập liệu chuyên nghiệp",
    icon: "🔍",
  },
  {
    slug: "data-processing",
    title: "Dịch vụ xử lý dữ liệu",
    description: "Xử lý và phân tích dữ liệu chuyên nghiệp",
    icon: "📊",
  },
  {
    slug: "digital-transformation",
    title: "Dịch vụ chuyển đổi số",
    description: "Đồng hành cùng doanh nghiệp trong hành trình số hóa",
    icon: "🔄",
  },
  {
    slug: "document-management",
    title: "Dịch vụ chỉnh lý hồ sơ tài liệu",
    description: "Quản lý và tổ chức hồ sơ tài liệu chuyên nghiệp",
    icon: "📁",
  },
  {
    slug: "it-consulting",
    title: "Dịch vụ tư vấn dự án công nghệ thông tin",
    description: "Tư vấn và triển khai giải pháp CNTT",
    icon: "💡",
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary }}>
          Lĩnh vực kinh doanh
        </h1>
        <p className="text-xl text-gray-600">
          Chúng tôi cung cấp đa dạng các dịch vụ công nghệ thông tin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="block p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: theme.colors.primary }}>
              {service.title}
            </h2>
            <p className="text-gray-600">{service.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 