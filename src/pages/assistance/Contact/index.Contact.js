import React from 'react';

function ContactPage() {
  return (
    <div className="page" style={{margin: '0', padding: '0'}}>
      <h1 className='page-title'>Contact Page</h1>
      <h3 style={{textDecoration: 'underline'}}>
        /assistance
      </h3>
      <br></br>
      <p  className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
      Here you can find all the information you need to contact us.
      </p>
    </div>
  );
}

export default ContactPage;
