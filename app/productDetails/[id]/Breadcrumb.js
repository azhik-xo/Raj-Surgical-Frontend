import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

export default function Breadcrumb({ category, productName }) {
  return (
    
    <div className="bg-white border-b">
      <div className={`${inter.className} max-w-7xl mx-auto px-4 py-4 text-sm text-gray-400`}>
        <p>Home / {category} / <span className="text-black">{productName} </span> </p>
      </div>
    </div>
  );
}