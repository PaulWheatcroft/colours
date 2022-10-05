import 'regenerator-runtime/runtime';
import axios from 'axios';

export default function DeleteColour(id, name, hex) {
    const deleteUrl = "http://localhost:1212/delete"
    const colourToDelete = {
        "id": id,
        "colourName": name,
        "hexValue": hex
    }
    axios.delete(deleteUrl, { data: colourToDelete })
            .then((response) =>
            {
                console.log(response)
            }
        ).catch(console.log)
    console.log(colourToDelete)
    return 
}