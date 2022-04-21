import React from 'react';
import Header from '../componets/header/Header';

function Layout(props) {
    return (
        <>
            <Header />
            <div>
                {props.children}
                  
            </div>
        </>
    )
}

export default Layout