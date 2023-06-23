import playerName from "../../components/playerName"
import "../../objects/ScoreBoard/style.css"


function ScoreBoard(){

    return `
        <section class='score-board'>
            ${playerName('Player 1')}
            ${playerName('Player 2')}
        </section>
    
    `
}
export default ScoreBoard