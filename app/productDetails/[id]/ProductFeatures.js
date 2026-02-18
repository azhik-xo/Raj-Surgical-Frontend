export default function ProductFeatures({ features }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-green-600 font-bold text-lg mt-0.5">✓</span>
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
