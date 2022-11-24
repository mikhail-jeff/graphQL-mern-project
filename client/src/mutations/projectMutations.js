import { gql } from '@apollo/client';

// * ADD PROJECT
const ADD_PROJECT = gql`
	mutation addProject($name: String!, $description: String!, $status: ProjectStatus!, $clientId: ID!) {
		addProject(name: $name, description: $description, status: $status, clientId: $clientId) {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`;

// * UPDATE PROJECT
const UPDATE_PROJECT = gql`
	mutation updateProject($id: ID!, $name: String!, $description: String!, $status: UpdateProjectStatus!) {
		updateProject(id: $id, name: $name, description: $description, status: $status) {
			id
			name
			description
			status
			client {
				id
				name
				email
				phone
			}
		}
	}
`;

// * DELETE PROJECT
const DELETE_PROJECT = gql`
	mutation deleteProject($id: ID!) {
		deleteProject(id: $id) {
			id
		}
	}
`;

export { ADD_PROJECT, DELETE_PROJECT, UPDATE_PROJECT };
