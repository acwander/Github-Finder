import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
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
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		// set users to the returned data, set loading to false
		this.setState({ users: res.data, loading: false });
	}

	render() {
		return (
			<div className='App'>
				<Navbar />
				<div className='container'>
					<Search />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
