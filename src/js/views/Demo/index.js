import React from 'react';

import LayoutA from './components/LayoutA';
import LayoutB from './components/LayoutB';

import './index.css'


export default class Demo extends React.Component {

	render() {

		return (
			<div className="Home">
				<LayoutA />
				<LayoutB />
			</div>
		)
	}
}
