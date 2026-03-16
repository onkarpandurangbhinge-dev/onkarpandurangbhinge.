// ╔══════════════════════════════════════════════════════════════════╗
// ║     MIT VISHWAPRAYAG — SMART ATTENDANCE SYSTEM                  ║
// ║     COMPLETE BACKEND CODE                                        ║
// ║     All logic, APIs, storage, calculations, data models          ║
// ╚══════════════════════════════════════════════════════════════════╝


// ════════════════════════════════════════════════════════════════════
//  SECTION 1 — DATA MODELS
//  All master data: branches, subjects, students
// ════════════════════════════════════════════════════════════════════

// ── 1A. BRANCHES ──────────────────────────────────────────────────
const BRANCHES = [
  { id:"CSE",      label:"CSE",           full:"Computer Science & Engineering",                  color:"#00f5c3" },
  { id:"CSE_AIML", label:"CSE (AI & ML)", full:"CSE — Artificial Intelligence & Machine Learning", color:"#a78bfa" },
  { id:"IT",       label:"IT",            full:"Information Technology",                          color:"#38bdf8" },
  { id:"BCA",      label:"BCA",           full:"Bachelor of Computer Applications",               color:"#f59e0b" },
  { id:"MCA",      label:"MCA",           full:"Master of Computer Applications",                 color:"#ec4899" },
  { id:"MBA",      label:"MBA",           full:"Master of Business Administration",               color:"#ff4d6d" },
  { id:"BBA",      label:"BBA",           full:"Bachelor of Business Administration",             color:"#fb923c" },
  { id:"PHARMA",   label:"Pharma",        full:"Bachelor of Pharmacy",                            color:"#34d399" },
];

