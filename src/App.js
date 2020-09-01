import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
	state = {
		users: [],
		loading: false,
	};

	async componentDidMount() {
		// set loading to true
		this.setState({ loading: true });
		// await api call to get users and assign to res
		const res = await axios.get('https://api.github.com/users');
		// set users to the returned data, set loading to false
		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
