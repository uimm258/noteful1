import React from 'react';
import Header from '../Header/Header';
import GenerateFolders from '../GenerateFolders'
import GenerateNotes from '../GenerateNotes'
import './HomePage.css';

export default function HomePage(props) {
  return (
    <div>
      <Header />
      <main>
        <div className="folder">
          <GenerateFolders history={props.history} />
          <button>Add Folder</button>
        </div>

        <div className="note">
          <GenerateNotes history={props.history} />
        </div>
      </main>
    </div>
  )
}
