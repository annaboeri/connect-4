
var $flexContainer = $('.flex-container')
var $gameResultOutput = $('#game-result-output')
var $newGame = $('#new-game')
var $player1Score = $('#player-1-score')
var $player2Score = $('#player-2-score')
var $row = $('.row')
var $currentSlot 
var currentPlayer1Score = 0
var currentPlayer2Score = 0

var $row1 = $('.row-1')
var $row2 = $('.row-2')
var $row3 = $('.row-3')
var $row4 = $('.row-4')
var $row5 = $('.row-5')
var $row6 = $('.row-6')
var $row7 = $('.row-7')

//highlight players whose turn it is


var game = {
    players: [{name: "Player 1", color: "red"}, {name: "Player 2", color: "yellow"}],
    currentPlayer: null,
    gameOver: false,
    init: function(){
        console.log('Game initialized')
        game.currentPlayer = game.players[0]
        game.gameOver = false
        $gameResultOutput.text("")
        $row.css("background-color", "rgb(255, 255, 255)")
    },
     //resetGame: function(){
    //     console.log("GAME OVER")
    //     game.init()
    
    // },

    switchPlayer: function(){
        if (game.currentPlayer === game.players[0]){
            game.currentPlayer = game.players[1]
        } 
        else {
            game.currentPlayer = game.players[0]
        }
     },
    
    renderCurrentPlayer: function(){
        if (game.gameOver !== true){
            for (var i = 5; i >= 0; i--){
            var $newSlot = $(this).children().eq(i)
            if ($newSlot.css("background-color") === "rgb(255, 255, 255)"){
                   $newSlot.css("background-color", game.currentPlayer.color)
                   break
                }    
            }   
            $currentSlot = $newSlot
            game.checkVertical()
            game.checkHorizontal()
            game.checkRightAndDown()
            game.checkRightAndUp()
            game.switchPlayer()
        }    
},

    updateScore: function(){
        if (game.currentPlayer.name === "Player 1"){
            currentPlayer1Score = currentPlayer1Score + 1
            $player1Score.text(currentPlayer1Score) 
        } else {
            currentPlayer2Score = currentPlayer2Score + 1
            $player2Score.text(currentPlayer2Score) 
        }
     },
    checkVertical: function(){
        if ($currentSlot.css("background-color") !== "rgba(255, 255, 255)"){
            if ($currentSlot.css("background-color") === $currentSlot.prev().css("background-color") &&
            $currentSlot.prev().css("background-color") === $currentSlot.prev().prev().css("background-color") &&
            $currentSlot.prev().prev().css("background-color") === $currentSlot.prev().prev().prev().css("background-color") ||
            $currentSlot.css("background-color") === $currentSlot.next().css("background-color") &&
            $currentSlot.next().css("background-color") === $currentSlot.next().next().css("background-color") &&
            $currentSlot.next().next().css("background-color") === $currentSlot.next().next().next().css("background-color")){
                $gameResultOutput.css("color", game.currentPlayer.color)
                $gameResultOutput.text(game.currentPlayer.name + " wins!")
                game.updateScore()
                game.gameOver = true
                //document.querySelectorAll(".flex-container").removeEventListener("click", game.renderCurrentPlayer)

            }
        }
    },
    
    checkHorizontal: function(){
        var currentSlotIndex = $currentSlot.index()
        if ($currentSlot.css("background-color") !== "rgba(255, 255, 255)"){
            if ($currentSlot.css("background-color") === $currentSlot.parent().prev().children().eq(currentSlotIndex).css("background-color") &&
            $currentSlot.parent().prev().children().eq(currentSlotIndex).css("background-color") === $currentSlot.parent().prev().prev().children().eq(currentSlotIndex).css("background-color") &&
            $currentSlot.parent().prev().prev().children().eq(currentSlotIndex).css("background-color")  === $currentSlot.parent().prev().prev().prev().children().eq(currentSlotIndex).css("background-color") ||
            $currentSlot.css("background-color") === $currentSlot.parent().next().children().eq(currentSlotIndex).css("background-color") &&
            $currentSlot.parent().next().children().eq(currentSlotIndex).css("background-color") === $currentSlot.parent().next().next().children().eq(currentSlotIndex).css("background-color") &&
            $currentSlot.parent().next().next().children().eq(currentSlotIndex).css("background-color")  === $currentSlot.parent().next().next().next().children().eq(currentSlotIndex).css("background-color")) {
            $gameResultOutput.css("color", game.currentPlayer.color)
            $gameResultOutput.text(game.currentPlayer.name + " wins!")
            game.updateScore()
            } 
        }
    },

    checkRightAndDown: function(){
        var currentSlotIndex = $currentSlot.index()
        if ($currentSlot.css("background-color") !== "rgba(255, 255, 255)"){
            if ($currentSlot.css("background-color") === $currentSlot.parent().prev().children().eq(currentSlotIndex - 1).css("background-color") &&
            $currentSlot.parent().prev().children().eq(currentSlotIndex - 1).css("background-color") === $currentSlot.parent().prev().prev().children().eq(currentSlotIndex - 2).css("background-color") &&
            $currentSlot.parent().prev().prev().children().eq(currentSlotIndex - 2).css("background-color")  === $currentSlot.parent().prev().prev().prev().children().eq(currentSlotIndex - 3).css("background-color") ||
            $currentSlot.css("background-color") === $currentSlot.parent().next().children().eq(currentSlotIndex + 1).css("background-color") &&
            $currentSlot.parent().next().children().eq(currentSlotIndex + 1).css("background-color") === $currentSlot.parent().next().next().children().eq(currentSlotIndex + 2).css("background-color") &&
            $currentSlot.parent().next().next().children().eq(currentSlotIndex + 2).css("background-color")  === $currentSlot.parent().next().next().next().children().eq(currentSlotIndex + 3).css("background-color")) {
            $gameResultOutput.css("color", game.currentPlayer.color)
            $gameResultOutput.text(game.currentPlayer.name + " wins!")
            game.updateScore()
            } 
        }
    },

    checkRightAndUp: function(){
       var currentSlotIndex = $currentSlot.index()
       if ($currentSlot.css("background-color") !== "rgba(255, 255, 255)"){
            if ($currentSlot.css("background-color") === $currentSlot.parent().prev().children().eq(currentSlotIndex + 1).css("background-color") &&
            $currentSlot.parent().prev().children().eq(currentSlotIndex + 1).css("background-color") === $currentSlot.parent().prev().prev().children().eq(currentSlotIndex + 2).css("background-color") &&
            $currentSlot.parent().prev().prev().children().eq(currentSlotIndex + 2).css("background-color")  === $currentSlot.parent().prev().prev().prev().children().eq(currentSlotIndex + 3).css("background-color") ||
            $currentSlot.css("background-color") === $currentSlot.parent().next().children().eq(currentSlotIndex - 1).css("background-color") &&
            $currentSlot.parent().next().children().eq(currentSlotIndex - 1).css("background-color") === $currentSlot.parent().next().next().children().eq(currentSlotIndex - 2).css("background-color") &&
            $currentSlot.parent().next().next().children().eq(currentSlotIndex - 2).css("background-color")  === $currentSlot.parent().next().next().next().children().eq(currentSlotIndex - 3).css("background-color")) {
            $gameResultOutput.css("color", game.currentPlayer.color)
            $gameResultOutput.text(game.currentPlayer.name + " wins!")
            game.updateScore()
            }
       }
    } 
}

document.querySelector("#column-1").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-2").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-3").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-4").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-5").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-6").addEventListener("click", game.renderCurrentPlayer)
document.querySelector("#column-7").addEventListener("click", game.renderCurrentPlayer)


game.init()

$($newGame).click(game.init)
