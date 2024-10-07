import React from 'react';

function SearchPage(props) {
  return (
    <div className="page" style={{margin: '0', padding: '0'}}>
      <h1 className='page-title'>Search Page</h1>
      <h3 style={{textDecoration: 'underline'}}>
        /assistance
      </h3>
      <br></br>
      <p className='page-description' style={{padding: 15, fontSize: 20, backgroundColor: 'lightgray', borderRadius: 10, border: '1px solid black'}}>
        Just type in the search bar what you are looking for and we will find it for you.
      </p>
    </div>
  );
}

export default SearchPage;
