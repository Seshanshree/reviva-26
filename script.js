
const workshopDate = new Date(2026, 3, 9, 9, 0, 0).getTime();

const countdown = setInterval(function () {

  const now = new Date().getTime();
  const distance = workshopDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // When event starts
  if (distance < 0) {
    clearInterval(countdown);
    document.querySelector(".countdown").innerHTML = 
      "<h2>Workshop Started!</h2>";
  }

}, 1000);






// ============ EVENTS DATA ============
const events = [
  { id: 1, icon: "📄", name: "InnoPaper Summit", category: "PAPER PRESENTATION", short: "Present your research paper to a panel of expert judges and win recognition for your academic brilliance.", rules: ["Abstract submission required", "Max 5 members per team", "PPT mandatory", "10 min presentation", "IEEE format preferred"], solo: "₹200", team: "₹800 (Team of 5)" },
  { id: 2, icon: "🏗️", name: "Future Builders Arena", category: "PROJECT EXPO", short: "Showcase your innovative project prototype and pitch it like a startup to our industry expert panel.", rules: ["Max 5 members per team", "Working prototype must be brought", "5-minute pitch + demo", "Innovation & feasibility judged", "Hardcopy of report required"], solo: "₹200", team: "₹800 (Team of 5)" },
  // { id: 3, icon: "💡", name: "TechSphere Talks", category: "TECHNICAL QUIZ", short: "A high-voltage technical quiz covering electronics, communications, circuits, and cutting-edge technology.", rules: ["Teams of 2 members", "3 rounds: Prelims, Semi-finals, Finals", "No electronic devices in quiz hall", "Rapid fire in final round", "Judge's decision is final"], solo: "₹200", team: "₹800 (Team of 5)" },
  { id: 3, icon: "💡", name: "TechSphere Talks", category: "TECHNICAL QUIZ", short: "A high-voltage technical quiz covering electronics, communications, circuits, and cutting-edge technology.", rules: ["Individual event","3 rounds: Prelims, Semi-finals, Finals", "No electronic devices in quiz hall", "Rapid fire in final round", "Judge's decision is final"], solo: "₹200", team: "₹200 (Solo)" },
  { id: 4, icon: "🧩", name: "Mind Maze", category: "PUZZLE & LATERAL THINKING", short: "Navigate through complex technical puzzles, riddles, and lateral thinking challenges that test your engineering mind.", rules: ["Individual event", "3 levels of difficulty", "No internet access permitted", "Scoring based on accuracy & speed"], solo: "₹200", team: "₹200 (Solo)" },
  { id: 5, icon: "🧠", name: "Brain Blitz", category: "TECHNICAL GK", short: "A rapid-fire technical general knowledge battle covering all ECE domains from signals to semiconductors.", rules: ["Individual event", "Multiple choice", "Final round is live buzzer battle"], solo: "₹200", team: "₹200 (Solo)" },
  { id: 6, icon: "🐞", name: "Bug Busters", category: "DEBUGGING CHALLENGE", short: "Hunt down and destroy bugs like broken C, Python, and MATLAB code under intense time pressure.", rules: ["Individual event","Languages Like: C, Python, Embedded C","Partial marks for partial fixes"], solo: "₹200", team: "₹200 (Solo)" },
  { id: 7, icon: "⚡", name: "Electrofix", category: "HARDWARE TROUBLESHOOTING", short: "Diagnose and repair malfunctioning electronic circuits using your hands, tools, and engineering instincts.", rules: ["Individual event", "Faulty circuit boards provided", "Tools available at venue", "Judged on accuracy & explanation"], solo: "₹200", team: "₹200 (Solo)" },
  // { id: 8, icon: "🔩", name: "Circuit Wars", category: "CIRCUIT DESIGN", short: "Design the most efficient, innovative circuit from a given set of components to solve a real-world engineering problem.", rules: ["Teams of 2-3", "Components provided on-site", "30-minute design + build time", "Judged on efficiency & creativity", "Simulation tools permitted"], solo: "₹200", team: "₹200 (Solo)" },
  // { id: 9, icon: "💻", name: "Code Blitz", category: "SPEED CODING", short: "Race against the clock and other coders to solve algorithmic problems. Speed, accuracy, and logic are your weapons.", rules: ["Individual event", "5 problems in 60 minutes", "Languages: C, Python, Java", "Online judge system", "Ranked by problems solved & time"], solo: "₹200", team: "₹200 (Solo)" },
  // { id: 10, icon: "🤖", name: "Robo Combat", category: "ROBOTICS ARENA", short: "Build a battle-ready manual robot and compete in a thrilling head-to-head arena combat for robotic supremacy.", rules: ["Teams of 2-4", "Robot specs shared in advance", "Max weight: 5 kg", "No external power source", "Double elimination format"], solo: "₹200", team: "₹200 (Solo)" }
];