// ── 1B. SUBJECTS (64 subjects across 8 branches) ──────────────────
const SUBJECTS = [

  // ── CSE — 8 subjects (your original course table) ──
  { id:1,  branch:"CSE",      code:"AS1002", type:"BS", name:"Calculus",                         L:3, T:1, P:0, total:4 },
  { id:2,  branch:"CSE",      code:"AS1201", type:"BS", name:"Applied Chemistry for Engineers",   L:3, T:0, P:0, total:3 },
  { id:3,  branch:"CSE",      code:"AS1003", type:"PC", name:"Discrete Mathematics",              L:3, T:1, P:0, total:4 },
  { id:4,  branch:"CSE",      code:"SE1008", type:"ES", name:"Digital Logic Design",              L:3, T:0, P:0, total:3 },
  { id:5,  branch:"CSE",      code:"SC1141", type:"ES", name:"Data Structures using C",           L:3, T:0, P:0, total:3 },
  { id:6,  branch:"CSE",      code:"SE1009", type:"ES", name:"Digital Logic Design Lab",          L:0, T:0, P:1, total:1 },
  { id:7,  branch:"CSE",      code:"SC1142", type:"ES", name:"Data Structures using C Lab",       L:0, T:0, P:2, total:2 },
  { id:8,  branch:"CSE",      code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── CSE AI & ML — 8 subjects ──
  { id:9,  branch:"CSE_AIML", code:"AI1001", type:"CC", name:"Introduction to AI",                L:3, T:1, P:0, total:4 },
  { id:10, branch:"CSE_AIML", code:"AI1002", type:"CC", name:"Machine Learning Fundamentals",     L:3, T:0, P:0, total:3 },
  { id:11, branch:"CSE_AIML", code:"AI1003", type:"CC", name:"Deep Learning & Neural Networks",   L:3, T:0, P:0, total:3 },
  { id:12, branch:"CSE_AIML", code:"AI1004", type:"CC", name:"Natural Language Processing",       L:3, T:1, P:0, total:4 },
  { id:13, branch:"CSE_AIML", code:"AI1005", type:"PC", name:"Data Structures & Algorithms",      L:3, T:1, P:0, total:4 },
  { id:14, branch:"CSE_AIML", code:"AI1006", type:"PC", name:"Python for Data Science",           L:2, T:0, P:2, total:4 },
  { id:15, branch:"CSE_AIML", code:"AI1007", type:"ES", name:"Computer Vision Lab",               L:0, T:0, P:2, total:2 },
  { id:16, branch:"CSE_AIML", code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── IT — 8 subjects ──
  { id:17, branch:"IT",       code:"IT1001", type:"CC", name:"Programming in C",                  L:3, T:1, P:0, total:4 },
  { id:18, branch:"IT",       code:"IT1002", type:"CC", name:"Database Management Systems",       L:3, T:0, P:0, total:3 },
  { id:19, branch:"IT",       code:"IT1003", type:"CC", name:"Computer Networks",                 L:3, T:1, P:0, total:4 },
  { id:20, branch:"IT",       code:"IT1004", type:"CC", name:"Web Technologies",                  L:2, T:0, P:2, total:4 },
  { id:21, branch:"IT",       code:"IT1005", type:"ES", name:"Operating Systems",                 L:3, T:0, P:0, total:3 },
  { id:22, branch:"IT",       code:"IT1006", type:"ES", name:"Network Lab",                       L:0, T:0, P:2, total:2 },
  { id:23, branch:"IT",       code:"IT1007", type:"ES", name:"DBMS Lab",                          L:0, T:0, P:2, total:2 },
  { id:24, branch:"IT",       code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── BCA — 8 subjects ──
  { id:25, branch:"BCA",      code:"BCA101", type:"CC", name:"Fundamentals of Computing",         L:3, T:1, P:0, total:4 },
  { id:26, branch:"BCA",      code:"BCA102", type:"CC", name:"Programming in C++",                L:3, T:0, P:2, total:5 },
  { id:27, branch:"BCA",      code:"BCA103", type:"CC", name:"Database Systems",                  L:3, T:0, P:0, total:3 },
  { id:28, branch:"BCA",      code:"BCA104", type:"CC", name:"Web Development",                   L:2, T:0, P:2, total:4 },
  { id:29, branch:"BCA",      code:"BCA105", type:"PC", name:"Networking Basics",                 L:3, T:1, P:0, total:4 },
  { id:30, branch:"BCA",      code:"BCA106", type:"ES", name:"Software Engineering",              L:3, T:0, P:0, total:3 },
  { id:31, branch:"BCA",      code:"BCA107", type:"ES", name:"Programming Lab",                   L:0, T:0, P:2, total:2 },
  { id:32, branch:"BCA",      code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── MCA — 8 subjects ──
  { id:33, branch:"MCA",      code:"MCA101", type:"CC", name:"Advanced Algorithms",               L:3, T:1, P:0, total:4 },
  { id:34, branch:"MCA",      code:"MCA102", type:"CC", name:"Advanced DBMS",                     L:3, T:0, P:0, total:3 },
  { id:35, branch:"MCA",      code:"MCA103", type:"CC", name:"Cloud Computing",                   L:3, T:0, P:0, total:3 },
  { id:36, branch:"MCA",      code:"MCA104", type:"CC", name:"Software Testing",                  L:3, T:1, P:0, total:4 },
  { id:37, branch:"MCA",      code:"MCA105", type:"PC", name:"Full Stack Development",            L:2, T:0, P:2, total:4 },
  { id:38, branch:"MCA",      code:"MCA106", type:"ES", name:"Cyber Security",                    L:3, T:0, P:0, total:3 },
  { id:39, branch:"MCA",      code:"MCA107", type:"ES", name:"Project Lab",                       L:0, T:0, P:4, total:4 },
  { id:40, branch:"MCA",      code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── MBA — 8 subjects ──
  { id:41, branch:"MBA",      code:"MBA101", type:"CC", name:"Management & Organizational Behavior", L:3, T:1, P:0, total:4 },
  { id:42, branch:"MBA",      code:"MBA102", type:"CC", name:"Financial Accounting",               L:3, T:0, P:0, total:3 },
  { id:43, branch:"MBA",      code:"MBA103", type:"CC", name:"Marketing Management",               L:3, T:1, P:0, total:4 },
  { id:44, branch:"MBA",      code:"MBA104", type:"CC", name:"Business Statistics",                L:3, T:0, P:0, total:3 },
  { id:45, branch:"MBA",      code:"MBA105", type:"PC", name:"Human Resource Management",         L:3, T:0, P:0, total:3 },
  { id:46, branch:"MBA",      code:"MBA106", type:"ES", name:"Business Communication",             L:2, T:1, P:0, total:3 },
  { id:47, branch:"MBA",      code:"MBA107", type:"ES", name:"Entrepreneurship & Innovation",      L:3, T:0, P:0, total:3 },
  { id:48, branch:"MBA",      code:"MBA108", type:"UC", name:"Digital Business Transformation",   L:2, T:0, P:0, total:2 },

  // ── BBA — 8 subjects ──
  { id:49, branch:"BBA",      code:"BBA101", type:"CC", name:"Principles of Management",          L:3, T:1, P:0, total:4 },
  { id:50, branch:"BBA",      code:"BBA102", type:"CC", name:"Business Economics",                L:3, T:0, P:0, total:3 },
  { id:51, branch:"BBA",      code:"BBA103", type:"CC", name:"Financial Management",              L:3, T:1, P:0, total:4 },
  { id:52, branch:"BBA",      code:"BBA104", type:"CC", name:"Marketing Fundamentals",            L:3, T:0, P:0, total:3 },
  { id:53, branch:"BBA",      code:"BBA105", type:"PC", name:"Business Law",                      L:2, T:1, P:0, total:3 },
  { id:54, branch:"BBA",      code:"BBA106", type:"ES", name:"Accounting Principles",             L:3, T:0, P:0, total:3 },
  { id:55, branch:"BBA",      code:"BBA107", type:"ES", name:"Business Communication",            L:2, T:1, P:0, total:3 },
  { id:56, branch:"BBA",      code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },

  // ── PHARMA — 8 subjects ──
  { id:57, branch:"PHARMA",   code:"PH1001", type:"CC", name:"Pharmaceutical Chemistry",          L:3, T:1, P:0, total:4 },
  { id:58, branch:"PHARMA",   code:"PH1002", type:"CC", name:"Pharmacology",                      L:3, T:0, P:0, total:3 },
  { id:59, branch:"PHARMA",   code:"PH1003", type:"CC", name:"Pharmaceutics",                     L:3, T:1, P:0, total:4 },
  { id:60, branch:"PHARMA",   code:"PH1004", type:"CC", name:"Pharmacognosy",                     L:3, T:0, P:0, total:3 },
  { id:61, branch:"PHARMA",   code:"PH1005", type:"PC", name:"Biochemistry",                      L:3, T:1, P:0, total:4 },
  { id:62, branch:"PHARMA",   code:"PH1006", type:"ES", name:"Drug Regulatory Affairs",           L:2, T:0, P:0, total:2 },
  { id:63, branch:"PHARMA",   code:"PH1007", type:"ES", name:"Pharma Lab Practical",              L:0, T:0, P:4, total:4 },
  { id:64, branch:"PHARMA",   code:"UC1201", type:"UC", name:"AI for All",                        L:0, T:1, P:2, total:3 },
];

// ── Helper: get all subject IDs for a branch ──────────────────────
const branchSubs = (branchId) =>
  SUBJECTS.filter(s => s.branch === branchId).map(s => s.id);

// ── 1C. DEFAULT STUDENTS (41 students, 5+ per branch) ─────────────
const DEF_STUDENTS = [

  // CSE
  { id:1,  name:"Arjun Sharma",    roll:"CS001", cls:"CSE-A",  branch:"CSE",      batch:"Batch 1", parentEmail:"parent.arjun@gmail.com",   subjects:branchSubs("CSE"),      faceRegistered:false },
  { id:2,  name:"Priya Mehta",     roll:"CS002", cls:"CSE-A",  branch:"CSE",      batch:"Batch 1", parentEmail:"parent.priya@gmail.com",    subjects:branchSubs("CSE"),      faceRegistered:false },
  { id:3,  name:"Rahul Verma",     roll:"CS003", cls:"CSE-B",  branch:"CSE",      batch:"Batch 2", parentEmail:"parent.rahul@gmail.com",    subjects:[1,3,5,7,8],            faceRegistered:false },
  { id:4,  name:"Sneha Patil",     roll:"CS004", cls:"CSE-B",  branch:"CSE",      batch:"Batch 2", parentEmail:"parent.sneha@gmail.com",    subjects:[1,2,4,6,7,8],          faceRegistered:false },
  { id:5,  name:"Vikram Singh",    roll:"CS005", cls:"CSE-A",  branch:"CSE",      batch:"Batch 1", parentEmail:"parent.vikram@gmail.com",   subjects:branchSubs("CSE"),      faceRegistered:false },
  { id:6,  name:"Ananya Iyer",     roll:"CS006", cls:"CSE-C",  branch:"CSE",      batch:"Batch 1", parentEmail:"parent.ananya@gmail.com",   subjects:branchSubs("CSE"),      faceRegistered:false },

  // CSE AI & ML
  { id:7,  name:"Rohan Gupta",     roll:"AI001", cls:"AIML-A", branch:"CSE_AIML", batch:"Batch 1", parentEmail:"parent.rohan@gmail.com",    subjects:branchSubs("CSE_AIML"), faceRegistered:false },
  { id:8,  name:"Divya Nair",      roll:"AI002", cls:"AIML-A", branch:"CSE_AIML", batch:"Batch 1", parentEmail:"parent.divya@gmail.com",    subjects:branchSubs("CSE_AIML"), faceRegistered:false },
  { id:9,  name:"Kiran Desai",     roll:"AI003", cls:"AIML-B", branch:"CSE_AIML", batch:"Batch 2", parentEmail:"parent.kiran@gmail.com",    subjects:[9,10,11,13,15,16],     faceRegistered:false },
  { id:10, name:"Pooja Joshi",     roll:"AI004", cls:"AIML-B", branch:"CSE_AIML", batch:"Batch 2", parentEmail:"parent.pooja@gmail.com",    subjects:branchSubs("CSE_AIML"), faceRegistered:false },
  { id:11, name:"Siddharth Rao",   roll:"AI005", cls:"AIML-A", branch:"CSE_AIML", batch:"Batch 1", parentEmail:"parent.sid@gmail.com",      subjects:[9,10,12,13,14,16],     faceRegistered:false },

  // IT
  { id:12, name:"Meera Krishnan",  roll:"IT001", cls:"IT-A",   branch:"IT",       batch:"Batch 1", parentEmail:"parent.meera@gmail.com",    subjects:branchSubs("IT"),       faceRegistered:false },
  { id:13, name:"Aakash Patel",    roll:"IT002", cls:"IT-A",   branch:"IT",       batch:"Batch 1", parentEmail:"parent.aakash@gmail.com",   subjects:branchSubs("IT"),       faceRegistered:false },
  { id:14, name:"Riya Shah",       roll:"IT003", cls:"IT-B",   branch:"IT",       batch:"Batch 2", parentEmail:"parent.riya@gmail.com",     subjects:[17,18,20,22,24],       faceRegistered:false },
  { id:15, name:"Nikhil Tiwari",   roll:"IT004", cls:"IT-B",   branch:"IT",       batch:"Batch 2", parentEmail:"parent.nikhil@gmail.com",   subjects:branchSubs("IT"),       faceRegistered:false },
  { id:16, name:"Kavya Menon",     roll:"IT005", cls:"IT-A",   branch:"IT",       batch:"Batch 1", parentEmail:"parent.kavya@gmail.com",    subjects:[17,19,20,21,23,24],    faceRegistered:false },

  // BCA
  { id:17, name:"Ishaan Bose",     roll:"BC001", cls:"BCA-A",  branch:"BCA",      batch:"Batch 1", parentEmail:"parent.ishaan@gmail.com",   subjects:branchSubs("BCA"),      faceRegistered:false },
  { id:18, name:"Ritika Saxena",   roll:"BC002", cls:"BCA-A",  branch:"BCA",      batch:"Batch 1", parentEmail:"parent.ritika@gmail.com",   subjects:branchSubs("BCA"),      faceRegistered:false },
  { id:19, name:"Manav Khanna",    roll:"BC003", cls:"BCA-B",  branch:"BCA",      batch:"Batch 2", parentEmail:"parent.manav@gmail.com",    subjects:[25,26,28,30,32],       faceRegistered:false },
  { id:20, name:"Shreya Dubey",    roll:"BC004", cls:"BCA-B",  branch:"BCA",      batch:"Batch 2", parentEmail:"parent.shreya@gmail.com",   subjects:branchSubs("BCA"),      faceRegistered:false },
  { id:21, name:"Yash Kapoor",     roll:"BC005", cls:"BCA-A",  branch:"BCA",      batch:"Batch 1", parentEmail:"parent.yash@gmail.com",     subjects:[25,27,28,29,31,32],    faceRegistered:false },

  // MCA
  { id:22, name:"Tanvi Malhotra",  roll:"MC001", cls:"MCA-A",  branch:"MCA",      batch:"Batch 1", parentEmail:"parent.tanvi@gmail.com",    subjects:branchSubs("MCA"),      faceRegistered:false },
  { id:23, name:"Aryan Chaudhary", roll:"MC002", cls:"MCA-A",  branch:"MCA",      batch:"Batch 1", parentEmail:"parent.aryan@gmail.com",    subjects:branchSubs("MCA"),      faceRegistered:false },
  { id:24, name:"Naina Sinha",     roll:"MC003", cls:"MCA-B",  branch:"MCA",      batch:"Batch 2", parentEmail:"parent.naina@gmail.com",    subjects:[33,34,36,37,40],       faceRegistered:false },
  { id:25, name:"Varun Pillai",    roll:"MC004", cls:"MCA-B",  branch:"MCA",      batch:"Batch 2", parentEmail:"parent.varun@gmail.com",    subjects:branchSubs("MCA"),      faceRegistered:false },
  { id:26, name:"Diya Reddy",      roll:"MC005", cls:"MCA-A",  branch:"MCA",      batch:"Batch 1", parentEmail:"parent.diya@gmail.com",     subjects:[33,35,37,38,39,40],    faceRegistered:false },

  // MBA
  { id:27, name:"Aditya Kumar",    roll:"MB001", cls:"MBA-A",  branch:"MBA",      batch:"Batch 1", parentEmail:"parent.aditya@gmail.com",   subjects:branchSubs("MBA"),      faceRegistered:false },
  { id:28, name:"Simran Ahuja",    roll:"MB002", cls:"MBA-A",  branch:"MBA",      batch:"Batch 1", parentEmail:"parent.simran@gmail.com",   subjects:branchSubs("MBA"),      faceRegistered:false },
  { id:29, name:"Rohit Bansal",    roll:"MB003", cls:"MBA-B",  branch:"MBA",      batch:"Batch 2", parentEmail:"parent.rohit@gmail.com",    subjects:[41,42,44,46,48],       faceRegistered:false },
  { id:30, name:"Pooja Aggarwal",  roll:"MB004", cls:"MBA-B",  branch:"MBA",      batch:"Batch 2", parentEmail:"parent.poojaa@gmail.com",   subjects:branchSubs("MBA"),      faceRegistered:false },
  { id:31, name:"Saurabh Mishra",  roll:"MB005", cls:"MBA-A",  branch:"MBA",      batch:"Batch 1", parentEmail:"parent.saurabh@gmail.com",  subjects:[41,43,44,45,47,48],    faceRegistered:false },

  // BBA
  { id:32, name:"Neha Tripathi",   roll:"BB001", cls:"BBA-A",  branch:"BBA",      batch:"Batch 1", parentEmail:"parent.neha@gmail.com",     subjects:branchSubs("BBA"),      faceRegistered:false },
  { id:33, name:"Sameer Jain",     roll:"BB002", cls:"BBA-A",  branch:"BBA",      batch:"Batch 1", parentEmail:"parent.sameer@gmail.com",   subjects:branchSubs("BBA"),      faceRegistered:false },
  { id:34, name:"Prachi Gupta",    roll:"BB003", cls:"BBA-B",  branch:"BBA",      batch:"Batch 2", parentEmail:"parent.prachi@gmail.com",   subjects:[49,50,52,54,56],       faceRegistered:false },
  { id:35, name:"Aman Rawat",      roll:"BB004", cls:"BBA-B",  branch:"BBA",      batch:"Batch 2", parentEmail:"parent.aman@gmail.com",     subjects:branchSubs("BBA"),      faceRegistered:false },
  { id:36, name:"Shalini Yadav",   roll:"BB005", cls:"BBA-A",  branch:"BBA",      batch:"Batch 1", parentEmail:"parent.shalini@gmail.com",  subjects:[49,51,52,53,55,56],    faceRegistered:false },

  // PHARMA
  { id:37, name:"Gaurav Sethi",    roll:"PH001", cls:"PH-A",   branch:"PHARMA",   batch:"Batch 1", parentEmail:"parent.gaurav@gmail.com",   subjects:branchSubs("PHARMA"),   faceRegistered:false },
  { id:38, name:"Ankita Singh",    roll:"PH002", cls:"PH-A",   branch:"PHARMA",   batch:"Batch 1", parentEmail:"parent.ankita@gmail.com",   subjects:branchSubs("PHARMA"),   faceRegistered:false },
  { id:39, name:"Deepak Nair",     roll:"PH003", cls:"PH-B",   branch:"PHARMA",   batch:"Batch 2", parentEmail:"parent.deepak@gmail.com",   subjects:[57,58,60,62,64],       faceRegistered:false },
  { id:40, name:"Bhavna Tiwari",   roll:"PH004", cls:"PH-B",   branch:"PHARMA",   batch:"Batch 2", parentEmail:"parent.bhavna@gmail.com",   subjects:branchSubs("PHARMA"),   faceRegistered:false },
  { id:41, name:"Chirag Vora",     roll:"PH005", cls:"PH-A",   branch:"PHARMA",   batch:"Batch 1", parentEmail:"parent.chirag@gmail.com",   subjects:[57,59,61,62,63,64],    faceRegistered:false },
];


// ════════════════════════════════════════════════════════════════════
//  SECTION 2 — ATTENDANCE LOG SEEDER
//  Creates 30 days of realistic attendance data for all students
// ════════════════════════════════════════════════════════════════════

/*
  Attendance Log Entry Shape:
  {
    date:      "2025-03-15"   // ISO date string
    studentId: 1              // links to student.id
    subjectId: 3              // links to subject.id
    present:   true/false     // was student present?
    method:    "manual"       // "manual" | "face_scan"
  }
*/

function seedLog() {
  const log = [];
  const now = new Date();

  // Students with LOW attendance (below 75%) — will trigger parent alerts
  const lowAttendanceIds = [3, 9, 19, 24, 29, 34, 39];

  // Students with MEDIUM attendance (~65-70%)
  const midAttendanceIds = [5, 14, 23, 30, 35];

  // All others get HIGH attendance (~85%)

  DEF_STUDENTS.forEach(student => {
    for (let daysAgo = 30; daysAgo >= 1; daysAgo--) {

      const date = new Date(now);
      date.setDate(now.getDate() - daysAgo);

      // Skip weekends (no classes on Saturday=6 or Sunday=0)
      if ([0, 6].includes(date.getDay())) continue;

      const dateStr = date.toISOString().slice(0, 10);

      // Set attendance chance based on student profile
      let presentChance;
      if (lowAttendanceIds.includes(student.id)) {
        presentChance = 0.50; // 50% — will be flagged for parent alert
      } else if (midAttendanceIds.includes(student.id)) {
        presentChance = 0.67; // 67% — borderline
      } else {
        presentChance = 0.85; // 85% — good attendance
      }

      // Create one attendance record per subject per day
      student.subjects.forEach(subjectId => {
        log.push({
          date:      dateStr,
          studentId: student.id,
          subjectId: subjectId,
          present:   Math.random() < presentChance,
          method:    "manual"
        });
      });
    }
  });

  return log;
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 3 — LOCAL STORAGE (DATABASE LAYER)
//  Handles all data persistence using browser localStorage
// ════════════════════════════════════════════════════════════════════

// Version tag — when changed, old cached data is cleared automatically
const DATA_VERSION = "v3_branches";

// Auto-clear stale data when version changes
(function() {
  try {
    if (localStorage.getItem("sa_data_ver") !== DATA_VERSION) {
      ["sa_students", "sa_log", "sa_alerts"].forEach(k => localStorage.removeItem(k));
      localStorage.setItem("sa_data_ver", DATA_VERSION);
    }
  } catch(e) {}
})();

// Storage API — safe wrapper around localStorage
const LS = {

  // READ — get stored value or return fallback
  get: (key, fallback) => {
    try {
      const val = localStorage.getItem(key);
      if (val === null || val === undefined || val === "undefined" || val === "null")
        return fallback;
      const parsed = JSON.parse(val);
      return (parsed !== null && parsed !== undefined) ? parsed : fallback;
    } catch {
      return fallback;
    }
  },

  // WRITE — save value as JSON
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  },

  // DELETE — remove a specific key
  del: (key) => {
    try { localStorage.removeItem(key); } catch {}
  },

  // CLEAR ALL APP DATA — reset everything
  clear: () => {
    try {
      ["sa_dark", "sa_screen", "sa_session", "sa_profs",
       "sa_students", "sa_log", "sa_alerts", "sa_data_ver"]
        .forEach(k => localStorage.removeItem(k));
    } catch {}
  }
};

/*
  STORAGE KEYS USED:
  ┌─────────────────┬──────────────────────────────────────────┐
  │ sa_dark         │ boolean — dark mode on/off               │
  │ sa_data_ver     │ string  — data version for cache busting │
  │ sa_students     │ array   — all student records            │
  │ sa_log          │ array   — all attendance log entries     │
  │ sa_alerts       │ object  — parent alert statuses          │
  └─────────────────┴──────────────────────────────────────────┘
*/


// ════════════════════════════════════════════════════════════════════
//  SECTION 4 — ATTENDANCE CALCULATION ENGINE
//  Pure functions — no side effects, fully testable
// ════════════════════════════════════════════════════════════════════

// Get today's date as YYYY-MM-DD string
const todayStr = () => new Date().toISOString().slice(0, 10);

// Get initials from full name ("Arjun Sharma" → "AS")
const ini = name => name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

// Color based on attendance percentage
// >=75% = green, >=60% = amber, <60% = red
const pctColor = p => p >= 75 ? "#00f5c3" : p >= 60 ? "#f5a623" : "#ff4d6d";

// Badge label + style key based on percentage
const pctBadge = p => p >= 75 ? { t:"Good", c:"ok" }
                    : p >= 60 ? { t:"Warning", c:"warn" }
                    :           { t:"Critical", c:"crit" };

/*
  calcSubject — attendance for ONE student in ONE subject
  Returns: { pct: 0-100, held: number, attended: number }
*/
function calcSubject(studentId, subjectId, log) {
  const records = log.filter(r => r.studentId === studentId && r.subjectId === subjectId);

  if (!records.length) return { pct: 100, held: 0, attended: 0 };

  const held     = records.length;
  const attended = records.filter(r => r.present).length;
  const pct      = Math.round((attended / held) * 100);

  return { pct, held, attended };
}

/*
  calcOverall — overall attendance % for one student across all subjects
  Returns: number (0-100)
*/
function calcOverall(studentId, subjectIds, log) {
  if (!subjectIds.length) return 100;

  const perSubject = subjectIds.map(sid => calcSubject(studentId, sid, log));
  const average    = Math.round(perSubject.reduce((sum, s) => sum + s.pct, 0) / perSubject.length);

  return average;
}

/*
  calc15Days — attendance stats for last 15 school days only
  Used for competition leaderboard rankings
  Returns: { total: days, present: days, pct: 0-100 }
*/
function calc15Days(studentId, log) {
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 15);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  // Only records in last 15 days
  const recent = log.filter(r => r.studentId === studentId && r.date > cutoffStr);

  // Unique school days in that period
  const allDays     = new Set(recent.map(r => r.date));
  const presentDays = new Set(recent.filter(r => r.present).map(r => r.date));

  return {
    total:   allDays.size,
    present: presentDays.size,
    pct:     allDays.size ? Math.round(presentDays.size / allDays.size * 100) : 0
  };
}

/*
  calcScore — competition score formula
  Score = (days present × 10) + attendance percentage
  Higher score = better rank
*/
function calcScore(d15) {
  return d15.present * 10 + d15.pct;
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 5 — ALERT ENGINE
//  Decides when to fire parent alerts (below 75% threshold)
// ════════════════════════════════════════════════════════════════════

const ALERT_THRESHOLD = 75; // percent — configurable here

/*
  checkAndQueueAlerts
  Called after saving attendance. Returns list of student IDs
  whose attendance just dropped below threshold for the first time.

  Parameters:
    attendanceEntries — array of {studentId, present} just saved
    students          — full students array
    newLog            — updated full log after save
    existingAlerts    — current alerts object from state

  Returns: { alertsToAdd: {id → {status, date}}, count: number }
*/
function checkAndQueueAlerts(attendanceEntries, students, newLog, existingAlerts) {
  const alertsToAdd = {};
  const date = todayStr();

  attendanceEntries.forEach(([studentId, _present]) => {
    const id = parseInt(studentId);
    const student = students.find(s => s.id === id);
    if (!student) return;

    // Only alert if NOT already alerted
    if (existingAlerts[id]) return;

    const overallPct = calcOverall(id, student.subjects || [], newLog);

    if (overallPct < ALERT_THRESHOLD) {
      alertsToAdd[id] = { status: "pending", date };
    }
  });

  return {
    alertsToAdd,
    count: Object.keys(alertsToAdd).length
  };
}

/*
  buildAlertEmailBody
  Builds the full email text for a parent alert

  Parameters:
    student   — student object
    pct       — overall attendance percentage
    breakdown — array of {name, code, pct, attended, held}

  Returns: string (full email body)
*/
function buildAlertEmailBody(student, pct, breakdown) {
  const lines = breakdown
    .map(s => `• ${s.name} (${s.code}): ${s.pct}% — ${s.attended}/${s.held} classes`)
    .join("\n");

  return `Dear Parent/Guardian,

This is an automated alert from MIT Vishwaprayag Smart Attendance System.

Student:  ${student.name}
Roll No:  ${student.roll}
Class:    ${student.cls}
Branch:   ${student.branch}
Batch:    ${student.batch}

Overall Attendance: ${pct}% ⚠️
Minimum Required:   ${ALERT_THRESHOLD}%

Subject-wise Attendance:
${lines}

Please contact MIT Vishwaprayag immediately.

Regards,
SmartAttend AI System
MIT Vishwaprayag University`;
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 6 — AI API CALLS (Claude + Anthropic)
//  All external API functions — face scan, insights, Gmail
// ════════════════════════════════════════════════════════════════════

const CLAUDE_MODEL    = "claude-sonnet-4-20250514";
const CLAUDE_API_URL  = "https://api.anthropic.com/v1/messages";
const GMAIL_MCP_URL   = "https://gmail.mcp.claude.com/mcp";

// ── 6A. FACE LIVENESS DETECTION (Anti-Spoof) ──────────────────────
/*
  apiLiveness — sends a camera frame to Claude Vision
  for liveness detection (real person vs printed photo/screen/paper)

  Parameter:
    base64Image — base64 encoded JPEG string (from canvas.toDataURL)

  Returns:
  {
    live:       true/false       // is it a real live person?
    confidence: 0–100            // how confident
    reason:     "brief reason"   // human-readable explanation
    spoof_type: "none" | "printed_photo" | "screen" | "paper" | "card" | "other"
    warning:    "message to show the student"
  }
*/
async function apiLiveness(base64Image) {
  try {
    const response = await fetch(CLAUDE_API_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model:      CLAUDE_MODEL,
        max_tokens: 300,
        messages: [{
          role:    "user",
          content: [
            // Send the captured camera frame as an image
            {
              type:   "image",
              source: { type: "base64", media_type: "image/jpeg", data: base64Image }
            },
            // Instruct Claude to analyze for liveness
            {
              type: "text",
              text: `You are a liveness detection security system for student attendance.
Analyze this camera frame. Is it a LIVE real face or a SPOOF attempt?

SPOOF indicators to check:
- Flat/2D surface (printed photo, paper)
- Screen glow, moiré patterns, pixels, bezels
- Paper edges, card borders, photo frame
- Uniform flat lighting with no face shadows
- Glossy or matte paper texture
- Hands holding paper or phone visible
- Screen backlight or glare
- Printed halftone dots

Respond ONLY with this exact JSON (no markdown backticks):
{"live":true/false,"confidence":0-100,"reason":"brief reason","spoof_type":"none/printed_photo/screen/paper/card/other","warning":"message to show student"}`
            }
          ]
        }]
      })
    });

    const data = await response.json();
    const text = data.content?.find(b => b.type === "text")?.text || "{}";
    const clean = text.replace(/```json|```/g, "").trim();
    return JSON.parse(clean);

  } catch {
    // Return a safe failure state if API call fails
    return {
      live:       false,
      confidence: 0,
      reason:     "API error — could not analyze",
      spoof_type: "unknown",
      warning:    "Connection error. Please check network and retry."
    };
  }
}

// ── 6B. MULTI-FRAME LIVENESS SCAN (3 frames, majority vote) ───────
/*
  runLivenessScan — captures 3 frames over 3 seconds
  and applies majority voting for a final verdict

  Parameter:
    captureFrameFn — function that captures a base64 frame from camera
    onProgress     — callback(percent, status) for UI updates
    onCheckDone    — callback(checkResult) after each frame analysis

  Returns:
  {
    verdict:  "live" | "spoof" | "fail"
    result:   { live, confidence, reason, spoof_type, warning }
    checks:   array of 3 individual results
  }
*/
async function runLivenessScan(captureFrameFn, onProgress, onCheckDone) {
  const checks = [];

  for (let i = 0; i < 3; i++) {

    // Wait 1 second between captures
    await new Promise(resolve => setTimeout(resolve, 1000));
    onProgress((i + 1) / 3 * 55, "scanning");

    // Capture frame from camera
    const frame = captureFrameFn();
    if (!frame) return { verdict: "fail", result: null, checks };

    onProgress(55 + (i + 1) / 3 * 40, "analyzing");

    // Send to Claude Vision
    const result = await apiLiveness(frame);
    checks.push(result);
    onCheckDone(result);

    // IMMEDIATE spoof kill — if any single frame detects spoof with >62% confidence
    if (!result.live && result.confidence > 62) {
      return { verdict: "spoof", result, checks };
    }
  }

  onProgress(100, "done");

  // Majority vote — need at least 2 of 3 frames to confirm liveness
  const liveCount   = checks.filter(c => c.live).length;
  const avgConf     = Math.round(checks.reduce((a, c) => a + c.confidence, 0) / checks.length);
  const spoofCheck  = checks.find(c => !c.live && c.confidence > 55);

  if (spoofCheck) {
    return { verdict: "spoof", result: spoofCheck, checks };
  } else if (liveCount >= 2) {
    return {
      verdict: "live",
      result: { live: true, confidence: avgConf, reason: "Live face verified ✓", spoof_type: "none", warning: "" },
      checks
    };
  } else {
    return {
      verdict: "fail",
      result: { live: false, confidence: avgConf, reason: "Face unclear. Retry.", warning: "Ensure good lighting and face the camera directly." },
      checks
    };
  }
}

// ── 6C. AI ATTENDANCE INSIGHTS (Claude Text API) ──────────────────
/*
  apiInsight — generates 3 AI bullet-point insights from attendance data

  Parameters:
    students — students array
    log      — attendance log array

  Returns: string with 3 bullet points
*/
async function apiInsight(students, log) {
  try {
    // Build a summary of each student's attendance
    const stats = students.map(s => ({
      name:    s.name,
      branch:  s.branch,
      batch:   s.batch,
      overall: calcOverall(s.id, s.subjects, log),
      d15:     calc15Days(s.id, log).pct
    }));

    const response = await fetch(CLAUDE_API_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model:      CLAUDE_MODEL,
        max_tokens: 220,
        messages: [{
          role:    "user",
          content: `You are a school analytics AI for MIT Vishwaprayag.
Analyze this student attendance data and give EXACTLY 3 bullet point insights.
Each bullet must start with an emoji and be max 18 words.
Focus on trends, at-risk students, and top performers.

Data: ${JSON.stringify(stats)}`
        }]
      })
    });

    const data = await response.json();
    return data.content?.find(b => b.type === "text")?.text || "";

  } catch {
    return "• Could not load AI insights. Please check your network connection.";
  }
}

