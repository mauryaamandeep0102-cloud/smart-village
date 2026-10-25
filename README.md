# 🌾 Smart Village / Gram Panchayat Portal (GramSeva 360)

> A modern, responsive e-Governance web portal with a cutting-edge **Glassmorphism UI** for rural digital administration, citizen certificate delivery, direct farmgate trading, public grievance redressal, and village public works tracking.

---

## 🌟 Key Features

### 1. 📜 Citizen Services & Certificate Portal
- Forms to apply for **Income**, **Birth**, **Death**, and **Residence** certificates.
- **Live 4-Stage Stepper Tracking**: Real-time pipeline status (Lodged ➔ Verification ➔ Field Inquiry ➔ Digitally Signed).
- **Official Printable Certificate**: High-fidelity government certificate preview with National Emblem, QR verification code, and Sarpanch/VDO Digital Signature Certificate (DSC) seal.

### 2. 🚜 Agri-Marketplace (Kisan e-Mandi)
- Direct farmgate produce catalog for village farmers (Grains, Fresh Vegetables, Oilseeds, Dairy/Honey).
- **Live APMC Mandi Benchmark Ticker**: Real-time market rates comparison.
- Direct farmer contact via phone and WhatsApp.
- Form for farmers to list new crops and stocks.

### 3. 📢 Public Grievance Redressal (Jan Sunwai 24x7)
- Issue ticket logging for village infrastructure (Drinking Water, Power/Solar Streetlights, Roads & Drainage, Sanitation).
- Priority tags: 🔴 High (24h), 🟡 Medium (48h), 🔵 Low.
- Community impact upvoting system (`Affected: +1`).
- Administrative workflow status overrides.

### 4. 🏗️ Panchayat Works & Task Tracker (Vikas Samiksha)
- Public financial transparency: Sanctioned Budget vs. Utilized Expenditure.
- Scheme tracking: 15th Finance Commission, Jal Jeevan Mission, Swachh Bharat Mission, NHM.
- Interactive milestone progress bars with shimmer animations.
- Admin project registry and progress increment controls.

### 5. 💎 Ultra-Glassy Design System
- Multi-layer frosted glass panels with specular beveled edge highlights.
- Ambient glowing animated gradient mesh orbs.
- Interactive **Glass Preset Switcher** in header (💎 Crystal, ❄️ Frost, 🔮 Neon).
- Interactive **Role Switcher** dropdown (Citizen, Farmer/Seller, Panchayat Admin).
- Emergency helpline direct dialers (112, 108, 1551, 1912, Sarpanch Desk).

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Safari, Firefox, Edge).
- Python 3 OR Node.js (for local server).

### Run Locally

#### Using Python:
```bash
# Clone the repository
git clone https://github.com/mauryaamandeep0102-cloud/smart-village.git
cd smart-village

# Start local server
python3 -m http.server 8080
```

#### Using Node / npm:
```bash
npm start
# or
npx serve . -l 8080
```

Then navigate to `http://localhost:8080` in your browser.

---

## 📁 Repository Structure

```text
smart-village/
├── index.html            # Main semantic HTML5 structure & UI modals
├── styles.css            # Custom glassmorphism design system & animations
├── app.js                # State management, role engine & interactive workflows
├── package.json          # Node scripts and metadata
├── .gitignore            # Git exclusion rules
├── README.md             # Project documentation
└── assets/
    └── images/
        ├── hero.jpg      # Smart village e-governance kiosk center
        ├── wheat.jpg     # Organic wheat harvest
        └── vegetables.jpg# Farm fresh produce basket
```

---

## 📜 License
MIT License. Created for rural digital governance transformation.
