
/* Sample data — replace with your own or fetch from API */
const researchers = [
  { 
    name: 'Dr. Hadi Affendy Dahlan', 
    role: 'Head of Lab', 
    area: 'B.E (UIA), MSc (UPMalaysia),  PhD (University of York, UK)', 
    email: 'had86@ukm.edu.my', 
    interests: ['Remote Monitoring', 'Pattern Recognition'], 
    orcid: '+03 - 8921  6070' 
  },
  { 
    name: 'Prof. Dr. Mohd Juzaiddin Ab Aziz', 
    role: 'Professor', 
    area: 'Dip S.Komp(UPMalaysia), SmSn, STM(UKMalaysia), Ph.D(UPMalaysia)', 
    email: 'juzaiddin@ukm.edu.my', 
    interests: ['Knowledge Work', 'Automation'], 
    orcid: '+03 - 8921 6743' 
  },
  { 
    name: 'Assoc. Prof. Dr. Elankovan Sundararajan', 
    role: 'Associate Professor', 
    area: 'SmSn, SSn(UKMalaysia), PhD (Melb)', 
    email: 'elan@ukm.edu.my', 
    interests: ['Cloud Technology', 'Parallel & Distributed Computing', 'Big Data', 'Computer & Sensor Network'], 
    orcid: '+03 - 8921 6096/ 6665' 
  },
  { 
    name: 'Dr. Dahlila Putri Dahnil', 
    role: 'Senior Lecturer', 
    area: 'B.Eng. Electronics Comm (Sheffield), MSc (UTMalaysia), Ph.D(MMUniversity, Malaysia)', 
    email: 'mrm@ukm.edu.my', 
    interests: ['IoT', 'Wireless Sensor Network'], 
    orcid: '+03 - 8921 6665   ' 
  },
  { 
    name: 'Ts. Dr. Fazlina Mohd Ali', 
    role: 'Senior Lecturer', 
    area: 'BCSc.(UPMalaysia), MSc.IT(UITMara), PhD(UPMalaysia)', 
    email: 'fazlina.mohdali@ukm.edu.my', 
    interests: ['Parallel and Distributed Computing', 'Data Management / Data Replication', 'Cloud Computing', 'Information System Management / ICT Project Management'], 
    orcid: '+03 - 8921 6710' 
  },
  { 
    name: 'Ts. Dr. Mohammad Kamrul Hasan', 
    role: 'Associate Researcher', 
    area: 'CYBER, FTSM UKM', 
    email: 'mkhasan@ukm.edu.my', 
    interests: ['Artificial Intelligence', 'Mobile Communication', 'Sensor Network'], 
    orcid: '+03 - 8921 6167' 
  },
  { 
    name: 'Dr. Faizan Qamar', 
    role: 'Associate Researcher', 
    area: 'CYBER, FTSM UKMG & IoT', 
    email: 'faizanqamar@ukm.edu.my', 
    interests: ['5G Cellular Communications', 'Internet of Things (IoT)', 'Network Quality of Service', 'Wireless Network Design'], 
    orcid: '+03-8911 8269' 
  }
];

// const students = [
//   { name:'Amri Bin Z.', level:'PhD', topic:'Data Segregation in Hybrid Cloud', supervisor:'Dr. Faiz Rahman', email:'amri@univ.edu' },
//   { name:'Alya Zahra', level:'Masters', topic:'Usability of GenAI in Learning', supervisor:'Dr. Aaron Lim', email:'alya@univ.edu' },
//   { name:'Ridzuan K.', level:'Masters', topic:'Edge Offloading for AR', supervisor:'Dr. Faiz Rahman', email:'ridzuan@univ.edu' },
//   { name:'Tan Wei', level:'Undergraduate', topic:'GPU Scheduling Visualizer', supervisor:'Dr. Nur Aisyah', email:'tanwei@univ.edu' },
//   { name:'Saras A.', level:'PhD', topic:'Adversarial Robustness', supervisor:'Dr. Siti Khalida', email:'saras@univ.edu' },
// ];

