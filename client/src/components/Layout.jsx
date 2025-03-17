import React from 'react';
import Footer from './footer/Footer';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';


export default function Layout() {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}