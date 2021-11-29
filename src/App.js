import React from "react"
import Navbar from "./components/Navbar"
import JournalCard from "./components/JournalCard"
import data from "./data"


export default function App() {
    const journals = data.map(place => <JournalCard key={place.title} {...place}/>)
    return (
        <>
            <Navbar />
            <div className="container">
                {journals}
            </div>
        </>
    )
}