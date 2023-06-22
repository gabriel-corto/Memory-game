

import './src/styles/main.css'
import './src/components/cardGame/style.css'
import './src/components/playerName/style.css'
import './src/components/headerGame/style.css'
import './src/styles/css-variables/colors.css'

import boardGame from './src/components/BoardGame'
import playerName from './src/components/playerName'
import headerGame from './src/components/headerGame'

const app = document.querySelector('#app')

app.insertAdjacentHTML('beforeend', 
        `   
            ${headerGame()}

            <section class='players'>
                ${playerName('Player 1')}
                ${playerName('Player 2')}
            </section>
            
            <section class='grid-cards'>
                ${boardGame(6)}
            </section> 
         `  
    )
