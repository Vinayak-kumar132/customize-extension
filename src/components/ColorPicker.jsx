
export default function ColorPicker({ selectedColor, setSelectedColor, title }) {
  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="mt-6 p-4 rounded-2xl shadow-lg bg-white w-full max-w-sm">
      <label className="block text-lg font-semibold mb-2 text-gray-700">{title}</label>
      <div className="flex items-center gap-4">
        <input
          type="color"
          value={selectedColor}
          onChange={handleColorChange}
          className="w-12 h-12 border-2 border-gray-300 rounded-lg cursor-pointer transition-transform hover:scale-105"
        />
        <div className="flex items-center gap-2">
          <span
            className="w-6 h-6 rounded-full border border-gray-400"
            style={{ backgroundColor: selectedColor }}
          ></span>
          <span className="text-md font-medium text-gray-800">{selectedColor}</span>
        </div>
      </div>
    </div>
  );
}
