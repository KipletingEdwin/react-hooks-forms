import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";
function ParentComponent() { 

    const [firstName, setFirstName] = useState("John");
    const [lastName, setLastName] = useState("Henry");
    const [newsletter, setNewsLetter] = useState(false)

    function FormHandling(event) {
        setFirstName(event.target.value)
    }

    function handleLastNameChange(event) {
        setLastName(event.target.value);
    }

    function handleNewsletterChange(event) {
        setNewsLetter(event.target.checked)
    }

    return (
        <div>
            <Form
                firstName={firstName}
                lastName={lastName}
                newsletter={newsletter}
                FormHandling={FormHandling}
                handleLastNameChange={handleLastNameChange}
                handleNewsletterChange={handleNewsletterChange}
            />
            <DisplayData firstName={firstName} lastName={lastName}/>
        </div>

    )

}
export default ParentComponent