import React from "react";
import { useState } from "react";
import Nav from "./Nav";

export default function About({ selectedScreen, setSelectedScreen }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bgColor = isDarkMode ? "bg-gray-800" : "bg-white";
  const textColor = isDarkMode ? "text-white" : "text-gray-800";

  const handleModeChange = () => {
    setIsDarkMode((prevState) => !prevState);
  };

  return (
    <div>
      <div className={`min-h-screen ${bgColor} ${textColor}`}>
        <header className={`py-4 ${textColor}`}>
          <div className='container mx-auto flex justify-between items-center px-4'>
            <Nav
              selectedScreen={selectedScreen}
              setSelectedScreen={setSelectedScreen}
            />
          </div>
        </header>
      </div>
    </div>
  );
}
