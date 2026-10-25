/**
 * Smart Village / Gram Panchayat Portal (GramSeva 360)
 * Modern Glassmorphism e-Governance UI Controller
 */

// ================= GLOBAL STATE =================
const state = {
  currentRole: 'citizen', // 'citizen' | 'farmer' | 'admin'
  language: 'en',
  highContrast: false,
  
  // Applications Store
  applications: [
    {
      id: 'GP-2026-INC-7821',
      type: 'Income Certificate',
      typeHindi: 'आय प्रमाण पत्र',
      applicantName: 'Ramesh Kumar',
      fatherName: 'Shiv Lal',
      aadhaar: 'XXXX-XXXX-4819',
      ward: 'Ward 4 - Panchayat Square',
      details: 'Annual Family Income: ₹1,20,000 (Rupees One Lakh Twenty Thousand)',
      appliedDate: '22 Oct 2026, 11:30 AM',
      issueDate: '24-Oct-2026',
      status: 'approved', // 'submitted' | 'document_verified' | 'field_inquiry' | 'approved'
      step: 4,
      inspector: 'Revenue Inspector R. Meena',
      gramSevak: 'Gram Sevak S. Yadav',
      sarpanch: 'Sunita Devi (Sarpanch)'
    },
    {
      id: 'GP-2026-BRT-4402',
      type: 'Birth Certificate',
      typeHindi: 'जन्म प्रमाण पत्र',
      applicantName: 'Aarav Choudhary',
      fatherName: 'Vikram Choudhary',
      aadhaar: 'XXXX-XXXX-8921',
      ward: 'Ward 1 - North Chowk',
      details: 'Born at Shubhgram Primary Health Center on 18-Oct-2026',
      appliedDate: '20 Oct 2026, 09:15 AM',
      issueDate: 'Pending Verification',
      status: 'document_verified',
      step: 2,
      inspector: 'Revenue Inspector R. Meena',
      gramSevak: 'Pending Inspection',
      sarpanch: 'Pending Sign-off'
    },
    {
      id: 'GP-2026-DTH-1193',
      type: 'Death Certificate',
      typeHindi: 'मृत्यु प्रमाण पत्र',
      applicantName: 'Late Moolchand Sharma (Applicant: Gopal Sharma)',
      fatherName: 'Late Badri Prasad',
      aadhaar: 'XXXX-XXXX-3341',
      ward: 'Ward 3 - Kisan Basti',
      details: 'Demised on 12-Oct-2026 at age 84',
      appliedDate: '24 Oct 2026, 03:40 PM',
      issueDate: 'In Process',
      status: 'submitted',
      step: 1,
      inspector: 'Assigned to RI Office',
      gramSevak: 'Pending',
      sarpanch: 'Pending'
    }
  ],

  // Currently tracked cert ID
  activeTrackId: 'GP-2026-INC-7821',

  // Agri-Marketplace Catalog
  mandiProducts: [
    {
      id: 1,
      name: 'Sharbati Organic Wheat (शरबती गेहूँ)',
      category: 'grains',
      price: 32,
      stock: '4,500 Kg (45 Qtl)',
      grade: 'Grade A+',
      farmer: 'Baldev Singh',
      phone: '+91 98291 44520',
      location: 'Ward 3, Shubhgram Farmgate',
      image: 'assets/images/wheat.jpg',
      badge: 'Bumper Harvest',
      harvestDate: 'Oct 2026'
    },
    {
      id: 2,
      name: 'Farm Fresh Farmgate Vegetables',
      category: 'vegetables',
      price: 45,
      stock: '250 Kg Daily Harvest',
      grade: 'Organic Certified',
      farmer: 'Kamala Devi',
      phone: '+91 94142 88310',
      location: 'Ward 5, East Pond Fields',
      image: 'assets/images/vegetables.jpg',
      badge: 'Harvested Today',
      harvestDate: 'Daily Morning'
    },
    {
      id: 3,
      name: 'Pusa 1121 Premium Basmati Rice',
      category: 'grains',
      price: 75,
      stock: '2,800 Kg (28 Qtl)',
      grade: 'Grade A+',
      farmer: 'Harpreet Singh',
      phone: '+91 98110 52391',
      location: 'Ward 1, North Irrigation Block',
      image: 'assets/images/wheat.jpg',
      badge: 'Aged 1 Year',
      harvestDate: 'Kharif 2025'
    },
    {
      id: 4,
      name: 'Yellow Mustard Seeds (पीली सरसों)',
      category: 'oilseeds',
      price: 68,
      stock: '1,200 Kg',
      grade: 'High Oil Yield (42%)',
      farmer: 'Jagdish Meena',
      phone: '+91 97840 19482',
      location: 'Ward 7, South Fields',
      image: 'assets/images/wheat.jpg',
      badge: 'Unprocessed Seed',
      harvestDate: 'Rabi Harvest'
    },
    {
      id: 5,
      name: 'Pure Desi Gir Cow A2 Bilona Ghee',
      category: 'dairy',
      price: 1350,
      stock: '85 Litres',
      grade: 'Traditional Vedic',
      farmer: 'Shri Ram Gaushala Trust',
      phone: '+91 94140 33921',
      location: 'Ward 2, Gaushala Road',
      image: 'assets/images/vegetables.jpg',
      badge: 'Lab Tested A2',
      harvestDate: 'Fresh Weekly'
    },
    {
      id: 6,
      name: 'Organic Sugarcane Jaggery (देसी गुड़)',
      category: 'dairy',
      price: 58,
      stock: '900 Kg',
      grade: 'Chemical Free',
      farmer: 'Ramcharan Yadav',
      phone: '+91 98288 66102',
      location: 'Ward 4, Kolhu Farm',
      image: 'assets/images/wheat.jpg',
      badge: 'Natural Sulfur Free',
      harvestDate: 'Oct 2026'
    }
  ],

  // Grievance Redressal Tickets (Jan Sunwai)
  grievances: [
    {
      id: 'TKT-2026-WTR-892',
      category: 'Water',
      title: 'Main Drinking Water Pipeline Rupture near Primary School',
      location: 'Ward 2, Near Govt Primary School Gate',
      complainant: 'Manoj Verma',
      phone: '98290XXXXX',
      priority: 'High',
      status: 'in-progress', // 'pending' | 'in-progress' | 'resolved'
      loggedDate: '23 Oct 2026, 08:30 AM',
      assignedTo: 'Junior Engineer Alok Verma (PHED)',
      upvotes: 24,
      userUpvoted: false,
      notes: 'Excavation team dispatched. Replacement PVC 90mm pipe delivered.'
    },
    {
      id: 'TKT-2026-PWR-419',
      category: 'Electricity',
      title: 'Four Solar Streetlights Dark on East Canal Road',
      location: 'Ward 5, East Canal Pathway, Pole No. 12-16',
      complainant: 'Suresh Gurjar',
      phone: '97841XXXXX',
      priority: 'High',
      status: 'pending',
      loggedDate: '24 Oct 2026, 07:15 PM',
      assignedTo: 'Surya Powertech AMC Team',
      upvotes: 18,
      userUpvoted: false,
      notes: 'Lithium battery circuit check scheduled for today.'
    },
    {
      id: 'TKT-2026-RDS-305',
      category: 'Roads',
      title: 'Paving Stone Dislodged & Drain Overflow during Irrigation',
      location: 'Ward 3, Kisan Basti Main Crossway',
      complainant: 'Bhanwar Singh',
      phone: '94140XXXXX',
      priority: 'Medium',
      status: 'in-progress',
      loggedDate: '22 Oct 2026, 04:00 PM',
      assignedTo: 'Gram Sevak S. Yadav',
      upvotes: 11,
      userUpvoted: false,
      notes: 'Mason assigned under MGNREGA repair work.'
    },
    {
      id: 'TKT-2026-SAN-114',
      category: 'Sanitation',
      title: 'Solid Waste Collection Bin Clearance & Disinfection',
      location: 'Ward 7, Mandi Market Entrance',
      complainant: 'Kailash Chand',
      phone: '98288XXXXX',
      priority: 'Low',
      status: 'resolved',
      loggedDate: '21 Oct 2026, 10:00 AM',
      assignedTo: 'Sanitation Supervisor Mohan',
      upvotes: 15,
      userUpvoted: false,
      notes: 'Area cleared by Swachhata vehicle; lime bleaching powder spread.'
    },
    {
      id: 'TKT-2026-PWR-102',
      category: 'Electricity',
      title: 'Transformer Sparking near Community Hall',
      location: 'Ward 4, Community Center Chowk',
      complainant: 'Sunita Devi',
      phone: '94142XXXXX',
      priority: 'High',
      status: 'resolved',
      loggedDate: '19 Oct 2026, 11:20 AM',
      assignedTo: 'Vidyut Sahayak Dinesh',
      upvotes: 32,
      userUpvoted: false,
      notes: 'Loose jumper cable replaced and earthing wire reinforced.'
    },
    {
      id: 'TKT-2026-RDS-582',
      category: 'Roads',
      title: 'Pothole patch repair needed before Harvest cart traffic',
      location: 'Ward 6, West Ridge Connecting Road',
      complainant: 'Dharamveer',
      phone: '98120XXXXX',
      priority: 'Medium',
      status: 'pending',
      loggedDate: '25 Oct 2026, 06:45 AM',
      assignedTo: 'PWD Section Engineer',
      upvotes: 6,
      userUpvoted: false,
      notes: 'Inspection logged in daily muster.'
    }
  ],

  // Panchayat Public Works & Development Tracker (Vikas Samiksha)
  works: [
    {
      id: 'WRK-2026-01',
      title: 'Solar Streetlight Grid Phase 3 (120 Smart Poles)',
      scheme: '15th Finance Commission',
      category: 'energy',
      budget: '₹14,50,000',
      spent: '₹12,20,000',
      contractor: 'Surya Powertech Ltd',
      supervisor: 'Er. Alok Verma',
      progress: 85,
      status: 'Under Execution',
      wards: 'Ward 1 to 8',
      milestone: '102 of 120 poles erected and automated by dusk-to-dawn sensors'
    },
    {
      id: 'WRK-2026-02',
      title: 'Underground RCC Drainage & Rainwater Recharge Well',
      scheme: 'Swachh Bharat Mission (Gr.)',
      category: 'water',
      budget: '₹22,00,000',
      spent: '₹21,40,000',
      contractor: 'Gram Nirman Sahkari Mandali',
      supervisor: 'Gram Sevak S. Yadav',
      progress: 95,
      status: 'Quality Audit',
      wards: 'Central Chowk to Pond',
      milestone: 'Final pre-cast slab covering complete; desilting traps tested'
    },
    {
      id: 'WRK-2026-03',
      title: 'Primary Health Center Solar Cold Chain & Modern Ward',
      scheme: 'National Health Mission (NHM)',
      category: 'education',
      budget: '₹18,00,000',
      spent: '₹7,20,000',
      contractor: 'Medico Infra Corp',
      supervisor: 'Dr. Neha Sharma (MOIC)',
      progress: 40,
      status: 'Under Execution',
      wards: 'Ward 4 (PHC Campus)',
      milestone: 'Solar inverter foundation casted; vaccine chiller units delivered'
    },
    {
      id: 'WRK-2026-04',
      title: 'Govt Senior Secondary School Digital Smart Lab & Library',
      scheme: 'Samagra Shiksha Abhiyan',
      category: 'education',
      budget: '₹8,00,000',
      spent: '₹8,00,000',
      contractor: 'Bharat Edutech Systems',
      supervisor: 'Principal S. Rawat',
      progress: 100,
      status: 'Completed',
      wards: 'Ward 8 Campus',
      milestone: '25 all-in-one workstations and interactive whiteboard fully operational'
    },
    {
      id: 'WRK-2026-05',
      title: 'Piped Drinking Water Over-Head Reservoir (Jal Jeevan)',
      scheme: 'Jal Jeevan Mission (JJM)',
      category: 'water',
      budget: '₹35,00,000',
      spent: '₹4,50,000',
      contractor: 'Jal Nigam Civil Division',
      supervisor: 'Er. Mahesh Gupta',
      progress: 18,
      status: 'Planning',
      wards: 'Ward 6 Ridge',
      milestone: 'Soil bearing test certified; staging pillar excavation underway'
    }
  ]
};

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  // Load saved state from localStorage if available
  loadLocalState();
  
  // Render modules
  renderActiveRoleUI();
  renderTrackerStatus(state.activeTrackId);
  renderMandiCatalog();
  renderGrievanceTickets();
  renderWorksTable();

  // Setup Role Dropdown listeners
  setupRoleDropdown();

  // Mobile menu listener
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Language toggle listener
  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }
});

