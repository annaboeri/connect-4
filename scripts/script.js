var game = {
    players: [{name: "Player 1", color: "red"}, {name: "Player 2", color: "yellow"}],
    currentPlayer: null,
    init: function(){
        console.log('Game initialized')
        game.currentPlayer = game.players[0]
    },
    resetGame: function(){
        console.log("GAME OVER")
        game.init()
        $row.css("background-color", "rgb(255, 255, 255)")
    },

    switchPlayer: function(){
        if (game.currentPlayer === game.players[0]){
            game.currentPlayer = game.players[1]
        } 
        else {
            game.currentPlayer = game.players[0]
        }
     },
    
    renderCurrentPlayer: function(){

        for (var i = 5; i >= 0; i--){
            var $newSlot = $(this).children().eq(i)
            console.log($(this).children())
           // console.log($newSlot)
            if ($newSlot.css("background-color") === "rgb(255, 255, 255)"){
               var $previousSlots = $newSlot.prevAll()
                console.log($newSlot.eq())
                for (var j = 0; j < i; j++){
                    var $otherSlot = $(this).children().eq(j)
                    $otherSlot.css("background-color", "pink")
                   // setTimout( "$otherSlot.css('background-color', 'rgb(255, 255, 255)')" , 1000)

                }    
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
            alert(game.currentPlayer.name + " ,you won!")
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
            alert(game.currentPlayer.name + " ,you won!")
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
            alert(game.currentPlayer.name + " ,you won!")
            game.updateScore()
            }
       }
    } 
}
    
game.init()

var $currentSlot 
var $newGame = $('#new-game')
var $player1Score = $('#player-1-score')
var $player2Score = $('#player-2-score')
var $gameResultOutput = $('#game-result-output')
var $row = $('.row')

var currentPlayer1Score = 0
var currentPlayer2Score = 0

var $column1 = $('#column-1')
var $column2 = $('#column-2')
var $column3 = $('#column-3')
var $column4 = $('#column-4')
var $column5 = $('#column-5')
var $column6 = $('#column-6')
var $column7 = $('#column-7')


var $row1 = $('.row-1')
var $row2 = $('.row-2')
var $row3 = $('.row-3')
var $row4 = $('.row-4')
var $row5 = $('.row-5')
var $row6 = $('.row-6')
var $row7 = $('.row-7')


$($column1).click(game.renderCurrentPlayer)
$($column2).click(game.renderCurrentPlayer)
$($column3).click(game.renderCurrentPlayer)
$($column4).click(game.renderCurrentPlayer)
$($column5).click(game.renderCurrentPlayer)
$($column6).click(game.renderCurrentPlayer)
$($column7).click(game.renderCurrentPlayer)

$($newGame).click(game.resetGame)
