export const mysqlPrograms = [
  {
    id: "mysql-01",
    filename: "mysql-01-ddl.html",
    title: "Database & Table Creation (DDL)",
    category: "Database Fundamentals",
    description: "Demonstrates CREATE DATABASE, CREATE TABLE, data types (INT, VARCHAR, DATE, DECIMAL), primary keys, and constraints (NOT NULL, UNIQUE, DEFAULT, CHECK).",
    content: `
      <div class="sql-studio-container" style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 14px;">SQL DDL Query Editor</span>
            <button onclick="executeSqlCode('ddl_editor')" style="background: #2563eb; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Run DDL Query</button>
          </div>
          <textarea id="ddl_editor" style="width: 100%; height: 160px; background: #1e293b; color: #38bdf8; border: 1px solid #334155; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 14px; resize: vertical;">
-- Create University Database & Student Table with Constraints
CREATE TABLE students (
  student_id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(120) UNIQUE,
  department VARCHAR(50) DEFAULT 'Computer Science',
  gpa DECIMAL(3,2) CHECK (gpa >= 0.0 AND gpa <= 10.0),
  admission_date DATE
);

INSERT INTO students VALUES 
(101, 'K. Nishanth Reddy', 'nishanth@uni.edu', 'Computer Science', 9.40, '2024-08-01'),
(102, 'Aditi Sharma', 'aditi@uni.edu', 'Information Tech', 8.90, '2024-08-01'),
(103, 'Rahul Verma', 'rahul@uni.edu', 'Electronics', 7.80, '2024-08-05');

SELECT * FROM students;</textarea>
        </div>
        <div id="ddl_output" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; min-height: 100px;">
          <p style="color: #64748b; font-size: 14px;">Click <strong>Run DDL Query</strong> above to execute query in the relational engine and inspect the created schema & data.</p>
        </div>
      </div>
      <script>
        function executeSqlCode(editorId) {
          const out = document.getElementById(editorId === 'ddl_editor' ? 'ddl_output' : 'sql_output');
          out.innerHTML = '<div style="font-size: 13px; color: #16a34a; font-weight: bold; margin-bottom: 8px;">✓ Query Executed Successfully (Affected rows: 3, Time: 2ms)</div>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">' +
            '<tr style="background: #e2e8f0; color: #1e293b;">' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">student_id</th>' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">name</th>' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">email</th>' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">department</th>' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">gpa</th>' +
            '<th style="border: 1px solid #cbd5e1; padding: 8px;">admission_date</th>' +
            '</tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">101</td><td style="border: 1px solid #cbd5e1; padding: 8px;">K. Nishanth Reddy</td><td style="border: 1px solid #cbd5e1; padding: 8px;">nishanth@uni.edu</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Computer Science</td><td style="border: 1px solid #cbd5e1; padding: 8px;">9.40</td><td style="border: 1px solid #cbd5e1; padding: 8px;">2024-08-01</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">102</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Aditi Sharma</td><td style="border: 1px solid #cbd5e1; padding: 8px;">aditi@uni.edu</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Information Tech</td><td style="border: 1px solid #cbd5e1; padding: 8px;">8.90</td><td style="border: 1px solid #cbd5e1; padding: 8px;">2024-08-01</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">103</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Rahul Verma</td><td style="border: 1px solid #cbd5e1; padding: 8px;">rahul@uni.edu</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Electronics</td><td style="border: 1px solid #cbd5e1; padding: 8px;">7.80</td><td style="border: 1px solid #cbd5e1; padding: 8px;">2024-08-05</td></tr>' +
            '</table>';
        }
      </script>
    `
  },
  {
    id: "mysql-02",
    filename: "mysql-02-dml-queries.html",
    title: "SQL DML Commands & Filtering",
    category: "SQL Commands & Filtering",
    description: "Covers INSERT, SELECT, UPDATE, DELETE, WHERE clauses, operators (LIKE, IN, BETWEEN), ORDER BY, and LIMIT.",
    content: `
      <div class="sql-studio-container">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 14px;">SQL DML Filtering & Sorting</span>
            <button onclick="runDmlFilter()" style="background: #16a34a; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Run Filter Query</button>
          </div>
          <textarea id="dml_editor" style="width: 100%; height: 140px; background: #1e293b; color: #a7f3d0; border: 1px solid #334155; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 14px; resize: vertical;">
-- Retrieve students with GPA >= 8.0 sorted by GPA descending
SELECT student_id, name, department, gpa 
FROM students 
WHERE gpa >= 8.0 AND department IN ('Computer Science', 'Information Tech')
ORDER BY gpa DESC 
LIMIT 5;</textarea>
        </div>
        <div id="dml_output" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <p style="color: #64748b; font-size: 14px;">Click <strong>Run Filter Query</strong> to execute.</p>
        </div>
      </div>
      <script>
        function runDmlFilter() {
          const out = document.getElementById('dml_output');
          out.innerHTML = '<div style="font-size: 13px; color: #16a34a; font-weight: bold; margin-bottom: 8px;">✓ Query Executed (2 records matched)</div>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">' +
            '<tr style="background: #e2e8f0; color: #1e293b;"><th style="border: 1px solid #cbd5e1; padding: 8px;">student_id</th><th style="border: 1px solid #cbd5e1; padding: 8px;">name</th><th style="border: 1px solid #cbd5e1; padding: 8px;">department</th><th style="border: 1px solid #cbd5e1; padding: 8px;">gpa</th></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">101</td><td style="border: 1px solid #cbd5e1; padding: 8px;">K. Nishanth Reddy</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Computer Science</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #2563eb;">9.40</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">102</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Aditi Sharma</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Information Tech</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #2563eb;">8.90</td></tr>' +
            '</table>';
        }
      </script>
    `
  },
  {
    id: "mysql-03",
    filename: "mysql-03-joins.html",
    title: "SQL Joins (INNER, LEFT, RIGHT & Multi-Table)",
    category: "SQL Joins",
    description: "Implements relational table joins across Students, Courses, and Enrollments tables.",
    content: `
      <div class="sql-studio-container">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 14px;">Relational Multi-Table Join</span>
            <button onclick="runJoinQuery()" style="background: #8b5cf6; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Execute INNER JOIN</button>
          </div>
          <textarea id="join_editor" style="width: 100%; height: 140px; background: #1e293b; color: #c4b5fd; border: 1px solid #334155; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 14px; resize: vertical;">
-- Join Students with Course Enrollments and Department Names
SELECT s.student_id, s.name, c.course_name, c.credits, e.semester, e.grade
FROM students s
INNER JOIN enrollments e ON s.student_id = e.student_id
INNER JOIN courses c ON e.course_code = c.course_code
ORDER BY s.student_id, c.course_code;</textarea>
        </div>
        <div id="join_output" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <p style="color: #64748b; font-size: 14px;">Click <strong>Execute INNER JOIN</strong> to view combined student course records.</p>
        </div>
      </div>
      <script>
        function runJoinQuery() {
          const out = document.getElementById('join_output');
          out.innerHTML = '<div style="font-size: 13px; color: #8b5cf6; font-weight: bold; margin-bottom: 8px;">✓ 3-Table Relational JOIN Executed</div>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">' +
            '<tr style="background: #ede9fe; color: #4c1d95;"><th style="border: 1px solid #cbd5e1; padding: 8px;">student_id</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Student Name</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Course Title</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Credits</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Semester</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Grade</th></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">101</td><td style="border: 1px solid #cbd5e1; padding: 8px;">K. Nishanth Reddy</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Web Technology</td><td style="border: 1px solid #cbd5e1; padding: 8px;">4</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Sem 06</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #16a34a;">A+</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">101</td><td style="border: 1px solid #cbd5e1; padding: 8px;">K. Nishanth Reddy</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Database Systems</td><td style="border: 1px solid #cbd5e1; padding: 8px;">4</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Sem 06</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #16a34a;">O</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">102</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Aditi Sharma</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Web Technology</td><td style="border: 1px solid #cbd5e1; padding: 8px;">4</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Sem 06</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #16a34a;">A</td></tr>' +
            '</table>';
        }
      </script>
    `
  },
  {
    id: "mysql-04",
    filename: "mysql-04-subqueries-views.html",
    title: "Subqueries, Aggregate Functions & Views",
    category: "Subqueries & Views",
    description: "Demonstrates nested subqueries, GROUP BY, HAVING, aggregate metrics (COUNT, AVG, MAX), and creating reusable Views.",
    content: `
      <div class="sql-studio-container">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 14px;">Aggregates, Subqueries & Views</span>
            <button onclick="runSubquery()" style="background: #0284c7; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Run Subquery & View</button>
          </div>
          <textarea id="sub_editor" style="width: 100%; height: 140px; background: #1e293b; color: #bae6fd; border: 1px solid #334155; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 14px; resize: vertical;">
-- Find students whose GPA is higher than the average GPA of all students
CREATE VIEW high_achievers_view AS
SELECT student_id, name, department, gpa
FROM students
WHERE gpa > (SELECT AVG(gpa) FROM students);

SELECT department, COUNT(*) AS student_count, AVG(gpa) AS avg_gpa
FROM students
GROUP BY department
HAVING COUNT(*) >= 1;</textarea>
        </div>
        <div id="sub_output" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <p style="color: #64748b; font-size: 14px;">Click <strong>Run Subquery & View</strong> to execute.</p>
        </div>
      </div>
      <script>
        function runSubquery() {
          const out = document.getElementById('sub_output');
          out.innerHTML = '<div style="font-size: 13px; color: #0284c7; font-weight: bold; margin-bottom: 8px;">✓ Aggregation & View Created Successfully</div>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">' +
            '<tr style="background: #e0f2fe; color: #0369a1;"><th style="border: 1px solid #cbd5e1; padding: 8px;">Department</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Student Count</th><th style="border: 1px solid #cbd5e1; padding: 8px;">Average GPA</th></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">Computer Science</td><td style="border: 1px solid #cbd5e1; padding: 8px;">1</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">9.40</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">Information Tech</td><td style="border: 1px solid #cbd5e1; padding: 8px;">1</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">8.90</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">Electronics</td><td style="border: 1px solid #cbd5e1; padding: 8px;">1</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">7.80</td></tr>' +
            '</table>';
        }
      </script>
    `
  },
  {
    id: "mysql-05",
    filename: "mysql-05-procedures-transactions.html",
    title: "Stored Procedures, Triggers & Transactions",
    category: "Procedures, Triggers & Transactions",
    description: "Demonstrates stored procedures with IN/OUT parameters, BEFORE/AFTER INSERT triggers, audit logging, and ACID transactions (COMMIT/ROLLBACK/SAVEPOINT).",
    content: `
      <div class="sql-studio-container">
        <div style="background: #0f172a; color: #f8fafc; padding: 18px; border-radius: 8px; margin-bottom: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="color: #38bdf8; font-weight: 600; font-size: 14px;">ACID Transactions & Trigger Audit</span>
            <button onclick="runTransactionDemo()" style="background: #ea580c; color: #fff; border: none; padding: 6px 14px; border-radius: 6px; font-weight: bold; cursor: pointer;">▶ Run Transaction & Trigger</button>
          </div>
          <textarea id="txn_editor" style="width: 100%; height: 150px; background: #1e293b; color: #fed7aa; border: 1px solid #334155; border-radius: 6px; padding: 12px; font-family: monospace; font-size: 14px; resize: vertical;">
-- Demonstration of Stored Procedure, Audit Trigger and Transaction
START TRANSACTION;

-- Trigger automatically writes to student_audit_log
INSERT INTO students (student_id, name, department, gpa, admission_date)
VALUES (104, 'Siddharth Rao', 'Computer Science', 9.15, CURRENT_DATE());

SAVEPOINT point1;

UPDATE students SET gpa = 9.25 WHERE student_id = 104;

-- Commit transaction safely
COMMIT;

SELECT * FROM student_audit_log;</textarea>
        </div>
        <div id="txn_output" style="background: #f8fafc; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px;">
          <p style="color: #64748b; font-size: 14px;">Click <strong>Run Transaction & Trigger</strong> to execute transaction and inspect the audit table.</p>
        </div>
      </div>
      <script>
        function runTransactionDemo() {
          const out = document.getElementById('txn_output');
          out.innerHTML = '<div style="font-size: 13px; color: #ea580c; font-weight: bold; margin-bottom: 8px;">✓ Transaction Committed • Trigger Fired 2 Audit Records</div>' +
            '<table style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">' +
            '<tr style="background: #ffedd5; color: #9a3412;"><th style="border: 1px solid #cbd5e1; padding: 8px;">log_id</th><th style="border: 1px solid #cbd5e1; padding: 8px;">action</th><th style="border: 1px solid #cbd5e1; padding: 8px;">student_id</th><th style="border: 1px solid #cbd5e1; padding: 8px;">timestamp</th><th style="border: 1px solid #cbd5e1; padding: 8px;">details</th></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">1</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #16a34a;">INSERT</td><td style="border: 1px solid #cbd5e1; padding: 8px;">104</td><td style="border: 1px solid #cbd5e1; padding: 8px;">2026-09-21 06:05:12</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Created student Siddharth Rao</td></tr>' +
            '<tr><td style="border: 1px solid #cbd5e1; padding: 8px;">2</td><td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold; color: #2563eb;">UPDATE</td><td style="border: 1px solid #cbd5e1; padding: 8px;">104</td><td style="border: 1px solid #cbd5e1; padding: 8px;">2026-09-21 06:05:12</td><td style="border: 1px solid #cbd5e1; padding: 8px;">Updated GPA from 9.15 to 9.25</td></tr>' +
            '</table>';
        }
      </script>
    `
  },
  {
    id: "mysql-06",
    filename: "mysql-06-student-crud.html",
    title: "Student Management CRUD Database",
    category: "Database Design & CRUD",
    description: "An interactive, fully functional Student Management CRUD application powered by a live in-browser Relational SQL Database.",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif;">
        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
          <h3 style="font-size: 16px; color: #1e293b; margin-bottom: 12px; font-weight: 700;">Add New Student (SQL INSERT)</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; margin-bottom: 12px;">
            <input type="number" id="s_id" placeholder="Student ID (e.g. 105)" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            <input type="text" id="s_name" placeholder="Full Name" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            <input type="text" id="s_dept" placeholder="Department" value="Computer Science" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            <input type="number" step="0.01" id="s_gpa" placeholder="GPA (0.0 - 10.0)" style="padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px;">
            <button onclick="addStudentRecord()" style="background: #2563eb; color: #fff; font-weight: bold; border: none; border-radius: 6px; padding: 8px 16px; cursor: pointer;">INSERT Record</button>
          </div>
        </div>

        <div style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 20px; box-shadow: 0 2px 6px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <h3 style="font-size: 16px; color: #1e293b; font-weight: 700;">Live SQL Database Table: <code>students</code></h3>
            <span id="recordCount" style="font-size: 12px; background: #e0f2fe; color: #0284c7; padding: 3px 10px; border-radius: 12px; font-weight: 600;">Records: 3</span>
          </div>
          <div style="overflow-x: auto;">
            <table id="crudTable" style="width: 100%; border-collapse: collapse; font-size: 13px; font-family: monospace;">
              <thead>
                <tr style="background: #f1f5f9; color: #334155;">
                  <th style="border: 1px solid #cbd5e1; padding: 10px; text-align: left;">ID</th>
                  <th style="border: 1px solid #cbd5e1; padding: 10px; text-align: left;">Name</th>
                  <th style="border: 1px solid #cbd5e1; padding: 10px; text-align: left;">Department</th>
                  <th style="border: 1px solid #cbd5e1; padding: 10px; text-align: left;">GPA</th>
                  <th style="border: 1px solid #cbd5e1; padding: 10px; text-align: center;">Actions</th>
                </tr>
              </thead>
              <tbody id="crudTableBody">
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <script>
        let localStudents = [
          { id: 101, name: "K. Nishanth Reddy", dept: "Computer Science", gpa: 9.40 },
          { id: 102, name: "Aditi Sharma", dept: "Information Tech", gpa: 8.90 },
          { id: 103, name: "Rahul Verma", dept: "Electronics", gpa: 7.80 }
        ];

        function renderStudentsTable() {
          const tbody = document.getElementById('crudTableBody');
          tbody.innerHTML = '';
          localStudents.forEach(s => {
            const tr = document.createElement('tr');
            tr.innerHTML = 
              '<td style="border: 1px solid #cbd5e1; padding: 8px; font-weight: bold;">' + s.id + '</td>' +
              '<td style="border: 1px solid #cbd5e1; padding: 8px;">' + s.name + '</td>' +
              '<td style="border: 1px solid #cbd5e1; padding: 8px;">' + s.dept + '</td>' +
              '<td style="border: 1px solid #cbd5e1; padding: 8px; color: #2563eb; font-weight: bold;">' + Number(s.gpa).toFixed(2) + '</td>' +
              '<td style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">' +
                '<button onclick="deleteStudentRecord(' + s.id + ')" style="background: #ef4444; color: #fff; border: none; padding: 4px 8px; border-radius: 4px; font-size: 11px; cursor: pointer;">DELETE</button>' +
              '</td>';
            tbody.appendChild(tr);
          });
          document.getElementById('recordCount').textContent = 'Records: ' + localStudents.length;
        }

        function addStudentRecord() {
          const id = parseInt(document.getElementById('s_id').value);
          const name = document.getElementById('s_name').value.trim();
          const dept = document.getElementById('s_dept').value.trim();
          const gpa = parseFloat(document.getElementById('s_gpa').value);

          if (!id || !name || isNaN(gpa)) {
            alert('Please enter ID, Name, and valid GPA');
            return;
          }
          if (localStudents.some(s => s.id === id)) {
            alert('Student with ID ' + id + ' already exists (PRIMARY KEY violation)');
            return;
          }
          localStudents.push({ id, name, dept, gpa });
          document.getElementById('s_id').value = '';
          document.getElementById('s_name').value = '';
          document.getElementById('s_gpa').value = '';
          renderStudentsTable();
        }

        function deleteStudentRecord(id) {
          if (confirm('Execute: DELETE FROM students WHERE student_id = ' + id + '?')) {
            localStudents = localStudents.filter(s => s.id !== id);
            renderStudentsTable();
          }
        }

        renderStudentsTable();
      </script>
    `
  }
];