const students = [
  { name: 'Hussein Al-Omaisi', level: 'PhD', topic: 'Vehicular Networking, Information-Centric Networking, Routing Protocols, Wireless Networks', supervisor: '', email: 'alomaisi.hussein@gmail.com', phone: '+60 176 360 527' },
  { name: 'Zhang Tianxing', level: 'PhD', topic: 'Multimodal Emotion Recognition in teaching, Intelligent Transportation System (ITS), IoT, Machine learning, Artificial intelligence applications', supervisor: '', email: 'P117810@siswa.ukm.edu.my', phone: '+8613859028978' },
  { name: 'Zhou Qin', level: 'PhD', topic: 'Information Systems', supervisor: '', email: 'P121139@siswa.ukm.edu.my', phone: '+8616623316632' },
  { name: 'Cao Jing', level: 'PhD', topic: 'SLR, deep learning, NLP', supervisor: '', email: 'P125898@siswa.ukm.edu.my', phone: '+8618566205529' },
  { name: 'Li Shihao', level: 'PhD', topic: 'IoT, Information Systems, Knowledge Graph', supervisor: '', email: 'P125236@siswa.ukm.edu.my', phone: '+8615521438748' },
  { name: 'Amzari Bin Mohd Roslan', level: 'Master', topic: 'Hybrid Cloud Computing, Data Security & Encryption', supervisor: '', email: 'P146040@siswa.ukm.edu.my', phone: '+60139080721' },
];

// const grants = [
//   { id:1, title:'Secure Data Segregation for Hybrid Clouds', pi:'Dr. Faiz Rahman', amount:250000, start:'2024-04-01', end:'2026-03-31', status:'Active' },
//   { id:2, title:'Human-Centered GenAI for Classrooms', pi:'Dr. Aaron Lim', amount:180000, start:'2023-01-01', end:'2025-12-31', status:'Active' },
//   { id:3, title:'Zero-Trust Platform for SMEs', pi:'Dr. Siti Khalida', amount:300000, start:'2021-07-01', end:'2024-06-30', status:'Completed' },
//   { id:4, title:'Kubernetes Operator for Edge AI', pi:'Dr. Nur Aisyah', amount:220000, start:'2022-02-01', end:'2024-01-31', status:'Completed' },
//   { id:5, title:'Data Lakehouse for Public Sector', pi:'Ir. Haziq Jamal', amount:150000, start:'2025-01-01', end:'2027-12-31', status:'Pending' }
// ];
const grants = [
  { id: 1, title: 'Digital Transformation Model for Sustainability and Productivity of Cloud based solution in the Higher Education Sector. FRGS 2023-1', pi: '', amount: '', start: '', end: '', status: 'Pending' },
  { id: 2, title: 'A New Lightweight Authentication and Key Establishment Scheme for 6LoWPAN-based Wireless Sensor Networks, FRGS/1/2022/ICT11/UKM/02/2', pi: '', amount: '', start: '', end: '', status: 'Active' },
  { id: 3, title: 'A self-regulated learning system to improve al-quran learning for the visually impaired people, UKM-TR2022-04', pi: '', amount: '', start: '', end: '', status: 'Active' },
  { id: 4, title: 'Integrating adaptive radio resource allocation and energy harvesting technique for future green communication systems, GGPM-2020-029', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 5, title: 'Enhancing learning process for al-quran equipped with tajwid using a self-learning tool embedded on a special device, DCP-2018-001/2', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 6, title: 'Clustering of Evolving Data Streams in the Environment and Climate Change, FRGS/1/2018/ICT04/UKM/02/1', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 7, title: 'Machine Learning Data Analytics for Adult Obesity Intervention, DIP-2018-041', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 8, title: 'Resilience and regenerative tropical smart building : smart & responsive façade, AP-2017-006/4', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 9, title: 'Pengesahan model pemilihan kerjaya stem dalam kalangan pelajar dan pembentukan intervensi meningkatkan pemilihan kerjaya stem, AP-2015-001', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 10, title: 'Adaptive Congestion Control Scheme for High Performance TCP in Multi-hop Wireless Networks, DIP-2014-037', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 11, title: 'A novel plant root-based evolutionary algorithm to solve Mobile Cloud Computing Workflow Scheduling Problem, FRGS/1/2014/ICT07/UKM/02/1', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 12, title: 'Word sense disambiguation using language resources for transliteration of Arabic, FRGS/1/2012/SG05/UKM/02/14', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 13, title: 'New techniques for sentence similarity computation, UKM-GUP-2011-241', pi: '', amount: '', start: '', end: '', status: 'Completed' },
  { id: 14, title: 'Penyemak peperiksaan esei bahasa melayu secara automatic, UKM-DIPM-039-2011', pi: '', amount: '', start: '', end: '', status: 'Completed' }
];

