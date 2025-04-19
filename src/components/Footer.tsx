import Link from 'next/link';
import { theme } from "@/config/theme";

const Footer = () => {
  return (
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
          <p>&copy; {new Date().getFullYear()} TNTTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 