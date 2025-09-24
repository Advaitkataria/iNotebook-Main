import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    // const host = "http://localhost:3000"
    const initialNote = []
    const [notes,setNote] = useState(initialNote)
    const [credentials,setcredentials]=useState({email:"",password:""})
    const token = localStorage.getItem("token");

    const addNote = async (title, description, tag) => {
        const response = await fetch(`https://inotebook-backend-production-b457.up.railway.app/api/notes/addnote`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        setNote(notes.concat(json));
    }
    const getNotes = async () => {
        const token = localStorage.getItem("token");
        const response = await fetch("https://inotebook-backend-production-b457.up.railway.app/api/notes/fetchallnotes", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        });
        const json = await response.json();
        setNote(Array.isArray(json) ? json : []);
    };

    const deleteNote=async(id)=>{
        const response = await fetch(`https://inotebook-backend-production-b457.up.railway.app/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            }
        });
        const json = await response.json()
        const newNotes = notes.filter((note) => note._id !== id);
        setNote(newNotes);
    }

    const login=async({email,password})=>{
        const response = await fetch(`https://inotebook-backend-production-b457.up.railway.app/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email,password})
        });
        const json = await response.json();
        console.log(json.authtoken)
        return json
       
    }
    const signup=async({name,email,password})=>{
        const response = await fetch(` https://inotebook-backend-production-b457.up.railway.app/api/auth/createnewuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json();
        console.log(json.authtoken)
        return json
       
    }

    const editNote = async (id, title, description, tag) => {
        const response = await fetch(`https://inotebook-backend-production-b457.up.railway.app/api/notes/updatenote/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "auth-token": token
            },
            body: JSON.stringify({ title, description, tag }),
        });
        const json = await response.json();
        const newNotes = notes.map(note => {
            if (note._id === id) {
                return { ...note, title, description, tag };
            } else {
                return note;
            }
        });
        setNote(newNotes);
    };

    return (
        <noteContext.Provider value={{notes, setNote, addNote,deleteNote,getNotes, editNote,login,setcredentials,credentials,signup}}>
            {props.children}
        </noteContext.Provider>
    )
}
export default NoteState;