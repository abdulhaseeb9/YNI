// ========== DATA ==========
const courses = [

  {
    id: 1,
    title: "Research Methodology",
    badge: "Batch 18",
    mentor: "Dr. Yaseen Khan",
    fee: "PKR 4,999",
    demo: "https://drive.google.com/file/d/14w7qBzoE7cU7ISmH1WAz909VcptlXssZ/view?usp=sharing",
    features: [
      "One Month Online via Zoom",
      "4 Weeks – 8 Live Classes",
      "Recording & Slides Provided",
      "Teacher Support in Premium Group",
      "Q/A in Session + E-Certificate",
      "950+ Student Community Access"
    ],
    outline: [
      "Introduction to Research",
      "Steps involved in research process",
      "How to choose a research topic",
      "Literature review – tips and tricks",
      "Boolean operations",
      "Operational definitions",
      "Sampling Techniques",
      "How to measure sample size (Practical)",
      "Study Design",
      "Case report",
      "Validity and Reliability of study",
      "Ethics and Principles of Research",
      "Synopsis writing – format and tips",
      "Data Analysis",
      "Introduction to SPSS and analysis methods",
      "Thesis writing – format and tips",
      "Citation Method"
    ]
  },
  {
    id: 2,
    title: "SPSS Data Analysis",
    badge: "Batch 4",
    mentor: "Dr. Syed Afzal Shah",
    fee: "PKR 4,999",
    demo: "https://drive.google.com/file/d/1V9lPyVohbNq3Lwqts_tLi-5ZbkadjHkI/view?usp=sharing",
    features: [
      "One Month Online via Google Meet",
      "4 Weeks – 8 Live Classes",
      "Recording & Slides Provided",
      "Teacher Support in Premium Group",
      "Q/A in Session + E-Certificate",
      "950+ Student Community Access"
    ],
    outline: [
      "Preparing and Coding Data in Excel",
      "Introduction to SPSS",
      "Frequency Distributions",
      "Measures of Central Tendency",
      "Measures of Dispersion",
      "Cross Tabulation & Relationships",
      "t-test",
      "Chi-Square Test",
      "ANOVA in SPSS",
      "Correlation (Spearman & Pearson)",
      "Simple & Multiple Regression",
      "Practical Data Analysis Projects"
    ]
  },
  {
    id: 3,
    title: "Research with AI",
    badge: "Batch 3",
    mentor: "Dr. Syed Afzal Shah",
    fee: "PKR 6,999",
    demo: "https://drive.google.com/file/d/1r9c02fNfOdyiL8FMRzhLSLjlOd3w542o/view?usp=sharing",
    features: [
      "2 Weeks Practical Course – 4 Classes",
      "Live Class on Google Meet",
      "Recording & Slides Provided",
      "Teacher Support in Premium Group",
      "Q/A in Session + E-Certificate",
      "Tools: ChatGPT, Jenni, Turnitin, Grammarly, QuillBot and many more..."
    ],
    outline: [
      "Finding a Research Topic with AI",
      "Writing the Background of Study with AI",
      "Developing a Strong Problem Statement",
      "Writing Research Objectives & Questions",
      "AI-Based Literature Review",
      "Using AI to Identify Research Gaps",
      "Writing Research Methodology with AI",
      "Data Analysis with AI Tools",
      "Writing Results and Discussion",
      "Checking Plagiarism & Originality"
    ]
  },
  {
    id: 4,
    title: "Graphic Designing & Video Editing (Canva)",
    badge: "Batch 3",
    mentor: "Moazzma Muratab",
    fee: "PKR 2,999",
    demo: null,
    features: [
      "One Month Online via Google Meet",
      "4 Weeks – 8 Live Classes",
      "Live Class & Recording Provided",
      "Teacher Support in Premium Group",
      "Q/A in Session + E-Certificate",
      "Tool: Canva (All-in-One)"
    ],
    outline: [
      "Canva Introduction & Design Fundamentals",
      "Canva Tools, Elements & Layout Control",
      "Color Theory, Typography & Branding",
      "Social Media & Marketing Designs",
      "Instagram Post Design",
      "Facebook Post Design",
      "Canva for Business & Ads",
      "Canva Video Editing Overview",
      "Video Templates & Timeline",
      "Text Animations & Transitions",
      "Beat Sync & Timing",
      "Stock Videos & Music",
      "Voice-over & Subtitles",
      "Magic Design"
    ]
  }
];

