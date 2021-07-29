import React from 'react';
import './Card.css';

/**
 *
 * @param {*}
 * @returns the card component
 */
function Card({ title, body, deleteHandler, id }) {
	return (
		<div className='card-container '>
			<div className='card-content'>
				<div className='card-title'>
					<h3>{title}</h3>
				</div>
				<div className='card-body'>
					<p>{body}</p>
				</div>
				<button
					className='btn btn-warning'
					onClick={(e) => deleteHandler(e, id)}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Card;
