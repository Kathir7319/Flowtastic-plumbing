// Service Areas Data for Flowtastic Plumbing (Morrisville, NC)

export const SERVICE_AREAS = [
  {
    id: "morrisville",
    name: "Morrisville",
    badge: "Core Service Hub",
    description: "Our home base. We provide the quickest dispatch times throughout all Morrisville neighborhoods, residential subdivisions, and commercial business corridors.",
    zipCodes: ["27560"],
    avgResponse: "15 - 30 Mins",
    neighborhoods: [
      "Park West Village",
      "Kitts Creek",
      "Carpenter Park",
      "Downing Glen",
      "Town Hall Center",
      "McCrimmon at Davis Dr",
      "Grace Park",
      "Breckenridge"
    ],
    features: [
      "Priority same-day dispatch",
      "Zero travel surcharge",
      "Local master plumbers who live in Wake County"
    ]
  },
  {
    id: "cary",
    name: "Cary",
    badge: "High Priority Radius",
    description: "From historic downtown Cary to Preston, Lochmere, and West Cary, our mobile service trucks are constantly patrolling Cary to solve urgent plumbing calls.",
    zipCodes: ["27511", "27513", "27518", "27519"],
    avgResponse: "20 - 35 Mins",
    neighborhoods: [
      "Preston & Prestonwood",
      "Amberly & Carolina Preserve",
      "Lochmere & MacGregor Downs",
      "Downtown Cary Arts District",
      "Wellsley & Highcroft",
      "Silverton & Twin Lakes"
    ],
    features: [
      "Full residential & townhome service",
      "Water softener & filtration specialists",
      "Tankless water heater conversions"
    ]
  },
  {
    id: "raleigh",
    name: "Raleigh (Select Neighborhoods)",
    badge: "West & North Hubs",
    description: "Serving key Raleigh residential and commercial communities bordering Morrisville, Cary, and RDU airport with complete plumbing maintenance.",
    zipCodes: ["27607", "27612", "27613", "27617"],
    avgResponse: "25 - 40 Mins",
    neighborhoods: [
      "Brier Creek Country Club",
      "Crabtree Valley Corridor",
      "Northwest Raleigh",
      "Umstead & Ebenezer Church Area",
      "Blue Ridge Corridor"
    ],
    features: [
      "Commercial & HOA plumbing maintenance",
      "Hydro-jetting main line specialists",
      "High-rise & single family diagnostics"
    ]
  },
  {
    id: "durham",
    name: "Durham (Select Neighborhoods)",
    badge: "South & East Hubs",
    description: "Providing trusted residential plumbing, slab leak detection, and drain clearing services to southern and eastern Durham communities.",
    zipCodes: ["27703", "27707", "27713"],
    avgResponse: "25 - 45 Mins",
    neighborhoods: [
      "Southpoint Mall Area",
      "Woodcroft & Hope Valley",
      "Research Triangle Border",
      "Bethesda / Ellis Rd",
      "Parkwood Neighborhood"
    ],
    features: [
      "Historic home plumbing upgrades",
      "Cast iron pipe camera scoping",
      "Water pressure regulator calibration"
    ]
  },
  {
    id: "rtp",
    name: "Research Triangle Park (RTP)",
    badge: "Corporate & Tech Hub",
    description: "Supporting tech campuses, commercial laboratories, and light manufacturing facilities with high-reliability plumbing services and rapid emergency response.",
    zipCodes: ["27709", "27560"],
    avgResponse: "20 - 35 Mins",
    neighborhoods: [
      "RTP Central Campus",
      "Davis Drive Tech Corridor",
      "Alexander Drive Labs",
      "Cornwallis Business Parks",
      "Kit Creek Corporate Center"
    ],
    features: [
      "Commercial preventative agreements",
      "Backflow preventer testing & repairs",
      "Rapid commercial facility emergency support"
    ]
  }
];

export const VALID_ZIP_CODES = {
  "27560": { city: "Morrisville / RTP", status: "Primary Zone", time: "15-30 mins" },
  "27519": { city: "West Cary", status: "Primary Zone", time: "20-35 mins" },
  "27513": { city: "Cary", status: "Primary Zone", time: "20-35 mins" },
  "27511": { city: "Central Cary", status: "Primary Zone", time: "25-35 mins" },
  "27518": { city: "South Cary", status: "Primary Zone", time: "25-40 mins" },
  "27617": { city: "Brier Creek / Raleigh", status: "Primary Zone", time: "25-40 mins" },
  "27607": { city: "West Raleigh / PNC", status: "Standard Zone", time: "30-45 mins" },
  "27612": { city: "Northwest Raleigh", status: "Standard Zone", time: "30-45 mins" },
  "27613": { city: "North Raleigh", status: "Standard Zone", time: "35-50 mins" },
  "27709": { city: "RTP Commercial Zone", status: "Primary Zone", time: "20-35 mins" },
  "27713": { city: "South Durham / Southpoint", status: "Standard Zone", time: "25-45 mins" },
  "27703": { city: "East Durham", status: "Standard Zone", time: "30-45 mins" },
  "27707": { city: "Southwest Durham", status: "Standard Zone", time: "35-50 mins" }
};
