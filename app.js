/**
 * 3000 LTR STERILE MANUFACTURING PLANT - LITERATURE SURVEY ENGINE
 * Interactive controls, filtering, citation management, view toggling & export
 */

const LITERATURE_DATA = [
  {
    id: 1,
    authors: "J. S. Ortiz, V. H. Andaluz, C. P. Carvajal, and M. A. Llamuca",
    year: "2026",
    title: "Bidirectional immersive digital twin for real-time monitoring and supervisory interaction in PLC-controlled manufacturing",
    publication: "Springer - The International Journal of Advanced Manufacturing Technology, vol. 143, pp. 1–15",
    doi: "https://doi.org/10.1007/s00170-026-19127-w",
    status: "Verified",
    publisherBadge: "Springer Nature",
    categories: ["siemens", "scada", "monitoring"],
    technology: [
      "Siemens S7-1200 PLC (CPU 1212C)",
      "OPC UA",
      "MQTT",
      "Node-RED middleware",
      "Unity 3D VR environment"
    ],
    focus: "Real-time bidirectional digital twin architecture for process supervision while retaining PLC control authority",
    findings: "Achieved 78 ms process update latency, 99.4% availability, 99.0% command success rate; reduced operator workload and scored 94/100 on System Usability Scale (SUS).",
    relevance: "Demonstrates real-time Ethernet/OPC UA communication and supervisory control using Siemens S7-1200 PLC while maintaining process control authority."
  },
  {
    id: 2,
    authors: "B. Dhage and A. Dhage",
    year: "2016",
    title: "Automation of CIP Process in Dairy Industries Using Programmable Controllers and SCADA",
    publication: "IEEE Proc. 2016 International Conference on Automatic Control and Dynamic Optimization Techniques (ICACDOT), Pune, India, pp. 318–323",
    doi: "https://doi.org/10.1109/ICACDOT.2016.7877603",
    status: "Verified",
    publisherBadge: "IEEE Xplore",
    categories: ["cip-sip", "scada"],
    technology: [
      "CompactLogix PLC (1769-L32E)",
      "RSLogix 5000",
      "SCADA",
      "RTDs",
      "Conductivity & Flow Sensors",
      "Pneumatic Valves"
    ],
    focus: "Automated multi-stage Cleaning-In-Place (CIP) sequence execution including acid/lye wash, rinse and sterilization, with SCADA tracking",
    findings: "Enabled recipe parameter editing, real-time historical trending of temperature, flow and conductivity, automated report printing and chemical recovery.",
    relevance: "Directly informs CIP/SIP sequence logic, chemical/water recycling, conductivity endpoint checks and automated reporting in the 3000 L plant."
  },
  {
    id: 3,
    authors: "B. Riera, R. Coupat, A. Philippot, D. Annebicque, and F. Gellot",
    year: "2012",
    title: "Control design pattern based on safety logical constraints for manufacturing systems: application to a palletizer",
    publication: "Elsevier / IFAC-PapersOnLine, Proc. 14th IFAC INCOM, vol. 45, no. 6, pp. 883–888",
    doi: "https://doi.org/10.3182/20120523-3-RO-2023.00381",
    status: "Verified",
    publisherBadge: "Elsevier IFAC",
    categories: ["safety"],
    technology: [
      "Discrete Event Systems theory",
      "Boolean logical monomial safety constraints",
      "UPPAAL model checking",
      "ST language"
    ],
    focus: "Separating functional control logic from safety control logic using logical safety guards acting as an output filter in the PLC",
    findings: "Safety guards were shown to block unsafe output commands independently of functional logic errors.",
    relevance: "Provides a mathematical/logical safety framework for fail-safe valve and pump interlocks during CIP, SIP and pressure-hold operations."
  },
  {
    id: 4,
    authors: "T. S. Tamir, G. Xiong, H. M. Menkir, X. Shang, Z. Shen, X. Dong, and X. Gong",
    year: "2020",
    title: "Developing SCADA Systems to Monitor and Control Liquid and Detergent Factories",
    publication: "IEEE Proc. 2020 16th Conference on Automation Science and Engineering (CASE), pp. 691–696",
    doi: "https://doi.org/10.1109/CASE49439.2020.9216747",
    status: "Verified",
    publisherBadge: "IEEE Xplore",
    categories: ["scada", "monitoring"],
    technology: [
      "Arduino MCU hardware bridge",
      "C#.NET HMI software",
      "Bilingual GUI",
      "MS Access database",
      "RS-232",
      "PI controller"
    ],
    focus: "User-friendly SCADA interface, real-time database logging and automated level control in liquid processing",
    findings: "PI controller achieved steady-state level control in 0.15 s and real-time sensor measurements were logged every 200 ms.",
    relevance: "Supports continuous parameter logging, database recording and real-time process monitoring."
  },
  {
    id: 5,
    authors: "M. Dhabal, D. Lingampalle, and O. P. Ullas",
    year: "2021",
    title: "A Guide to Design a PLC and SCADA based Industrial Automation System",
    publication: "International Journal of Innovative Research in Technology (IJIRT), vol. 8, no. 4, pp. 74–78",
    doi: "https://ijirt.org/master/publishedpaper/IJIRT152687_PAPER.pdf",
    status: "Verified",
    publisherBadge: "IJIRT (Peer Reviewed)",
    categories: ["siemens", "scada"],
    technology: [
      "System decomposition",
      "I/O count calculation",
      "Remote I/O sizing",
      "SCADA tag mapping",
      "Ethernet LAN & network redundancy"
    ],
    focus: "Systematic engineering methodology for PLC sizing, I/O modules, SCADA tags and industrial networking",
    findings: "Provides a structured methodology for calculating I/O channels, structuring SCADA tags and designing industrial automation systems.",
    relevance: "Supports the I/O breakdown, Siemens S7-1200 expansion module sizing, SCADA tag mapping and Ethernet architecture of the plant."
  },
  {
    id: 6,
    authors: "K. N. Bagal, C. B. Kadu, B. J. Parvat, and P. S. Vikhe",
    year: "2017",
    title: "PLC Based Real Time Process Control using SCADA and MATLAB",
    publication: "IEEE Proc. 2018 4th ICCUBEA, Pune, India, pp. 1–5",
    doi: "https://doi.org/10.1109/ICCUBEA.2018.8697383",
    status: "Verified",
    publisherBadge: "IEEE Xplore",
    categories: ["scada", "motor-vfd"],
    technology: [
      "Mitsubishi FX2N PLC",
      "KEPServerEX OPC DA server",
      "MATLAB/Simulink",
      "CitectSCADA"
    ],
    focus: "Real-time closed-loop process control and data exchange between PLC, SCADA and MATLAB",
    findings: "Validated bi-directional OPC data exchange and real-time speed regulation and parameter monitoring.",
    relevance: "Provides supporting evidence for PLC-SCADA data exchange and supervisory process control."
  },
  {
    id: 7,
    authors: "G. Dörgő, F. Tandari, T. Szabó, A. Palazoglu, and J. Abonyi",
    year: "2021",
    title: "Quality vs. quantity of alarm messages - How to measure the performance of an alarm system",
    publication: "Elsevier - Chemical Engineering Research and Design, vol. 173, pp. 63–80",
    doi: "https://doi.org/10.1016/j.cherd.2021.06.023",
    status: "Verified",
    publisherBadge: "Elsevier ScienceDirect",
    categories: ["alarm", "safety"],
    technology: [
      "Alarm metrics",
      "Alarm rationalization",
      "Process mining",
      "Informativeness/actionability evaluation",
      "ANSI/ISA-18.2 principles"
    ],
    focus: "Designing actionable and context-aware industrial alarm systems instead of excessive alarm generation",
    findings: "Alarm rationalization can reduce false/chattering alarms and prevent operator alarm flooding.",
    relevance: "Supports the design of actionable Zenon SCADA alarms, prioritization, hooter/lamp indication and alarm filtering."
  },
  {
    id: 8,
    authors: "M. Kumbhar and A. Patil",
    year: "2025",
    title: "Real-Time Industrial Process Monitoring and Safety Enhancement Using PLC and SCADA",
    publication: "International Research Journal on Advanced Engineering Hub (IRJAEH), vol. 3, no. 5, pp. 2621–2626",
    doi: "https://irjaeh.com",
    status: "Verified",
    publisherBadge: "IRJAEH Journal",
    categories: ["safety", "monitoring", "scada"],
    technology: [
      "PLC",
      "SCADA screens",
      "RFID tracking",
      "Uptime/downtime logging",
      "AI safety cameras"
    ],
    focus: "Centralized process monitoring, fault tracking, uptime/downtime calculation and safety monitoring",
    findings: "Centralized SCADA monitoring improved visibility of process status and enabled automated downtime tracking.",
    relevance: "Supports SCADA-based fault tracking, equipment status monitoring, emergency-stop status and operational logging."
  },
  {
    id: 9,
    authors: "A. Salkić, H. Muhović, and D. Jokić",
    year: "2022",
    title: "Siemens S7-1200 PLC DC Motor control capabilities",
    publication: "Elsevier - IFAC-PapersOnLine, vol. 55, no. 4, pp. 103–108",
    doi: "https://doi.org/10.1016/j.ifacol.2022.06.017",
    status: "Verified",
    publisherBadge: "Elsevier IFAC",
    categories: ["siemens", "motor-vfd"],
    technology: [
      "Siemens SIMATIC S7-1200 PLC",
      "TIA Portal",
      "SCL",
      "Signal adaptation board",
      "Full-bridge motor driver",
      "Encoder & HMI"
    ],
    focus: "Closed-loop speed control, PID regulation and positioning using Siemens S7-1200",
    findings: "Demonstrated the precision and flexibility of the Siemens S7-1200 platform for motor-control applications.",
    relevance: "Supports the use of Siemens S7-1200 and TIA Portal for controlling variable-speed equipment such as the plant's mixer and pump systems."
  },
  {
    id: 10,
    authors: "A. Setiawan, Sugeng, K. I. Koesoema, S. Bakhri, and J. Aditya",
    year: "2019",
    title: "The SCADA system using PLC and HMI to improve the effectiveness and efficiency of production processes",
    publication: "IOP Conference Series: Materials Science and Engineering, vol. 550, p. 012008",
    doi: "https://doi.org/10.1088/1757-899X/550/1/012008",
    status: "Verified",
    publisherBadge: "IOP Science",
    categories: ["scada", "monitoring"],
    technology: [
      "Master-K120S PLC",
      "XBT HMI",
      "SCADA software",
      "Photoelectric sensors",
      "Pressure & Temperature sensors",
      "Control relays"
    ],
    focus: "Comparison between conventional relay/push-button control and automated PLC-HMI-SCADA manufacturing systems",
    findings: "The study reported reductions in defect rates and production time together with productivity improvement.",
    relevance: "Provides supporting evidence for replacing manual/semi-automated vessel handling with integrated PLC-SCADA automation."
  }
];

