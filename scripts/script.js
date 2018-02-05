var game = {
    players: [{name: "red", color: "red"}, {name: "yellow", color: "yellow"}],
    currentPlayer: null,
    done: false,
    init: function(){
        console.log('Game initialized')
        game.currentPlayer = game.players[0]

    },
    switchPlayer: function(){
        if (game.currentPlayer === game.players[0]){
            game.currentPlayer = game.players[1]
        } 
        else {
            game.currentPlayer = game.players[0]
        }
//     },
//   checkVertical: function(){

//     },
//   checkHorizontal: function (){

//     },
//   checkRightAndDown: function (){

//     },
//   checkRightAndUp: function(){

//     }

    }
}

game.init()

// establish variables and click events

var $column1 = $('#column-1')
var $column2 = $('#column-2')
var $column3 = $('#column-3')
var $column4 = $('#column-4')
var $column5 = $('#column-5')
var $column6 = $('#column-6')
var $column7 = $('#column-7')

var $row = $('.row')



//add click events for all columns, so that when you click on a column, your disk goes down that column
function renderCurrentPlayer(){
    var $this = $(this)
    console.log('clicked')
    for (i = 5; i >= 0; i--){
        var $newSlot = $this.children().eq(i)
        console.log($newSlot)
        console.log($newSlot.css("background-color"))
        if ($newSlot.css("background-color") === "rgba(0, 0, 0, 0)"){
            $newSlot.css("background-color", game.currentPlayer.color) 
            game.switchPlayer()
            return
        }
    }   
}


$($column1).click(renderCurrentPlayer)
$($column2).click(renderCurrentPlayer)
$($column3).click(renderCurrentPlayer)
$($column4).click(renderCurrentPlayer)
$($column5).click(renderCurrentPlayer)
$($column6).click(renderCurrentPlayer)
$($column7).click(renderCurrentPlayer)

