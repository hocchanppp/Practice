const quiz = [
  {question: 'ジブリ映画で一番興行収入が高かった作品は、次のうちどれでしょうか？',
    answers: ['もののけ姫', 'となりのトトロ', '千と千尋の神隠し', 'ハウルの動く城'],
    correct: '千と千尋の神隠し'
  },
  {question: 'ジブリで一番人気のキャラクターは誰でしょう？',
    answers: ['ポルコ・ロッソ', 'ハク', 'アシタカ', 'カルシファー'],
    correct: 'ハク'
  }, 
  {question: 'ラピュタでドーラがパズーに言った一言、「〇〇秒で支度しな」',
    answers: ['10秒','20秒', '30秒', '40秒'],
    correct: '40秒'
  },
  {question:　'となりのトトロに出てくるサツキとメイの名字は何でしょう？',
    answers:　['草壁','日下','木下','草加'],
    correct:　'草壁'
  },
  {question:　'映画『千と千尋の神隠し』で千尋とエレベーターで乗り合わせたのは何の神様でしょうか？',
    answers:　['ひよこ','ゴミ','大根','川'],
    correct:　'大根'
  },
]
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！')
    score++;
  } else {
    window.alert('不正解！')
  }
  quizIndex++;
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
  
}




//ボタンクリックで正誤判定
let handlerIndex = 0
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
  clickHandler(e);
});
handlerIndex++;
}


      