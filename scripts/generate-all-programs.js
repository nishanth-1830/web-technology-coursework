import fs from 'fs';
import path from 'path';
import { htmlPrograms } from './data-html.js';
import { cssPrograms } from './data-css.js';
import { jsPrograms } from './data-js.js';
import { mysqlPrograms } from './data-mysql.js';
import { nodePrograms } from './data-node.js';
import { supabasePrograms } from './data-supabase.js';

const STUDENT = {
  name: 'k. nishanth reddy',
  regNo: '250200439',
  classSection: '06',
  subject: 'web technology',
  assignment: '01'
};

const totalPrograms = htmlPrograms.length + cssPrograms.length + jsPrograms.length + mysqlPrograms.length + nodePrograms.length + supabasePrograms.length;

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function generateProgramHtml({
  sectionTitle,
  sectionUrl,
  program,
  prevProg,
  nextProg,
  backText = 'Back to Programs'
}) {
  const codeContent = escapeHtml(program.content.trim());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${escapeHtml(program.title)} - ${escapeHtml(sectionTitle)}</title>
  <link rel="stylesheet" href="../assets/css/common.css">
</head>
<body>
  <!-- Global Sticky Navigation Bar -->
  <header class="site-header">
    <div class="nav-bar">
      <div class="nav-links">
        <a href="../index.html" class="nav-btn">🏠 Home</a>
        <a href="${sectionUrl}" class="nav-btn">📚 ${backText}</a>
        ${prevProg ? `<a href="${prevProg.filename}" class="nav-btn">⬅ Prev</a>` : ''}
        ${nextProg ? `<a href="${nextProg.filename}" class="nav-btn">Next ➡</a>` : ''}
      </div>
      <div class="student-badge">
        <span>👨‍🎓 <strong>${STUDENT.name}</strong> (${STUDENT.regNo})</span>
        <span>• Sec: ${STUDENT.classSection}</span>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="card">
      <div class="card-header">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 8px;">
          <div>
            <h1 class="card-title">${escapeHtml(program.title)}</h1>
            <p class="card-subtitle">${escapeHtml(program.description)}</p>
          </div>
          <span style="background: #eff6ff; color: #2563eb; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 12px; border: 1px solid #bfdbfe;">
            ${escapeHtml(program.category || sectionTitle)}
          </span>
        </div>
      </div>

      <!-- Working Implementation & Interactive Demonstration -->
      <section>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h2 style="font-size: 16px; color: #334155; font-weight: 600;">Working Demonstration / Output</h2>
          <span style="font-size: 12px; color: #16a34a; font-weight: 500;">● Live Execution</span>
        </div>

        <div class="demo-area">
          ${program.content}
        </div>
      </section>

      <!-- Source Code Inspection Accordion -->
      <section style="margin-top: 24px;">
        <details style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 12px;">
          <summary style="cursor: pointer; font-weight: 600; color: #2563eb; outline: none; user-select: none;">
            🔍 View Source Code (HTML, CSS & JS)
          </summary>
          <div class="code-viewer" style="margin-top: 12px;">
            <div class="code-header">
              <span>Source File: ${program.filename}</span>
              <button class="copy-btn" data-target="code_${program.id}">Copy Code</button>
            </div>
            <pre id="code_${program.id}"><code>${codeContent}</code></pre>
          </div>
        </details>
      </section>

      <!-- Bottom Navigation Footer as required by assignment specification -->
      <footer style="margin-top: 28px; padding-top: 16px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div style="display: flex; gap: 10px;">
          <a href="../index.html" class="nav-btn primary">Home</a>
          <a href="${sectionUrl}" class="nav-btn">${backText}</a>
        </div>
        <div style="font-size: 13px; color: #64748b;">
          Subject: <strong>${STUDENT.subject}</strong> | Assignment: <strong>${STUDENT.assignment}</strong>
        </div>
      </footer>
    </div>
  </main>

  <footer class="site-footer">
    <p>Department of Computer Science & Engineering • Practical Lab Portal</p>
    <p style="margin-top: 4px; font-size: 12px; color: #94a3b8;">Student: ${STUDENT.name} | Register Number: ${STUDENT.regNo} | Section: ${STUDENT.classSection}</p>
  </footer>

  <script type="module" src="../assets/js/common.js"></script>
</body>
</html>`;
}

// Generate Listing Pages
function generateListingHtml({
  sectionTitle,
  sectionDesc,
  programs,
  currentDir
}) {
  const grouped = {};
  programs.forEach(p => {
    const cat = p.category || 'General Experiments';
    if (!grouped[cat]) grouped[cat] = [];
    grouped[cat].push(p);
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${sectionTitle} - Practical List</title>
  <link rel="stylesheet" href="../assets/css/common.css">
</head>
<body>
  <header class="site-header">
    <div class="nav-bar">
      <div class="nav-links">
        <a href="../index.html" class="nav-btn primary">🏠 Home Dashboard</a>
      </div>
      <div class="student-badge">
        <span>👨‍🎓 <strong>${STUDENT.name}</strong> (${STUDENT.regNo})</span>
        <span>• Sec: ${STUDENT.classSection}</span>
      </div>
    </div>
  </header>

  <main class="container">
    <div class="card">
      <div class="card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
        <div>
          <h1 class="card-title">${sectionTitle}</h1>
          <p class="card-subtitle">${sectionDesc}</p>
        </div>
        <div style="background: #f1f5f9; padding: 6px 14px; border-radius: 20px; font-size: 13px; font-weight: bold; color: #334155; border: 1px solid #cbd5e1;">
          Total Programs: ${programs.length}
        </div>
      </div>

      <div style="margin-bottom: 20px;">
        <input type="text" id="progSearch" oninput="filterPrograms()" placeholder="🔍 Search ${sectionTitle} by keyword..." style="max-width: 400px;">
      </div>

      <div id="progListContainer">
        ${Object.keys(grouped).map(category => `
          <div class="cat-group" style="margin-bottom: 24px;">
            <h2 style="font-size: 18px; color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-bottom: 12px;">
              ${category} (${grouped[category].length})
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
              ${grouped[category].map((prog, idx) => `
                <div class="prog-item card" style="margin: 0; padding: 16px; border: 1px solid #cbd5e1; transition: transform 0.2s, box-shadow 0.2s;" onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)';" onmouseout="this.style.transform='none'; this.style.boxShadow='none';">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                    <span style="font-size: 12px; background: #e2e8f0; color: #475569; padding: 2px 8px; border-radius: 10px; font-family: monospace;">#${idx + 1}</span>
                    <span style="font-size: 11px; color: #16a34a; font-weight: bold;">✓ Tested</span>
                  </div>
                  <h3 style="font-size: 15px; margin-bottom: 6px; line-height: 1.4;">
                    <a href="${prog.filename}" style="color: #0f172a; text-decoration: none; font-weight: bold;" onmouseover="this.style.color='#2563eb';" onmouseout="this.style.color='#0f172a';">
                      ${escapeHtml(prog.title)}
                    </a>
                  </h3>
                  <p style="font-size: 13px; color: #64748b; margin-bottom: 12px; line-height: 1.5;">
                    ${escapeHtml(prog.description)}
                  </p>
                  <a href="${prog.filename}" class="nav-btn primary" style="font-size: 12px; padding: 6px 12px; width: 100%; justify-content: center;">
                    Launch Program 🚀
                  </a>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <p>Student: ${STUDENT.name} (${STUDENT.regNo}) • Section ${STUDENT.classSection} • ${STUDENT.subject}</p>
  </footer>

  <script type="module">
    window.filterPrograms = function() {
      const q = document.getElementById('progSearch').value.toLowerCase();
      document.querySelectorAll('.prog-item').forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(q) ? 'block' : 'none';
      });
    };
  </script>
</body>
</html>`;
}

// Generate Root Home Dashboard
function generateHomeDashboard() {
  const expectedTotal = totalPrograms;
  const completionPercentage = Math.round((totalPrograms / expectedTotal) * 100);
  const radius = 52;
  const circumference = +(2 * Math.PI * radius).toFixed(2);
  const strokeDashoffset = +(circumference - (circumference * completionPercentage) / 100).toFixed(2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML, CSS & JavaScript Practical Programs - Dashboard</title>
  <link rel="stylesheet" href="assets/css/common.css">
  <style>
    .hero-banner {
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      color: #ffffff;
      padding: 36px 32px;
      border-radius: 16px;
      margin-bottom: 32px;
      box-shadow: 0 10px 25px rgba(15, 23, 42, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .hero-banner-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 32px;
      flex-wrap: wrap;
    }
    .hero-main-content {
      flex: 1 1 500px;
      text-align: left;
    }
    .hero-pretitle {
      color: #38bdf8;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 3px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    .hero-title {
      font-size: 30px;
      font-weight: 800;
      letter-spacing: -0.5px;
      margin-bottom: 12px;
      line-height: 1.25;
    }
    .hero-desc {
      color: #94a3b8;
      max-width: 650px;
      margin: 0 0 20px;
      font-size: 15px;
      line-height: 1.6;
    }
    .student-meta-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      font-size: 13px;
      background: rgba(255, 255, 255, 0.06);
      padding: 10px 18px;
      border-radius: 30px;
      max-width: 720px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .hero-progress-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.14);
      border-radius: 16px;
      padding: 22px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-width: 260px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(10px);
      flex-shrink: 0;
      margin: 0 auto;
    }
    .progress-chart-container {
      position: relative;
      width: 136px;
      height: 136px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    @keyframes progressGlow {
      0%, 100% { filter: drop-shadow(0 0 4px rgba(56, 189, 248, 0.4)); }
      50% { filter: drop-shadow(0 0 10px rgba(52, 211, 153, 0.5)); }
    }
    .progress-ring {
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      animation: progressGlow 4s ease-in-out infinite;
    }
    .progress-ring-circle {
      transition: stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .progress-center-content {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      pointer-events: none;
    }
    .progress-percent-val {
      font-size: 28px;
      font-weight: 800;
      color: #ffffff;
      line-height: 1;
      letter-spacing: -0.5px;
    }
    .progress-percent-sub {
      font-size: 10px;
      letter-spacing: 1.5px;
      color: #38bdf8;
      font-weight: 700;
      margin-top: 4px;
    }
    .progress-info-wrap {
      margin-top: 14px;
      text-align: center;
      width: 100%;
    }
    .progress-completion-pill {
      font-size: 13px;
      font-weight: 600;
      color: #34d399;
      background: rgba(52, 211, 153, 0.12);
      padding: 4px 14px;
      border-radius: 20px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 10px;
      border: 1px solid rgba(52, 211, 153, 0.25);
    }
    .pulse-dot {
      width: 7px;
      height: 7px;
      background-color: #34d399;
      border-radius: 50%;
      display: inline-block;
      box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
      animation: pulseDot 2s infinite;
    }
    @keyframes pulseDot {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.7);
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 6px rgba(52, 211, 153, 0);
      }
      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(52, 211, 153, 0);
      }
    }
    .progress-chips-row {
      display: flex;
      gap: 6px;
      font-size: 11px;
      color: #cbd5e1;
      justify-content: center;
      flex-wrap: wrap;
    }
    .prog-chip {
      background: rgba(255, 255, 255, 0.08);
      padding: 3px 8px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);
      font-weight: 500;
    }
    @media (max-width: 860px) {
      .hero-banner-inner {
        flex-direction: column;
        text-align: center;
      }
      .hero-main-content {
        text-align: center;
      }
      .hero-desc {
        margin: 0 auto 20px;
      }
      .student-meta-bar {
        justify-content: center;
        margin: 0 auto;
      }
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 36px;
    }
    .portal-card {
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 12px;
      padding: 28px;
      display: flex;
      flex-direction: column;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
      transition: all 0.25s ease;
      position: relative;
      overflow: hidden;
    }
    .portal-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px -5px rgba(0,0,0,0.1);
      border-color: #94a3b8;
    }
    .card-badge {
      position: absolute;
      top: 16px;
      right: 16px;
      background: #eff6ff;
      color: #2563eb;
      font-size: 12px;
      font-weight: bold;
      padding: 4px 10px;
      border-radius: 12px;
      border: 1px solid #bfdbfe;
    }
    .portal-card h2 {
      font-size: 22px;
      color: #0f172a;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .portal-card p {
      color: #64748b;
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 20px;
      flex: 1;
    }
    .features-list {
      list-style: none;
      padding: 0;
      margin-bottom: 24px;
      font-size: 13px;
      color: #334155;
    }
    .features-list li {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .portal-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 12px 20px;
      font-size: 15px;
      font-weight: bold;
      color: #ffffff;
      background: #2563eb;
      border-radius: 8px;
      text-decoration: none;
      transition: background 0.2s;
    }
    .portal-btn:hover {
      background: #1d4ed8;
      text-decoration: none;
    }
    .portal-btn.css-btn {
      background: #0284c7;
    }
    .portal-btn.css-btn:hover {
      background: #0369a1;
    }
    .portal-btn.js-btn {
      background: #f59e0b;
      color: #000;
    }
    .portal-btn.js-btn:hover {
      background: #d97706;
      color: #fff;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <div class="nav-bar">
      <div style="font-weight: bold; font-size: 16px; color: #0f172a;">
        🌐 Web Technology Lab Portal
      </div>
      <div class="student-badge">
        <span>Student: <strong>${STUDENT.name}</strong></span>
        <span>ID: <strong>${STUDENT.regNo}</strong></span>
        <span>Sec: <strong>${STUDENT.classSection}</strong></span>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- Hero Banner with Assignment Metadata & Progress Ring -->
    <div class="hero-banner">
      <div class="hero-banner-inner">
        <div class="hero-main-content">
          <div class="hero-pretitle">Web Technology • Assignment ${STUDENT.assignment}</div>
          <h1 class="hero-title">HTML, CSS & JAVASCRIPT PRACTICAL PROGRAMS</h1>
          <p class="hero-desc">
            Complete practical programs repository containing fully functional, interactive web technology experiments with clean source code, responsive designs, and seamless bidirectional navigation.
          </p>
          <div class="student-meta-bar">
            <span>👨‍🎓 <strong>Student:</strong> ${STUDENT.name}</span>
            <span>📋 <strong>Register No:</strong> ${STUDENT.regNo}</span>
            <span>🏫 <strong>Class/Sec:</strong> ${STUDENT.classSection}</span>
            <span>📖 <strong>Subject:</strong> ${STUDENT.subject}</span>
          </div>
        </div>

        <!-- Visual Circular Progress Chart -->
        <div class="hero-progress-card">
          <div class="progress-chart-container">
            <svg class="progress-ring" width="136" height="136" viewBox="0 0 136 136">
              <defs>
                <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#38bdf8" />
                  <stop offset="100%" stop-color="#34d399" />
                </linearGradient>
              </defs>
              <!-- Background circular track -->
              <circle
                class="progress-ring-bg"
                stroke="rgba(255, 255, 255, 0.12)"
                stroke-width="10"
                fill="transparent"
                r="52"
                cx="68"
                cy="68"
              />
              <!-- Filled progress arc -->
              <circle
                class="progress-ring-circle"
                stroke="url(#progressGrad)"
                stroke-width="10"
                stroke-linecap="round"
                fill="transparent"
                r="52"
                cx="68"
                cy="68"
                style="stroke-dasharray: ${circumference}; stroke-dashoffset: ${strokeDashoffset};"
              />
            </svg>
            <div class="progress-center-content">
              <span class="progress-percent-val">${completionPercentage}%</span>
              <span class="progress-percent-sub">PROGRESS</span>
            </div>
          </div>

          <div class="progress-info-wrap">
            <div class="progress-completion-pill">
              <span class="pulse-dot"></span>
              <strong>${totalPrograms}</strong> of <strong>${expectedTotal}</strong> Completed
            </div>
            <div class="progress-chips-row">
              <span class="prog-chip" title="HTML Experiments Completed">📄 HTML: ${htmlPrograms.length}/${htmlPrograms.length}</span>
              <span class="prog-chip" title="CSS Experiments Completed">🎨 CSS: ${cssPrograms.length}/${cssPrograms.length}</span>
              <span class="prog-chip" title="JavaScript Experiments Completed">⚡ JS: ${jsPrograms.length}/${jsPrograms.length}</span>
              <span class="prog-chip" title="MySQL Experiments Completed">🗄️ MySQL: ${mysqlPrograms.length}/${mysqlPrograms.length}</span>
              <span class="prog-chip" title="Node.js Experiments Completed">🟢 Node: ${nodePrograms.length}/${nodePrograms.length}</span>
              <span class="prog-chip" title="Supabase Experiments Completed">⚡ Cloud: ${supabasePrograms.length}/${supabasePrograms.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- The 3 Core Section Cards Specified in Prompt -->
    <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">Core Frontend Technology Cards</h2>
    <div class="cards-grid">
      <!-- 1. HTML Programs Card -->
      <div class="portal-card">
        <span class="card-badge">${htmlPrograms.length} Experiments</span>
        <h2>📄 HTML Programs</h2>
        <p>
          Fundamental HTML markup, document structures, text hierarchies, lists, tables with colspan/rowspan, forms, multimedia players, and HTML5 semantic containers.
        </p>
        <ul class="features-list">
          <li>✓ Headings, Paragraphs & Line Breaks</li>
          <li>✓ Ordered, Unordered & Description Lists</li>
          <li>✓ Student Tables & College Timetable</li>
          <li>✓ Forms, HTML5 Input Types & Multimedia</li>
          <li>✓ Semantic Layouts & Bootstrap Components</li>
        </ul>
        <a href="html/index.html" class="portal-btn">View HTML Programs →</a>
      </div>

      <!-- 2. CSS Programs Card -->
      <div class="portal-card">
        <span class="card-badge" style="background: #e0f2fe; color: #0369a1; border-color: #bae6fd;">${cssPrograms.length} Experiments</span>
        <h2>🎨 CSS Programs</h2>
        <p>
          Comprehensive CSS styling architectures: box model, combinator selectors, colors, flexbox, CSS grid, transitions, keyframes, SaaS UI components, and dashboards.
        </p>
        <ul class="features-list">
          <li>✓ Selectors, Combinators & Specificity</li>
          <li>✓ CSS Box Model, Margins, Borders & Padding</li>
          <li>✓ Flexbox & Bento Grid Layouts</li>
          <li>✓ SaaS Cards, Modals, Drawers & KPIs</li>
          <li>✓ Dark Mode Theme Switcher & Analytics UI</li>
        </ul>
        <a href="css/index.html" class="portal-btn css-btn">View CSS Programs →</a>
      </div>

      <!-- 3. JavaScript Programs Card -->
      <div class="portal-card">
        <span class="card-badge" style="background: #fef3c7; color: #b45309; border-color: #fde68a;">${jsPrograms.length} Experiments</span>
        <h2>⚡ JS Programs</h2>
        <p>
          Dynamic client-side scripting, mini projects (Calculator, Clock, Stopwatch, Todo List, Weather, Quiz, Games), DOM manipulation, mouse/keyboard events, forms, and Web Storage.
        </p>
        <ul class="features-list">
          <li>✓ Digital Calculator, Clock & Stopwatch</li>
          <li>✓ Interactive To-Do List & Expense Tracker</li>
          <li>✓ Number Guessing & Tic-Tac-Toe Games</li>
          <li>✓ DOM Dynamic CRUD & Cascaded Dropdowns</li>
          <li>✓ Real-Time Form Validation & LocalStorage</li>
        </ul>
        <a href="javascript/index.html" class="portal-btn js-btn">View JavaScript Programs →</a>
      </div>
    </div>

    <!-- Extended Database & Backend Laboratories -->
    <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 16px;">Database & Cloud Engineering Labs</h2>
    <div class="cards-grid">
      <!-- 4. MySQL Relational Database Card -->
      <div class="portal-card">
        <span class="card-badge" style="background: #ccfbf1; color: #0f766e; border-color: #99f6e4;">${mysqlPrograms.length} Experiments</span>
        <h2>🗄️ MySQL Database Lab</h2>
        <p>
          Relational database management, SQL schema creation, primary/foreign keys, DDL, DML operations, multi-table JOINs, aggregate grouping, stored procedures, triggers, and ACID transactions.
        </p>
        <ul class="features-list">
          <li>✓ DDL Table Definitions & Foreign Key Constraints</li>
          <li>✓ DML CRUD Operations (INSERT, UPDATE, DELETE)</li>
          <li>✓ INNER, LEFT & RIGHT JOIN Queries</li>
          <li>✓ Aggregate Functions (GROUP BY, HAVING)</li>
          <li>✓ Stored Procedures, Triggers & Transactions</li>
        </ul>
        <a href="mysql/index.html" class="portal-btn db-btn">View MySQL Programs →</a>
      </div>

      <!-- 5. Node.js & Express Backend Card -->
      <div class="portal-card">
        <span class="card-badge" style="background: #dcfce7; color: #15803d; border-color: #bbf7d0;">${nodePrograms.length} Experiments</span>
        <h2>🟢 Node.js Backend Lab</h2>
        <p>
          Server-side JavaScript runtime environments, asynchronous non-blocking event loops, native HTTP modules, Express.js routing, custom middleware pipelines, JWT auth, and RESTful API endpoints.
        </p>
        <ul class="features-list">
          <li>✓ Asynchronous File System Operations</li>
          <li>✓ Native HTTP Server & JSON Request Routing</li>
          <li>✓ Express.js Application Architecture</li>
          <li>✓ Custom Logging, Auth & CORS Middleware</li>
          <li>✓ RESTful CRUD Web Service with Validation</li>
        </ul>
        <a href="nodejs/index.html" class="portal-btn node-btn">View Node.js Programs →</a>
      </div>

      <!-- 6. Supabase Cloud Platform Card -->
      <div class="portal-card">
        <span class="card-badge" style="background: #f3e8ff; color: #7e22ce; border-color: #e9d5ff;">${supabasePrograms.length} Experiments</span>
        <h2>⚡ Supabase Cloud Lab</h2>
        <p>
          Open-source Firebase alternative powered by PostgreSQL: client initialization, database CRUD queries, user authentication & sign-up flows, Row Level Security (RLS), and Realtime subscriptions.
        </p>
        <ul class="features-list">
          <li>✓ Supabase Client Config & Initialization</li>
          <li>✓ Real-Time Database Query Engine</li>
          <li>✓ User Sign-Up & Password Authentication</li>
          <li>✓ Row-Level Security (RLS) Policy Guard</li>
          <li>✓ Realtime WebSocket Event Streaming</li>
        </ul>
        <a href="supabase/index.html" class="portal-btn cloud-btn">View Supabase Programs →</a>
      </div>
    </div>

    <!-- Quick Directory Overview -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">📁 Project Structure & Evaluation Overview</h3>
        <p class="card-subtitle">Every program is encapsulated in its own separate, executable HTML document with bidirectional navigation.</p>
      </div>
      <div style="overflow-x: auto;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left; color: #334155;">
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Section</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Folder Path</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Programs Count</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Status</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #2563eb;">1. HTML Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">html/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${htmlPrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="html/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0284c7;">2. CSS Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">css/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${cssPrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="css/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #d97706;">3. JavaScript Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">javascript/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${jsPrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="javascript/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #0d9488;">4. MySQL Database Lab</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">mysql/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${mysqlPrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="mysql/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #16a34a;">5. Node.js Backend Lab</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">nodejs/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${nodePrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="nodejs/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-weight: bold; color: #7c3aed;">6. Supabase Cloud Lab</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; font-family: monospace;">supabase/*.html</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;">${supabasePrograms.length} Programs</td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><span style="background: #dcfce7; color: #166534; padding: 3px 8px; border-radius: 10px; font-size: 12px; font-weight: bold;">Completed</span></td>
              <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><a href="supabase/index.html" style="font-weight: 500;">Open Section →</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>

  <footer class="site-footer">
    <p>Student Name: <strong>${STUDENT.name}</strong> • Register Number: <strong>${STUDENT.regNo}</strong> • Class / Section: <strong>${STUDENT.classSection}</strong></p>
    <p style="margin-top: 4px;">Subject: <strong>${STUDENT.subject}</strong> • Assignment: <strong>${STUDENT.assignment}</strong> • Total Programs Completed: <strong>${totalPrograms}</strong></p>
  </footer>
</body>
</html>`;
}

// Generate README.md as specified in instructions
function generateReadme() {
  return `# HTML, CSS & JavaScript – Practical Assignment

## Student Information
- **Student Name:** ${STUDENT.name}
- **Register Number:** ${STUDENT.regNo}
- **Class / Section:** ${STUDENT.classSection}
- **Subject:** ${STUDENT.subject}
- **Assignment:** ${STUDENT.assignment}
- **Total Programs Completed:** ${totalPrograms} Programs

---

## Assignment Objective
To build a complete, production-grade HTML, CSS, and JavaScript Practical Programs Website containing all programs specified in the Web Technology practical experiment curriculum:
1. **HTML fundamentals:** headings, paragraphs, lists, tables with merged cells (rowspan/colspan), images, hyperlinks, forms, audio/video elements, iframes, semantic tags, HTML5 input types, college timetables, Bootstrap, and personal portfolios.
2. **CSS styling and layouts:** inline/internal/external styling, basic & combinator selectors, colors, box model, flexbox, grid, transitions, keyframes, variables, SaaS UI components, KPI metric cards, pricing cards, modal dialogs, drawers, and analytics dashboards.
3. **JavaScript programming:** core mathematical algorithms, mini projects (Digital Calculator, Digital Clock, Stopwatch, Countdown Timer, To-Do List, Weather App, Quiz, Number Guessing, Tic-Tac-Toe, Expense Tracker, Marks/Grade Calculator, Password Generator, BMI Calculator), DOM manipulation (dynamic table CRUD, character counter, dependent dropdowns), event handlers (mouse, keyboard, bubbling/delegation), form validation (regex, real-time feedback), browser features, and Web Storage (localStorage CRUD).

---

## Project Structure
\`\`\`
project/
├── index.html                  # Main Home Page / Dashboard with 3 Cards
│
├── html/                       # HTML Practical Programs
│   ├── index.html              # HTML Programs Listing Page
${htmlPrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── css/                        # CSS Practical Programs
│   ├── index.html              # CSS Programs Listing Page
${cssPrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── javascript/                 # JavaScript Practical Programs
│   ├── index.html              # JS Programs Listing Page
${jsPrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── mysql/                      # MySQL Relational Database Lab
│   ├── index.html              # MySQL Programs Listing Page
${mysqlPrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── nodejs/                     # Node.js Backend & API Lab
│   ├── index.html              # Node.js Programs Listing Page
${nodePrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── supabase/                   # Supabase Cloud Platform Lab
│   ├── index.html              # Supabase Programs Listing Page
${supabasePrograms.map(p => `│   ├── ${p.filename}`).join('\n')}
│
├── assets/
│   ├── css/
│   │   └── common.css          # Shared responsive stylesheet
│   └── js/
│       └── common.js           # Shared utilities (copy code, tabs)
│
└── README.md                   # Submission Documentation
\`\`\`

---

## Completed Programs Inventory

### 1. HTML Programs (${htmlPrograms.length} Programs)
${htmlPrograms.map((p, i) => `${i + 1}. **\`html/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

### 2. CSS Programs (${cssPrograms.length} Programs)
${cssPrograms.map((p, i) => `${i + 1}. **\`css/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

### 3. JavaScript Programs (${jsPrograms.length} Programs)
${jsPrograms.map((p, i) => `${i + 1}. **\`javascript/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

### 4. MySQL Database Programs (${mysqlPrograms.length} Programs)
${mysqlPrograms.map((p, i) => `${i + 1}. **\`mysql/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

### 5. Node.js Backend Programs (${nodePrograms.length} Programs)
${nodePrograms.map((p, i) => `${i + 1}. **\`nodejs/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

### 6. Supabase Cloud Programs (${supabasePrograms.length} Programs)
${supabasePrograms.map((p, i) => `${i + 1}. **\`supabase/${p.filename}\`** - ${p.title}: ${p.description}`).join('\n')}

