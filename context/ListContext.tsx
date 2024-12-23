"use client"
import { createContext, useContext } from 'react';

export type MyContextType = {
  Franco: (newValue: any[]) => void;
  Gaston: (newValue: any[]) => void;
  Marcos: (newValue: any[]) => void;
  FrancoBombo: any[] | [];
  GastonBombo: any[] | [];
  MarcosBombo: any[] | [];
  FrancoCopy: any[] | [];
  GastonCopy: any[] | [];
  MarcosCopy: any[] | [];

  Roma: (newValue: any[]) => void;
  RomaBombo: any[] | [];
  RomaCopy: any[] | [];
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export default MyContext;