document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("questionsAnswered") === "true") {
      showTitleScreen();
    } else {
      showQuestion(1);
    }
  });
  
  function nextQuestion(currentQuestion) {
    const answer = document.getElementById(`answer-${currentQuestion}`).value;
    localStorage.setItem(`answer-${currentQuestion}`, answer);
  
    if (currentQuestion === 3) {
      localStorage.setItem("questionsAnswered", "true");
      showTitleScreen();
    } else {
      showQuestion(currentQuestion + 1);
    }
  }
  
  function showQuestion(questionNumber) {
    document.getElementById("question-container").style.display = "flex";
    document.querySelectorAll(".card").forEach(card => {
      card.style.display = "none";
    });
    document.getElementById(`question-${questionNumber}`).style.display = "block";
  }
  
  function showTitleScreen() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("title-screen").style.display = "flex";
  }
  