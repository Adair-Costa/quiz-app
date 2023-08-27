const btns = window.document.querySelectorAll('#btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    window.document
      .querySelector('.toggle-color')
      ?.classList.remove('toggle-color');

    btn.classList.add('toggle-color');
  });
});

// const quizData = [
//   {
//     title: 'HTML is a...',
//     btn1: 'Programming language',
//     btn2: 'Markup language',
//     btn3: 'Robotic language',
//     btn4: 'Machine language',
//     right: 'btn2',
//   },
//   {
//     title: 'JavaScript is...',
//     btn1: 'Programming language',
//     btn2: 'Machine language',
//     btn3: 'Robotic language',
//     btn4: 'Markup language',
//     right: 'btn1',
//   },
//   {
//     title: 'MongoDB is...',
//     btn1: 'Robotic language',
//     btn2: 'Markup language',
//     btn3: 'Programming language',
//     btn4: 'Database software',
//     right: 'btn4',
//   },
//   {
//     title: 'NodeJs is...',
//     btn1: 'Machine language',
//     btn2: 'Markup language',
//     btn3: 'Open source software',
//     btn4: 'Programming language',
//     right: 'btn3',
//   },
//   {
//     title: 'CSS3 is...',
//     btn1: 'Language style',
//     btn2: 'Data base',
//     btn3: 'Lib',
//     btn4: 'Framework',
//     right: 'btn1',
//   },
// ];

// const btn1 = window.document.querySelector('.chooses1');
// const btn2 = window.document.querySelector('.chooses2');
// const btn3 = window.document.querySelector('.chooses3');
// const btn4 = window.document.querySelector('.chooses4');

// console.log(btn1.innerHTML);
// console.log(btn2.innerHTML);
// console.log(btn3.innerHTML);
// console.log(btn4.innerHTML);
