import React, { Component } from "react";
import './TOC.scss';
// import DeepEqual from 'deep-equal';

class TOC extends Component {
	constructor(props) {
		super(props);
		
		this.TOCRef = null;
		this.state = {
			countries: {
				"Europe": {
					"France": {},
					"Spain": {}
				},
				"America": {
					"North": {
						"USA": {},
						"Canada": {}
					},
					"South": {
						"Brazil": {},
						"Argentina": {}
					}
				}
			}
		}
	}
	
	render() {
		return <div
			className="TOC"
			ref={ ref => this.TOCRef = ref}
		/>
	}
	
	componentDidMount() {
		const { countries } = this.state;
		this.createTree(this.TOCRef, countries)
	}
	
	createTree = (container, data) => {
		const ul = container.appendChild(document.createElement('ul'));
		for (const [key, val] of Object.entries(data)) {
			const li = ul.appendChild(document.createElement('li'));
			li.textContent = key;
			if (Object.keys(val).length) {
				this.createTree(li, val);
			}
		}
	}
}

export default TOC;
