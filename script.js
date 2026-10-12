// K.B.B Electrical – Products Catalogue 2026 data and site interactions.

const CATALOGUE = [
  { code: "CW", name: "Cables & Wiring Accessories", desc: "Power, control and building cables with the glands, lugs and containment to terminate and route them.", items: [
    ["KBB-CW-01", "SWA armoured cable (PVC/SWA/PVC)", "1.5–300 mm²; 2, 3 and 4 core; 600/1000 V", "Mains, sub-mains, underground feeders", "Supplied to Morupule Coal Mine, 2026: 4 mm² 4-core"],
    ["KBB-CW-02", "Single-core PVC building wire", "1.5–16 mm²; 450/750 V; all colours", "Building wiring in conduit"],
    ["KBB-CW-03", "Surfix (flat twin and earth)", "1.5–4 mm²", "Lighting and socket circuits"],
    ["KBB-CW-04", "Flexible cord and multicore flex", "0.75–4 mm²; 2–5 core", "Appliances and extension leads"],
    ["KBB-CW-05", "Earth conductor", "Bare and green/yellow copper, 1.5–95 mm²", "Earthing and bonding"],
    ["KBB-CW-06", "Cable glands, lugs and ferrules", "CW/BW glands 20–75 mm; copper and bi-metal lugs to 300 mm²", "Cable terminations"],
    ["KBB-CW-07", "Conduit, trunking and cable tray", "PVC and steel conduit; PVC trunking; galvanised tray and ladder", "Cable support and containment"],
    ["KBB-CW-08", "Cable ties, markers and tape", "Nylon ties, cable markers, PVC insulation tape", "Dressing and identification"],
  ]},
  { code: "DP", name: "Distribution & Protection", desc: "Boards and protective devices for safe, selective and compliant electrical distribution.", items: [
    ["KBB-DP-01", "Distribution boards", "4–72 way; surface or flush; metal or plastic; IP40–IP65", "Building and sub-distribution"],
    ["KBB-DP-02", "Miniature circuit breakers", "1–4 pole; 1–63 A; B, C and D curves; 6–10 kA", "Final-circuit protection"],
    ["KBB-DP-03", "Earth leakage units (RCDs)", "2 and 4 pole; 25–100 A; 30, 100 and 300 mA", "Shock and fire protection"],
    ["KBB-DP-04", "Moulded case circuit breakers", "16–1600 A; fixed and adjustable trip", "Main and sub-main protection"],
    ["KBB-DP-05", "Isolators and changeover switches", "20–630 A; manual and automatic changeover", "Isolation and standby supply"],
    ["KBB-DP-06", "Contactors, overloads and starters", "9–400 A AC-3; DOL and star-delta", "Motors, pumps and HVAC"],
    ["KBB-DP-07", "Surge protection devices", "Type 1, 2 and 1+2; single and three phase", "Lightning and switching surges"],
    ["KBB-DP-08", "Timers, photocells and day/night switches", "10–20 A", "Lighting and geyser control"],
  ]},
  { code: "LT", name: "Lighting", desc: "Energy-efficient LED lighting for offices, classrooms, workshops, yards and streets.", items: [
    ["KBB-LT-01", "LED tubes and battens", "0.6, 1.2 and 1.5 m; 9–36 W", "Offices, classrooms, corridors"],
    ["KBB-LT-02", "LED panels and downlights", "600×600 panels 36–48 W; downlights 6–24 W", "Suspended and plaster ceilings"],
    ["KBB-LT-03", "LED floodlights", "10–400 W; IP65/IP66", "Yards, perimeters, sports areas"],
    ["KBB-LT-04", "Bulkheads and vapour-proof fittings", "LED; IP65", "Outdoor walls, plant rooms, wet areas"],
    ["KBB-LT-05", "Street and area lights", "30–150 W LED; mains or solar", "Roads, parking, compounds"],
    ["KBB-LT-06", "Emergency and exit lights", "Maintained and non-maintained; 3-hour", "Escape routes and exits"],
    ["KBB-LT-07", "Lamps with built-in sensors", "B22 and E27; PIR or day/night sensor", "Security and stairwell lighting", "Supplied to Morupule Coal Mine, 2026: 12 W and 15 W sensor lamps"],
    ["KBB-LT-08", "LED high-bay fittings", "100–240 W", "Workshops, halls, warehouses"],
  ]},
  { code: "SA", name: "Switches, Sockets & Accessories", desc: "Wiring devices for every room, wet area and industrial outlet.", items: [
    ["KBB-SA-01", "Light switches", "1–4 lever; 1- and 2-way; 4×2 and 4×4", "Lighting control"],
    ["KBB-SA-02", "Socket outlets", "16 A SA and Schuko; single and double; switched", "Power outlets"],
    ["KBB-SA-03", "Weatherproof switches and sockets", "IP44–IP66", "Outdoor and wet areas"],
    ["KBB-SA-04", "Stove and geyser isolators", "20–60 A", "Appliance isolation"],
    ["KBB-SA-05", "Industrial plugs and sockets", "CEE 16–125 A; 3 and 5 pin", "Workshops and temporary supplies"],
    ["KBB-SA-06", "Extension reels and multi-plugs", "10–50 m reels; RCD-protected options", "Site and office use"],
  ]},
  { code: "EL", name: "Earthing & Lightning Protection", desc: "Materials for earth electrodes, bonding networks and structural lightning protection.", items: [
    ["KBB-EL-01", "Copper-bonded earth rods and couplers", "1.2–3 m; 16 mm diameter", "Earth electrodes"],
    ["KBB-EL-02", "Copper tape and bare conductor", "25×3 mm tape; 16–95 mm² conductor", "Earth grids and down-conductors"],
    ["KBB-EL-03", "Earth clamps and test links", "Rod, pipe and tape clamps", "Connections and testing"],
    ["KBB-EL-04", "Earth inspection pits", "Polymer and concrete", "Access to earth electrodes"],
    ["KBB-EL-05", "Air terminals (lightning spikes)", "Copper and aluminium, with fixings", "Roof lightning protection"],
    ["KBB-EL-06", "Earthing compound and exothermic welding", "Conductive backfill; welding kits and moulds", "Low-resistance permanent joints"],
  ]},
  { code: "SP", name: "Solar PV & Backup Power", desc: "Generation, storage and standby equipment to keep critical loads running.", items: [
    ["KBB-SP-01", "Solar PV modules", "Mono-crystalline, 400–600 W", "Rooftop and ground-mount systems"],
    ["KBB-SP-02", "Hybrid and grid-tie inverters", "3–50 kVA; single and three phase", "PV and battery systems"],
    ["KBB-SP-03", "Batteries", "Lithium 2.4–15 kWh; lead-acid 100–200 Ah", "Energy storage and backup"],
    ["KBB-SP-04", "MPPT charge controllers", "30–100 A", "Off-grid PV"],
    ["KBB-SP-05", "Mounting and DC protection", "Roof and ground mounts; DC isolators, fuses and SPDs", "PV installation"],
    ["KBB-SP-06", "Generators and UPS", "Generators 2.5–100 kVA; UPS 1–20 kVA", "Standby power"],
    ["KBB-SP-07", "Solar water heaters", "100–300 L; direct and indirect", "Hot water with lower energy use"],
  ]},
  { code: "FS", name: "Fire Detection & Security", desc: "Life-safety and security equipment for buildings, campuses and industrial sites.", items: [
    ["KBB-FS-01", "Fire alarm panels", "Conventional 2–8 zone and addressable", "Fire detection systems"],
    ["KBB-FS-02", "Smoke, heat and multi-sensor detectors", "Optical, rate-of-rise and fixed temperature", "Detection coverage"],
    ["KBB-FS-03", "Manual call points, sounders and beacons", "Indoor and weatherproof", "Alarm initiation and warning"],
    ["KBB-FS-04", "Fire extinguishers and blankets", "DCP 1–9 kg; CO₂ 2–5 kg; foam 9 L", "First-response firefighting"],
    ["KBB-FS-05", "CCTV cameras and recorders", "IP and analogue, 2–8 MP; NVR/DVR 4–32 channel", "Surveillance"],
    ["KBB-FS-06", "Access control", "Readers, keypads, maglocks, exit buttons, controllers", "Doors and gates"],
    ["KBB-FS-07", "Intruder alarms", "Panels, PIR detectors, sirens, panic buttons", "Building security"],
    ["KBB-FS-08", "Electric fence energisers and accessories", "Energisers, insulators, wire, gate contacts", "Perimeter security"],
  ]},
  { code: "HT", name: "Heating Elements, Thermostats & Controls", desc: "Replacement elements and controls for geysers, kettles and catering equipment.", items: [
    ["KBB-HT-01", "Geyser elements", "2–4 kW, including 4 kW L525 type", "Hot-water cylinders", "Supplied to Morupule Coal Mine, 2026: 4 kW geyser elements"],
    ["KBB-HT-02", "Geyser and appliance thermostats", "Including VKF11 and 11-inch TSE types", "Temperature control", "Supplied to Morupule Coal Mine, 2026: VKF11 and TSE thermostats"],
    ["KBB-HT-03", "Kettle and water-heater elements", "3 kW spiral", "Urns and water heaters", "Supplied to Morupule Coal Mine, 2026: 3 kW spiral elements"],
    ["KBB-HT-04", "Bain-marie and catering elements", "1500 W 230 V; 160 W L-shape", "Kitchens and canteens", "Supplied to Morupule Coal Mine, 2026: 1500 W and 160 W elements"],
    ["KBB-HT-05", "Geysers and geyser accessories", "50–200 L; valves, drip trays, vacuum breakers", "Replacement and new installs"],
    ["KBB-HT-06", "Geyser timers and controllers", "Mechanical and digital", "Energy saving"],
  ]},
  { code: "LW", name: "Lifting, Lubrication & Workshop Equipment", desc: "Equipment for mines, plants and workshops, sourced to the client’s specification.", items: [
    ["KBB-LW-01", "Chain blocks", "0.5–10 t; including 2 t with overload protection", "Lifting in workshops and plants", "Supplied to Morupule Coal Mine, 2026: 2 t chain blocks"],
    ["KBB-LW-02", "Lever hoists and beam trolleys", "0.75–6 t", "Pulling, tensioning, lifting"],
    ["KBB-LW-03", "Lifting slings and shackles", "Web and round slings 1–10 t; bow and D shackles", "Rigging"],
    ["KBB-LW-04", "Grease pumps", "Foot-operated 10 kg; air-operated", "Plant lubrication", "Supplied to Morupule Coal Mine, 2026: Foot-operated 10 kg pumps"],
    ["KBB-LW-05", "Grease guns and fittings", "Lever and pistol grip; nipples and couplers", "Routine lubrication"],
    ["KBB-LW-06", "Hand and power tools", "Drills, grinders, spanner sets, insulated tools", "Maintenance teams"],
  ]},
  { code: "PH", name: "Plumbing, Hardware & Building Materials", desc: "Materials for water, sanitation and general building maintenance.", items: [
    ["KBB-PH-01", "Pipes and fittings", "PVC, HDPE, copper and galvanised; 15–110 mm", "Water supply and drainage"],
    ["KBB-PH-02", "Taps, mixers and valves", "Stop, gate, ball and pressure-reducing valves", "Ablutions and reticulation"],
    ["KBB-PH-03", "Cistern mechanisms and sanitary fittings", "WCs, basins, urinals, flush valves", "Ablution maintenance"],
    ["KBB-PH-04", "Bathtubs and shower fittings", "Acrylic and steel baths; shower sets", "Residential refurbishment"],
    ["KBB-PH-05", "Paints and coatings", "Interior, exterior, primers, road-marking paint", "Finishes and markings"],
    ["KBB-PH-06", "Building materials", "Cement, sand, bricks, steel, timber (by order)", "Repairs and minor works"],
    ["KBB-PH-07", "Hardware", "Fasteners, locks, hinges, door closers", "General maintenance"],
  ]},
  { code: "PP", name: "PPE, Workwear & Site Safety", desc: "Protective equipment and workwear for construction, maintenance and plant teams.", items: [
    ["KBB-PP-01", "Overalls and workwear", "Conti-suits, two-piece, reflective; branded on request", "Daily site wear"],
    ["KBB-PP-02", "Safety footwear", "Steel-toe boots and shoes; gumboots", "Foot protection"],
    ["KBB-PP-03", "Head, eye and hearing protection", "Hard hats, safety glasses, goggles, ear muffs and plugs", "General site PPE"],
    ["KBB-PP-04", "Gloves", "Leather, nitrile, cut-resistant; Class 0 insulating", "Hand protection"],
    ["KBB-PP-05", "Hi-visibility and rain wear", "Vests, jackets, rain suits", "Visibility and weather"],
    ["KBB-PP-06", "Arc-rated clothing and face shields", "Arc-rated suits and visors", "Electrical switching"],
    ["KBB-PP-07", "First aid, signage and barriers", "First-aid kits, safety signs, barrier tape, cones", "Site safety"],
  ]},
  { code: "GS", name: "General Supplies", desc: "Everyday consumables and equipment for offices, schools, camps and facilities.", items: [
    ["KBB-GS-01", "Cleaning chemicals and detergents", "Bulk and retail packs", "Facility cleaning"],
    ["KBB-GS-02", "Toiletry and hygiene products", "Toilet paper, hand soap, sanitiser, dispensers", "Ablutions"],
    ["KBB-GS-03", "Stationery and paper products", "Office stationery, copy paper, paper boards", "Offices and schools"],
    ["KBB-GS-04", "Furniture", "Office, school and domestic furniture", "Fit-out and replacement"],
    ["KBB-GS-05", "Catering equipment", "Urns, warmers, utensils, small appliances", "Kitchens and canteens"],
    ["KBB-GS-06", "Plastic products", "Bins, crates, containers, tanks", "Storage and waste"],
    ["KBB-GS-07", "Mobile toilets", "Portable units", "Sites and events"],
    ["KBB-GS-08", "Camping, sports and recreation equipment", "Tents, camping gear, sports equipment", "Field work and institutions"],
  ]},
];

