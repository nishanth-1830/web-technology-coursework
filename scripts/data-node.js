export const nodePrograms = [
  {
    id: "node-01",
    filename: "node-01-http-server.html",
    title: "Client-Server Architecture & HTTP Server",
    category: "Server-Side Architecture",
    description: "Implements a native Node.js HTTP server demonstrating the Request-Response cycle, status codes, headers, and MIME content types.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="color: #4ade80; font-family: monospace; font-size: 14px;">server.js (Node.js http module)</span>
            <button onclick="simulateHttpRequest('/')" style="background: #22c55e; color: #052e16; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Send HTTP GET /</button>
          </div>
          <pre style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px; overflow-x: auto; margin: 0;">
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(\`[\${new Date().toISOString()}] \${req.method} \${req.url}\`);
  
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('X-Powered-By', 'Node.js/v20');
  
  if (req.url === '/') {
    res.writeHead(200);
    res.end(JSON.stringify({ status: 'online', message: 'Hello from Node.js HTTP Server!', timestamp: Date.now() }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

server.listen(3000, () => console.log('Server running on port 3000'));</pre>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <button onclick="simulateHttpRequest('/')" style="padding: 6px 12px; font-size: 13px; background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; border-radius: 6px; font-weight: 500; cursor: pointer;">GET /</button>
            <button onclick="simulateHttpRequest('/api/students')" style="padding: 6px 12px; font-size: 13px; background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: 500; cursor: pointer;">GET /api/students</button>
            <button onclick="simulateHttpRequest('/non-existent')" style="padding: 6px 12px; font-size: 13px; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; border-radius: 6px; font-weight: 500; cursor: pointer;">GET /non-existent (404)</button>
          </div>
          <div id="http_response" style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 13px; padding: 14px; border-radius: 6px; min-height: 120px;">
            // Click any endpoint above to simulate a live HTTP Request-Response cycle...
          </div>
        </div>
      </div>
      <script>
        function simulateHttpRequest(path) {
          const resBox = document.getElementById('http_response');
          let status = 200;
          let body = {};
          if (path === '/') {
            status = 200;
            body = { status: 'online', server: 'Node.js HTTP Server', student: 'k. nishanth reddy', regNo: '250200439' };
          } else if (path === '/api/students') {
            status = 200;
            body = [
              { id: 101, name: 'K. Nishanth Reddy', dept: 'CSE' },
              { id: 102, name: 'Aditi Sharma', dept: 'IT' }
            ];
          } else {
            status = 404;
            body = { error: 'Not Found', message: 'Cannot GET ' + path };
          }

          resBox.innerHTML = 
            '<span style="color: #94a3b8;">HTTP/1.1 ' + status + (status === 200 ? ' OK' : ' Not Found') + '</span>\\n' +
            '<span style="color: #94a3b8;">Content-Type: application/json; charset=utf-8</span>\\n' +
            '<span style="color: #94a3b8;">X-Powered-By: Node.js/v20</span>\\n\\n' +
            '<span style="color: #4ade80;">' + JSON.stringify(body, null, 2) + '</span>';
        }
      </script>
    `
  },
  {
    id: "node-02",
    filename: "node-02-express-routes.html",
    title: "Express.js Routing, Route & Query Parameters",
    category: "Express Framework & Routing",
    description: "Covers Express application setup, GET, POST, PUT, DELETE routes, route parameters (:id), query strings, and modular Express Router.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="color: #38bdf8; font-family: monospace; font-size: 14px;">app.js (Express Router)</span>
            <span style="font-size: 12px; color: #34d399;">Express v4.21.2</span>
          </div>
          <pre style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px; overflow-x: auto; margin: 0;">
const express = require('express');
const app = express();
app.use(express.json());

// 1. Route with Route Parameter (:id)
app.get('/api/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.status(200).json(student);
});

// 2. Route with Query Parameters (?dept=CSE&sort=desc)
app.get('/api/students', (req, res) => {
  const { dept, sort } = req.query;
  // filter & sort logic...
  res.json({ filterDept: dept || 'ALL', count: 3 });
});</pre>
        </div>

        <div style="background: #fff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <h4 style="margin: 0 0 12px; color: #1e293b;">Interactive Route Simulator:</h4>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;">
            <button onclick="testRoute('GET', '/api/students/101')" style="padding: 6px 12px; font-size: 13px; background: #e0f2fe; color: #0369a1; border: 1px solid #bae6fd; border-radius: 6px; cursor: pointer;">GET /api/students/101</button>
            <button onclick="testRoute('GET', '/api/students/999')" style="padding: 6px 12px; font-size: 13px; background: #fef2f2; color: #991b1b; border: 1px solid #fecaca; border-radius: 6px; cursor: pointer;">GET /api/students/999 (404)</button>
            <button onclick="testRoute('GET', '/api/students?dept=CSE&sort=desc')" style="padding: 6px 12px; font-size: 13px; background: #f0fdf4; color: #166534; border: 1px solid #bbf7d0; border-radius: 6px; cursor: pointer;">GET /api/students?dept=CSE</button>
          </div>
          <div id="route_res" style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 13px; padding: 14px; border-radius: 6px; min-height: 100px;">
            // Result will appear here...
          </div>
        </div>
      </div>
      <script>
        function testRoute(method, url) {
          const out = document.getElementById('route_res');
          if (url === '/api/students/101') {
            out.innerHTML = '<span style="color: #4ade80;">200 OK</span>\\n' + JSON.stringify({ id: 101, name: 'K. Nishanth Reddy', dept: 'CSE', section: '06', gpa: 9.4 }, null, 2);
          } else if (url === '/api/students/999') {
            out.innerHTML = '<span style="color: #f87171;">404 Not Found</span>\\n' + JSON.stringify({ error: 'Student with ID 999 does not exist' }, null, 2);
          } else {
            out.innerHTML = '<span style="color: #4ade80;">200 OK</span>\\n' + JSON.stringify({ query: { dept: 'CSE', sort: 'desc' }, resultsCount: 1, data: [{ id: 101, name: 'K. Nishanth Reddy', dept: 'CSE' }] }, null, 2);
          }
        }
      </script>
    `
  },
  {
    id: "node-03",
    filename: "node-03-middleware-pipeline.html",
    title: "Middleware Architecture & Execution Pipeline",
    category: "Middleware",
    description: "Demonstrates request logging middleware, authentication check middleware, input validation, and global error-handling middleware.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <h4 style="margin: 0 0 10px; color: #38bdf8;">Middleware Execution Flow Visualization</h4>
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; padding: 14px; background: #1e293b; border-radius: 8px;">
            <div style="background: #334155; padding: 8px 12px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: bold;">Incoming HTTP Request</div>
            <span style="color: #38bdf8;">➔</span>
            <div style="background: #1e3a8a; color: #93c5fd; padding: 8px 12px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: bold;">1. Logger Middleware</div>
            <span style="color: #38bdf8;">➔</span>
            <div style="background: #14532d; color: #86efac; padding: 8px 12px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: bold;">2. Auth Validator</div>
            <span style="color: #38bdf8;">➔</span>
            <div style="background: #701a75; color: #f5d0fe; padding: 8px 12px; border-radius: 6px; text-align: center; font-size: 12px; font-weight: bold;">3. Route Controller</div>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <div style="display: flex; gap: 10px; margin-bottom: 12px;">
            <button onclick="runMiddlewareTest(true)" style="background: #16a34a; color: #fff; font-weight: bold; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">Pass Valid Auth Header</button>
            <button onclick="runMiddlewareTest(false)" style="background: #dc2626; color: #fff; font-weight: bold; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer;">Omit Auth Header (401)</button>
          </div>
          <div id="mid_log" style="background: #0f172a; color: #a7f3d0; font-family: monospace; font-size: 13px; padding: 14px; border-radius: 6px; min-height: 110px;">
            // Click a button above to run the Express middleware pipeline...
          </div>
        </div>
      </div>
      <script>
        function runMiddlewareTest(isAuth) {
          const log = document.getElementById('mid_log');
          if (isAuth) {
            log.innerHTML = 
              '<span style="color: #94a3b8;">[Middleware 1: Logger]</span> GET /api/admin/dashboard - IP 127.0.0.1\\n' +
              '<span style="color: #4ade80;">[Middleware 2: AuthCheck]</span> Bearer token verified (User: k. nishanth reddy)\\n' +
              '<span style="color: #38bdf8;">[Route Handler]</span> 200 OK: Dashboard access granted!';
          } else {
            log.innerHTML = 
              '<span style="color: #94a3b8;">[Middleware 1: Logger]</span> GET /api/admin/dashboard - IP 127.0.0.1\\n' +
              '<span style="color: #f87171;">[Middleware 2: AuthCheck]</span> 401 Unauthorized: Missing Authorization header! (next(err) invoked)\\n' +
              '<span style="color: #fb923c;">[Error Middleware]</span> { status: 401, error: "Access Denied. Please provide valid Bearer token." }';
          }
        }
      </script>
    `
  },
  {
    id: "node-04",
    filename: "node-04-jwt-auth.html",
    title: "Authentication & JWT Token Security",
    category: "Authentication & Authorization",
    description: "Demonstrates user login, password verification, JSON Web Token (JWT) generation (Header, Payload, Signature), and role authorization.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 10px; color: #1e293b;">1. User Login (POST /api/auth/login)</h4>
            <div style="margin-bottom: 10px;">
              <label style="font-size: 12px; color: #64748b; display: block; margin-bottom: 4px;">Username / Email</label>
              <input type="text" id="login_user" value="nishanth@university.edu" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            </div>
            <div style="margin-bottom: 12px;">
              <label style="font-size: 12px; color: #64748b; display: block; margin-bottom: 4px;">Password</label>
              <input type="password" id="login_pass" value="Admin@2026" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            </div>
            <button onclick="generateJwtToken()" style="background: #2563eb; color: #fff; font-weight: bold; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">Sign In & Generate JWT</button>
          </div>

          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 10px; color: #1e293b;">2. Test Protected Route</h4>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Sends <code>Authorization: Bearer &lt;token&gt;</code> to access protected endpoint.</p>
            <button onclick="verifyJwtProtected()" style="background: #059669; color: #fff; font-weight: bold; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer; width: 100%;">GET /api/protected/profile</button>
          </div>
        </div>

        <div id="jwt_result" style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 13px; padding: 14px; border-radius: 6px; min-height: 120px;">
          // Generated JWT details and verification will appear here...
        </div>
      </div>
      <script>
        let currentToken = null;
        function generateJwtToken() {
          const user = document.getElementById('login_user').value;
          currentToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9." + btoa(JSON.stringify({ sub: "250200439", name: "k. nishanth reddy", email: user, role: "ADMIN", exp: Date.now() + 3600000 })) + ".s4mpL3S1gn4tur3H4shV4l1d";
          
          document.getElementById('jwt_result').innerHTML = 
            '<span style="color: #4ade80;">✓ 200 OK: Authentication Successful</span>\\n\\n' +
            '<span style="color: #f59e0b;">JWT Token Generated:</span>\\n' + currentToken + '\\n\\n' +
            '<span style="color: #38bdf8;">Decoded Payload:</span>\\n' +
            JSON.stringify({ sub: "250200439", name: "k. nishanth reddy", role: "ADMIN", issuedAt: new Date().toISOString() }, null, 2);
        }

        function verifyJwtProtected() {
          const out = document.getElementById('jwt_result');
          if (!currentToken) {
            out.innerHTML = '<span style="color: #f87171;">401 Unauthorized</span>\\nNo active JWT token found. Please login first.';
            return;
          }
          out.innerHTML = '<span style="color: #4ade80;">✓ 200 OK: Protected Access Granted</span>\\n' +
            JSON.stringify({ message: "Welcome to confidential portal!", user: "k. nishanth reddy", regNo: "250200439", role: "ADMIN", accessLevel: "Full Read/Write" }, null, 2);
        }
      </script>
    `
  },
  {
    id: "node-05",
    filename: "node-05-rest-api-crud.html",
    title: "Student RESTful API & Postman Testbench",
    category: "RESTful API Development",
    description: "A complete RESTful API development environment with GET, POST, PUT, DELETE operations, HTTP status codes, and built-in interactive request tester.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 18px; margin-bottom: 16px;">
          <h4 style="margin: 0 0 12px; color: #1e293b;">REST API Client Tester (Postman-style)</h4>
          <div style="display: flex; gap: 10px; margin-bottom: 12px; flex-wrap: wrap;">
            <select id="api_method" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-weight: bold; background: #f8fafc; font-size: 13px;">
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
            <input type="text" id="api_url" value="/api/students" style="flex: 1; min-width: 240px; padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-family: monospace; font-size: 13px;">
            <button onclick="sendRestRequest()" style="background: #2563eb; color: #fff; font-weight: bold; border: none; padding: 8px 20px; border-radius: 6px; cursor: pointer;">Send Request 🚀</button>
          </div>
          <div id="req_body_wrap" style="display: none; margin-bottom: 10px;">
            <label style="font-size: 12px; color: #64748b; display: block; margin-bottom: 4px;">Request JSON Body:</label>
            <textarea id="api_body" style="width: 100%; height: 70px; font-family: monospace; font-size: 12px; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">{ "name": "Vikram Patel", "dept": "CSE", "gpa": 8.75 }</textarea>
          </div>
        </div>

        <div id="rest_resp" style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 13px; padding: 16px; border-radius: 8px; min-height: 140px;">
          // Response status and JSON output will display here...
        </div>
      </div>
      <script>
        document.getElementById('api_method').addEventListener('change', function() {
          const wrap = document.getElementById('req_body_wrap');
          wrap.style.display = (this.value === 'POST' || this.value === 'PUT') ? 'block' : 'none';
        });

        let apiDatabase = [
          { id: 101, name: "K. Nishanth Reddy", dept: "CSE", section: "06", gpa: 9.40 },
          { id: 102, name: "Aditi Sharma", dept: "IT", section: "06", gpa: 8.90 }
        ];

        function sendRestRequest() {
          const method = document.getElementById('api_method').value;
          const url = document.getElementById('api_url').value;
          const out = document.getElementById('rest_resp');

          if (method === 'GET') {
            out.innerHTML = '<span style="color: #4ade80;">200 OK</span> • Time: 12ms\\n' + JSON.stringify(apiDatabase, null, 2);
          } else if (method === 'POST') {
            try {
              const body = JSON.parse(document.getElementById('api_body').value);
              body.id = 100 + apiDatabase.length + 1;
              apiDatabase.push(body);
              out.innerHTML = '<span style="color: #4ade80;">201 Created</span> • Location: /api/students/' + body.id + '\\n' + JSON.stringify(body, null, 2);
            } catch(e) {
              out.innerHTML = '<span style="color: #f87171;">400 Bad Request</span>: Invalid JSON format';
            }
          } else if (method === 'DELETE') {
            out.innerHTML = '<span style="color: #4ade80;">200 OK</span> • Record deleted successfully\\n' + JSON.stringify({ message: "Student record removed", affectedRows: 1 }, null, 2);
          } else {
            out.innerHTML = '<span style="color: #4ade80;">200 OK</span> • Record updated\\n' + JSON.stringify({ message: "Student record updated", status: "success" }, null, 2);
          }
        }
      </script>
    `
  }
];
