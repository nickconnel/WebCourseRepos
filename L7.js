//Global varialbes
var money;
var mostMoney = 0;
var rollCount = 0;
var rollCountAtMostMoney = 0;
var startingMoney = 0;

function reset()
{
   money = 0;
   rollCount = 0;
   rollCountAtMostMoney = 0;
   startingMoney = 0;
   mostMoney = 0;
}

function runGame(num1)
{
  var output;
      TableDisplayAttribute = document.getElementById('resultsTable').style.display;
  //verify the input is numbers
  if ((num1 == "") || (num1 <= 0))
  {
    output = "Need a positive dollar amount, try again.";
  }
  else
  {
    if (rollCount == 0)
    {
        money = num1;
        startingMoney = money;
        rollCountAtMostMoney = rollCount;
        mostMoney = money;
    }
    document.getElementById('n1').value = null;
    while (money > 0)
    {
      roll2Dice();
      rollCount++;

      if (diceSum == (7*1))
      {
        money = money*1 + 4;
      }
      else
      {
        money = money*1 - 1;
      }

      if (mostMoney < money)
      {
        mostMoney = money;
        rollCountAtMostMoney = rollCount;
      }
    }
    output = "Thanks for playing Lucky 7! \nPut in new Money amount to play agian.";
    updateTable();
  }

  document.getElementById("ShowThisAfterButton").innerText = output;
  reset();
}

function updateTable()
{
  //Update table
  var resultsTable = document.getElementById('resultsTable');
  resultsTable.rows[0].cells[1].innerHTML = "$" + startingMoney;
  resultsTable.rows[1].cells[1].innerHTML = rollCount;
  resultsTable.rows[2].cells[1].innerHTML = "$" + mostMoney;
  resultsTable.rows[3].cells[1].innerHTML = rollCountAtMostMoney;
  document.getElementById('resultsTable').style.display = "inline-block";
}

//Global variables
var dice1;
var dice2;
var diceSum;

function roll2Dice()
{
    var sides = 6;
    var minValu = 1;
    dice1 =  Math.ceil(Math.random() * (1 + sides - minValu));
    dice2 =  Math.ceil(Math.random() * (1 + sides - minValu));
    diceSum = dice1*1 + dice2*1;
}