// Save & Load
function saveLocalState() {
  try {
    localStorage.setItem('gramSevaPortalState', JSON.stringify({
      applications: state.applications,
      mandiProducts: state.mandiProducts,
      grievances: state.grievances,
      works: state.works,
      currentRole: state.currentRole
    }));
  } catch (e) {
    console.error('LocalStorage write failed:', e);
  }
}

function loadLocalState() {
  try {
    const saved = localStorage.getItem('gramSevaPortalState');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.applications) state.applications = parsed.applications;
      if (parsed.mandiProducts) state.mandiProducts = parsed.mandiProducts;
      if (parsed.grievances) state.grievances = parsed.grievances;
      if (parsed.works) state.works = parsed.works;
      if (parsed.currentRole) state.currentRole = parsed.currentRole;
    }
  } catch (e) {
    console.error('LocalStorage read failed:', e);
  }
}

// ================= ROLE SWITCHER ENGINE =================
function setupRoleDropdown() {
  const btn = document.getElementById('roleDropdownBtn');
  const menu = document.getElementById('roleMenu');

  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  }
}

function setPortalRole(role) {
  state.currentRole = role;
  const menu = document.getElementById('roleMenu');
  if (menu) menu.classList.add('hidden');

  renderActiveRoleUI();
  saveLocalState();

  const roleNames = {
    citizen: 'Citizen View (Ramesh Kumar - Ward 4)',
    farmer: 'Farmer / Seller View (Baldev Singh - Ward 3)',
    admin: 'Panchayat Admin (Sarpanch Sunita Devi)'
  };

  showToast(`Switched portal mode to ${roleNames[role]}`, 'info');
}

