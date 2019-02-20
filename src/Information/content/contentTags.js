
import React from 'react'

export function paragraph(text){
    return <p>{text}</p>
}

export function sectionHeading(text){
    return <h2>{text}</h2>
}

export function orderedList(listItems){
    return(
        <ol>
            {listItems.map(item => <li>{item}</li>)}
        </ol>
    )
}