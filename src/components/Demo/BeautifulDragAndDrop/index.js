import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { initialData } from './initial-data';

class BeautifulDragAndDrop extends Component {
	constructor(props) {
		super(props);
		
		this.grid = 3;
		this.state = initialData;
		
		this.onDragEnd = this.onDragEnd.bind(this);
	}
	
	render() {
		const { data } = this.state;
		
		return <DragDropContext
			onDragEnd={this.onDragEnd}
		>
			<Droppable droppableId="droppable" direction="horizontal">
				{(provided, snapshot) => (
					<div
						{ ...provided.droppableProps }
						ref={ provided.innerRef }
						style={ this.getListStyle(snapshot.isDraggingOver) }
					>
						{
							data.map((item, index) => {
								return <Draggable key={item.id} draggableId={String(item.id)} index={index}>
									{(provided, snapshot) => (
										<div
											className="TOC-Item"
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											style={this.getItemStyle(
												snapshot.isDragging,
												provided.draggableProps.style
											)}
											onClick={ e => this.draggableItemClickHandler(e, item) }
										>
											<span
												style={{
													marginLeft: `${item.level * 14}px`
												}}
											>
												{ item.text }
											</span>
										</div>
									)}
								</Draggable>
							})
						}
						{ provided.placeholder }
					</div>
				)}
			</Droppable>
		</DragDropContext>
	}
	
	componentDidMount() {
		window.containerRef = this.container;
	}
	
	onDragEnd(result) {
		const { source, destination } = result;

		// dropped outside the list
		if (!destination) return;
		
		// prevent dropped on top of the list
		if (destination.index === 0) return;
		
		const { data: _stateItems } = this.state;
		
		// create a copy
		const stateItems = Object.assign([], _stateItems);
		
		const data = this.reorder(
			stateItems,
			source.index,
			destination.index
		);
		
		this.setState({
			data
		}, () => {
			const { data, delimiter } = this.state;
			console.log(data.map(x => x.text).join(delimiter === 'dot' ? '.' : '\n'));
		});
	}
	
	draggableItemClickHandler = (e, item) => {
		console.log('[BeautifulDragAndDrop] draggableItemClickHandler:', e, item);
	};

	// a little function to help us with reordering the result
	reorder = (list, startIndex, endIndex) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);
		
		return result;
	};
	
	getItemStyle = (isDragging, draggableStyle) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",
		padding: this.grid * 3,
		margin: `0 3px ${this.grid}px`,
		
		// change background colour if dragging
		background: isDragging ? "red" : "goldenrod",
		
		// styles we need to apply on draggables
		...draggableStyle
	});
	
	getListStyle = isDraggingOver => ({
		padding: this.grid,
		display: 'flex',
		flexDirection: 'row'
	});
}

export default BeautifulDragAndDrop;
