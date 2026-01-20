// 每日一句英文 
const quotes = [ 
  "Believe you can and you're halfway there.", 
  "Success is not final, failure is not fatal: it is the courage to continue that counts.", 
  "The best way to predict the future is to create it.", 
  "Don't watch the clock; do what it does. Keep going.", 
  "You are never too old to set another goal or to dream a new dream."
]; 
function showRandomQuote() { 
  const quote = quotes[Math.floor(Math.random() * quotes.length)]; 
  document.getElementById("daily-quote").innerText = quote;     // 把隨機挑選的名言文字顯示到 HTML 裡的 <p id="daily-quote"> 元素中。
}


// 預設載入時顯示一句
showRandomQuote();


// 英文文章展示
const articles = [
  {
    title: "Why Learn English?",
    content: "English is a global language. Learning it opens doors to international communication..."
  },
  {
    title: "The Power of Habit",
    content: "Habits shape our lives more than we realize. Understanding habits can help us change them..."
  }
];

const list = document.getElementById("article-list");

articles.forEach((a, i) => {
  const card = document.createElement("div");
  card.className = "card mb-3";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerText = a.title;

  const text = document.createElement("p");
  text.className = "card-text";
  text.id = `text-${i}`;
  text.innerText = a.content.substring(0, 60) + "...";

  const button = document.createElement("button");
  button.className = "btn btn-outline-primary";
  button.innerText = "Show More";
  button.onclick = () => toggleText(i);

  cardBody.appendChild(title);
  cardBody.appendChild(text);
  cardBody.appendChild(button);
  card.appendChild(cardBody);
  list.appendChild(card);
});

function toggleText(i) {
  const text = document.getElementById(`text-${i}`);
  const btn = event.target;
  const full = articles[i].content;
  const short = full.substring(0, 60) + "...";

  if (text.innerText === short) {
    text.innerText = full;
    btn.innerText = "Show Less";
  } else {
      text.innerText = short;
    btn.innerText = "Show More";
  }
}

let commentCount = 0;

function updatePreview() {
  const input = document.getElementById("comment-input");
  const preview = document.getElementById("comment-preview");
  preview.innerText = "目前您輸入的是: " + (input.value || "（尚未輸入）");
}

function addComment() {
  const input = document.getElementById("comment-input");
  const comment = input.value.trim();
  if (comment === "") return;

  const list = document.getElementById("comment-list");
  const item = document.createElement("li");
  item.className = "list-group-item d-flex justify-content-between align-items-center";

  // 留言文字
  const textSpan = document.createElement("span");
  textSpan.innerText = comment;

  // 按讚按鈕
  const likeBtn = document.createElement("button");
  likeBtn.className = "btn btn-sm btn-outline-primary ms-2";
  likeBtn.innerText = "👍 0";
  let likes = 0;
  likeBtn.onclick = () => {
    likes++;
    likeBtn.innerText = "👍 " + likes;
  };

  // 組合
  item.appendChild(textSpan);
  item.appendChild(likeBtn);
  list.appendChild(item);

  // 更新留言數
  commentCount++;
  document.getElementById("comment-count").innerText = "目前留言數: " + commentCount;

  // 清空輸入框與預覽
  input.value = "";
  updatePreview();
}

