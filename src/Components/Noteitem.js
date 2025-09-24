import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const Noteitem = (props) => {
    const { note } = props
    const {deleteNote , editNote} = useContext(noteContext)


    return (
        <>
            <div className="card mx-2">
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <i onClick={() => deleteNote(note._id)} className="fa-solid fa-trash"></i>
                    <i onClick={() => props.updateNote(note)} className="fa-solid fa-pencil mx-2"></i>
                </div>
            </div>
        </>
    )
}

export default Noteitem
