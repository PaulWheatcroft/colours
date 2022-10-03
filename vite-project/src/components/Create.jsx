import { useState } from "react";
import data from '../../../data'

const Create = (props) => {
    const [formData, setFormData] = useState(
        {color: "", value: "", id: `${data.length + 1}`}
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
        event.preventDefault()
        console.log(JSON.stringify(formData))
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
                            value={formData.color}
                            name="color"
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
                            name="value"
                            pattern="^(#)([0-9a-fA-F]{6})$"
                            maxLength={7}
                        />
                    </div>
                    <button className="btn btn-primary">Save {props.isUk ? "Colour" : "Color"}</button>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Create;