import React from 'react';
import { PropTypes } from 'prop-types';

import { classList } from '../../../modules/utils';

import './index.css'


function SkeletonLoaderBone({children, className, ...restProps}) {
	return (
		<div className={classList('SkeletonLoader-Bone', className)} {...restProps}>
			{children}
		</div>
	)
}

SkeletonLoaderBone.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
};


export default SkeletonLoaderBone;
