import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './layout/Header';
import { Main } from './pages/Main';
import { Footer } from './layout/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <main className='container content'>
                <Main />
            </main>
            <Footer />
        </div>
    );
}

export default App;
