import React, { useState, useEffect, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
export {Parent}

const Parent = () => {
    const [value, setValue] = useState(1);
    const [visible, setVisible] = useState(true);
    
    return (
        <div >
            <button onClick={() => setValue(v => v + 1)}>+</button>
            <button onClick={() => setVisible(v => !v)}>visible</button>
            <ClassCounter value={value}/>
            <HookCounter value={value} visible={visible}/>
            <PlanetInfo id={value}/>
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

const getPlanet = id => {
	return new Promise(resolve => {
		fetch(`https://swapi.dev/api/planets/${id}/`)
			.then((response) => response.json())
			.then(re => resolve(re));
	})
}
const useRequest = (req) => {
	const init = useMemo(() => ({
		data: null,
		loading: true,
		error: null
	}), []);
	const [dataState, setDateState] = useState(init);
	
	useEffect(() => {
		setDateState(init)
		let cancelled = false;
		const a = req()
			.then(data => !cancelled && setDateState({
				data,
				loading: false,
				error: null
			}))
			.catch(er => !cancelled && setDateState({
				data: null,
				loading: false,
				error: er
			}))
		return () => cancelled = true
	}, [req]);
	
	return dataState
}


const usePlanetInfo = id => {
	const request = useCallback( () => getPlanet(id), [ id ]);
	return useRequest(request)
}

const PlanetInfo = ({id}) => {
	const {data, loading, error} = usePlanetInfo(id)
	if(error) {
		return <div>error</div>
	}
	if(loading) {
		return <div>loading</div>
	}
	
	return (
		<div>{id} --- {data?.name}</div>
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


