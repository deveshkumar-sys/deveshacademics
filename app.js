/* =====================================================================
   CONFIG — paste your Firebase web config here after creating the project.
   Leave it blank to run the site from the built-in CV copy.
   Full instructions are in FIREBASE_SETUP.md
   ===================================================================== */
const FIREBASE_CONFIG = {
  // Paste the object Firebase gives you (Project settings -> Your apps -> Web).
  // These values are NOT secret; your data is protected by security rules.
  apiKey: "AIzaSyBQc7AN18YahWlMU4jOLYCL_6OSZKArncI",
  authDomain: "academicprofile-35588.firebaseapp.com",
  projectId: "academicprofile-35588",
  storageBucket: "academicprofile-35588.firebasestorage.app",
  messagingSenderId: "505914124477",
  appId: "1:505914124477:web:afbafd7499b2b1d6572fd4"
};


/* =====================================================================
   BUILT-IN CV COPY  (fallback + initial seed for your Neon database)
   ===================================================================== */
const FALLBACK = {
  profile: {
    id: 1,
    name: "Dr. Devesh Kumar",
    role: "Assistant Professor — Business Analytics",
    place: "Jaipuria Institute of Management, Lucknow",
    tagline: "Resilient, reliable supply chains — powered by machine learning, optimization, and Industry 4.0.",
    photo_url: "",
    email: "devesh.kumar@jaipuria.ac.in",
    phone: "+91 7905311354",
    scholar_url: "https://scholar.google.com/citations?user=sKeGiukAAAAJ&hl=en",
    linkedin_url: "https://www.linkedin.com/in/devesh-kumar-bb0643100",
    faculty_url: "https://www.jaipuria.ac.in/faculty/devesh-kumar/",
    about: "Dr. Devesh Kumar is an Assistant Professor in the Business Analytics area at the Jaipuria Institute of Management, Lucknow. He holds a B.Tech. in Mechanical Engineering from IIITDM Jabalpur, an M.Tech. in Industrial Engineering from MNIT Jaipur, and a Ph.D. from MNIT Jaipur.\n\nHis research centres on supply chain reliability, resilience, and optimization in disruption-prone environments, integrating machine learning, generative AI, and Industry 4.0 technologies into supply chain design — particularly in pharmaceutical and semiconductor networks. He builds and solves mixed-integer and multi-objective optimization models using Python, GAMS/CPLEX, and LINGO, and applies data-driven methods for predictive and prescriptive analytics, including retrieval-augmented generation workflows.\n\nHis work appears in high-impact peer-reviewed journals including Computers & Industrial Engineering, International Journal of Production Economics, Computers & Chemical Engineering, and Operations Management Research, alongside conference papers and book chapters. He also serves as a reviewer for several leading journals.",
    interests: ["Supply chain reliability & resilience","Mathematical modelling & optimization","Machine learning","Data science","Generative AI","Industry 4.0"]
  },
  education: [
    {id:1, sort_order:1, degree:"Ph.D., Industrial Engineering", institute:"MNIT Jaipur", specialization:"Supply chain reliability, resilience & optimization", year:"May 2026"},
    {id:2, sort_order:2, degree:"M.Tech., Industrial Engineering", institute:"MNIT Jaipur", specialization:"Industrial Engineering", year:"July 2020"},
    {id:3, sort_order:3, degree:"B.Tech., Mechanical Engineering", institute:"IIITDM Jabalpur", specialization:"Mechanical Engineering", year:"Sept 2016"}
  ],
  positions: [
    {id:1, sort_order:1, is_current:true, title:"Assistant Professor — Business Analytics", institute:"Jaipuria Institute of Management, Lucknow", courses:"Python for Business Analytics", period:"Since Jan 2026"},
    {id:2, sort_order:2, is_current:false, title:"Teaching Assistant", institute:"MNIT Jaipur", courses:"Machine Learning, Statistics, Foundations of Data Science, Supply Chain Management", period:"Sept 2021 – Dec 2025"}
  ],
  conferences: [
    {id:1, sort_order:1, title:"AI Disruption and Opportunities", level:"International", venue:"Jaipuria Institute of Management, Jaipur", dates:"20–21 Feb 2026"},
    {id:2, sort_order:2, title:"UNIfied International Conference on Cyber Physical Systems and Industrial AI", level:"International", venue:"MNIT Jaipur", dates:"26–28 Nov 2024"},
    {id:3, sort_order:3, title:"9th International Conference on Soft Computing: Theory and Applications", level:"International", venue:"MNIT Jaipur", dates:"27–29 Dec 2024"},
    {id:4, sort_order:4, title:"Data Driven Analytics with Machine Learning (Short Term Course)", level:"National", venue:"MNIT Jaipur", dates:"12–16 Jun 2023"},
    {id:5, sort_order:5, title:"Machine Learning for Non-Coders (Short Term Course)", level:"National", venue:"MNIT Jaipur", dates:"4–8 Jul 2022"},
    {id:6, sort_order:6, title:"Hands-On Introduction to LabVIEW and its Applications (Workshop)", level:"National", venue:"MNIT Jaipur", dates:"25–29 Sep 2020"}
  ],
  reviewer_journals: [
    {id:1, sort_order:1, name:"Journal of Cleaner Production", impact:"11.072"},
    {id:2, sort_order:2, name:"International Journal of Production Economics", impact:"10.0"},
    {id:3, sort_order:3, name:"Corporate Social Responsibility and Environmental Management", impact:"9.1"},
    {id:4, sort_order:4, name:"Engineering Applications of Artificial Intelligence", impact:"8.0"},
    {id:5, sort_order:5, name:"Journal of Enterprise Information Management", impact:"7.6"},
    {id:6, sort_order:6, name:"Operations Management Research", impact:"6.1"},
    {id:7, sort_order:7, name:"Annals of Operations Research", impact:"4.820"},
    {id:8, sort_order:8, name:"Array", impact:"4.5"},
    {id:9, sort_order:9, name:"Research in Transportation Business & Management", impact:"4.4"},
    {id:10, sort_order:10, name:"Journal of Global Operations and Strategic Sourcing", impact:"3.4"},
    {id:11, sort_order:11, name:"International Journal of Mathematical, Engineering and Management Sciences", impact:"1.6"},
    {id:12, sort_order:12, name:"International Journal of System Assurance Engineering and Management", impact:"1.7"}
  ],
  awards: [
    {id:1, sort_order:1, title:"PhD Fellowship", org:"MHRD, Government of India", period:"2021–2025"},
    {id:2, sort_order:2, title:"M.Tech. Fellowship", org:"MHRD, Government of India", period:"2018–2020"}
  ],
  publications: [
    {id:1, sort_order:1, kind:"journal", year:2026, title:"Carbon neutrality through industry 4.0: A decision-making approach for sustainable energy efficient logistics operations", authors:"Kumar, D., Prakash, S., Soni, G., Mangla, S.K., Ishizaka, A.", venue:"Energy Economics, 109417", metrics:"ABDC:A*|IF:14.1|Q1", url:"https://scholar.google.com/scholar?q=Carbon+neutrality+through+industry+4.0+sustainable+energy+efficient+logistics+operations"},
    {id:2, sort_order:2, kind:"journal", year:2025, title:"Modelling and analysis of resilience and reliability in pharmaceutical supply chains", authors:"Kumar, D., Soni, G., Rathore, A.P.S., Kazancoglu, Y.", venue:"Computers & Chemical Engineering, 109194", metrics:"IF:4.9|Q1", url:"https://scholar.google.com/scholar?q=Modelling+and+analysis+of+resilience+and+reliability+in+pharmaceutical+supply+chains"},
    {id:3, sort_order:3, kind:"journal", year:2025, title:"A machine learning-based hybrid approach for maximizing supply chain reliability in a pharmaceutical supply chain", authors:"Kumar, D., Soni, G., Mangla, S.K., Kazancoglu, Y., Rathore, A.P.S.", venue:"Computers & Industrial Engineering, 200, 110834", metrics:"ABDC:A|IF:7.3|Q1", url:"https://scholar.google.com/scholar?q=A+machine+learning-based+hybrid+approach+for+maximizing+supply+chain+reliability+pharmaceutical"},
    {id:4, sort_order:4, kind:"journal", year:2024, title:"Integrating resilience and reliability in semiconductor supply chains during disruptions", authors:"Kumar, D., Soni, G., Mangla, S.K., Liao, J., Rathore, A.P.S., Kazancoglu, Y.", venue:"International Journal of Production Economics, 276, 109376", metrics:"ABDC:A|IF:10.6|Q1", url:"https://scholar.google.com/scholar?q=Integrating+resilience+and+reliability+in+semiconductor+supply+chains+during+disruptions"},
    {id:5, sort_order:5, kind:"journal", year:2024, title:"A hybrid Bayesian approach for assessment of industry 4.0 technologies towards achieving decarbonization in manufacturing industry", authors:"Kumar, D., Soni, G., Jabeen, F., Tiwari, N.K., Sariyer, G., Ramtiyal, B.", venue:"Computers & Industrial Engineering, 190, 110057", metrics:"ABDC:A|IF:7.3|Q1", url:"https://scholar.google.com/scholar?q=A+hybrid+Bayesian+approach+for+assessment+of+industry+4.0+technologies+decarbonization+manufacturing"},
    {id:6, sort_order:6, kind:"journal", year:2022, title:"Modelling supply chain viability during COVID-19 disruption: A case of an Indian automobile manufacturing supply chain", authors:"Kumar, D., Soni, G., Joshi, R., Jain, V., Sohal, A.", venue:"Operations Management Research, 15(3), 1224–1240", metrics:"ABDC:C|IF:6.1|Q1", url:"https://scholar.google.com/scholar?q=Modelling+supply+chain+viability+during+COVID-19+disruption+Indian+automobile+manufacturing"},
    {id:7, sort_order:7, kind:"journal", year:2024, title:"On the nature of supply chain reliability: models, solution approaches and agenda for future research", authors:"Kumar, D., Soni, G., Kazancoglu, Y., Rathore, A.P.S.", venue:"International Journal of Quality & Reliability Management, 41(9), 2400–2420", metrics:"ABDC:B|IF:3.2|Q2", url:"https://scholar.google.com/scholar?q=On+the+nature+of+supply+chain+reliability+models+solution+approaches+agenda+future+research"},
    {id:8, sort_order:8, kind:"journal", year:2023, title:"Evaluating traceability technology adoption in food supply chain: A game theoretic approach", authors:"Gupta, N., Soni, G., Mittal, S., Mukherjee, I., Ramtiyal, B., Kumar, D.", venue:"Sustainability, 15(2), 898", metrics:"IF:4.1|Q1", url:"https://scholar.google.com/scholar?q=Evaluating+traceability+technology+adoption+in+food+supply+chain+game+theoretic+approach"},
    {id:9, sort_order:9, kind:"journal", year:2024, title:"Data-driven approach for rational allocation of inventory in a FMCG supply chain", authors:"Kumar, D., Soni, G., Ramtiyal, B., Vijayvargy, L.", venue:"International Journal of System Assurance Engineering and Management, 1–14", metrics:"IF:1.6|Q2", url:"https://scholar.google.com/scholar?q=Data-driven+approach+for+rational+allocation+of+inventory+in+a+FMCG+supply+chain"},
    {id:10, sort_order:10, kind:"journal", year:2024, title:"Assessing feasibility of design constraints for mills in planning and scheduling of cold rolling: A case of steel industry", authors:"Kumar, R., Kumar, D., Ramtiyal, B., Vijayvargy, L., Bisht, S.", venue:"International Journal of System Assurance Engineering and Management, 15(4), 1519–1535", metrics:"IF:1.6|Q2", url:"https://scholar.google.com/scholar?q=Assessing+feasibility+of+design+constraints+for+mills+planning+scheduling+cold+rolling+steel"},
    {id:11, sort_order:11, kind:"journal", year:2025, title:"Emerging trends for multi-agent systems applications in smart public bus transportation", authors:"Chandiramani, H., Soni, G., Kumar, D.", venue:"International Journal of Intelligent Enterprise, 12(3–4), 422–440", metrics:"Q4", url:"https://scholar.google.com/scholar?q=Emerging+trends+for+multi-agent+systems+applications+in+smart+public+bus+transportation"},
    {id:12, sort_order:12, kind:"journal", year:2025, title:"Interpretive structural modelling approach for barrier analysis in agent technology enabled smart manufacturing system", authors:"Shukla, O.J., Kumar, D., Ramtiyal, B., Joshi, A.", venue:"International Journal of Intelligent Enterprise, 12(3–4), 340–355", metrics:"Q4", url:"https://scholar.google.com/scholar?q=Interpretive+structural+modelling+approach+for+barrier+analysis+agent+technology+smart+manufacturing"},
    {id:13, sort_order:13, kind:"conference", year:2023, title:"A systematic review of supply chain reconfiguration research", authors:"Kumar, D., Patil, A.K., Soni, G., Badhotiya, G.K.", venue:"AMTAAI 2021, 2521(1), 040028", metrics:"", url:"https://scholar.google.com/scholar?q=A+systematic+review+of+supply+chain+reconfiguration+research+AMTAAI"},
    {id:14, sort_order:14, kind:"conference", year:2023, title:"Data–Driven Techniques in Logistics & Supply Chain Management: A Literature Review", authors:"Detwal, P.K., Soni, G., Kumar, D., Ramtiyal, B.", venue:"2022 OPJU OTCON, 1–6, IEEE", metrics:"", url:"https://scholar.google.com/scholar?q=Data+Driven+Techniques+in+Logistics+Supply+Chain+Management+Literature+Review+OTCON"},
    {id:15, sort_order:15, kind:"conference", year:2020, title:"Webometric study of lean manufacturing", authors:"Karwasra, K., Kumar, D., Soni, G., Prakash, S.", venue:"Advances in Production and Industrial Engineering (ICETMIE 2019), 309–322, Springer", metrics:"", url:"https://scholar.google.com/scholar?q=Webometric+study+of+lean+manufacturing+ICETMIE"},
    {id:16, sort_order:16, kind:"conference", year:2020, title:"Bibliometric analysis of artificial neural network applications in materials and engineering", authors:"Kumar, D., Karwasra, K., Soni, G.", venue:"Materials Today: Proceedings, 28, 1629–1634", metrics:"", url:"https://scholar.google.com/scholar?q=Bibliometric+analysis+of+artificial+neural+network+applications+in+materials+and+engineering"},
    {id:17, sort_order:17, kind:"book", year:2025, title:"Toward a holistic perspective on risk, resilience, and reliability in operations management", authors:"Kumar, D., Prakash, S., Ramtiyal, B.", venue:"In Risk, Reliability and Resilience in Operations Management, 1–12, Elsevier", metrics:"", url:"https://scholar.google.com/scholar?q=Toward+a+holistic+perspective+on+risk+resilience+and+reliability+in+operations+management"},
    {id:18, sort_order:18, kind:"book", year:2023, title:"The energy consumption optimization using machine learning technique in electrical arc furnaces (EAF)", authors:"Dwivedi, R., Mishra, A., Kumar, D., Patil, A.", venue:"In Intelligent Prognostics for Engineering Systems with Machine Learning Techniques, 113–132, CRC Press", metrics:"", url:"https://scholar.google.com/scholar?q=The+energy+consumption+optimization+using+machine+learning+technique+electrical+arc+furnaces"},
    {id:19, sort_order:19, kind:"other", year:2025, title:"Control chart-based predictive maintenance in flexible manufacturing systems: A data-driven approach", authors:"Kumawat, M.K., Kumar, D., Rathore, S., Mangla, S.K., Mohanty, R.P.", venue:"Industrial Engineering Journal, XVIII(8)", metrics:"", url:"https://scholar.google.com/scholar?q=Control+chart-based+predictive+maintenance+in+flexible+manufacturing+systems"},
    {id:20, sort_order:20, kind:"other", year:2025, title:"Industry 4.0 and Supply Chain Resilience: A Comprehensive Analysis of Technological Impacts", authors:"Kumar, D., Soni, G.", venue:"IETI Transactions on Data Analysis and Forecasting, 3(2), 33–49", metrics:"", url:"https://scholar.google.com/scholar?q=Industry+4.0+and+Supply+Chain+Resilience+Comprehensive+Analysis+of+Technological+Impacts"},
    {id:21, sort_order:21, kind:"other", year:2024, title:"Improved demand forecasting of a retail store using a hybrid machine learning model", authors:"Taparia, V., Mishra, P., Gupta, N., Kumar, D.", venue:"Journal of Graphic Era University, 15–36", metrics:"", url:"https://scholar.google.com/scholar?q=Improved+demand+forecasting+of+a+retail+store+using+a+hybrid+machine+learning+model"}
  ],
  activities: [
    {id:"a1", sort_order:1, date:"Feb 2026", title:"Attended the International Conference on AI Disruption and Opportunities", description:"Jaipuria Institute of Management, Jaipur.", url:""},
    {id:"a2", sort_order:2, date:"Jan 2026", title:"Joined Jaipuria Institute of Management, Lucknow as Assistant Professor — Business Analytics", description:"", url:""},
    {id:"a3", sort_order:3, date:"2026", title:"New paper in Energy Economics on carbon-neutral logistics (Impact Factor 14.1)", description:"Carbon neutrality through Industry 4.0.", url:"https://scholar.google.com/scholar?q=Carbon+neutrality+through+industry+4.0+sustainable+energy+efficient+logistics+operations"}
  ],
  talks: [],
  gallery: [],
  courses: [
    {id:"sample-ba", sort_order:1, status:"present", name:"Python for Business Analytics", term:"Current term", description:"Hands-on introduction to analytics with Python.", sessions:[
      {id:"s1", sort_order:1, number:1, title:"Introduction to Business Analytics", description:"What analytics is and why it matters for decision-making.", key_concepts:"Descriptive, predictive and prescriptive analytics", resources:[
        {id:"r1", sort_order:1, title:"📊 Introduction – Lecture Slides", description:"Overview deck for Session 1", url:""}
      ]},
      {id:"s2", sort_order:2, number:2, title:"Data and Decision Making", description:"Turning raw data into decisions.", key_concepts:"Data types, quality, exploratory analysis", resources:[
        {id:"r2", sort_order:1, title:"📊 Lecture Slides", description:"", url:""},
        {id:"r3", sort_order:2, title:"📁 Practice Dataset", description:"Customer dataset for the exercise", url:""}
      ]}
    ]},
    {id:"sample-past", sort_order:2, status:"past", name:"Foundations of Data Science", term:"2024", sessions:[]}
  ]
};

