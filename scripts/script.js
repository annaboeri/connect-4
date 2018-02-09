
var $flexContainer = $('.flex-container')
var $newGame = $('#new-game')
var $player1Score = $('#player-1-score')
var $player2Score = $('#player-2-score')
var $player1Box = $('#player-1-box')
var $player2Box = $('#player-2-box')
var $playerBox = $('.info')
var $row = $('.row')
var $currentSlot 
var currentPlayer1Score = 0
var currentPlayer2Score = 0


var game = {
    players: [{name: "Player 1", color: "red"}, {name: "Player 2", color: "yellow"}],
    currentPlayer: null,
    gameOver: false,
    init: function(){
        var backgroundMusic = new Audio ('sounds/background-song.mp3')
        backgroundMusic.play()
        game.currentPlayer = game.players[0]
        game.setPlayerColor()
        $newGame.text("New Game")
        $('#column-1').click(game.renderCurrentPlayer)
        $('#column-2').click(game.renderCurrentPlayer)
        $('#column-3').click(game.renderCurrentPlayer)
        $('#column-4').click(game.renderCurrentPlayer)
        $('#column-5').click(game.renderCurrentPlayer)
        $('#column-6').click(game.renderCurrentPlayer)
        $('#column-7').click(game.renderCurrentPlayer)
        $($newGame).off("click", game.init)
        $($newGame).click(game.resetGame)
    },
    resetGame: function(){
        game.gameOver = false
        game.currentPlayer = game.players[0]
        $row.css("background-color", "rgb(255, 255, 255)")
        $player1Box.css("background-color", "rgba(255, 255, 255, 0.95)")
        $player2Box.css("background-color", "rgba(255, 255, 255, 0.95)")
        
    },
    setPlayerColor: function(){
        swal(game.currentPlayer.name + ", choose your color", {
          closeOnClickOutside: false,
          buttons: {
            green: {
                value: 'rgb(51, 204, 51)',
                className: "green-btn"
            },
            yellow: {
                value: 'rgb(255, 255, 0)',
                className: "yellow-btn"
            },
            pink: {
                value: 'rgb(255, 51, 153)',
                className: "pink-btn"
            },
            orange: {
                value: 'rgb(255, 140, 26)',
                className: "orange-btn"
            },
          }
        })
        .then(function(value){      
            game.currentPlayer.color = value
            if(game.currentPlayer !== game.players[1]){
                game.currentPlayer = game.players[1]
                game.setPlayerColor()
            } else{
                game.currentPlayer = game.players[0]
            }
        })
    },
    switchPlayer: function(){
        if (game.currentPlayer === game.players[0]){
            game.currentPlayer = game.players[1]
            $player1Box.css("background-color", "rgba(255, 255, 255, 0.95)")
            $player2Box.css("background-color", game.currentPlayer.color)

        } 
        else {
            game.currentPlayer = game.players[0]
            $player2Box.css("background-color", "rgba(255, 255, 255, 0.95)")
            $player1Box.css("background-color", game.currentPlayer.color)
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
            var diskDropSound = new Audio ('sounds/disk-drop.wav')
            diskDropSound.play()
            $currentSlot = $newSlot
            game.switchPlayer()
            game.checkVertical()
            game.checkHorizontal()
            game.checkRightAndDown()
            game.checkRightAndUp()
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
                swal(game.currentPlayer.name + " wins!")
                $playerBox.css("background-color", "rgba(255, 255, 255, 0.95)")
                game.updateScore()
                game.gameOver = true
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
            swal(game.currentPlayer.name + " wins!")
            $playerBox.css("background-color", "rgba(255, 255, 255, 0.95)")
            game.updateScore()
            game.gameOver = true
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
            swal(game.currentPlayer.name + " wins!")
            $playerBox.css("background-color", "rgba(255, 255, 255, 0.95)")
            game.updateScore()
            game.gameOver = true
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
            swal(game.currentPlayer.name + " wins!")
            $playerBox.css("background-color", "rgba(255, 255, 255, 0.95)")
            game.updateScore()
            game.gameOver = true
            }
       }
    } 
}

if ($newGame.text() === "Start Game"){
    $($newGame).on("click", game.init)
} 







