
import './style.css'

function PlayerScore(points) {

    return /* html */ `
        <ol class="player-score" data-points="${points}">
            <li class="points">Um</li>
            <li class="points">Dois</li>
            <li class="points">Três</li>
        </ol>
    `
}

export default PlayerScore