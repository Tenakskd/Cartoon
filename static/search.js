const mangaList = [
  {
    title: "ふしだらアタック",
    episode: "第55話",
    views: 0,
    image: "https://cdn.jsdelivr.net/gh/konnnnitiha84238/manga-assets@main/hajirau.jpg"
  }
];

const input = document.getElementById('searchInput');
const resultsContainer = document.getElementById('searchResults');
const closeBtn = document.getElementById('closeBtn');

input.addEventListener('input', () => {
  showResults(input.value.trim());
});

closeBtn.addEventListener('click', () => {
  input.value = '';
  showResults('');
  input.focus();
});

function showResults(keyword) {
  resultsContainer.innerHTML = '';
  if (!keyword) return;

  const results = mangaList.filter(manga =>
    manga.title.includes(keyword)
  );

  results.forEach(manga => {
    const box = document.createElement('div');
    box.className = 'result-box';

    const img = document.createElement('img');
    img.className = 'result-image';
    img.src = manga.image;
    img.alt = manga.title;

    const info = document.createElement('div');
    info.className = 'result-info';

    const title = document.createElement('div');
    title.className = 'result-title';
    title.textContent = manga.title;

    const meta = document.createElement('div');
    meta.className = 'result-meta';
    meta.innerHTML = `
      <span>${manga.episode}</span>
      <span class="icon">👁️</span><span>${manga.views}</span>
    `;

    info.appendChild(title);
    info.appendChild(meta);

    const arrow = document.createElement('span');
    arrow.className = 'result-arrow';
    arrow.textContent = '↩';

    box.appendChild(img);
    box.appendChild(info);
    box.appendChild(arrow);

    resultsContainer.appendChild(box);
  });
}
