const events = [
  {id:1,title:"Tech Hackathon 2026",date:"25 Oct 2026",venue:"College Auditorium",icon:"💻",desc:"Build innovative solutions with your team."},
  {id:2,title:"Annual Tech Fest",date:"30 Oct 2026",venue:"Main Block",icon:"🚀",desc:"Talks, workshops and technology challenges."},
  {id:3,title:"Cultural Fest",date:"5 Nov 2026",venue:"College Ground",icon:"🎭",desc:"Music, dance, art and cultural performances."},
  {id:4,title:"AI Workshop",date:"12 Nov 2026",venue:"Seminar Hall",icon:"🤖",desc:"Hands-on introduction to practical AI."},
  {id:5,title:"Career Connect",date:"20 Nov 2026",venue:"Placement Cell",icon:"💼",desc:"Meet recruiters and learn about careers."},
  {id:6,title:"Sports Meet",date:"28 Nov 2026",venue:"College Stadium",icon:"🏆",desc:"Inter-department sports competition."}
];

let selectedEvent = null;
let registrations = JSON.parse(localStorage.getItem("eventRegistrations") || "[]");

function renderEvents(list = events){
  const grid = document.getElementById("eventGrid");
  grid.innerHTML = list.length ? list.map(e => `
    <article class="card">
      <div class="icon">${e.icon}</div>
      <h3>${e.title}</h3>
      <div class="meta">📅 ${e.date}<br>📍 ${e.venue}<br>${e.desc}</div>
      <button class="btn" onclick="openModal(${e.id})">Register</button>
    </article>
  `).join("") : "<div class='empty'>No events found.</div>";
}

function renderRegistrations(){
  const box = document.getElementById("registrationList");
  if(!registrations.length){
    box.innerHTML = "<div class='empty'>No registrations yet. Register for an event above.</div>";
    return;
  }
  box.innerHTML = registrations.map((r,i) => `
    <div class="registration">
      <div><strong>${r.event}</strong><br><small>${r.name} • ${r.email}<br>Registered on ${r.registeredAt}</small></div>
      <button class="btn" onclick="removeRegistration(${i})">Cancel</button>
    </div>
  `).join("");
}

function openModal(id){
  selectedEvent = events.find(e => e.id === id);
  document.getElementById("modalTitle").textContent = selectedEvent.title;
  document.getElementById("modalInfo").textContent = `${selectedEvent.date} • ${selectedEvent.venue}`;
  document.getElementById("successMessage").textContent = "";
  document.getElementById("registrationForm").reset();
  document.getElementById("modal").classList.remove("hidden");
}

function closeModal(){document.getElementById("modal").classList.add("hidden")}

document.getElementById("registrationForm").addEventListener("submit", function(e){
  e.preventDefault();
  const registration = {
    event:selectedEvent.title,
    name:document.getElementById("name").value.trim(),
    email:document.getElementById("email").value.trim(),
    phone:document.getElementById("phone").value.trim(),
    registeredAt:new Date().toLocaleString()
  };
  registrations.push(registration);
  localStorage.setItem("eventRegistrations", JSON.stringify(registrations));
  document.getElementById("successMessage").textContent = "✓ Registration successful!";
  renderRegistrations();
  setTimeout(closeModal, 900);
});

function removeRegistration(index){
  registrations.splice(index,1);
  localStorage.setItem("eventRegistrations", JSON.stringify(registrations));
  renderRegistrations();
}

document.getElementById("searchInput").addEventListener("input", function(){
  const q = this.value.toLowerCase();
  renderEvents(events.filter(e => (e.title + e.venue + e.desc).toLowerCase().includes(q)));
});

renderEvents();
renderRegistrations();
