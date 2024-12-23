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

  const [RomaBombo, setRomaBombo] = useState<any>([]);
  const [RomaCopy, setRomaCopy] = useState<any>([]);


  const Franco = (newValue: any[]) => {
    setFrancoCopy(newValue);
    setFrancoBombo(newValue);
  };

  const Gaston = (newValue: any[]) => {
    setGastonCopy(newValue);
    setGastonBombo(newValue);
  };

  const Marcos = (newValue: any[]) => {
    setMarcosCopy(newValue);
    setMarcosBombo(newValue);
  };
  
  const Roma = (newValue: any[]) => {
    setRomaCopy(newValue);
    setRomaBombo(newValue);
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

    Roma, 
    RomaBombo,
    RomaCopy
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