// ========== MENTORS DATA ==========
const mentors = [
  {
    id: 1,
    name: "Dr. Yaseen Khan",
    role: "Research Methodology Expert",
    image: "assets/dryaseenpic.png",
    bio: "PhD scholar and experienced researcher specializing in research methodology, thesis writing, and academic publications. Has trained 500+ students across Pakistan in research techniques.",
    expertise: [
      "Research Design & Methodology",
      "Thesis & Synopsis Writing",
      "Literature Review Techniques",
      "Citation & Referencing (APA, MLA)",
      "Academic Publishing",
      "Sampling & Data Collection"
    ]
  },
  {
    id: 2,
    name: "Dr. Syed Afzal Shah",
    role: "SPSS & AI Research Specialist",
    image: "assets/drafzalpic.jpg",
    bio: "PhD in Education with extensive expertise in statistical analysis, SPSS, and AI-powered research tools. Published author and trainer with international research experience.",
    expertise: [
      "SPSS Data Analysis",
      "Statistical Modeling",
      "AI Tools for Research (ChatGPT, Jenni)",
      "Quantitative Research",
      "Regression & ANOVA",
      "Data Interpretation"
    ]
  },
  {
    id: 3,
    name: "Moazzma Muratab",
    role: "Graphic Design & Video Editing Expert",
    image: "assets/moazzmapic.jpg",
    bio: "Creative designer specializing in Canva, branding, and video editing. Has helped 200+ students build creative portfolios and design skills for freelancing and marketing.",
    expertise: [
      "Canva Design Mastery",
      "Social Media Graphics",
      "Video Editing & Animation",
      "Brand Identity Design",
      "Typography & Color Theory",
      "Marketing Materials"
    ]
  }
];

const feedbacks = [
  { name: "Ayesha Malik", course: "SPSS Student", text: "The SPSS course completely changed the way I handle data. Dr. Afzal explains every concept so clearly. Highly recommended!", rating: 5 },
  { name: "Muhammad Ali", course: "Research Methodology", text: "Dr. Yaseen Khan's teaching is exceptional. The course helped me finalize my thesis with confidence.", rating: 5 },
  { name: "Fatima Noor", course: "Research with AI", text: "Learning AI tools for research saved me weeks of work. Best investment I ever made in my academic career!", rating: 5 },
  { name: "Hassan Ahmed", course: "Graphic Designing", text: "Moazzma is an amazing mentor. I learned Canva from zero and now design professionally for clients!", rating: 5 },
  { name: "Sana Rehman", course: "SPSS Student", text: "Live classes, recordings, and support group — everything was perfect. The certificate is a bonus!", rating: 5 },
  { name: "Bilal Khan", course: "Research Methodology", text: "Affordable fee, world-class teaching. The WhatsApp community keeps you motivated every day.", rating: 5 },
  { name: "Zainab Iqbal", course: "Research with AI", text: "I never thought AI could help in research this much. This course opened a new world for me!", rating: 5 },
  { name: "Usman Tariq", course: "Canva Student", text: "Best graphic design course on a budget. Learned logo, banner, and video editing all in one!", rating: 5 }
];

// ========== RENDER COURSES ==========
const courseGrid = document.getElementById('courseGrid');
courses.forEach(c => {
  const demoBtn = c.demo 
    ? `<a href="${c.demo}" target="_blank" class="btn btn-demo btn-sm"><i class="fas fa-play-circle"></i> Demo Class</a>` 
    : `<a href="https://wa.me/923315770902?text=I%20want%20demo%20class%20for%20${encodeURIComponent(c.title)}" target="_blank" class="btn btn-demo btn-sm"><i class="fas fa-play-circle"></i> Request Demo</a>`;

  courseGrid.innerHTML += `
    <div class="course-card">
      <div class="course-badge">${c.badge}</div>
      <h3>${c.title}</h3>
      <p class="mentor-tag"><i class="fas fa-user-tie"></i> ${c.mentor}</p>
      <div class="course-fee"><i class="fas fa-tag"></i> ${c.fee}</div>
      
      <div class="course-hover-features">
        <h4><i class="fas fa-star"></i> Course Features</h4>
        <ul>
          ${c.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('')}
        </ul>
      </div>
      
      <div class="course-btns">
        <button class="btn btn-primary btn-sm" onclick="showOutline(${c.id})"><i class="fas fa-list-ul"></i> View Outline</button>
        ${demoBtn}
        <a href="https://wa.me/923315770902?text=I%20want%20to%20enroll%20in%20${encodeURIComponent(c.title)}%20course" target="_blank" class="btn btn-enroll btn-sm"><i class="fab fa-whatsapp"></i> Enroll</a>
      </div>
    </div>
  `;
});

