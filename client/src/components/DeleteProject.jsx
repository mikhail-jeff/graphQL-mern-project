import { useNavigate } from 'react-router-dom';
import { FaTrashAlt } from 'react-icons/fa';
import { GET_PROJECTS } from '../queries/projectQueries';
import { useMutation } from '@apollo/client';
import { DELETE_PROJECT } from '../mutations/projectMutations';

const DeleteProject = ({ projectId }) => {
	const navigate = useNavigate();

	const [deleteProject] = useMutation(DELETE_PROJECT, {
		variables: { id: projectId },
		onCompleted: () => navigate('/'),
		refetchQueries: [{ query: GET_PROJECTS }],
	});

	return (
		<div className='d-flex'>
			<button
				onClick={deleteProject}
				className='btn btn-danger d-flex align-items-center gap-1'
			>
				<FaTrashAlt /> Delete Project
			</button>
		</div>
	);
};

export default DeleteProject;
