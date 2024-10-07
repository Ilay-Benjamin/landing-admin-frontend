import React from 'react';
import classNames from 'classnames';




function Error() {
    return (
        <div className={classNames('page', 'error-page')} style={{margin: '0', padding: '0', backgroundColor: 'lightblue'}}>
            <h1 className='error-page-title'>Errorrrrr!!!!!!!!!!!!!!!!!!</h1>  
            <p className='error-page-description'>Page not found!</p>        
        </div>
    );
}

export default Error;
