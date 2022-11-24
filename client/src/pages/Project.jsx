import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';
import ClientInfo from '../components/ClientInfo';
import DeleteProject from '../components/DeleteProject';
import EditProject from '../components/EditProject';
import { BiArrowBack } from 'react-icons/bi';

const Project = () => {
	const { id } = useParams();
	const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

	if (loading) return <Spinner />;
	if (loading) return <p>Something went wrong!</p>;

	return (
		<>
			{!loading && !error && (
				<div className='mx-auto w-75 card p-3 bg-light'>
					<div className='d-flex align-items-center justify-content-between'>
						<Link to='/'>
							<button className='btn btn-dark'>
								<BiArrowBack /> Back
							</button>
						</Link>
						<DeleteProject projectId={data.project.id} />
					</div>

					<div className='mt-3'>
						<h2 className='fw-bold'>{data.project.name}</h2>
						<p className='mb-0 pb-0'>
							<span className='fw-bold'>Description: </span>
							{data.project.description}
						</p>
						<p className='fw-bold mt-0 pt-0'>
							Status: <span className='fw-normal'>{data.project.status}</span>
						</p>
					</div>

					<ClientInfo client={data.project.client} />

					<EditProject project={data.project} />
				</div>
			)}
		</>
	);
};

export default Project;
