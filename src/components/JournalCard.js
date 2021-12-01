import React from "react"

export default function JournalCard(props) {
    return (
        <div className="journal-card">
            <div className="journal--photo-div">
                <img src={props.imageUrl} 
                className="journal--photo" 
                alt={props.title}
                onClick={() => props.handleClick(props.title, props.imageUrl)}
                />
            </div>
          <div className="journal--info">
            <div className="journal--location">
                <img src="../assets/pin.png" alt=""/>
                <span>{props.location.toUpperCase()}</span>
                <a href={`${props.googleMapsUrl}`} className="gray">View on Google Maps</a>
            </div>
            
            <h2>{props.title}</h2>
            <p className="journal--date">{props.startDate} - {props.endDate}</p>
            <p className="journal--description">{props.description}</p>
          </div>
        </div>
    )
}
