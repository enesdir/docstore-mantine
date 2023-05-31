import { Table } from '@mantine/core'

export const SampleTable = () => (
	<Table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>City</th>
				<th>Country</th>
				<th>Salary</th>
			</tr>
		</thead>
		<tbody>
			{[
				{ name: 'Person 1', age: 47, city: 'Paris', country: 'France', salary: 86487 },
				{ name: 'Person 2', age: 45, city: 'London', country: 'France', salary: 9351 },
				{ name: 'Person 3', age: 50, city: 'New York', country: 'France', salary: 84998 },
				{ name: 'Person 4', age: 59, city: 'London', country: 'Japan', salary: 58815 },
				{ name: 'Person 5', age: 57, city: 'Paris', country: 'UK', salary: 85212 },
				{ name: 'Person 6', age: 54, city: 'Sydney', country: 'Japan', salary: 84072 },
				{ name: 'Person 7', age: 28, city: 'Paris', country: 'France', salary: 99238 },
				{ name: 'Person 8', age: 50, city: 'London', country: 'UK', salary: 70842 },
				{ name: 'Person 9', age: 58, city: 'Paris', country: 'Japan', salary: 17455 },
				{ name: 'Person 10', age: 22, city: 'London', country: 'Australia', salary: 38458 },
			].map((person, index) => (
				<tr key={index}>
					<td>{person.name}</td>
					<td>{person.age}</td>
					<td>{person.city}</td>
					<td>{person.country}</td>
					<td>{person.salary}</td>
				</tr>
			))}
		</tbody>
	</Table>
)