/* =====================================================================
   Section schemas — drive rendering AND the admin forms
   ===================================================================== */
const OWNER_NAME_RE = /(Kumar,\s*D(evesh)?\.?|Devesh Kumar)/;
const SCHEMA = {
  education:{table:"education", fields:[
    {k:"degree",label:"Degree",type:"text"},{k:"institute",label:"Institute",type:"text"},
    {k:"specialization",label:"Specialization",type:"text"},{k:"year",label:"Year",type:"text"},
    {k:"sort_order",label:"Order (lower shows first)",type:"number"}]},
  positions:{table:"positions", fields:[
    {k:"title",label:"Title / designation",type:"text"},{k:"institute",label:"Institute / university",type:"text"},
    {k:"courses",label:"Courses taught",type:"text"},{k:"period",label:"Period (e.g. Since Jan 2026)",type:"text"},
    {k:"is_current",label:"Current position?",type:"bool"},{k:"sort_order",label:"Order",type:"number"}]},
  conferences:{table:"conferences", fields:[
    {k:"title",label:"Title",type:"text"},{k:"level",label:"Level (International / National)",type:"text"},
    {k:"venue",label:"Venue",type:"text"},{k:"dates",label:"Dates",type:"text"},
    {k:"sort_order",label:"Order",type:"number"}]},
  reviewer_journals:{table:"reviewer_journals", fields:[
    {k:"name",label:"Journal name",type:"text"},{k:"impact",label:"Impact factor",type:"text"},
    {k:"sort_order",label:"Order",type:"number"}]},
  awards:{table:"awards", fields:[
    {k:"title",label:"Award / fellowship",type:"text"},{k:"org",label:"Awarding body",type:"text"},
    {k:"period",label:"Period / year",type:"text"},{k:"sort_order",label:"Order",type:"number"}]},
  publications:{table:"publications", fields:[
    {k:"title",label:"Title",type:"text"},{k:"authors",label:"Authors",type:"text"},
    {k:"venue",label:"Venue / journal / book",type:"text"},{k:"year",label:"Year",type:"number"},
    {k:"kind",label:"Type",type:"select",options:[["journal","Journal article"],["conference","Conference paper"],["book","Book / chapter"],["other","Other"]]},
    {k:"metrics",label:"Metrics (e.g. ABDC:A|IF:7.3|Q1)",type:"text"},
    {k:"url",label:"Link to publisher / DOI",type:"text"},{k:"sort_order",label:"Order",type:"number"}]},
  activities:{table:"activities", fields:[
    {k:"date",label:"Date (e.g. Feb 2026)",type:"text"},{k:"title",label:"What happened",type:"text"},
    {k:"description",label:"Details (optional)",type:"textarea"},{k:"url",label:"Link (optional)",type:"text"},
    {k:"sort_order",label:"Order (lower shows first)",type:"number"}]},
  talks:{table:"talks", fields:[
    {k:"date",label:"Date (e.g. Nov 2025)",type:"text"},{k:"title",label:"Talk / lecture title",type:"text"},
    {k:"venue",label:"Venue / event",type:"text"},{k:"description",label:"Details (optional)",type:"textarea"},
    {k:"url",label:"Link (optional)",type:"text"},{k:"sort_order",label:"Order",type:"number"}]},
  gallery:{table:"gallery", fields:[
    {k:"url",label:"Photo link (GitHub image URL)",type:"text"},{k:"caption",label:"Caption (optional)",type:"text"},
    {k:"sort_order",label:"Order",type:"number"}]}
};
const PUB_KINDS=[["all","All"],["journal","Journal articles"],["conference","Conference papers"],["book","Books & chapters"],["other","Other"]];

