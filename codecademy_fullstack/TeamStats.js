// Building the data structure for team 
const team = {
    _players: [
      {
        firstName: 'Pete', 
        lastName: 'Wheeler', 
        age: 54
      },
      {
        firstName: 'Nic',
        lastName: 'Arch',
        age: 23
      },
      {
        firstName: 'Jessic', 
        lastName: 'Bod',
        age: 24
      },
    ], 
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Jambons',
        teamPoints: 55,
        opponentPoints: 20     
      },
      {
        opponent: 'Retraite',
        teamPoints: 23,
        opponentPoints: 56     
      },
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer (firstName, lastName, age) {
      const player = {
        firstName : firstName,
        lastName : lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame (opponentName, teamPoints, opponentPoints) {
      const game = {
        opponentName: opponentName,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    },
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addGame('Wolves', 20, 12);
  console.log(team._players);
  console.log(team._games);