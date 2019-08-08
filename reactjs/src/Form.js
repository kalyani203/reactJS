/**
 * Created by kaka03 on 07/08/19.
 */
import React from 'react';
import './Form.css'

export default class Form extends React.Component{
	constructor() {
		super();
		this.formSubmit = this.formSubmit.bind(this);

		this.state = {
            fields:{},
			errors: {}
		};
	}

	handleValidation(){
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		//FirstName
		if(!fields["firstname"]){
			formIsValid = false;
			errors["firstname"] = "Firstname required";
		}

		//LastName
		if(!fields["lastname"]){
			formIsValid = false;
			errors["lastname"] = "Lastname required";
		}

		//Address
		if(!fields["addressinfo"]){
			formIsValid = false;
			errors["addressinfo"] = "Address required";
		}

		//City
		if(!fields["city"]){
			formIsValid = false;
			errors["city"] = "City required";
		}

		//Contact
		if(!fields["contactno"]){
			formIsValid = false;
			errors["contactno"] = "Contact Number required";
		}

		//Email
		if(!fields["emailid"]){
			formIsValid = false;
			errors["emailid"] = "Email required";
		}

        //Notes
        if(!fields["notes"]){
            formIsValid = false;
            errors["notes"] = "Notes required";
        }

		this.setState({errors: errors});
		return formIsValid;
	}

    handleChange(field, evt){
        let fields = this.state;
        fields[field] = evt.target.value;
        this.setState({fields});
    }

	formSubmit(event) {
        debugger;
		event.preventDefault();
		if(this.handleValidation()){
			const form = event.target;
			const firstname = form.elements["firstname"].value;
			const lastname = form.elements["lastname"].value;
			const addressinfo = form.elements["address"].value;
			const city = form.elements["city"].value;
			const contactno = form.elements["contactno"].value;
			const gender = form.elements["gender"].value;
			const emailid = form.elements["emailid"].value;
			const notes = form.elements["notes"].value;

            this.props.addContact(firstname, lastname, addressinfo, city, contactno, gender, emailid, notes)


			this.state.fields ={
				firstname: "",
				lastname: "",
				addressinfo: "",
				city: "selectcity",
				contactno: "",
				gender: "",
				emailid: "",
				notes: ""
			};
		}
	}

	render(){
		return(
			<form id="contact-detail-form" onSubmit={this.formSubmit}>
				<div className="contactFields">
                    <fieldset>
                        <div className="fields">
                            <label className="label">First Name: </label>
                            <input id="firstname" placeholder="First Name" value={this.state.fields['firstname']} type="text" maxLength={25} onChange={this.handleChange.bind(this, "firstname")}/>
                            <span className="validateMsg">{this.state.errors["firstname"]}</span>
                        </div>
                        <div className="fields">
                            <label className="label">Last Name: </label>
                            <input id="lastname" placeholder="Last Name" value={this.state.fields['lastname']} type="text" maxLength={25} onChange={this.handleChange.bind(this, "lastname")} />
                            <span className="validateMsg">{this.state.errors["lastname"]}</span>
                        </div>
                        <div className="fields">
                            <label className="label">Address: </label>
                            <textarea id="address" placeholder="Address" value={this.state.fields['addressinfo']} type="text" onChange={this.handleChange.bind(this, "addressinfo")} />
                            <span className="validateMsg">{this.state.errors["addressinfo"]}</span>
                        </div>
                        <div className="fields">
                            <label className="label">City: </label>
                            <select id="city" name="city" value={this.state.fields['city']} onChange={this.handleChange.bind(this, "city")}>
								<option value="selectcity" selected disabled hidden>Select City</option>
                                <option>Aurangabad</option>
                                <option>Mumbai</option>
                                <option>Nagpur</option>
                                <option>Nashik</option>
                                <option>Pune</option>
                            </select>
                            <span className="validateMsg">{this.state.errors["city"]}</span>
                        </div>
                            <div className="fields">
                            <label className="label">Contact: </label>
                            <input id="contactno" placeholder="Contact Number" value={this.state.fields['contactno']} type="text" pattern="[0-9]*" maxLength={10} onChange={this.handleChange.bind(this, "contactno")} />
                            <span className="validateMsg">{this.state.errors["contactno"]}</span>
                        </div>
                        <div className="fields">
                            <label className="label">Gender: </label>
                            <input value="Female" id="gender-female" type="radio" name="gender"  defaultChecked={true}/>
                            <label className="gender" htmlFor="gender-female">Female</label>
                            <input value="Male" id="gender-male" type="radio" name="gender"/>
                            <label className="gender" htmlFor="gender-male">Male</label>
                        </div>
                        <div className="fields">
                            <label className="label">Email ID: </label>
                            <input id="emailid" placeholder="Email ID" value={this.state.fields['emailid']} type="text" maxLength={35} onChange={this.handleChange.bind(this, "emailid")}/>
                            <span className="validateMsg">{this.state.errors["emailid"]}</span>
                        </div>
                        <div className="fields">
                            <label>Notes: </label>
                            <textarea id="notes" placeholder="Notes(if any)..." value={this.state.fields['notes']} type="text" onChange={this.handleChange.bind(this, "notes")}/>
							<span className="validateMsg">{this.state.errors["notes"]}</span>
						</div>
                        <button id="submitBtn" type="submit">Submit</button>
                    </fieldset>
				</div>
			</form>
		);
	}
}