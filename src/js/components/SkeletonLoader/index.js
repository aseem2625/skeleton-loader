import React from 'react';
import { PropTypes } from 'prop-types';

import SkeletonLoaderBone from './SkeletonLoaderBone';
import { classList } from '../../modules/utils';

import './index.css'


function SkeletonLoader ({ className, children, ...restProps }) {
	return (
		<div
			{...restProps}
			className={classList(
				'SkeletonLoader',
				className
			)}
		>
			<div className="SkeletonLoader-content">
				{children}
			</div>
			<div className="SkeletonLoader-shimmer"></div>
		</div>
	);
}

SkeletonLoader.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
};

export default SkeletonLoader;
export { SkeletonLoaderBone };

