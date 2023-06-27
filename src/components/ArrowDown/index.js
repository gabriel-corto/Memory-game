
import "./style.css"

function ArrowDown (currentPlayer) {
    return /* html */ `
    <div class="arrow">
        <div class="arrow-down" data-currentPlayer="${currentPlayer}">
            <i class="fa-solid fa-angles-down"></i>
        </div>
    </div>
    `
}   

export default ArrowDown