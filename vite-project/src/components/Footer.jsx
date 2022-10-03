import React from 'react'

export default function Footer(props) {
    return (
        <footer className="footer mt-auto py-3 bg-light fixed-bottom">
        <div className="container d-flex justify-content-end">
            <button
                id="uk"
                className={props.isUk ? "selectedLocation" : "location"}
                onClick={props.onClick}
            >
                UK
            </button>
            <button
                id="us"
                className={props.isUk ? "location" : "selectedLocation"}
                onClick={props.onClick}
            >
                US
            </button>
        </div>
        </footer>
    )
}