// ── 6D. GMAIL PARENT ALERT (Gmail MCP) ────────────────────────────
/*
  apiGmail — sends parent alert email via Gmail MCP integration

  Parameters:
    student   — student object
    pct       — overall attendance %
    breakdown — array of per-subject attendance

  Returns: { ok: boolean, simulated: boolean }
  - ok: true = API call succeeded
  - simulated: true = Gmail MCP didn't execute (no Gmail connected)
*/
async function apiGmail(student, pct, breakdown) {
  try {
    const emailBody = buildAlertEmailBody(student, pct, breakdown);

    const response = await fetch(CLAUDE_API_URL, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model:      CLAUDE_MODEL,
        max_tokens: 500,
        // Gmail MCP server — sends actual emails when connected
        mcp_servers: [{
          type: "url",
          url:  GMAIL_MCP_URL,
          name: "gmail"
        }],
        messages: [{
          role:    "user",
          content: `Send an email via Gmail with these exact details:

To:      ${student.parentEmail}
Subject: ⚠️ URGENT: Low Attendance Alert — ${student.name} (${student.roll})
Body:
${emailBody}`
        }]
      })
    });

    const data = await response.json();

    // Check if Gmail MCP tool was actually used
    const emailActuallySent = data.content?.some(
      b => b.type === "mcp_tool_use" || b.type === "tool_use"
    );

    return { ok: true, simulated: !emailActuallySent };

  } catch {
    return { ok: false, simulated: true };
  }
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 7 — STUDENT CRUD OPERATIONS
//  Create, Read, Update, Delete for student records
// ════════════════════════════════════════════════════════════════════

