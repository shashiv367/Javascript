```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Manipulation Cheat Sheet & Live Playground</title>
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- FontAwesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <!-- Inter Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
  
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            mono: ['Fira Code', 'monospace'],
          },
          colors: {
            brand: {
              50: '#f0fdf4',
              500: '#22c55e',
              600: '#16a34a',
              700: '#15803d',
            }
          }
        }
      }
    }
  </script>

  <style>
    /* Custom Scrollbars */
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    ::-webkit-scrollbar-track {
      background: #1e293b;
    }
    ::-webkit-scrollbar-thumb {
      background: #475569;
      border-radius: 3px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #64748b;
    }
    .dom-node {
      transition: all 0.25s ease-in-out;
    }
    .active-highlight {
      outline: 2px solid #22c55e !important;
      outline-offset: 2px;
      background-color: rgba(34, 197, 94, 0.15) !important;
    }
    .parent-highlight {
      outline: 2px dashed #3b82f6 !important;
      background-color: rgba(59, 130, 246, 0.1) !important;
    }
    .sibling-highlight {
      outline: 2px dotted #eab308 !important;
      background-color: rgba(234, 179, 8, 0.1) !important;
    }
    .custom-active-class {
      background: linear-gradient(135deg, #ec4899, #8b5cf6) !important;
      color: white !important;
      transform: scale(1.02);
      box-shadow: 0 10px 15px -3px rgba(139, 92, 246, 0.4);
    }
  </style>
</head>

<body class="bg-slate-950 text-slate-100 font-sans min-h-screen flex flex-col antialiased selection:bg-brand-500 selection:text-slate-950">

  <!-- Header Header -->
  <header class="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="bg-brand-500/20 text-brand-500 p-2 rounded-xl border border-brand-500/30">
          <i class="fa-solid font-mono text-xl">< /></i>
        </div>
        <div>
          <h1 class="font-bold text-lg leading-none bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">DOM Manipulator</h1>
          <p class="text-xs text-slate-400">Interactive Cheat Sheet & Live Tester</p>
        </div>
      </div>
      
      <div class="flex items-center space-x-3">
        <button id="resetPlaygroundBtn" class="flex items-center space-x-2 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-slate-700 transition">
          <i class="fa-solid fa-rotate-left"></i>
          <span>Reset Playground</span>
        </button>
        <span class="text-xs bg-brand-500/10 text-brand-500 font-mono px-2.5 py-1 rounded-full border border-brand-500/20">ES6+ JS</span>
      </div>
    </div>
  </header>

  <!-- Main Container -->
  <main class="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">

    <!-- LEFT COLUMN: Navigation & Interactive Controls (5 cols) -->
    <div class="lg:col-span-5 flex flex-col space-y-6">
      
      <!-- Topic Category Selector -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-xl">
        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Select DOM Topic</label>
        <div class="relative">
          <select id="topicSelector" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium text-slate-200 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition appearance-none cursor-pointer">
            <option value="selecting">1. Selecting Elements</option>
            <option value="text-html">2. Text & HTML Content</option>
            <option value="styles">3. Changing Styles & Attributes</option>
            <option value="classes">4. Class Manipulation (classList)</option>
            <option value="nodes">5. Creating & Removing Nodes</option>
            <option value="traversal">6. DOM Tree Traversal</option>
            <option value="events">7. Input Events & Listeners</option>
            <option value="delegation">8. Event Delegation</option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
            <i class="fa-solid fa-chevron-down text-xs"></i>
          </div>
        </div>
      </div>

      <!-- Control Panel (Triggers actions on live output) -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <h2 class="font-semibold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-gamepad text-brand-500"></i> Action Panel
          </h2>
          <span id="activeTopicBadge" class="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700 font-mono">Selecting Elements</span>
        </div>

        <!-- Controls Container (Dynamic per topic) -->
        <div id="controlsContainer" class="space-y-3 flex-1 flex flex-col justify-center">
          <!-- Dynamically populated via JS -->
        </div>

        <!-- Action Log -->
        <div class="mt-6 pt-4 border-t border-slate-800">
          <div class="flex justify-between items-center mb-1.5">
            <span class="text-xs uppercase font-mono tracking-wider text-slate-400">Action Execution Log</span>
            <button id="clearLogBtn" class="text-[10px] text-slate-500 hover:text-slate-300">Clear</button>
          </div>
          <div id="actionLog" class="bg-slate-950 rounded-xl p-3 border border-slate-800/80 font-mono text-xs text-brand-500 h-20 overflow-y-auto space-y-1">
            <p class="text-slate-500 font-sans italic">&gt; Click any button above to test DOM methods live...</p>
          </div>
        </div>

      </div>

    </div>

    <!-- RIGHT COLUMN: Live Output & Code Snippet (7 cols) -->
    <div class="lg:col-span-7 flex flex-col space-y-6">

      <!-- Live Interactive Canvas -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex flex-col min-h-[340px]">
        <div class="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
          <h2 class="font-semibold text-slate-200 flex items-center gap-2">
            <i class="fa-solid fa-desktop text-sky-400"></i> Live DOM Canvas
          </h2>
          <div class="flex items-center space-x-2">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="text-xs text-slate-400 font-mono">Live Sandbox</span>
          </div>
        </div>

        <!-- Playground Output Area -->
        <div id="sandbox" class="flex-1 bg-slate-950 border border-slate-800/90 rounded-xl p-5 relative flex flex-col justify-center overflow-hidden min-h-[220px]">
          
          <!-- Sample Target Elements inside Sandbox -->
          <div id="targetContainer" class="space-y-4 w-full max-w-md mx-auto">
            
            <h3 id="mainHeading" class="dom-node text-xl font-bold text-slate-100 text-center p-2 rounded-lg">
              Main Heading Title
            </h3>

            <div id="cardBox" class="dom-node bg-slate-900 border border-slate-800 rounded-xl p-4 shadow-sm space-y-2">
              <p id="firstParagraph" class="dom-node text-sm text-slate-300 p-1.5 rounded">
                This is the <span class="text-brand-500 font-semibold">first paragraph</span> inside the card container.
              </p>
              <p id="secondParagraph" class="dom-node text-sm text-slate-400 p-1.5 rounded">
                Second paragraph with <a href="#" id="sampleLink" class="text-sky-400 underline">a sample link</a> inside.
              </p>
            </div>

            <ul id="itemList" class="dom-node space-y-2">
              <li class="item-node bg-slate-900 border border-slate-800/80 px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between text-slate-300">
                <span><i class="fa-solid fa-cube text-slate-500 mr-2"></i>Item Alpha</span>
                <span class="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">.item-node</span>
              </li>
              <li class="item-node bg-slate-900 border border-slate-800/80 px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between text-slate-300">
                <span><i class="fa-solid fa-cube text-slate-500 mr-2"></i>Item Beta</span>
                <span class="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">.item-node</span>
              </li>
            </ul>

            <!-- Dynamic Input Container (Hidden by default, used for event topic) -->
            <div id="inputDemoArea" class="hidden space-y-3 pt-2">
              <input type="text" id="demoInput" placeholder="Type here to test input events..." class="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-brand-500 font-mono">
              <p class="text-xs text-slate-400 font-mono">Value: <span id="inputOutput" class="text-brand-500 font-bold">(empty)</span></p>
            </div>

          </div>

        </div>
      </div>

      <!-- Code Snippet Display -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex-1 flex flex-col">
        <div class="flex items-center justify-between mb-3">
          <h2 class="font-semibold text-slate-200 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-code text-amber-400"></i> JavaScript Reference Code
          </h2>
          <button id="copyCodeBtn" class="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white px-2.5 py-1 rounded-md border border-slate-700 transition flex items-center gap-1.5">
            <i class="fa-regular fa-copy"></i>
            <span>Copy Snippet</span>
          </button>
        </div>

        <div class="relative flex-1">
          <pre class="bg-slate-950 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-300 overflow-x-auto h-full min-h-[160px] leading-relaxed"><code id="codeSnippetDisplay" class="language-javascript">// Code snippet will render here...</code></pre>
        </div>
      </div>

    </div>

  </main>

  <!-- Footer -->
  <footer class="border-t border-slate-800 bg-slate-900/50 py-4 mt-auto">
    <div class="max-w-7xl mx-auto px-4 text-center text-xs text-slate-500">
      Interactive DOM Manipulation Guide & Live Sandbox • Modern ES6+ JavaScript
    </div>
  </footer>

  <!-- DOM Script Logic -->
  <script>
    // --- Data Store for Topics & Code Snippets ---
    const DOM_TOPICS = {
      selecting: {
        title: "1. Selecting Elements",
        badge: "Selection Methods",
        snippet: `// Select by ID