// State Management
let currentFilter = "all";
let currentSearch = "";
let currentView = "table"; // 'table' or 'grid'

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  setupFilterChips();
  setupSearch();
  setupViewToggles();
  setupPrintExport();
  renderLiterature();
});

// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem("survey-theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const nextTheme = current === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", nextTheme);
      localStorage.setItem("survey-theme", nextTheme);
      updateThemeIcon(nextTheme);
      showToast(`Switched to ${nextTheme === "light" ? "Clinical Light" : "Industrial Dark"} mode`);
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById("themeIcon");
  if (!iconSpan) return;
  if (theme === "light") {
    iconSpan.textContent = "🌙";
  } else {
    iconSpan.textContent = "☀️";
  }
}

// Filter Chips
function setupFilterChips() {
  const chips = document.querySelectorAll(".chip-btn");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.getAttribute("data-filter");
      renderLiterature();
    });
  });
}

// Search Setup
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.toLowerCase().trim();
      renderLiterature();
    });
  }
}

// View Toggles
function setupViewToggles() {
  const tableBtn = document.getElementById("tableViewBtn");
  const gridBtn = document.getElementById("gridViewBtn");

  if (tableBtn && gridBtn) {
    tableBtn.addEventListener("click", () => {
      currentView = "table";
      tableBtn.classList.add("active");
      gridBtn.classList.remove("active");
      renderLiterature();
    });

    gridBtn.addEventListener("click", () => {
      currentView = "grid";
      gridBtn.classList.add("active");
      tableBtn.classList.remove("active");
      renderLiterature();
    });
  }
}

