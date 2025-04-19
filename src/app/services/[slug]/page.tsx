"use client";

import { theme } from "@/config/theme";
import { notFound } from "next/navigation";
import Image from "next/image";

const services = {
  "digitalization": {
    title: "Dịch vụ số hoá",
    subTitle_1: "Tổng quan",
    subTitle_2: "Quy trình thực hiện",
    subTitle_3: "Lợi ích mang lại",
    subTitle_4: "",
    subTitle_5: "",
    description: "Chuyển đổi tài liệu giấy thành dữ liệu số",
    image: "/images/services/sohoatailieu.png",
    content: {
      overview: "Với kinh nghiệm và hệ thống máy móc được trang bị đầy đủ, dịch vụ số hóa tài liệu của TNT sẽ giúp bạn chuyển đổi nhanh chóng và chính xác hàng triệu trang tài liệu sang định dạng số.",
      process: [
        "Thu thập và phân loại tài liệu.",
        "Quét và xử lý tài liệu với độ phân giải cao.",
        "Nhận dạng văn bản (OCR) và kiểm tra chất lượng.",
        "Phân loại và tổ chức dữ liệu.",
        "Xuất dữ liệu theo định dạng yêu cầu."
      ],
      benefits: [
        "Máy scan tốc độ cao: Tiết kiệm thời gian và công sức tối đa.",
        "Phần mềm xử lý hình ảnh thông minh: Đảm bảo chất lượng hình ảnh sắc nét, rõ ràng.",
        "Tùy chỉnh gói dịch vụ: Đáp ứng mọi nhu cầu của khách hàng, từ cá nhân đến doanh nghiệp.",
        "Tiết kiệm không gian lưu trữ.",
        "Dễ dàng tìm kiếm và truy xuất thông tin.",
        "Tăng cường bảo mật và kiểm soát truy cập.",
        "Giảm thiểu rủi ro mất mát tài liệu.",
        "Hỗ trợ làm việc từ xa và chia sẻ thông tin."
      ],
      purpose: [],
      mission: [],
    }
  },
  "scan-data-entry": {
    title: "Dịch vụ scan & nhập liệu",
    subTitle_1: "Tổng quan",
    subTitle_2: "Hình thức dịch vụ",
    subTitle_3: "Lợi ích mang lại",
    subTitle_4: "",
    subTitle_5: "",
    description: "Quét và nhập liệu chuyên nghiệp",
    image: "/images/services/dichvunhaplieu.jpg",
    content: {
      overview: "Dịch vụ scan & nhập liệu cung cấp giải pháp toàn diện cho việc quét tài liệu và nhập dữ liệu vào hệ thống. Chúng tôi đảm bảo độ chính xác cao và tuân thủ các tiêu chuẩn quốc tế.",
      process: [
        "Scan Onsite: Không cần di chuyển tài liệu, chúng tôi sẽ mang máy scan đến tận nơi, thực hiện scan nhanh chóng và hiệu quả. Quy trình làm việc chuyên nghiệp, đảm bảo bảo mật tuyệt đối cho tài liệu của bạn.",
        "Scan Offsite: Dù scan tại văn phòng của chúng tôi, chúng tôi vẫn đảm bảo chất lượng hình ảnh scan sắc nét, rõ ràng. Chúng tôi giao nhận tài liệu tận nơi, giúp bạn tiết kiệm thời gian và công sức.",
        "Ngoài ra, chúng tôi còn cung cấp dịch vụ nhập liệu: Chuyển đổi mọi loại dữ liệu từ dạng giấy sang dạng số, bao gồm: hóa đơn, chứng từ, bảng biểu, sổ sách kế toán,… với độ chính xác cao. Giúp bạn tiết kiệm thời gian, tăng hiệu quả làm việc và dễ dàng tìm kiếm, quản lý thông tin."
      ],
      benefits: [
        "Tiết kiệm thời gian và nhân lực",
        "Giảm thiểu lỗi nhập liệu",
        "Dữ liệu được tổ chức và cấu trúc tốt",
        "Hỗ trợ nhiều định dạng xuất dữ liệu",
        "Bảo mật thông tin khách hàng"
      ],
      purpose: [],
      mission: [],
    }
  },
  "data-processing": {
    title: "Dịch vụ xử lý dữ liệu",
    subTitle_1: "Tổng quan",
    subTitle_2: "Quy trình thực hiện",
    subTitle_3: "Lợi ích mang lại",
    subTitle_4: "Tại sao xử lý dữ liệu lại quan trọng?",
    subTitle_5: "Các nhiệm vụ chính trong xử lý dữ liệu",
    description: "Xử lý và phân tích dữ liệu chuyên nghiệp",
    image: "/images/services/xulydulieu.jpg",
    content: {
      overview: "Xử lý dữ liệu là quá trình thu thập, sắp xếp, làm sạch, chuyển đổi, phân tích và trình bày dữ liệu thô thành thông tin có ý nghĩa, phục vụ cho việc ra quyết định và giải quyết các vấn đề cụ thể.",
      process: [
        "Thu thập dữ liệu: Tìm kiếm và thu thập dữ liệu từ các nguồn khác nhau như bảng tính, cơ sở dữ liệu, trang web, thiết bị IoT,…",
        "Làm sạch dữ liệu: Kiểm tra và sửa chữa các lỗi sai, dữ liệu trùng lặp, dữ liệu thiếu,… để đảm bảo tính chính xác.",
        "Chuyển đổi dữ liệu: Chuyển đổi dữ liệu về một định dạng thống nhất để dễ dàng phân tích.",
        "Phân tích dữ liệu: Sử dụng các công cụ và kỹ thuật thống kê để tìm ra các mẫu, xu hướng và mối quan hệ trong dữ liệu.",
        "Trình bày dữ liệu: Trình bày kết quả phân tích dưới dạng biểu đồ, bảng biểu, báo cáo để dễ hiểu và truyền đạt thông tin hiệu quả."
      ],
      benefits: [
        "Marketing: Phân tích hành vi khách hàng, xây dựng chiến dịch marketing hiệu quả.",
        "Tài chính: Dự báo doanh thu, quản lý rủi ro.",
        "Y tế: Phân tích dữ liệu bệnh nhân để đưa ra chẩn đoán và điều trị chính xác.",
        "Sản xuất: Tối ưu hóa quy trình sản xuất, giảm thiểu chi phí."
      ],
      purpose: [
        "Đưa ra quyết định chính xác: Dựa trên dữ liệu phân tích, doanh nghiệp có thể đưa ra các quyết định kinh doanh sáng suốt.",
        "Tối ưu hóa quy trình: Xử lý dữ liệu giúp tự động hóa các công việc lặp đi lặp lại, tiết kiệm thời gian và nhân lực.",
        "Cải thiện trải nghiệm khách hàng: Hiểu rõ hành vi của khách hàng giúp doanh nghiệp cung cấp sản phẩm/dịch vụ phù hợp.",
        "Phát hiện cơ hội kinh doanh: Phân tích dữ liệu giúp tìm ra những xu hướng mới, phát hiện các cơ hội kinh doanh tiềm năng."
      ],
      mission: [
        "Trích xuất dữ liệu: Lấy dữ liệu từ các nguồn khác nhau và đưa vào hệ thống.",
        "Nhập liệu: Nhập dữ liệu thủ công hoặc tự động từ các tài liệu giấy, bảng tính,…",
        "Tạo cơ sở dữ liệu: Thiết kế và xây dựng cơ sở dữ liệu để lưu trữ thông tin.",
        "Chỉnh sửa dữ liệu: Sửa chữa, cập nhật và làm sạch dữ liệu.",
        "Phân tích dữ liệu: Sử dụng các công cụ như Excel, SQL, Python, R,… để phân tích dữ liệu.",
        "Trực quan hóa dữ liệu: Biểu diễn dữ liệu dưới dạng biểu đồ, đồ thị để dễ hiểu."
      ],
    }
  },
  "digital-transformation": {
    title: "Dịch vụ chuyển đổi số",
    subTitle_1: "Tổng quan",
    subTitle_2: "Quy trình thực hiện",
    subTitle_3: "Lợi ích mang lại",
    subTitle_4: "Các công nghệ cốt lõi trong chuyển đổi số",
    subTitle_5: "",
    description: "Đồng hành cùng doanh nghiệp trong hành trình số hóa",
    image: "/images/services/chuyendoiso.jpg",
    content: {
      overview: "Chuyển đổi số không chỉ là một xu hướng mà còn là một cuộc cách mạng đang diễn ra mạnh mẽ. Đó là quá trình doanh nghiệp ứng dụng công nghệ số vào mọi hoạt động, từ sản xuất, kinh doanh đến quản lý, nhằm nâng cao hiệu quả, tạo ra giá trị mới và thích ứng với sự thay đổi không ngừng của thị trường. Chuyển đổi số là một quá trình kéo dài, đòi hỏi sự đầu tư và cam kết từ toàn bộ tổ chức. Tuy nhiên, những lợi ích mà nó mang lại là vô cùng to lớn. Nếu doanh nghiệp muốn tồn tại và phát triển trong thời đại số, việc chuyển đổi số là điều tất yếu.",
      process: [
        "Xác định mục tiêu: Xác định rõ mục tiêu muốn đạt được sau khi chuyển đổi số.",
        "Đánh giá hiện trạng: Đánh giá toàn diện các quy trình, hệ thống hiện tại.",
        "Lựa chọn giải pháp: Chọn các giải pháp công nghệ phù hợp với nhu cầu và ngân sách.",
        "Triển khai: Thực hiện triển khai các giải pháp đã chọn.",
        "Đánh giá và cải tiến: Đánh giá hiệu quả của quá trình chuyển đổi và liên tục cải tiến."
      ],
      benefits: [
        "Giảm thiểu lỗi sai, tiết kiệm thời gian và nhân lực.",
        "Phân tích dữ liệu: Đưa ra quyết định chính xác dựa trên số liệu thực tế.",
        "Cải thiện trải nghiệm khách hàng: Tương tác với khách hàng nhanh chóng, cá nhân hóa.",
        "Tiếp cận khách hàng mới: Xây dựng kênh bán hàng trực tuyến, tiếp cận khách hàng toàn cầu.",
        "Tăng cường khả năng cạnh tranh: Đưa ra sản phẩm, dịch vụ mới, độc đáo.",
        "Linh hoạt trước sự thay đổi: Nhanh chóng thích ứng với các biến động của thị trường.",
        "Đổi mới sáng tạo: Khuyến khích nhân viên sáng tạo và đưa ra những ý tưởng mới.",
        "Tối ưu hóa quy trình: Loại bỏ các công đoạn không cần thiết.",
        "Quản lý tài sản hiệu quả: Giảm thiểu lãng phí."
      ],
      purpose: [
        "Dữ liệu lớn (Big Data): Thu thập, lưu trữ và phân tích lượng lớn dữ liệu để tìm ra xu hướng, dự đoán tương lai.",
        "Trí tuệ nhân tạo (AI): Tự động hóa các tác vụ, đưa ra quyết định thông minh.",
        "Internet vạn vật (IoT): Kết nối các thiết bị, thu thập dữ liệu và điều khiển từ xa.",
        "Điện toán đám mây (Cloud Computing): Lưu trữ và xử lý dữ liệu trên nền tảng đám mây, linh hoạt và tiết kiệm chi phí."
      ],
      mission: [],
    }
  },
  "document-management": {
    title: "Dịch vụ chỉnh lý hồ sơ tài liệu",
    subTitle_1: "Tổng quan",
    subTitle_2: "Lý do nên chọn dịch vụ chỉnh lý của TNT?",
    subTitle_3: "Lợi ích khi sử dụng dịch vụ chỉnh lý tài liệu",
    subTitle_4: "Chỉnh lý tài liệu là gì?",
    subTitle_5: "",
    description: "Quản lý và tổ chức hồ sơ tài liệu chuyên nghiệp",
    image: "/images/services/chinhlyhosotailieu.jpg",
    content: {
      overview: "Dịch vụ chỉnh lý hồ sơ tài liệu là giải pháp tối ưu cho doanh nghiệp giúp tổ chức và quản lý hồ sơ một cách hiệu quả, đảm bảo tuân thủ quy định và dễ dàng truy xuất khi cần thiết.",
      process: [
        "Tiết kiệm thời gian và chi phí: Chúng tôi sẽ giúp bạn giảm thiểu thời gian và nhân lực dành cho việc quản lý tài liệu giấy tờ.",
        "Tăng tính bảo mật: Tài liệu của bạn sẽ được bảo mật tuyệt đối với hệ thống lưu trữ an toàn.",
        "Dễ dàng tìm kiếm và quản lý: Với công cụ tìm kiếm thông minh, bạn có thể dễ dàng tìm thấy bất kỳ tài liệu nào chỉ với vài cú click chuột.",
        "Tuân thủ quy định pháp luật: Quá trình chỉnh lý được thực hiện theo đúng quy định của Luật Văn thư Lưu trữ."
      ],
      benefits: [
        "Nâng cao hiệu quả làm việc: Quy trình làm việc trở nên nhanh chóng và chính xác hơn.",
        "Tối ưu hóa không gian làm việc: Giảm thiểu lượng giấy tờ, tiết kiệm không gian lưu trữ.",
        "Tăng cường tính chuyên nghiệp: Hình ảnh doanh nghiệp trở nên chuyên nghiệp hơn trong mắt đối tác và khách hàng.",
        "Đảm bảo tính liên tục của hoạt động kinh doanh: Ngăn ngừa rủi ro mất mát thông tin quan trọng."
      ],
      purpose: [
        "Chỉnh lý tài liệu là quá trình sắp xếp, phân loại, số hóa và lập danh mục các hồ sơ, tài liệu giấy tờ theo một hệ thống khoa học, giúp bạn dễ dàng quản lý và tìm kiếm thông tin.",
        "Đây là một công việc quan trọng trong công tác lưu trữ, đặc biệt ở các doanh nghiệp, cơ quan, tổ chức nhà nước."
      ],
      mission: [],
    },

  },
  "it-consulting": {
    title: "Dịch vụ tư vấn dự án công nghệ thông tin",
    subTitle_1: "Tổng quan",
    subTitle_2: "Các dịch vụ chính",
    subTitle_3: "Lợi ích khách hàng",
    subTitle_4: "Thế mạnh của TNT?",
    subTitle_5: "Lợi ích khi sử dụng dịch vụ",
    description: "Tư vấn và triển khai giải pháp CNTT",
    image: "/images/services/dichvutuvancongnghethongtin.jpg",
    content: {
      overview: "Dịch vụ tư vấn dự án công nghệ thông tin của TNT được thiết kế để cung cấp cho khách hàng những giải pháp toàn diện, từ tư vấn chiến lược đến triển khai và vận hành, tuỳ theo nhu cầu của mỗi doanh nghiệp.",
      process: [
        "Tư vấn chiến lược CNTT: Xây dựng chiến lược công nghệ phù hợp với mục tiêu kinh doanh của doanh nghiệp.",
        "Thiết kế kiến trúc hệ thống: Lập kế hoạch và thiết kế hệ thống CNTT hiệu quả, mở rộng.",
        "Triển khai dự án: Quản lý và thực hiện các dự án công nghệ một cách chuyên nghiệp.",
        "Vận hành và bảo trì: Đảm bảo hệ thống hoạt động ổn định và hiệu quả."
      ],
      benefits: [
        "Nâng cao hiệu quả: Tối ưu hóa quy trình làm việc, giảm thiểu chi phí.",
        "Tăng cường năng lực cạnh tranh: Đưa ra thị trường các sản phẩm, dịch vụ mới.",
        "Cải thiện trải nghiệm khách hàng: Tạo ra các dịch vụ khách hàng nhanh chóng và tiện lợi.",
        "Chúng tôi cam kết đồng hành cùng quý khách hàng trên hành trình chuyển đổi số, giúp doanh nghiệp đạt được những mục tiêu đề ra."
      ],
      purpose: [
        "Với hơn 4 kinh nghiệm, đội ngũ chuyên gia của chúng tôi sẽ tư vấn và hỗ trợ bạn xây dựng chiến lược công nghệ phù hợp.",
        "Từ tư vấn, thiết kế đến triển khai và vận hành, chúng tôi cung cấp các giải pháp trọn gói.",
        "Công nghệ hiện đại: Chúng tôi ứng dụng các công nghệ mới nhất như AI, Big Data, IoT để tạo ra những giá trị vượt trội."
      ],
      mission: [
        "Chiến lược và thực thi: “Kết hợp hài hòa giữa chiến lược kinh doanh và công nghệ, chúng tôi giúp doanh nghiệp xác định rõ mục tiêu, xây dựng lộ trình chuyển đổi số hiệu quả và triển khai các dự án một cách nhanh chóng, chính xác.”",
        "Tối ưu hóa chi phí: “Chúng tôi có thể giúp doanh nghiệp tối ưu hóa chi phí đầu tư, tránh lãng phí và nâng cao hiệu quả sử dụng tài nguyên.”",
        "Chuyên môn cao: “Đội ngũ chuyên gia của chúng tôi sở hữu kiến thức sâu rộng về các công nghệ mới nhất, cùng với kinh nghiệm thực tế trong nhiều lĩnh vực, đảm bảo mang đến những giải pháp tối ưu cho từng khách hàng.”",
        "An toàn bảo mật: “Chúng tôi cam kết bảo mật thông tin khách hàng và tuân thủ các tiêu chuẩn bảo mật nghiêm ngặt nhất.”"
      ],
    }
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
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">{service.subTitle_1}</h2>
              <p className="text-gray-700">{service.content.overview}</p>
            </div>

            {service.subTitle_4 && <div>
              <h2 className="text-2xl font-semibold mb-4">{service.subTitle_4}</h2>
              <ol className="list-decimal pl-5 space-y-2">
                {service.content.purpose.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>}

            {service.subTitle_5 && <div>
              <h2 className="text-2xl font-semibold mb-4">{service.subTitle_5}</h2>
              <ol className="list-decimal pl-5 space-y-2">
                {service.content.mission.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>}

            <div>
              <h2 className="text-2xl font-semibold mb-4">{service.subTitle_2}</h2>
              <ol className="list-decimal pl-5 space-y-2">
                {service.content.process.map((step, index) => (
                  <li key={index} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">{service.subTitle_3}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {service.content.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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