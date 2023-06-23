

import './src/styles/main.css'
import './src/components/Card-Game/style.css'
import './src/components/playerName/style.css'
import './src/components/headerGame/style.css'
import './src/styles/css-variables/colors.css'


import headerGame from './src/components/headerGame'
import ScoreBoard from './src/objects/ScoreBoard'
import cardGame from './src/components/Card-Game'
import BoardGame from './src/objects/BoardGame'


const app = document.querySelector('#app')

app.insertAdjacentHTML('beforeend', 
        `   
            ${headerGame()}
            ${ScoreBoard()}
            ${BoardGame()}
            
        `  
    )