function renderActiveRoleUI() {
  const role = state.currentRole;
  const roleLabelText = document.getElementById('roleLabelText');
  const roleUserSubtext = document.getElementById('roleUserSubtext');
  const roleAvatarIcon = document.getElementById('roleAvatarIcon');
  const roleBannerText = document.getElementById('roleBannerText');
  const adminCertActionPanel = document.getElementById('adminCertActionPanel');
  const addWorkProjectBtn = document.getElementById('addWorkProjectBtn');
  const listProduceBtn = document.getElementById('listProduceBtn');

  if (role === 'citizen') {
    if (roleLabelText) roleLabelText.textContent = 'Citizen';
    if (roleUserSubtext) roleUserSubtext.textContent = 'Ramesh Kumar';
    if (roleAvatarIcon) {
      roleAvatarIcon.className = 'w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-400/30 flex items-center justify-center text-sm';
      roleAvatarIcon.innerHTML = '<i class="fa-solid fa-user"></i>';
    }
    if (roleBannerText) {
      roleBannerText.innerHTML = 'Perspective: <strong>Citizen (Ramesh Kumar - Ward 4)</strong>. Apply for certificates, check application progress, and lodge civic complaints.';
    }
    if (adminCertActionPanel) adminCertActionPanel.classList.add('hidden');
    if (addWorkProjectBtn) addWorkProjectBtn.classList.add('hidden');
    if (listProduceBtn) listProduceBtn.classList.remove('ring-4', 'ring-amber-400/50', 'animate-pulse');
  } else if (role === 'farmer') {
    if (roleLabelText) roleLabelText.textContent = 'Farmer/Seller';
    if (roleUserSubtext) roleUserSubtext.textContent = 'Baldev Singh';
    if (roleAvatarIcon) {
      roleAvatarIcon.className = 'w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center text-sm';
      roleAvatarIcon.innerHTML = '<i class="fa-solid fa-wheat-awn"></i>';
    }
    if (roleBannerText) {
      roleBannerText.innerHTML = 'Perspective: <strong>Farmer / Producer (Baldev Singh - Ward 3)</strong>. Direct access to list farm produce, inspect mandis, and apply for Kisan subsidies.';
    }
    if (adminCertActionPanel) adminCertActionPanel.classList.add('hidden');
    if (addWorkProjectBtn) addWorkProjectBtn.classList.add('hidden');
    if (listProduceBtn) listProduceBtn.classList.add('ring-4', 'ring-amber-400/50', 'animate-pulse');
  } else if (role === 'admin') {
    if (roleLabelText) roleLabelText.textContent = 'Panchayat Admin';
    if (roleUserSubtext) roleUserSubtext.textContent = 'Sunita Devi (Sarpanch)';
    if (roleAvatarIcon) {
      roleAvatarIcon.className = 'w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-400/30 flex items-center justify-center text-sm';
      roleAvatarIcon.innerHTML = '<i class="fa-solid fa-user-shield"></i>';
    }
    if (roleBannerText) {
      roleBannerText.innerHTML = 'Perspective: <strong>Panchayat Admin (Sarpanch Sunita Devi)</strong>. Authorized to digitally sign certificates, advance civic redressals, and publish development works.';
    }
    if (adminCertActionPanel) adminCertActionPanel.classList.remove('hidden');
    if (addWorkProjectBtn) addWorkProjectBtn.classList.remove('hidden');
  }

  // Re-render components that have role-based controls
  renderGrievanceTickets();
  renderWorksTable();
}

// ================= MODULE 1: CITIZEN SERVICES & CERTIFICATES =================
function handleTrackSearch(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('trackInput');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (!code) {
    showToast('Please enter a valid Application Tracking Reference ID', 'warning');
    return;
  }

  renderTrackerStatus(code);
}

function quickLookupTrack(code) {
  const input = document.getElementById('trackInput');
  if (input) input.value = code;
  renderTrackerStatus(code);
}