// ============ RENDER EVENTS ============
function renderEvents() {
  const grid = document.getElementById('events-grid');
  grid.innerHTML = events.map(e => `
    <div class="event-card" id="ec-${e.id}">
      <div class="event-card-header" onclick="toggleEvent(${e.id})">
        <span class="event-icon">${e.icon}</span>
        <div>
          <div class="event-card-title">${e.name}</div>
          <div class="event-category">${e.category}</div>
        </div>
      </div>
      <div class="event-card-body">
        <p>${e.short}</p>
        <div class="event-meta">
          <span class="event-tag gold">🏆 Cash Prize</span>
          <span class="event-tag purple">📋 Certificate</span>
          <span class="event-tag">Solo: ${e.solo}</span>
        </div>
      </div>
      <div class="event-details" id="ed-${e.id}">
        <div class="event-details-inner">
          <h4>📋 RULES & GUIDELINES</h4>
          <ul>${e.rules.map(r => `<li>${r}</li>`).join('')}</ul>
          <div class="event-register-row">
            <div class="event-fee">
              👤 Solo: ${e.solo}<br>
              👥 Team: ${e.team}
            </div>
            <a class="btn-register" href="https://forms.gle/CdBJDXgobRcPiYz87" target="_blank">REGISTER NOW </a>
          </div>
        </div>
      </div>
      <div class="event-expand" onclick="toggleEvent(${e.id})" id="expand-${e.id}">▼ CLICK TO VIEW DETAILS</div>
    </div>
  `).join('');
}

// ============ RENDER REGISTER ============
function renderRegister() {
  const grid = document.getElementById('reg-grid');
  grid.innerHTML = events.map(e => `
    <div class="reg-card">
      <div class="reg-card-icon">${e.icon}</div>
      <h3>${e.name}</h3>
      <div class="reg-fees">
        <div class="reg-fee-row"><span>Individual</span><span>${e.solo}</span></div>
        <div class="reg-fee-row"><span>Team (up to 5)</span><span>${e.team}</span></div>
      </div>
      <a class="btn-register" style="width:100%;text-align:center;display:block" href="https://forms.gle/CdBJDXgobRcPiYz87" target="_blank">REGISTER </a>
    </div>
  `).join('');
}

function toggleEvent(id) {
  const det = document.getElementById('ed-' + id);
  const exp = document.getElementById('expand-' + id);
  det.classList.toggle('open');
  exp.textContent = det.classList.contains('open') ? '▲ CLICK TO COLLAPSE' : '▼ CLICK TO VIEW DETAILS';
}

// ============ NAVIGATION ============
const sections = ['home', 'about', 'events', 'schedule', 'prizes', 'register', 'venue', 'contact'];
let currentSection = 'home';