let DATA = JSON.parse(JSON.stringify(FALLBACK));  // active copy
let LIVE = false;                                  // reading from the live database?
let pubFilter = "all";
const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Firebase (data + login) ----------
   Reads are public (security rules allow anyone to read).
   Writes require you to be signed in as the owner (rules enforce it). */
const COLLECTIONS = ["education","positions","conferences","reviewer_journals","awards","publications","activities","talks","gallery"];
let fb = { ready:false, db:null, auth:null };

function initFirebase(){
  try{
    if(!FIREBASE_CONFIG.projectId || typeof firebase==="undefined") return false;
    firebase.initializeApp(FIREBASE_CONFIG);
    fb.db = firebase.firestore();
    fb.auth = firebase.auth();
    fb.ready = true;
    return true;
  }catch(e){ console.warn("Firebase init failed, using built-in copy:",e.message); return false; }
}

async function loadLive(){
  if(!fb.ready) return false;
  try{
    const out={};
    const profSnap = await fb.db.collection("profile").doc("main").get();
    out.profile = profSnap.exists ? {id:"main", ...profSnap.data()} : FALLBACK.profile;
    await Promise.all(COLLECTIONS.map(async c=>{
      const snap = await fb.db.collection(c).orderBy("sort_order").get();
      out[c] = snap.docs.map(d=>({id:d.id, ...d.data()}));
    }));
    // if the database is empty, keep showing the built-in copy
    const empty = COLLECTIONS.every(c=>out[c].length===0);
    if(empty && !profSnap.exists) return false;
    // courses (names + status are public)
    let courses=[];
    try{ const cs=await fb.db.collection("courses").orderBy("sort_order").get(); courses=cs.docs.map(d=>({id:d.id,...d.data()})); }catch(e){ courses=DATA.courses||[]; }
    DATA = {profile:out.profile, education:out.education||[], positions:out.positions||[],
            conferences:out.conferences||[], reviewer_journals:out.reviewer_journals||[],
            awards:out.awards||[], publications:out.publications||[], activities:out.activities||[], talks:out.talks||[], gallery:out.gallery||[], courses:courses};
    return true;
  }catch(e){ console.warn("Firestore read failed, using built-in copy:",e.message); return false; }
}

// Write one document (used by the editor and the one-time import).
async function fbSet(collection, id, data){
  if(collection==="profile") return fb.db.collection("profile").doc("main").set(data,{merge:true});
  if(id!=null && String(id).indexOf("local_")!==0) return fb.db.collection(collection).doc(String(id)).set(data,{merge:true});
  const ref = await fb.db.collection(collection).add(data);
  return ref.id;
}
async function fbDelete(collection, id){ return fb.db.collection(collection).doc(String(id)).delete(); }

/* ---------- render ---------- */
function renderAll(){ renderProfile(); renderActivities(); renderTalks(); renderEducation(); renderPositions(); renderConferences(); renderReviewers(); renderAwards(); renderPublications(); renderCourses(); }

