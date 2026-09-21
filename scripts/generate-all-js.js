// scripts/generate-all-js.js
// Generates all 187 JavaScript programs and the master interactive directory index.html

import fs from 'fs';
import path from 'path';
import { getJsProgramDetails } from './data-js-generators.js';

const questions = JSON.parse(fs.readFileSync('./scripts/js-questions.json', 'utf-8'));
const total = questions.length;

console.log(`Generating ${total} JavaScript programs in /javascript/...`);

if (!fs.existsSync('./javascript')) {
  fs.mkdirSync('./javascript', { recursive: true });
}

// 1. Generate individual HTML files
questions.forEach((q, idx) => {
  const details = getJsProgramDetails(q, idx, total);
  const filePath = path.join('./javascript', details.filename);
  fs.writeFileSync(filePath, details.fullHtml, 'utf-8');
});

console.log(`Successfully generated all ${total} JavaScript experiment HTML files!`);

// 2. Generate Master /javascript/index.html
const categories = [...new Set(questions.map(q => q.category))];

const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Practical Programs - Complete Syllabus (187 Programs)</title>
  <link rel="stylesheet" href="../assets/css/common.css">
  <style>
    .cat-btn { padding: 6px 14px; border-radius: 20px; border: 1px solid #cbd5e1; background: #fff; font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.2s; color: #475569; }
    .cat-btn.active, .cat-btn:hover { background: #2563eb; color: #fff; border-color: #2563eb; }
    .prog-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 10px; padding: 16px; transition: transform 0.2s, box-shadow 0.2s; text-decoration: none; color: inherit; display: flex; flex-direction: column; justify-content: space-between; }
    .prog-card:hover { transform: translateY(-3px); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.06); border-color: #93c5fd; }
  </style>
</head>
<body>
  <!-- Global Sticky Header -->
  <header class="site-header">
    <div class="nav-bar">
      <div class="nav-links">
        <a href="../index.html" class="nav-btn primary">🏠 Home Dashboard</a>
      </div>
      <div class="student-badge">
        <span>👨‍🎓 <strong>k. nishanth reddy</strong> (250200439)</span>
        <span>• Sec: 06</span>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="card" style="margin-bottom: 24px;">
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <h1 class="card-title">JavaScript Laboratory - Complete Curriculum</h1>
          <p class="card-subtitle">Comprehensive collection of 187 working JavaScript programs spanning Core ECMAScript, Mathematical Algorithms, Advanced ES6+, DOM Manipulation, Event Listeners, Form Validation, Browser APIs, Web Storage, and Interactive Mini Projects.</p>
        </div>
        <div style="background: #eff6ff; padding: 8px 16px; border-radius: 24px; font-size: 14px; font-weight: bold; color: #2563eb; border: 1px solid #bfdbfe;">
          Total Programs: 187
        </div>
      </div>

      <!-- Live Search & Filtering -->
      <div style="margin-top: 16px; display: flex; gap: 14px; flex-wrap: wrap; align-items: center; justify-content: space-between;">
        <input type="text" id="progSearch" oninput="filterPrograms()" placeholder="🔍 Search JavaScript programs by keyword, number, or topic..." style="padding: 10px 16px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; width: 100%; max-width: 420px; outline: none;">
        <div style="font-size: 13px; color: #64748b;">
          Showing <strong id="visibleCount" style="color: #0f172a;">187</strong> of 187 experiments
        </div>
      </div>

      <!-- Category Filter Pills -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-top: 16px;" id="catFilterContainer">
        <button class="cat-btn active" onclick="setCategory('ALL')">All Categories (187)</button>
        ${categories.map(c => {
          const count = questions.filter(q => q.category === c).length;
          return `<button class="cat-btn" onclick="setCategory('${c}')">${c} (${count})</button>`;
        }).join('')}
      </div>
    </div>

    <!-- Programs Grid -->
    <div id="progGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px;">
      ${questions.map((q, idx) => {
        const num = idx + 1;
        const id = `js-${String(num).padStart(2, '0')}`;
        return `
        <a href="${id}.html" class="prog-card" data-cat="${q.category}" data-title="${q.title.toLowerCase()}" data-desc="${q.desc.toLowerCase()}" data-num="${num}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <span style="font-size: 12px; background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 10px; font-family: monospace; font-weight: bold;">#${num}</span>
              <span style="font-size: 11px; background: #eff6ff; color: #2563eb; padding: 2px 8px; border-radius: 10px; font-weight: 600;">${q.category}</span>
            </div>
            <h3 style="font-size: 16px; color: #0f172a; margin: 0 0 6px 0; line-height: 1.4;">${q.title}</h3>
            <p style="font-size: 13px; color: #64748b; margin: 0 0 12px 0; line-height: 1.5;">${q.desc}</p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #f1f5f9; padding-top: 10px; font-size: 12px; color: #16a34a; font-weight: 600;">
            <span>✓ Verified Live Demo</span>
            <span style="color: #2563eb;">Open Program →</span>
          </div>
        </a>`;
      }).join('')}
    </div>
  </main>

  <footer class="site-footer">
    <p>Web Technology Laboratory • Department of Computer Science & Engineering</p>
    <p>Student: <strong>k. nishanth reddy</strong> | Reg No: <strong>250200439</strong> | Section: <strong>06</strong></p>
  </footer>

  <script>
    let activeCat = 'ALL';

    function setCategory(cat) {
      activeCat = cat;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        if (cat === 'ALL' && btn.innerText.startsWith('All')) btn.classList.add('active');
        else if (btn.innerText.startsWith(cat)) btn.classList.add('active');
        else btn.classList.remove('active');
      });
      filterPrograms();
    }

    function filterPrograms() {
      const q = document.getElementById('progSearch').value.toLowerCase().trim();
      const cards = document.querySelectorAll('.prog-card');
      let visible = 0;

      cards.forEach(card => {
        const cat = card.getAttribute('data-cat');
        const title = card.getAttribute('data-title');
        const desc = card.getAttribute('data-desc');
        const num = card.getAttribute('data-num');

        const matchesCat = activeCat === 'ALL' || cat === activeCat;
        const matchesQuery = !q || title.includes(q) || desc.includes(q) || num === q;

        if (matchesCat && matchesQuery) {
          card.style.display = 'flex';
          visible++;
        } else {
          card.style.display = 'none';
        }
      });

      document.getElementById('visibleCount').innerText = visible;
    }
  </script>
</body>
</html>`;

fs.writeFileSync('./javascript/index.html', indexHtml, 'utf-8');
console.log('Successfully generated /javascript/index.html with all 187 programs!');
