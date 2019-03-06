
import React from 'react'

export function paragraph(text){
    return <p>{text}</p>
}

export function sectionHeading(text){
    return (
        <div className="heading-container">
            <h2>{text}</h2>
        </div>
    )
}

export function orderedList(listItems){
    return(
        <ol>
            {listItems.map(item => <li>{item}</li>)}
        </ol>
    )
}

export function unorderedList(listItems){
    return(
        <ul>
            {listItems.map(item => <li>{item}</li>)}
        </ul>
    )
}

export function link(text, url){
    return <div><a href={url} target="_blank">{text}</a></div>
}

export function embededVideo(vidCode){
    return(
        <iframe className="embeded-video" src={`https://www.youtube.com/embed/${vidCode}`} style={{display: "block"}} width="560" height="315" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
}
