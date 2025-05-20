import SampleExtension from "./components/SampleExtension";
import SelectMascot from "./components/SelectMascot";
import Module from "./components/Module";
import ColorPicker from "./components/ColorPicker";
import { useState } from "react";
import toast from 'react-hot-toast';

import dragon_red from "./assets/dragon_red.png";
import dragon_violet from "./assets/dragon_violet.png";
import dragon_blue from "./assets/dragon_blue.png";
import dragon_brown from "./assets/dragon_brown.png";
import dragon_green from "./assets/dragon_green.png";
import dragon_orange from "./assets/dragon_orange.png";
import dragon_white from "./assets/dragon_white.png";

const mascotImages = {
  Red: dragon_red,
  Violet: dragon_violet,
  Blue: dragon_blue,
  Brown: dragon_brown,
  Green: dragon_green,
  Orange: dragon_orange,
  White: dragon_white,
};

function App() {
  const [modules, setModules] = useState([]);
  const [selectedOuterColor, setSelectedOuterColor] = useState("#101014");
  const [selectedInnerColor, setSelectedInnerColor] = useState("#1e1e2f");
  const [selectedMascotName, setSelectedMascotName] = useState("White");


const handleSubmit = async (e) => {
  e.preventDefault();

  
  const params = new URLSearchParams(window.location.search);
  const extension_uid = params.get('uid');

  if (!extension_uid) {
    toast.error('Extension UID not found in URL');
    return;
  }

  const collectedData = {
    uid: extension_uid,
    mascot: selectedMascotName,
    modules: modules,
    Outer_shell_colour: selectedOuterColor,
    Inner_shell_colour: selectedInnerColor,
  };

  try {
    const response = await fetch(`http://localhost:3000/api/custom-extension/customize`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collectedData),
    });

    const result = await response.json();

    if (!response.ok) {
      if (response.status === 400 && result.message === 'No fields to update') {
        toast.error('No changes detected to update.');
      } else if (response.status === 404 && result.message === 'User not found') {
        toast.error('User not found in database.');
      } else {
        toast.error(result.message || 'Failed to update extension settings');
      }
      return;
    }

    toast.success('Your Extension Updated Successfully');
  } catch (error) {
    console.error('Update failed:', error);
    toast.error('Something went wrong while updating.');
  }
};




  return (
    <div className="mx-auto bg-gradient-to-b from-[#dbdbdb] via-[#b0b0b0] to-[#8c8c8c] min-h-screen">
      <div className="mx-auto ">


        <h1 className="flex items-center justify-center text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-500 to-indigo-700  bg-clip-text text-transparent drop-shadow-lg p-1 font-grechen select-none">
          Customize Your Extension
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center p-3 gap-16 ">
          <div className="w-[500px]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              <SelectMascot setSelectedName={setSelectedMascotName} />

              <Module selectedModules={modules} setSelectedModules={setModules} />

              <div className="flex gap-6">
                <ColorPicker
                  selectedColor={selectedOuterColor}
                  setSelectedColor={setSelectedOuterColor}
                  title="Outer Shell Color"
                />
                <ColorPicker
                  selectedColor={selectedInnerColor}
                  setSelectedColor={setSelectedInnerColor}
                  title="Inner Shell Color"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition-all w-full font-semibold hover:shadow-2xl hover:shadow-black"
                >
                  Update
                </button>


              </div>
            </form>
          </div>

          <div className="">

            <SampleExtension
              outerColor={selectedOuterColor}
              innerColor={selectedInnerColor}
              mascotImage={mascotImages[selectedMascotName]}
            />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
