import { useState, useEffect } from "react";
import data from '../../../data';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const Create = (props) => {
    const [formData, setFormData] = useState({colourName: "", hexValue: ""}
    )

    function handdleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event) {
        const postUrl = "http://localhost:1212/add"
        event.preventDefault()
        console.log(JSON.stringify(formData))
        axios.post(postUrl, formData)
            .then((response) =>
            {
                console.log(response)
            }
        ).catch(console.log)
    }

    return ( 
        <div className="create">
            <h2>Add a New {props.isUk ? "Colour" : "Color"}</h2>
            <div className="card">
                <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label>{props.isUk ? "Colour" : "Color"} Name:</label>
                        <input
                            type="text"
                            required
                            placeholder={props.isUk ? "Your Colour's Name" : "Your Color's Name"}
                            className="form-control form-control-lg"
                            onChange={handdleChange}
                            value={formData.colourName}
                            name="colourName"
                        />
                    </div>
                    <div className="mb-3">
                        <label>{props.isUk ? "Colour" : "Color"} Value:</label>
                        <input
                            type="text"
                            required
                            placeholder="#11aa2d"
                            className="form-control form-control-lg"
                            onChange={handdleChange}
                            value={formData.hexValue}
                            name="hexValue"
                            pattern="^(#)([0-9a-fA-F]{6})$"
                            maxLength={7}
                        />
                    </div>
                    <button className="btn btn-primary">Save {props.isUk ? "Colour" : "Color"}</button>
                </form>
                </div>
            </div>
            <div className="colour-swatch mt-4" style={{
                                                    backgroundColor: `${formData.hexValue}`
                                                    }}>
                
            </div>
            <p>{formData.hexValue}</p>
        </div>
     );
}
 
export default Create;