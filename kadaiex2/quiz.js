
const questions = [
  {
    question: "水瀬いのりの声はファンの中でなにと言われている",
    choices: ["低音ボイス", "クリスタルボイス", "デスボイス", "高音ボイス"],
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
    question: "水瀬いのりのラジオ作品はどれ？",
    choices: ["水瀬いのりmusicflag", "水瀬いのりとしたい", "水瀬いのりmelodyflag", "みなせいのり町のラジオ放送局"],
    answer: 2
  },
  {
    question: "水瀬いのりのデビュー曲はどれ？",
    choices: ["夢の始まり", "夢のつづき", "夢のありか", "夢のつぼみ"],
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
    title = "🌟 あなたはいのりまち町民です！";
  } else if (score >= 3) {
    title = "✨ あなたはいのりンファンです！";
  } else {
    title = "📘 これからどんどん沼ってください！";
  }

  resultEl.innerHTML = `
    スコア：${score} / ${questions.length}<br>
    <strong>${title}</strong>
  `;
}

showQuestion();
