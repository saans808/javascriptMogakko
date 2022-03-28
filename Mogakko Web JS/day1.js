var n = 0;
var answer = document.getElementsByClassName('answer');

var question=""; //질문
var qanswer=""; //json질문에 대한 답
var key = 0; //말을 배우는 상황인지 아닌지 판별
var json = [{
        "question" : "이름",
        "qanswer" : "산스"
    },
    {
        "question" : "안녕",
        "qanswer" : "반가워"
    },
    {
        "question" : "몇살",
        "qanswer" : "1살"
    },
    {
        "question" : "뭐해",
        "qanswer" : "난 버피테스트를 하고 있어"
    }];

var app = document.getElementById('typed');
var typewriter = new Typewriter(app, {
    loop: false
});

function enter(){   //엔터 입력 
    if (window.event.keyCode == 13){
        checkText();
    }
}
 ///////////////////////////////////////////////////////////////////////////////////////////
function checkText() {
    let value = document.getElementById('talkbox').value;  // class로 하면 undefined 뜬다
    let answerL = document.getElementById('answerL');
    console.log(value);

    const buttonClickErase = document.getElementsByClassName('textbox');
    //버튼을 클릭시 텍박초기화
    for (var i=0; i< buttonClickErase.length; i++){
        buttonClickErase[i].value='';
    }

    if (value == "") {
        answer[0].innerHTML = "으쌰으쌰 폴짝!";
        typewriter
        .start()
        .pauseFor(10)
        .typeString('챗봇 기본 명령어: 안녕, 이름, 몇살, 뭐해, 불꺼줘, 불켜줘, 갈게, 그 외')
        .pauseFor(3000)
        .deleteAll();

    } else if (value == "갈게") {
        answer[0].innerHTML = "잘가 좋은 하루 보내 폴짝!"; 
        typewriter   
        .start()
        .pauseFor(30)
        .typeString('놀아줘서 고마워요')
        .pauseFor(2000)
        .deleteAll();    

    } else if (value.includes("불꺼")) {
        if (n == 0) {
            answer[0].innerHTML = "무슨 말 했어?";     
            n++;     
 /*           typewriter        //으쌰 이후 바로 입력하면 늦게 뜸   
                .start()
                .typeString('알아듣지 못한 것 같다')
                .pauseFor(20)
                .deleteAll()
                .typeString('다시 한 번 말해보자')
                .pauseFor(10)
                .deleteAll();    //커서 사라지게 하는 법 못찾음 */
                            
        } else if (n == 1) {            
            answer[0].innerHTML = "날 못 볼까봐 손전등을 켰어";
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
    } else learningText(value)
}
//다른 말을 입력하면 모른다 해야되는데 이미 저장한 말에 저장됨(말가르치기문제)
//////////////////////////////////////////////////////////////////////////////////////////////
//                      말배우기 코드 
///////////////////////////////////////////////////////////////////////////////////////////// 

function pushJson(){
	//json.push({question: `${question}`, qanswer: `${qanswer}`}); 
    json.push({question: `${question}`, qanswer: `${qanswer}` + ` 폴짝!`}); //json이라는 데이터에 값을 추가하는 push함수
    answer[0].innerHTML = "말을 배웠다 폴짝!";
	key = 0; //키 값 0으로 초기화
}

function learningText(value){ 
    if (key == 1){ //key 값이 1인 경우, 사용자의 선택 유도
        if(value == "그래"){
            answer[0].innerHTML = `(${question})의 대답을 알려줘`;
            key = 2; //key 값을 2로 만들어, 대답을 입력받는 조건으로 변경
        } else {
            answer[0].innerHTML = "아쉽다 폴짝!";
            key = 0; // key값을 다시 0으로 변경하여 상태 변경
        }
        return; 
    } 
    if (key == 2){
        qanswer = value; //전역변수 answer값에 사용자의 입력을 저장
        answer[0].innerHTML = `${question}(이)라는 말에 ${qanswer}(이)라는 답변이 저장됐어`;
        pushJson(); //json 데이터에 값을 추가하는 함수
        return; //이 return을 넣으니 말 가르치기 문제가 해결됐다
    }

    for(let i=0; i<json.length; i++){
        if(value == json[i].question){
            answer[0].innerHTML=json[i].qanswer;
            return;
        }
    }

    answer[0].innerHTML="그 말은 아직 못배웠어<br>말을 가르쳐 줄래?<br>(그래 or 아니)";
    question = value;
    key = 1;           
}    