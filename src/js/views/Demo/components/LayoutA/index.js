import React from 'react';

import SkeletonLoader, { SkeletonLoaderBone } from '../../../../components/SkeletonLoader';

import './index.css'


export default class LayoutA extends React.Component {

	render() {

		return (
			<div className="LayoutA">
				<SkeletonLoader>
					<SkeletonLoaderBone style={{width: 300, height: 60 }} />
				</SkeletonLoader>
			</div>
		)
	}
}