let carouselTimer=null;
function renderGallery(){
  const holder=document.getElementById("portraitHolder"); if(!holder) return;
  const p=DATA.profile;
  const imgs=(DATA.gallery||[]).filter(g=>g&&g.url);
  if(carouselTimer){ clearInterval(carouselTimer); carouselTimer=null; }
  if(imgs.length){
    holder.innerHTML=`<div class="portrait carousel">${imgs.map((g,i)=>`<img class="cslide${i===0?' on':''}" src="${esc(g.url)}" alt="${esc(g.caption||p.name)}">`).join("")}</div>`;
    if(imgs.length>1){
      let i=0; const slides=holder.querySelectorAll(".cslide");
      carouselTimer=setInterval(()=>{ slides[i].classList.remove("on"); i=(i+1)%slides.length; slides[i].classList.add("on"); },4000);
    }
  } else if(p.photo_url){
    holder.innerHTML=`<img class="portrait" src="${esc(p.photo_url)}" alt="${esc(p.name)}">`;
  } else {
    const initials=(p.name||"").replace(/^Dr\.?\s*/,"").split(/\s+/).map(w=>w[0]).join("").slice(0,2);
    holder.innerHTML=`<div class="portrait portrait-fallback">${esc(initials)}</div>`;
  }
  // admin manager
  const adm=document.getElementById("galleryAdmin");
  if(adm){
    adm.innerHTML=(DATA.gallery||[]).map(g=>`<div class="grow"><span class="gname">${esc(g.caption||g.url||"(no link)")}</span>${adminRow('gallery',g.id)}</div>`).join("")
      +`<button class="abtn add" onclick="openForm('gallery')">+ Add photo</button>`;
  }
}
function renderTalks(){
  const el=document.getElementById("list-talks"); if(!el) return;
  const items=DATA.talks||[];
  el.innerHTML = items.length ? items.map(t=>{
    const title=t.url?`<a href="${esc(t.url)}" target="_blank" rel="noopener">${esc(t.title)}</a>`:esc(t.title);
    return `<div class="row">
      <div class="row-main">
        <p class="row-title">${title}</p>
        ${t.venue?`<p class="row-sub">${esc(t.venue)}</p>`:""}
        ${t.description?`<p class="row-sub">${esc(t.description)}</p>`:""}
      </div>
      <div class="row-side">${esc(t.date||"")}</div>
      ${adminRow('talks',t.id)}
    </div>`;
  }).join("") : `<p class="empty-note">${isAdmin()?"No talks yet — add your first below.":"No talks listed yet."}</p>`;
  const c=document.getElementById("c-talks"); if(c) c.textContent=items.length+(items.length===1?" talk":" talks");
}
function renderActivities(){
  const el=document.getElementById("list-activities"); if(!el) return;
  const items=DATA.activities||[];
  el.innerHTML = items.length ? items.map(a=>{
    const title = a.url ? `<a href="${esc(a.url)}" target="_blank" rel="noopener">${esc(a.title)}</a>` : esc(a.title);
    return `<div class="row">
      <div class="row-main">
        <p class="row-title">${title}</p>
        ${a.description?`<p class="row-sub">${esc(a.description)}</p>`:""}
      </div>
      <div class="row-side">${esc(a.date||"")}</div>
      ${adminRow('activities',a.id)}
    </div>`;
  }).join("") : `<p class="empty-note">${isAdmin()?"No activity yet — add your first update below.":"No recent activity yet."}</p>`;
  const c=document.getElementById("c-activities"); if(c) c.textContent=items.length+(items.length===1?" update":" updates");
}

function renderProfile(){
  const p=DATA.profile;
  document.getElementById("heroName").textContent=p.name;
  document.getElementById("heroRole").textContent=p.role;
  document.getElementById("heroPlace").textContent=p.place;
  document.getElementById("footName").textContent=p.name;
  document.getElementById("footYear").textContent="© "+new Date().getFullYear();
  renderGallery();
  const mail = p.email?`<a class="chip" href="mailto:${esc(p.email)}">${icon('mail')}${esc(p.email)}</a>`:"";
  const sch = p.scholar_url?`<a class="chip" href="${esc(p.scholar_url)}" target="_blank" rel="noopener">${icon('scholar')}Google Scholar</a>`:"";
  const li = p.linkedin_url?`<a class="chip" href="${esc(p.linkedin_url)}" target="_blank" rel="noopener">${icon('link')}LinkedIn</a>`:"";
  const fac = p.faculty_url?`<a class="chip" href="${esc(p.faculty_url)}" target="_blank" rel="noopener">${icon('link')}Faculty page</a>`:"";
  const ph = p.phone?`<span class="chip">${icon('phone')}${esc(p.phone)}</span>`:"";
  document.getElementById("heroLinks").innerHTML=mail+sch+li+fac+ph;
  renderHeroBanner(p);
  document.getElementById("aboutBody").innerHTML=(p.about||"").split(/\n\n+/).map(par=>`<p class="lead">${esc(par)}</p>`).join("");
  document.getElementById("interests").innerHTML=(p.interests||[]).map(t=>`<span class="tag">${esc(t)}</span>`).join("");
}
function deriveHighlights(){
  const pubs=DATA.publications||[]; const out=[];
  if(pubs.length) out.push({num:pubs.length+"+",label:"Publications"});
  let topIF=0; pubs.forEach(x=>{ (x.metrics||"").split("|").forEach(m=>{ const[k,v]=m.split(":"); if(k==="IF"){ const n=parseFloat(v); if(n>topIF) topIF=n; } }); });
  if(topIF) out.push({num:topIF.toFixed(1),label:"Peak impact factor"});
  const rev=(DATA.reviewer_journals||[]).length; if(rev) out.push({num:rev,label:"Journals reviewed"});
  return out;
}
function renderHeroBanner(p){
  const el=document.getElementById("heroBanner"); if(!el) return;
  const stats = (Array.isArray(p.highlights)&&p.highlights.length) ? p.highlights : deriveHighlights();
  const pillars=(p.interests||[]).slice(0,6).map(t=>`<span class="hb-pill">${esc(t)}</span>`).join("");
  el.innerHTML=`
    ${p.tagline?`<p class="hb-tagline">${esc(p.tagline)}</p>`:""}
    ${stats.length?`<div class="hb-stats">${stats.map(s=>`<div class="hb-stat"><span class="hb-num">${esc(s.num)}</span><span class="hb-lab">${esc(s.label)}</span></div>`).join("")}</div>`:""}
    ${pillars?`<div class="hb-pillars">${pillars}</div>`:""}
    <div class="adminctl hb-admin"><button class="abtn" onclick="editHighlights()">Edit highlights &amp; tagline</button></div>`;
}
function editHighlights(){
  const p=DATA.profile;
  const hl=(Array.isArray(p.highlights)&&p.highlights.length)?p.highlights:deriveHighlights();
  const linesText=hl.map(h=>`${h.num} | ${h.label}`).join("\n");
  formModal("Edit highlight banner",[
    {k:"tagline",label:"Tagline (one line)",type:"textarea"},
    {k:"highlights",label:"Highlight stats — one per line as:  number | label",type:"textarea"},
    {k:"interests",label:"Research pillars (comma separated)",type:"textarea"}
  ],{tagline:p.tagline||"",highlights:linesText,interests:(p.interests||[]).join(", ")},async o=>{
    guardAdmin();
    const patch={
      tagline:o.tagline||"",
      highlights:(o.highlights||"").split(/\n+/).map(l=>l.trim()).filter(Boolean).map(l=>{const i=l.indexOf("|");return i<0?{num:l.trim(),label:""}:{num:l.slice(0,i).trim(),label:l.slice(i+1).trim()};}).filter(h=>h.num||h.label),
      interests:(o.interests||"").split(",").map(s=>s.trim()).filter(Boolean)
    };
    await fbSet("profile","main",patch);
    DATA.profile={...DATA.profile,...patch}; renderProfile();
  });
}
function adminRow(section,id){ return `<div class="row-admin"><button class="abtn" onclick="openForm('${section}','${id}')">Edit</button><button class="abtn del" onclick="removeItem('${section}','${id}')">Delete</button></div>`; }
function setCount(section,n){ const el=document.getElementById("c-"+section); if(el) el.textContent=n+(n===1?" entry":" entries"); }