// Print & Export
function setupPrintExport() {
  const printBtn = document.getElementById("printReportBtn");
  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  const exportBtn = document.getElementById("exportJsonBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      downloadJson();
    });
  }
}

function downloadJson() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(LITERATURE_DATA, null, 2));
  const downloadAnchor = document.createElement("a");
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", "Sterile_Plant_3000L_Literature_Survey.json");
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast("Literature dataset exported to JSON");
}

// Filter Data
function getFilteredData() {
  return LITERATURE_DATA.filter(item => {
    // Filter by Category
    const matchesCategory = currentFilter === "all" || item.categories.includes(currentFilter);

    // Filter by Search Query
    const searchTarget = [
      item.id,
      item.authors,
      item.year,
      item.title,
      item.publication,
      item.focus,
      item.findings,
      item.relevance,
      item.technology.join(" ")
    ].join(" ").toLowerCase();

    const matchesSearch = !currentSearch || searchTarget.includes(currentSearch);

    return matchesCategory && matchesSearch;
  });
}

// Render Literature
function renderLiterature() {
  const filtered = getFilteredData();
  const tableContainer = document.getElementById("tableContainer");
  const gridContainer = document.getElementById("gridContainer");
  const countBadge = document.getElementById("filterCountBadge");

  if (countBadge) {
    countBadge.textContent = `Showing ${filtered.length} of ${LITERATURE_DATA.length} Papers`;
  }

  if (currentView === "table") {
    if (tableContainer) tableContainer.style.display = "block";
    if (gridContainer) gridContainer.style.display = "none";
    renderTable(filtered);
  } else {
    if (tableContainer) tableContainer.style.display = "none";
    if (gridContainer) gridContainer.style.display = "grid";
    renderGrid(filtered);
  }
}

