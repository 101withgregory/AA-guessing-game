const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})

let numAttempts = 3;
let randomInRange = (min,max)=>{
   return Math.floor(Math.random()*(max-min)+min) ;
}
let secretNum = randomInRange();
 
let checkGuess =(num)=>{
    if(num>secretNum){
        console.log('Too High')
    }else if( num < secretNum){
        console.log('Too Low')
    }else if(num===secretNum){
        console.log('Correct!')
    }
}
let askGuess = ()=>{


    rl.question("Enter a guess: ",answer =>{
        
        let userNum = Number(answer);
        checkGuess(userNum);
        if(userNum===secretNum){
            console.log('YOU WON!')
            rl.close();
        }else{ 
            numAttempts --
            if(numAttempts===0){
                console.log("YOU LOSE!")
                rl.close();
            }else{
                console.log(`You have ${numAttempts} attempts left.`);
                askGuess();
            }
        }
        
    });
    
}

// askGuess();

let askRange = ()=>{
    rl.question("Enter a max number: ", answer =>{
        rl.question('Enter a min number: ',answer2=>{
            console.log("I'm thinking of a number between " + answer + ' and '  + answer2 + '...');
             secretNum =randomInRange(Number(answer),Number(answer2))
            askGuess();
        })
    })
}

let askLimit = () => {
    rl.question('Enter the number of attempts you want to have: ', (answer) => {
      numAttempts = Number(answer);
      askRange();
    });
  };
  
  askLimit();