import React from 'react';
import Header from './Header';

const Layout = (props) => (
    <div className="container mt-5">
        <div className="row">
            <Header />
            {props.children}
        </div>
    </div>
)
 
export default Layout;