function renderEducation(){
  const el=document.getElementById("list-education");
  el.innerHTML=DATA.education.map(e=>`<div class="tl-item">
      <p class="tl-degree">${esc(e.degree)}</p>
      <p class="tl-meta">${esc(e.institute)}${e.specialization?" · "+esc(e.specialization):""}</p>
      <p class="tl-year">${esc(e.year)}</p>
      ${adminRow('education',e.id)}
    </div>`).join("");
  setCount("education",DATA.education.length);
}
function renderPositions(){
  document.getElementById("list-positions").innerHTML=DATA.positions.map(p=>`<div class="row">
      <div class="row-main">
        <p class="row-title">${esc(p.title)}${p.is_current?'<span class="pill current">Current</span>':''}</p>
        <p class="row-sub">${esc(p.institute)}</p>
        ${p.courses?`<p class="row-sub">Teaching: ${esc(p.courses)}</p>`:""}
      </div>
      <div class="row-side">${esc(p.period)}</div>
      ${adminRow('positions',p.id)}
    </div>`).join("");
}
function renderConferences(){
  document.getElementById("list-conferences").innerHTML=DATA.conferences.map(c=>`<div class="row">
      <div class="row-main">
        <p class="row-title">${esc(c.title)}</p>
        <p class="row-sub">${c.level?esc(c.level)+" · ":""}${esc(c.venue)}</p>
      </div>
      <div class="row-side">${esc(c.dates)}</div>
      ${adminRow('conferences',c.id)}
    </div>`).join("");
  setCount("conferences",DATA.conferences.length);
}
function renderReviewers(){
  document.getElementById("list-reviewer_journals").innerHTML=DATA.reviewer_journals.map(j=>`<div class="jrow">
      <span>${esc(j.name)}</span>
      <span class="if">${j.impact?"IF "+esc(j.impact):""}</span>
      ${adminRow('reviewer_journals',j.id)}
    </div>`).join("");
  setCount("reviewer_journals",DATA.reviewer_journals.length);
}
function renderAwards(){
  document.getElementById("list-awards").innerHTML=DATA.awards.map(a=>`<div class="row">
      <div class="row-main">
        <p class="row-title">${esc(a.title)}</p>
        <p class="row-sub">${esc(a.org)}</p>
      </div>
      <div class="row-side">${esc(a.period)}</div>
      ${adminRow('awards',a.id)}
    </div>`).join("");
}
function badgeHtml(metrics){
  if(!metrics) return "";
  return metrics.split("|").map(m=>{
    const[k,v]=m.split(":");
    if(k==="ABDC") return `<span class="badge ${v==='A*'?'astar':'abdc'}">ABDC ${esc(v)}</span>`;
    if(k==="IF") return `<span class="badge if">IF ${esc(v)}</span>`;
    if(k==="Q") return `<span class="badge q">${esc(v)}</span>`;
    if(/^Q[1-4]$/.test(k)) return `<span class="badge q">${esc(k)}</span>`;
    return `<span class="badge if">${esc(m)}</span>`;
  }).join("");
}
function renderPublications(){
  document.getElementById("pubFilters").innerHTML=PUB_KINDS.map(([k,lab])=>{
    const n = k==="all"?DATA.publications.length:DATA.publications.filter(p=>p.kind===k).length;
    if(k!=="all"&&n===0) return "";
    return `<button class="filter ${pubFilter===k?'active':''}" onclick="setFilter('${k}')">${lab} (${n})</button>`;
  }).join("");
  const items=DATA.publications.filter(p=>pubFilter==="all"||p.kind===pubFilter);
  document.getElementById("list-publications").innerHTML=items.map(p=>{
    const authors=esc(p.authors).replace(OWNER_NAME_RE,m=>`<span class="me">${m}</span>`);
    const title=p.url?`<a href="${esc(p.url)}" target="_blank" rel="noopener">${esc(p.title)}${icon('ext')}</a>`:esc(p.title);
    return `<div class="pub">
      <h3 class="pub-title">${title}</h3>
      <p class="pub-authors">${authors}</p>
      <p class="pub-venue"><em>${esc(p.venue)}</em>${p.year?" · "+esc(p.year):""}</p>
      ${p.metrics?`<div class="badges">${badgeHtml(p.metrics)}</div>`:""}
      ${adminRow('publications',p.id)}
    </div>`;
  }).join("");
  setCount("publications",DATA.publications.length);
}
function setFilter(k){ pubFilter=k; renderPublications(); }

/* ---------- icons ---------- */
function icon(n){
  const s='xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';
  if(n==='mail') return `<svg ${s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>`;
  if(n==='phone') return `<svg ${s}><path d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z"/></svg>`;
  if(n==='link') return `<svg ${s}><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>`;
  if(n==='scholar') return `<svg ${s}><path d="M12 3 2 8l10 5 8-4v6"/><path d="M6 11v4c0 1.5 2.7 3 6 3s6-1.5 6-3v-4"/></svg>`;
  if(n==='ext') return `<svg class="ext" ${s}><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>`;
  return "";
}

/* ---------- hero network motif (subject: supply-chain / optimization networks) ---------- */
(function net(){
  const svg=document.querySelector(".hero-net"); if(!svg) return;
  const W=940,H=300,N=26,pts=[];
  for(let i=0;i<N;i++) pts.push({x:Math.random()*W,y:Math.random()*H});
  let s="";
  for(let i=0;i<N;i++)for(let j=i+1;j<N;j++){
    const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
    if(d<128) s+=`<line x1="${pts[i].x.toFixed(1)}" y1="${pts[i].y.toFixed(1)}" x2="${pts[j].x.toFixed(1)}" y2="${pts[j].y.toFixed(1)}" stroke="#9DB4FF" stroke-opacity="${(0.22*(1-d/128)).toFixed(3)}" stroke-width="1"/>`;
  }
  for(const p of pts) s+=`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="2.1" fill="#B9C8FF" fill-opacity="0.5"/>`;
  svg.innerHTML=s;
})();

/* =====================================================================
   ADMIN — sign in with Firebase (only your account), then add/edit/delete
   ===================================================================== */
function toast(msg){ const t=document.getElementById("toast"); t.textContent=msg; t.classList.add("show"); setTimeout(()=>t.classList.remove("show"),2600); }
function closeModal(){ document.getElementById("modalBg").classList.remove("open"); document.getElementById("modalBody").innerHTML=""; }
document.getElementById("modalBg").addEventListener("click",e=>{ if(e.target.id==="modalBg") closeModal(); });

/* ---- roles: admin (you) edits everything; Jaipuria students view course content ---- */
const ADMIN_EMAIL="deveshkumar1993@gmail.com";
function currentUser(){ return (fb.ready && fb.auth) ? fb.auth.currentUser : null; }
function isAdmin(){ const u=currentUser(); return !!(u && (u.email||"").toLowerCase()===ADMIN_EMAIL); }
function isStudent(){ const u=currentUser(); return !!(u && /@jaipuria\.ac\.in$/i.test(u.email||"")); }
function canViewCourse(){ return isAdmin()||isStudent(); }
// "signed in" for the site's editing controls means the ADMIN is signed in
function isSignedIn(){ return isAdmin(); }
function refreshAdminUI(){
  const admin=isAdmin(), student=isStudent();
  document.body.classList.toggle("admin",admin);
  document.body.classList.toggle("viewer",student&&!admin);
  const b=document.getElementById("adminToggle");
  if(b){ b.textContent = admin ? "Sign out (admin)" : (student ? "Sign out" : "Sign in"); b.classList.toggle("on",admin||student); }
  renderCourses();
}
function toggleAdmin(){
  if(currentUser()){ fb.auth.signOut().then(()=>{ refreshAdminUI(); if(typeof closeCourse==="function") closeCourse(); toast("Signed out."); }); }
  else studentSignIn();              // the visible button is the STUDENT sign-in
}
document.getElementById("adminToggle").addEventListener("click",toggleAdmin);
const _sil=document.getElementById("signInLink"); if(_sil) _sil.addEventListener("click",openSignIn);

/* ---- hidden admin sign-in (not shown to visitors) ----
   Three private ways in: visit the URL with #admin, press Ctrl+Shift+A,
   or click the "Home" title 5 times quickly. All open the admin login. */
function openAdminSignIn(){ openSignIn(); }
window.addEventListener("keydown",e=>{ if(e.ctrlKey && e.shiftKey && (e.key==="a"||e.key==="A")){ e.preventDefault(); openAdminSignIn(); } });

/* ---- student sign-in via Google, restricted to @jaipuria.ac.in ---- */
async function studentSignIn(afterCourseId){
  if(!fb.ready){ toast("Not connected yet."); return; }
  try{
    const provider=new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({ hd:"jaipuria.ac.in", prompt:"select_account" });
    const res=await fb.auth.signInWithPopup(provider);
    const email=(res.user.email||"").toLowerCase();
    if(!(/@jaipuria\.ac\.in$/.test(email) || email===ADMIN_EMAIL)){
      await fb.auth.signOut();
      accessRestricted(email);
      return;
    }
    refreshAdminUI(); toast("Signed in.");
    if(afterCourseId) openCourse(afterCourseId);
  }catch(e){ /* popup closed / cancelled */ }
}
function accessRestricted(email){
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>Access restricted</h3>
    <p class="sub">Course materials are available only to Jaipuria accounts ending in <strong>@jaipuria.ac.in</strong>.${email?` The account <strong>${esc(email)}</strong> isn’t permitted.`:""}</p>
    <div class="modal-actions"><button class="btn primary" onclick="closeModal()">OK</button></div>`;
  document.getElementById("modalBg").classList.add("open");
}
function promptStudentLogin(courseId){
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>Sign in to view this course</h3>
    <p class="sub">These materials are for Jaipuria students. Sign in with your <strong>@jaipuria.ac.in</strong> Google account to continue.</p>
    <div class="modal-actions"><button class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="closeModal();studentSignIn('${courseId}')">Sign in with Google</button></div>`;
  document.getElementById("modalBg").classList.add("open");
}


