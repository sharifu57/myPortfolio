import React, { createContext, useState, useEffect } from 'react';

export const ColorModeContext = createContext();


export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState(()=> localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
    }
  }, []);

  useEffect(() => {
    console.log("======this theme:", mode)
    localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <ColorModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
