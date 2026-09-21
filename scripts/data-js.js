export const jsPrograms = [
  // --- Mini Projects ---
  {
    id: "js-calc",
    filename: "digital-calculator.html",
    title: "Digital Calculator",
    category: "Mini Projects",
    description: "An interactive digital calculator with arithmetic evaluation, clear, backspace, and responsive keypad.",
    content: `
      <div style="max-width: 320px; margin: 0 auto; background: #1e293b; padding: 20px; border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.3);">
        <input type="text" id="calcDisplay" readonly value="0" style="width: 100%; height: 60px; background: #0f172a; border: 1px solid #334155; border-radius: 8px; color: #f8fafc; font-size: 28px; text-align: right; padding: 0 16px; font-family: monospace; margin-bottom: 16px;">
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px;">
          <button onclick="calcClear()" style="grid-column: span 2; padding: 14px; background: #ef4444; color: #fff; border: none; border-radius: 6px; font-size: 16px; font-weight: bold; cursor: pointer;">AC</button>
          <button onclick="calcDel()" style="padding: 14px; background: #475569; color: #fff; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">DEL</button>
          <button onclick="calcAppend('/')" style="padding: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">÷</button>

          <button onclick="calcAppend('7')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">7</button>
          <button onclick="calcAppend('8')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">8</button>
          <button onclick="calcAppend('9')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">9</button>
          <button onclick="calcAppend('*')" style="padding: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">×</button>

          <button onclick="calcAppend('4')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">4</button>
          <button onclick="calcAppend('5')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">5</button>
          <button onclick="calcAppend('6')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">6</button>
          <button onclick="calcAppend('-')" style="padding: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">-</button>

          <button onclick="calcAppend('1')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">1</button>
          <button onclick="calcAppend('2')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">2</button>
          <button onclick="calcAppend('3')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">3</button>
          <button onclick="calcAppend('+')" style="padding: 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">+</button>

          <button onclick="calcAppend('0')" style="grid-column: span 2; padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">0</button>
          <button onclick="calcAppend('.')" style="padding: 14px; background: #334155; color: #fff; border: none; border-radius: 6px; font-size: 18px; cursor: pointer;">.</button>
          <button onclick="calcEvaluate()" style="padding: 14px; background: #16a34a; color: #fff; border: none; border-radius: 6px; font-size: 18px; font-weight: bold; cursor: pointer;">=</button>
        </div>
        <script>
          let currentExpr = "0";
          function calcAppend(val) {
            if (currentExpr === "0" && val !== ".") currentExpr = val;
            else currentExpr += val;
            document.getElementById('calcDisplay').value = currentExpr;
          }
          function calcClear() {
            currentExpr = "0";
            document.getElementById('calcDisplay').value = currentExpr;
          }
          function calcDel() {
            currentExpr = currentExpr.slice(0, -1);
            if (!currentExpr) currentExpr = "0";
            document.getElementById('calcDisplay').value = currentExpr;
          }
          function calcEvaluate() {
            try {
              currentExpr = String(Function('"use strict";return (' + currentExpr + ')')());
            } catch(e) {
              currentExpr = "Error";
            }
            document.getElementById('calcDisplay').value = currentExpr;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-clock",
    filename: "digital-clock.html",
    title: "Digital Clock",
    category: "Mini Projects",
    description: "Live real-time digital clock displaying hours, minutes, seconds, AM/PM, and current calendar date with setInterval().",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #0f172a; border: 2px solid #38bdf8; border-radius: 12px; padding: 24px; text-align: center; color: #f8fafc; box-shadow: 0 10px 25px rgba(56, 189, 248, 0.2);">
        <div style="font-size: 13px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">System Live Clock</div>
        <div id="clockTime" style="font-size: 42px; font-family: monospace; font-weight: bold; color: #38bdf8; letter-spacing: 2px;">00:00:00 AM</div>
        <div id="clockDate" style="font-size: 14px; color: #cbd5e1; margin-top: 8px;">Monday, 21 September 2026</div>
        <div style="margin-top: 16px; display: flex; justify-content: center; gap: 8px;">
          <button onclick="toggle12Hour()" style="padding: 6px 14px; background: #1e293b; color: #38bdf8; border: 1px solid #38bdf8; border-radius: 6px; font-size: 12px; cursor: pointer;">Toggle 12/24H Format</button>
        </div>
        <script>
          let is12Hour = true;
          function toggle12Hour() { is12Hour = !is12Hour; updateClock(); }
          function updateClock() {
            const now = new Date();
            let hours = now.getHours();
            let mins = String(now.getMinutes()).padStart(2, '0');
            let secs = String(now.getSeconds()).padStart(2, '0');
            let ampm = '';
            if (is12Hour) {
              ampm = hours >= 12 ? ' PM' : ' AM';
              hours = hours % 12 || 12;
            }
            document.getElementById('clockTime').innerText = String(hours).padStart(2, '0') + ':' + mins + ':' + secs + ampm;
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('clockDate').innerText = now.toLocaleDateString('en-US', options);
          }
          setInterval(updateClock, 1000);
          updateClock();
        </script>
      </div>
    `
  },
  {
    id: "js-stopwatch",
    filename: "stopwatch.html",
    title: "Stopwatch with Lap Timer",
    category: "Mini Projects",
    description: "High-precision stopwatch with Start, Pause, Reset, and recorded lap intervals displayed in a chronological table.",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div id="stopwatchDisplay" style="font-size: 46px; font-family: monospace; font-weight: bold; color: #0f172a; margin-bottom: 20px;">00:00.00</div>
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
          <button id="swStartBtn" onclick="startStopwatch()" style="padding: 10px 20px; background: #16a34a; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Start</button>
          <button id="swLapBtn" onclick="lapStopwatch()" disabled style="padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; opacity: 0.6;">Lap</button>
          <button onclick="resetStopwatch()" style="padding: 10px 20px; background: #ef4444; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Reset</button>
        </div>
        <div style="max-height: 160px; overflow-y: auto; text-align: left; font-size: 13px; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          <table style="width: 100%; border-collapse: collapse;">
            <thead><tr style="color: #64748b;"><th style="padding: 4px;">#</th><th style="padding: 4px;">Lap Time</th><th style="padding: 4px;">Total</th></tr></thead>
            <tbody id="swLapsBody"></tbody>
          </table>
        </div>
        <script>
          let swStartTime = 0, swElapsedTime = 0, swTimerInterval = null, lapCounter = 0;
          function formatSwTime(ms) {
            let totalSecs = Math.floor(ms / 1000);
            let mins = Math.floor(totalSecs / 60);
            let secs = totalSecs % 60;
            let hundredths = Math.floor((ms % 1000) / 10);
            return String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0') + '.' + String(hundredths).padStart(2, '0');
          }
          function startStopwatch() {
            const btn = document.getElementById('swStartBtn');
            const lapBtn = document.getElementById('swLapBtn');
            if (swTimerInterval) {
              clearInterval(swTimerInterval);
              swTimerInterval = null;
              btn.innerText = 'Resume';
              btn.style.background = '#16a34a';
              lapBtn.disabled = true;
              lapBtn.style.opacity = '0.6';
            } else {
              swStartTime = Date.now() - swElapsedTime;
              swTimerInterval = setInterval(() => {
                swElapsedTime = Date.now() - swStartTime;
                document.getElementById('stopwatchDisplay').innerText = formatSwTime(swElapsedTime);
              }, 10);
              btn.innerText = 'Pause';
              btn.style.background = '#eab308';
              lapBtn.disabled = false;
              lapBtn.style.opacity = '1';
            }
          }
          function lapStopwatch() {
            lapCounter++;
            const row = document.createElement('tr');
            row.innerHTML = '<td style="padding:4px;color:#64748b;">Lap ' + lapCounter + '</td><td style="padding:4px;font-family:monospace;font-weight:bold;">' + formatSwTime(swElapsedTime) + '</td><td style="padding:4px;font-family:monospace;color:#16a34a;">Recorded</td>';
            document.getElementById('swLapsBody').prepend(row);
          }
          function resetStopwatch() {
            clearInterval(swTimerInterval);
            swTimerInterval = null;
            swElapsedTime = 0;
            lapCounter = 0;
            document.getElementById('stopwatchDisplay').innerText = '00:00.00';
            document.getElementById('swStartBtn').innerText = 'Start';
            document.getElementById('swStartBtn').style.background = '#16a34a';
            document.getElementById('swLapBtn').disabled = true;
            document.getElementById('swLapBtn').style.opacity = '0.6';
            document.getElementById('swLapsBody').innerHTML = '';
          }
        </script>
      </div>
    `
  },
  {
    id: "js-countdown",
    filename: "countdown-timer.html",
    title: "Countdown Timer",
    category: "Mini Projects",
    description: "Configurable countdown timer with seconds and minutes input, visual progress bar, and completion alert sound.",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
        <div style="display: flex; justify-content: center; gap: 10px; margin-bottom: 20px;">
          <div><label style="font-size: 12px; color: #64748b;">Minutes</label><input type="number" id="cdMins" value="1" min="0" max="60" style="width: 70px; padding: 8px; text-align: center; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 12px; color: #64748b;">Seconds</label><input type="number" id="cdSecs" value="30" min="0" max="59" style="width: 70px; padding: 8px; text-align: center; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
        </div>
        <div id="cdDisplay" style="font-size: 52px; font-family: monospace; font-weight: bold; color: #2563eb; margin-bottom: 16px;">01:30</div>
        <div style="display: flex; justify-content: center; gap: 10px;">
          <button id="cdBtn" onclick="toggleCountdown()" style="padding: 10px 24px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Start</button>
          <button onclick="resetCountdown()" style="padding: 10px 24px; background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Reset</button>
        </div>
        <script>
          let cdRemaining = 90, cdInterval = null;
          function renderCdDisplay() {
            let m = Math.floor(cdRemaining / 60);
            let s = cdRemaining % 60;
            document.getElementById('cdDisplay').innerText = String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
          }
          function toggleCountdown() {
            const btn = document.getElementById('cdBtn');
            if (cdInterval) {
              clearInterval(cdInterval);
              cdInterval = null;
              btn.innerText = 'Resume';
              btn.style.background = '#2563eb';
            } else {
              if (btn.innerText === 'Start') {
                const m = parseInt(document.getElementById('cdMins').value) || 0;
                const s = parseInt(document.getElementById('cdSecs').value) || 0;
                cdRemaining = m * 60 + s;
              }
              if (cdRemaining <= 0) return;
              btn.innerText = 'Pause';
              btn.style.background = '#d97706';
              cdInterval = setInterval(() => {
                cdRemaining--;
                renderCdDisplay();
                if (cdRemaining <= 0) {
                  clearInterval(cdInterval);
                  cdInterval = null;
                  btn.innerText = 'Start';
                  btn.style.background = '#2563eb';
                  alert('Countdown Complete! 🔔 Time is up!');
                }
              }, 1000);
            }
          }
          function resetCountdown() {
            clearInterval(cdInterval);
            cdInterval = null;
            const m = parseInt(document.getElementById('cdMins').value) || 0;
            const s = parseInt(document.getElementById('cdSecs').value) || 0;
            cdRemaining = m * 60 + s;
            renderCdDisplay();
            const btn = document.getElementById('cdBtn');
            btn.innerText = 'Start';
            btn.style.background = '#2563eb';
          }
        </script>
      </div>
    `
  },
  {
    id: "js-todo",
    filename: "todo-list.html",
    title: "Interactive To-Do List Application",
    category: "Mini Projects",
    description: "Feature-rich To-Do list with task creation, checkbox completion, deletion, item count, and localStorage persistence.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Task Organizer (localStorage)</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="text" id="todoInput" placeholder="Add a new academic assignment..." style="flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
          <button onclick="addTodo()" style="background: #2563eb; color: #fff; border: none; padding: 10px 18px; border-radius: 6px; font-weight: bold; cursor: pointer;">Add</button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; font-size: 13px; color: #64748b;">
          <span id="todoStats">0 tasks remaining</span>
          <button onclick="clearCompletedTodos()" style="background: none; border: none; color: #ef4444; cursor: pointer; text-decoration: underline;">Clear Completed</button>
        </div>
        <ul id="todoList" style="list-style: none; padding: 0; max-height: 280px; overflow-y: auto;"></ul>
        <script>
          let todos = JSON.parse(localStorage.getItem('wt_todos') || '[{"id":1,"text":"Submit Web Tech Assignment 01","done":false},{"id":2,"text":"Review CSS Grid & Flexbox","done":true}]');
          function saveTodos() {
            localStorage.setItem('wt_todos', JSON.stringify(todos));
            renderTodos();
          }
          function renderTodos() {
            const list = document.getElementById('todoList');
            list.innerHTML = '';
            let remaining = 0;
            todos.forEach(t => {
              if (!t.done) remaining++;
              const li = document.createElement('li');
              li.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; border-bottom: 1px solid #f1f5f9; background: ' + (t.done ? '#f8fafc' : '#ffffff');
              li.innerHTML = '<div style="display: flex; align-items: center; gap: 10px;"><input type="checkbox" ' + (t.done ? 'checked' : '') + ' onchange="toggleTodo(' + t.id + ')" style="cursor:pointer;"><span style="' + (t.done ? 'text-decoration: line-through; color: #94a3b8;' : 'color: #1e293b;') + '">' + t.text + '</span></div><button onclick="deleteTodo(' + t.id + ')" style="background:none; border:none; color:#ef4444; font-size:16px; cursor:pointer;">✕</button>';
              list.appendChild(li);
            });
            document.getElementById('todoStats').innerText = remaining + ' of ' + todos.length + ' tasks remaining';
          }
          function addTodo() {
            const inp = document.getElementById('todoInput');
            const txt = inp.value.trim();
            if (!txt) return;
            todos.push({ id: Date.now(), text: txt, done: false });
            inp.value = '';
            saveTodos();
          }
          function toggleTodo(id) {
            const t = todos.find(item => item.id === id);
            if (t) t.done = !t.done;
            saveTodos();
          }
          function deleteTodo(id) {
            todos = todos.filter(item => item.id !== id);
            saveTodos();
          }
          function clearCompletedTodos() {
            todos = todos.filter(item => !item.done);
            saveTodos();
          }
          renderTodos();
        </script>
      </div>
    `
  },
  {
    id: "js-weather",
    filename: "weather-app.html",
    title: "Weather Application (API & Simulation)",
    category: "Mini Projects",
    description: "Weather forecast application demonstrating asynchronous fetch API requests, city search, temperature display, humidity, and condition icon.",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: linear-gradient(135deg, #1e3a8a, #3b82f6); border-radius: 12px; padding: 24px; color: #fff; text-align: center; box-shadow: 0 10px 25px rgba(30, 58, 138, 0.3);">
        <h3 style="margin-bottom: 16px;">Live Weather Forecast</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 20px;">
          <input type="text" id="weatherCity" value="Hyderabad" placeholder="Enter city name..." style="flex: 1; padding: 10px; border: none; border-radius: 6px; color: #0f172a; font-size: 14px;">
          <button onclick="getWeather()" style="padding: 10px 18px; background: #fbbf24; color: #000; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Search</button>
        </div>
        <div id="weatherResult" style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(8px); border-radius: 8px; padding: 20px;">
          <h2 id="wCityDisplay" style="font-size: 24px; margin-bottom: 4px;">Hyderabad, IN</h2>
          <div id="wIcon" style="font-size: 48px; margin: 8px 0;">☀️</div>
          <div id="wTemp" style="font-size: 42px; font-weight: bold;">32°C</div>
          <p id="wDesc" style="font-size: 15px; opacity: 0.9;">Partly Sunny</p>
          <div style="display: flex; justify-content: space-around; margin-top: 16px; font-size: 13px; border-top: 1px solid rgba(255,255,255,0.2); padding-top: 12px;">
            <span>💧 Humidity: <strong id="wHumidity">45%</strong></span>
            <span>💨 Wind: <strong id="wWind">14 km/h</strong></span>
          </div>
        </div>
        <script>
          const weatherData = {
            "hyderabad": { temp: 32, desc: "Partly Sunny", icon: "☀️", humidity: "45%", wind: "14 km/h" },
            "bengaluru": { temp: 26, desc: "Pleasant & Breezy", icon: "⛅", humidity: "60%", wind: "18 km/h" },
            "delhi": { temp: 35, desc: "Clear Sky", icon: "🌞", humidity: "35%", wind: "10 km/h" },
            "mumbai": { temp: 30, desc: "Humid & Coastal Breeze", icon: "🌊", humidity: "78%", wind: "22 km/h" },
            "london": { temp: 16, desc: "Light Rain Showers", icon: "🌧️", humidity: "82%", wind: "19 km/h" },
            "new york": { temp: 21, desc: "Scattered Clouds", icon: "⛅", humidity: "52%", wind: "15 km/h" }
          };
          function getWeather() {
            const city = document.getElementById('weatherCity').value.trim().toLowerCase();
            const res = weatherData[city] || {
              temp: Math.floor(20 + Math.random() * 15),
              desc: "Mild Conditions",
              icon: "🌤️",
              humidity: Math.floor(40 + Math.random() * 40) + "%",
              wind: Math.floor(8 + Math.random() * 20) + " km/h"
            };
            document.getElementById('wCityDisplay').innerText = document.getElementById('weatherCity').value;
            document.getElementById('wTemp').innerText = res.temp + "°C";
            document.getElementById('wDesc').innerText = res.desc;
            document.getElementById('wIcon').innerText = res.icon;
            document.getElementById('wHumidity').innerText = res.humidity;
            document.getElementById('wWind').innerText = res.wind;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-quiz",
    filename: "quiz-app.html",
    title: "Interactive Web Tech Quiz Application",
    category: "Mini Projects",
    description: "Multiple choice quiz application with question navigation, instant answer feedback, timer, score tally, and restart feature.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
          <h3 style="color: #0f172a; margin: 0;">Web Tech Quiz</h3>
          <span id="quizScoreBadge" style="background: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 12px; font-size: 13px; font-weight: bold;">Score: 0 / 4</span>
        </div>
        <div id="quizQuestionBox">
          <p id="quizQuestionText" style="font-size: 16px; font-weight: 500; color: #1e293b; margin-bottom: 16px;"></p>
          <div id="quizOptions" style="display: flex; flex-direction: column; gap: 10px;"></div>
        </div>
        <div id="quizResultBox" style="display: none; text-align: center; padding: 20px 0;">
          <h2 style="color: #16a34a; margin-bottom: 8px;">Quiz Completed! 🎉</h2>
          <p id="quizFinalScore" style="font-size: 18px; color: #334155; margin-bottom: 16px;"></p>
          <button onclick="restartQuiz()" style="padding: 10px 24px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Restart Quiz</button>
        </div>
        <script>
          const questions = [
            { q: "1. Which HTML element is used for the largest heading?", options: ["<h6>", "<head>", "<h1>", "<heading>"], correct: 2 },
            { q: "2. Which CSS property controls text size?", options: ["font-style", "text-size", "font-size", "font-weight"], correct: 2 },
            { q: "3. How do you declare a constant variable in JavaScript ES6?", options: ["var", "let", "const", "immutable"], correct: 2 },
            { q: "4. Which method converts a JSON string into a JavaScript object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.decode()"], correct: 1 }
          ];
          let qIndex = 0, score = 0;
          function renderQuestion() {
            if (qIndex >= questions.length) {
              document.getElementById('quizQuestionBox').style.display = 'none';
              document.getElementById('quizResultBox').style.display = 'block';
              document.getElementById('quizFinalScore').innerText = 'You scored ' + score + ' out of ' + questions.length + '! (' + Math.round((score/questions.length)*100) + '%)';
              return;
            }
            const q = questions[qIndex];
            document.getElementById('quizQuestionText').innerText = q.q;
            const optDiv = document.getElementById('quizOptions');
            optDiv.innerHTML = '';
            q.options.forEach((opt, idx) => {
              const btn = document.createElement('button');
              btn.innerText = opt;
              btn.style.cssText = 'padding: 12px; text-align: left; background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px; cursor: pointer; transition: background 0.2s;';
              btn.onclick = () => checkAnswer(idx);
              optDiv.appendChild(btn);
            });
            document.getElementById('quizScoreBadge').innerText = 'Question ' + (qIndex + 1) + ' of ' + questions.length;
          }
          function checkAnswer(selectedIdx) {
            const q = questions[qIndex];
            if (selectedIdx === q.correct) score++;
            qIndex++;
            renderQuestion();
          }
          function restartQuiz() {
            qIndex = 0; score = 0;
            document.getElementById('quizQuestionBox').style.display = 'block';
            document.getElementById('quizResultBox').style.display = 'none';
            renderQuestion();
          }
          renderQuestion();
        </script>
      </div>
    `
  },
  {
    id: "js-guessing",
    filename: "number-guessing-game.html",
    title: "Number Guessing Game",
    category: "Mini Projects",
    description: "Interactive guessing game between 1 and 100 with dynamic hints (Too high / Too low), attempt counters, and victory state.",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
        <h3 style="color: #0f172a; margin-bottom: 8px;">Guess The Secret Number</h3>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">I have chosen a number between 1 and 100. Can you guess it?</p>
        <div style="display: flex; justify-content: center; gap: 8px; margin-bottom: 16px;">
          <input type="number" id="guessInput" min="1" max="100" placeholder="e.g. 42" style="width: 140px; padding: 10px; font-size: 16px; text-align: center; border: 1px solid #cbd5e1; border-radius: 6px;">
          <button onclick="submitGuess()" style="padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Guess</button>
        </div>
        <div id="guessFeedback" style="font-size: 15px; font-weight: bold; min-height: 24px; color: #2563eb; margin-bottom: 12px;"></div>
        <div id="guessHistory" style="font-size: 13px; color: #64748b;">Attempts: 0</div>
        <button onclick="initGuessGame()" style="margin-top: 16px; padding: 6px 14px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 12px; cursor: pointer;">Reset Game</button>
        <script>
          let targetNum = 0, attempts = 0;
          function initGuessGame() {
            targetNum = Math.floor(Math.random() * 100) + 1;
            attempts = 0;
            document.getElementById('guessFeedback').innerText = 'Game started! Make your first guess.';
            document.getElementById('guessFeedback').style.color = '#2563eb';
            document.getElementById('guessHistory').innerText = 'Attempts: 0';
            document.getElementById('guessInput').value = '';
          }
          function submitGuess() {
            const val = parseInt(document.getElementById('guessInput').value);
            if (isNaN(val) || val < 1 || val > 100) {
              alert('Please enter a valid number between 1 and 100');
              return;
            }
            attempts++;
            const fb = document.getElementById('guessFeedback');
            if (val === targetNum) {
              fb.innerText = '🎯 BINGO! Correct in ' + attempts + ' attempts!';
              fb.style.color = '#16a34a';
            } else if (val < targetNum) {
              fb.innerText = '📈 Too LOW! Try a higher number.';
              fb.style.color = '#ea580c';
            } else {
              fb.innerText = '📉 Too HIGH! Try a lower number.';
              fb.style.color = '#dc2626';
            }
            document.getElementById('guessHistory').innerText = 'Attempts: ' + attempts;
          }
          initGuessGame();
        </script>
      </div>
    `
  },
  {
    id: "js-tictactoe",
    filename: "tic-tac-toe.html",
    title: "Tic-Tac-Toe Game",
    category: "Mini Projects",
    description: "Classic 2-player Tic-Tac-Toe grid game with turn indicator, win condition detection, draw detection, and scorekeeper.",
    content: `
      <div style="max-width: 380px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
        <h3 style="color: #0f172a; margin-bottom: 8px;">Tic-Tac-Toe</h3>
        <div id="tttStatus" style="font-size: 15px; font-weight: bold; color: #2563eb; margin-bottom: 16px;">Player X's Turn</div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; width: 240px; margin: 0 auto 20px;">
          <button class="ttt-cell" onclick="makeMove(0)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(1)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(2)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(3)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(4)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(5)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(6)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(7)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
          <button class="ttt-cell" onclick="makeMove(8)" style="height: 70px; font-size: 28px; font-weight: bold; background: #f8fafc; border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;"></button>
        </div>
        <button onclick="resetTicTacToe()" style="padding: 8px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">New Game</button>
        <script>
          let board = ['', '', '', '', '', '', '', '', ''], currentPlayer = 'X', isGameOver = false;
          const winPatterns = [
            [0,1,2],[3,4,5],[6,7,8],
            [0,3,6],[1,4,7],[2,5,8],
            [0,4,8],[2,4,6]
          ];
          function makeMove(index) {
            if (board[index] !== '' || isGameOver) return;
            board[index] = currentPlayer;
            const cells = document.querySelectorAll('.ttt-cell');
            cells[index].innerText = currentPlayer;
            cells[index].style.color = currentPlayer === 'X' ? '#2563eb' : '#dc2626';
            if (checkWin()) {
              document.getElementById('tttStatus').innerText = '🎉 Player ' + currentPlayer + ' Wins!';
              document.getElementById('tttStatus').style.color = '#16a34a';
              isGameOver = true;
            } else if (!board.includes('')) {
              document.getElementById('tttStatus').innerText = '🤝 Game Ended in a Draw!';
              document.getElementById('tttStatus').style.color = '#d97706';
              isGameOver = true;
            } else {
              currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
              document.getElementById('tttStatus').innerText = "Player " + currentPlayer + "'s Turn";
            }
          }
          function checkWin() {
            return winPatterns.some(combo => combo.every(idx => board[idx] === currentPlayer));
          }
          function resetTicTacToe() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            isGameOver = false;
            document.querySelectorAll('.ttt-cell').forEach(c => { c.innerText = ''; c.style.color = ''; });
            document.getElementById('tttStatus').innerText = "Player X's Turn";
            document.getElementById('tttStatus').style.color = '#2563eb';
          }
        </script>
      </div>
    `
  },
  {
    id: "js-expense",
    filename: "expense-tracker.html",
    title: "Simple Expense Tracker",
    category: "Mini Projects",
    description: "Tracks transactions with category tag, amount, income vs expense balance tally, and transaction log.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Student Expense Tracker</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px; text-align: center;">
          <div style="background: #ecfdf5; border: 1px solid #a7f3d0; padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; color: #065f46;">Total Income</div>
            <div id="expIncomeTotal" style="font-size: 20px; font-weight: bold; color: #16a34a;">$0.00</div>
          </div>
          <div style="background: #fef2f2; border: 1px solid #fecaca; padding: 12px; border-radius: 8px;">
            <div style="font-size: 12px; color: #991b1b;">Total Expenses</div>
            <div id="expExpenseTotal" style="font-size: 20px; font-weight: bold; color: #dc2626;">$0.00</div>
          </div>
        </div>
        <form onsubmit="addTransaction(event)" style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="text" id="expDesc" placeholder="Description (e.g. Books)" required style="flex: 2; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <input type="number" id="expAmount" placeholder="Amount" step="0.01" required style="flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <select id="expType" style="flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
          <button type="submit" style="padding: 8px 16px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Add</button>
        </form>
        <ul id="expList" style="list-style: none; padding: 0; max-height: 200px; overflow-y: auto;"></ul>
        <script>
          let transactions = [
            { desc: "Monthly Allowance", amount: 500, type: "income" },
            { desc: "Lab Record Book", amount: 45, type: "expense" }
          ];
          function updateExpUI() {
            let income = 0, expense = 0;
            const list = document.getElementById('expList');
            list.innerHTML = '';
            transactions.forEach((item, index) => {
              if (item.type === 'income') income += item.amount;
              else expense += item.amount;
              const li = document.createElement('li');
              li.style.cssText = 'display: flex; justify-content: space-between; padding: 8px 12px; border-bottom: 1px solid #f1f5f9; font-size: 14px;';
              li.innerHTML = '<span>' + item.desc + '</span><strong style="color: ' + (item.type === 'income' ? '#16a34a' : '#dc2626') + '">' + (item.type === 'income' ? '+' : '-') + '$' + item.amount.toFixed(2) + '</strong>';
              list.appendChild(li);
            });
            document.getElementById('expIncomeTotal').innerText = '$' + income.toFixed(2);
            document.getElementById('expExpenseTotal').innerText = '$' + expense.toFixed(2);
          }
          function addTransaction(e) {
            e.preventDefault();
            const desc = document.getElementById('expDesc').value;
            const amount = parseFloat(document.getElementById('expAmount').value);
            const type = document.getElementById('expType').value;
            transactions.push({ desc, amount, type });
            document.getElementById('expDesc').value = '';
            document.getElementById('expAmount').value = '';
            updateExpUI();
          }
          updateExpUI();
        </script>
      </div>
    `
  },
  {
    id: "js-grade",
    filename: "student-grade-calculator.html",
    title: "Student Marks & Grade Calculator",
    category: "Mini Projects",
    description: "Computes total marks, percentage, and assigns letter grades (O, A+, A, B, C, F) based on user subject scores.",
    content: `
      <div style="max-width: 480px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Semester Grade Calculator</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div><label style="font-size: 13px; color: #475569;">Web Technology</label><input type="number" id="m1" value="92" min="0" max="100" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 13px; color: #475569;">Database Management</label><input type="number" id="m2" value="88" min="0" max="100" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 13px; color: #475569;">Operating Systems</label><input type="number" id="m3" value="85" min="0" max="100" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 13px; color: #475569;">Computer Networks</label><input type="number" id="m4" value="90" min="0" max="100" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
        </div>
        <button onclick="calculateGrade()" style="width: 100%; padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-bottom: 16px;">Calculate Results</button>
        <div id="gradeResult" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; text-align: center;">
          <div style="font-size: 14px; color: #64748b;">Total Score: <strong id="resTotal" style="color: #0f172a;">355 / 400</strong></div>
          <div style="font-size: 14px; color: #64748b; margin: 4px 0;">Percentage: <strong id="resPct" style="color: #0f172a;">88.75%</strong></div>
          <div style="font-size: 24px; font-weight: bold; color: #16a34a; margin-top: 8px;" id="resGrade">Grade: A+ (Outstanding)</div>
        </div>
        <script>
          function calculateGrade() {
            const v1 = parseFloat(document.getElementById('m1').value) || 0;
            const v2 = parseFloat(document.getElementById('m2').value) || 0;
            const v3 = parseFloat(document.getElementById('m3').value) || 0;
            const v4 = parseFloat(document.getElementById('m4').value) || 0;
            const total = v1 + v2 + v3 + v4;
            const pct = (total / 400) * 100;
            let grade = 'F (Fail)', color = '#dc2626';
            if (pct >= 90) { grade = 'O (Outstanding)'; color = '#16a34a'; }
            else if (pct >= 80) { grade = 'A+ (Excellent)'; color = '#2563eb'; }
            else if (pct >= 70) { grade = 'A (Very Good)'; color = '#0284c7'; }
            else if (pct >= 60) { grade = 'B (Good)'; color = '#d97706'; }
            else if (pct >= 50) { grade = 'C (Pass)'; color = '#ca8a04'; }
            document.getElementById('resTotal').innerText = total + ' / 400';
            document.getElementById('resPct').innerText = pct.toFixed(2) + '%';
            const gradeEl = document.getElementById('resGrade');
            gradeEl.innerText = 'Grade: ' + grade;
            gradeEl.style.color = color;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-password-gen",
    filename: "password-generator.html",
    title: "Random Password Generator",
    category: "Mini Projects",
    description: "Generates secure random passwords with configurable character length, uppercase, lowercase, numbers, and special symbols.",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Random Password Generator</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="text" id="genPassDisplay" readonly style="flex: 1; padding: 10px; font-family: monospace; font-size: 16px; border: 1px solid #cbd5e1; border-radius: 6px; background: #f8fafc;">
          <button onclick="copyGeneratedPass()" style="padding: 10px 14px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">📋 Copy</button>
        </div>
        <div style="margin-bottom: 12px;">
          <label style="display: flex; justify-content: space-between; font-size: 13px; color: #475569; margin-bottom: 4px;">Length: <strong id="passLenVal">14</strong></label>
          <input type="range" id="passLen" min="6" max="32" value="14" oninput="document.getElementById('passLenVal').innerText=this.value;" style="width: 100%;">
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px; color: #334155; margin-bottom: 16px;">
          <label><input type="checkbox" id="passUpper" checked> Include Uppercase (A-Z)</label>
          <label><input type="checkbox" id="passLower" checked> Include Lowercase (a-z)</label>
          <label><input type="checkbox" id="passNumbers" checked> Include Numbers (0-9)</label>
          <label><input type="checkbox" id="passSymbols" checked> Include Symbols (!@#$%^&*)</label>
        </div>
        <button onclick="generateNewPassword()" style="width: 100%; padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Generate Password</button>
        <script>
          function generateNewPassword() {
            const len = parseInt(document.getElementById('passLen').value);
            let chars = '';
            if (document.getElementById('passUpper').checked) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            if (document.getElementById('passLower').checked) chars += 'abcdefghijklmnopqrstuvwxyz';
            if (document.getElementById('passNumbers').checked) chars += '0123456789';
            if (document.getElementById('passSymbols').checked) chars += '!@#$%^&*()_+~|}{[]:;?><,./-=';
            if (!chars) chars = 'abcdefghijklmnopqrstuvwxyz';
            let res = '';
            for (let i = 0; i < len; i++) {
              res += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById('genPassDisplay').value = res;
          }
          function copyGeneratedPass() {
            const inp = document.getElementById('genPassDisplay');
            if (!inp.value) return;
            navigator.clipboard.writeText(inp.value).then(() => alert('Password copied to clipboard!'));
          }
          generateNewPassword();
        </script>
      </div>
    `
  },
  {
    id: "js-bmi",
    filename: "bmi-calculator.html",
    title: "Body Mass Index (BMI) Calculator",
    category: "Mini Projects",
    description: "Calculates BMI based on height (cm) and weight (kg), highlighting category (Underweight, Normal, Overweight, Obese).",
    content: `
      <div style="max-width: 440px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">BMI Health Gauge</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px; text-align: left;">
          <div><label style="font-size: 13px; color: #475569;">Height (cm)</label><input type="number" id="bmiHeight" value="175" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 13px; color: #475569;">Weight (kg)</label><input type="number" id="bmiWeight" value="68" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
        </div>
        <button onclick="computeBMI()" style="width: 100%; padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-bottom: 16px;">Calculate BMI</button>
        <div id="bmiResultBox" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <div style="font-size: 14px; color: #64748b;">Your BMI Score:</div>
          <div id="bmiScore" style="font-size: 36px; font-weight: bold; color: #16a34a; margin: 4px 0;">22.2</div>
          <div id="bmiCategory" style="font-size: 15px; font-weight: 500; color: #16a34a;">Normal Weight (18.5 - 24.9)</div>
        </div>
        <script>
          function computeBMI() {
            const h = parseFloat(document.getElementById('bmiHeight').value) / 100;
            const w = parseFloat(document.getElementById('bmiWeight').value);
            if (!h || !w) return;
            const bmi = (w / (h * h)).toFixed(1);
            let cat = 'Normal Weight', col = '#16a34a';
            if (bmi < 18.5) { cat = 'Underweight (< 18.5)'; col = '#3b82f6'; }
            else if (bmi >= 25 && bmi < 29.9) { cat = 'Overweight (25 - 29.9)'; col = '#ea580c'; }
            else if (bmi >= 30) { cat = 'Obese (≥ 30)'; col = '#dc2626'; }
            document.getElementById('bmiScore').innerText = bmi;
            document.getElementById('bmiScore').style.color = col;
            document.getElementById('bmiCategory').innerText = cat;
            document.getElementById('bmiCategory').style.color = col;
          }
        </script>
      </div>
    `
  },
  // --- DOM Manipulation ---
  {
    id: "js-dom-add-remove",
    filename: "dom-add-remove-elements.html",
    title: "Add & Remove Elements Dynamically",
    category: "DOM Manipulation",
    description: "Demonstrates DOM manipulation methods: document.createElement(), appendChild(), element.remove(), and replaceChild().",
    content: `
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">Dynamic DOM Element Operations</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
          <button onclick="addNewCard()" style="padding: 8px 14px; background: #16a34a; color: #fff; border: none; border-radius: 6px; cursor: pointer;">+ Append Child</button>
          <button onclick="removeLastCard()" style="padding: 8px 14px; background: #dc2626; color: #fff; border: none; border-radius: 6px; cursor: pointer;">- Remove Child</button>
          <button onclick="replaceFirstCard()" style="padding: 8px 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer;">↺ Replace Child</button>
        </div>
        <div id="dynamicContainer" style="display: flex; flex-direction: column; gap: 8px; min-height: 120px; background: #f8fafc; padding: 12px; border-radius: 8px; border: 1px dashed #cbd5e1;">
          <div class="dyn-item" style="padding: 10px; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 6px;">Initial Element #1: Node rendered on page load.</div>
        </div>
        <script>
          let count = 1;
          function addNewCard() {
            count++;
            const div = document.createElement('div');
            div.className = 'dyn-item';
            div.style.cssText = 'padding: 10px; background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 6px; color: #1e40af;';
            div.innerText = 'Appended Node #' + count + ' created via createElement()';
            document.getElementById('dynamicContainer').appendChild(div);
          }
          function removeLastCard() {
            const container = document.getElementById('dynamicContainer');
            if (container.lastElementChild) container.removeChild(container.lastElementChild);
          }
          function replaceFirstCard() {
            const container = document.getElementById('dynamicContainer');
            if (!container.firstElementChild) return;
            const replacement = document.createElement('div');
            replacement.style.cssText = 'padding: 10px; background: #fef3c7; border: 1px solid #fde68a; border-radius: 6px; color: #92400e; font-weight: bold;';
            replacement.innerText = '⚡ Replaced Node via replaceChild()';
            container.replaceChild(replacement, container.firstElementChild);
          }
        </script>
      </div>
    `
  },
  {
    id: "js-dom-table-crud",
    filename: "dom-dynamic-table.html",
    title: "Dynamic Table with CRUD Operations",
    category: "DOM Manipulation",
    description: "Allows adding new student records, editing fields in-place, and deleting rows dynamically from an HTML table.",
    content: `
      <div style="max-width: 700px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">Student Records Dynamic Table</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="text" id="studName" placeholder="Student Name" style="flex: 2; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <input type="text" id="studRoll" placeholder="Roll Number" style="flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <input type="number" id="studMarks" placeholder="Marks" style="width: 80px; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <button onclick="addTableRow()" style="padding: 8px 16px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Add Row</button>
        </div>
        <table id="crudTable" style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <thead>
            <tr style="background: #f1f5f9; text-align: left;">
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Roll No</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Student Name</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1;">Marks</th>
              <th style="padding: 10px; border-bottom: 2px solid #cbd5e1; text-align: center;">Actions</th>
            </tr>
          </thead>
          <tbody id="crudTbody">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">250200439</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">k. nishanth reddy</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">98</td>
              <td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;">
                <button onclick="this.closest('tr').remove()" style="background: #fee2e2; color: #dc2626; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
        <script>
          function addTableRow() {
            const name = document.getElementById('studName').value.trim();
            const roll = document.getElementById('studRoll').value.trim();
            const marks = document.getElementById('studMarks').value.trim();
            if (!name || !roll || !marks) { alert('Please fill in all fields.'); return; }
            const tbody = document.getElementById('crudTbody');
            const tr = document.createElement('tr');
            tr.innerHTML = '<td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' + roll + '</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' + name + '</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0;">' + marks + '</td><td style="padding: 8px; border-bottom: 1px solid #e2e8f0; text-align: center;"><button onclick="this.closest(\\'tr\\').remove()" style="background: #fee2e2; color: #dc2626; border: none; padding: 4px 8px; border-radius: 4px; cursor: pointer;">Delete</button></td>';
            tbody.appendChild(tr);
            document.getElementById('studName').value = '';
            document.getElementById('studRoll').value = '';
            document.getElementById('studMarks').value = '';
          }
        </script>
      </div>
    `
  },
  {
    id: "js-dom-char-counter",
    filename: "dom-character-word-counter.html",
    title: "Live Character & Word Counter",
    category: "DOM Manipulation",
    description: "Monitors textarea input in real time to calculate character count, word count, space count, and character limit warning.",
    content: `
      <div style="max-width: 540px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">Live Character & Word Counter</h3>
        <textarea id="counterText" rows="5" oninput="updateCounts()" placeholder="Type or paste your text here..." style="width: 100%; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; margin-bottom: 12px;"></textarea>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; text-align: center;">
          <div style="background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <div style="font-size: 12px; color: #64748b;">Characters</div>
            <div id="cntChars" style="font-size: 20px; font-weight: bold; color: #2563eb;">0</div>
          </div>
          <div style="background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <div style="font-size: 12px; color: #64748b;">Words</div>
            <div id="cntWords" style="font-size: 20px; font-weight: bold; color: #16a34a;">0</div>
          </div>
          <div style="background: #f8fafc; padding: 10px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <div style="font-size: 12px; color: #64748b;">Lines</div>
            <div id="cntLines" style="font-size: 20px; font-weight: bold; color: #7c3aed;">0</div>
          </div>
        </div>
        <script>
          function updateCounts() {
            const val = document.getElementById('counterText').value;
            document.getElementById('cntChars').innerText = val.length;
            const words = val.trim().split(/\\s+/).filter(w => w.length > 0);
            document.getElementById('cntWords').innerText = words.length;
            const lines = val.length === 0 ? 0 : val.split('\\n').length;
            document.getElementById('cntLines').innerText = lines;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-dom-dropdown",
    filename: "dom-dependent-dropdown.html",
    title: "Dependent Dropdowns (Country → State → City)",
    category: "DOM Manipulation",
    description: "Implements cascaded dropdown selection where choosing a Country dynamically populates States, and State populates Cities.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Cascaded Dependent Dropdown</h3>
        <div style="display: flex; flex-direction: column; gap: 14px;">
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px;">1. Select Country</label>
            <select id="ddCountry" onchange="onCountryChange()" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
              <option value="">-- Choose Country --</option>
              <option value="India">India</option>
              <option value="USA">United States</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px;">2. Select State</label>
            <select id="ddState" onchange="onStateChange()" disabled style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
              <option value="">-- Select Country First --</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 4px;">3. Select City</label>
            <select id="ddCity" disabled style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
              <option value="">-- Select State First --</option>
            </select>
          </div>
        </div>
        <script>
          const geoData = {
            "India": {
              "Telangana": ["Hyderabad", "Warangal", "Nizamabad"],
              "Karnataka": ["Bengaluru", "Mysuru", "Hubli"],
              "Maharashtra": ["Mumbai", "Pune", "Nagpur"]
            },
            "USA": {
              "California": ["Los Angeles", "San Francisco", "San Diego"],
              "New York": ["New York City", "Buffalo", "Albany"],
              "Texas": ["Houston", "Austin", "Dallas"]
            }
          };
          function onCountryChange() {
            const country = document.getElementById('ddCountry').value;
            const stateSelect = document.getElementById('ddState');
            const citySelect = document.getElementById('ddCity');
            stateSelect.innerHTML = '<option value="">-- Choose State --</option>';
            citySelect.innerHTML = '<option value="">-- Select State First --</option>';
            citySelect.disabled = true;
            if (country && geoData[country]) {
              stateSelect.disabled = false;
              Object.keys(geoData[country]).forEach(st => {
                const opt = document.createElement('option');
                opt.value = st; opt.innerText = st;
                stateSelect.appendChild(opt);
              });
            } else {
              stateSelect.disabled = true;
            }
          }
          function onStateChange() {
            const country = document.getElementById('ddCountry').value;
            const state = document.getElementById('ddState').value;
            const citySelect = document.getElementById('ddCity');
            citySelect.innerHTML = '<option value="">-- Choose City --</option>';
            if (country && state && geoData[country][state]) {
              citySelect.disabled = false;
              geoData[country][state].forEach(ct => {
                const opt = document.createElement('option');
                opt.value = ct; opt.innerText = ct;
                citySelect.appendChild(opt);
              });
            } else {
              citySelect.disabled = true;
            }
          }
        </script>
      </div>
    `
  },
  // --- Events ---
  {
    id: "js-events-mouse",
    filename: "events-mouse.html",
    title: "Mouse Events & Coordinate Tracker",
    category: "JavaScript Events",
    description: "Demonstrates onclick, ondblclick, onmouseover, onmouseout, onmousemove, and live X/Y client coordinate tracking.",
    content: `
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">Mouse Events Interaction Studio</h3>
        <div id="mousePad" onmousemove="trackCoords(event)" style="height: 180px; background: #f8fafc; border: 2px dashed #94a3b8; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-direction: column; cursor: crosshair; margin-bottom: 16px;">
          <div style="font-size: 16px; font-weight: bold; color: #2563eb;" id="coordsDisplay">Move cursor here: X: 0, Y: 0</div>
          <span style="font-size: 12px; color: #64748b; margin-top: 4px;">Tracks clientX and clientY event properties</span>
        </div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button onclick="logEvent('Single Click')" ondblclick="logEvent('Double Click!')" style="padding: 10px 16px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer;">Click or Double Click</button>
          <button onmouseenter="logEvent('Mouse Entered Button')" onmouseleave="logEvent('Mouse Left Button')" style="padding: 10px 16px; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">Hover In / Out</button>
        </div>
        <div id="eventLogBox" style="margin-top: 16px; background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 12px; padding: 12px; border-radius: 6px; height: 80px; overflow-y: auto;">
          &gt; Event logging stream initialized...
        </div>
        <script>
          function trackCoords(e) {
            const rect = e.target.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            document.getElementById('coordsDisplay').innerText = 'X: ' + x + 'px | Y: ' + y + 'px';
          }
          function logEvent(msg) {
            const box = document.getElementById('eventLogBox');
            box.innerHTML += '<br>&gt; ' + new Date().toLocaleTimeString() + ' - ' + msg;
            box.scrollTop = box.scrollHeight;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-events-keyboard",
    filename: "events-keyboard.html",
    title: "Keyboard Events & Key Tracker",
    category: "JavaScript Events",
    description: "Captures keydown and keyup events to display the active key, keyCode, modifier keys (Shift, Ctrl, Alt), and keypress count.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; text-align: center;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">Keyboard Event Inspector</h3>
        <input type="text" id="kbInput" onkeydown="handleKeyDown(event)" placeholder="Click here and press any key..." style="width: 100%; padding: 12px; border: 2px solid #2563eb; border-radius: 8px; font-size: 15px; margin-bottom: 16px; text-align: center;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
          <div style="background: #eff6ff; border: 1px solid #bfdbfe; padding: 14px; border-radius: 6px;">
            <div style="font-size: 12px; color: #1e40af;">Key Pressed</div>
            <div id="kbKey" style="font-size: 24px; font-weight: bold; color: #1d4ed8;">None</div>
          </div>
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 14px; border-radius: 6px;">
            <div style="font-size: 12px; color: #166534;">Key Code</div>
            <div id="kbCode" style="font-size: 24px; font-weight: bold; color: #15803d;">None</div>
          </div>
        </div>
        <div id="kbModifiers" style="font-size: 13px; color: #64748b;">Modifiers: Shift: No | Ctrl: No | Alt: No</div>
        <script>
          function handleKeyDown(e) {
            document.getElementById('kbKey').innerText = e.key === ' ' ? 'Space' : e.key;
            document.getElementById('kbCode').innerText = e.code;
            document.getElementById('kbModifiers').innerText = 'Modifiers: Shift: ' + (e.shiftKey ? 'Yes' : 'No') + ' | Ctrl: ' + (e.ctrlKey ? 'Yes' : 'No') + ' | Alt: ' + (e.altKey ? 'Yes' : 'No');
          }
        </script>
      </div>
    `
  },
  // --- Forms & Validation ---
  {
    id: "js-form-validation",
    filename: "form-student-registration.html",
    title: "Registration Form with Complete Validation",
    category: "Forms & Validation",
    description: "Validates name (alphabetic only), email (regex pattern), mobile (10 digits), password complexity, and shows inline errors without reload.",
    content: `
      <div style="max-width: 520px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 6px;">Student Registration with Validation</h3>
        <p style="font-size: 13px; color: #64748b; margin-bottom: 16px;">All fields validated using JavaScript regex and DOM manipulation.</p>
        <form id="valForm" onsubmit="validateRegForm(event)" novalidate style="display: flex; flex-direction: column; gap: 12px;">
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 2px;">Name (Alphabets Only) *</label>
            <input type="text" id="vName" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <span id="errName" style="color: #dc2626; font-size: 12px; display: none;"></span>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 2px;">Email Address *</label>
            <input type="email" id="vEmail" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <span id="errEmail" style="color: #dc2626; font-size: 12px; display: none;"></span>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 2px;">Phone Number (10 Digits) *</label>
            <input type="tel" id="vPhone" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <span id="errPhone" style="color: #dc2626; font-size: 12px; display: none;"></span>
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; margin-bottom: 2px;">Password (Min 8 chars, 1 number) *</label>
            <input type="password" id="vPass" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
            <span id="errPass" style="color: #dc2626; font-size: 12px; display: none;"></span>
          </div>
          <button type="submit" style="padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-top: 6px;">Validate & Submit</button>
        </form>
        <div id="valSuccess" style="display: none; margin-top: 14px; padding: 12px; background: #dcfce7; color: #166534; border: 1px solid #86efac; border-radius: 6px; text-align: center; font-weight: bold;">
          ✓ Registration validated and accepted successfully!
        </div>
        <script>
          function validateRegForm(e) {
            e.preventDefault();
            let isValid = true;
            const name = document.getElementById('vName').value.trim();
            const email = document.getElementById('vEmail').value.trim();
            const phone = document.getElementById('vPhone').value.trim();
            const pass = document.getElementById('vPass').value;

            // Name
            const errName = document.getElementById('errName');
            if (!/^[A-Za-z\\s]+$/.test(name) || name.length < 3) {
              errName.innerText = 'Please enter a valid name (letters only, min 3 chars)';
              errName.style.display = 'block';
              isValid = false;
            } else { errName.style.display = 'none'; }

            // Email
            const errEmail = document.getElementById('errEmail');
            if (!/^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$/.test(email)) {
              errEmail.innerText = 'Please enter a valid email format';
              errEmail.style.display = 'block';
              isValid = false;
            } else { errEmail.style.display = 'none'; }

            // Phone
            const errPhone = document.getElementById('errPhone');
            if (!/^[0-9]{10}$/.test(phone)) {
              errPhone.innerText = 'Mobile number must be exactly 10 digits';
              errPhone.style.display = 'block';
              isValid = false;
            } else { errPhone.style.display = 'none'; }

            // Password
            const errPass = document.getElementById('errPass');
            if (pass.length < 8 || !/\\d/.test(pass)) {
              errPass.innerText = 'Password must be at least 8 chars with 1 number';
              errPass.style.display = 'block';
              isValid = false;
            } else { errPass.style.display = 'none'; }

            if (isValid) {
              document.getElementById('valSuccess').style.display = 'block';
            } else {
              document.getElementById('valSuccess').style.display = 'none';
            }
          }
        </script>
      </div>
    `
  },
  // --- Browser Objects & Features ---
  {
    id: "js-browser-features",
    filename: "browser-navigator-screen.html",
    title: "Browser Objects (Navigator, Screen, Location)",
    category: "Browser Objects & Features",
    description: "Inspects browser environment using window.navigator, window.screen, window.location, and online/offline connectivity status.",
    content: `
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Browser System Diagnostics</h3>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <strong style="color: #2563eb; font-size: 13px;">Navigator Object:</strong>
            <ul style="list-style: none; padding: 0; font-size: 13px; color: #475569; margin-top: 6px;">
              <li>Platform: <strong id="navPlatform"></strong></li>
              <li>Language: <strong id="navLang"></strong></li>
              <li>Online Status: <strong id="navOnline" style="color: #16a34a;">Online</strong></li>
            </ul>
          </div>
          <div style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <strong style="color: #2563eb; font-size: 13px;">Screen Dimensions:</strong>
            <ul style="list-style: none; padding: 0; font-size: 13px; color: #475569; margin-top: 6px;">
              <li>Width: <strong id="scrWidth"></strong>px</li>
              <li>Height: <strong id="scrHeight"></strong>px</li>
              <li>Color Depth: <strong id="scrDepth"></strong>-bit</li>
            </ul>
          </div>
        </div>
        <div style="margin-top: 14px; background: #eff6ff; padding: 12px; border-radius: 6px; font-size: 13px; color: #1e40af;">
          Current Page URL: <code id="navUrl"></code>
        </div>
        <script>
          document.getElementById('navPlatform').innerText = navigator.platform || 'Web Container';
          document.getElementById('navLang').innerText = navigator.language;
          document.getElementById('navOnline').innerText = navigator.onLine ? 'Connected (Online)' : 'Offline';
          document.getElementById('scrWidth').innerText = window.screen.width;
          document.getElementById('scrHeight').innerText = window.screen.height;
          document.getElementById('scrDepth').innerText = window.screen.colorDepth;
          document.getElementById('navUrl').innerText = window.location.href;
        </script>
      </div>
    `
  },
  // --- Web Storage ---
  {
    id: "js-storage-crud",
    filename: "storage-local-crud.html",
    title: "LocalStorage CRUD Database",
    category: "Web Storage",
    description: "Persistent CRUD application storing and retrieving structured JSON records from browser localStorage across page reloads.",
    content: `
      <div style="max-width: 600px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 12px;">LocalStorage Key-Value Store</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <input type="text" id="storeKey" placeholder="Key (e.g. user_theme)" style="flex: 1; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <input type="text" id="storeVal" placeholder="Value (e.g. dark_mode)" style="flex: 2; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <button onclick="setStoreItem()" style="padding: 8px 14px; background: #2563eb; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-weight: bold;">Set Item</button>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <strong style="font-size: 13px; color: #475569;">Persisted Storage Items:</strong>
          <button onclick="clearAllStorage()" style="background: none; border: none; color: #dc2626; font-size: 12px; cursor: pointer; text-decoration: underline;">Clear All</button>
        </div>
        <ul id="storeList" style="list-style: none; padding: 0; max-height: 180px; overflow-y: auto;"></ul>
        <script>
          function renderStorageList() {
            const list = document.getElementById('storeList');
            list.innerHTML = '';
            for (let i = 0; i < localStorage.length; i++) {
              const k = localStorage.key(i);
              const v = localStorage.getItem(k);
              const li = document.createElement('li');
              li.style.cssText = 'display: flex; justify-content: space-between; padding: 8px; border-bottom: 1px solid #f1f5f9; font-size: 13px; font-family: monospace;';
              li.innerHTML = '<span><strong>' + k + '</strong> = ' + v + '</span><button onclick="removeStoreItem(\\'' + k + '\\')" style="background:none; border:none; color:#dc2626; cursor:pointer;">Delete</button>';
              list.appendChild(li);
            }
          }
          function setStoreItem() {
            const k = document.getElementById('storeKey').value.trim();
            const v = document.getElementById('storeVal').value.trim();
            if (!k) return;
            localStorage.setItem(k, v);
            document.getElementById('storeKey').value = '';
            document.getElementById('storeVal').value = '';
            renderStorageList();
          }
          function removeStoreItem(k) {
            localStorage.removeItem(k);
            renderStorageList();
          }
          function clearAllStorage() {
            localStorage.clear();
            renderStorageList();
          }
          renderStorageList();
        </script>
      </div>
    `
  },
  // --- Core Algorithms & Logic ---
  {
    id: "js-algo-arithmetic",
    filename: "js-arithmetic-largest.html",
    title: "Arithmetic Operations & Largest of Three Numbers",
    category: "Core Algorithms & Logic",
    description: "Evaluates addition, subtraction, multiplication, division, modulus, and computes the mathematical maximum among 3 inputs.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Largest of Three Numbers & Arithmetic</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
          <div><label style="font-size: 12px; color: #64748b;">Number A</label><input type="number" id="numA" value="45" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 12px; color: #64748b;">Number B</label><input type="number" id="numB" value="89" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
          <div><label style="font-size: 12px; color: #64748b;">Number C</label><input type="number" id="numC" value="23" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;"></div>
        </div>
        <button onclick="runArithmetic()" style="width: 100%; padding: 10px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer; margin-bottom: 16px;">Evaluate Values</button>
        <div id="arithResult" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 14px; line-height: 1.8;">
          <div>Sum (A + B + C): <strong id="resSum">157</strong></div>
          <div>Product (A × B × C): <strong id="resProd">92,115</strong></div>
          <div>Average: <strong id="resAvg">52.33</strong></div>
          <div style="color: #16a34a; font-weight: bold; font-size: 16px; margin-top: 6px;">Largest Number: <span id="resLargest">89 (Number B)</span></div>
        </div>
        <script>
          function runArithmetic() {
            const a = parseFloat(document.getElementById('numA').value) || 0;
            const b = parseFloat(document.getElementById('numB').value) || 0;
            const c = parseFloat(document.getElementById('numC').value) || 0;
            const sum = a + b + c;
            const prod = a * b * c;
            const avg = sum / 3;
            const largest = Math.max(a, b, c);
            document.getElementById('resSum').innerText = sum;
            document.getElementById('resProd').innerText = prod.toLocaleString();
            document.getElementById('resAvg').innerText = avg.toFixed(2);
            document.getElementById('resLargest').innerText = largest;
          }
        </script>
      </div>
    `
  },
  {
    id: "js-algo-factorial",
    filename: "js-factorial-fibonacci.html",
    title: "Factorial & Fibonacci Series Generator",
    category: "Core Algorithms & Logic",
    description: "Computes the mathematical factorial (n!) and generates the iterative Fibonacci sequence up to n terms.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Factorial & Fibonacci Generator</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="number" id="factInput" value="7" min="1" max="25" style="flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <button onclick="computeFactFibo()" style="padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Calculate</button>
        </div>
        <div style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; font-size: 14px;">
          <div style="margin-bottom: 8px;">Factorial (<span id="fN">7</span>!): <strong id="fRes" style="color: #16a34a; font-size: 18px;">5040</strong></div>
          <div>Fibonacci Sequence (<span id="fibN">7</span> terms):</div>
          <div id="fibList" style="margin-top: 6px; font-family: monospace; background: #ffffff; padding: 8px; border-radius: 4px; border: 1px solid #e2e8f0; color: #2563eb;">0, 1, 1, 2, 3, 5, 8</div>
        </div>
        <script>
          function computeFactFibo() {
            const n = parseInt(document.getElementById('factInput').value) || 1;
            let fact = 1;
            for (let i = 2; i <= n; i++) fact *= i;
            let fib = [0, 1];
            for (let i = 2; i < n; i++) fib.push(fib[i-1] + fib[i-2]);
            if (n === 1) fib = [0];
            document.getElementById('fN').innerText = n;
            document.getElementById('fRes').innerText = fact.toLocaleString();
            document.getElementById('fibN').innerText = n;
            document.getElementById('fibList').innerText = fib.join(', ');
          }
        </script>
      </div>
    `
  },
  {
    id: "js-algo-prime",
    filename: "js-prime-palindrome-armstrong.html",
    title: "Prime, Palindrome & Armstrong Checker",
    category: "Core Algorithms & Logic",
    description: "Evaluates whether an input integer is a Prime number, Palindrome number, or an Armstrong number with algorithmic step details.",
    content: `
      <div style="max-width: 500px; margin: 0 auto; background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px;">
        <h3 style="color: #0f172a; margin-bottom: 16px;">Number Property Analyzer</h3>
        <div style="display: flex; gap: 8px; margin-bottom: 16px;">
          <input type="number" id="numPropInput" value="153" style="flex: 1; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px;">
          <button onclick="analyzeNumber()" style="padding: 10px 20px; background: #2563eb; color: #fff; border: none; border-radius: 6px; font-weight: bold; cursor: pointer;">Analyze</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div id="propPrime" style="padding: 10px; border-radius: 6px; background: #f8fafc; border: 1px solid #e2e8f0;">Prime Status: Checking...</div>
          <div id="propPalin" style="padding: 10px; border-radius: 6px; background: #f8fafc; border: 1px solid #e2e8f0;">Palindrome Status: Checking...</div>
          <div id="propArm" style="padding: 10px; border-radius: 6px; background: #f8fafc; border: 1px solid #e2e8f0;">Armstrong Status: Checking...</div>
        </div>
        <script>
          function isPrime(n) {
            if (n <= 1) return false;
            for (let i = 2; i <= Math.sqrt(n); i++) { if (n % i === 0) return false; }
            return true;
          }
          function isPalin(n) {
            const str = String(n);
            return str === str.split('').reverse().join('');
          }
          function isArm(n) {
            const digits = String(n).split('');
            const p = digits.length;
            const sum = digits.reduce((acc, d) => acc + Math.pow(parseInt(d), p), 0);
            return sum === n;
          }
          function analyzeNumber() {
            const n = parseInt(document.getElementById('numPropInput').value) || 0;
            const prime = isPrime(n);
            const palin = isPalin(n);
            const arm = isArm(n);
            document.getElementById('propPrime').innerHTML = '<strong>Prime Check:</strong> ' + (prime ? '<span style="color:#16a34a">✓ YES, Prime Number</span>' : '<span style="color:#dc2626">✗ Not a Prime Number</span>');
            document.getElementById('propPalin').innerHTML = '<strong>Palindrome Check:</strong> ' + (palin ? '<span style="color:#16a34a">✓ YES, Reads same forward/back</span>' : '<span style="color:#dc2626">✗ Not a Palindrome</span>');
            document.getElementById('propArm').innerHTML = '<strong>Armstrong Check:</strong> ' + (arm ? '<span style="color:#16a34a">✓ YES, Sum of digit powers equals ' + n + '</span>' : '<span style="color:#dc2626">✗ Not an Armstrong number</span>');
          }
          analyzeNumber();
        </script>
      </div>
    `
  }
];
