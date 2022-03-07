import React from "react"

function Contact(props) {
    return(
    <li>
        <strong>{props.fname}</strong> {props.lname}
    </li>
    )
}

export default Contact;

