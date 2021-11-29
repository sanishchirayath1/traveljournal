import React from "react"

export default function JournalCard(props) {
    return (
        <div className="journal-card">
            <div className="journal--photo-div">
                <img src={props.imageUrl} className="journal--photo"/>
            </div>
          <div className="journal--info">
            <div className="journal--location">
                <img src="../assets/pin.png" />
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

// {
//         title: "Mount Fuji",
//         location: "Japan",
//         googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
//         startDate: "12 Jan, 2021",
//         endDate: "24 Jan, 2021",
//         description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//         imageUrl: "https://unsplash.com/photos/WLxQvbMyfas"
//     },