/* ---- auto sign-out after 1 minute of inactivity ---- */
let idleTimer=null;
const IDLE_MS=60*1000;
function resetIdle(){
  if(idleTimer){ clearTimeout(idleTimer); idleTimer=null; }
  if(!isSignedIn()) return;
  idleTimer=setTimeout(()=>{
    if(isSignedIn() && fb.ready){ fb.auth.signOut().then(()=>{ refreshAdminUI(); toast("Signed out after 1 minute of inactivity."); }); }
  }, IDLE_MS);
}
["mousemove","mousedown","keydown","touchstart","scroll","click"].forEach(ev=>
  document.addEventListener(ev,resetIdle,{passive:true}));

function openSignIn(){
  const configured = fb.ready;
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>Owner sign-in</h3>
    <p class="sub">${configured?"Sign in with your email and password to edit this site.":"Firebase isn’t connected yet. Paste your Firebase config into app.js (see FIREBASE_SETUP.md), then reload."}</p>
    ${configured?`<div class="field"><label>Email</label><input id="siUser" type="email" autocomplete="username"></div>
      <div class="field"><label>Password</label><input id="siPass" type="password" autocomplete="current-password"></div>
      <div class="modal-actions"><button class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn primary" id="siBtn" onclick="doSignIn()">Sign in</button></div>`
    :`<div class="modal-actions"><button class="btn primary" onclick="closeModal()">Got it</button></div>`}`;
  document.getElementById("modalBg").classList.add("open");
  const u=document.getElementById("siUser"); const p=document.getElementById("siPass");
  if(u){ u.focus(); [u,p].forEach(el=>el.addEventListener("keydown",e=>{if(e.key==="Enter")doSignIn();})); }
}
async function doSignIn(){
  const email=(document.getElementById("siUser").value||"").trim();
  const password=document.getElementById("siPass").value||"";
  if(!email||!password) return;
  const btn=document.getElementById("siBtn"); if(btn){ btn.disabled=true; btn.textContent="Signing in…"; }
  try{
    await fb.auth.signInWithEmailAndPassword(email,password);
    closeModal(); refreshAdminUI(); resetIdle(); toast("Signed in — editing unlocked.");
    if(await loadLive()) renderAll();  // refresh with live data now that we're in
  }catch(e){
    if(btn){ btn.disabled=false; btn.textContent="Sign in"; }
    toast("Invalid email or password.");
  }
}

// One-time: copy the built-in CV into your empty database.
async function importCV(){
  if(!isSignedIn()){ toast("Sign in first."); return; }
  if(!confirm("Load the built-in CV into your database? This fills any empty sections; it won't create duplicates.")) return;
  try{
    const prof=await fb.db.collection("profile").doc("main").get();
    if(!prof.exists){ const {id,...pdata}=FALLBACK.profile; await fb.db.collection("profile").doc("main").set(pdata); }
    for(const c of COLLECTIONS){
      const snap=await fb.db.collection(c).limit(1).get();
      if(!snap.empty) continue; // already has data — skip
      for(const item of FALLBACK[c]){ const {id,...d}=item; await fb.db.collection(c).add(d); }
    }
    toast("Imported. Loading…");
    if(await loadLive()) renderAll();
  }catch(e){ toast("Import failed: "+(e.message||e)); }
}

function editProfile(){
  const p=DATA.profile;
  const f=[["name","Full name","text"],["role","Title / designation","text"],["place","Institute","text"],
    ["tagline","Research tagline (shown in the highlight banner)","text"],
    ["photo_url","Photo URL (paste an image link)","text"],["email","Email","text"],["phone","Phone","text"],
    ["scholar_url","Google Scholar URL","text"],["linkedin_url","LinkedIn URL","text"],["faculty_url","Faculty page URL","text"],
    ["about","About (blank line separates paragraphs)","textarea"],["interests","Research interests (comma separated)","textarea"]];
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>Edit profile</h3><p class="sub">Updates the header and About section.</p>`+
    f.map(([k,l,t])=>{ let val=k==="interests"?(p.interests||[]).join(", "):(p[k]||"");
      return `<div class="field"><label>${l}</label>${t==="textarea"?`<textarea id="pf_${k}">${esc(val)}</textarea>`:`<input id="pf_${k}" type="text" value="${esc(val)}">`}</div>`; }).join("")+
    `<div class="modal-actions"><button class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="saveProfile()">Save changes</button></div>`;
  document.getElementById("modalBg").classList.add("open");
}
async function saveProfile(){
  const keys=["name","role","place","tagline","photo_url","email","phone","scholar_url","linkedin_url","faculty_url","about"];
  const patch={}; keys.forEach(k=>patch[k]=document.getElementById("pf_"+k).value);
  patch.interests=document.getElementById("pf_interests").value.split(",").map(s=>s.trim()).filter(Boolean);
  try{
    if(isSignedIn()){ await fbSet("profile","main",patch); }
    DATA.profile={...DATA.profile,...patch}; closeModal(); renderProfile(); toast("Profile saved.");
  }catch(e){ toast(e.message||"Save failed."); }
}

function openForm(section,id){
  const sch=SCHEMA[section]; const item=id!=null?DATA[section].find(x=>String(x.id)===String(id)):null;
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>${item?"Edit":"Add"} — ${section.replace(/_/g,' ')}</h3><p class="sub">${isSignedIn()?"Saves to your live site.":"Preview only — sign in to save changes."}</p>`+
    sch.fields.map(f=>{
      const val=item?item[f.k]:(f.k==="sort_order"?(DATA[section].length+1):"");
      if(f.type==="bool") return `<div class="field"><label>${f.label}</label><select id="ff_${f.k}"><option value="false" ${!val?'selected':''}>No</option><option value="true" ${val?'selected':''}>Yes</option></select></div>`;
      if(f.type==="select") return `<div class="field"><label>${f.label}</label><select id="ff_${f.k}">${f.options.map(([o,l])=>`<option value="${o}" ${val===o?'selected':''}>${l}</option>`).join("")}</select></div>`;
      if(f.type==="textarea") return `<div class="field"><label>${f.label}</label><textarea id="ff_${f.k}">${esc(val)}</textarea></div>`;
      return `<div class="field"><label>${f.label}</label><input id="ff_${f.k}" type="${f.type==='number'?'number':'text'}" value="${esc(val)}"></div>`;
    }).join("")+
    `<div class="modal-actions"><button class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn primary" onclick="saveItem('${section}',${id!=null?`'${id}'`:'null'})">Save</button></div>`;
  document.getElementById("modalBg").classList.add("open");
}
async function saveItem(section,id){
  const sch=SCHEMA[section]; const obj={};
  sch.fields.forEach(f=>{ let v=document.getElementById("ff_"+f.k).value;
    if(f.type==="number") v=v===""?null:Number(v);
    if(f.type==="bool") v=(v==="true");
    obj[f.k]=v; });
  try{
    if(isSignedIn()){
      const newId=await fbSet(sch.table, id, obj);
      if(id==null) obj.id=newId;
    } else if(id==null){ obj.id="local_"+Date.now(); }
    if(id!=null){ const i=DATA[section].findIndex(x=>String(x.id)===String(id)); if(i>=0) DATA[section][i]={...DATA[section][i],...obj}; }
    else DATA[section].push(obj);
    DATA[section].sort((a,b)=>(a.sort_order||0)-(b.sort_order||0));
    closeModal(); renderAll(); toast("Saved.");
  }catch(e){ toast(e.message||"Save failed."); }
}
async function removeItem(section,id){
  if(!confirm("Delete this entry? This cannot be undone.")) return;
  try{
    if(isSignedIn()){ await fbDelete(SCHEMA[section].table,id); }
    DATA[section]=DATA[section].filter(x=>String(x.id)!==String(id)); renderAll(); toast("Deleted.");
  }catch(e){ toast(e.message||"Delete failed."); }
}

/* =====================================================================
   COURSES — public list (present/past), gated session content, admin CRUD
   ===================================================================== */
const COURSE_CACHE={};   // courseId -> {course, sessions:[{...,resources:[]}]}

