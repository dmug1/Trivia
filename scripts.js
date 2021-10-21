const game = document.getElementById('game')
const scoreDisplay = document.getElementById('score')
console.log(game,score)


const film = 11
const levels = ['easy','medium','hard']

function addGenre(){
    const column = document.createElement('div')
    column.classList.add('genre-column')

    column.innerHTML = ' this is the genre'

    game.append(column)
}
