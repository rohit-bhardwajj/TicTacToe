let audioTurn = new Audio("turn.wav");
let gameOver = new Audio("lose.mp3");
let isGameOver = false;
let turn = "X";
// let noempty = true;
let count =9;
//function change the turn 
const changeTurn = ()=>{
    return turn === "X"? "0":"X";
}

// function to check Win 

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins =[
        [0,1,2],//in , in &,in positions k span.innerText equal hote hi turn wala wins
        [3,4,5],//span ka is no. ka innertext , is no. ka ,& is no. ka innertext if gets same turn wins
        [6,7,8],//e[0]=6,e[1]=7,e[2]=8
        [2,4,6],//[span[6th innertext],span[7th innertext],span[8th innertext]] are equal 
        [0,4,8],
        [0,3,6],//it'll compare all cases and one will match and winner will be declared
        [1,4,7],
        [2,5,8],
    ];
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText!=='')&&(boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) &&(boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)){
            isGameOver=true;
            gameOver.play();
            document.querySelector('.info').innerText ='🥳' +boxtexts[e[0]].innerText + ' Won';//audio
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height='250px';
        }
    })
}

//game logic

let boxes = document.getElementsByClassName("box");//selecting boxes/divs
Array.from(boxes).forEach(element=>{//converting in array the collection of html elements
 let boxtext = element.querySelector('.boxtext');//selecting the span of that element which is clicked
//then modify its innerText
 element.addEventListener('click',()=>{
    if(boxtext.innerText === ''){
        boxtext.innerText = turn;//setting"x"when div is clicked and changing turn's value to 0 if its x
        if(count>0){
            count--;
            // console.log(count);
        }
        turn =changeTurn();
        audioTurn.play();
        checkDraw();
        checkWin();
     if(isGameOver!=true){
        document.getElementsByClassName("info")[0].innerText= 'Turn for '+turn;
     }
    }
 })
   
})

//if game ends being a draw
const checkDraw=()=>{
if((count==0)&&(!isGameOver)){
    document.querySelector('.info').innerText = 'Oops No one won! \n Try again you both';
    console.log('Detected game draw,huihui');
    isGameOver=true;
}

}

reset.addEventListener('click',()=>{
    let boxes = document.getElementsByClassName('boxtext');
    for(box of boxes){
        box.innerText='';
    }
    isGameOver=false;
    count=9;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.height='0';
    document.querySelector('.info').innerText='Play again!';
});