function renderCourses(){
  const present=document.getElementById("present-courses");
  const past=document.getElementById("past-courses");
  if(!present||!past) return;
  const courses=DATA.courses||[];
  const pres=courses.filter(c=>c.status!=="past");
  const pst=courses.filter(c=>c.status==="past");
  present.innerHTML = pres.length ? pres.map(c=>courseCardHtml(c,true)).join("")
    : `<p class="empty-note">${isAdmin()?"No present courses yet — add one below.":"No current courses listed yet."}</p>`;
  past.innerHTML = pst.length ? pst.map(c=>courseCardHtml(c,false)).join("")
    : `<p class="empty-note">${isAdmin()?"No past courses yet.":"—"}</p>`;
}
function courseCardHtml(c,isPresent){
  const admin=isAdmin();
  const adminBtns = admin?`<div class="row-admin"><button class="abtn" onclick="event.stopPropagation();editCourse('${c.id}')">Edit</button><button class="abtn" onclick="event.stopPropagation();toggleCourseStatus('${c.id}')">${isPresent?'→ Past':'→ Present'}</button><button class="abtn del" onclick="event.stopPropagation();deleteCourse('${c.id}')">Delete</button></div>`:"";
  const clickAttrs = isPresent?`onclick="openCourse('${c.id}')" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openCourse('${c.id}')"`:"";
  return `<div class="course-card ${isPresent?'present':'past'}" ${clickAttrs}>
    <div class="cc-main">
      <p class="cc-name">${esc(c.name)}</p>
      ${c.term?`<p class="cc-term">${esc(c.term)}</p>`:""}
      ${isPresent?`<span class="cc-open">View sessions &rarr;</span>`:`<span class="cc-tag">Past course</span>`}
    </div>
    ${adminBtns}
  </div>`;
}

async function openCourse(id){
  const course=(DATA.courses||[]).find(c=>String(c.id)===String(id));
  if(!course) return;
  if(course.status==="past") return;
  if(!canViewCourse()){ promptStudentLogin(id); return; }
  let sessions;
  if(Array.isArray(course.sessions)){ sessions=course.sessions; }   // preview / built-in
  else{
    try{
      const ss=await fb.db.collection("courses").doc(id).collection("sessions").orderBy("sort_order").get();
      sessions=[];
      for(const sdoc of ss.docs){
        const s={id:sdoc.id,...sdoc.data()};
        const rr=await fb.db.collection("courses").doc(id).collection("sessions").doc(sdoc.id).collection("resources").orderBy("sort_order").get();
        s.resources=rr.docs.map(r=>({id:r.id,...r.data()}));
        sessions.push(s);
      }
    }catch(e){ toast("Couldn’t load course: "+(e.message||e)); return; }
  }
  COURSE_CACHE[id]={course,sessions};
  renderCourseView(course,sessions);
  location.hash="course/"+id;
}
function closeCourse(){
  const cv=document.getElementById("course-view"); if(cv) cv.style.display="none";
  const cs=document.getElementById("courses"); if(cs) cs.style.display="";
  if(location.hash.indexOf("#course/")===0) location.hash="courses";
}
function renderCourseView(course,sessions){
  const admin=isAdmin();
  const cv=document.getElementById("course-view"); if(!cv) return;
  const acc = sessions.length ? sessions.map(s=>sessionHtml(course.id,s,admin)).join("")
    : `<p class="empty-note">No sessions yet.${admin?" Add the first one below.":""}</p>`;
  cv.innerHTML=`<div class="wrap">
    <button class="back-link" onclick="closeCourse()">&larr; Back to courses</button>
    <h2 class="cv-title">${esc(course.name)}</h2>
    ${course.term?`<p class="cv-term">${esc(course.term)}</p>`:""}
    ${course.description?`<p class="cv-desc">${esc(course.description)}</p>`:""}
    <div class="accordion">${acc}</div>
    ${admin?`<div class="course-admin"><button class="abtn add" onclick="addSession('${course.id}',${sessions.length})">+ Add session</button></div>`:""}
  </div>`;
  cv.style.display="block";
  const cs=document.getElementById("courses"); if(cs) cs.style.display="none";
  window.scrollTo({top:Math.max(0,cv.offsetTop-70),behavior:"smooth"});
}
function sessionHtml(courseId,s,admin){
  const res=(s.resources||[]).map(r=>resourceHtml(courseId,s.id,r,admin)).join("");
  const adminS=admin?`<span class="row-admin"><button class="abtn" onclick="event.stopPropagation();editSession('${courseId}','${s.id}')">Edit</button><button class="abtn del" onclick="event.stopPropagation();deleteSession('${courseId}','${s.id}')">Delete</button></span>`:"";
  return `<div class="acc-item">
    <div class="acc-head" onclick="this.parentNode.classList.toggle('open')">
      <span class="acc-num">${esc(s.number!=null?s.number:"")}</span>
      <span class="acc-title">${esc(s.title||"Untitled session")}</span>
      ${adminS}
      <span class="acc-chev">&rsaquo;</span>
    </div>
    <div class="acc-body">
      ${s.description?`<p class="sess-desc">${esc(s.description)}</p>`:""}
      ${s.key_concepts?`<p class="sess-kc"><strong>Key concepts:</strong> ${esc(s.key_concepts)}</p>`:""}
      <div class="res-list">${res||`<p class="empty-note">No resources for this session.</p>`}</div>
      ${admin?`<div class="course-admin"><button class="abtn add" onclick="addResource('${courseId}','${s.id}',${(s.resources||[]).length})">+ Add resource</button></div>`:""}
    </div>
  </div>`;
}
function resourceHtml(courseId,sessionId,r,admin){
  const adminR=admin?`<span class="res-admin"><button class="abtn" onclick="editResource('${courseId}','${sessionId}','${r.id}')">Edit</button><button class="abtn del" onclick="deleteResource('${courseId}','${sessionId}','${r.id}')">Delete</button></span>`:"";
  const link=r.url?`href="${esc(r.url)}" target="_blank" rel="noopener"`:`href="#" onclick="return false"`;
  return `<div class="res-row">
    <a class="res-link" ${link}><span class="res-ic">${resIcon(r.title,r.url)}</span>
      <span class="res-main"><span class="res-title">${esc(r.title||"Resource")}</span>${r.description?`<span class="res-desc">${esc(r.description)}</span>`:""}</span></a>
    ${adminR}
  </div>`;
}
function resIcon(title,url){
  const t=((title||"")+" "+(url||"")).toLowerCase();
  if(/\.pptx?|slides?|presentation|ppt/.test(t)) return "📊";
  if(/\.ipynb|notebook/.test(t)) return "📓";
  if(/\.py\b|python/.test(t)) return "🐍";
  if(/\.xlsx?|excel|spreadsheet/.test(t)) return "📈";
  if(/\.csv|dataset|\bdata\b/.test(t)) return "📁";
  if(/\.pdf/.test(t)) return "📄";
  if(/video|youtube|\.mp4/.test(t)) return "🎬";
  return "🔗";
}

/* ---- generic form modal (course / session / resource) ---- */
function formModal(title,fields,values,onSave){
  const body=document.getElementById("modalBody");
  body.innerHTML=`<h3>${esc(title)}</h3>`+
    fields.map(f=>{
      const v=(values&&values[f.k]!=null)?values[f.k]:(f.def!=null?f.def:"");
      if(f.type==="textarea") return `<div class="field"><label>${esc(f.label)}</label><textarea id="fm_${f.k}">${esc(v)}</textarea></div>`;
      if(f.type==="select") return `<div class="field"><label>${esc(f.label)}</label><select id="fm_${f.k}">${f.options.map(([o,l])=>`<option value="${o}" ${String(v)===o?'selected':''}>${l}</option>`).join("")}</select></div>`;
      return `<div class="field"><label>${esc(f.label)}</label><input id="fm_${f.k}" type="${f.type==='number'?'number':'text'}" value="${esc(v)}"></div>`;
    }).join("")+
    `<div class="modal-actions"><button class="btn ghost" onclick="closeModal()">Cancel</button><button class="btn primary" id="fmSave">Save</button></div>`;
  document.getElementById("modalBg").classList.add("open");
  document.getElementById("fmSave").addEventListener("click",async()=>{
    const obj={}; fields.forEach(f=>{ let val=document.getElementById("fm_"+f.k).value; if(f.type==="number") val=val===""?null:Number(val); obj[f.k]=val; });
    const btn=document.getElementById("fmSave"); btn.disabled=true; btn.textContent="Saving…";
    try{ await onSave(obj); closeModal(); toast("Saved."); }
    catch(e){ btn.disabled=false; btn.textContent="Save"; toast(e.message||"Save failed."); }
  });
}
function guardAdmin(){ if(!isAdmin()) throw new Error("Only the administrator can do this."); }

