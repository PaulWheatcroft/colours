import React from 'react'

export default function Colour(props) {
    console.log(props)
    return (
        <main className="flex-shrink-0">

                <div id={`${props.id}`} className="colours" style={{backgroundColor: `${props.value}`}}>
                    <h2>{props.color}: {props.value}</h2>
                </div>

        </main>
    )
}

