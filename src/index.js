"use strict";

async function fetchData(ref) {
  const res = await fetch(`/posts/${ref}.json`);
  return res.json();
}

window.addEventListener('load', async () => {
  const sections = document.getElementById('sections');
  const posts = await Promise.all([
    fetchData('october-2022'),
    fetchData('november-2022'),
    fetchData('december-2022'),
  ]);

  posts.forEach((post) => {
    sections.innerHTML += `
      <div class="section">
        <h2>${post.title}</h2>
        <div>
          ${post.sections.map(section => `
            <div>
              <h3>${section.title}</h3>
              <ul class="section-content">
                ${section.content.map(item => `
                  <li>${item}</li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });
});