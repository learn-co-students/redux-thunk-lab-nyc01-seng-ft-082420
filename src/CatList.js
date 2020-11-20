import React from 'react'

export const CatList = (props) =>{

    const renderCats = () => {
        return props.catPics.map(c => <img src={c.url}></img>)
    }

    return (
        <div>
            {/* <h2>List of Cats</h2> */}
            {renderCats()}
        </div>
    )

}