import React from 'react';

import SkeletonLoader, { SkeletonLoaderBone } from '../../../../../components/SkeletonLoader';


/*
* Loader component for UserExpense component
*
* Note:
* 1. Created using composition of SkeletonLoader and SkeletonLoaderBone.
* 2. Hierarchy of bones is exactly same as the actual component, UserExpense. However, for multi-line values like address or description, hierarchy can be easily adjusted, thus, giving us more flexibility in this approach.
*
* 4. So, the ease of creating another Loader component is as simple as duplicating the original component, and replacing div, span, etc with SkeletonLoaderBone
*
* 3. This component doesn't need to have its own .css file, as the styles are derived by the classes in actual component.
*
* */

function UserExpenseLoader() {
	return (
		<div className="UserExpense-content UserExpenseLoader">
			{/* 1st Skeleton loader. Ideally, VirtualCard can be a different component with its own VirtualCardLoader. */}
			<div className="VirtualCard">
				<SkeletonLoader isDarkBG>
					<SkeletonLoaderBone className="VirtualCard-profileImg" width={48} height={48} />

					<div class="VirtualCard-details">
						<SkeletonLoaderBone className="VirtualCard-title" width={200} height={24} />
						<SkeletonLoaderBone className="VirtualCard-description" width={100} height={18} />
					</div>
				</SkeletonLoader>
			</div>

			{/* 2nd Skeleton loader. Works seamlessly with other SkeletonLoaders in same column */}
			<SkeletonLoader className="UserExpense-details">
				<SkeletonLoaderBone className="title" width={140} height={16} />
				<SkeletonLoaderBone className="description expense-amount" width={100} height={20} />

				<SkeletonLoaderBone className="title" width={100} height={16} />
				<SkeletonLoaderBone className="description" width="90%" height={18} />
				<SkeletonLoaderBone className="description" width="70%" height={18} />

				<SkeletonLoaderBone className="title" width={100} height={16} />
				<SkeletonLoaderBone className="description" width={120} height={18} />

				<div className="UserExpense-actions">
					<SkeletonLoaderBone className="UserExpense-actions-btn" width={100} height={48} />
					<SkeletonLoaderBone className="UserExpense-actions-btn" width={100} height={48} />
				</div>
			</SkeletonLoader>
		</div>
	)
}

export default UserExpenseLoader;
