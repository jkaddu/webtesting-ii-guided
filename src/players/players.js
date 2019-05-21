import React from 'react';

function Players(props) {
	const { players = [] } = props;

	if (!players || !players.length > 0) {
		return <h3>No players available</h3>;
	}

	return (
		<div>
			<h3>Player List</h3>

			{players.map((p) => (
				// each player has an id and a name
				<div data-testId="player-name" key={p.id}>
					{p.name}
				</div>
			))}
		</div>
	);
}

export default Players;