// const publications = [
//   { year:2025, title:'A Systematic Review of Data Segregation Strategies in Hybrid and Multi‑Cloud Environments', authors:'A. Bin Z., F. Rahman', venue:'Journal of Cloud Systems', link:'#' },
//   { year:2024, title:'Trustworthy MLOps: Policy‑Driven Governance for LLMs', authors:'N. Aisyah, H. Jamal', venue:'IEEE Software', link:'#' },
//   { year:2024, title:'Edge Offloading for AR: A Survey', authors:'R. K., F. Rahman', venue:'ACM Computing Surveys', link:'#' },
//   { year:2023, title:'Designing GenAI for Inclusive Learning', authors:'A. Lim, A. Zahra', venue:'CHI EA', link:'#' },
//   { year:2022, title:'Threat Modeling for Microservice Mesh', authors:'S. Khalida', venue:'Computers & Security', link:'#' }
// ];

const publications = [
  { year: 2018, title: 'An efficient handover decision in heterogeneous LTE-A networks under the assistance of users profile', authors: 'Rami Ahmad, Elankovan A. Sundararajan, Nor E. Othman, Mahamod Ismail', venue: 'Telecommunication Systems', link: '' },
  { year: 2018, title: 'Efficient handover in LTE-A by using mobility pattern history and user trajectory prediction', authors: 'Rami Ahmad, Elankovan A Sundararajan, Nor E. Othman, Mahamod Ismail', venue: 'Arabian Journal for Science and Engineering', link: '' },
  { year: 2016, title: 'A Parallel Membrane Inspired Harmony Search for Optimization Problems: A Case Study Based on a Flexible Job Shop Scheduling Problem', authors: 'Ali Maroosi, Ravie Chandren Muniyandi, Elankovan Sundararajan, Abdullah Mohd Zin', venue: 'Applied Soft Computing', link: '' },
  { year: 2015, title: 'Imperialist Competitive Algorithm with PROCLUS Classifier for Service Time Optimization in Cloud Computing Service Composition', authors: 'Amin Jula, Zalinda Othman, Elankovan Sundararajan', venue: 'Expert Systems with Application', link: '' },
  { year: 2021, title: 'A survey on deep learning face age estimation model: method and ethnicity', authors: 'Hadi Affendy Dahlan', venue: 'International Journal of Advanced Computer Science and Applications (IJACSA)', link: '' },
  { year: 2022, title: 'Face age estimation using shortcut identity connection of convolutional neural network', authors: 'Shohel Pramanik, Hadi Affendy Dahlan', venue: 'International Journal of Advanced Computer Science and Applications (IJACSA)', link: '' },
  { year: 2022, title: 'Assessing usability of learning experience prototype', authors: 'Ratna Zuarni Ramli, Noraidah Sahari @ Ashaari, Siti Fadzilah Mat Noor, Mahanem Mat Noor, Nazatul Aini Abd Majid, Hadi Affendy Dahlan, Amelia Natasya Abdul Wahab', venue: 'International Journal of Emerging Technologies in Learning (iJET)', link: '' },
  { year: 2022, title: 'GeoISA: A new road-topology-assisted geo-based content discovery scheme for vehicular named data networking', authors: 'H Al-Omaisi, EA Sundararajan, R Alsaqour, NF Abdullah, KAA Bakar', venue: 'Vehicular Communications', link: '' },
  { year: 2021, title: 'A survey of data dissemination schemes in vehicular named data networking', authors: 'H Al-Omaisi, EA Sundararajan, R Alsaqour, NF Abdullah, M Abdelhaq', venue: 'Vehicular Communications', link: '' },
  { year: 2014, title: 'Cloud computing service composition: A systematic literature review', authors: 'A Jula, E Sundararajan, Z Othman', venue: 'Expert Systems with Applications', link: '' },
  { year: 2021, title: 'A systematic literature review on obesity: Understanding the causes & consequences of obesity and reviewing various machine learning approaches used to predict obesity', authors: 'M Safaei, EA Sundararajan, M Driss, W Boulila, A Shapi\'i', venue: 'Computers in Biology and Medicine', link: '' },
  { year: 2016, title: 'Parallel implementation of apriori algorithms on the hadoop-mapreduce platform-an evaluation of literature', authors: 'ALS Saabith, E Sundararajan, AA Bakar', venue: 'Journal of Theoretical and Applied Information Technology', link: '' },
  { year: 2015, title: 'Cloud computing services and applications to improve productivity of university researchers', authors: 'AA Shakeabubakor, E Sundararajan, AR Hamdan', venue: 'International Journal of Information and Electronics Engineering', link: '' },
  { year: 2017, title: 'Handover in LTE-advanced wireless networks: state of art and survey of decision algorithm', authors: 'R Ahmad, EA Sundararajan, NE Othman, M Ismail', venue: 'Telecommunication Systems', link: '' },
  { year: 2020, title: 'Online clustering of evolving data streams using a density grid-based method', authors: 'M Tareq, EA Sundararajan, M Mohd, NS Sani', venue: 'IEEE Access', link: '' },
  { year: 2014, title: 'Parallel and distributed computing models on a graphics processing unit to accelerate simulation of membrane systems', authors: 'A Maroosi, RC Muniyandi, E Sundararajan, AM Zin', venue: 'Simulation Modelling Practice and Theory', link: '' },
  { year: 2023, title: 'Fake News Detection Model On Social Media By Leveraging Sentiment Analysis Of News Content And Emotion Analysis Of Users Comments', authors: 'Suhaib Kh. Hamed, Mohd Juzaiddin Ab Aziz, Mohd Ridzwan Yaakub', venue: 'Sensors', link: '' },
  { year: 2022, title: 'A Systematic Literature Review And Meta-analysis On Scalable Blockchain-based Electronic Voting Systems', authors: 'Uzma Jafar, Mohd Juzaiddin Ab Aziz, Zarina Shukur, Hafiz Adnan Hussain', venue: 'Sensors', link: '' },
  { year: 2022, title: 'A Hybrid Mcdm Approach Based On Fuzzy-logic And Dematel To Evaluate Adult Obesity', authors: 'Mahmood Safaei, Elankovan A Sundararajan, Shahla Asadi, Mehrbakhsh Nilashi, Mohd Juzaiddin Ab Aziz, Ms Saravanan, Maha Abdelhaq, Raed Alsaqour', venue: 'International Journal of Environmental Research and Public Health', link: '' },
  { year: 2021, title: 'Blockchain For Electronic Voting System Review And Open Research Challenges', authors: 'Uzma Jafar, Mohd Juzaiddin Ab Aziz, Zarina Shukur', venue: 'Sensors', link: '' }
];

