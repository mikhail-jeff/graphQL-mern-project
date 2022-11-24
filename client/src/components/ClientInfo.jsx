import { FaPhoneAlt } from 'react-icons/fa';
import { FaIdBadge } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const ClientInfo = ({ client }) => {
	return (
		<>
			<div className=''>
				<h5 className='fw-bold'>Client Information</h5>
				<ul className='list-group'>
					<li className='list-group-item d-flex align-items-center'>
						<FaIdBadge className='me-1 text-dark' /> {client.name}
					</li>
					<li className='list-group-item d-flex align-items-center'>
						<MdEmail className='me-1 text-dark' /> {client.email}
					</li>
					<li className='list-group-item'>
						<FaPhoneAlt className='me-1 text-dark' /> {client.phone}
					</li>
				</ul>
			</div>
		</>
	);
};

export default ClientInfo;
