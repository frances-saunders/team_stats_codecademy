//This script fulfills the project reqs for "Team Stats" in Codecademy

//sets fantasy football team
const team = {
  _players: [
    {firstName: 'Ben', lastName: 'Roethlisberger', age: 40},
    {firstName: 'Matthew', lastName: 'Stafford', age: 34},
    {firstName: 'Jacoby', lastName: 'Brissett', age: 29},
  ],

  //sets games to play and results
  _games: [
    {opponent: 'Jets', teamPoints: 21, opponentPoints: 3},
    {opponent: 'Dolphins', teamPoints: 26, opponentPoints: 16},
    {opponent: 'Steelers', teamPoints: 45, opponentPoints: 13},
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Patrick", "Mahomes", 26);
team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Rams", 35, 6);

console.log(team.players);
console.log(team.games);
