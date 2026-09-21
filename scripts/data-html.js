export const htmlPrograms = [
  {
    id: "html-01",
    filename: "html-01.html",
    title: "Headings, Paragraphs & Line Breaks",
    description: "Demonstrates standard HTML heading hierarchy from h1 to h6, structured text paragraphs, and line breaks (<br>).",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h1 style="color: #1e293b; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">Heading 1 - Web Technology Practical</h1>
        <p style="color: #475569; margin: 12px 0;">This experiment illustrates the hierarchical structure of HTML document headings and paragraph formatting.</p>
        
        <h2 style="color: #334155;">Heading 2 - Department of Computer Science</h2>
        <p style="color: #475569; margin: 12px 0;">Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.<br>Line break applied here: Now continuing on the next line without starting a new paragraph.</p>
        
        <h3 style="color: #475569;">Heading 3 - Section 06 Experiments</h3>
        <p style="color: #475569; margin: 12px 0;">Paragraphs allow logical division of content, ensuring readability and accessibility across devices.</p>
        
        <h4 style="color: #64748b;">Heading 4 - Minor Subsection</h4>
        <h5 style="color: #64748b;">Heading 5 - Sub-minor Heading</h5>
        <h6 style="color: #94a3b8;">Heading 6 - Smallest Heading Level</h6>
        
        <hr style="margin: 20px 0; border: 0; border-top: 1px solid #e2e8f0;">
        <div style="background: #f8fafc; padding: 12px; border-left: 4px solid #3b82f6; border-radius: 4px;">
          <strong>HTML Elements Used:</strong> <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;br&gt;</code>, <code>&lt;hr&gt;</code>.
        </div>
      </div>
    `
  },
  {
    id: "html-02",
    filename: "html-02.html",
    title: "Ordered, Unordered & Description Lists",
    description: "Demonstrates HTML list elements including ordered (<ol>), unordered (<ul>), nested lists, and description lists (<dl>, <dt>, <dd>).",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">HTML List Demonstrations</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <h3 style="color: #2563eb; margin-bottom: 10px; font-size: 16px;">1. Unordered List (&lt;ul&gt;)</h3>
            <ul style="padding-left: 20px; color: #334155;">
              <li>HTML5 Semantic Elements</li>
              <li>CSS3 Grid & Flexbox</li>
              <li>JavaScript ES6+
                <ul style="padding-left: 20px; margin-top: 6px; list-style-type: circle;">
                  <li>Arrow Functions</li>
                  <li>Async / Await</li>
                </ul>
              </li>
            </ul>
          </div>

          <div style="background: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <h3 style="color: #2563eb; margin-bottom: 10px; font-size: 16px;">2. Ordered List (&lt;ol&gt;)</h3>
            <ol type="1" style="padding-left: 20px; color: #334155;">
              <li>Analyze Assignment Requirements</li>
              <li>Implement HTML Structure</li>
              <li>Apply CSS Layout & Styles</li>
              <li>Attach JavaScript Interactivity</li>
              <li>Validate and Test Output</li>
            </ol>
          </div>
        </div>

        <div style="margin-top: 20px; background: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
          <h3 style="color: #2563eb; margin-bottom: 10px; font-size: 16px;">3. Description List (&lt;dl&gt;, &lt;dt&gt;, &lt;dd&gt;)</h3>
          <dl style="color: #334155;">
            <dt style="font-weight: bold; color: #0f172a;">HTML</dt>
            <dd style="margin-left: 20px; margin-bottom: 10px; color: #475569;">HyperText Markup Language providing the skeleton of web pages.</dd>
            <dt style="font-weight: bold; color: #0f172a;">CSS</dt>
            <dd style="margin-left: 20px; margin-bottom: 10px; color: #475569;">Cascading Style Sheets dictating the presentation, colors, and layout.</dd>
            <dt style="font-weight: bold; color: #0f172a;">JavaScript</dt>
            <dd style="margin-left: 20px; color: #475569;">Client-side scripting language providing dynamic interactivity and business logic.</dd>
          </dl>
        </div>
      </div>
    `
  },
  {
    id: "html-03",
    filename: "html-03.html",
    title: "Tables with Rows, Columns & Merged Cells",
    description: "Creates an HTML table demonstrating rows (<tr>), header cells (<th>), data cells (<td>), borders, and cell merging using colspan and rowspan.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">Student Examination Grade Sheet</h2>
        
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <thead>
              <tr style="background: #2563eb; color: #ffffff;">
                <th rowspan="2" style="border: 1px solid #cbd5e1; padding: 10px;">Roll No</th>
                <th rowspan="2" style="border: 1px solid #cbd5e1; padding: 10px;">Student Name</th>
                <th colspan="3" style="border: 1px solid #cbd5e1; padding: 10px; text-align: center;">Internal Marks (Colspan = 3)</th>
                <th rowspan="2" style="border: 1px solid #cbd5e1; padding: 10px; text-align: center;">Total</th>
                <th rowspan="2" style="border: 1px solid #cbd5e1; padding: 10px; text-align: center;">Status</th>
              </tr>
              <tr style="background: #3b82f6; color: #ffffff;">
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">Test 1</th>
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">Test 2</th>
                <th style="border: 1px solid #cbd5e1; padding: 8px; text-align: center;">Assignment</th>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #ffffff;">
                <td style="border: 1px solid #e2e8f0; padding: 10px; font-weight: bold;">250200439</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px;">k. nishanth reddy</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">25</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">24</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">25</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center; font-weight: bold; color: #16a34a;">74/75</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;"><span style="background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Distinction</span></td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="border: 1px solid #e2e8f0; padding: 10px; font-weight: bold;">250200440</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px;">Rahul Sharma</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">21</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">22</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">23</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center; font-weight: bold;">66/75</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;"><span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 12px; font-size: 12px;">First Class</span></td>
              </tr>
              <tr style="background: #ffffff;">
                <td rowspan="2" style="border: 1px solid #e2e8f0; padding: 10px; font-weight: bold; vertical-align: middle; text-align: center; background: #f1f5f9;">Lab Group A<br>(Rowspan=2)</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px;">Priya Patel</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">23</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">23</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">24</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center; font-weight: bold;">70/75</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;"><span style="background: #dcfce7; color: #15803d; padding: 4px 8px; border-radius: 12px; font-size: 12px;">Distinction</span></td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="border: 1px solid #e2e8f0; padding: 10px;">Amit Verma</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">20</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">19</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;">21</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center; font-weight: bold;">60/75</td>
                <td style="border: 1px solid #e2e8f0; padding: 10px; text-align: center;"><span style="background: #dbeafe; color: #1e40af; padding: 4px 8px; border-radius: 12px; font-size: 12px;">First Class</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: "html-04",
    filename: "html-04.html",
    title: "Images & Hyperlinks",
    description: "Demonstrates embedding images with alt text, width/height properties, rounded borders, external links with target='_blank', and intra-page anchor links.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">HTML Images & Hyperlinks Demonstration</h2>
        
        <div style="display: flex; gap: 24px; flex-wrap: wrap; margin-bottom: 24px;">
          <div style="flex: 1; min-width: 250px; text-align: center; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <svg width="180" height="140" viewBox="0 0 200 150" style="background: #dbeafe; border-radius: 8px; border: 2px solid #bfdbfe;">
              <rect width="200" height="150" fill="#eff6ff"/>
              <circle cx="100" cy="65" r="35" fill="#3b82f6"/>
              <polygon points="40,130 160,130 100,70" fill="#2563eb" opacity="0.8"/>
              <text x="100" y="145" font-family="Arial" font-size="12" fill="#1e40af" text-anchor="middle">Embedded Graphic</text>
            </svg>
            <p style="font-size: 13px; color: #64748b; margin-top: 8px;"><code>&lt;img src="..." alt="Web Tech Logo"&gt;</code></p>
          </div>

          <div style="flex: 1; min-width: 250px; background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #1e293b; font-size: 16px; margin-bottom: 10px;">Hyperlinks Demonstrations:</h3>
            <ul style="padding-left: 20px; color: #475569; font-size: 14px;">
              <li style="margin-bottom: 8px;"><a href="#section-notes" style="color: #2563eb; font-weight: 500;">Jump to Intra-page Bookmark</a></li>
              <li style="margin-bottom: 8px;"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 500;">MDN HTML Docs (New Window _blank)</a></li>
              <li style="margin-bottom: 8px;"><a href="mailto:nishanth@example.com" style="color: #2563eb; font-weight: 500;">Send Email (mailto: link)</a></li>
              <li><a href="tel:+919876543210" style="color: #2563eb; font-weight: 500;">Call Telephone (tel: link)</a></li>
            </ul>
          </div>
        </div>

        <div id="section-notes" style="background: #e0f2fe; padding: 16px; border-left: 4px solid #0284c7; border-radius: 4px;">
          <h4 style="color: #0369a1; margin-bottom: 4px;">Bookmarked Section: Anchor Target Reached!</h4>
          <p style="color: #0c4a6e; font-size: 13px;">This section is targeted by <code>&lt;a href="#section-notes"&gt;</code> demonstrating page navigation without reload.</p>
        </div>
      </div>
    `
  },
  {
    id: "html-05",
    filename: "html-05.html",
    title: "Student Registration Form",
    description: "Implements an extensive HTML student registration form with text, radio buttons, checkboxes, select dropdown, textarea, date picker, and submit/reset buttons.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 24px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 8px;">College Admission & Student Registration Form</h2>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Complete all required fields below to register for the academic semester.</p>

        <form onsubmit="event.preventDefault(); alert('Registration submitted successfully for ' + document.getElementById('reg_name').value + '!');" style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <label for="reg_name" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Full Name *</label>
              <input type="text" id="reg_name" name="name" value="k. nishanth reddy" required style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
            </div>
            <div>
              <label for="reg_no" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Register Number *</label>
              <input type="text" id="reg_no" name="regno" value="250200439" required style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <div>
              <label for="reg_email" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Email Address *</label>
              <input type="email" id="reg_email" name="email" value="nishanth@university.edu" required style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
            </div>
            <div>
              <label for="reg_dob" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Date of Birth *</label>
              <input type="date" id="reg_dob" name="dob" value="2004-05-15" required style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
            </div>
          </div>

          <div>
            <span style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Gender *</span>
            <div style="display: flex; gap: 20px; font-size: 14px; color: #334155;">
              <label><input type="radio" name="gender" value="male" checked> Male</label>
              <label><input type="radio" name="gender" value="female"> Female</label>
              <label><input type="radio" name="gender" value="other"> Other</label>
            </div>
          </div>

          <div>
            <label for="reg_branch" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Department / Course *</label>
            <select id="reg_branch" name="branch" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">
              <option value="cse" selected>Computer Science & Engineering (CSE) - Section 06</option>
              <option value="it">Information Technology (IT)</option>
              <option value="ece">Electronics & Communication (ECE)</option>
              <option value="ai_ds">Artificial Intelligence & Data Science</option>
            </select>
          </div>

          <div>
            <span style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Elective Subjects (Checkboxes)</span>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; font-size: 14px; color: #334155;">
              <label><input type="checkbox" name="skills" value="web" checked> Web Technology</label>
              <label><input type="checkbox" name="skills" value="cloud" checked> Cloud Computing</label>
              <label><input type="checkbox" name="skills" value="ml"> Machine Learning</label>
              <label><input type="checkbox" name="skills" value="cyber"> Cyber Security</label>
            </div>
          </div>

          <div>
            <label for="reg_address" style="display: block; font-weight: 500; font-size: 14px; color: #334155; margin-bottom: 6px;">Permanent Residential Address</label>
            <textarea id="reg_address" name="address" rows="3" style="width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 14px;">H.No 14-2, University Road, Hyderabad, Telangana</textarea>
          </div>

          <div style="display: flex; gap: 12px; margin-top: 10px;">
            <button type="submit" style="background: #2563eb; color: #fff; border: none; padding: 10px 24px; border-radius: 6px; font-size: 14px; font-weight: bold; cursor: pointer;">Submit Application</button>
            <button type="reset" style="background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; padding: 10px 24px; border-radius: 6px; font-size: 14px; cursor: pointer;">Reset Form</button>
          </div>
        </form>
      </div>
    `
  },
  {
    id: "html-06",
    filename: "html-06.html",
    title: "Audio & Video Elements",
    description: "Demonstrates HTML5 native media elements (<audio> and <video>) with control bars, autoplay settings, loop attributes, and fallback descriptions.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">HTML5 Audio & Video Media Players</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #2563eb; font-size: 16px; margin-bottom: 8px;">1. HTML5 Audio Element</h3>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Embedding interactive audio synthesis and playback with native controls.</p>
            <audio controls style="width: 100%; margin-bottom: 12px;">
              <source src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" type="audio/ogg">
              Your browser does not support the audio element.
            </audio>
            <div style="font-size: 12px; color: #475569; background: #ffffff; padding: 8px; border-radius: 4px; border: 1px solid #e2e8f0;">
              Attributes: <code>controls</code>, <code>autoplay</code>, <code>loop</code>, <code>preload="metadata"</code>.
            </div>
          </div>

          <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0;">
            <h3 style="color: #2563eb; font-size: 16px; margin-bottom: 8px;">2. HTML5 Video Element</h3>
            <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Embedding responsive video element with play controls and poster frame.</p>
            <video controls width="100%" style="border-radius: 6px; background: #000; max-height: 160px;">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <div style="font-size: 12px; color: #475569; background: #ffffff; padding: 8px; border-radius: 4px; border: 1px solid #e2e8f0; margin-top: 8px;">
              Attributes: <code>controls</code>, <code>width</code>, <code>poster</code>, <code>muted</code>.
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "html-07",
    filename: "html-07.html",
    title: "Frames & Iframes",
    description: "Demonstrates embedding external web documents and interactive sandbox previews using the HTML <iframe> tag.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">HTML Iframes (Inline Frames)</h2>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 16px;">The <code>&lt;iframe&gt;</code> element embeds an independent HTML document within the current document.</p>
        
        <div style="display: flex; gap: 12px; margin-bottom: 16px;">
          <button onclick="document.getElementById('frameDemo').srcdoc='<h2 style=\\'font-family:sans-serif;color:#2563eb;\\'>Notice Board</h2><p style=\\'font-family:sans-serif;\\'>Mid-term laboratory examination starts next Monday. Check your assigned computer number.</p>';" style="padding: 8px 14px; background: #2563eb; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Load Notice Board</button>
          <button onclick="document.getElementById('frameDemo').srcdoc='<h2 style=\\'font-family:sans-serif;color:#16a34a;\\'>Lab Guidelines</h2><ul style=\\'font-family:sans-serif;\\'><li>Save all files in your assigned folder.</li><li>Ensure clean indentation.</li></ul>';" style="padding: 8px 14px; background: #f1f5f9; color: #334155; border: 1px solid #cbd5e1; border-radius: 4px; cursor: pointer;">Load Lab Guidelines</button>
        </div>

        <iframe id="frameDemo" srcdoc="<h2 style='font-family:sans-serif;color:#2563eb;'>Interactive Frame Content</h2><p style='font-family:sans-serif;color:#475569;'>This document is running isolated inside an inline frame (iframe). Click buttons above to dynamically change content.</p>" style="width: 100%; height: 200px; border: 2px dashed #94a3b8; border-radius: 8px; background: #ffffff;"></iframe>
      </div>
    `
  },
  {
    id: "html-08",
    filename: "html-08.html",
    title: "Semantic HTML Elements",
    description: "Demonstrates HTML5 semantic layout structure using <header>, <nav>, <main>, <section>, <article>, <aside>, and <footer>.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
        <header style="background: #1e293b; color: #ffffff; padding: 20px;">
          <h1 style="font-size: 20px; margin-bottom: 4px;">Semantic Portal: &lt;header&gt;</h1>
          <p style="font-size: 13px; color: #94a3b8;">Department of Computer Science & Engineering</p>
        </header>

        <nav style="background: #3b82f6; padding: 10px 20px; color: #ffffff; display: flex; gap: 20px; font-size: 14px; font-weight: 500;">
          <span>&lt;nav&gt;:</span>
          <span style="cursor: pointer; text-decoration: underline;">Home</span>
          <span style="cursor: pointer; text-decoration: underline;">Syllabus</span>
          <span style="cursor: pointer; text-decoration: underline;">Practicals</span>
          <span style="cursor: pointer; text-decoration: underline;">Contact</span>
        </nav>

        <div style="display: flex; gap: 20px; padding: 20px;">
          <main style="flex: 2;">
            <section style="background: #f8fafc; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0; margin-bottom: 16px;">
              <h2 style="color: #2563eb; font-size: 18px; margin-bottom: 6px;">&lt;section&gt; - Unit 1 Overview</h2>
              <article style="background: #ffffff; padding: 12px; border-radius: 4px; border: 1px solid #cbd5e1;">
                <h3 style="color: #0f172a; font-size: 15px; margin-bottom: 4px;">&lt;article&gt; - HTML5 Standards</h3>
                <p style="color: #475569; font-size: 13px;">Semantic HTML tags provide meaningful semantic context to search engine crawlers, screen readers, and developers.</p>
              </article>
            </section>
          </main>

          <aside style="flex: 1; background: #f1f5f9; padding: 16px; border-radius: 6px; border: 1px solid #e2e8f0;">
            <h3 style="color: #334155; font-size: 15px; margin-bottom: 8px;">&lt;aside&gt; Sidebar</h3>
            <ul style="font-size: 13px; color: #475569; padding-left: 16px;">
              <li>W3C Standards</li>
              <li>Accessibility (a11y)</li>
              <li>SEO Optimization</li>
            </ul>
          </aside>
        </div>

        <footer style="background: #0f172a; color: #94a3b8; text-align: center; padding: 12px; font-size: 13px;">
          &lt;footer&gt; &copy; 2026 Web Technology Practical Lab. Student: k. nishanth reddy (250200439).
        </footer>
      </div>
    `
  },
  {
    id: "html-09",
    filename: "html-09.html",
    title: "HTML5 Input Types",
    description: "Demonstrates modern HTML5 form input types including email, date, time, number, range, color, tel, url, and search with native browser validation.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">HTML5 Input Types & Browser Controls</h2>
        
        <form style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">1. Color Picker (type="color")</label>
            <input type="color" value="#2563eb" onchange="document.getElementById('colorVal').innerText = this.value;" style="height: 40px; width: 100%; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer;">
            <span id="colorVal" style="font-size: 12px; color: #64748b;">Selected: #2563eb</span>
          </div>

          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">2. Range Slider (type="range")</label>
            <input type="range" min="0" max="100" value="75" oninput="document.getElementById('rangeVal').innerText = this.value + '%';" style="width: 100%; margin-top: 8px;">
            <span id="rangeVal" style="font-size: 12px; color: #64748b;">Value: 75%</span>
          </div>

          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">3. Number with Min/Max (type="number")</label>
            <input type="number" min="1" max="100" value="18" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          </div>

          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">4. Date & Time (type="datetime-local")</label>
            <input type="datetime-local" value="2026-09-21T09:30" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          </div>

          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">5. Telephone (type="tel")</label>
            <input type="tel" placeholder="+91 98765-43210" pattern="[0-9]{10}" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          </div>

          <div>
            <label style="display: block; font-size: 13px; font-weight: bold; color: #334155; margin-bottom: 4px;">6. Web URL (type="url")</label>
            <input type="url" placeholder="https://github.com/example" style="width: 100%; padding: 8px; border: 1px solid #cbd5e1; border-radius: 6px;">
          </div>
        </form>
      </div>
    `
  },
  {
    id: "html-10",
    filename: "html-10.html",
    title: "College Timetable Table",
    description: "Constructs a comprehensive college lecture timetable utilizing table headers, column spans for lunch break, and row spans for 2-hour practical lab slots.",
    category: "HTML Fundamentals",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 900px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; text-align: center; margin-bottom: 4px;">Department of Computer Science & Engineering</h2>
        <p style="text-align: center; color: #64748b; font-size: 14px; margin-bottom: 16px;">Weekly Academic Timetable - Semester IV (Section 06)</p>
        
        <div style="overflow-x: auto;">
          <table style="width: 100%; border-collapse: collapse; text-align: center; font-size: 13px;">
            <thead>
              <tr style="background: #1e293b; color: #ffffff;">
                <th style="padding: 10px; border: 1px solid #475569;">Day / Time</th>
                <th style="padding: 10px; border: 1px solid #475569;">09:00 - 10:00</th>
                <th style="padding: 10px; border: 1px solid #475569;">10:00 - 11:00</th>
                <th style="padding: 10px; border: 1px solid #475569;">11:15 - 12:15</th>
                <th style="padding: 10px; border: 1px solid #475569; background: #d97706;">12:15 - 01:15</th>
                <th style="padding: 10px; border: 1px solid #475569;">01:15 - 02:15</th>
                <th style="padding: 10px; border: 1px solid #475569;">02:15 - 03:15</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 10px;">Monday</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px; background: #dbeafe;">Web Tech (WT)</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">DBMS</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">OS</td>
                <td rowspan="5" style="border: 1px solid #cbd5e1; background: #fef3c7; color: #92400e; font-weight: bold; vertical-align: middle; letter-spacing: 2px;">L<br>U<br>N<br>C<br>H<br><br>B<br>R<br>E<br>A<br>K</td>
                <td colspan="2" style="border: 1px solid #cbd5e1; padding: 10px; background: #dcfce7; font-weight: bold; color: #166534;">Web Technology Practical Lab (Sec 06)</td>
              </tr>
              <tr>
                <td style="font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 10px;">Tuesday</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">Computer Networks</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px; background: #dbeafe;">Web Tech (WT)</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">Software Eng</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">DBMS</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">Library / Seminar</td>
              </tr>
              <tr>
                <td style="font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 10px;">Wednesday</td>
                <td colspan="2" style="border: 1px solid #cbd5e1; padding: 10px; background: #fee2e2; color: #991b1b; font-weight: bold;">DBMS Lab Practical</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">OS</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px; background: #dbeafe;">Web Tech (WT)</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">Sports / Physical Ed</td>
              </tr>
              <tr>
                <td style="font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 10px;">Thursday</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">OS</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">CN</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">DBMS</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">SE</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">Aptitude Training</td>
              </tr>
              <tr>
                <td style="font-weight: bold; background: #f1f5f9; border: 1px solid #cbd5e1; padding: 10px;">Friday</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">SE</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px; background: #dbeafe;">Web Tech (WT)</td>
                <td style="border: 1px solid #cbd5e1; padding: 10px;">CN</td>
                <td colspan="2" style="border: 1px solid #cbd5e1; padding: 10px; background: #f3e8ff; color: #6b21a8; font-weight: bold;">Project Mentorship & Lab</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  },
  {
    id: "html-11",
    filename: "html-11.html",
    title: "Internal & External CSS Styling",
    description: "Demonstrates comparison of inline style attributes, internal style blocks in the document head, and external stylesheet linking.",
    category: "HTML & CSS Integration",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <style>
          .internal-box {
            background-color: #f0fdf4;
            border: 2px dashed #22c55e;
            padding: 16px;
            border-radius: 6px;
            margin-bottom: 16px;
          }
          .internal-title {
            color: #15803d;
            font-size: 16px;
            font-weight: bold;
          }
        </style>
        
        <h2 style="color: #1e293b; margin-bottom: 16px;">CSS Inclusion Methods: Inline, Internal & External</h2>

        <div style="background-color: #eff6ff; border: 2px solid #3b82f6; padding: 16px; border-radius: 6px; margin-bottom: 16px;">
          <h3 style="color: #1d4ed8; font-size: 16px; margin-bottom: 4px;">1. Inline CSS Method</h3>
          <p style="color: #1e40af; font-size: 13px;">Styled directly on the element using the <code>style="..."</code> attribute. Has high specificity.</p>
        </div>

        <div class="internal-box">
          <h3 class="internal-title">2. Internal CSS Method</h3>
          <p style="color: #166534; font-size: 13px;">Styled inside an embedded <code>&lt;style&gt;</code> block within the HTML page using class selectors.</p>
        </div>

        <div style="background-color: #faf5ff; border: 2px solid #a855f7; padding: 16px; border-radius: 6px;">
          <h3 style="color: #7e22ce; font-size: 16px; margin-bottom: 4px;">3. External CSS Method</h3>
          <p style="color: #6b21a8; font-size: 13px;">Linked through <code>&lt;link rel="stylesheet" href="../assets/css/common.css"&gt;</code>, allowing universal styling across hundreds of pages.</p>
        </div>
      </div>
    `
  },
  {
    id: "html-12",
    filename: "html-12.html",
    title: "CSS Selectors, Colors, Margins, Padding & Borders",
    description: "Explores CSS universal, tag, class, ID selectors, hex/hsl colors, margins, padding, and varied border styles.",
    category: "HTML & CSS Integration",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h2 style="color: #1e293b; margin-bottom: 16px;">CSS Core Properties Demonstration</h2>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
          <div style="border: 3px solid #3b82f6; padding: 16px; margin: 8px 0; background: #eff6ff; border-radius: 8px;">
            <strong style="color: #1d4ed8;">Solid Border + Light Blue BG</strong>
            <p style="font-size: 13px; color: #1e40af; margin-top: 6px;">Padding creates inner breathing room; Margin creates outer spacing.</p>
          </div>

          <div style="border: 3px dashed #10b981; padding: 16px; margin: 8px 0; background: #ecfdf5; border-radius: 8px;">
            <strong style="color: #047857;">Dashed Border + Mint Green BG</strong>
            <p style="font-size: 13px; color: #065f46; margin-top: 6px;">Border styles: solid, dashed, dotted, double, groove, ridge.</p>
          </div>

          <div style="border: 3px dotted #f59e0b; padding: 16px; margin: 8px 0; background: #fffbeb; border-radius: 8px;">
            <strong style="color: #b45309;">Dotted Border + Amber BG</strong>
            <p style="font-size: 13px; color: #92400e; margin-top: 6px;">Colors specified using Hex (#f59e0b) and RGB/HSL values.</p>
          </div>

          <div style="border: 4px double #8b5cf6; padding: 16px; margin: 8px 0; background: #f5f3ff; border-radius: 8px;">
            <strong style="color: #6d28d9;">Double Border + Violet BG</strong>
            <p style="font-size: 13px; color: #5b21b6; margin-top: 6px;">Demonstrates composite border styling with high contrast.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "html-13",
    filename: "html-13.html",
    title: "Responsive Webpage Using CSS Media Queries",
    description: "Implements responsive layout that gracefully adapts between desktop (3 columns), tablet (2 columns), and mobile (single column) using @media rules.",
    category: "Responsive Design",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; padding: 20px; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0;">
        <style>
          .mq-container {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .mq-card {
            flex: 1 1 calc(33.333% - 16px);
            min-width: 220px;
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            padding: 16px;
            transition: all 0.3s ease;
          }
          @media (max-width: 768px) {
            .mq-card {
              flex: 1 1 calc(50% - 16px);
              background: #f0f9ff;
            }
          }
          @media (max-width: 480px) {
            .mq-card {
              flex: 1 1 100%;
              background: #fefce8;
            }
          }
        </style>

        <h2 style="color: #1e293b; margin-bottom: 8px;">Media Queries In Action</h2>
        <p style="color: #64748b; font-size: 14px; margin-bottom: 20px;">Resize your browser window or view in mobile device mode to observe dynamic column reconfiguration and background shifts.</p>

        <div class="mq-container">
          <div class="mq-card">
            <h3 style="color: #2563eb; font-size: 16px;">Desktop View</h3>
            <p style="font-size: 13px; color: #475569; margin-top: 6px;">When viewport &gt; 768px: Displays three columns side-by-side.</p>
          </div>
          <div class="mq-card">
            <h3 style="color: #2563eb; font-size: 16px;">Tablet View</h3>
            <p style="font-size: 13px; color: #475569; margin-top: 6px;">When viewport &le; 768px: Reconfigures to 2 columns with soft blue background.</p>
          </div>
          <div class="mq-card">
            <h3 style="color: #2563eb; font-size: 16px;">Mobile View</h3>
            <p style="font-size: 13px; color: #475569; margin-top: 6px;">When viewport &le; 480px: Stacks into a single column with warm yellow highlight.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "html-14",
    filename: "html-14.html",
    title: "Webpage Using Bootstrap Components",
    description: "Builds a webpage utilizing Bootstrap design components including navigation bar, cards, badge indicators, buttons, and alert components.",
    category: "Frameworks & Components",
    content: `
      <div style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; max-width: 800px; margin: 0 auto; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
        <nav style="background: #212529; color: #fff; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 18px; font-weight: bold; color: #0d6efd;">Bootstrap Demo</span>
          <div style="display: flex; gap: 16px; font-size: 14px;">
            <span style="color: #fff; cursor: pointer;">Home</span>
            <span style="color: #adb5bd; cursor: pointer;">Features</span>
            <span style="color: #adb5bd; cursor: pointer;">Pricing</span>
          </div>
        </nav>

        <div style="padding: 24px;">
          <div style="background: #cfe2ff; color: #084298; border: 1px solid #b6d4fe; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px; font-size: 14px;">
            <strong>Heads up!</strong> This component mimics the Bootstrap <code>.alert .alert-primary</code> styling.
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="border: 1px solid #dee2e6; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
              <div style="height: 100px; background: linear-gradient(135deg, #0d6efd, #0dcaf0); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: bold;">
                Card Header Banner
              </div>
              <div style="padding: 16px;">
                <h4 style="margin-bottom: 8px; font-size: 16px;">Bootstrap Card Component</h4>
                <p style="font-size: 13px; color: #6c757d; margin-bottom: 16px;">Demonstrating standard bootstrap cards with clean typography and button triggers.</p>
                <button style="background: #0d6efd; color: #fff; border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px; cursor: pointer;">Action Button</button>
              </div>
            </div>

            <div style="border: 1px solid #dee2e6; border-radius: 8px; padding: 16px; background: #f8f9fa;">
              <h4 style="margin-bottom: 12px; font-size: 16px;">Badges & Utilities</h4>
              <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
                <span style="background: #198754; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">Success</span>
                <span style="background: #dc3545; color: #fff; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">Danger</span>
                <span style="background: #ffc107; color: #000; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">Warning</span>
                <span style="background: #0dcaf0; color: #000; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: bold;">Info</span>
              </div>
              <p style="font-size: 13px; color: #495057;">Clean spacing using bootstrap margin and padding conventions (m-3, p-2, g-3).</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "html-15",
    filename: "html-15.html",
    title: "Simple Personal Portfolio Webpage",
    description: "A complete personal portfolio webpage created using HTML and CSS showcasing student profile, technical skills, projects, and contact info.",
    category: "HTML & CSS Integration",
    content: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 800px; margin: 0 auto; background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1e293b, #3b82f6); color: #ffffff; padding: 36px 24px; text-align: center;">
          <div style="width: 80px; height: 80px; background: #ffffff; color: #1e293b; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 32px; font-weight: bold; margin: 0 auto 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            NR
          </div>
          <h1 style="font-size: 24px; margin-bottom: 4px;">k. nishanth reddy</h1>
          <p style="font-size: 14px; opacity: 0.9;">B.Tech Computer Science & Engineering | Register No: 250200439</p>
          <p style="font-size: 13px; opacity: 0.8; margin-top: 4px;">Section: 06 | Subject: Web Technology</p>
        </div>

        <div style="padding: 24px;">
          <h2 style="color: #1e293b; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-bottom: 12px;">About Me</h2>
          <p style="color: #475569; font-size: 14px; margin-bottom: 20px;">
            Passionate computer science student specializing in front-end development, responsive web architectures, and full-stack cloud applications.
          </p>

          <h2 style="color: #1e293b; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-bottom: 12px;">Technical Skills</h2>
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 20px;">
            <span style="background: #eff6ff; color: #1d4ed8; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">HTML5</span>
            <span style="background: #eff6ff; color: #1d4ed8; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">CSS3 & Flexbox</span>
            <span style="background: #eff6ff; color: #1d4ed8; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">JavaScript (ES6+)</span>
            <span style="background: #eff6ff; color: #1d4ed8; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">DOM & Web APIs</span>
            <span style="background: #eff6ff; color: #1d4ed8; padding: 6px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">Bootstrap & Tailwind</span>
          </div>

          <h2 style="color: #1e293b; font-size: 18px; border-bottom: 2px solid #3b82f6; padding-bottom: 6px; margin-bottom: 12px;">Featured Academic Projects</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
            <div style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <h3 style="font-size: 15px; color: #0f172a; margin-bottom: 4px;">Practical Programs Portal</h3>
              <p style="font-size: 13px; color: #64748b;">Comprehensive suite of HTML, CSS, and JavaScript interactive lab assignments.</p>
            </div>
            <div style="background: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <h3 style="font-size: 15px; color: #0f172a; margin-bottom: 4px;">Student Gradebook System</h3>
              <p style="font-size: 13px; color: #64748b;">Dynamic client-side marks and GPA calculation with localStorage persistence.</p>
            </div>
          </div>

          <div style="background: #f1f5f9; padding: 16px; border-radius: 6px; text-align: center;">
            <p style="font-size: 14px; color: #334155; font-weight: 500;">Connect with me: kathareddy7569@gmail.com | Student ID: 250200439</p>
          </div>
        </div>
      </div>
    `
  }
];