const heading = document.getElementById('mainHeading');

// Select single element matching CSS selector
const card = document.querySelector('#cardBox');

// Select ALL elements matching CSS selector
const allItems = document.querySelectorAll('.item-node');

// Iterating over a NodeList
allItems.forEach((item, index) => {
  console.log(\`Item \${index}: \${item.textContent}\`);
});`,
        controls: [
          { label: "Select by ID (#mainHeading)", action: "selectId", icon: "fa-bullseye" },
          { label: "Query Selector (.item-node)", action: "selectQuery", icon: "fa-arrow-pointer" },
          { label: "Query Selector All (All Items)", action: "selectAll", icon: "fa-list-check" }
        ]
      },
      "text-html": {
        title: "2. Text & HTML Content",
        badge: "Content Update",
        snippet: `const heading = document.getElementById('mainHeading');

// Safely update plain text (prevents XSS)
heading.textContent = "Updated via textContent!";

// Update HTML markup inside element
const card = document.getElementById('cardBox');
card.innerHTML = \`<p class="text-brand-500 font-bold">New HTML Injected!</p>\`;`,
        controls: [
          { label: "Set textContent", action: "setText", icon: "fa-font" },
          { label: "Set innerHTML", action: "setHTML", icon: "fa-code" },
          { label: "Reset Heading Text", action: "resetText", icon: "fa-arrow-rotate-left" }
        ]
      },
      styles: {
        title: "3. Changing Styles & Attributes",
        badge: "Styles & Attributes",
        snippet: `const heading = document.getElementById('mainHeading');

// Modify inline style properties
heading.style.color = "#22c55e";
heading.style.backgroundColor = "rgba(34, 197, 94, 0.1)";

// Set and Get Attributes
const link = document.getElementById('sampleLink');
link.setAttribute('href', 'https://developer.mozilla.org');
link.setAttribute('target', '_blank');

console.log(link.getAttribute('href'));`,
        controls: [
          { label: "Apply Inline CSS", action: "applyStyle", icon: "fa-palette" },
          { label: "Clear Inline Styles", action: "clearStyle", icon: "fa-eraser" },
          { label: "Set Target attribute", action: "setAttr", icon: "fa-link" }
        ]
      },
      classes: {
        title: "4. Class Manipulation (classList)",
        badge: "classList API",
        snippet: `const card = document.getElementById('cardBox');

// Add CSS classes
card.classList.add('custom-active-class');

// Remove CSS classes
card.classList.remove('custom-active-class');

// Toggle class (adds if absent, removes if present)
card.classList.toggle('custom-active-class');

// Check if class exists
const isActive = card.classList.contains('custom-active-class');`,
        controls: [
          { label: "classList.add()", action: "addClass", icon: "fa-plus-square" },
          { label: "classList.remove()", action: "removeClass", icon: "fa-minus-square" },
          { label: "classList.toggle()", action: "toggleClass", icon: "fa-toggle-on" }
        ]
      },
      nodes: {
        title: "5. Creating & Removing Nodes",
        badge: "Node Mutations",
        snippet: `const list = document.getElementById('itemList');

// 1. Create a new element
const newItem = document.createElement('li');
newItem.className = "item-node bg-slate-900 border border-slate-800 px-3 py-2 rounded-lg text-xs font-mono text-brand-500";
newItem.textContent = "New Dynamic Item";

// 2. Append to list
list.appendChild(newItem);

// 3. Remove the last item
if (list.lastElementChild) {
  list.lastElementChild.remove();
}`,
        controls: [
          { label: "Create & Append Item", action: "addNode", icon: "fa-folder-plus" },
          { label: "Remove Last Item", action: "removeNode", icon: "fa-trash" },
          { label: "Prepend Item to Top", action: "prependNode", icon: "fa-turn-up" }
        ]
      },
      traversal: {
        title: "6. DOM Tree Traversal",
        badge: "Tree Navigation",
        snippet: `const firstP = document.getElementById('firstParagraph');

// Navigate to Parent Element
const parentCard = firstP.parentElement;

// Navigate to Next / Previous Sibling
const nextP = firstP.nextElementSibling;

// Access Children of a Parent Node
const children = parentCard.children;`,
        controls: [
          { label: "Highlight Parent Element", action: "highlightParent", icon: "fa-sitemap" },
          { label: "Highlight Next Sibling", action: "highlightSibling", icon: "fa-arrows-left-right" },
          { label: "Clear Traversal Highlights", action: "clearTraversal", icon: "fa-xmark" }
        ]
      },
      events: {
        title: "7. Input Events & Listeners",
        badge: "Event Handlers",
        snippet: `const input = document.getElementById('demoInput');
const output = document.getElementById('inputOutput');

// Add Event Listener for real-time input
input.addEventListener('input', (event) => {
  output.textContent = event.target.value || '(empty)';
});`,
        controls: [
          { label: "Focus Demo Input Field", action: "focusInput", icon: "fa-keyboard" },
          { label: "Clear Input Field", action: "clearInput", icon: "fa-delete-left" }
        ]
      },
      delegation: {
        title: "8. Event Delegation",
        badge: "Event Delegation",
        snippet: `// Attach ONE event listener to the parent container
const list = document.getElementById('itemList');

list.addEventListener('click', (e) => {
  // Use e.target or .closest() to match child elements
  const targetItem = e.target.closest('.item-node');
  
  if (targetItem) {
    targetItem.classList.toggle('custom-active-class');
    console.log('Clicked item:', targetItem.textContent);
  }
});`,
        controls: [
          { label: "Enable Delegation Mode", action: "enableDelegation", icon: "fa-diagram-project" },
          { label: "Reset Item Highlights", action: "resetDelegation", icon: "fa-rotate-left" }
        ]
      }
    };

    // --- Core State & DOM Elements ---
    let currentTopic = 'selecting';
    let delegationActive = false;

    const topicSelector = document.getElementById('topicSelector');
    const activeTopicBadge = document.getElementById('activeTopicBadge');
    const controlsContainer = document.getElementById('controlsContainer');
    const codeSnippetDisplay = document.getElementById('codeSnippetDisplay');
    const actionLog = document.getElementById('actionLog');
    const copyCodeBtn = document.getElementById('copyCodeBtn');
    const resetPlaygroundBtn = document.getElementById('resetPlaygroundBtn');
    const clearLogBtn = document.getElementById('clearLogBtn');

    const sandbox = document.getElementById('sandbox');
    const targetContainer = document.getElementById('targetContainer');
    const mainHeading = document.getElementById('mainHeading');
    const cardBox = document.getElementById('cardBox');
    const firstParagraph = document.getElementById('firstParagraph');
    const secondParagraph = document.getElementById('secondParagraph');
    const itemList = document.getElementById('itemList');
    const inputDemoArea = document.getElementById('inputDemoArea');
    const demoInput = document.getElementById('demoInput');
    const inputOutput = document.getElementById('inputOutput');

    // Save initial sandbox HTML for total reset capability
    const initialSandboxHTML = targetContainer.innerHTML;

    // --- Logging Helper ---
    function logAction(msg) {
      const time = new Date().toLocaleTimeString().split(' ')[0];
      const p = document.createElement('p');
      p.className = "text-xs font-mono text-brand-400";
      p.innerHTML = `<span class="text-slate-500">[${time}]</span> > ${msg}`;
      
      // Clear placeholder text if present
      if (actionLog.querySelector('p.italic')) {
        actionLog.innerHTML = '';
      }
      
      actionLog.prepend(p);
    }

    // --- Clear Highlights ---
    function clearHighlights() {
      document.querySelectorAll('.active-highlight, .parent-highlight, .sibling-highlight').forEach(el => {
        el.classList.remove('active-highlight', 'parent-highlight', 'sibling-highlight');
      });
    }

    // --- Render Controls & Code for Selected Topic ---
    function renderTopic(topicKey) {
      currentTopic = topicKey;
      const data = DOM_TOPICS[topicKey];

      // Update badge & snippet
      activeTopicBadge.textContent = data.badge;
      codeSnippetDisplay.textContent = data.snippet;

      // Render control buttons
      controlsContainer.innerHTML = '';
      data.controls.forEach(ctrl => {
        const btn = document.createElement('button');
        btn.className = "w-full bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white px-4 py-2.5 rounded-xl border border-slate-700 font-medium text-xs sm:text-sm flex items-center justify-between transition shadow-sm group";
        btn.innerHTML = `
          <span class="flex items-center gap-2.5">
            <i class="fa-solid ${ctrl.icon} text-slate-400 group-hover:text-brand-500 transition-colors"></i>
            <span>${ctrl.label}</span>
          </span>
          <i class="fa-solid fa-chevron-right text-[10px] text-slate-500 group-hover:translate-x-0.5 transition-transform"></i>
        `;
        btn.addEventListener('click', () => executeAction(ctrl.action));
        controlsContainer.appendChild(btn);
      });

      // Show/Hide special input sandbox UI when on events topic
      if (topicKey === 'events') {
        inputDemoArea.classList.remove('hidden');
      } else {
        inputDemoArea.classList.add('hidden');
      }

      logAction(`Loaded topic: <strong>${data.title}</strong>`);
    }

    // --- Action Handler Executor ---
    function executeAction(action) {
      clearHighlights();

      switch(action) {
        // Topic 1: Selecting
        case 'selectId': {
          const el = document.getElementById('mainHeading');
          el.classList.add('active-highlight');
          logAction(`Selected via ID: <code>#mainHeading</code>`);
          break;
        }
        case 'selectQuery': {
          const el = document.querySelector('.item-node');
          if (el) el.classList.add('active-highlight');
          logAction(`Selected first element matching: <code>.item-node</code>`);
          break;
        }
        case 'selectAll': {
          const items = document.querySelectorAll('.item-node');
          items.forEach(i => i.classList.add('active-highlight'));
          logAction(`Selected ALL (${items.length}) elements matching: <code>.item-node</code>`);
          break;
        }

        // Topic 2: Text & HTML
        case 'setText': {
          mainHeading.textContent = "Heading Updated via .textContent!";
          mainHeading.classList.add('active-highlight');
          logAction(`Executed: <code>heading.textContent = "..."</code>`);
          break;
        }
        case 'setHTML': {
          cardBox.innerHTML = `<p class="text-brand-400 font-bold text-center py-2"><i class="fa-solid fa-sparkles mr-2"></i>Injected custom HTML string!</p>`;
          cardBox.classList.add('active-highlight');
          logAction(`Executed: <code>cardBox.innerHTML = "..."</code>`);
          break;
        }
        case 'resetText': {
          targetContainer.innerHTML = initialSandboxHTML;
          rebindInputListener();
          logAction(`Reset card content to default HTML state.`);
          break;
        }

        // Topic 3: Styles & Attributes
        case 'applyStyle': {
          mainHeading.style.color = "#22c55e";
          mainHeading.style.backgroundColor = "rgba(34, 197, 94, 0.15)";
          mainHeading.style.borderRadius = "0.75rem";
          logAction(`Applied inline style: <code>color & backgroundColor</code>`);
          break;
        }
        case 'clearStyle': {
          mainHeading.style.color = "";
          mainHeading.style.backgroundColor = "";
          logAction(`Cleared inline styles from heading.`);
          break;
        }
        case 'setAttr': {
          const link = document.getElementById('sampleLink');
          if (link) {
            link.setAttribute('target', '_blank');
            link.setAttribute('href', 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model');
            link.classList.add('active-highlight');
            logAction(`Set attribute <code>target="_blank"</code> on sample link.`);
          }
          break;
        }

        // Topic 4: Classes
        case 'addClass': {
          cardBox.classList.add('custom-active-class');
          logAction(`Executed: <code>cardBox.classList.add('custom-active-class')</code>`);
          break;
        }
        case 'removeClass': {
          cardBox.classList.remove('custom-active-class');
          logAction(`Executed: <code>cardBox.classList.remove('custom-active-class')</code>`);
          break;
        }
        case 'toggleClass': {
          cardBox.classList.toggle('custom-active-class');
          const hasClass = cardBox.classList.contains('custom-active-class');
          logAction(`Executed: <code>classList.toggle()</code> -> Class is now <strong>${hasClass ? 'Present' : 'Absent'}</strong>`);
          break;
        }

        // Topic 5: Node Manipulation
        case 'addNode': {
          const list = document.getElementById('itemList');
          if (list) {
            const count = list.children.length + 1;
            const li = document.createElement('li');
            li.className = "item-node bg-slate-900 border border-slate-800/80 px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between text-slate-300 dom-node";
            li.innerHTML = `<span><i class="fa-solid fa-cube text-brand-500 mr-2"></i>Item Node #${count}</span><span class="text-[10px] bg-brand-500/20 text-brand-400 px-2 py-0.5 rounded">New</span>`;
            list.appendChild(li);
            li.classList.add('active-highlight');
            logAction(`Executed: <code>list.appendChild(newItem)</code> (#${count})`);
          }
          break;
        }
        case 'removeNode': {
          const list = document.getElementById('itemList');
          if (list && list.lastElementChild) {
            const text = list.lastElementChild.textContent.trim();
            list.lastElementChild.remove();
            logAction(`Executed: <code>list.lastElementChild.remove()</code>`);
          } else {
            logAction(`No node available to remove.`);
          }
          break;
        }
        case 'prependNode': {
          const list = document.getElementById('itemList');
          if (list) {
            const li = document.createElement('li');
            li.className = "item-node bg-slate-900 border border-slate-800/80 px-3 py-2 rounded-lg text-xs font-mono flex items-center justify-between text-slate-300 dom-node";
            li.innerHTML = `<span><i class="fa-solid fa-star text-amber-400 mr-2"></i>Prepended Node</span><span class="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded">Top</span>`;
            list.prepend(li);
            li.classList.add('active-highlight');
            logAction(`Executed: <code>list.prepend(topItem)</code>`);
          }
          break;
        }

        // Topic 6: Traversal
        case 'highlightParent': {
          const firstP = document.getElementById('firstParagraph');
          if (firstP) {
            firstP.classList.add('active-highlight');
            const parent = firstP.parentElement;
            parent.classList.add('parent-highlight');
            logAction(`Selected child (Green) & Highlighted <code>parentElement</code> (Blue dashed)`);
          }
          break;
        }
        case 'highlightSibling': {
          const firstP = document.getElementById('firstParagraph');
          if (firstP) {
            firstP.classList.add('active-highlight');
            const nextSib = firstP.nextElementSibling;
            if (nextSib) {
              nextSib.classList.add('sibling-highlight');
              logAction(`Selected element (Green) & Highlighted <code>nextElementSibling</code> (Yellow dotted)`);
            }
          }
          break;
        }
        case 'clearTraversal': {
          clearHighlights();
          logAction(`Cleared all tree traversal highlights.`);
          break;
        }

        // Topic 7: Input Events
        case 'focusInput': {
          demoInput.focus();
          logAction(`Triggered: <code>demoInput.focus()</code>`);
          break;
        }
        case 'clearInput': {
          demoInput.value = '';
          inputOutput.textContent = '(empty)';
          logAction(`Cleared input field value.`);
          break;
        }

        // Topic 8: Delegation
        case 'enableDelegation': {
          delegationActive = true;
          logAction(`Event delegation listener attached to <code>#itemList</code>! Click any item node inside the canvas.`);
          break;
        }
        case 'resetDelegation': {
          document.querySelectorAll('.item-node').forEach(i => i.classList.remove('custom-active-class'));
          logAction(`Reset all item delegation highlights.`);
          break;
        }
      }
    }

    // --- Input Listener Re-binder ---
    function rebindInputListener() {
      const inputEl = document.getElementById('demoInput');
      const outputEl = document.getElementById('inputOutput');
      if (inputEl && outputEl) {
        inputEl.addEventListener('input', (e) => {
          outputEl.textContent = e.target.value || '(empty)';
        });
      }
    }

    // --- Event Delegation on Live Canvas ---
    itemList.addEventListener('click', (e) => {
      const targetItem = e.target.closest('.item-node');
      if (targetItem) {
        targetItem.classList.toggle('custom-active-class');
        logAction(`Delegated Click Caught! Node: <strong>"${targetItem.querySelector('span')?.textContent || 'Item'}"</strong>`);
      }
    });

    // --- Topic Selector Change Event ---
    topicSelector.addEventListener('change', (e) => {
      renderTopic(e.target.value);
    });

    // --- Copy Code Snippet ---
    copyCodeBtn.addEventListener('click', () => {
      const snippetText = codeSnippetDisplay.textContent;
      
      // Fallback copy execution
      const textarea = document.createElement('textarea');
      textarea.value = snippetText;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        const originalText = copyCodeBtn.innerHTML;
        copyCodeBtn.innerHTML = `<i class="fa-solid fa-check text-brand-500"></i><span>Copied!</span>`;
        setTimeout(() => {
          copyCodeBtn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
      document.body.removeChild(textarea);
    });

    // --- Reset Playground ---
    resetPlaygroundBtn.addEventListener('click', () => {
      targetContainer.innerHTML = initialSandboxHTML;
      rebindInputListener();
      clearHighlights();
      logAction(`Playground canvas reset to initial state.`);
    });

    // --- Clear Action Log ---
    clearLogBtn.addEventListener('click', () => {
      actionLog.innerHTML = '<p class="text-slate-500 font-sans italic">&gt; Log cleared...</p>';
    });

    // --- Initial App Initialization ---
    window.addEventListener('DOMContentLoaded', () => {
      renderTopic('selecting');
      rebindInputListener();
    });
  </script>
</body>
</html>
```