const formatMYR = (n) => Number(n).toLocaleString('en-MY', {minimumFractionDigits:0});

function renderResearchers(list){
  const grid = document.getElementById('researchersGrid');
  if(!grid) return;
  grid.innerHTML = list.map((r, idx) => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
      <div class="card-body d-flex flex-column">
      <div class="text-center mb-3">
        <div class="rounded-circle overflow-hidden mx-auto" style="width:150px;height:150px;background:rgba(0,194,255,.15);border:1px solid rgba(255,255,255,.08)">
        <img src="assets/researchers/${r.name.replace(/\s+/g, '_').toLowerCase().replace(/\./g, '')}.jpg" alt="${r.name}" style="width:100%;height:100%;object-fit:cover;">
        </div>
      </div>
      <div class="text-center">
      <h5 class="mb-1">${r.name}</h5>
      <small class="text-info">${r.role} <br> ${r.area}</small>
      
      <div class="small flex-grow-1 mt-3">
      <div class="mb-2"><i class="bi bi-lightning-charge me-1"></i><strong>Interests:</strong><br> ${r.interests.join(', ')}</div>
      <div class="mb-2"><i class="bi bi-envelope me-1"></i><a href="mailto:${r.email}">${r.email}</a></div>
      <div><i class="bi bi-telephone me-1"></i><a href="https://orcid.org/${r.orcid}" target="_blank" rel="noopener">${r.orcid}</a></div>
      </div>
      </div>
      </div>
      </div>
    </div>`).join('');
}

function renderStudents(list){
  const grid = document.getElementById('studentsGrid');
  if(!grid) return;
  grid.innerHTML = list.map((s, idx) => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100">
      <div class="card-body d-flex flex-column">
      <div class="text-center mb-3">
      <div class="rounded-circle overflow-hidden mx-auto" style="width:150px;height:150px;background:rgba(138,125,255,.15);border:1px solid rgba(255,255,255,.08)">
        <img src="assets/students/${s.name.replace(/\s+/g, '_').toLowerCase().replace(/\./g, '')}.jpg" alt="${s.name}" style="width:100%;height:100%;object-fit:cover;">
      </div>
      </div>
      <div class="text-center">
      <h5 class="mb-0">${s.name}</h5>
      <small class="text-info">${s.level} <br> ${s.supervisor}</small>
      
      <div class="small flex-grow-1 mt-3">
      <div class="mb-2"><i class="bi bi-journal-code me-1"></i><strong>Topic:</strong><br> ${s.topic}</div>
      <div><i class="bi bi-envelope me-1"></i><a href="mailto:${s.email}">${s.email}</a></div>
      <div><i class="bi bi-telephone me-1"></i><a href="mailto:${s.phone}">${s.phone}</a></div>
      </div>
      <!--<div class="mt-3 d-flex gap-2">
      <button class="btn btn-outline-info btn-sm" data-profile-index="${idx}" data-type="student" data-bs-toggle="modal" data-bs-target="#profileModal"><i class="bi bi-person-vcard me-1"></i>View Profile</button>
      </div>-->
      </div>
      </div>
      </div>
    </div>`).join('');
}

