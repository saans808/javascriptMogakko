var n = 0;

function checkText() {
    let value = document.getElementById('talkbox').value;  // class로 하면 undefined 뜬다
    let answer = document.getElementsByClassName('answer');
    let answerL = document.getElementById('answerL');
    console.log(value);

    const buttonClickErase = document.getElementsByClassName('textbox');
    //버튼을 누르면 쓴 글이 사라짐
    for (var i=0; i< buttonClickErase.length; i++){
        buttonClickErase[i].value='';
    }
/*
    function enter(){
        if (window.event.keyCode == 13){
        }
    }
    //엔터 입력 구현 실패 */

    if (value == "") {
            answer[0].innerHTML = "으쌰으쌰";
    }
    else if (value == "안녕"){
        answer[0].innerHTML = "반가워";
    } else if (value == "뭐해") {
        answer[0].innerHTML = "난 버피테스트를 하고 있어";
    } 
    else if (value == "갈게") {
        answer[0].innerHTML = "잘가 좋은 하루 보내";       
    } else if (value.includes("불꺼")) {  
        if (n == 0) {
            answer[0].innerHTML = "무슨 말 했어?";
            n++;
        } 
        else if (n == 1) {            
            answer[0].innerHTML = "날 못 볼까봐<br>손전등을 켰어";
            document.getElementById("bodyColor").style.backgroundColor = "#424242";
            document.getElementById("answerL").style.color = "#ffffff"; //class로 하니까 안됨
            n++;
        }  else if (n >= 2) {
            answer[0].innerHTML = "이미 어둡잖아!";   
        } 
    } else if (value.includes("불켜")) {
        answer[0].innerHTML = "빛이 있어 세상은<br>밝고 따뜻해~";
        // /n 개행안됨
        document.getElementById("bodyColor").style.backgroundColor = "#ffffff";
        document.getElementById("answerL").style.color = "#000000";
        n = 1; // 불을 켰다 끌 때 n == 1로 돌아감 
    } else {
        answer[0].innerHTML = "그 말은 아직<br>못배웠어";  
    }
}
