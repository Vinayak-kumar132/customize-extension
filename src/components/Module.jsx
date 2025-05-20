// import React from "react";

// const availableModules = ["sniper", "bundle", "tracker", "booster"];

// export default function Module({ selectedModules = [], setSelectedModules }) {
//   const handleChange = (e) => {
//     const { value, checked } = e.target;
//     if (checked) {
//       setSelectedModules([...selectedModules, value]);
//     } else {
//       setSelectedModules(selectedModules.filter((mod) => mod !== value));
//     }
//   };

//   return (
//     <div className="mt-4">
//       <label className="font-semibold text-2xl">Select Modules:</label>
//       {availableModules.map((module) => (
//         <div key={module}>
//           <label className="flex gap-1">
//             <input
//               type="checkbox"
//               value={module}
//               checked={selectedModules.includes(module)}
//               onChange={handleChange}
//               className="mr-2"
//             />
//             {module}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// }




const availableModules = ["sniper", "bundle", "tracker", "booster"];

export default function Module({ selectedModules = [], setSelectedModules }) {
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedModules([...selectedModules, value]);
    } else {
      setSelectedModules(selectedModules.filter((mod) => mod !== value));
    }
  };

  return (
    <div className="mt-6 w-full ">
      <label className="block text-lg font-semibold text-gray-800 mb-4">
        Select Modules
      </label>
      <div className="space-y-3 bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
        {availableModules.map((module) => (
          <label
            key={module}
            className="flex items-center gap-3 text-base text-gray-700 cursor-pointer hover:text-blue-600 transition-all"
          >
            <input
              type="checkbox"
              value={module}
              checked={selectedModules.includes(module)}
              onChange={handleChange}
              className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            {module.charAt(0).toUpperCase() + module.slice(1)}
          </label>
        ))}
      </div>
    </div>
  );
}