function renderTrackerStatus(refId) {
  const cert = state.applications.find(a => a.id.toUpperCase() === refId.toUpperCase());
  const box = document.getElementById('trackerResultBox');
  if (!box) return;

  if (!cert) {
    showToast(`Application "${refId}" not found in current records. Please check the ID.`, 'error');
    return;
  }

  state.activeTrackId = cert.id;

  // Header meta
  document.getElementById('trackerCertTypeBadge').textContent = cert.type;
  document.getElementById('trackerRefCode').textContent = cert.id;
  document.getElementById('trackerApplicantName').textContent = `Applicant: ${cert.applicantName} (Guardian: ${cert.fatherName})`;
  document.getElementById('trackerDetailsSub').textContent = `${cert.ward} • Submitted: ${cert.appliedDate}`;

  // Status tag & View Certificate Button
  const statusTag = document.getElementById('trackerStatusTag');
  const viewCertBtn = document.getElementById('viewCertificateBtn');
  
  if (cert.status === 'approved') {
    statusTag.className = 'text-center px-4 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold';
    statusTag.innerHTML = '<i class="fa-solid fa-circle-check mr-1"></i> Approved & Issued';
    viewCertBtn.classList.remove('hidden');
  } else if (cert.status === 'field_inquiry' || cert.status === 'document_verified') {
    statusTag.className = 'text-center px-4 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold';
    statusTag.innerHTML = '<i class="fa-solid fa-clock-rotate-left mr-1"></i> In Verification Pipeline';
    viewCertBtn.classList.add('hidden');
  } else {
    statusTag.className = 'text-center px-4 py-2 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold';
    statusTag.innerHTML = '<i class="fa-solid fa-inbox mr-1"></i> Application Lodged';
    viewCertBtn.classList.add('hidden');
  }

  // Update Stepper Nodes
  updateStepperView(cert.step);

  // Show/Hide admin override panel based on role
  const adminPanel = document.getElementById('adminCertActionPanel');
  if (adminPanel) {
    if (state.currentRole === 'admin') {
      adminPanel.classList.remove('hidden');
    } else {
      adminPanel.classList.add('hidden');
    }
  }
}

function updateStepperView(stepNum) {
  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById(`stepNode${i}`);
    if (!node) continue;

    const iconBox = node.querySelector('div');
    if (!iconBox) continue;

    if (i <= stepNum) {
      iconBox.className = 'w-11 h-11 rounded-2xl bg-emerald-500 text-slate-950 font-bold flex items-center justify-center text-base shadow-lg shadow-emerald-500/40 z-10';
      iconBox.innerHTML = i === 4 ? '<i class="fa-solid fa-check-double"></i>' : '<i class="fa-solid fa-check"></i>';
    } else {
      iconBox.className = 'w-11 h-11 rounded-2xl bg-slate-800 text-slate-400 border border-white/20 font-bold flex items-center justify-center text-base z-10';
      iconBox.innerHTML = `<span>${i}</span>`;
    }
  }
}

// Modal controls for Application
function openApplyCertModal(preselectType) {
  const modal = document.getElementById('applyCertModal');
  if (modal) {
    modal.classList.remove('hidden');
    if (preselectType) {
      const select = document.getElementById('certTypeSelect');
      if (select) {
        if (preselectType === 'income') select.value = 'Income Certificate';
        if (preselectType === 'birth') select.value = 'Birth Certificate';
        if (preselectType === 'death') select.value = 'Death Certificate';
        if (preselectType === 'residence') select.value = 'Residence Certificate';
      }
    }
  }
}

function closeApplyCertModal() {
  const modal = document.getElementById('applyCertModal');
  if (modal) modal.classList.add('hidden');
}

function handleCertificateSubmit(event) {
  event.preventDefault();

  const type = document.getElementById('certTypeSelect').value;
  const applicantName = document.getElementById('certApplicantName').value.trim();
  const fatherName = document.getElementById('certFatherName').value.trim();
  const aadhaar = document.getElementById('certAadhaar').value.trim();
  const ward = document.getElementById('certWard').value;
  const details = document.getElementById('certDetails').value.trim();

  // Generate Reference ID: e.g. GP-2026-INC-9481
  const typeCode = type.includes('Income') ? 'INC' : type.includes('Birth') ? 'BRT' : type.includes('Death') ? 'DTH' : 'RES';
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const newRefId = `GP-2026-${typeCode}-${randomNum}`;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
                  now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  const newApp = {
    id: newRefId,
    type: type,
    typeHindi: type.includes('Income') ? 'आय प्रमाण पत्र' : type.includes('Birth') ? 'जन्म प्रमाण पत्र' : 'निवास प्रमाण पत्र',
    applicantName: applicantName,
    fatherName: fatherName,
    aadhaar: `XXXX-XXXX-${aadhaar.slice(-4)}`,
    ward: ward,
    details: details,
    appliedDate: dateStr,
    issueDate: 'Pending Verification',
    status: 'submitted',
    step: 1,
    inspector: 'Assigned to Revenue Inspector',
    gramSevak: 'Pending',
    sarpanch: 'Pending'
  };

  // Add to top of applications list
  state.applications.unshift(newApp);
  saveLocalState();

  closeApplyCertModal();
  document.getElementById('applyCertForm').reset();

  showToast(`Application successfully lodged! Ref ID: ${newRefId}`, 'success');

  // Immediately track this new application
  quickLookupTrack(newRefId);
}

// Admin Action on current certificate
function adminApproveCurrentCert() {
  const cert = state.applications.find(a => a.id === state.activeTrackId);
  if (!cert) return;

  cert.status = 'approved';
  cert.step = 4;
  cert.issueDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  saveLocalState();

  renderTrackerStatus(cert.id);
  showToast(`Application ${cert.id} has been Digitally Approved & Signed!`, 'success');
}

function adminRejectCurrentCert() {
  const cert = state.applications.find(a => a.id === state.activeTrackId);
  if (!cert) return;

  cert.status = 'document_verified';
  cert.step = 2;
  saveLocalState();

  renderTrackerStatus(cert.id);
  showToast(`Clarification request sent to applicant for ${cert.id}`, 'warning');
}

// Certificate Viewer / Print Modal
function openCertificateModal() {
  const cert = state.applications.find(a => a.id === state.activeTrackId);
  if (!cert) return;

  document.getElementById('certDocTitle').textContent = `CERTIFICATE OF ${cert.type.toUpperCase()}`;
  document.getElementById('certSerialNo').textContent = cert.id;
  document.getElementById('certIssueDate').textContent = cert.issueDate || '24-Oct-2026';
  document.getElementById('certPersonName').textContent = cert.applicantName;
  document.getElementById('certPersonFather').textContent = cert.fatherName;
  document.getElementById('certPersonWard').textContent = cert.ward;
  
  const declaredBox = document.getElementById('certDeclaredText');
  if (declaredBox) {
    declaredBox.innerHTML = `<strong>Official Verification:</strong> ${cert.details}. Certified bona fide after local inquiry by Gram Panchayat Shubhgram.`;
  }

  const modal = document.getElementById('certificateViewerModal');
  if (modal) modal.classList.remove('hidden');
}

