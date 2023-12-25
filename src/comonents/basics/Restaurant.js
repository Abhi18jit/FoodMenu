import React, { useState } from 'react'
import MenuApi from './MenuApi';
import MenuList from './MenuList';
import "./style.css";
import Navlist from './Navlist';

const uniqueCategory=[
  ...new Set(
    MenuApi.map((curEle)=>{
      return curEle.category;
    })),'All',
  ];
  // console.log(uniqueCategory);

const Restaurant=()=> {
    const [menuData,SetMenuData]=useState(MenuApi);
    const [newCategory,SetCewCategory]=useState(uniqueCategory);

    const filterItem=(category)=>{
      if(category==='All'){
        SetMenuData(MenuApi);
        return;
      }
      const updatedList=()=>{
        return(
          MenuApi.filter((curVal)=>{
            return curVal.category===category;
          })
        )
      }
      SetMenuData(updatedList);
    }
    
  


  return (
    <>
           <Navlist filterItem={filterItem} newCategory={newCategory}/> 
            
            <MenuList menuData={menuData}/>
      
    </>
  )
}

export default Restaurant
