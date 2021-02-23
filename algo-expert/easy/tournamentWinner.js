const HOME_TEAM_WON = 1;

function tournamentWinner(competitions, results) {
  let currBestTeam = '';
	const scores = {[currBestTeam] : 0}
  
	for (let i = 0; i < competitions.length; i++) {
		const result = results[i];
		const [homeTeam, awayTeam] = competitions[i];
		
		const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;
		
		updateScores(winningTeam, 3, scores);
		
		if (scores[winningTeam] > scores[currBestTeam]) {
			currBestTeam = winningTeam;
		}
	}
	
	return currBestTeam;
};

function updateScores(team, points, scores) {
	if (!(team in scores)) scores[team] = 0;
	scores[team] += points
};

competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
]
results = [0, 0, 1]
//output: "Python"