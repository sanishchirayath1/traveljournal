import React from "react";

export default function Modal(props) {
return (
    <div className="modal">
        <div className="modal-content">
            <div className="modal--header">
                <h2>{props.title}</h2>
                <span className="close" onClick={props.handleClose}>&times;</span>
            </div>
            <img src={props.imageUrl} alt={props.title}/>
        </div>
    </div>
)

}
