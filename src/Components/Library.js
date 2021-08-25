import Navbar from './Navbar'
import React, { useState } from 'react'
import indexapi from './api'
import './Library.css'
import Cardcomponent from './Cardcomponent'
const uniqueList=[ ...new Set(indexapi.map((ele)=>{
    return ele.category;
})),"All",];// rest operator is for obj to arr

function Library() {
    const [index, setIndex] = useState(indexapi);
    const [navlist , setNavList]=useState(uniqueList);
    
    const filterItem =(cat)=>{
        if(cat!="All"){
            const updatedList = indexapi.filter((ele)=>{
                return(ele.category===cat);
            })
            setIndex(updatedList)
        }
        else{
            setIndex(indexapi);
        }
       
    }
    return (
        <>
        <h1>Welcome to AB Shop</h1> 
        <Navbar filterItem={filterItem} navlist={navlist}/>
        <Cardcomponent data ={index}/>
        </>
    )
}

export default Library
