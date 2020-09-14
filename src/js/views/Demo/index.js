import React from 'react';

import UserExpense from './components/UserExpense';

import './index.css'


export default class Demo extends React.Component {

	render() {
		return (
			<div className="Demo">
				<UserExpense />
			</div>
		)
	}
}
