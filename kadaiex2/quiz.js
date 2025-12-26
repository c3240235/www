
const questions = [
  {
    question: "水瀬いのりの代表的な魅力は？",
    choices: ["低音ボイス", "透明感のある声", "関西弁", "渋い演技"],
    answer: 1
  },
  {
    question: "水瀬いのりが演じたキャラクターは？",
    choices: ["レム（リゼロ）", "中野美玖（五等分の花嫁）", "アスナ（SAO）", "ゼータ（陰実）"],
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

  const buttons = document.querySelectorAll("#choices button");
  buttons.forEach(btn => btn.disabled = true);

  setTimeout(() => {
    currentIndex++;
    if (currentIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  questionEl.textContent = "クイズ終了！";
  choicesEl.innerHTML = "";

  let title = "";

  if (score === 5) {
    title = "🌟 あなたは水瀬いのりマスター！";
  } else if (score >= 3) {
    title = "✨ あなたは水瀬いのりファン！";
  } else {
    title = "📘 これから水瀬いのり沼へようこそ！";
  }

  resultEl.innerHTML = `
    スコア：${score} / ${questions.length}<br>
    <strong>${title}</strong>
  `;
}

showQuestion();
