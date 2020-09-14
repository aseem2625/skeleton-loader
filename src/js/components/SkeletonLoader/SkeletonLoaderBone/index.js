import React from 'react';
import { PropTypes } from 'prop-types';

import { classList } from '../../../modules/utils';

import './index.scss'


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
	width: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),

	height: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),

	isRound: PropTypes.bool,
};


export default SkeletonLoaderBone;
