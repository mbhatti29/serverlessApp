import React from 'react';
import axios from 'axios';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			user: '',
			message: ''
		}
	}

onUserChange = (e) => {
	this.setState({
	    user: e.target.value,
	})
}

onMessageChange = (e) => {
	this.setState({
	    message: e.target.value
	})
}

submitForm = (e) => {
  e.preventDefault();
  const {user, message} = this.state;
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  let data = { message: `${user}, ${message}` }

    axios.post(
      'https://yaohrbj2gh.execute-api.us-east-1.amazonaws.com/default/appFunction', 
      data,
      axiosConfig
    )
    .then(res => {
    	console.log("Axios Response: ", res)
    })
    .catch(err => {
    	console.log("Axios Error: ", err)
    })	
}

	render() {
		return (
			<div className="App">
				<h1>Send Message</h1>
				<form onSubmit={this.submitForm}>
					User: <input type='text' placeholder="User" name="user" onChange={this.onUserChange}/>
					Message: <input type='text' placeholder='message here' name="message" onChange={this.onMessageChange}/>
					<button type="submit">Send</button>
				</form>
			</div>
		)
	}
}

export default App;

