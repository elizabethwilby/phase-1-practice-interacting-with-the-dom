document.addEventListener("DOMContentLoaded", () => {
  const counter = document.getElementById("counter");
  const minus = document.getElementById("minus");
  const plus = document.getElementById("plus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const comments = document.getElementById("list");
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const likes = document.querySelector(".likes");

  let count = 0;
  let timer;
  const likeCounts = {};

  function updateCounter() {
    counter.textContent = count;
  }

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      count++;
      updateCounter();
    }, 1000);
  }

  startTimer();
  plus.addEventListener("click", () => {
    count++;
    updateCounter();
  });

  minus.addEventListener("click", () => {
    count--;
    updateCounter();
  });

  heart.addEventListener("click", () => {
    likeCounts[count] = (likeCounts[count] || 0) + 1;

    let existingLike = document.querySelector(`[data-num="${count}"]`);

    if (existingLike) {
      existingLike.textContent = `${count} has been liked ${likeCounts[count]} times`;
    } else {
      const li = document.createElement("li");
      li.dataset.num = count;
      li.textContent = `${count} has been liked 1 time`;
      likes.appendChild(li);
    }
  });

  pause.addEventListener("click", () => {
    const buttons = document.querySelectorAll("button");
    if (pause.textContent === "pause") {
        clearInterval(timer);
        pause.textContent = "resume";
        buttons.forEach((button) => {
            if(button !== pause) {
                button.disabled = true;
            }
        });
    } else {
        startTimer();
        pause.textContent = "pause";
        buttons.forEach((button) => {
            button.disabled = false;
        });
    }
});

commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const p = document.createElement('p');
    p.textContent = commentInput.value;

    comments.appendChild(p);
    commentInput.value= '';
});

});
