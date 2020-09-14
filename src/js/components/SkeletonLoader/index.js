import React from 'react';
import { PropTypes } from 'prop-types';

import SkeletonLoaderBone from './SkeletonLoaderBone';
import { classList } from '../../modules/utils';

import './index.scss';


function SkeletonLoader ({ className, children, isDarkBG, isAnimate = true, ...restProps }) {
	return (
		<div
			{...restProps}
			className={classList(
				'SkeletonLoader',
				isDarkBG && 'SkeletonLoader--darkBG',
				isAnimate && 'SkeletonLoader--animate',
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
	children: PropTypes.node.isRequired,
	isDarkBG: PropTypes.bool,
	isAnimate: PropTypes.bool,
};

export default SkeletonLoader;
export { SkeletonLoaderBone };

