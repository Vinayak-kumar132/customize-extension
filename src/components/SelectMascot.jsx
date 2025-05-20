// import React, { useState } from "react";

// import dragon_red from "../assets/dragon_red.PNG";
// import dragon_violet from "../assets/dragon_violet.PNG";
// import dragon_blue from "../assets/dragon_blue.PNG";
// import dragon_brown from "../assets/dragon_brown.PNG";
// import dragon_green from "../assets/dragon_green.PNG";
// import dragon_orange from "../assets/dragon_orange.PNG";
// import dragon_white from "../assets/dragon_white.PNG";

// // Assets array
// const mascots = [
//     { name: "Red", src: dragon_red },
//     { name: "Violet", src: dragon_violet },
//     { name: "Blue", src: dragon_blue },
//     { name: "Brown", src: dragon_brown },
//     { name: "Green", src: dragon_green },
//     { name: "Orange", src: dragon_orange },
//     { name: "White", src: dragon_white },
// ];

// export default function SelectMascot({setSelectedName}) {
//     const [selectedMascot, setSelectedMascot] = useState(dragon_white);
//     const [selectedName, setSelectedName] = useState(""); // Initially no dropdown option is selected

//     function handleChange(e) {
//         const selected = e.target.value;
//         setSelectedName(selected);

//         const mascot = mascots.find((m) => m.name === selected);
//         if (mascot) {
//             setSelectedMascot(mascot.src);
//         }
//     }

//     return (
//         <div className="flex gap-6 items-center">
//             <div>
//                 <img src={selectedMascot} alt="Selected Mascot" className="w-[160px] bg-black rounded-full p-2" />
//             </div>

            
//             <div className="w-full">
//                 <label className="block mb-2 text-sm font-medium text-gray-700">
//                     Choose Mascot Color
//                 </label>
//                 <select
//                     name="mascotColor"
//                     onChange={handleChange}
//                     value={selectedName}
//                     className="w-full px-4 py-3 text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
//                 >
//                     <option value="" disabled>Select your Color</option>
//                     {mascots.map((m) => (
//                         <option key={m.name} value={m.name}>
//                             {m.name}
//                         </option>
//                     ))}
//                 </select>
//             </div>

//         </div>
//     );
// }


import React, { useState } from "react";

import dragon_red from "../assets/dragon_red.PNG";
import dragon_violet from "../assets/dragon_violet.PNG";
import dragon_blue from "../assets/dragon_blue.PNG";
import dragon_brown from "../assets/dragon_brown.PNG";
import dragon_green from "../assets/dragon_green.PNG";
import dragon_orange from "../assets/dragon_orange.PNG";
import dragon_white from "../assets/dragon_white.PNG";

const mascots = [
  { name: "Red", src: dragon_red },
  { name: "Violet", src: dragon_violet },
  { name: "Blue", src: dragon_blue },
  { name: "Brown", src: dragon_brown },
  { name: "Green", src: dragon_green },
  { name: "Orange", src: dragon_orange },
  { name: "White", src: dragon_white },
];

export default function SelectMascot({ setSelectedName }) {
  const [selectedMascot, setSelectedMascot] = useState(dragon_white);
  const [localSelectedName, setLocalSelectedName] = useState("");

  function handleChange(e) {
    const selected = e.target.value;
    setLocalSelectedName(selected);   // local state for UI
    setSelectedName(selected);        // send selected name up to App

    const mascot = mascots.find((m) => m.name === selected);
    if (mascot) {
      setSelectedMascot(mascot.src);
    }
  }

  return (
    <div className="flex gap-6 items-center">
      {/* <div>
        <img
          src={selectedMascot}
          alt="Selected Mascot"
          className="w-[160px] bg-black rounded-full p-2 shadow-black shadow-lg"
        />
      </div> */}

      <div className="w-full">
        <label className="block mb-4 text-lg font-semibold text-gray-700">
          Choose Mascot Color
        </label>
        <select
          name="mascotColor"
          onChange={handleChange}
          value={localSelectedName}
          className="w-full px-4 py-3 text-base text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-200"
        >
          <option value="" disabled>Select your Color</option>
          {mascots.map((m) => (
            <option key={m.name} value={m.name}>
              {m.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
