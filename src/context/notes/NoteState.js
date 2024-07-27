



import { useState } from "react";
import noteContext from "./noteContext";


const NoteState = (props) => {

    const s1 = {
        "name": "Ansh",
        "Class": "5B",
    }

    const [state, setState] = useState(s1)

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Guru",
                "Class": "10C",
            })
        }, 3000);
    }

    return (
        <noteContext.Provider value={{ state: state, update: update }}>
            {props.children}
        </noteContext.Provider>
    )
}



export default NoteState;