/* ---- collapsible sections (click a heading to expand / collapse) ---- */
const SECTION_META={
  about:{icon:"ti-user",preview:"Background and research focus"},
  activity:{icon:"ti-clock",preview:"Latest talks, papers and milestones"},
  courses:{icon:"ti-book",preview:"Teaching and course materials"},
  education:{icon:"ti-school",preview:"B.Tech → M.Tech → PhD, MNIT Jaipur"},
  positions:{icon:"ti-briefcase",preview:"Current and past academic roles"},
  conferences:{icon:"ti-microphone-2",preview:"Conferences and workshops attended"},
  reviewing:{icon:"ti-checkbox",preview:"Journals I review for"},
  awards:{icon:"ti-award",preview:"Fellowships and honours"},
  publications:{icon:"ti-file-text",preview:"Journals, conferences and book chapters"},
  talks:{icon:"ti-presentation",preview:"Invited talks and guest lectures"}
};
function initCollapsible(){
  document.querySelectorAll("section.block").forEach(sec=>{
    const head=sec.querySelector(".sec-head");
    if(!head || head.dataset.collap) return;
    head.dataset.collap="1";
    const meta=SECTION_META[sec.id]||{icon:"ti-point",preview:""};
    const ic=document.createElement("span"); ic.className="sec-ic"; ic.innerHTML=`<i class="ti ${meta.icon}"></i>`;
    head.insertBefore(ic, head.firstChild);
    if(meta.preview){ const pv=document.createElement("span"); pv.className="sec-preview"; pv.textContent=meta.preview; head.appendChild(pv); }
    const chev=document.createElement("span"); chev.className="sec-toggle"; chev.innerHTML="&rsaquo;";
    head.appendChild(chev);
    head.addEventListener("click",e=>{ if(e.target.closest("button,a,.row-admin")) return; sec.classList.toggle("collapsed"); });
    if(sec.id!=="about") sec.classList.add("collapsed");
  });
}
/* ---- put the sections in the order the owner wants ---- */
function reorderSections(){
  const main=document.querySelector("main"); if(!main) return;
  ["about","activity","courses","education","positions","conferences","reviewing","awards","publications","talks"]
    .forEach(id=>{ const el=document.getElementById(id); if(el && el.parentNode===main) main.appendChild(el); });
}
/* ---- Home (brand) click: return to the top / close a course ---- */
let _brandClicks=0,_brandTimer=null;
function goHome(){
  _brandClicks++; clearTimeout(_brandTimer); _brandTimer=setTimeout(()=>_brandClicks=0,1200);
  if(_brandClicks>=5){ _brandClicks=0; openAdminSignIn(); return; }
  if(typeof closeCourse==="function") closeCourse(); if(location.hash) history.replaceState(null,"",location.pathname+location.search); window.scrollTo({top:0,behavior:"smooth"});
}

/* ---- course CRUD ---- */
const COURSE_FIELDS=[
  {k:"name",label:"Course name",type:"text"},
  {k:"term",label:"Term / year (optional)",type:"text"},
  {k:"description",label:"Short description (optional)",type:"textarea"},
  {k:"status",label:"Category",type:"select",options:[["present","Present (current)"],["past","Past"]]},
  {k:"sort_order",label:"Order (lower shows first)",type:"number"}
];
function addCourse(){ formModal("Add course",COURSE_FIELDS,{status:"present",sort_order:(DATA.courses||[]).length+1},o=>saveCourse(null,o)); }
function editCourse(id){ const c=(DATA.courses||[]).find(x=>String(x.id)===String(id)); formModal("Edit course",COURSE_FIELDS,c||{},o=>saveCourse(id,o)); }
async function saveCourse(id,o){ guardAdmin(); const col=fb.db.collection("courses"); if(id) await col.doc(id).set(o,{merge:true}); else await col.add(o); await reloadCourses(); renderCourses(); }
async function reloadCourses(){ if(!fb.ready) return; const snap=await fb.db.collection("courses").orderBy("sort_order").get(); DATA.courses=snap.docs.map(d=>({id:d.id,...d.data()})); }
async function toggleCourseStatus(id){ try{ guardAdmin(); const c=(DATA.courses||[]).find(x=>String(x.id)===String(id)); await fb.db.collection("courses").doc(id).set({status:c.status==="past"?"present":"past"},{merge:true}); await reloadCourses(); renderCourses(); toast("Moved."); }catch(e){ toast(e.message); } }
async function deleteCourse(id){ if(!confirm("Delete this course? Its sessions and resources will no longer be shown.")) return; try{ guardAdmin(); await fb.db.collection("courses").doc(id).delete(); await reloadCourses(); renderCourses(); toast("Deleted."); }catch(e){ toast(e.message); } }

/* ---- session CRUD ---- */
const SESSION_FIELDS=[
  {k:"number",label:"Session number",type:"number"},
  {k:"title",label:"Session title",type:"text"},
  {k:"description",label:"Description",type:"textarea"},
  {k:"key_concepts",label:"Key concepts covered",type:"textarea"},
  {k:"sort_order",label:"Order",type:"number"}
];
function findSession(courseId,sid){ const c=COURSE_CACHE[courseId]; return c?c.sessions.find(s=>String(s.id)===String(sid)):null; }
function addSession(courseId,count){ formModal("Add session",SESSION_FIELDS,{number:count+1,sort_order:count+1},o=>saveSession(courseId,null,o)); }
function editSession(courseId,id){ formModal("Edit session",SESSION_FIELDS,findSession(courseId,id)||{},o=>saveSession(courseId,id,o)); }
async function saveSession(courseId,id,o){ guardAdmin(); const col=fb.db.collection("courses").doc(courseId).collection("sessions"); if(id) await col.doc(id).set(o,{merge:true}); else await col.add(o); await openCourse(courseId); }
async function deleteSession(courseId,id){ if(!confirm("Delete this session and its resources?")) return; try{ guardAdmin(); await fb.db.collection("courses").doc(courseId).collection("sessions").doc(id).delete(); await openCourse(courseId); toast("Deleted."); }catch(e){ toast(e.message); } }

/* ---- resource CRUD ---- */
const RESOURCE_FIELDS=[
  {k:"title",label:"Resource title (e.g. 📊 Intro – Lecture Slides)",type:"text"},
  {k:"description",label:"Description (optional)",type:"text"},
  {k:"url",label:"Link (Google Drive share link, etc.)",type:"text"},
  {k:"sort_order",label:"Order",type:"number"}
];
function findResource(courseId,sid,rid){ const s=findSession(courseId,sid); return s&&s.resources?s.resources.find(r=>String(r.id)===String(rid)):null; }
function addResource(courseId,sid,count){ formModal("Add resource",RESOURCE_FIELDS,{sort_order:count+1},o=>saveResource(courseId,sid,null,o)); }
function editResource(courseId,sid,rid){ formModal("Edit resource",RESOURCE_FIELDS,findResource(courseId,sid,rid)||{},o=>saveResource(courseId,sid,rid,o)); }
async function saveResource(courseId,sid,rid,o){ guardAdmin(); const col=fb.db.collection("courses").doc(courseId).collection("sessions").doc(sid).collection("resources"); if(rid) await col.doc(rid).set(o,{merge:true}); else await col.add(o); await openCourse(courseId); }
async function deleteResource(courseId,sid,rid){ if(!confirm("Delete this resource?")) return; try{ guardAdmin(); await fb.db.collection("courses").doc(courseId).collection("sessions").doc(sid).collection("resources").doc(rid).delete(); await openCourse(courseId); toast("Deleted."); }catch(e){ toast(e.message); } }

function handleHash(){ const h=(location.hash||"").replace(/^#/,""); if(h==="admin"){ history.replaceState(null,"",location.pathname+location.search); openAdminSignIn(); return; } if(h.indexOf("course/")===0){ openCourse(h.split("/")[1]); } }
window.addEventListener("hashchange",()=>{ const h=(location.hash||"").replace(/^#/,""); if(h==="admin"){ history.replaceState(null,"",location.pathname+location.search); openAdminSignIn(); return; } if(h==="courses"||h===""){ const cv=document.getElementById("course-view"); if(cv&&cv.style.display==="block") closeCourse(); } });

/* ---------- boot ---------- */
(async function boot(){
  initFirebase();
  LIVE=await loadLive();
  renderAll();
  reorderSections();
  initCollapsible();
  refreshAdminUI();
  handleHash();
  if(fb.ready){ fb.auth.onAuthStateChanged(async ()=>{ refreshAdminUI(); resetIdle(); if(isAdmin() && await loadLive()) renderAll(); }); }
})();
