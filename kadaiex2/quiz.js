const questions = [
  {
    question: "水瀬いのりの代表的な魅力は？",
    choices: ["低音ボイス", "透明感のある声", "関西弁", "渋い演技"],
    answer: 1
  },
  {
    question: "水瀬いのりが演じたキャラクターは？",
    choices: ["レム", "ミカサ", "ナミ", "釘崎野薔薇"],
    answer: 0
  },
  {
    question: "水瀬いのりの活動で正しいものは？",
    choices: ["声優のみ", "歌手のみ", "声優と歌手", "舞台俳優"],
    answer: 2
  },
  {
    question: "ファンから評価されている点は？",
    choices: ["厳しい態度", "無口", "優しさ", "ミステリアス"],
    answer: 2
  },
  {
    question: "水瀬いのりの魅力として適切でないものは？",
    choices: ["演技力", "歌唱力", "人柄", "怖い雰囲気"],
    answer: 3
  }
];

let current = 0;
let score = 0;

const questionEl = document.querySelector("#question");
const choicesEl = document.querySelector("#choices");
const resultEl = document.querySelector("#result");
const nextBtn = document.querySelector("#next");
const retryBtn = document.querySelector("#retry");

function showQuestion() {
  questionEl.textContent = questions[current].question;
  choicesEl.innerHTML = "";

  questions[current].choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(index));
    choicesEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[current].answer) {
    resultEl.textContent = "正解！";
    score++;
  } else {
    resultEl.textContent = "不正解…";
  }
}

nextBtn.addEventListener("click", () => {
  current++;
  resultEl.textContent = "";

  if (current < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = `終了！ 正解数は ${score} / ${questions.length}`;
    choicesEl.innerHTML = "";
  }
});

retryBtn.addEventListener("click", () => {
  current = 0;
  score = 0;
  resultEl.textContent = "";
  showQuestion();
});

showQuestion();
