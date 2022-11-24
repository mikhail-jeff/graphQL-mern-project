import { SiPolymerproject } from 'react-icons/si';

const Header = () => {
	return (
		<nav className='navbar bg-light mb-4 p-3 shadow-md'>
			<div className='container'>
				<a
					href='/'
					className=' text-decoration-none'
				>
					<div className='d-flex align-items-center text-dark'>
						<SiPolymerproject className='h3 me-2' />
						<div className='text-bold h3 fw-bold'>Project Manager</div>
					</div>
				</a>
			</div>
		</nav>
	);
};

export default Header;
