import React, { Component } from 'react';
import './Parsonize.scss';

const DataDelimiter = {
	dot: 'dot',
	default: 'default'
}, ClassName = "draggable";

class Parsonize extends Component {
	dragged = null;
	state = {
		delimiter: DataDelimiter.default,
		code: []
	}
	
	dragOverHandler = e => {
		e.preventDefault();
	}
	
	dragEnterHandler = e => {
		const { currentTarget } = e;
		// eslint-disable-next-line no-console
		console.log(`${ e.type}:`, currentTarget);
		
		currentTarget.classList.add('over');
	};
	
	dragStartHandler = e => {
		// eslint-disable-next-line no-console
		if (e.isDefaultPrevented()) console.log('DEFAULT IS PREVENTED!!!');
		const { currentTarget } = e;
		
		// eslint-disable-next-line no-console
		console.log(`${ e.type}:`, currentTarget);
		
		this.dragged = currentTarget;
	}
	
	dragEndHandler = e => {
		const { currentTarget } = e;
		// eslint-disable-next-line no-console
		console.log(`${ e.type}:`, currentTarget);
		
		currentTarget.classList.remove('over');
	}
	
	dropHandler = e => {
		const { currentTarget } = e,
			{ onChange } = this.props;
		
		// eslint-disable-next-line no-console
		console.log(`${ e.type}:`, currentTarget);
		
		currentTarget.classList.remove('over');
		
		if (this.dragged && this.dragged !== currentTarget) {
			
			this.parsonizeRef.insertBefore(this.dragged, currentTarget);
			this.dragged = null;
			
			typeof onChange === 'function' && onChange(this.getData());
		}
	}
	
	shouldComponentUpdate(nextProps, nextState) {
		const { code: nextCode } = nextState,
			{ code } = this.state;
		
		const _shouldIt = nextCode !== code;
		
		// eslint-disable-next-line no-console
		console.log('shouldComponentUpdate:', _shouldIt);
		
		return _shouldIt;
	}
	
	componentDidMount() {
		const { onChange, exerciseSolution } = this.props;
		// let exerciseSolution = exercise.get('solutions');
		// if (!exerciseSolution) exerciseSolution = exercise.get('solutionFiles').get(0).get(0).get('contents');
		// else exerciseSolution = exerciseSolution.get(0);
		
		let code = exerciseSolution.split(/\n/).filter(x => x.length !== 0),
			delimiter = DataDelimiter.default;
		
		if (code.length === 1) {
			code = code[0].split('.');
			delimiter = DataDelimiter.dot;
		}
		
		// randomize
		if (code.length > 1) {
			const original = code.join('');
			do {
				code = code.sort( () => Math.random() - 0.5 );
			} while(original === code.join(''));
		}
		
		console.log('code: ', code);
		
		this.setState({
			delimiter,
			code
		}, () => {
			typeof onChange === 'function' && onChange(this.getData());
		});
	}
	
	getData = () => {
		if (this.parsonizeRef) {
			const dataDelimeter = this.parsonizeRef.getAttribute('data-deli');
			let data = [];
			
			this.parsonizeRef.querySelectorAll(`.${ClassName}`).forEach(x => data.push(x.textContent));
			
			return data.join(dataDelimeter === DataDelimiter.dot ? '.' : '\n');
		}
		
		return null;
	}
	
	render() {
		const { delimiter, code } = this.state;
		
		// eslint-disable-next-line no-console
		console.log('render', delimiter, code);
		
		return <div
			ref={ ref => this.parsonizeRef = ref }
			data-deli={ delimiter }
			className="Parsonize"
		>
			{
				code.map((fragment, idx) => {
					return <code
						key={ `item-${idx}-${fragment}` }
						className={ ClassName }
						draggable={ true }
						onDragOver={ this.dragOverHandler }
						onDrag={ this.dragOverHandler }
						onDragEnter={ this.dragEnterHandler }
						onDragLeave={ this.dragEndHandler }
						onDragEnd={ this.dragEndHandler }
						onDrop={ this.dropHandler }
						onDragStart={ this.dragStartHandler }
					>
						{ fragment }
					</code>;
				})
			}
		</div>
	}
}

export default Parsonize;
