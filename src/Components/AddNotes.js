import React, { useContext, useState, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

const AddNotes = ({ currentNote, setCurrentNote, notes }) => {
    const { addNote, editNote } = useContext(noteContext)
    const [note, setNote] = useState({ id: "", title: "", description: "", tag: "" })
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    // Check if user is logged in
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) setUser(true)
        setLoading(false)
    }, [])

    // Populate form when editing
    useEffect(() => {
        setNote(currentNote || { id: "", title: "", description: "", tag: "" })
    }, [currentNote])

    const handleClick = (e) => {
        e.preventDefault()
        if (note.id) {
            editNote(note.id, note.title, note.description, note.tag)
        } else {
            addNote(note.title, note.description, note.tag)
        }

        // Clear form
        setNote({ id: "", title: "", description: "", tag: "" })
        setCurrentNote({ id: "", title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    if (loading) return <p>Loading...</p>
    if (!user) return <p>Please login to add notes.</p>

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title </label>
                    <input type="text" name='title' className="form-control" id="title" value={note?.title || ""} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note?.description || ""} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name='tag' value={note?.tag || ""} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick} disabled={note.title.length < 2 || note.description.length < 2}>
                    {note.id ? "Update Note" : "Add Note"}
                </button>
            </form>
            {notes.length===0 && <p className='my-3 mx-2'>No Notes to display.</p>}
        </>
    )
}

export default AddNotes
