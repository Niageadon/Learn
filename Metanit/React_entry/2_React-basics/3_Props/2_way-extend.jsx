class Hello extends React.Component {
	
	render() {
		return <div>
			<p>Имя: {this.props.name}</p>
			<p>Возраст: {this.props.age}</p>
		</div>;
	}
}
Hello.defaultProps = {name: "BIB", age: 32};

