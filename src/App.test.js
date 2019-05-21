import React from 'react';
import { render, cleanup, fireEvent, getByAltText } from 'react-testing-library';
import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
	it('renders without crashing', () => {
		render(<App />);
		cleanup();
	});

	it('renders Hello World', () => {
		const { getByText } = render(<App />);

		const text = getByText(/hello world/i);

		expect(text).toBeInTheDocument();
		cleanup();
	});

	it('greets the team', () => {
		const { getByText } = render(<App />);

		const greetButton = getByText(/greet/i);

		fireEvent.click(greetButton);

		getByText(/hello web students/i);
		cleanup();
	});
});
