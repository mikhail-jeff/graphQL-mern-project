import { useState } from 'react';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { UPDATE_PROJECT } from '../mutations/projectMutations';

const EditProject = ({ project }) => {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [status, setStatus] = useState('');

	const [updateProject] = useMutation(UPDATE_PROJECT, {
		variables: { id: project.id, name, description, status },
		refetchQueries: [
			{
				query: GET_PROJECTS,
				variables: {
					id: project.id,
				},
			},
		],
	});

	const onSubmit = (e) => {
		e.preventDefault();

		if (!name || !description || !status) {
			return alert(`Please fill out all fields!`);
		}

		updateProject(name, description, status);
	};

	return (
		<div className='mt-5'>
			<h3 className='fw-bold text-center'>Update Project Details</h3>
			<form onSubmit={onSubmit}>
				<div className='mb-3'>
					<label className='form-label'>Name</label>
					<input
						className='form-control  shadow-none'
						type='text'
						id='name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Description</label>
					<textarea
						className='form-control  shadow-none'
						id='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</div>

				<div className='mb-3'>
					<label className='form-label'>Status</label>
					<select
						className='form-select shadow-none outline-none'
						id='status'
						value={status}
						onChange={(e) => setStatus(e.target.value)}
					>
						<option value='new'>Not Started</option>
						<option value='progress'>In progress</option>
						<option value='completed'>Completed</option>
					</select>
				</div>

				<button
					type='submit'
					className='btn btn-dark w-100'
				>
					Update
				</button>
			</form>
		</div>
	);
};

export default EditProject;
