let tic_tacs = document.querySelectorAll('.grid .grid-item')
let buttons = document.querySelectorAll('.players-info button')
let p1text;
let p2text;

let player_turn;
function goBro(params){
    let name = params.target.parentElement.querySelector('.name-holding').value
    let h1Holder = params.target.parentElement.querySelector('.NameHolder')
    h1Holder.style.display = 'block'
    h1Holder.style.color = 'white'
    h1Holder.textContent = name

    p1text = document.getElementsByClassName('NameHolder')[0].textContent
    p2text = document.getElementsByClassName('NameHolder')[1].textContent
    player_turn = p1text
    
    return name
}





function getName(params) {
    let name = goBro(params)
}




for(let button of buttons){
    button.addEventListener('click', getName)
}
let turnsLeft = 9
let results = document.getElementById('results')
let btn = results.parentElement.getElementsByTagName('button')
let Mainresults = document.getElementById('Main-results')

function GameLogic(event){
    

    if(!p1text=='' && !p2text==''){

        if (player_turn==p1text && !event.target.textContent){
            console.log('its josh')
    
            let X = document.createElement('h1')
            X.classList.add('grid-item-placeholder')
    
            X.textContent = 'X'
            event.target.append(X)
    
            player_turn = p2text
            turnsLeft--
    
    
            if (tic_tacs[0].textContent == 'X' && tic_tacs[1].textContent == 'X' && tic_tacs[2].textContent =='X' || tic_tacs[3].textContent == 'X' && tic_tacs[4].textContent == 'X' && tic_tacs[5].textContent =='X' || tic_tacs[6].textContent == 'X' && tic_tacs[7].textContent == 'X' && tic_tacs[8].textContent =='X' || tic_tacs[0].textContent == 'X' && tic_tacs[3].textContent == 'X' && tic_tacs[6].textContent =='X' || tic_tacs[1].textContent == 'X' && tic_tacs[4].textContent == 'X' && tic_tacs[7].textContent =='X' || tic_tacs[2].textContent == 'X' && tic_tacs[5].textContent == 'X' && tic_tacs[8].textContent =='X' || tic_tacs[0].textContent == 'X' && tic_tacs[4].textContent == 'X' && tic_tacs[8].textContent =='X' || tic_tacs[2].textContent == 'X' && tic_tacs[4].textContent == 'X' && tic_tacs[6].textContent =='X') {
    
    
                Mainresults.style.display = 'block'
                results.textContent = p1text + ' Wins!'
                console.log('hi')
        btn[0].style.display = 'block'

            }
    
    
            
    
            
    
        } 
        
        else if(player_turn==p2text && !event.target.textContent){
            
            let O = document.createElement('h1')
            O.classList.add('grid-item-placeholder')
    
            O.textContent = 'O'
    
            
            event.target.append(O)
    
            player_turn = p1text
            turnsLeft--
    
    
            if (tic_tacs[0].textContent == 'O' && tic_tacs[1].textContent == 'O' && tic_tacs[2].textContent =='O' || tic_tacs[3].textContent == 'O' && tic_tacs[4].textContent == 'O' && tic_tacs[5].textContent =='O' || tic_tacs[6].textContent == 'O' && tic_tacs[7].textContent == 'O' && tic_tacs[8].textContent =='O' || tic_tacs[0].textContent == 'O' && tic_tacs[3].textContent == 'O' && tic_tacs[6].textContent =='O' || tic_tacs[1].textContent == 'O' && tic_tacs[4].textContent == 'O' && tic_tacs[7].textContent =='O' || tic_tacs[2].textContent == 'O' && tic_tacs[5].textContent == 'O' && tic_tacs[8].textContent =='O' || tic_tacs[0].textContent == 'O' && tic_tacs[4].textContent == 'O' && tic_tacs[8].textContent =='O' || tic_tacs[2].textContent == 'O' && tic_tacs[4].textContent == 'O' && tic_tacs[6].textContent =='O') {
    
                Mainresults.style.display = 'block'
                results.textContent = p2text + ' Wins!'
        btn[0].style.display = 'block'
            }
            
        }
    
    
        if(turnsLeft==0){
            console.log('game_finished')
        }
    }

    else{
        results.parentElement.style.display = 'block'
        
        btn[0].style.display = 'none'
        results.textContent = 'Both Users Must enter their names to play!'
    }
    

}
for(let i=0; i<=8; i++){
    tic_tacs[i].addEventListener('click', GameLogic)
    tic_tacs[i].classList.add('grid-item' + '-' +(i+1))
}



let p_again = document.querySelector('.p-again')


function refresh(params) {
    for(let item of tic_tacs){
        item.textContent = ''
        Mainresults.style.display = 'none'
    }
}

p_again.addEventListener('click', refresh)