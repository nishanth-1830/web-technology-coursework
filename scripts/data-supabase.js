export const supabasePrograms = [
  {
    id: "supa-01",
    filename: "supabase-01-database-tables.html",
    title: "Supabase Table Editor & PostgreSQL Schema",
    category: "Supabase Fundamentals",
    description: "Demonstrates Supabase project structure, Table Editor UI, defining PostgreSQL tables, data types (UUID, TEXT, TIMESTAMPTZ), primary keys, and foreign key relations.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #1e293b; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: #3ecf8e; font-size: 18px; font-weight: bold;">⚡ Supabase</span>
              <span style="font-size: 13px; color: #94a3b8;">/ Table Editor / <strong>students</strong></span>
            </div>
            <button onclick="insertSupaRecord()" style="background: #3ecf8e; color: #064e3b; border: none; font-weight: bold; padding: 6px 14px; border-radius: 6px; cursor: pointer;">+ Insert Row</button>
          </div>
          <p style="color: #94a3b8; font-size: 13px; margin: 0;">PostgreSQL Table with primary key <code>id (uuid)</code>, foreign key references, and real-time schema replication.</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; overflow-x: auto; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
          <table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">
            <thead>
              <tr style="background: #f8fafc; color: #334155; border-bottom: 2px solid #e2e8f0;">
                <th style="padding: 10px; text-align: left;">id (uuid)</th>
                <th style="padding: 10px; text-align: left;">student_name (text)</th>
                <th style="padding: 10px; text-align: left;">reg_no (varchar)</th>
                <th style="padding: 10px; text-align: left;">department (text)</th>
                <th style="padding: 10px; text-align: left;">created_at (timestamptz)</th>
              </tr>
            </thead>
            <tbody id="supa_table_body">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">a1b2c3d4-e5f6-7890-abcd-1234567890ab</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">K. Nishanth Reddy</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">250200439</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #3ecf8e; font-weight: bold;">Computer Science (Sec 06)</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">2026-09-21 06:10:00+00</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">b2c3d4e5-f6a7-8901-bcde-2345678901bc</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Aditi Sharma</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">250200440</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #3ecf8e; font-weight: bold;">Information Technology</td>
                <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">2026-09-21 06:12:30+00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <script>
        function insertSupaRecord() {
          const name = prompt("Enter Student Name:", "Rahul Verma");
          if (!name) return;
          const reg = prompt("Enter Register Number:", "250200441");
          const tbody = document.getElementById('supa_table_body');
          const tr = document.createElement('tr');
          const uuid = 'c3d4e5f6-' + Math.random().toString(36).substring(2, 6) + '-4901-bcde-' + Date.now().toString(16);
          tr.innerHTML = 
            '<td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">' + uuid + '</td>' +
            '<td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">' + name + '</td>' +
            '<td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">' + (reg || '250200441') + '</td>' +
            '<td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #3ecf8e; font-weight: bold;">Computer Science</td>' +
            '<td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #64748b;">' + new Date().toISOString() + '</td>';
          tbody.appendChild(tr);
        }
      </script>
    `
  },
  {
    id: "supa-02",
    filename: "supabase-02-crud-client.html",
    title: "Supabase JS Client CRUD Operations",
    category: "Supabase CRUD",
    description: "Demonstrates querying, inserting, updating, and deleting records using @supabase/supabase-js client methods (select, insert, update, delete, eq, order).",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="color: #3ecf8e; font-family: monospace; font-size: 14px;">supabaseClient.js</span>
            <div style="display: flex; gap: 8px;">
              <button onclick="runSupaCode('select')" style="background: #3ecf8e; color: #064e3b; border: none; padding: 4px 10px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">.select()</button>
              <button onclick="runSupaCode('insert')" style="background: #38bdf8; color: #082f49; border: none; padding: 4px 10px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">.insert()</button>
              <button onclick="runSupaCode('update')" style="background: #f59e0b; color: #451a03; border: none; padding: 4px 10px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">.update()</button>
              <button onclick="runSupaCode('delete')" style="background: #ef4444; color: #fff; border: none; padding: 4px 10px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">.delete()</button>
            </div>
          </div>
          <pre id="supa_code_view" style="background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 13px; margin: 0; overflow-x: auto;">
// 1. Read records with filtering and sorting
const { data, error } = await supabase
  .from('students')
  .select('id, name, department, gpa')
  .gte('gpa', 8.5)
  .order('gpa', { ascending: false });</pre>
        </div>

        <div id="supa_out" style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; font-family: monospace; font-size: 13px; color: #0f172a; min-height: 120px;">
          // Click any Supabase client action button above to view execution & response data...
        </div>
      </div>
      <script>
        function runSupaCode(action) {
          const view = document.getElementById('supa_code_view');
          const out = document.getElementById('supa_out');
          if (action === 'select') {
            view.textContent = "const { data, error } = await supabase\\n  .from('students')\\n  .select('*')\\n  .order('gpa', { ascending: false });";
            out.innerHTML = '<span style="color: #16a34a; font-weight: bold;">{ status: 200, count: 2, error: null }</span>\\n' +
              JSON.stringify([
                { id: "101", name: "K. Nishanth Reddy", dept: "CSE", gpa: 9.40 },
                { id: "102", name: "Aditi Sharma", dept: "IT", gpa: 8.90 }
              ], null, 2);
          } else if (action === 'insert') {
            view.textContent = "const { data, error } = await supabase\\n  .from('students')\\n  .insert([{ name: 'Vikram Patel', dept: 'CSE', gpa: 8.85 }]);";
            out.innerHTML = '<span style="color: #16a34a; font-weight: bold;">{ status: 201 Created, error: null }</span>\\n' +
              JSON.stringify([{ id: "103", name: "Vikram Patel", dept: "CSE", gpa: 8.85, created_at: new Date().toISOString() }], null, 2);
          } else if (action === 'update') {
            view.textContent = "const { data, error } = await supabase\\n  .from('students')\\n  .update({ gpa: 9.50 })\\n  .eq('id', '101');";
            out.innerHTML = '<span style="color: #16a34a; font-weight: bold;">{ status: 200 OK, affected: 1 }</span>\\n' +
              JSON.stringify({ message: "Student GPA updated to 9.50", id: "101" }, null, 2);
          } else {
            view.textContent = "const { error } = await supabase\\n  .from('students')\\n  .delete()\\n  .eq('id', '103');";
            out.innerHTML = '<span style="color: #16a34a; font-weight: bold;">{ status: 204 No Content, error: null }</span>\\nRecord id 103 removed from database.';
          }
        }
      </script>
    `
  },
  {
    id: "supa-03",
    filename: "supabase-03-auth-rls.html",
    title: "Supabase Authentication & Row Level Security (RLS)",
    category: "Authentication & Security",
    description: "Implements Supabase Auth (Sign Up, Sign In, JWT Session) and tests PostgreSQL Row Level Security (RLS) policies.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 10px; color: #1e293b;">1. Supabase Auth Session</h4>
            <div style="margin-bottom: 8px;">
              <input type="email" id="supa_email" value="nishanth@university.edu" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            </div>
            <div style="margin-bottom: 10px;">
              <input type="password" id="supa_pw" value="Password@2026" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            </div>
            <div style="display: flex; gap: 8px;">
              <button onclick="simulateSupaAuth('signin')" style="flex: 1; background: #3ecf8e; color: #064e3b; font-weight: bold; border: none; padding: 8px; border-radius: 6px; cursor: pointer;">Sign In</button>
              <button onclick="simulateSupaAuth('signout')" style="background: #f1f5f9; color: #475569; border: 1px solid #cbd5e1; padding: 8px 12px; border-radius: 6px; cursor: pointer;">Sign Out</button>
            </div>
          </div>

          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 8px; color: #1e293b;">2. Test RLS Policy</h4>
            <div style="background: #f8fafc; border-left: 3px solid #3ecf8e; padding: 8px; font-family: monospace; font-size: 11px; margin-bottom: 10px; color: #334155;">
              CREATE POLICY "Users can only view their own profile"<br>
              ON profiles FOR SELECT<br>
              USING (auth.uid() = user_id);
            </div>
            <button onclick="testRlsAccess()" style="background: #2563eb; color: #fff; font-weight: bold; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; width: 100%;">Execute Query as Authenticated User</button>
          </div>
        </div>

        <div id="supa_auth_log" style="background: #0f172a; color: #38bdf8; font-family: monospace; font-size: 13px; padding: 16px; border-radius: 8px; min-height: 120px;">
          // Supabase Auth state and RLS query results will appear here...
        </div>
      </div>
      <script>
        let supaUser = null;
        function simulateSupaAuth(type) {
          const log = document.getElementById('supa_auth_log');
          if (type === 'signin') {
            supaUser = { id: "usr_9981a", email: document.getElementById('supa_email').value, role: "authenticated", studentName: "K. Nishanth Reddy", regNo: "250200439" };
            log.innerHTML = '<span style="color: #3ecf8e; font-weight: bold;">✓ supabase.auth.signInWithPassword() SUCCESS</span>\\n' +
              JSON.stringify({ user: supaUser, session: { access_token: "eyJhbGciOi...supa_jwt", expires_in: 3600 } }, null, 2);
          } else {
            supaUser = null;
            log.innerHTML = '<span style="color: #94a3b8;">User signed out. Session cleared. Role is now: "anon"</span>';
          }
        }

        function testRlsAccess() {
          const log = document.getElementById('supa_auth_log');
          if (!supaUser) {
            log.innerHTML = '<span style="color: #f87171;">403 Forbidden (RLS Blocked)</span>\\n' +
              'Query: SELECT * FROM profiles;\\nResult: [] (0 rows returned because user is not authenticated and RLS policy requires auth.uid() == user_id)';
          } else {
            log.innerHTML = '<span style="color: #3ecf8e; font-weight: bold;">✓ 200 OK (RLS Allowed 1 row matching auth.uid())</span>\\n' +
              JSON.stringify([{ user_id: supaUser.id, full_name: supaUser.studentName, email: supaUser.email, registered_at: "2024-08-01" }], null, 2);
          }
        }
      </script>
    `
  },
  {
    id: "supa-04",
    filename: "supabase-04-storage-realtime.html",
    title: "Supabase Storage Buckets & Realtime Events",
    category: "Storage & Realtime",
    description: "Demonstrates uploading files to Supabase Storage, generating CDN public URLs, and subscribing to PostgreSQL Realtime database change events (INSERT, UPDATE, DELETE).",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <!-- Storage -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 10px; color: #1e293b;">📦 Supabase Storage Upload</h4>
            <input type="file" id="supa_file" style="margin-bottom: 10px; font-size: 13px;">
            <button onclick="simulateStorageUpload()" style="background: #0284c7; color: #fff; font-weight: bold; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; width: 100%;">Upload to 'documents' Bucket</button>
          </div>

          <!-- Realtime -->
          <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
            <h4 style="margin: 0 0 10px; color: #1e293b;">⚡ Postgres Realtime Listener</h4>
            <p style="font-size: 12px; color: #64748b; margin-bottom: 10px;">Listens to <code>supabase.channel('public:students').on('postgres_changes')</code></p>
            <button onclick="broadcastRealtimeEvent()" style="background: #3ecf8e; color: #064e3b; font-weight: bold; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; width: 100%;">Trigger Simulated INSERT Event</button>
          </div>
        </div>

        <div id="supa_stream" style="background: #0f172a; color: #a7f3d0; font-family: monospace; font-size: 13px; padding: 16px; border-radius: 8px; min-height: 120px;">
          // Realtime stream logs and storage public URLs will display here...
        </div>
      </div>
      <script>
        function simulateStorageUpload() {
          const out = document.getElementById('supa_stream');
          const url = "https://your-project.supabase.co/storage/v1/object/public/documents/assignment-01-webtech.pdf";
          out.innerHTML = '<span style="color: #38bdf8; font-weight: bold;">✓ supabase.storage.from("documents").upload() Successful</span>\\n' +
            'Public CDN URL: ' + url + '\\n' +
            JSON.stringify({ Key: "documents/assignment-01-webtech.pdf", size: "2.4 MB", mimeType: "application/pdf" }, null, 2);
        }

        function broadcastRealtimeEvent() {
          const out = document.getElementById('supa_stream');
          out.innerHTML = '<span style="color: #3ecf8e; font-weight: bold;">⚡ [REALTIME BROADCAST RECEIVED]</span>\\n' +
            JSON.stringify({
              event: "INSERT",
              table: "students",
              schema: "public",
              new: { id: 105, name: "Sneha Reddy", department: "Computer Science", gpa: 9.60 },
              commit_timestamp: new Date().toISOString()
            }, null, 2);
        }
      </script>
    `
  },
  {
    id: "supa-05",
    filename: "supabase-05-student-system.html",
    title: "Complete Supabase Student Management System",
    category: "Project-Based Experiments",
    description: "A complete end-to-end Student Management System integrating Supabase Table operations, Auth role verification, and live record management.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <h3 style="margin: 0; font-size: 16px; color: #1e293b;">Supabase Student Registry</h3>
            <span style="background: #ecfdf5; color: #065f46; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 12px; border: 1px solid #a7f3d0;">
              ● Realtime Connected
            </span>
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <input type="text" id="sys_name" placeholder="Student Name" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; flex: 1; min-width: 150px;">
            <input type="text" id="sys_dept" placeholder="Dept (e.g. CSE)" value="CSE - Sec 06" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; width: 140px;">
            <input type="number" step="0.1" id="sys_gpa" placeholder="GPA" value="9.4" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; width: 80px;">
            <button onclick="supaAddStudent()" style="background: #3ecf8e; color: #064e3b; font-weight: bold; border: none; padding: 8px 16px; border-radius: 6px; cursor: pointer;">Save via Supabase</button>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <h4 style="margin: 0 0 10px; color: #334155;">Active Student Records in Supabase Cloud DB:</h4>
          <div id="supa_list" style="display: flex; flex-direction: column; gap: 8px;">
          </div>
        </div>
      </div>
      <script>
        let supaData = [
          { id: 101, name: "K. Nishanth Reddy", dept: "CSE - Sec 06", gpa: 9.40, regNo: "250200439" },
          { id: 102, name: "Aditi Sharma", dept: "IT - Sec 06", gpa: 8.90, regNo: "250200440" }
        ];

        function renderSupaList() {
          const wrap = document.getElementById('supa_list');
          wrap.innerHTML = '';
          supaData.forEach((s, idx) => {
            const row = document.createElement('div');
            row.style = 'display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 13px;';
            row.innerHTML = 
              '<div><strong>' + s.name + '</strong> <span style="color: #64748b; font-size: 12px;">(' + (s.regNo || 'REG-'+s.id) + ')</span> • ' +
              '<span style="color: #2563eb;">' + s.dept + '</span></div>' +
              '<div style="display: flex; align-items: center; gap: 10px;">' +
                '<span style="background: #dcfce7; color: #166534; font-weight: bold; padding: 2px 8px; border-radius: 4px;">GPA ' + Number(s.gpa).toFixed(2) + '</span>' +
                '<button onclick="deleteSupaStudent(' + idx + ')" style="background: #ef4444; color: #fff; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">Delete</button>' +
              '</div>';
            wrap.appendChild(row);
          });
        }

        function supaAddStudent() {
          const name = document.getElementById('sys_name').value.trim();
          const dept = document.getElementById('sys_dept').value.trim();
          const gpa = parseFloat(document.getElementById('sys_gpa').value);
          if (!name || isNaN(gpa)) return alert('Please enter name and valid GPA');
          supaData.push({ id: 100 + supaData.length + 1, name, dept, gpa, regNo: 'REG-' + Date.now().toString().slice(-5) });
          document.getElementById('sys_name').value = '';
          renderSupaList();
        }

        function deleteSupaStudent(idx) {
          supaData.splice(idx, 1);
          renderSupaList();
        }

        renderSupaList();
      </script>
    `
  }
];
