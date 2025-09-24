import React from 'react'


const About = () => {

  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0">
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Welcome to iNotebook</h2>
          <p className="card-text">
            Your personal space to organize thoughts, manage ideas, and keep track of everything that matters — all in one place.
          </p>
          <p className="card-text">
            iNotebook is a simple yet powerful note-taking application built to provide users with a secure and efficient way to store their notes online. Whether you’re a student, professional, or someone who loves jotting down ideas on the go, iNotebook ensures your notes are always accessible, neatly organized, and safe.
          </p>
          <h4 className="mt-4">✨ Key Features</h4>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">🔒 Secure Login & Signup – Your notes are protected with authentication, ensuring only you can access them.</li>
            <li className="list-group-item">📝 Add & Manage Notes – Quickly create new notes, edit existing ones, or delete them when no longer needed.</li>
            <li className="list-group-item">📱 Responsive Design – Works smoothly across devices, whether you’re on a laptop, tablet, or mobile.</li>
            <li className="list-group-item">👤 Personalized Experience – Notes are tied to your account, so you’ll always see your own notes after logging in.</li>
            <li className="list-group-item">🎨 User-Friendly Interface – Clean, minimal design to keep the focus on your ideas.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
