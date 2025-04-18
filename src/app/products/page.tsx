import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Sản phẩm 1",
    description: "Mô tả chi tiết về sản phẩm 1",
    image: "/product1.jpg",
    price: "1,000,000 VNĐ",
  },
  {
    id: 2,
    name: "Sản phẩm 2",
    description: "Mô tả chi tiết về sản phẩm 2",
    image: "/product2.jpg",
    price: "2,000,000 VNĐ",
  },
  {
    id: 3,
    name: "Sản phẩm 3",
    description: "Mô tả chi tiết về sản phẩm 3",
    image: "/product3.jpg",
    price: "3,000,000 VNĐ",
  },
];

export default function Products() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sản phẩm của chúng tôi</h1>
        <p className="text-xl text-gray-600">
          Khám phá các sản phẩm chất lượng cao của chúng tôi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-bold">{product.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Chi tiết
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 