const $ = (s, el = document) => el.querySelector(s);

const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/* ---------- Mobile nav ---------- */
const toggle = $(".nav-toggle");
const nav = $("#nav");
toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav.classList.toggle("open", open);
});
nav.addEventListener("click", (e) => {
  if (e.target.closest("a")) {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }
});

/* ---------- Catalogue ---------- */
const chipsEl = $("#category-chips");
const resultsEl = $("#catalogue-results");
const searchEl = $("#product-search");
let activeCat = "ALL";

function renderChips() {
  const chips = [{ code: "ALL", name: "All categories" }, ...CATALOGUE];
  chipsEl.innerHTML = chips.map((c) =>
    `<button type="button" class="chip" role="tab" data-code="${c.code}" aria-selected="${c.code === activeCat}">` +
    (c.code === "ALL" ? "" : `<b>${c.code}</b>`) + escapeHtml(c.name) + `</button>`
  ).join("");
}

function highlight(text, re) {
  if (!re) return escapeHtml(text);
  return text.split(re).map((part, i) => (i % 2 ? `<mark>${escapeHtml(part)}</mark>` : escapeHtml(part))).join("");
}

function renderCatalogue() {
  const q = searchEl.value.trim().toLowerCase();
  const re = q ? new RegExp(`(${escapeRe(q)})`, "gi") : null;
  const html = CATALOGUE
    .filter((c) => activeCat === "ALL" || c.code === activeCat)
    .map((c) => {
      const items = c.items.filter((it) => !q || (it.join(" ") + " " + c.name).toLowerCase().includes(q));
      if (!items.length) return "";
      const rows = items.map(([ref, prod, spec, use, note]) => `
        <tr>
          <td class="ref" data-label="Ref">${highlight(ref, re)}</td>
          <td class="prod" data-label="Product">${highlight(prod, re)}${note ? `<br><span class="badge">✓ ${escapeHtml(note)}</span>` : ""}</td>
          <td data-label="Range / spec">${highlight(spec, re)}</td>
          <td data-label="Typical use">${highlight(use, re)}</td>
          <td class="act"><button type="button" class="quote-link" data-ref="${ref}" data-prod="${escapeHtml(prod)}">Add to quote</button></td>
        </tr>`).join("");
      return `
        <article class="cat">
          <header class="cat__head">
            <span class="cat__code">${c.code}</span>
            <div><h3>${escapeHtml(c.name)}</h3><p>${escapeHtml(c.desc)}</p></div>
          </header>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Catalogue ref.</th><th>Product</th><th>Typical range / specification</th><th>Typical use</th><th><span class="visually-hidden">Action</span></th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </article>`;
    }).join("");
  resultsEl.innerHTML = html || `<p class="empty">No products match “${escapeHtml(searchEl.value)}”. We source much more than is listed – <a href="#quote">send us your request</a>.</p>`;
}

chipsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  activeCat = btn.dataset.code;
  renderChips();
  renderCatalogue();
});
searchEl.addEventListener("input", renderCatalogue);

/* Add-to-quote pre-fills the request form */
resultsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".quote-link");
  if (!btn) return;
  const msg = $("#quote-form [name=message]");
  const line = `${btn.dataset.ref} – ${btn.dataset.prod} – Qty: `;
  if (!msg.value.includes(btn.dataset.ref)) {
    msg.value = (msg.value.trim() ? msg.value.trim() + "\n" : "") + line;
  }
  $("#quote-form [name=type]").value = "Product supply";
  btn.textContent = "Added ✓";
  setTimeout(() => (btn.textContent = "Add to quote"), 1600);
  setStatus(`${btn.dataset.ref} added to your quotation request.`, "ok");
});

renderChips();
renderCatalogue();

/* ---------- Quote form (opens the visitor's email client) ---------- */
const form = $("#quote-form");
const statusEl = $("#form-status");
function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.className = "form__status " + (kind || "");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach((f) => {
    const valid = f.value.trim() && (f.type !== "email" || /^\S+@\S+\.\S+$/.test(f.value.trim()));
    f.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  if (!ok) {
    setStatus("Please complete the highlighted fields.", "err");
    return;
  }
  const d = Object.fromEntries(new FormData(form));
  const subject = `Quotation request – ${d.type}${d.company ? " – " + d.company : ""}`;
  const body = [
    `Name: ${d.name}`,
    d.company ? `Company: ${d.company}` : null,
    `Email: ${d.email}`,
    d.phone ? `Phone: ${d.phone}` : null,
    `Request type: ${d.type}`,
    d.location ? `Delivery / site location: ${d.location}` : null,
    "",
    d.message,
  ].filter((l) => l !== null).join("\n");
  window.location.href = `mailto:sales@kbbelec.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  setStatus("Your email app should now open with your request – just press send. You can also call +267 76 264 962.", "ok");
});
form.addEventListener("input", (e) => e.target.classList.remove("invalid"));

/* ---------- Misc ---------- */
$("#year").textContent = new Date().getFullYear();

const revealEls = document.querySelectorAll(".service, .why__list li, .steps li, .cat, .record__stat, .details, .form");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach((el) => { el.classList.add("reveal"); io.observe(el); });
}
