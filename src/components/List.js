import React, { Component } from 'react';
import NoteCard from './NoteCard';

class List extends Component {

	componentWillMount() {
		this.props.getNotes();
	}

	render() {
		const { notes, getNote, deleteNote } = this.props;
		const cards = notes.map((note, i) => {
			return(<NoteCard key={i} index={i} note={note}
				getNote={getNote} deleteNote={deleteNote} />);
		});

		return (<div className = "list-container" >
			{cards}
		</div>);
	}
}

export default List