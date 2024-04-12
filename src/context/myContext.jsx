import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";

export const Contexto = createContext();

export default function UsoContexto({ children }) {

    const [datos, setDatos]= useState([])



    const getData = async()=>{
        const response = await fetch("../public/photos.json")
        const data = await response.json()
        setDatos(data.photos)
    }

    useEffect(()=>{
        getData()
    },[])


  return <Contexto.Provider value={{datos, setDatos}}>{children}</Contexto.Provider>;
}
