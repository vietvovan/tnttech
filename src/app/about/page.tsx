import { theme } from "@/config/theme";

export default function About() {
  return (
    <div className="space-y-16">
      <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6" style={{ color: theme.colors.primary }}>
              Về chúng tôi
            </h1>
            <p className="text-xl text-gray-600">
              Chúng tôi là đơn vị tiên phong trong lĩnh vực chuyển đổi số và cung cấp giải pháp công nghệ
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                Lịch sử hình thành
              </h2>
              <p className="text-gray-600 mb-4">
                Công ty chúng tôi được thành lập vào năm 2010, với sứ mệnh mang đến những giải pháp công nghệ
                tiên tiến cho doanh nghiệp Việt Nam. Trải qua hơn 10 năm phát triển, chúng tôi đã trở thành
                một trong những đơn vị hàng đầu trong lĩnh vực chuyển đổi số.
              </p>
              <p className="text-gray-600">
                Từ một công ty nhỏ với 5 nhân viên, đến nay chúng tôi đã có hơn 200 nhân viên và văn phòng
                tại 3 thành phố lớn: Hà Nội, Đà Nẵng và TP.HCM.
              </p>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg"></div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                Sứ mệnh
              </h2>
              <p className="text-gray-600">
                Chúng tôi cam kết mang đến những giải pháp công nghệ hiện đại, giúp doanh nghiệp tối ưu hóa
                quy trình làm việc, nâng cao hiệu suất và tăng trưởng bền vững.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: theme.colors.primary }}>
                Tầm nhìn
              </h2>
              <p className="text-gray-600">
                Trở thành đơn vị dẫn đầu trong lĩnh vực chuyển đổi số tại Việt Nam, đồng hành cùng doanh
                nghiệp trong hành trình số hóa và phát triển bền vững.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.colors.primary }}>
            Triết lý kinh doanh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Chất lượng</h3>
              <p className="text-gray-600">Cam kết mang đến những sản phẩm và dịch vụ chất lượng cao nhất</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Đồng hành</h3>
              <p className="text-gray-600">Luôn đồng hành cùng khách hàng trong mọi giai đoạn phát triển</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: theme.colors.primary }}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Đổi mới</h3>
              <p className="text-gray-600">Không ngừng đổi mới và cải tiến để mang đến giá trị tốt nhất</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: theme.colors.primary }}>
            Văn hóa doanh nghiệp
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Giá trị cốt lõi</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Chuyên nghiệp trong công việc</li>
                <li>• Sáng tạo trong giải pháp</li>
                <li>• Tận tâm trong phục vụ</li>
                <li>• Đoàn kết trong tập thể</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Môi trường làm việc</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Môi trường năng động</li>
                <li>• Cơ hội phát triển</li>
                <li>• Chế độ đãi ngộ tốt</li>
                <li>• Cân bằng cuộc sống</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 