import React, { Component } from 'react';
import NoteCard from './NoteCard';

class List extends Component {

	componentWillMount() {
		this.props.getNotes();
	}

	render() {
		const { notes } = this.props;
		const cards = notes.map((note, i) => {
			return(<NoteCard key={i} index={i} note={note} />);
		});

		return (<div className = "list-container" >
			{cards}
		</div>);
	}
}

export default List