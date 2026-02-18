"use client";

export default function Filters({
  categories = [],
  productNames = [],
  selectedCategories = [],
  selectedProductNames = [],
  onChange,
}) {
  const update = (patch) => onChange?.(patch);

  const handleCategoryToggle = (cat) => {
    const exists = selectedCategories.includes(cat);
    const next = exists
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    update({ selectedCategories: next });
  };

  const handleProductNameToggle = (name) => {
    const exists = selectedProductNames.includes(name);
    const next = exists
      ? selectedProductNames.filter((c) => c !== name)
      : [...selectedProductNames, name];
    update({ selectedProductNames: next });
  };

  return (
    <aside className="w-full sm:w-64 shrink-0">
      <div className="sm:sticky sm:top-20 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Categories</h3>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat} className="flex items-center gap-2">
                <input
                  id={`cat-${cat}`}
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryToggle(cat)}
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor={`cat-${cat}`} className="text-sm text-gray-700">
                  {cat}
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 mb-2">Product Name</h3>
          <ul className="space-y-2">
            {productNames.map((name) => (
              <li key={name} className="flex items-center gap-2">
                <input
                  id={`product-${name}`}
                  type="checkbox"
                  checked={selectedProductNames.includes(name)}
                  onChange={() => handleProductNameToggle(name)}
                  className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
                />
                <label htmlFor={`product-${name}`} className="text-sm text-gray-700">
                  {name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
