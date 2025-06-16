let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#resetbtn");
let newbtn=document.querySelector("#new-btn");
let container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turn0=true;

const winpat=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
const reset = () => {
    turn0 = true;
    enable();
    container.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click" ,()=> {
        if(turn0){
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText = "x";
            turn0 = true;
        }
       box.disabled=true;

       checkWinner();
    });
});

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enable = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulation!, Winner is ${winner}`;
    container.classList.remove("hide");
    disable();
}
const checkWinner =()=>{
    for(let pattern of winpat){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
    
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
            }
        }
    }
};

newbtn.addEventListener("click" ,reset);
resetbtn.addEventListener("click",reset);