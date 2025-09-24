import React, { useContext, useEffect, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import Noteitem from './Noteitem'
import AddNotes from './AddNotes'
import { useNavigate } from 'react-router-dom'

const Notes = () => {
    const { notes, getNotes } = useContext(noteContext)
    const [currentNote, setCurrentNote] = useState({ id: "", title: "", description: "", tag: "" })
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            getNotes()
        }
        else (
            navigate("/login")
        )
        // eslint-disable-next-line
    }, [])

    // Called when pencil icon is clicked
    const updateNote = (note) => {
        setCurrentNote({
            id: note._id,
            title: note.title,
            description: note.description,
            tag: note.tag
        })
    }

    return (
        <>
            <AddNotes currentNote={currentNote} setCurrentNote={setCurrentNote} notes={notes} />
            <div className="row">
                {notes && notes.map((note) => {
                    return (
                        <div className="col-md-3 mb-4 my-3" key={note._id}>
                            <Noteitem note={note} updateNote={updateNote} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Notes
