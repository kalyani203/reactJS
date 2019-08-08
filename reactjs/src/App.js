import React from 'react';
import Form from './Form';

export default class App extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			contact: []
		};

		this.addContact = this.addContact.bind(this);
	}

	addContact(firstname, lastname, addressinfo, city, contactno, gender, emailid, notes) {
		this.setState(prevState => ({
			contact: [...prevState.contact, { firstname, lastname, addressinfo, city, contactno, gender, emailid, notes}]
		}));
	}

	render()
	{
		return (
			<div className="App">
				<h2>Add your contact details below</h2>
				<h6> Fields required</h6>
				<Form addContact={this.addContact}/>
				<table>
					<thead>
						<tr>
							<th>FirstName</th>
							<th>LastName</th>
							<th>Address</th>
							<th>City</th>
							<th>Contact</th>
							<th>Gender</th>
							<th>Email</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						{this.state.contact.map((contact, index) => {
							return (
								<tr id={index}>
									<td>{contact.firstname}</td>
									<td>{contact.lastname}</td>
									<td>{contact.addressinfo}</td>
									<td>{contact.city}</td>
									<td>{contact.contactno}</td>
									<td>{contact.gender}</td>
									<td>{contact.emailid}</td>
									<td>{contact.notes}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
}