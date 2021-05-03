import React from 'react'

function ListRendering()  {
    const names=['Neha','Prem','Manoj']
    // const nameList=names.map(name=> <h2>{name}</h2>)
        return (
            <div>{names.map(name=> <h2>{name}</h2>)}</div>
            // {nameList}
        )
}

export default ListRendering
