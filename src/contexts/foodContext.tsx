import React, { createContext, useContext, useState } from "react";

type FoodCardProps = {
  name: string;
  rating: number;
  description: string;
  image: string;
  id: number;
};

type FoodContextType = {
  food: FoodCardProps | undefined;
  SetFood: React.Dispatch<React.SetStateAction<FoodCardProps | undefined>>;
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
};

type FoodProviderProps = {
  children: React.ReactNode;
};
const FoodContext = createContext<FoodContextType | undefined>(undefined);

export const FoodProvider: React.FC<FoodProviderProps> = ({ children }) => {
  const [food, SetFood] = useState<FoodCardProps | undefined>(undefined);
  const [click, setClick] = useState<boolean>(false);
  console.log(food);
  console.log(click);

  return (
    <FoodContext.Provider value={{ food, SetFood, setClick, click }}>
      {children}
    </FoodContext.Provider>
  );
};

export const useFoodContext = () => {
  const context = useContext(FoodContext);
  if (context === undefined) {
    throw new Error("useFoodContext must be used within a FoodProvider");
  }
  return context;
};
