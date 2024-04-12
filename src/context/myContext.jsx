import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const Contexto = createContext();

export default function UsoContexto({ children }) {
const [like, setLike] = useState('false')

  return <Contexto.Provider value={{like, setLike}}>{children}</Contexto.Provider>;
}
