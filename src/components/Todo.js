import React, { useState, useEffect } from 'react';
import './Todo.css';
import Card from './UI/Card';
import Input from './UI/Input';

/**
 *
 * @returns The block component that is being rendered
 */
function Todo() {
	const [addTask, setAddTask] = useState('');
	const [taskDetails, setTaskDetails] = useState('');
	const [taskList, setTaskList] = useState([]);

	useEffect(() => {
		const a = localStorage.getItem('taskList');
		setTaskList(JSON.parse(a));
	}, []);

	const handleTitleChange = (e) => {
		e.preventDefault();
		setAddTask(e.target.value);
	};

	const handleDetailsChange = (e) => {
		e.preventDefault();
		setTaskDetails(e.target.value);
	};

	const clickHandler = (event) => {
		event.preventDefault();
		if (addTask !== '' && taskDetails !== '') {
			var deets = {
				id: Math.floor(Math.random() * 10000),
				value: addTask,
				notes: taskDetails,
			};
			localStorage.setItem('taskList', JSON.stringify([...taskList, deets]));
			setTaskList([...taskList, deets]);
		}
	};

	const deleteHandler = (e, id) => {
		e.preventDefault();
		const afterDelete = taskList.filter((task) => task.id !== id);
		localStorage.setItem('taskList', JSON.stringify(afterDelete));
		setTaskList(afterDelete);
	};

	const focusChangeHandler = (e) => {
		e.target.value = '';
	};

	return (
		<div className='container c' data-testid='notes-container'>
			<div className='h' data-testid='header'>
				Note Taking Application
			</div>
			<Input
				name='Add Title'
				onChange={handleTitleChange}
				onFocus={focusChangeHandler}
			/>
			<Input
				name='Add Task'
				onChange={handleDetailsChange}
				onFocus={focusChangeHandler}
			/>

			<button className='btn btn-primary' onClick={clickHandler}>
				Add a Task
			</button>
			<br />
			<br />

			{taskList !== [] ? (
				<div className='container' style={{ padding: '0px' }}>
					{taskList.map((task) => (
						<Card
							title={task.value}
							body={task.notes}
							key={task.id}
							deleteHandler={deleteHandler}
							id={task.id}
						/>
					))}
				</div>
			) : null}
		</div>
	);
}

export default Todo;
