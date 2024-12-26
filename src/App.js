import React from 'react';
import DynamicContent from './components/DynamicContent';
import './styles/DynamicContent.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>DeepTech Frontend Tasks</h1>
            </header>
            <main>
                <DynamicContent />
            </main>
        </div>
    );
}

export default App;