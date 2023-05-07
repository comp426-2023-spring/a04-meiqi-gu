// Location for exported RPS and RPSLS functions. 

export function rps(input='') {
    const options = ['rock', 'paper', 'scissors']; 
    const min = 0;
    const max = 2;
    const ranNum = Math.floor(Math.random() * (max - min + 1) + min); 
    const random = options[ranNum]; 
    const opponent = random; 

    if (input=='') {
        const empty = {
            player: ''
        }
        empty.player = random; 
        return JSON.stringify(empty); 
    }

    const play = {
        player: input, 
        opponent: opponent, 
        result: '', 
    }

    if (input=='rock') {
        if (opponent=='rock') {
            play.result = 'tie'; 
        } else if (opponent=='paper') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else if (input=='paper') {
        if (opponent=='paper') {
            play.result = 'tie'; 
        } else if (opponent=='scissors') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else if (input=='scissors') {
        if (opponent=='scissors') {
            play.result = 'tie'; 
        } else if (opponent=='rock') {
            play.result = 'lose'; 
        } else {
            play.result = 'win'; 
        }
    } else {
        return `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`; 
    }

    return JSON.stringify(play); 

}

export function rpsls(input='') {
    const options = ['rock', 'paper', 'scissors', 'lizard', 'spock']; 
    const min = 0;
    const max = 4;
    const ranNum = Math.floor(Math.random() * (max - min + 1) + min); 
    const random = options[ranNum]; 
    const opponent = random; 

    if (input=='') {
        const empty = {
            player: ''
        }
        empty.player = random; 
        return JSON.stringify(empty); 
    }

    const play = {
        player: input, 
        opponent: opponent, 
        result: '', 
    }

    if (input=='rock') {
        if (opponent=='rock') {
            play.result='tie'; 
        } else if (opponent=='paper' || opponent=='spock') {
            play.result='lose'; 
        } else {
            play.result='win'; 
        }
    } else if (input=='paper') {
        if (opponent=='paper') {
            play.result='tie'; 
        } else if (opponent=='scissors' || opponent=='lizard') {
            play.result='lose'; 
        } else {
            play.result='win'; 
        }
    } else if (input=='scissors') {
        if (opponent=='scissors') {
            play.result='tie'; 
        } else if (opponent=='spock' || opponent=='rock') {
            play.result='lose'; 
        } else {
            play.result='win'; 
        }
    } else if (input=='lizard') {
        if (opponent=='lizard') {
            play.result='tie'; 
        } else if (opponent=='scissors' || opponent=='rock') {
            play.result='lose'; 
        } else {
            play.result='win'; 
        }
    } else if (input=='spock') {
        if (opponent=='spock') {
            play.result='tie'; 
        } else if (opponent=='paper' || opponent=='lizard') {
            play.result='lose'; 
        } else {
            play.result='win'; 
        }
    } else {
        return `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock SMOOSHES Lizard
        - Lizard POISONS Spock
        - Spock SMASHES Scissors
        - Scissors DECAPITATES Lizard
        - Lizard EATS Paper
        - Paper DISPROVES Spock
        - Spock VAPORIZES Rock
        - Rock CRUSHES Scissors`;
    }

    return JSON.stringify(play); 

}
