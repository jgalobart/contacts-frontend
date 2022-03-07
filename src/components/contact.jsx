import React from "react"

function Contact(props) {
    return(
    <li>
        <strong>{props.fname}</strong> <em>{props.lname}</em>
    </li>
    )
}

export default Contact;

