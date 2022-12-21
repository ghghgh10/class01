
//todo 룰렛 당첨자 분배
//& 20개 룰렛에 당첨자에 맞게 20 / 당첨자 해서 딱 안떨어지면 공백으로 예: 4명이하면 1-5개 2-5개 3-5개~
//& 3명이 하면 각각 6개씩 룰렛 배정하고 나머지 2개는 공백으로 
//& 분배는 클래스명 _다음이 숫자니깐 split 사용해서 분배 해주면 될거같음.
//& 

//todo 룰렛 색상 
//& 20개의 색상을 배열로 만들어서 예: ['red', 'yellow','green' .....] 해서 이것도 랜덤으로 뽑아서 할때마다 색상 위치 다르게 (물론 숫자 배정도 랜덤)


const spinBtn = document.querySelector('#spin');
const container = document.querySelector('.container');
let randNumber = Math.floor(Math.random() * 7000) + 1000;
let arrrow = document.querySelector('.arrow ');
let roulettes = document.querySelectorAll('.container> div');
let tname = document.querySelector('.tname');
let modal = document.querySelector('.modal');
let modaltext = document.querySelector('.modal> .modaltext');
let closebtn = document.querySelector('.closebtn');

// container.style.transform =  "rotate(-90deg)";
// spinBtn.addEventListener('click', function () {
//     container.classList.add('spingo');
//     document.querySelector('body').classList.add('howu');
//     arrrow.style.display = "none";
//     tname.style.display = 'block';
//     setTimeout(() => {
//         // let randNumA = [0,-45,-90,-135,-180,-225,-270,-315];
//         let randNuM = Math.floor(Math.random() * 8);
//         container.classList.remove('spingo');
//         document.querySelector('body').classList.remove('howu');
//         console.log(`randNuM = ${randNuM}`);
//         // console.log(randNumA[randNuM]);
//         console.log(`roulettes.classList : ${roulettes[randNuM].classList[1].replace('p', '')}`);
//         tname.style.display = 'none';
//         arrrow.style.display = "block";
//         container.style.transform = "rotate(" + roulettes[randNuM].classList[1].replace('p', '') + "deg)";
//         setTimeout(() => {
//             // alert(`당첨자는 : ${roulettes[randNuM].innerText} 입니다!`);
//             if (roulettes[randNuM].innerText != 'RE') {
//                 modaltext.textContent = `당첨자는 ${roulettes[randNuM].innerText} 입니다`;
//                 modal.style.display = 'block';
//             } else {
//                 modaltext.textContent = `다시 돌릴께요 ${roulettes[randNuM].innerText}`;
//                 modal.style.display = 'block';
//                 // setTimeout(() => {
//                 //     container.classList.add('spingo');
//                 //     modal.style.display = 'none';

//                 // }, 1000);
//             };
//         }, 100);
//         $('.closebtn').on('click',function() {
//             modal.style.display = 'none';
//         });
//         console.log(`값 :  ${roulettes[randNuM].innerText}`)
//         console.log(`종료지점 rotate ${container.style.transform}`);
//     }, 3000);
// });


spinBtn.addEventListener('click', function () {
    goSpin();
});



function goSpin() {
    container.classList.add('spingo');
    document.querySelector('body').classList.add('howu');
    arrrow.style.display = "none";
    tname.style.display = 'block';
    setTimeout(() => {
        // let randNumA = [0,-45,-90,-135,-180,-225,-270,-315];
        let randNuM = Math.floor(Math.random() * 8);
        container.classList.remove('spingo');
        document.querySelector('body').classList.remove('howu');
        console.log(`randNuM = ${randNuM}`);
        // console.log(randNumA[randNuM]);
        console.log(`roulettes.classList : ${roulettes[randNuM].classList[1].replace('p', '')}`);
        tname.style.display = 'none';
        arrrow.style.display = "block";
        container.style.transform = "rotate(" + roulettes[randNuM].classList[1].replace('p', '') + "deg)";
        setTimeout(() => {
            // alert(`당첨자는 : ${roulettes[randNuM].innerText} 입니다!`);
            if (roulettes[randNuM].innerText != 'RE') {
                modaltext.textContent = `당첨자는 ${roulettes[randNuM].innerText} 입니다`;
                modal.style.display = 'block';
            } else {
                modaltext.textContent = `다시 돌릴께요 ${roulettes[randNuM].innerText}`;
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.style.display = 'none';
                    goSpin();
                }, 1000);
            };
        }, 100);
        $('.closebtn').on('click',function() {
            modal.style.display = 'none';
        });
        console.log(`값 :  ${roulettes[randNuM].innerText}`)
        console.log(`종료지점 rotate ${container.style.transform}`);
    }, 3000);
}


const roulettesbox = 20;
let targetNum = 0;
let shareNum = 0;
let rouletPostionA = [0, 1, 2, 3, 4, 5, 6, 7]
function setNumber(numberYo) {
    targetNum = roulettes.length / numberYo;
    targetNum = Math.floor(targetNum);
    shareNum = roulettes.length % numberYo;
    console.log(`참가자 각각 : ${targetNum} 개씩 배정`);
    console.log(`다시돌리기 : ${shareNum} 개씩 배정`);

    let rouletRandNum = Math.floor(Math.random() * rouletPostionA.length);

    roulettes.forEach((item, index) => {
    
    });

};


let targetggggg = 3;

function fen(anum, bnum, targetggggg) {
    let clonerouletPostionA = [...rouletPostionA];
    console.log(clonerouletPostionA);
    for (x = 1; x <= targetggggg; x++) {
        for (let i = 0; i < anum; i++) {
            let randddd = Math.floor(Math.random() *clonerouletPostionA.length);
            if (x == targetggggg - anum) {
                roulettes[randddd].innerHTML = 1;
                console.log('누구냐 :', roulettes[randddd]);
                clonerouletPostionA.splice(randddd, 1);
                console.log(clonerouletPostionA);
            } else if (x == targetggggg - anum + 1) {
                roulettes[randddd].innerHTML = 2;
                console.log('누구냐 :', roulettes[randddd]);
                clonerouletPostionA.splice(randddd, 1);
                console.log(clonerouletPostionA);
            } else if (x == targetggggg) {
                roulettes[randddd].innerHTML = 3;
                console.log('누구냐 :', roulettes[randddd]);
                clonerouletPostionA.splice(randddd, 1);
                console.log(clonerouletPostionA);
            } else {
                console.log(clonerouletPostionA);
                roulettes[randddd].innerHTML = Re;
                
            }
        }
    }

}

// fen(2,2,targetggggg)











function aaa(n) {
    let a = 8/n
}

// setNumber(targetggggg);



