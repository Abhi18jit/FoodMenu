import React from 'react'
import './style.css'

const MenuList = ({ menuData }) => {
    return (
        <>
            <div className="container">


                {menuData.map((curVal) => {

                    const {id,name,category,price,description,image}=curVal; //Object destructuring

                    return (
                        <>  <div className='inner-Container'>


                            <h3 className='id'>Product Id:{id}</h3>
                            <div className="img">
                                <img src={image} alt="food" />
                                <h1 className='name'>{name}</h1>
                            </div>

                            <h5 className='category'>{category}</h5>
                            <h5 className='price'>{price}</h5>
                            <p className='description'>
                                {description}
                            </p>
                        </div>
                        </>
                    )

                })}
            </div>
        </>
    )
}

export default MenuList
