import React, { Component } from 'react';
import './Demo.scss';
import Parsonize from "../Parsonize";
import TOC from "./TOC";
import BeautifulDragAndDrop from "./BeautifulDragAndDrop";

class Demo extends Component {
	render() {
		const { offset: o } = this.props;
		
		const offset = o.header + o.footer + o.margin;
		
		return <div
			className="Demo"
			style={ {
				minHeight: `calc(100vh - ${ offset }px)`,
				display: 'flex',
				alignItems: 'flex-start'
			} }>
			
			<div>
				<BeautifulDragAndDrop />
			</div>
			
			<div style={ { margin: '49px 0 0 49px' } }>
				<Parsonize
					exerciseSolution='System.out.print("Hello, world!");'
				/>
			</div>
		</div>
	}
}

export default Demo;


// More TOC
// https://www.npmjs.com/package/draggable-react-tree-component
// https://alarie.github.io/draggable-react-tree-component/#examples
//
// Some nice draggable UI
// https://codesandbox.io/s/github/annezhou920/react-dnd-example/tree/main/?from-embed