function renderGrants(list){
  const body = document.getElementById('grantsBody');
  if(!body) return;
  body.innerHTML = list.map(g=> `
    <tr>
      <th scope="row">${g.id}</th>
      <td>${g.title}</td>
      <!--<td>${g.pi}</td>
      <td>RM ${formatMYR(g.amount)}</td>
      <td>${g.start}</td>
      <td>${g.end}</td>-->
      <td><span class="badge ${g.status==='Active'?'bg-success-subtle text-success':g.status==='Completed'?'bg-secondary':'bg-warning text-dark'}">${g.status}</span></td>
    </tr>`).join('');
}

function renderPublications(list){
  const container = document.getElementById('pubList');
  if(!container) return;
  const grouped = list.reduce((acc,p)=>{ (acc[p.year]??=[]).push(p); return acc; },{});
  const years = Object.keys(grouped).sort((a,b)=>b-a);
  container.innerHTML = years.map(y=>{
    const items = grouped[y].map(p=>`
      <li class="list-group-item bg-transparent text-light border-secondary">
        <i class="bi bi-book me-1"></i><strong>${p.title}</strong><br/>
        <small class="text-info">${p.authors}</small> — <em>${p.venue}</em>
        ${p.link?`<div><a href="${p.link}" target="_blank" rel="noopener"><i class="bi bi-box-arrow-up-right"></i> Link</a></div>`:''}
      </li>`).join('');
    return `
      <div class="card">
        <div class="card-header d-flex align-items-center justify-content-between">
          <span class="fw-bold">${y}</span>
          <span class="badge badge-glow rounded-pill">${grouped[y].length} publications</span>
        </div>
        <ul class="list-group list-group-flush">${items}</ul>
      </div>`;
  }).join('');
}

function initResearchersPage(){
  renderResearchers(researchers);
  const rSearch = document.getElementById('researcherSearch');
  const rFilter = document.getElementById('researcherFilter');
  function update(){
    const q = (rSearch?.value || '').toLowerCase();
    const f = rFilter?.value || '';
    const filtered = researchers.filter(r=>{
      const matchQ = !q || `${r.name} ${r.area} ${r.role} ${r.interests.join(' ')}`.toLowerCase().includes(q);
      const matchF = !f || r.area === f;
      return matchQ && matchF;
    });
    renderResearchers(filtered);
  }
  rSearch?.addEventListener('input', update);
  rFilter?.addEventListener('change', update);

  // Modal
  document.body.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-profile-index]');
    if(!btn) return;
    const idx = +btn.dataset.profileIndex;
    const type = btn.dataset.type;
    const details = document.getElementById('profileDetails');
    if(type==='researcher'){
      const r = researchers[idx];
      details.innerHTML = `
        <div class="row g-4">
          <div class="col-md-4">
            <div class="rounded-3 p-4 text-center" style="background:rgba(0,194,255,.08);border:1px solid rgba(255,255,255,.08)">
              <i class="bi bi-person-badge fs-1 text-info"></i>
              <div class="mt-2 fw-bold">${r.name}</div>
              <div class="small text-info">${r.role}</div>
            </div>
          </div>
          <div class="col-md-8">
            <h5 class="mb-1">${r.area}</h5>
            <p class="mb-2"><strong>Interests:</strong> ${r.interests.map(x=>`<span class='badge bg-secondary-subtle text-light border me-1'>${x}</span>`).join('')}</p>
            <p class="mb-1"><i class="bi bi-envelope me-1"></i><a href="mailto:${r.email}">${r.email}</a></p>
            <p class="mb-0"><i class="bi bi-link-45deg me-1"></i>ORCID: <a href="https://orcid.org/${r.orcid}" target="_blank">${r.orcid}</a></p>
          </div>
        </div>`;
    }
  });
}

