import React from 'react'

const Navlist = ({ filterItem, newCategory }) => {



    return (

        <>
            <nav className="navbar">
                <div className="items-group">

                    {newCategory.map((cur) => {
                        return (
                            <button className="items" onClick={() => { filterItem(cur) }}>
                                {cur}
                            </button>
                        );
                    })}

                </div>
            </nav>
        </>
    )
}

export default Navlist
