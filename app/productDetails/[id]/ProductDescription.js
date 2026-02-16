export default function ProductDescription({ longDescription }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Information</h2>
      <p className="text-gray-700 leading-relaxed">{longDescription}</p>
    </div>
  );
}