/*
  addStudent — validates and creates a new student record

  Parameters:
    formData  — { name, roll, cls, email, batch, branch }
    subjectIds — array of subject IDs to enroll in
    existingStudents — current students array (for duplicate check + ID)

  Returns: { ok: boolean, student?: object, error?: string }
*/
function addStudent(formData, subjectIds, existingStudents) {
  const { name, roll, cls, email, batch, branch } = formData;

  // Validation
  if (!name || !name.trim()) return { ok: false, error: "Student name is required." };
  if (!roll || !roll.trim()) return { ok: false, error: "Roll number is required." };
  if (!email || !email.trim()) return { ok: false, error: "Parent email is required." };
  if (!batch) return { ok: false, error: "Please select a batch (Batch 1 or Batch 2)." };
  if (!branch) return { ok: false, error: "Please select a branch." };

  // Email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { ok: false, error: "Please enter a valid parent email address." };
  }

  // Duplicate roll number check
  if (existingStudents.find(s => s.roll.toLowerCase() === roll.trim().toLowerCase())) {
    return { ok: false, error: `Roll number "${roll}" already exists.` };
  }

  // Auto-assign all branch subjects if none selected
  const finalSubjects = subjectIds.length > 0
    ? subjectIds
    : branchSubs(branch);

  // Generate new unique ID
  const newId = Math.max(...existingStudents.map(s => s.id), 0) + 1;

  const student = {
    id:             newId,
    name:           name.trim(),
    roll:           roll.trim().toUpperCase(),
    cls:            cls?.trim() || `${branch}-A`,
    branch:         branch,
    batch:          batch,
    parentEmail:    email.trim().toLowerCase(),
    subjects:       finalSubjects,
    faceRegistered: false
  };

  return { ok: true, student };
}

