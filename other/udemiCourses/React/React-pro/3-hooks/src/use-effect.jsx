import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
export {Parent}

const Parent = () => {
    const [value, setValue] = useState(0);
    const [visible, setVisible] = useState(true);
    
    return (
        <div >
            <button onClick={() => setValue(v => v + 1)}>+</button>
            <button onClick={() => setVisible(v => !v)}>visible</button>
            <ClassCounter value={value}/>
            <HookCounter value={value} visible={visible}/>
            <Notification notification={"hello boba"}/>
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

const HookCounter = ({value, visible}) => {
	/*useEffect(() => {
		console.log('use-effect')
		return console.log('clear')
	}, [value])*/
	
	/*useEffect(() => {
		console.log('mount')
		return console.log('unmount')
	}, [])*/
    //useEffect(() => () => console.log('update'));
    useEffect(() => console.log('mount'), []);
    useEffect(() => () => console.log('unmount'), []);
	
    return (
	    visible? (<p>{value}</p>): ''
    )
}

const Notification = ({notification}) => {
	const [message, setMessage] = useState(notification);
	
	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage('')
		}, 3000);
		return () => clearTimeout(timer);
	}, []);
	
	
	const notify = (
		<div>
			<p>
				{message}
			</p>
		</div>
	)
	return message? notify: <div></div>
}


