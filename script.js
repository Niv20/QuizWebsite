const questions = [
  {
    question: "מה השם הגנרי של דורמיקום?",
    answers: [
      { text: "Ketalar", correct: false },
      { text: "Sugammadex", correct: false },
      { text: "Midazolam", correct: true },
      { text: "Scolin", correct: false },
    ],
    explanation: "דורמיקום הוא השם המסחרי של Midazolam.",
  },
  {
    question: "מה המינון המקסימלי של מנת דורמיקום?",
    answers: [
      { text: "10mg", correct: false },
      { text: "2.5-5mg", correct: false },
      { text: "5mg", correct: true },
      { text: "2.5mg", correct: false },
    ],
    explanation: "מנת הדורמיקום המקסימלית המקובלת היא 5mg.",
  },
  {
    question: "מה הקונטרה אינדיקציה של דורמיקום?",
    answers: [
      { text: "גלאוקומה זווית חדה חריפה", correct: true },
      { text: "לחץ דם מעל 180", correct: false },
      { text: "טרימוס", correct: false },
    ],
    explanation: "דורמיקום אסור בשימוש במצבים של גלאוקומה זווית חדה חריפה.",
  },
  {
    question: "מה הקונטרה אינדיקציה של דורמיקום?",
    answers: [
      { text: "מתחת לגיל חצי שנה", correct: false },
      { text: "לחץ דם מתחת 100", correct: false },
      { text: "לחץ דם מעל 180", correct: true },
      { text: "טרימוס", correct: false },
    ],
    explanation: "לחץ דם גבוה מ-180 הוא גורם שמונע שימוש בדורמיקום.",
  },
  {
    question: "כמה mg צריך לתת למטופל במשקל 80KG?",
    answers: [
      { text: "80mg", correct: false },
      { text: "0.8mg", correct: false },
      { text: "8mg", correct: true },
      { text: "5mg", correct: false },
    ],
    explanation: "המינון המומלץ למטופל במשקל זה הוא 8mg.",
  },
  // המשך שאלות נוספות
  {
    question:
      "יקבל 60 ml עבור משקל 60 KG של דורמיקום מהול ב- NaCl 2 אמפולות. כמה ml המינון?",
    answers: [
      { text: "3ml", correct: false },
      { text: "12ml", correct: false },
      { text: "6ml", correct: true },
      { text: "5ml", correct: false },
    ],
    explanation: "החישוב עבור המינון הנכון מצביע על 6ml.",
  },
  {
    question:
      "דורמיקום עלי להזריק על מנת לקבל 8 ml למטופל? מהול ב- NaCl 2 אמפולות, משקל 80 KG?",
    answers: [
      { text: "2ml", correct: false },
      { text: "4ml", correct: false },
      { text: "6ml", correct: false },
      { text: "8ml", correct: true },
    ],
    explanation: "הכמות המדויקת עבור משקל זה היא 8ml.",
  },
  {
    question: "כמה זמן לוקח ל- IM דורמיקום להשפיע?",
    answers: [
      { text: "5-2M", correct: false },
      { text: "3-2M", correct: true },
      { text: "10-5M", correct: false },
      { text: "14-6M", correct: false },
    ],
    explanation: "דורמיקום משפיע דרך IM בדרך כלל תוך 2-3 דקות.",
  },
  {
    question: "מה המינון של IV שחרור של דורמיקום?",
    answers: [
      { text: "5mg", correct: false },
      { text: "10mg", correct: false },
      { text: "2.5-5mg", correct: true },
      { text: "2.5mg", correct: false },
    ],
    explanation: "המינון המתאים לשחרור IV של דורמיקום הוא 2.5-5mg.",
  },
  {
    question: "איזה גודל טובוס מינימלי נדרש על מנת להשתמש בבוג'י?",
    answers: [
      { text: "6", correct: true },
      { text: "5.5", correct: false },
      { text: "5", correct: false },
      { text: "6.5", correct: false },
    ],
    explanation: "על מנת להשתמש בבוג'י נדרש טובוס בגודל מינימלי של 6 (שישה)",
  },
];

let currentQuestionIndex = 0;
let score = 0; // משתנה חדש לניקוד

function showQuestion(questionData) {
  const questionContainer = document.getElementById("question");
  const answerContainer = document.getElementById("answer-buttons");
  const explanation = document.getElementById("explanation");

  explanation.classList.add("hidden");
  questionContainer.textContent = questionData.question;
  answerContainer.innerHTML = "";

  questionData.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.className = "answer-btn";

    button.onclick = function () {
      // מוצא את הכפתור עם התשובה הנכונה
      const buttons = document.querySelectorAll(".answer-btn");
      const correctButton = Array.from(buttons).find(
        (btn) =>
          btn.textContent === questionData.answers.find((a) => a.correct).text
      );

      if (answer.correct) {
        // תשובה נכונה
        this.classList.add("correct");
        score += 10;
        document.getElementById(
          "explanation-text"
        ).textContent = `תשובה נכונה!\n\n${questionData.explanation}`;
      } else {
        // תשובה שגויה
        this.classList.add("wrong");
        correctButton.classList.add("correct"); // מדגיש את התשובה הנכונה
        document.getElementById(
          "explanation-text"
        ).textContent = `טעית! התשובה הנכונה היא: ${correctButton.textContent}\n\n${questionData.explanation}`;
      }

      explanation.classList.remove("hidden");

      // משבית את כל הכפתורים
      buttons.forEach((btn) => {
        btn.disabled = true;
      });
    };

    answerContainer.appendChild(button);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showQuestion(questions[currentQuestionIndex]);

  document.getElementById("next-button").onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      alert(
        `סיימת את החידון! צברת ${score} נקודות מתוך ${
          questions.length * 10
        } אפשריות. כל הכבוד!`
      );
      currentQuestionIndex = 0;
      score = 0; // מאפס את הניקוד להתחלה חדשה
    }
    showQuestion(questions[currentQuestionIndex]);
  };
});
