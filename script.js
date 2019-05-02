var generateCandidate = function(name, partyColor)
{
  var candidate = {};
    candidate.name = name;
    candidate.partyColor = partyColor;
    candidate.electionResults = null;
    candidate.totalVotes = 0;
   candidate.tallyTotalVotes = function()
  {
     this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++)

     {
    this.totalVotes = this.totalVotes + this.electionResults[i];
     }

}
      return candidate;

}

var alexaCortez = generateCandidate("Alexa Cortez", [132,17,11]);
console.log("Alexa's Color is " + alexaCortez.partyColor)
var emyGonzalez = generateCandidate("Emy Gonzalez", [245,141,136]);
console.log("Emy's Color is " + emyGonzalez.partyColor)

  alexaCortez.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2, 2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

  emyGonzalez.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3, 2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

alexaCortez.electionResults[9]= 1;
emyGonzalez.electionResults[9]= 28;
alexaCortez.electionResults[4]= 17;
emyGonzalez.electionResults[4]= 38;
alexaCortez.electionResults[43]= 11;
emyGonzalez.electionResults[43]= 27;

var setStateResults = function(state)

{ theStates[state].winner = null;
  if (alexaCortez.electionResults[state] > emyGonzalez.electionResults[state])
    {theStates[state].winner = alexaCortez;
 } else if (emyGonzalez.electionResults[state] > alexaCortez.electionResults[state])
    {theStates[state].winner = emyGonzalez;}

var stateWinner = theStates[state].winner;
      if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
 } else {theStates[state].rgbColor = [11,32,57];}

 var stateInfoTable = document.getElementById('stateResults');
 var header = stateInfoTable.children[0].children[0];
 var stateName = header.children[0];
 stateName.innerText = theStates[state].nameFull;
 var stateAbbrev = header.children[1];
 stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

 var body = stateInfoTable.children[1];
 var candidate1Name = body.children[0].children[0];
candidate1Name.innerText = alexaCortez.name;

 var candidate1StateResults = body.children[0].children[1];
candidate1StateResults.innerText = alexaCortez.electionResults[state];

 var candidate2Name = body.children[1].children[0];
 candidate2Name.innerText = emyGonzalez.name;
 var candidate2StateResults = body.children[1].children[1];
 candidate2StateResults.innerText = emyGonzalez.electionResults[state];

var winnersName = body.children[2].children[1]
winnersName.innerText = winner;

if (theStates[state].winner === null) {winnersName.innerText = "Re-vote";
} else { winnersName.innerText = theStates[state].winner.name; }

}

alexaCortez.tallyTotalVotes();
emyGonzalez.tallyTotalVotes();


 var winner = null;
declareWinner = function()
{
    if (alexaCortez.totalVotes > emyGonzalez.totalVotes)
    {winner = alexaCortez.name;
    console.log("Alexa Cortez is the Winner");}

    else if (emyGonzalez.totalVotes > alexaCortez.totalVotes)
    {winner = emyGonzalez.name;
    console.log("Emy Gonzalez is the Winner");}

    else
    {winner = "Re-Vote";}
}

  declareWinner();


console.log(alexaCortez.electionResults);
console.log(emyGonzalez.electionResults);
console.log(alexaCortez.totalVotes);
console.log(emyGonzalez.totalVotes);

var countryInfo = document.getElementById('countryResults')
var row = countryInfo.children[0].children[0];
row.children[0].innerText = alexaCortez.name;
row.children[1].innerText = alexaCortez.totalVotes;
row.children[2].innerText = emyGonzalez.name;
row.children[3].innerText = emyGonzalez.totalVotes;
row.children[5].innerText = winner;
