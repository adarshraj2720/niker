import React from "react"

import { Route, Switch } from "react-router-dom"

import Header from "./Header"
import Category from "./Category"
import Age from "./Age"
import Allproduct from "./Allproduct"
import Filter from "./Filter"



function App(){
    return(
        <>
        <Header/>
        <Category/>
        <Age/>
        <Allproduct/>
        <Filter/>
        </>
    )
}

export default App