/*
  deleteStudent — removes a student and all their attendance records

  Parameters:
    studentId — number
    students  — current students array
    log       — current attendance log

  Returns: { students: array, log: array }
*/
function deleteStudent(studentId, students, log) {
  return {
    students: students.filter(s => s.id !== studentId),
    log:      log.filter(r => r.studentId !== studentId)
  };
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 8 — ATTENDANCE MARK & SAVE
//  Handles saving attendance entries to log
// ════════════════════════════════════════════════════════════════════

/*
  saveAttendance — saves marked attendance for a subject on today's date

  Parameters:
    markState  — { studentId: true/false, ... }  (present/absent map)
    subjectId  — number
    existingLog — current full attendance log
    method     — "manual" | "face_scan"

  Returns: newLog (updated attendance log array)
*/
function saveAttendance(markState, subjectId, existingLog, method = "manual") {
  const date = todayStr();

  // Remove any existing entries for this subject today (allow re-marking)
  const baseLog = existingLog.filter(
    r => !(r.date === date && r.subjectId === subjectId)
  );

  // Add new entries
  const newEntries = Object.entries(markState).map(([studentId, present]) => ({
    date:      date,
    studentId: parseInt(studentId),
    subjectId: subjectId,
    present:   present,
    method:    method
  }));

  return [...baseLog, ...newEntries];
}

/*
  markFaceScan — records a single face-scan verified attendance
  Called after successful liveness check

  Parameters:
    studentId  — number
    subjectId  — number
    existingLog — current log

  Returns: newLog
*/
function markFaceScan(studentId, subjectId, existingLog) {
  const date = todayStr();

  // Remove existing entry for this student+subject today if any
  const baseLog = existingLog.filter(
    r => !(r.date === date && r.studentId === studentId && r.subjectId === subjectId)
  );

  return [...baseLog, {
    date:      date,
    studentId: studentId,
    subjectId: subjectId,
    present:   true,
    method:    "face_scan"
  }];
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 9 — LEADERBOARD / COMPETITION ENGINE
//  Ranks students by last 15-day attendance
// ════════════════════════════════════════════════════════════════════

/*
  buildLeaderboard — ranks students by last 15-day attendance score

  Parameters:
    students   — students array
    log        — attendance log array
    filters    — { batch: "All"|"Batch 1"|"Batch 2", cls: "All"|string }

  Returns: ranked array of students with added fields:
    { ...student, d15, overall, score, rank }
*/
function buildLeaderboard(students, log, filters = {}) {
  const { batch = "All", cls = "All" } = filters;

  return students
    // Apply filters
    .filter(s =>
      (batch === "All" || s.batch === batch) &&
      (cls   === "All" || s.cls   === cls)
    )
    // Compute stats
    .map(s => {
      const d15     = calc15Days(s.id, log);
      const overall = calcOverall(s.id, s.subjects, log);
      const score   = calcScore(d15); // (present_days × 10) + attendance%
      return { ...s, d15, overall, score };
    })
    // Sort best score first
    .sort((a, b) => b.score - a.score)
    // Assign rank
    .map((s, i) => ({ ...s, rank: i + 1 }));
}

/*
  buildClassLeaderboards — builds per-class rankings
  Each student gets a rank within their own class

  Returns: { "CSE-A": [...ranked], "CSE-B": [...ranked], ... }
*/
function buildClassLeaderboards(students, log, batchFilter = "All") {
  const classes = [...new Set(students.map(s => s.cls))].sort();
  const result  = {};

  classes.forEach(cls => {
    const inClass = students
      .filter(s => s.cls === cls && (batchFilter === "All" || s.batch === batchFilter))
      .map(s => {
        const d15     = calc15Days(s.id, log);
        const overall = calcOverall(s.id, s.subjects, log);
        const score   = calcScore(d15);
        return { ...s, d15, overall, score };
      })
      .sort((a, b) => b.score - a.score)
      .map((s, i) => ({
        ...s,
        classRank:          i + 1,
        classTotalStudents: 0 // filled below
      }));

    inClass.forEach(s => s.classTotalStudents = inClass.length);
    result[cls] = inClass;
  });

  return result;
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 10 — REPORT GENERATOR
//  Builds detailed attendance data for the Reports page
// ════════════════════════════════════════════════════════════════════

/*
  buildReport — creates per-student per-subject rows for the reports table

  Parameters:
    students  — filtered students array
    log       — full attendance log
    filters   — { branch, batch }

  Returns: array of report rows sorted by lowest attendance first
  Each row: { student, subject, att:{pct,held,attended}, faceCount }
*/
function buildReport(students, log, filters = {}) {
  const { branch = "All", batch = "All" } = filters;

  return students
    .filter(s =>
      (branch === "All" || s.branch === branch) &&
      (batch  === "All" || s.batch  === batch)
    )
    .flatMap(student =>
      student.subjects.map(subjectId => {
        const subject   = SUBJECTS.find(s => s.id === subjectId);
        const att       = calcSubject(student.id, subjectId, log);
        const faceCount = log.filter(
          r => r.studentId === student.id &&
               r.subjectId === subjectId  &&
               r.method    === "face_scan"
        ).length;

        return { student, subject, att, faceCount };
      })
    )
    // Sort lowest attendance first (most critical on top)
    .sort((a, b) => a.att.pct - b.att.pct);
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 11 — FILTER & SEARCH HELPERS
// ════════════════════════════════════════════════════════════════════

/*
  filterStudents — filters student list by search query, batch and branch

  Parameters:
    students    — all students array
    searchQuery — string (name or roll number)
    batch       — "All" | "Batch 1" | "Batch 2"
    branch      — "All" | branch ID string

  Returns: filtered students array
*/
function filterStudents(students, searchQuery = "", batch = "All", branch = "All") {
  const q = searchQuery.toLowerCase().trim();

  return students.filter(s => {
    const matchSearch = !q ||
      s.name.toLowerCase().includes(q) ||
      s.roll.toLowerCase().includes(q);

    const matchBatch  = batch  === "All" || s.batch  === batch;
    const matchBranch = branch === "All" || s.branch === branch;

    return matchSearch && matchBatch && matchBranch;
  });
}


// ════════════════════════════════════════════════════════════════════
//  SECTION 12 — SUMMARY STATISTICS
//  Computed stats used on the Dashboard
// ════════════════════════════════════════════════════════════════════

/*
  getDashboardStats — returns all stats needed for dashboard

  Returns:
  {
    totalStudents:    number
    totalSubjects:    number
    totalCredits:     number
    presentToday:     number
    presentTodayPct:  number
    lowAttendance:    array of students below 75%
    todaySummary:     { [subjectId]: { present, absent } }
    branches:         { [branchId]: count }
  }
*/
function getDashboardStats(students, log) {
  const date     = todayStr();
  const todayLog = log.filter(r => r.date === date);

  // Present today = unique student IDs with at least one present record today
  const presentTodaySet = new Set(
    todayLog.filter(r => r.present).map(r => r.studentId)
  );

  // Low attendance students (below 75%)
  const lowAttendance = students.filter(
    s => calcOverall(s.id, s.subjects, log) < ALERT_THRESHOLD
  );

  // Today's per-subject summary
  const todaySummary = {};
  todayLog.forEach(r => {
    if (!todaySummary[r.subjectId]) todaySummary[r.subjectId] = { present:0, absent:0 };
    r.present ? todaySummary[r.subjectId].present++ : todaySummary[r.subjectId].absent++;
  });

  // Students per branch
  const branchCounts = {};
  BRANCHES.forEach(b => {
    branchCounts[b.id] = students.filter(s => s.branch === b.id).length;
  });

  return {
    totalStudents:   students.length,
    totalSubjects:   SUBJECTS.length,
    totalCredits:    SUBJECTS.reduce((a, s) => a + s.total, 0),
    presentToday:    presentTodaySet.size,
    presentTodayPct: students.length
      ? Math.round(presentTodaySet.size / students.length * 100) : 0,
    lowAttendance,
    todaySummary,
    branchCounts
  };
}


// ════════════════════════════════════════════════════════════════════
//  EXPORT SUMMARY
//  All functions available to use in the app
// ════════════════════════════════════════════════════════════════════

/*
  DATA MODELS:
    BRANCHES        — 8 branch definitions with colors
    SUBJECTS        — 64 subjects across all branches
    DEF_STUDENTS    — 41 default students (5+ per branch)
    branchSubs(id)  — get all subject IDs for a branch

  SEEDER:
    seedLog()       — generates 30 days of realistic attendance data

  STORAGE:
    LS.get(key, fallback)
    LS.set(key, value)
    LS.del(key)
    LS.clear()

  CALCULATIONS:
    calcSubject(studentId, subjectId, log)    → {pct, held, attended}
    calcOverall(studentId, subjectIds, log)   → number 0-100
    calc15Days(studentId, log)               → {total, present, pct}
    calcScore(d15)                           → number (leaderboard score)
    pctColor(pct)                            → color string
    pctBadge(pct)                            → {t, c}

  ATTENDANCE:
    saveAttendance(markState, subjectId, log, method)  → newLog
    markFaceScan(studentId, subjectId, log)            → newLog

  ALERTS:
    checkAndQueueAlerts(entries, students, log, existing)
    buildAlertEmailBody(student, pct, breakdown)
    apiGmail(student, pct, breakdown)              → {ok, simulated}

  AI APIs:
    apiLiveness(base64Image)       → {live, confidence, reason, spoof_type, warning}
    runLivenessScan(captureFn, onProgress, onCheckDone) → {verdict, result, checks}
    apiInsight(students, log)      → string (3 bullet insights)

  STUDENT CRUD:
    addStudent(formData, subjectIds, existing)  → {ok, student?, error?}
    deleteStudent(studentId, students, log)     → {students, log}

  REPORTS & RANKINGS:
    buildLeaderboard(students, log, filters)        → ranked array
    buildClassLeaderboards(students, log, batch)    → {cls: ranked[]}
    buildReport(students, log, filters)             → report rows
    filterStudents(students, query, batch, branch)  → filtered array
    getDashboardStats(students, log)                → stats object
*/
