import React from 'react';
import { PropTypes } from 'prop-types';

import { classList } from '../../modules/utils';

import './index.css'


function Card ({ className, children, ...restProps }) {
	return (
		<div
			{...restProps}
			className={classList(
				'Card',
				className
			)}
		>
			{children}
		</div>
	);
}

Card.propTypes = {
	className: PropTypes.string,
	children: PropTypes.element,
};

export default Card;

