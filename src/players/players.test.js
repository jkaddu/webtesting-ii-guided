import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Players from './players.js';

describe('<Players />', () => {
	it("should render no players available, when players aren't passed in from prop", () => {
		const { getByText } = render(<Players />);

		getByText(/no players/i);
		cleanup();
	});
	it("should render no players available when players aren't provided", () => {
		const { queryByText } = render(<Players />);

		// queryByText will return null and won't fail test
		expect(queryByText(/no players/i)).not.toBeNull();
		expect(queryByText(/no players/i)).toBeInTheDocument();
	});
	it('should render list of players', () => {
		const players = [ { id: 1, name: 'Sam' }, { id: 1, name: 'Frodo' }, { id: 1, name: 'Gandalf' } ];

		// uses data.testId property
		const { getAllByTestId } = render(<Players players={players} />);
		const playerNames = getAllByTestId('player-name').map((n) => n.textContent);

		expect(playerNames).toHaveLength(players.length);

		const names = players.map((p) => p.name); // array of names

		expect(playerNames).toEqual(names);
	});
});
