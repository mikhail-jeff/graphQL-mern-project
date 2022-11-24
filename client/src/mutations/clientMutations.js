import { gql } from '@apollo/client';

// * ADD MUTATION
const ADD_CLIENT = gql`
	mutation addClient($name: String!, $email: String!, $phone: String!) {
		addClient(name: $name, email: $email, phone: $phone) {
			id
			name
			email
		}
	}
`;

// * DELETE MUTATION
const DELETE_CLIENT = gql`
	mutation deleteClient($id: ID!) {
		deleteClient(id: $id) {
			id
			name
			email
			phone
		}
	}
`;

export { DELETE_CLIENT, ADD_CLIENT };
