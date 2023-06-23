import cardGame from "../../components/Card-Game"
import "../../objects/BoardGame/style.css"

function BoardGame(){
    return `
        <section class='board-game'>
            ${cardGame().repeat(6)}
        </section>
    `
}
export default BoardGame