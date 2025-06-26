// pages/products/[id].js
import { useRouter } from 'next/router';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* 3D Viewer Placeholder */}
        <div className="w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
          <p className="text-gray-500">3D Model Viewer Here</p>
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-light">Tailored Blazer</h1>
          <p className="text-xl mt-2">$299</p>

          <div className="mt-4">
            <label className="block mb-2">Color</label>
            <select className="border border-gray-300 rounded px-3 py-2 w-full">
              <option>Black</option>
              <option>White</option>
              <option>Beige</option>
            </select>
          </div>

          <div className="mt-6 flex space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