function renderTable(items) {
  const tbody = document.getElementById("literatureTableBody");
  if (!tbody) return;

  if (items.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align: center; padding: 40px; color: var(--text-muted);">
          No matching studies found for "<strong>${escapeHtml(currentSearch)}</strong>" in filter <em>${escapeHtml(currentFilter)}</em>.
        </td>
      </tr>
    `;
    return;
  }

  tbody.innerHTML = items.map(item => `
    <tr id="row-${item.id}">
      <td class="col-sr">
        <span>#${item.id}</span>
      </td>
      <td class="col-author">
        <div>${item.authors}</div>
        <span class="author-year">(${item.year})</span>
        <div style="margin-top: 6px;">
          <span class="badge badge-verified" style="font-size: 0.68rem; padding: 2px 6px;">${item.publisherBadge}</span>
        </div>
      </td>
      <td class="col-title">
        <a href="${item.doi}" target="_blank" rel="noopener noreferrer" title="View Source Paper">
          "${item.title}" ↗
        </a>
      </td>
      <td class="col-tech">
        <div class="tech-tag-group">
          ${item.technology.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </td>
      <td class="col-focus">
        ${item.focus}
      </td>
      <td class="col-findings">
        <strong>${item.findings}</strong>
      </td>
      <td class="col-relevance">
        <div class="relevance-highlight">
          ${item.relevance}
        </div>
        <div style="margin-top: 8px; display: flex; gap: 8px;">
          <button class="ref-copy-btn" onclick="copyCitation(${item.id})">📋 Copy Citation</button>
          <a href="${item.doi}" target="_blank" rel="noopener noreferrer" class="ref-doi">DOI Link ↗</a>
        </div>
      </td>
    </tr>
  `).join("");
}

function renderGrid(items) {
  const container = document.getElementById("gridContainer");
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
        No matching studies found for "<strong>${escapeHtml(currentSearch)}</strong>".
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => `
    <article class="study-card">
      <div class="card-top">
        <span class="card-num">Study #${item.id}</span>
        <span class="badge badge-verified">${item.publisherBadge}</span>
      </div>
      <h3 class="card-title">
        <a href="${item.doi}" target="_blank" rel="noopener noreferrer" style="color: inherit; text-decoration: none;">
          ${item.title} ↗
        </a>
      </h3>
      <div class="card-authors">By ${item.authors} (${item.year})</div>
      
      <div class="card-tech-section">
        <h5>Core Technology / Architecture:</h5>
        <div class="tech-tag-group">
          ${item.technology.map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
        </div>
      </div>

      <div class="card-block">
        <h5>Key Findings:</h5>
        <p>${item.findings}</p>
      </div>

      <div class="card-block" style="background: rgba(14, 165, 233, 0.06); padding: 10px; border-radius: var(--radius-sm); border-left: 3px solid var(--accent-cyan);">
        <h5 style="color: var(--accent-cyan);">Relevance to 3000L Plant:</h5>
        <p style="font-size: 0.84rem;">${item.relevance}</p>
      </div>

      <div class="card-footer">
        <a href="${item.doi}" target="_blank" rel="noopener noreferrer" class="ref-doi">DOI: ${item.doi.replace('https://doi.org/', '')} ↗</a>
        <button class="ref-copy-btn" onclick="copyCitation(${item.id})">Copy Citation</button>
      </div>
    </article>
  `).join("");
}

// Copy Citation Function
window.copyCitation = function(id) {
  const item = LITERATURE_DATA.find(d => d.id === id);
  if (!item) return;

  const citationText = `[${item.id}] ${item.authors}, "${item.title}," ${item.publication}, ${item.year}. DOI: ${item.doi}`;
  
  navigator.clipboard.writeText(citationText).then(() => {
    showToast(`Copied Reference [${item.id}] to clipboard!`);
  }).catch(err => {
    // Fallback
    const textarea = document.createElement("textarea");
    textarea.value = citationText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    showToast(`Copied Reference [${item.id}]!`);
  });
};

window.copyAllReferences = function() {
  const fullText = LITERATURE_DATA.map(item => 
    `[${item.id}] ${item.authors}, "${item.title}," ${item.publication}, ${item.year}. DOI: ${item.doi} (Verification: ${item.status})`
  ).join("\n\n");

  navigator.clipboard.writeText(fullText).then(() => {
    showToast("All 10 verified references copied in IEEE format!");
  });
};

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById("surveyToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "surveyToast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
