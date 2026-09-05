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
    {k:"url",label:"Link to publisher / DOI",type:"text"},{k:"sort_order",label:"Order",type:"number"}]}
};
const PUB_KINDS=[["all","All"],["journal","Journal articles"],["conference","Conference papers"],["book","Books & chapters"],["other","Other"]];

let DATA = JSON.parse(JSON.stringify(FALLBACK));  // active copy
let LIVE = false;                                  // reading from the live database?
let pubFilter = "all";
const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ---------- Firebase (data + login) ----------
   Reads are public (security rules allow anyone to read).
   Writes require you to be signed in as the owner (rules enforce it). */
const COLLECTIONS = ["education","positions","conferences","reviewer_journals","awards","publications"];
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
    DATA = {profile:out.profile, education:out.education||[], positions:out.positions||[],
            conferences:out.conferences||[], reviewer_journals:out.reviewer_journals||[],
            awards:out.awards||[], publications:out.publications||[]};
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
function renderAll(){ renderProfile(); renderEducation(); renderPositions(); renderConferences(); renderReviewers(); renderAwards(); renderPublications(); }

function renderProfile(){
  const p=DATA.profile;
  document.getElementById("heroName").textContent=p.name;
  document.getElementById("heroRole").textContent=p.role;
  document.getElementById("heroPlace").textContent=p.place;
  document.getElementById("footName").textContent=p.name;
  document.getElementById("footYear").textContent="© "+new Date().getFullYear();
  const holder=document.getElementById("portraitHolder");
  if(p.photo_url){ holder.innerHTML=`<img class="portrait" src="${esc(p.photo_url)}" alt="${esc(p.name)}">`; }
  else{ const initials=p.name.replace(/^Dr\.?\s*/,"").split(/\s+/).map(w=>w[0]).join("").slice(0,2); holder.innerHTML=`<div class="portrait portrait-fallback">${esc(initials)}</div>`; }
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
function renderHeroBanner(p){
  const el=document.getElementById("heroBanner"); if(!el) return;
  // key highlights derived from the live data
  const pubs=DATA.publications||[];
  const pubCount=pubs.length;
  let topIF=0;
  pubs.forEach(x=>{ (x.metrics||"").split("|").forEach(m=>{ const[k,v]=m.split(":"); if(k==="IF"){ const n=parseFloat(v); if(n>topIF) topIF=n; } }); });
  const revCount=(DATA.reviewer_journals||[]).length;
  const stats=[];
  if(pubCount) stats.push([pubCount+"+","Publications"]);
  if(topIF)   stats.push([topIF.toFixed(1),"Peak impact factor"]);
  if(revCount) stats.push([revCount,"Journals reviewed"]);
  const pillars=(p.interests||[]).slice(0,4).map(t=>`<span class="hb-pill">${esc(t)}</span>`).join("");
  el.innerHTML=`
    ${p.tagline?`<p class="hb-tagline">${esc(p.tagline)}</p>`:""}
    ${stats.length?`<div class="hb-stats">${stats.map(([n,l])=>`<div class="hb-stat"><span class="hb-num">${esc(n)}</span><span class="hb-lab">${esc(l)}</span></div>`).join("")}</div>`:""}
    ${pillars?`<div class="hb-pillars">${pillars}</div>`:""}`;
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

function isSignedIn(){ return !!(fb.ready && fb.auth && fb.auth.currentUser); }
function refreshAdminUI(){
  const on=isSignedIn(); document.body.classList.toggle("admin",on);
  const b=document.getElementById("adminToggle"); b.textContent=on?"Signed in — sign out":"Sign in"; b.classList.toggle("on",on);
}
function toggleAdmin(){
  if(isSignedIn()){ fb.auth.signOut().then(()=>{ refreshAdminUI(); toast("Signed out."); }); }
  else openSignIn();
}
document.getElementById("adminToggle").addEventListener("click",toggleAdmin);
document.getElementById("signInLink").addEventListener("click",openSignIn);

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

/* ---------- boot ---------- */
(async function boot(){
  initFirebase();
  LIVE=await loadLive();
  renderAll();
  refreshAdminUI();
  // Firebase restores a previous sign-in asynchronously; update the UI when it does.
  if(fb.ready){ fb.auth.onAuthStateChanged(async ()=>{ refreshAdminUI(); resetIdle(); if(isSignedIn() && await loadLive()) renderAll(); }); }
})();
