var n = 0;

function checkText() {
    let value = document.getElementById('talkbox').value;  // class로 하면 undefined 뜬다
    let answer = document.getElementsByClassName('answer');
    let answerL = document.getElementById('answerL');
    console.log(value);
    var app = document.getElementById('typed');
    var typewriter = new Typewriter(app, {
        loop: false,
    });

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
            typewriter
            .start()
            .pauseFor(300)
            .typeString('챗봇 명령어: 안녕, 뭐해, 불꺼줘, 불켜줘, 갈게')
            .pauseFor(3000); 
    }
    else if (value == "안녕"){
        answer[0].innerHTML = "반가워";
    } else if (value == "뭐해") {
        answer[0].innerHTML = "난 버피테스트를<br>하고 있어";
    } 
    else if (value == "갈게") {
        answer[0].innerHTML = "잘가 좋은 하루 보내"; 
        typewriter   
        .start()
        .pauseFor(300)
        .typeString('놀아줘서 고마워요')
        .pauseFor(3000);    
    } else if (value.includes("불꺼")) {     // 반복문과 중첩 안되는것인가
        if (n == 0) {
            answer[0].innerHTML = "무슨 말 했어?";       
            n++;     
            typewriter
                .start()
                .pauseFor(300)
                .typeString('알아듣지 못한 것 같다')
                .pauseFor(300)
                .deleteAll()
                .typeString('다시 한 번 말해보자')
                .pauseFor(1000)
                .deleteAll()
                .hide();       //커서 사라지게 하는 법 못찾음
                            
        } else if (n == 1) {            
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
