"use client";

import { theme } from "@/config/theme";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Gửi tin nhắn thành công! Chúng tôi sẽ liên hệ lại sớm.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Có lỗi xảy ra khi gửi tin nhắn",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Có lỗi xảy ra khi gửi tin nhắn",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4" style={{ color: theme.colors.primary }}>
          Liên hệ với chúng tôi
        </h1>
        <p className="text-xl text-gray-600">
          Hãy để lại thông tin, chúng tôi sẽ liên hệ lại với bạn sớm nhất
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.primary }}>
              Thông tin liên hệ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Tên công ty</h3>
                <p className="text-gray-600">CÔNG TY CỔ PHẦN XÂY DỰNG VÀ PHÁT TRIỂN CÔNG NGHỆ TNT</p>
              </div>
              <div>
                <h3 className="font-medium">Tên viết tắt</h3>
                <p className="text-gray-600">TNTG.,JSC</p>
              </div>
              <div>
                <h3 className="font-medium">Mã số DN</h3>
                <p className="text-gray-600">0109431558</p>
              </div>
              <div>
                <h3 className="font-medium">Địa chỉ</h3>
                <p className="text-gray-600">Số 7B1, ngách 79/6 đường Dương Quảng Hàm, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam.</p>
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">info.tnttech@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium">Điện thoại</h3>
                <p className="text-gray-600">(84) 123-456-789</p>
              </div>
              <div>
                <h3 className="font-medium">Giờ làm việc</h3>
                <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.9431276742202!2d105.796196476902!3d21.034961487562406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab475afd74af%3A0x2b0302f7070b612c!2zTmcuIDc5IFAuIMSQLiBRdeG6o25nIEjDoG0sIFF1YW4gSG9hLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2sus!4v1745069903057!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6" style={{ color: theme.colors.primary }}>
            Điền thông tin và liên hệ với chúng tôi
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                placeholder="Nhập họ và tên"
                onChange={handleChange}
                className="h-[50px] mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md hover:border-blue-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                placeholder="Nhập email"
                onChange={handleChange}
                className="mt-1 h-[50px] p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Số điện thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                placeholder="Nhập số điện thoại"
                onChange={handleChange}
                className="mt-1 h-[50px] p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Nội dung tin nhắn <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                value={formData.message}
                placeholder="Nhập nội dung tin nhắn"
                onChange={handleChange}
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {status.type && (
              <div
                className={`p-4 rounded-md ${status.type === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
                  }`}
              >
                {status.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center h-[46px] py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 cursor-pointer hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}