import { SiPolymerproject } from 'react-icons/si';

const Header = () => {
	return (
		<nav className='navbar bg-light mb-4 p-3 shadow-sm '>
			<div className='container-fluid d-flex justify-content-between'>
				<a
					href='/'
					className=' text-decoration-none'
				>
					<div className='d-flex align-items-center text-dark'>
						<SiPolymerproject className='h2 me-2' />
						<div className='text-bold h2 fw-bold'>Project Manager</div>
					</div>
				</a>
				<div className='d-none d-sm-block'>
					<form
						class='d-flex'
						role='search'
					>
						<input
							class='form-control me-2 shadow-none'
							type='search'
							placeholder='Search'
							aria-label='Search'
						/>
						<button
							class='btn btn-dark'
							type='submit'
						>
							Search
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