function closeCertificateModal() {
  const modal = document.getElementById('certificateViewerModal');
  if (modal) modal.classList.add('hidden');
}

// ================= MODULE 2: AGRI-MARKETPLACE (KISAN MANDI) =================
function renderMandiCatalog(filterCat = 'all', searchTerm = '') {
  const grid = document.getElementById('mandiProductsGrid');
  if (!grid) return;

  grid.innerHTML = '';

  let list = state.mandiProducts;

  if (filterCat !== 'all') {
    list = list.filter(item => item.category === filterCat);
  }

  if (searchTerm) {
    const s = searchTerm.toLowerCase();
    list = list.filter(item => 
      item.name.toLowerCase().includes(s) ||
      item.farmer.toLowerCase().includes(s) ||
      item.location.toLowerCase().includes(s)
    );
  }

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full glass-panel p-8 text-center rounded-3xl">
        <i class="fa-solid fa-wheat-awn-circle-exclamation text-3xl text-amber-400 mb-2"></i>
        <p class="text-sm font-bold text-white">No produce matches your search</p>
        <p class="text-xs text-slate-400 mt-1">Try another crop keyword or clear filter criteria.</p>
      </div>
    `;
    return;
  }

  list.forEach(p => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-3xl overflow-hidden flex flex-col group';
    card.innerHTML = `
      <div class="relative h-44 overflow-hidden">
        <img src="${p.image}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <div class="absolute top-3 left-3">
          <span class="px-2.5 py-1 rounded-lg bg-slate-950/70 backdrop-blur-md text-amber-300 border border-amber-500/30 text-[10px] font-bold">
            ${p.grade}
          </span>
        </div>
        <div class="absolute top-3 right-3">
          <span class="px-2.5 py-1 rounded-lg bg-emerald-500/80 backdrop-blur-md text-white text-[10px] font-bold">
            ${p.badge}
          </span>
        </div>
      </div>

      <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div class="flex items-start justify-between gap-2">
            <h4 class="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">${p.name}</h4>
          </div>
          <p class="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
            <i class="fa-solid fa-location-dot text-amber-400 text-[10px]"></i>
            <span>${p.location}</span>
          </p>
        </div>

        <div class="grid grid-cols-2 gap-2 bg-white/5 p-3 rounded-2xl border border-white/10 text-xs">
          <div>
            <span class="text-[10px] text-slate-400 block">Unit Price</span>
            <span class="text-base font-extrabold text-emerald-400 font-display">₹${p.price}<span class="text-xs text-slate-400 font-normal"> / kg</span></span>
          </div>
          <div>
            <span class="text-[10px] text-slate-400 block">Available Stock</span>
            <span class="text-xs font-bold text-slate-200">${p.stock}</span>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-white/10">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold border border-amber-500/30">
              <i class="fa-solid fa-user-tag"></i>
            </div>
            <div>
              <p class="text-xs font-bold text-white">${p.farmer}</p>
              <p class="text-[10px] text-emerald-400 font-medium">Verified Producer</p>
            </div>
          </div>

          <button onclick="openContactFarmerModal(${p.id})" class="btn-emerald px-3.5 py-1.5 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-emerald-500/20">
            <i class="fa-solid fa-phone"></i>
            <span>Contact</span>
          </button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterMandiCategory(cat) {
  document.querySelectorAll('.mandi-cat-pill').forEach(btn => {
    btn.classList.remove('bg-emerald-500', 'text-slate-950');
    btn.classList.add('bg-white/5', 'text-slate-300');
  });

  const activeBtn = event ? event.target : null;
  if (activeBtn) {
    activeBtn.classList.remove('bg-white/5', 'text-slate-300');
    activeBtn.classList.add('bg-emerald-500', 'text-slate-950');
  }

  const s = document.getElementById('mandiSearchInput').value;
  renderMandiCatalog(cat, s);
}

function handleMandiSearch() {
  const s = document.getElementById('mandiSearchInput').value;
  renderMandiCatalog('all', s);
}

// Contact Farmer Modal
function openContactFarmerModal(prodId) {
  const item = state.mandiProducts.find(p => p.id === prodId);
  if (!item) return;

  document.getElementById('contactFarmerName').textContent = item.farmer;
  document.getElementById('contactFarmerProduce').textContent = item.name;
  document.getElementById('contactFarmerLocation').textContent = item.location;
  document.getElementById('contactFarmerPhone').textContent = item.phone;

  const cleanNum = item.phone.replace(/[^0-9]/g, '');
  document.getElementById('contactFarmerCallLink').href = `tel:${item.phone}`;
  document.getElementById('contactFarmerWhatsappLink').href = `https://wa.me/${cleanNum}?text=Hello%20${encodeURIComponent(item.farmer)},%20I%20am%20interested%20in%20purchasing%20${encodeURIComponent(item.name)}%20via%20GramSeva%20Portal.`;

  const modal = document.getElementById('contactFarmerModal');
  if (modal) modal.classList.remove('hidden');
}

function closeContactFarmerModal() {
  const modal = document.getElementById('contactFarmerModal');
  if (modal) modal.classList.add('hidden');
}

// Add Produce Modal
function openAddProduceModal() {
  const modal = document.getElementById('addProduceModal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddProduceModal() {
  const modal = document.getElementById('addProduceModal');
  if (modal) modal.classList.add('hidden');
}

function handleAddProduceSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('prodName').value.trim();
  const category = document.getElementById('prodCategory').value;
  const price = parseFloat(document.getElementById('prodPrice').value);
  const stock = document.getElementById('prodStock').value.trim();
  const grade = document.getElementById('prodGrade').value;
  const farmer = document.getElementById('prodFarmer').value.trim();
  const phone = document.getElementById('prodPhone').value.trim();
  const location = document.getElementById('prodLocation').value.trim();

  const newProd = {
    id: Date.now(),
    name: name,
    category: category,
    price: price,
    stock: stock,
    grade: grade,
    farmer: farmer,
    phone: `+91 ${phone}`,
    location: location,
    image: category === 'vegetables' ? 'assets/images/vegetables.jpg' : 'assets/images/wheat.jpg',
    badge: 'Fresh Listing',
    harvestDate: 'Oct 2026'
  };

  state.mandiProducts.unshift(newProd);
  saveLocalState();

  closeAddProduceModal();
  document.getElementById('addProduceForm').reset();

  renderMandiCatalog();
  showToast(`"${name}" is now live on Kisan e-Mandi!`, 'success');
}

// ================= MODULE 3: GRIEVANCE REDRESSAL SYSTEM =================
function renderGrievanceTickets(statusFilter = 'all', catFilter = 'all') {
  const grid = document.getElementById('grievancesGrid');
  if (!grid) return;

  grid.innerHTML = '';

  let list = state.grievances;

  if (statusFilter !== 'all') {
    list = list.filter(g => g.status === statusFilter);
  }

  if (catFilter !== 'all') {
    list = list.filter(g => g.category.toLowerCase() === catFilter.toLowerCase());
  }

  // Update counters
  const total = state.grievances.length;
  const inProg = state.grievances.filter(g => g.status === 'in-progress').length;
  const resolved = state.grievances.filter(g => g.status === 'resolved').length;

  const totalEl = document.getElementById('totalGrievancesCount');
  const inProgEl = document.getElementById('inProgressGrievancesCount');
  const resolvedEl = document.getElementById('resolvedGrievancesCount');

  if (totalEl) totalEl.textContent = 120 + total;
  if (inProgEl) inProgEl.textContent = 10 + inProg;
  if (resolvedEl) resolvedEl.textContent = 110 + resolved;

  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full glass-panel p-8 text-center rounded-3xl">
        <i class="fa-solid fa-clipboard-check text-3xl text-emerald-400 mb-2"></i>
        <p class="text-sm font-bold text-white">No grievances in this filter</p>
        <p class="text-xs text-slate-400 mt-1">All civic issues in this category are presently resolved.</p>
      </div>
    `;
    return;
  }

  list.forEach(g => {
    const card = document.createElement('div');
    card.className = 'glass-card p-5 rounded-3xl border border-white/15 flex flex-col justify-between space-y-4';

    // Priority badge
    let priorityBadge = '';
    if (g.priority === 'High') {
      priorityBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 border border-rose-500/30">🔴 High Priority</span>';
    } else if (g.priority === 'Medium') {
      priorityBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30">🟡 Medium</span>';
    } else {
      priorityBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">🔵 Low</span>';
    }

    // Status badge
    let statusBadge = '';
    if (g.status === 'resolved') {
      statusBadge = '<span class="text-[11px] font-bold text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Resolved</span>';
    } else if (g.status === 'in-progress') {
      statusBadge = '<span class="text-[11px] font-bold text-amber-400 flex items-center gap-1"><i class="fa-solid fa-spinner fa-spin"></i> In-Progress</span>';
    } else {
      statusBadge = '<span class="text-[11px] font-bold text-purple-300 flex items-center gap-1"><i class="fa-solid fa-clock"></i> Pending Review</span>';
    }

    // Category icon
    let catIcon = 'fa-solid fa-wrench';
    if (g.category === 'Water') catIcon = 'fa-solid fa-faucet-drip text-blue-400';
    if (g.category === 'Electricity') catIcon = 'fa-solid fa-bolt text-amber-400';
    if (g.category === 'Roads') catIcon = 'fa-solid fa-road text-slate-300';
    if (g.category === 'Sanitation') catIcon = 'fa-solid fa-broom text-emerald-400';

    // Admin status select
    let adminControls = '';
    if (state.currentRole === 'admin') {
      adminControls = `
        <div class="pt-3 border-t border-white/10 flex items-center justify-between gap-2 text-xs">
          <span class="text-[10px] text-slate-400 font-bold uppercase">Admin Status Control:</span>
          <select onchange="updateTicketStatusAdmin('${g.id}', this.value)" class="glass-input px-2 py-1 rounded-lg text-xs font-semibold">
            <option value="pending" ${g.status === 'pending' ? 'selected' : ''}>Mark Pending</option>
            <option value="in-progress" ${g.status === 'in-progress' ? 'selected' : ''}>Mark In-Progress</option>
            <option value="resolved" ${g.status === 'resolved' ? 'selected' : ''}>Mark Resolved</option>
          </select>
        </div>
      `;
    }

    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <div class="flex items-center space-x-2">
            <span class="font-mono text-xs font-bold text-white px-2 py-0.5 rounded-lg bg-white/10">${g.id}</span>
            ${priorityBadge}
          </div>
          <div>${statusBadge}</div>
        </div>

        <h4 class="text-sm font-bold text-white leading-snug flex items-center gap-2">
          <i class="${catIcon}"></i>
          <span>${g.title}</span>
        </h4>

        <p class="text-xs text-slate-300 mt-2 flex items-center gap-1.5">
          <i class="fa-solid fa-location-dot text-rose-400 text-[10px]"></i>
          <span>${g.location}</span>
        </p>

        <div class="mt-3 p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 space-y-1">
          <p><strong>Official Action Note:</strong> ${g.notes}</p>
          <p class="text-slate-400">Assigned: <span class="text-emerald-400 font-medium">${g.assignedTo}</span></p>
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-white/10">
          <span class="text-[10px]">Logged: ${g.loggedDate}</span>
          
          <button onclick="upvoteGrievance('${g.id}')" class="flex items-center space-x-1.5 px-3 py-1 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs font-bold transition text-slate-300 hover:text-white ${g.userUpvoted ? 'border-emerald-500/50 text-emerald-300' : ''}">
            <i class="fa-solid fa-thumbs-up text-xs ${g.userUpvoted ? 'text-emerald-400' : ''}"></i>
            <span>Affected: <strong>${g.upvotes}</strong></span>
          </button>
        </div>

        ${adminControls}
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterGrievanceStatus(status) {
  document.querySelectorAll('.grievance-status-pill').forEach(btn => {
    btn.classList.remove('bg-emerald-500', 'text-slate-950');
    btn.classList.add('bg-white/5', 'text-slate-300');
  });

  const target = event ? event.target : null;
  if (target) {
    target.classList.remove('bg-white/5', 'text-slate-300');
    target.classList.add('bg-emerald-500', 'text-slate-950');
  }

  const cat = document.getElementById('grievanceCategorySelect').value;
  renderGrievanceTickets(status, cat);
}

function handleGrievanceCategoryFilter() {
  const cat = document.getElementById('grievanceCategorySelect').value;
  renderGrievanceTickets('all', cat);
}

function upvoteGrievance(tktId) {
  const tkt = state.grievances.find(g => g.id === tktId);
  if (!tkt) return;

  if (tkt.userUpvoted) {
    tkt.upvotes -= 1;
    tkt.userUpvoted = false;
    showToast(`Removed your affirmation for ${tktId}`, 'info');
  } else {
    tkt.upvotes += 1;
    tkt.userUpvoted = true;
    showToast(`Upvoted! Priority escalated for ${tktId}`, 'success');
  }

  saveLocalState();
  renderGrievanceTickets();
}

function updateTicketStatusAdmin(tktId, newStatus) {
  const tkt = state.grievances.find(g => g.id === tktId);
  if (!tkt) return;

  tkt.status = newStatus;
  if (newStatus === 'resolved') {
    tkt.notes = `Resolved & verified by Panchayat Admin on ${new Date().toLocaleDateString('en-GB')}.`;
  }
  saveLocalState();
  renderGrievanceTickets();
  showToast(`Ticket ${tktId} updated to ${newStatus.toUpperCase()}`, 'success');
}

// Modal controls for Grievance
function openGrievanceModal() {
  const modal = document.getElementById('grievanceModal');
  if (modal) modal.classList.remove('hidden');
}

function closeGrievanceModal() {
  const modal = document.getElementById('grievanceModal');
  if (modal) modal.classList.add('hidden');
}

function handleGrievanceSubmit(event) {
  event.preventDefault();

  const category = document.getElementById('grvCategory').value;
  const priority = document.getElementById('grvPriority').value;
  const name = document.getElementById('grvName').value.trim();
  const phone = document.getElementById('grvPhone').value.trim();
  const location = document.getElementById('grvLocation').value.trim();
  const desc = document.getElementById('grvDesc').value.trim();

  const catCode = category === 'Water' ? 'WTR' : category === 'Electricity' ? 'PWR' : category === 'Roads' ? 'RDS' : 'SAN';
  const randomNum = Math.floor(100 + Math.random() * 900);
  const newTktId = `TKT-2026-${catCode}-${randomNum}`;

  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) + ', ' +
                  now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  const newTicket = {
    id: newTktId,
    category: category,
    title: desc.length > 55 ? desc.substring(0, 52) + '...' : desc,
    location: location,
    complainant: name,
    phone: phone,
    priority: priority,
    status: 'pending',
    loggedDate: dateStr,
    assignedTo: 'Assigned to Ward Junior Engineer',
    upvotes: 1,
    userUpvoted: true,
    notes: 'Registered in Jan Sunwai database. SMS dispatch sent to field operator.'
  };

  state.grievances.unshift(newTicket);
  saveLocalState();

  closeGrievanceModal();
  document.getElementById('grievanceForm').reset();

  renderGrievanceTickets();
  showToast(`Grievance logged! Ticket ID: ${newTktId}`, 'success');
}

// ================= MODULE 4: PANCHAYAT WORK & TASK TRACKER =================
function renderWorksTable(catFilter = 'all') {
  const tbody = document.getElementById('worksTableBody');
  if (!tbody) return;

  tbody.innerHTML = '';

  let list = state.works;
  if (catFilter !== 'all') {
    list = list.filter(w => w.category === catFilter);
  }

  list.forEach(w => {
    const tr = document.createElement('tr');
    tr.className = 'hover:bg-white/5 transition';

    // Status badge style
    let statusHtml = '';
    if (w.status === 'Completed') {
      statusHtml = '<span class="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold">Completed</span>';
    } else if (w.status === 'Quality Audit') {
      statusHtml = '<span class="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">Quality Audit</span>';
    } else if (w.status === 'Under Execution') {
      statusHtml = '<span class="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">Under Execution</span>';
    } else {
      statusHtml = '<span class="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-[10px] font-bold">Planning Phase</span>';
    }

    // Admin interactive action: advance progress
    let actionBtn = `
      <button onclick="viewWorkDetails('${w.id}')" class="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] font-semibold transition">
        Milestones
      </button>
    `;

    if (state.currentRole === 'admin') {
      actionBtn = `
        <div class="flex items-center justify-end gap-1.5">
          <button onclick="advanceWorkProgressAdmin('${w.id}')" class="px-2 py-1 rounded-lg bg-emerald-600/80 hover:bg-emerald-500 text-white text-[10px] font-bold transition" title="Add 10% Progress">
            +10%
          </button>
          <button onclick="viewWorkDetails('${w.id}')" class="px-2 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 text-[10px] font-semibold transition">
            Details
          </button>
        </div>
      `;
    }

    tr.innerHTML = `
      <td class="px-5 py-4">
        <p class="font-bold text-white text-xs">${w.title}</p>
        <p class="text-[10px] text-slate-400 mt-0.5">Location: ${w.wards}</p>
      </td>
      <td class="px-5 py-4 font-mono text-[11px] text-cyan-300">${w.scheme}</td>
      <td class="px-5 py-4">
        <span class="font-bold text-white">${w.budget}</span>
        <span class="block text-[10px] text-slate-400">Spent: ${w.spent}</span>
      </td>
      <td class="px-5 py-4">
        <span class="text-slate-200 font-medium">${w.contractor}</span>
        <span class="block text-[10px] text-slate-400">Supv: ${w.supervisor}</span>
      </td>
      <td class="px-5 py-4 min-w-[140px]">
        <div class="flex items-center justify-between text-[10px] mb-1">
          <span class="text-slate-400">Milestone</span>
          <span class="font-bold text-emerald-400">${w.progress}%</span>
        </div>
        <div class="w-full bg-slate-800 rounded-full h-2">
          <div class="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full progress-bar-glow" style="width: ${w.progress}%"></div>
        </div>
      </td>
      <td class="px-5 py-4">${statusHtml}</td>
      <td class="px-5 py-4 text-right">${actionBtn}</td>
    `;

    tbody.appendChild(tr);
  });
}

function filterWorksCategory(cat) {
  document.querySelectorAll('.works-filter-btn').forEach(btn => {
    btn.classList.remove('bg-emerald-500', 'text-slate-950');
    btn.classList.add('bg-white/5', 'text-slate-300');
  });

  const activeBtn = event ? event.target : null;
  if (activeBtn) {
    activeBtn.classList.remove('bg-white/5', 'text-slate-300');
    activeBtn.classList.add('bg-emerald-500', 'text-slate-950');
  }

  renderWorksTable(cat);
}

function viewWorkDetails(workId) {
  const w = state.works.find(item => item.id === workId);
  if (!w) return;

  showToast(`[${w.id}] ${w.title} - ${w.milestone}`, 'info');
}

function advanceWorkProgressAdmin(workId) {
  const w = state.works.find(item => item.id === workId);
  if (!w) return;

  w.progress = Math.min(100, w.progress + 10);
  if (w.progress === 100) {
    w.status = 'Completed';
  } else if (w.progress > 85) {
    w.status = 'Quality Audit';
  }

  saveLocalState();
  renderWorksTable();
  showToast(`Progress for "${w.title}" advanced to ${w.progress}%`, 'success');
}

// Add Work Modal (Admin)
function openAddWorkModal() {
  const modal = document.getElementById('addWorkModal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddWorkModal() {
  const modal = document.getElementById('addWorkModal');
  if (modal) modal.classList.add('hidden');
}

function handleAddWorkSubmit(event) {
  event.preventDefault();

  const title = document.getElementById('workTitle').value.trim();
  const scheme = document.getElementById('workScheme').value.trim();
  const category = document.getElementById('workCategory').value;
  const budget = document.getElementById('workBudget').value.trim();
  const contractor = document.getElementById('workContractor').value.trim();
  const progress = parseInt(document.getElementById('workProgress').value) || 0;
  const status = document.getElementById('workStatus').value;

  const newWork = {
    id: `WRK-2026-0${state.works.length + 1}`,
    title: title,
    scheme: scheme,
    category: category,
    budget: budget.startsWith('₹') ? budget : `₹${budget}`,
    spent: '₹0 (Initial Stage)',
    contractor: contractor,
    supervisor: 'Gram Sevak S. Yadav',
    progress: progress,
    status: status,
    wards: 'Shubhgram Panchayat Area',
    milestone: 'Administrative approval sanctioned. Mobilization phase started.'
  };

  state.works.unshift(newWork);
  saveLocalState();

  closeAddWorkModal();
  document.getElementById('addWorkForm').reset();

  renderWorksTable();
  showToast(`Development Project "${title}" added to Public Works registry!`, 'success');
}

// ================= HELPLINES & SARPANCH ACTION =================
function openSarpanchCall() {
  showToast('Connecting to Sarpanch Sunita Devi Secretariat (0141-2894100)...', 'info');
  window.location.href = 'tel:01412894100';
}

// ================= TOAST NOTIFICATION SYSTEM =================
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'glass-panel pointer-events-auto px-4 py-3 rounded-2xl border flex items-center space-x-3 text-xs shadow-2xl transition-all duration-300 transform translate-y-3 opacity-0 max-w-sm';

  let iconHtml = '<i class="fa-solid fa-circle-info text-cyan-400 text-sm"></i>';
  let borderClass = 'border-cyan-500/30';

  if (type === 'success') {
    iconHtml = '<i class="fa-solid fa-circle-check text-emerald-400 text-sm"></i>';
    borderClass = 'border-emerald-500/40';
  } else if (type === 'warning') {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation text-amber-400 text-sm"></i>';
    borderClass = 'border-amber-500/40';
  } else if (type === 'error') {
    iconHtml = '<i class="fa-solid fa-circle-xmark text-rose-400 text-sm"></i>';
    borderClass = 'border-rose-500/40';
  }

  toast.classList.add(borderClass);
  toast.innerHTML = `
    ${iconHtml}
    <div class="flex-1 text-slate-200 font-medium">${message}</div>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-white transition">
      <i class="fa-solid fa-xmark text-xs"></i>
    </button>
  `;

  container.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-3', 'opacity-0');
  }, 10);

  // Auto dismiss after 3.5s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}

// ================= ACCESSIBILITY & CONTRAST =================
function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
  state.highContrast = document.body.classList.contains('high-contrast');
  showToast(state.highContrast ? 'High Contrast Mode Enabled' : 'Standard Glassmorphism Mode Restored', 'info');
}

// Glass Theme Presets: Crystal, Frosted, Neon
function setGlassTheme(theme) {
  document.body.classList.remove('theme-frosted', 'theme-neon');
  document.querySelectorAll('.glass-preset-btn').forEach(b => b.classList.remove('active'));

  if (theme === 'frosted') {
    document.body.classList.add('theme-frosted');
    const b = document.getElementById('themeBtnFrosted');
    if (b) b.classList.add('active');
    showToast('Activated ❄️ Frosted Ice Glass Aesthetic', 'info');
  } else if (theme === 'neon') {
    document.body.classList.add('theme-neon');
    const b = document.getElementById('themeBtnNeon');
    if (b) b.classList.add('active');
    showToast('Activated 🔮 Neon Refraction Glass Aesthetic', 'info');
  } else {
    const b = document.getElementById('themeBtnCrystal');
    if (b) b.classList.add('active');
    showToast('Activated 💎 Pure Crystal Glass Aesthetic', 'info');
  }
}

function toggleLanguage() {
  state.language = state.language === 'en' ? 'hi' : 'en';
  const btn = document.getElementById('langToggleBtn');
  if (btn) {
    if (state.language === 'hi') {
      btn.innerHTML = '<span class="text-slate-400 font-normal">EN</span> | <span class="text-emerald-400 font-bold">हिं</span>';
      showToast('भाषा हिंदी में स्विच की गई (Language set to Hindi)', 'info');
    } else {
      btn.innerHTML = '<span class="text-emerald-400 font-bold">EN</span> | <span class="text-slate-400 font-normal">हिं</span>';
      showToast('Language switched to English', 'info');
    }
  }
}

