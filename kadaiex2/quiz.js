
const questions = [
  {
    question: "水瀬いのりの代表的な魅力は？",
    choices: ["低音ボイス", "透明感のある声", "関西弁", "渋い演技"],
    answer: 1
  },
  {
    question: "水瀬いのりが演じたキャラクターは？",
    choices: ["レム", "ナミ", "ミカサ", "胡蝶しのぶ"],
    answer: 0
  },
  {
    question: "水瀬いのりの活動として正しいものは？",
    choices: ["声優のみ", "歌手のみ", "声優と歌手", "舞台俳優"],
    answer: 2
  },
  {
    question: "ファンから評価されている人柄は？",
    choices: ["厳しい", "無口", "優しい", "クール"],
    answer: 2
  },
  {
    question: "水瀬いのりの魅力として正しくないものは？",
    choices: ["演技力", "歌唱力", "表現力", "怖い雰囲気"],
    answer: 3
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.querySelector("#question");
const choicesEl = document.querySelector("#choices");
const resultEl = document.querySelector("#result");
const nextBtn = document.querySelector("#next");
const retryBtn = document.querySelector("#retry");


function showQuestion() {
  questionEl.textContent = questions[currentIndex].question;
  choicesEl.innerHTML = "";
  resultEl.textContent = "";

  
  questions[currentIndex].choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.textContent = choice;

    
    button.addEventListener("click", () => {
      checkAnswer(index);
    });

    choicesEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentIndex].answer) {
    resultEl.textContent = "⭕ 正解！";
    score++;
  } else {
    resultEl.textContent = "❌ 不正解…";
  }
}


nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});


function showResult() {
  questionEl.textContent = `クイズ終了！ 正解数：${score} / ${questions.length}`;
  choicesEl.innerHTML = "";

  if (score === questions.length) {
    resultEl.textContent = "🎉 あなたはいのりマスターです！";
  } else if (score >= 3) {
    resultEl.textContent = "✨ なかなか詳しいですね！";
  } else {
    resultEl.textContent = "📘 もう少し推しを勉強しましょう！";
  }
}


retryBtn.addEventListener("click", () => {
  currentIndex = 0;
  score = 0;
  showQuestion();
});


showQuestion();
