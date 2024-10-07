import React from 'react';



function Home(props) {
  const { name, age } = props;

  // Define styles
  const style = {
    error: { backgroundColor: 'red', color: 'white', padding: '10px', fontSize: '25px', textAlign: 'center', borderRadius: '10px' },
    warning: { backgroundColor: 'yellow', color: 'black', padding: '10px', fontSize: '25px', textAlign: 'center', borderRadius: '10px' },
    success: { backgroundColor: 'green', color: 'white', padding: '10px', fontSize: '25px', textAlign: 'center', borderRadius: '10px' },
  };

  // Define descriptions
  const description = {
    error: 'You cannot access this page if you are under 18 years old.',
    warning: 'You have to provide your name and age to access this page.',
    success: `Welcome ${name} (${age} yo). Have a nice day!`,
  };

  // Define titles
  const title = {
    error: 'Access Denied',
    warning: 'Warning',
    success: 'Home Page',
  };

  // Determine what to display based on age and name
  let currentStyle, currentTitle, currentDescription;

  if (!name || !age) {
    currentStyle = style.warning;
    currentTitle = title.warning;
    currentDescription = description.warning;
  } else if (age < 18) {
    currentStyle = style.error;
    currentTitle = title.error;
    currentDescription = description.error;
  } else {
    currentStyle = style.success;
    currentTitle = title.success;
    currentDescription = description.success;
  }

  return (
    <div className="page" style={{margin: '0', padding: '0'}}>
      <h1 className="page-title" style={currentStyle}>{currentTitle}</h1>
      <p className="page-description">{currentDescription}</p>
    </div>
  );
}

export default Home;
