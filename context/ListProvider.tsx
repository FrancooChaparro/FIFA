"use client";
import React, { useState, FC, ReactNode } from "react";
import MyContext, { MyContextType } from "./ListContext";

interface MyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<MyProviderProps> = ({ children }) => {
  const [FrancoBombo, setFrancoBombo] = useState<any>([]);
  const [MarcosBombo, setMarcosBombo] = useState<any>([]);
  const [GastonBombo, setGastonBombo] = useState<any>([]);
  const [GastonCopy, setGastonCopy] = useState<any>([]);
  const [FrancoCopy, setFrancoCopy] = useState<any>([]);
  const [MarcosCopy, setMarcosCopy] = useState<any>([]);


const Franco = (newValue: any[]) => {
setFrancoCopy(newValue);
 let array = newValue
const nombrePersona = "/images/fra.jpg";
array.forEach((equipo: any) => {
  equipo.persona = nombrePersona;
});
setFrancoBombo(array);
  };

  

  const Gaston = (newValue: any[]) => {
setGastonCopy(newValue);

    let array = newValue
const nombrePersona = "/images/Flaki.jpg";
array.forEach((equipo: any) => {
  equipo.persona = nombrePersona;
});
setGastonBombo(array);
  };
  const Marcos = (newValue: any[]) => {
setMarcosCopy(newValue);

    let array = newValue
    const nombrePersona = "/images/Marcos.jpg";
    array.forEach((equipo: any) => {
      equipo.persona = nombrePersona;
    });
    setMarcosBombo(array);
  };
  const contextValue: MyContextType = {
  Franco,
  Gaston,
  Marcos,
  FrancoBombo,
  GastonBombo,
  MarcosBombo,
  FrancoCopy,
  GastonCopy,
  MarcosCopy,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;