// ========== RENDER MENTORS ==========
const mentorGrid = document.getElementById('mentorGrid');
mentors.forEach(m => {
  mentorGrid.innerHTML += `
    <div class="mentor-card" onclick="showMentor(${m.id})">
      <div class="mentor-img-wrap">
        <img src="${m.image}" alt="${m.name}" class="mentor-img" onerror="this.src='https://via.placeholder.com/200x200/0f1c4d/ffffff?text=${encodeURIComponent(m.name.charAt(0))}'"/>
      </div>
      <h3>${m.name}</h3>
      <p class="role">${m.role}</p>
      <p>${m.bio.substring(0, 80)}...</p>
      <button class="btn btn-primary btn-sm" style="margin-top:12px;"><i class="fas fa-eye"></i> View Profile</button>
    </div>
  `;
});


// ========== RENDER FEEDBACKS (duplicate for seamless scroll) ==========
const feedbackTrack = document.getElementById('feedbackTrack');
const allFb = [...feedbacks, ...feedbacks];
allFb.forEach(f => {
  const stars = '★'.repeat(f.rating);
  const initials = f.name.split(' ').map(n => n[0]).join('');
  feedbackTrack.innerHTML += `
    <div class="feedback-card">
      <div class="stars">${stars}</div>
      <p>"${f.text}"</p>
      <div class="feedback-user">
        <div class="feedback-avatar">${initials}</div>
        <div>
          <h4>${f.name}</h4>
          <span>${f.course}</span>
        </div>
      </div>
    </div>
  `;
});

// ========== MODAL ==========
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function showOutline(id) {
  const c = courses.find(x => x.id === id);
  modalBody.innerHTML = `
    <h2>${c.title} – Course Outline</h2>
    <p style="color:#666;margin-bottom:15px;"><i class="fas fa-user-tie" style="color:var(--accent)"></i> Mentor: ${c.mentor} | <i class="fas fa-tag" style="color:var(--accent)"></i> ${c.fee}</p>
    <h3>What You'll Learn:</h3>
    <ul>${c.outline.map(o => `<li>${o}</li>`).join('')}</ul>
    <div style="text-align:center;margin-top:25px;">
      <a href="https://wa.me/923315770902?text=I%20want%20to%20enroll%20in%20${encodeURIComponent(c.title)}" target="_blank" class="btn btn-primary"><i class="fab fa-whatsapp"></i> Register Now</a>
    </div>
  `;
  modal.classList.add('active');
}

function showMentor(i) {
  const m = mentors[i];
  modalBody.innerHTML = `
    <div class="modal-mentor-img"><i class="fas fa-user-graduate"></i></div>
    <h2 style="text-align:center;">${m.name}</h2>
    <p class="modal-role">${m.role}</p>
    <h3>Qualifications & Experience:</h3>
    <ul>${m.details.map(d => `<li>${d}</li>`).join('')}</ul>
  `;
  modal.classList.add('active');
}

modalClose.addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
// ========== SHOW MENTOR MODAL ==========
function showMentor(id) {
  const m = mentors.find(x => x.id === id);
  document.getElementById('modalBody').innerHTML = `
    <div class="modal-mentor-img-wrap">
      <img src="${m.image}" alt="${m.name}" class="modal-mentor-img" onerror="this.src='https://via.placeholder.com/200x200/0f1c4d/ffffff?text=${encodeURIComponent(m.name.charAt(0))}'"/>
    </div>
    <h2 style="text-align:center">${m.name}</h2>
    <p class="modal-role">${m.role}</p>
    <p style="text-align:center;color:#555;margin-bottom:20px;font-size:14px">${m.bio}</p>
    <h3><i class="fas fa-star"></i> Areas of Expertise</h3>
    <ul>${m.expertise.map(e => `<li>${e}</li>`).join('')}</ul>
  `;
  document.getElementById('modal').classList.add('active');
}
// ========== MOBILE HAMBURGER MENU ==========
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const menuOverlay = document.getElementById('menuOverlay');

function toggleMenu() {
  menuToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
  menuOverlay.classList.toggle('active');
  document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
  menuToggle.classList.remove('active');
  navLinks.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

menuToggle.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', closeMenu);

document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', closeMenu)
);

// Close menu on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// ========== WHATSAPP FORM ==========
function sendWhatsApp(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const course = document.getElementById('course').value;
  const message = document.getElementById('message').value;
  const text = `Hello Yaseen Nexus Institute,%0A%0AName: ${name}%0AEmail: ${email}%0ACourse: ${course}%0AMessage: ${message}`;
  window.open(`https://wa.me/923315770902?text=${text}`, '_blank');
}

// ========== SCROLL ANIMATION ==========
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

setTimeout(() => {
  document.querySelectorAll('.about-card, .course-card, .mentor-card').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
}, 100);
