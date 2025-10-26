// let navBar = document.querySelector('#nav')
// let burger = document.querySelector('#burger')

// navBar.addEventListener('click', ()=> {
//         burger.classList.toggle('active');
// })

// const nav = document.querySelector('#nav')

// nav.addEventListener('click', () => {
//         list.classList.toggle(nav)
// })

function Menu(e) {
  const list = document.querySelector('#burger');
  if (e.name === 'menu') {
    e.name = 'close';
    list.classList.add('top-[110px]');
    list.classList.add('opacity-100');
  } else {
    e.name = 'menu';
    list.classList.remove('top-[110px]');
    list.classList.remove('opacity-100');
  }
}



// java.js

// API Key-gaaga (ha wadaagin dad kale)
const apiKey = "011de4a2023d4009864beb4dfb57f6ea";

// URL - wararka Soomaaliya iyo kuwa caalamka
const apiUrl = `https://newsapi.org/v2/everything?q=somalia&sortBy=publishedAt&pageSize=9&apiKey=${apiKey}`;

async function fetchNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error("API response error");
    }

    const newsContainer = document.getElementById("news-container");
    if (!newsContainer) return console.error("news-container not found in HTML.");

    newsContainer.innerHTML = ""; // Nadiifi wixii hore

    // Haddii xog la helo
    data.articles.forEach(article => {
      const card = document.createElement("div");
      card.className = "bg-white rounded-lg shadow hover:shadow-lg duration-300 p-4";

      card.innerHTML = `
        <img src="${article.urlToImage || 'imgs/placeholder.jpg'}"
             alt="news image"
             class="w-full h-48 object-cover rounded-md mb-3">
        <div class="flex gap-2 text-xs text-gray-500 mb-2">
          <span>${article.source.name || "Warbaahin"}</span>
          <span>•</span>
          <span>${new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
        <h2 class="font-bold text-lg mb-2 hover:text-[#701705] duration-300">${article.title}</h2>
        <p class="text-gray-600 text-sm mb-3">${article.description || ''}</p>
        <a href="${article.url}" target="_blank"
           class="text-[#701705] text-sm font-semibold">Akhri Faahfaahin →</a>
      `;

      newsContainer.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching news:", error);
    document.getElementById("news-container").innerHTML =
      `<p class="text-center text-red-500">❌ Ma soo bixin wararka. Fadlan hubi internet-ka ama API-ga.</p>`;
  }
}

// Marka bogga la furo, xogta ha soo jiido
document.addEventListener("DOMContentLoaded", fetchNews);
