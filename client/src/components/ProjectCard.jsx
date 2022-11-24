import React from 'react';

const ProjectCard = ({ project }) => {
	return (
		<div className='col-md-12'>
			<div className='card mb-3'>
				<div className='card body p-3  bg-light'>
					<div className='d-flex justify-content-between align-items-center p'>
						<h3 className='card-tile fw-bold'>
							{project.name}
							<span className='h6 align-middle'>({project.status})</span>
						</h3>
						<a
							className='btn btn-dark'
							href={`/projects/${project.id}`}
						>
							View Details
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
