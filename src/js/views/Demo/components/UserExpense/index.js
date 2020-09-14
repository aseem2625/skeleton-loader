import React from 'react';

import Card from '../../../../components/Card/';
import SkeletonLoader, { SkeletonLoaderBone } from '../../../../components/SkeletonLoader';

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
					<div className="VirtualCard"></div>

					<div class="UserExpense-details">
						<div className="UserDetails">
							<div className="UserDetails-profileImg"></div>
							<div className="UserDetails-title"></div>
						</div>

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

export function UserExpenseLoader() {
	return (
		<div className="UserExpense-content UserExpenseLoader">
			<div className="VirtualCard">
				<SkeletonLoader>
					<SkeletonLoaderBone />
				</SkeletonLoader>
			</div>

			<SkeletonLoader className="UserExpense-details">
				<div className="UserDetails">
					<SkeletonLoaderBone className="UserDetails-profileImg" width={48} height={48} />
					<SkeletonLoaderBone className="UserDetails-title" width={200} height={20} />
				</div>

				<SkeletonLoaderBone className="title" width={140} height={20} />
				<SkeletonLoaderBone className="description expense-amount" width={100} height={36} />

				<SkeletonLoaderBone className="title" width={100} height={20} />
				<SkeletonLoaderBone className="description" width="80%" height={24} />

				<div className="UserExpense-actions">
					<SkeletonLoaderBone className="UserExpense-actions-btn" width={100} height={48} />
					<SkeletonLoaderBone className="UserExpense-actions-btn" width={100} height={48} />
				</div>
			</SkeletonLoader>
		</div>
	)
}
