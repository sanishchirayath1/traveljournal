import React, {useState} from "react"

import data from "./data"
import Navbar from "./components/Navbar"
import JournalCard from "./components/JournalCard"
import Modal from "./components/Modal"

export default function App() {
    const [showModal, setShowModal] = useState(false)
    const [modalInfo, setModalInfo] = useState({
        title: "Mount Fuji",
        imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  
    })

    const handleClose = (title, imageUrl) => {
        setShowModal(prevState =>  !prevState)
        if(title) {
            setModalInfo({
                title:title,
                imageUrl: imageUrl
            })
        }
    }


    const journals = data.map(place => <JournalCard 
        key={place.title} {...place} 
        handleClick={handleClose} />)

    const modal = <Modal
            handleClose={handleClose}
            title={modalInfo.title} 
            imageUrl={modalInfo.imageUrl}
                />



    return (
        <>
            <Navbar />
            <div className="container">
                {showModal ? modal : journals}
            </div>
        </>

    )
}