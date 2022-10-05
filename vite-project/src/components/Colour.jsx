import React from 'react'
import DeleteColour from './DeleteColour'
import { Link } from 'react-router-dom';

export default function Colour(props) {

    return (
        <main className="flex-shrink-0">

                <div id={`${props.id}`} className="colours d-flex align-items-center flex-column mb-3" style={{backgroundColor: `${props.hexValue}`}}>

                    <h2 className="col-8 p2 text-center">{props.colourName}: {props.hexValue}</h2>
                    <ul className='list-group list-group-horizontal'>
                            <Link className="delete-button btn btn-sm btn-primary" to={{
                                                                                        pathname: "/edit",
                                                                                        state: { 
                                                                                            id: props.id,
                                                                                            colourName: props.colourName,
                                                                                            hexValue: props.hexValue,
                                                                                            }
                                                                                        }}>Edit</Link> 
                                                                                    
                                                                                    
                            <Link to="" className='delete-button btn btn-sm btn-secondary' onClick={() => DeleteColour(props.id, props.colourName, props.hexValue)}>Delete</Link>
                        </ul>
                </div>

        </main>
    )
}

