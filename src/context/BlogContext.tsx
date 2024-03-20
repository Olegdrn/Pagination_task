import React, { useState, createContext } from "react";

interface BlogContextType {
  scrollAmount: number;
  postAmount: number;
  setScrollAmount: React.Dispatch<React.SetStateAction<number>>;
  setPostAmount: React.Dispatch<React.SetStateAction<number>>;
}

interface BlogContextProviderType {
  children: React.ReactNode;
}

export const BlogContext = createContext({} as BlogContextType);

export const BlogContextProvider = ({ children }: BlogContextProviderType) => {
  const [scrollAmount, setScrollAmount] = useState<number>(0);
  const [postAmount, setPostAmount] = useState<number>(10);

  return (
    <BlogContext.Provider
      value={{ scrollAmount, postAmount, setScrollAmount, setPostAmount }}
    >
      {children}
    </BlogContext.Provider>
  );
};
