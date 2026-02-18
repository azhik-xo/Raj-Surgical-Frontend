export default function ProductSpecifications({ specifications }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Specifications</h2>
      <div className="space-y-3">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="flex justify-between border-b pb-2">
            <span className="text-gray-700 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
            <span className="text-gray-900 font-medium">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