function initStudentsPage(){
  renderStudents(students);
  const sSearch = document.getElementById('studentSearch');
  const sFilter = document.getElementById('studentFilter');
  function update(){
    const q = (sSearch?.value || '').toLowerCase();
    const f = sFilter?.value || '';
    const filtered = students.filter(s=>{
      const matchQ = !q || `${s.name} ${s.topic} ${s.supervisor} ${s.level}`.toLowerCase().includes(q);
      const matchF = !f || s.level === f;
      return matchQ && matchF;
    });
    renderStudents(filtered);
  }
  sSearch?.addEventListener('input', update);
  sFilter?.addEventListener('change', update);

  document.body.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-profile-index]');
    if(!btn) return;
    const idx = +btn.dataset.profileIndex;
    const type = btn.dataset.type;
    const details = document.getElementById('profileDetails');
    if(type==='student'){
      const s = students[idx];
      details.innerHTML = `
        <div class="row g-4">
          <div class="col-md-4">
            <div class="rounded-3 p-4 text-center" style="background:rgba(138,125,255,.08);border:1px solid rgba(255,255,255,.08)">
              <i class="bi bi-mortarboard fs-1 text-warning"></i>
              <div class="mt-2 fw-bold">${s.name}</div>
              <div class="small text-info">${s.level}</div>
            </div>
          </div>
          <div class="col-md-8">
            <h5 class="mb-1">${s.topic}</h5>
            <p class="mb-1"><strong>Supervisor:</strong> ${s.supervisor}</p>
            <p class="mb-0"><i class="bi bi-envelope me-1"></i><a href="mailto:${s.email}">${s.email}</a></p>
          </div>
        </div>`;
    }
  });
}

function initGrantsPage(){
  const yearSel = document.getElementById('grantYear');
  const years = Array.from(new Set(grants.flatMap(g=>[new Date(g.start).getFullYear(), new Date(g.end).getFullYear()]))).sort((a,b)=>b-a);
  if(yearSel) yearSel.innerHTML = '<option value="">All Years</option>' + years.map(y=>`<option>${y}</option>`).join('');
  function update(){
    const status = document.getElementById('grantStatus')?.value || '';
    const year = document.getElementById('grantYear')?.value || '';
    const filtered = grants.filter(g=>{
      const yStart = new Date(g.start).getFullYear();
      const yEnd = new Date(g.end).getFullYear();
      const matchStatus = !status || g.status === status;
      const matchYear = !year || yStart==year || yEnd==year;
      return matchStatus && matchYear;
    });
    renderGrants(filtered);
  }
  document.getElementById('grantStatus')?.addEventListener('change', update);
  document.getElementById('grantYear')?.addEventListener('change', update);
  update();
}

function initPublicationsPage(){
  const pubYears = Array.from(new Set(publications.map(p=>p.year))).sort((a,b)=>b-a);
  const yearSel = document.getElementById('pubYear');
  if(yearSel) yearSel.innerHTML = '<option value="">All Years</option>' + pubYears.map(y=>`<option>${y}</option>`).join('');
  function update(){
    const q = (document.getElementById('pubSearch')?.value || '').toLowerCase();
    const y = document.getElementById('pubYear')?.value || '';
    const filtered = publications.filter(p=>{
      const matchQ = !q || `${p.title} ${p.authors} ${p.venue}`.toLowerCase().includes(q);
      const matchY = !y || String(p.year) === y;
      return matchQ && matchY;
    });
    renderPublications(filtered);
  }
  document.getElementById('pubSearch')?.addEventListener('input', update);
  document.getElementById('pubYear')?.addEventListener('change', update);
  update();
}

/* Page bootstrap */
document.addEventListener('DOMContentLoaded', ()=>{
  switch(window.PET_PAGE){
    case 'researchers': return initResearchersPage();
    case 'students': return initStudentsPage();
    case 'grants': return initGrantsPage();
    case 'publications': return initPublicationsPage();
    default: /* index page no extra init */ return;
  }
});
