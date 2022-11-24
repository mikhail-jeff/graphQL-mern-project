import { FaTrashAlt } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_CLIENT } from '../mutations/clientMutations';

const ClientRow = ({ client }) => {
	const [deleteClient] = useMutation(DELETE_CLIENT, {
		variables: { id: client.id },
	});

	return (
		<tr>
			<td>{client.name}</td>
			<td>{client.email}</td>
			<td>{client.phone}</td>
			<td className='text-center'>
				<button
					onClick={deleteClient}
					className='btn btn-danger btn-sm'
				>
					<FaTrashAlt />
				</button>
			</td>
		</tr>
	);
};

export default ClientRow;