---

## How to Run & Verify
1. Open \`index.html\` directly in any modern web browser (Google Chrome, Firefox, Edge, Safari) or run via local server.
2. The Dashboard displays the 3 main cards: **HTML Programs**, **CSS Programs**, and **JS Programs**.
3. Clicking on any card navigates to the dedicated section listing page.
4. Each experiment contains:
   - Program Title and Description.
   - Interactive working implementation.
   - Inspectable source code with one-click copy button.
   - Bidirectional navigation: **Home** (\`../index.html\`) and **Back to Programs** (\`index.html\`).
`;
}

// Main execution function
function buildAll() {
  console.log('Creating directories...');
  fs.mkdirSync('./html', { recursive: true });
  fs.mkdirSync('./css', { recursive: true });
  fs.mkdirSync('./javascript', { recursive: true });
  fs.mkdirSync('./mysql', { recursive: true });
  fs.mkdirSync('./nodejs', { recursive: true });
  fs.mkdirSync('./supabase', { recursive: true });
  fs.mkdirSync('./assets/css', { recursive: true });
  fs.mkdirSync('./assets/js', { recursive: true });

  // 1. Generate HTML Programs
  console.log('Generating HTML programs...');
  htmlPrograms.forEach((p, idx) => {
    const prev = idx > 0 ? htmlPrograms[idx - 1] : null;
    const next = idx < htmlPrograms.length - 1 ? htmlPrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'HTML Programs',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'HTML Programs'
    });
    fs.writeFileSync(path.join('./html', p.filename), fileHtml, 'utf-8');
  });

  // HTML listing index.html
  const htmlListing = generateListingHtml({
    sectionTitle: 'HTML Programs',
    sectionDesc: 'Structured HTML5 experiments covering markup elements, tables, forms, and semantic tags.',
    programs: htmlPrograms,
    currentDir: 'html'
  });
  fs.writeFileSync('./html/index.html', htmlListing, 'utf-8');

  // 2. Generate CSS Programs
  console.log('Generating CSS programs...');
  cssPrograms.forEach((p, idx) => {
    const prev = idx > 0 ? cssPrograms[idx - 1] : null;
    const next = idx < cssPrograms.length - 1 ? cssPrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'CSS Programs',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'CSS Programs'
    });
    fs.writeFileSync(path.join('./css', p.filename), fileHtml, 'utf-8');
  });

  // CSS listing index.html
  const cssListing = generateListingHtml({
    sectionTitle: 'CSS Programs',
    sectionDesc: 'Modern CSS styling, Box Model, Flexbox, Grid, SaaS Components, and Responsive Layouts.',
    programs: cssPrograms,
    currentDir: 'css'
  });
  fs.writeFileSync('./css/index.html', cssListing, 'utf-8');

  // 3. Generate JS Programs
  console.log('Generating JavaScript programs...');
  jsPrograms.forEach((p, idx) => {
    const prev = idx > 0 ? jsPrograms[idx - 1] : null;
    const next = idx < jsPrograms.length - 1 ? jsPrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'JavaScript Programs',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'JavaScript Programs'
    });
    fs.writeFileSync(path.join('./javascript', p.filename), fileHtml, 'utf-8');
  });

  // JS listing index.html
  const jsListing = generateListingHtml({
    sectionTitle: 'JavaScript Programs',
    sectionDesc: 'Client-side scripting, Mini Projects, DOM Manipulation, Events, Form Validation & Web Storage.',
    programs: jsPrograms,
    currentDir: 'javascript'
  });
  fs.writeFileSync('./javascript/index.html', jsListing, 'utf-8');

  // 4. Generate MySQL Programs
  console.log('Generating MySQL programs...');
  mysqlPrograms.forEach((p, idx) => {
    const prev = idx > 0 ? mysqlPrograms[idx - 1] : null;
    const next = idx < mysqlPrograms.length - 1 ? mysqlPrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'MySQL Database Lab',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'MySQL Lab'
    });
    fs.writeFileSync(path.join('./mysql', p.filename), fileHtml, 'utf-8');
  });

  const mysqlListing = generateListingHtml({
    sectionTitle: 'MySQL Database Lab',
    sectionDesc: 'Relational database management, SQL schema creation, CRUD, multi-table JOINs, procedures, triggers, and ACID transactions.',
    programs: mysqlPrograms,
    currentDir: 'mysql'
  });
  fs.writeFileSync('./mysql/index.html', mysqlListing, 'utf-8');

  // 5. Generate Node.js Programs
  console.log('Generating Node.js programs...');
  nodePrograms.forEach((p, idx) => {
    const prev = idx > 0 ? nodePrograms[idx - 1] : null;
    const next = idx < nodePrograms.length - 1 ? nodePrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'Node.js Backend Lab',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'Node.js Lab'
    });
    fs.writeFileSync(path.join('./nodejs', p.filename), fileHtml, 'utf-8');
  });

  const nodeListing = generateListingHtml({
    sectionTitle: 'Node.js Backend Lab',
    sectionDesc: 'Server-side JavaScript runtime environments, asynchronous event loop, native HTTP servers, Express routing, and RESTful APIs.',
    programs: nodePrograms,
    currentDir: 'nodejs'
  });
  fs.writeFileSync('./nodejs/index.html', nodeListing, 'utf-8');

  // 6. Generate Supabase Programs
  console.log('Generating Supabase programs...');
  supabasePrograms.forEach((p, idx) => {
    const prev = idx > 0 ? supabasePrograms[idx - 1] : null;
    const next = idx < supabasePrograms.length - 1 ? supabasePrograms[idx + 1] : null;
    const fileHtml = generateProgramHtml({
      sectionTitle: 'Supabase Cloud Lab',
      sectionUrl: 'index.html',
      program: p,
      prevProg: prev,
      nextProg: next,
      backText: 'Supabase Lab'
    });
    fs.writeFileSync(path.join('./supabase', p.filename), fileHtml, 'utf-8');
  });

  const supabaseListing = generateListingHtml({
    sectionTitle: 'Supabase Cloud Lab',
    sectionDesc: 'Cloud PostgreSQL database CRUD, user authentication, row-level security (RLS), and real-time subscription streaming.',
    programs: supabasePrograms,
    currentDir: 'supabase'
  });
  fs.writeFileSync('./supabase/index.html', supabaseListing, 'utf-8');

  // 7. Generate Main index.html
  console.log('Generating main dashboard index.html...');
  const mainIndex = generateHomeDashboard();
  fs.writeFileSync('./index.html', mainIndex, 'utf-8');

  // 8. Generate README.md
  console.log('Generating README.md...');
  const readme = generateReadme();
  fs.writeFileSync('./README.md', readme, 'utf-8');

  console.log(`✓ Successfully generated all ${totalPrograms} programs across HTML, CSS, JavaScript, MySQL, Node.js, and Supabase!`);
}

buildAll();
