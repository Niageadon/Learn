import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <HookSwitcher/>
        </div>
    )
}
const HookSwitcher = () => {
    const [color, setColor] = useState('black');
    const [fontSize, setFontSize] = useState('14');
    
    return (
        <div style={{
            padding: '10px',
            backgroundColor: color,
            fontSize: `${fontSize}px`,
            color: color === 'black'? 'white': 'black'
        }}>
            text
            <span>text</span>
            <button onClick={() => {setColor('black')}}>Dark</button>
            <button onClick={() => {setColor('white')}}>Light</button>
            <button onClick={() => {setFontSize((from) => from + 1)}}>+ fs</button>
            <button onClick={() => {setFontSize((from) => from - 1)}}>- fs</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));