function navigate(id) {
  if (id === currentSection) return;
  const flash = document.getElementById('page-flash');
  flash.classList.add('flash');
  triggerThunderSound();
  setTimeout(() => {
    sections.forEach(s => {
      document.getElementById(s).classList.remove('active');
      document.getElementById('nav-' + s).classList.remove('active');
      const mob = document.getElementById('mob-' + s);
      if (mob) mob.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
    document.getElementById('nav-' + id).classList.add('active');
    const mob = document.getElementById('mob-' + id);
    if (mob) mob.classList.add('active');
    currentSection = id;
    window.scrollTo(0, 0);
    flash.classList.remove('flash');
  }, 200);
}

// ============ SCHEDULE TABS ============
function switchDay(day) {
  document.querySelectorAll('.sched-tab').forEach((t, i) => t.classList.toggle('active', i === day - 1));
  document.getElementById('day1').classList.toggle('active', day === 1);
  document.getElementById('day2').classList.toggle('active', day === 2);
}

// ============ INTRO ============
// let introSkipped = false;
// function skipIntro() {
//     if (introSkipped) return;
//     introSkipped = true;
//     const overlay = document.getElementById('intro-overlay');
//     const vid = document.getElementById('intro-video');
//     vid.pause();
//     overlay.classList.add('hidden');
//     document.getElementById('main-header').style.display = 'block';
//     setTimeout(() => { overlay.style.display = 'none'; }, 1000);
//     triggerThunderSound();
// }

// window.addEventListener('load', () => {
//     const vid = document.getElementById('intro-video');
//     vid.volume = 0.7;
//     vid.play().catch(() => { });
//     vid.addEventListener('ended', () => { skipIntro(); });
//     setTimeout(() => {
//         if (!introSkipped) skipIntro();
//     }, 12000);
//     renderEvents();
//     renderRegister();
//     createParticles();
// });

let introSkipped = false;

function stopBgAudio() {
  const audio = document.getElementById('bg-audio');
  if (audio) { audio.pause(); audio.currentTime = 0; }
}

function skipIntro() {
  if (introSkipped) return;
  introSkipped = true;
  const overlay = document.getElementById('intro-overlay');
  const vid = document.getElementById('intro-video');
  vid.pause();
  stopBgAudio();
  overlay.classList.add('hidden');
  document.getElementById('main-header').style.display = 'block';
  setTimeout(() => { overlay.style.display = 'none'; }, 1000);
  triggerThunderSound();
}

window.addEventListener('load', () => {
  const vid = document.getElementById('intro-video');
  const audio = document.getElementById('bg-audio');
  vid.volume = 0.7;

  // Audio plays only when intro video is playing
  vid.addEventListener('play', () => {
    if (!introSkipped && audio && audio.src) {
      audio.volume = 0.5;
      audio.play().catch(() => { });
    }
  });
  vid.addEventListener('pause', () => { if (audio) audio.pause(); });
  vid.addEventListener('ended', () => { stopBgAudio(); skipIntro(); });

  vid.play().catch(() => { });
  setTimeout(() => { if (!introSkipped) skipIntro(); }, 12000);
  renderEvents();
  renderRegister();
  createParticles();
});





// ============ THUNDER SOUND ============
function triggerThunderSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const buf = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
    // const buf = ctx.createBuffer(1, ctx.sampleRate * 0.8, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < data.length; i++) {
      const t = i / ctx.sampleRate;
       data[i] = (Math.random() * 2 -1) * Math.exp(-t * 1) * (Math.sin(0.1 * Math.PI * 5 * t) + 0.1 * Math.sin(0.1 * Math.PI * 5 * t));
      // data[i] = (Math.random() * 2 - 1) * Math.exp(-t * 4) * (Math.sin(2 * Math.PI * 80 * t) + 0.3 * Math.sin(2 * Math.PI * 40 * t));
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const gain = ctx.createGain();
    gain.gain.value = 0.4;
    // gain.gain.value = 0.4;
    src.connect(gain);
    gain.connect(ctx.destination);
    src.start();
  } catch (e) { }
}


// ============ MOBILE MENU ============
function toggleMobile() {
  document.getElementById('mobile-menu').classList.toggle('open');
}

// ============ CURSOR ============
const cursor = document.getElementById('cursor');
const trail = document.getElementById('cursor-trail');
let tx = 0, ty = 0;
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
  }, 90);
});

// ============ CLICK THUNDER ============
document.addEventListener('click', e => {
  const el = document.getElementById('thunder-click');
  el.style.setProperty('--cx', e.clientX + 'px');
  el.style.setProperty('--cy', e.clientY + 'px');
  el.classList.remove('bang');
  void el.offsetWidth;
  el.classList.add('bang');
  triggerThunderSound();
});

// ============ PARTICLES ============
function createParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.setProperty('--duration', (8 + Math.random() * 12) + 's');
    p.style.setProperty('--drift', (Math.random() * 60 - 30) + 'px');
    p.style.animationDelay = (Math.random() * 12) + 's';
    p.style.width = p.style.height = (Math.random() * 3 + 1) + 'px';
    const hue = Math.random() > 0.5 ? '180' : '270';
    p.style.background = `hsl(${hue},100%,70%)`;
    container.appendChild(p);
  }
}