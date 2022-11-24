import { FaExclamation } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='d-flex flex-column justify-content-center align-items-center mt-5'>
			<FaExclamation
				className='text-danger'
				size='5em'
			/>
			<p className='lead mt-3'>Sorry, this page does not exist!</p>
			<Link
				to='/'
				className='btn btn-dark'
			>
				Go to Homepage
			</Link>
		</div>
	);
};

export default NotFound;
