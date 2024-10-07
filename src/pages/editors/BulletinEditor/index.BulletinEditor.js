import React from 'react';
import { main } from '../../../models/firebaseAdmin';


function BulletinEditorPage() {
  return (
    <div className="page" style={{margin: '0', padding: '0', backgroundColor: 'lightblue'}}>
      <h1 className='page-title'>BulletinEditor Page</h1>
      <h3 style={{textDecoration: 'underline'}}>
        /editors
      </h3>
      <br></br>
      <p className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
        Add or edit bulletins here so that everyone can stay up to date.
      </p>
      <br></br>
      <br></br>
      <p>
        Click the button below to manipulate the database.
      </p>        
      <button onClick={(target)=> {
        target.preventDefault();
        main();
      }} style={{padding: 10, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
        Manipulate DB  
      </button>
    </div>

  );
}

export default BulletinEditorPage;
