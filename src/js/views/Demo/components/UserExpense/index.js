import React from 'react';

import Card from '../../../../components/Card/';
import UserExpenseLoader from './components/UserExpenseLoader';

import './index.css'


export default class UserExpense extends React.Component {

	render() {
		let isLoading = true, data = null;
		let content;

		if (isLoading) {
			content = <UserExpenseLoader />;
		} else if (!isLoading && data) {
			content = (
				<div className="UserExpense-content">
					<div className="VirtualCard">
						<div className="VirtualCard-profileImg"></div>
						<div className="VirtualCard-title"></div>
					</div>

					<div class="UserExpense-details">
						<div className="title"></div>
						<div className="expense-amount"></div>

						<div className="title"></div>
						<div className="description"></div>

						<div className="UserExpense-actions">
							<div className="UserExpense-actions-btn"></div>
							<div className="UserExpense-actions-btn"></div>
						</div>
					</div>
				</div>
			);
		}

		return (
			<Card className="UserExpense">
				{content}
			</Card>
		);
	}
}
