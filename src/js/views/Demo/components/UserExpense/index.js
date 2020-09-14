import React from 'react';

import Card from '../../../../components/Card/';
import UserExpenseLoader from './components/UserExpenseLoader';

import './index.css'

import mockProfileImg from '../../../../../assets/logo.svg';

const mockUserExpense = {
	amount_formatted: '4,500',
	description: 'Friday TGIF trip to movie for the team members in PVR Cinemas',
	currency_symbol: '₹',
	date_formatted: '14 Sep, 2020',
	user_details: {
		name: 'Ninja Turtles',
		employee_id: 'MARVEL_03',
		profile_img: ''
	},
	status: 'under_review'
};

export default class UserExpense extends React.Component {
	state = { isLoading: true };

	toggleLoading = () => {
		this.setState({
			isLoading: !this.state.isLoading
		});
	};

	render() {
		const { isLoading } = this.state;

		let content;

		if (isLoading) {
			content = <UserExpenseLoader />;
		} else if (!isLoading) {
			content = (
				<div className="UserExpense-content">
					<div className="VirtualCard">
						<div className="VirtualCard-profileImg">
							<img src={mockProfileImg} height="100%" alt="user-profile-img" />
						</div>
						<div className="VirtualCard-details">
							<div className="VirtualCard-title">
								{mockUserExpense.user_details.name}
							</div>

							<div className="VirtualCard-description">{mockUserExpense.user_details.employee_id}</div>
						</div>
					</div>

					<div className="UserExpense-details">
						<div className="title">Total Expenses</div>
						<div className="description expense-amount">{mockUserExpense.currency_symbol} {mockUserExpense.amount_formatted} </div>

						<div className="title">Reason</div>
						<div className="description">{mockUserExpense.description}</div>

						<div className="title">Date of Expenditure</div>
						<div className="description">{mockUserExpense.date_formatted}</div>

						<div className="UserExpense-actions">
							<button className="btn UserExpense-actions-btn UserExpense-actions-btn--request">Request</button>
							<button className="btn UserExpense-actions-btn UserExpense-actions-btn--approve">Approve</button>
						</div>
					</div>
				</div>
			);
		}

		return (
			<React.Fragment>
				<Card className="UserExpense">
					{content}
				</Card>

				<button class="btn btn-link" onClick={this.toggleLoading}>TOGGLE LOADING</button>
			</React.Fragment>
		);
	}
}
