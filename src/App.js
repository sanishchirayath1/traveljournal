import React, {useState} from "react"
import Navbar from "./components/Navbar"
import JournalCard from "./components/JournalCard"
import data from "./data"
import Modal from "./components/Modal"

export default function App() {
    const [showModal, setShowModal] = useState({
        show: true,
        title: "",
    })

    const handleClose = () => {
        setShowModal(prevState => {
            return {
                ...prevState,
                show: !prevState.show
            }
            }
        )
    }

    const journals = data.map(place => <JournalCard key={place.title} {...place} handleClick={handleClose}/>)

    const modal = <Modal 
    handleClose={handleClose}
    title={data[1].title} 
    image={data[1].imageUrl}
    />

 

    return (
        <>
            <Navbar />
            <div className="container">
                {showModal.show ? modal : journals}
            </div>
        </>
    )
}