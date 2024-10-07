import React from 'react';

function HelpPage() {
    return (
      <div className="page" style={{margin: '0', padding: '0'}}>
        <h1 className='page-title'>Help Page</h1>
        <h3 style={{textDecoration: 'underline'}}>
          /assistance
        </h3>
        <br></br>
        <p className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
          Hey! Here you can find all the information you need to get help.
        </p>
      </div>
    );
  }
  

export default HelpPage;
