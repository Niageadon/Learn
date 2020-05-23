import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
export {Parent}

const Parent = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);
    
    return (
        <div>
            <button onClick={() => setValue(v => v + 1)}>+</button>
            <button onClick={() => setVisible(v => !v)}>visible</button>
            <ClassCounter value={value}/>
            <HookCounter value={value}/>
        </div>
    )
}

class ClassCounter extends React.Component{
    componentDidMount() {
        console.log('ClassCounter-mounted')
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('ClassCounter-update')
    }
    componentWillUnmount() {
        console.log('ClassCounter-will-mount')
    }
    
    render() {
        return <p>{this.props.value}</p>
    }
}

const HookCounter = ({value}) => {
    useEffect(() => {
        console.log('use-effect')
        return console.log('clear')
    }, [value])
    
    return (
        <p>{value}</p>
    )
}


