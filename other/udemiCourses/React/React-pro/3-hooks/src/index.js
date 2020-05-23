import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {Parent} from './use-effect'

const App = () => {
    
    return (
        <div>
            <Parent/>
        </div>
)}

ReactDOM.render(<App/>, document.getElementById('root'));

