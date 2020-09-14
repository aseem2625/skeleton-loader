import React from 'react';
import { PropTypes } from 'prop-types';

import { classList } from '../../../modules/utils';

import './index.css'


function SkeletonLoaderBone({ className, width, height, style, isRound = true }) {
	return (
		<div
			className={classList('SkeletonLoader-Bone', isRound && 'SkeletonLoader-Bone--round', className)}
			style={{...style, width, height}}
		/>
	)
}

SkeletonLoaderBone.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	isRound: PropTypes.bool,
};


export default SkeletonLoaderBone;
