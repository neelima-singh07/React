
import React from 'react';
import Header from './comp/header.jsx';
import { Outlet } from 'react-router-dom';
import Footer from './comp/footer.jsx';
function Layout(){
    return (
        <>
        <Header/>
        <Outlet/>

        <Footer/>
        </>
    )
}
export default Layout;