import React, { Component } from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import BuForm from './lib/buForm.js';
import 'bulma/css/bulma.css';

import fields from './fields.js';

import logo from './logo.svg';
import './App.css';
import './lib/bulma-calendar.css';

const App = observer(class _App extends Component {

	// form elements data (supposedly from server)
	data = observable({
		input1: 'input1 text',
		input2: 'input2 text',
		checkbox1: true,
		checkbox2: true,
		select1: 'sel2',
		datepicker1: '',
		textarea1: 'textarea1 text',
		radio1: 'radio11',
		radio2: 'radio21'
	});

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>

				<div className="container">
					<section className="section">
						<BuForm name={'testForm'} fields={fields} data={this.data} alignment="is-horizontal" debug />
					</section>
				</div>
			</div>
		);
	}
});

export default App;
