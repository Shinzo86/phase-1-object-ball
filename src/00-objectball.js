function gameObject(){
    const stat = {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson' : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 22,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 1
                },
                'Reggie Evans' : {
                    "number" : 30,
                    "shoe" : 14,
                    "points" : 12,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 12,
                    "blocks" : 12,
                    "slamDunks" : 7
                },
                'Brook Lopez' : {
                    "number" : 11,
                    "shoe" : 17,
                    "points" : 17,
                    "rebounds" : 19,
                    "assists" : 10,
                    "steals" : 3,
                    "blocks" : 1,
                    "slamDunks" : 15
                },
                'Mason Plumlee' : {
                    "number" : 1,
                    "shoe" : 19,
                    "points" : 26,
                    "rebounds" : 12,
                    "assists" : 6,
                    "steals" : 3,
                    "blocks" : 8,
                    "slamDunks" : 5
                },
                'Jason Terry' : {
                    "number" : 31,
                    "shoe" : 15,
                    "points" : 19,
                    "rebounds" : 2,
                    "assists" : 2,
                    "steals" : 4,
                    "blocks" : 11,
                    "slamDunks" : 1
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien' : {
                    "number" : 4,
                    "shoe" : 18,
                    "points" : 10,
                    "rebounds" : 1,
                    "assists" : 1,
                    "steals" : 2,
                    "blocks" : 7,
                    "slamDunks" : 2
                },
                'Bismak Biyombo' : {
                    "number" : 0,
                    "shoe" : 16,
                    "points" : 12,
                    "rebounds" : 4,
                    "assists" : 7,
                    "steals" : 7,
                    "blocks" : 15,
                    "slamDunks" : 10
                },
                'DeSagna Diop' : {
                    "number" : 2,
                    "shoe" : 14,
                    "points" : 24,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 4,
                    "blocks" : 5,
                    "slamDunks" : 5
                },
                'Ben Gordon' : {
                    "number" : 8,
                    "shoe" : 15,
                    "points" : 33,
                    "rebounds" : 3,
                    "assists" : 2,
                    "steals" : 1,
                    "blocks" : 1,
                    "slamDunks" : 0
                },
                'Brendan Haywood' : {
                    "number" : 33,
                    "shoe" : 15, 
                    "points" : 6,
                    "rebounds" : 12,
                    "assists" : 12,
                    "steals" : 22,
                    "blocks" : 5,
                    "slamDunks" : 12
                }
            }
        }
    }
    return stat
}

function numPointsScored(target){
    for (const playerName in gameObject().away.players){
        if (playerName === target){
            return gameObject().away.players[target]["points"]
        }
    }
    for (const playerName in gameObject().home.players){
        if (playerName === target){
            return gameObject().home.players[target]["points"]
        }
    }
}

function shoeSize(target){
    for (const playerName in gameObject().away.players){
        if (playerName === target){
            return gameObject().away.players[target]["shoe"]
        }
    } 
    for (const playerName in gameObject().home.players){
        if (playerName === target){
            return gameObject().home.players[target]["shoe"]
        }
    }
}

function teamColors(target){
    for (const team in gameObject()){
        if (gameObject()[team].teamName === target){
            return gameObject()[team].colors
        }
    }
}

function teamName(){
    const teamNames = []
    for (const team in gameObject()){
        teamNames.push(gameObject()[team].teamName)
    }
    return teamNames
}

function playerNumbers(target){
    const jerseyNum = []
    for (const team in gameObject()){
        if (gameObject()[team].teamName === target){
            for (const player in gameObject()[team].players){
                jerseyNum.push(gameObject()[team].players[player]["number"])
            }
        }
    }
    return jerseyNum
}

function playerStats(target){
    for (const team in gameObject()){
        for (const player in gameObject()[team].players){
            if (player === target){
                return gameObject()[team].players[target]
            }
        }
    }
}

function bigShoeRebounds(){
    let largestPlayerName = ""
    let teamName = ''
    let shoeSize = 0
    for (const team in gameObject()){
        for (const player in gameObject()[team].players){
            if (gameObject()[team].players[player]["shoe"] > shoeSize){
                shoeSize = gameObject()[team].players[player]["shoe"]
                largestPlayerName = player
                teamName = team
            }
        }
    }
    return gameObject()[teamName].players[largestPlayerName]["rebounds"]
}

function mostPointsScored(){
    let largestPlayerName = ""
    let pointsScored = 0
    for (const team in gameObject()){
        for (const player in gameObject()[team].players){
            if (gameObject()[team].players[player]["points"] > pointsScored){
                pointsScored = gameObject()[team].players[player]["points"]
                largestPlayerName = player
            }
        }
    }
    return largestPlayerName
}

function winningTeam(){
    let awayPointsScored = 0
    let homePointsScored = 0
    for (const team in gameObject()){
        for (const player in gameObject()[team].players){
            if (team === "away"){
                awayPointsScored += gameObject()[team].players[player]["points"]
            } else {
                homePointsScored += gameObject()[team].players[player]["points"]
            }
        }
    }
    if (awayPointsScored > homePointsScored){
        return gameObject().away.teamName
    } else if (awayPointsScored === homePointsScored){
        console.log("Its a Tie!")
    } else {
        return gameObject().home.teamName
    }
}

function playerWithLongestName(){
    let longestName = ''
    for (const team in gameObject()){
        for (const player in gameObject()[team].players){
            if (player.length > longestName.length){
                longestName = player
            }
        }
    }
    return longestName
}