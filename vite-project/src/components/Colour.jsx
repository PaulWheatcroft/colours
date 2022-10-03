import React from 'react'

export default function Colour(props) {

    return (
        <main className="flex-shrink-0">

                <div id={`${props.id}`} className="colours" style={{backgroundColor: `${props.hexValue}`}}>
                    <h2>{props.colourName}: {props.hexValue}</h2>
                </div>

        </main>
    )
}

