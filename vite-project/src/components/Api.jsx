import React from 'react'

export default function Api() {
    const baseURL = "http://localhost:1212/colours";
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          console.log(response.data)
          myData = response.data
        }
        ).catch(console.log)
    }, [])
    return 
}