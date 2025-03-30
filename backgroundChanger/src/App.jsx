import { useState } from "react";

const colorsObj = {
  Red: { hexCode: "#FF0000", textColor: "#FFFFFF" }, // White text on red
  Green: { hexCode: "#008000", textColor: "#FFFFFF" }, // White text on green
  Blue: { hexCode: "#0000FF", textColor: "#FFFFFF" }, // White text on blue
  Olive: { hexCode: "#808000", textColor: "#FFFFFF" }, // White text on olive
  Gray: { hexCode: "#808080", textColor: "#FFFFFF" }, // White text on gray
  Yellow: { hexCode: "#FFFF00", textColor: "#000000" }, // Black text on yellow
  Pink: { hexCode: "#FFC0CB", textColor: "#000000" }, // Black text on pink
  Purple: { hexCode: "#800080", textColor: "#FFFFFF" }, // White text on purple
  Lavender: { hexCode: "#E6E6FA", textColor: "#000000" }, // Black text on lavender
  White: { hexCode: "#FFFFFF", textColor: "#000000" }, // Black text on white
  Black: { hexCode: "#000000", textColor: "#FFFFFF" }, // White text on black
};

function App() {
  const validColors = Object.entries(colorsObj);

  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <div className="fixed bottom-12 inset-x-0 px-2 flex flex-wrap justify-center">
        <div
          className="flex justify-around p-4 gap-3 border bg-white border-solid rounded-2xl"
          style={{ borderColor: bgColor }}
        >
          {validColors != null && validColors.length > 0 ? (
            <>
              {validColors.map(([colorName, hexCodeProp]) => {
                return (
                  <div
                    key={hexCodeProp.hexCode}
                    className="py-1 px-4 rounded-2xl shadow-md cursor-pointer"
                    style={{
                      backgroundColor: hexCodeProp.hexCode,
                      color: hexCodeProp.textColor,
                    }}
                    onClick={() => setBgColor(hexCodeProp.hexCode)}
                  >
                    {colorName}
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
