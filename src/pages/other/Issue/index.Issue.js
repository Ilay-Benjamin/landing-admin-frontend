import React from 'react';

function IssuePage() {
  return (
    <div className='page' style={{ margin: '0', padding: '0', backgroundColor: 'violet' }}>
      <h1 className='page-title'>Issue Page</h1>
      <h3 style={{ textDecoration: 'underline' }}>
        /other
      </h3>
      <br></br>
      <p className='page-description' style={{ padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black' }}>
        If you have any issues, please let us know.

      </p>
    </div>
  );
}


export default IssuePage;
