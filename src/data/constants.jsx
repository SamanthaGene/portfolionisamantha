// src/data/constants.js

export const ELEMENT_COLORS = {
  Pyro: { color: "#BD411D", icon: "/pyro.png", text: "text-[#FF5722]" }, 
  Hydro: { color: "#2196F3", icon: "/hydro.png", text: "text-[#2196F3]" }, 
  Anemo: { color: "#4CAF50", icon: "/anemo.png", text: "text-[#4CAF50]" }, 
  Electro: { color: "#9C27B0", icon: "/electro.png", text: "text-[#9C27B0]" }, 
  Geo: { color: "#FFC107", icon: "/geo.png", text: "text-[#FFC107]" }, 
  Dendro: { color: "#8BC34A", icon: "/dendro.png", text: "text-[#8BC34A]" }, 
  Cryo: { color: "#4DD0E1", icon: "/cryo.png", text: "text-[#4DD0E1]" }, 
};

export const PAGES = {
  PROFILE: 'profile',
  PROJECTS: 'projects',
};

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Art Therapy: HCI 101 Prototype Making Using Figma",
    element: "Electro",
    rarity: 5,
    description: "A simple task to explore the work and wonders of UI/UX Designing.",
    enemies: ["Confusing Flow Slime", "Inconsistent Spacing Demon", "Layout Shifting Specter"],
    hp: 150000,
    // --- NEW MEDIA FIELDS ---
    previewImage: "/hci1.png", // Small preview image for the card
    videoUrl: "https://www.youtube.com/embed/9IzMaOgaZ9c", // Example YouTube Embed URL (replace this)
    screenshots: [
        "/hci1.png", 
        "/hci2.png", 
        "/hci3.png"
    ]
  },
  {
    id: 2,
    title: "ADV 102: Compilation of Activities Using Expo and ReactJS",
    element: "Hydro",
    rarity: 5,
    description: "A responsive website made with ReactJS and Expo Go that utilizes API, CRUD operations and Firebase.",
    enemies: ["Unauthenticated Access Warlock", "State Synchronization Glitch"],
    hp: 120000,
    // --- NEW MEDIA FIELDS ---
    previewImage: "/romarmain.png",
    videoUrl: "https://www.youtube.com/embed/LDRYIm3zd_U", // No video for this project
    screenshots: [
        "/romar1.png", 
        "/romar2.png",
    ]
  },
  {
    id: 3,
    title: "ADV 102: PetHelp Website Made Using Expo and ReactJS",
    element: "Dendro",
    rarity: 4,
    description: "A simple website for those who loves animals and willing to adopt one.",
    enemies: ["The Simultaneous Application Bug", "Broken Image Link Ogre"],
    hp: 75000,
    // --- NEW MEDIA FIELDS ---
    previewImage: "/petmain.png",
    videoUrl: "https://www.youtube.com/embed/aVcA1xHJVZg", // Example Video Embed URL
    screenshots: [
        "/pet1.png", 
        "/pet2.png",
    ]
  },
  {
    id: 4,
    title: "ADV 102: PetHelp Website Made Using Expo and ReactJS",
    element: "Dendro",
    rarity: 4,
    description: "A simple website for those who loves animals and willing to adopt one.",
    enemies: ["The Simultaneous Application Bug", "Broken Image Link Ogre"],
    hp: 75000,
    // --- NEW MEDIA FIELDS ---
    previewImage: "/petmain.png",
    videoUrl: "https://www.youtube.com/embed/aVcA1xHJVZg", // Example Video Embed URL
    screenshots: [
        "/pet1.png", 
        "/pet2.png",
    ]
  }
];

// Helper function to render stars
export const renderStars = (count) => {
  return Array(count).fill(0).map((_, i) => (
    <span key={i} className="text-[#FFC107] text-lg">★</span>
  ));
};

// Helper to get styles
export const getElementStyle = (element) => 
  ELEMENT_COLORS[element] || { color: "#7888A0", icon: "⭐", text: "text-gray-500" };

// src/data/constants.js

// ... (Keep existing ELEMENT_COLORS, PAGES, PROJECTS_DATA)

export const TRAVEL_LOG_DATA = [
  {
    day: 1, 
    title: "WorldTech Information Solutions, Inc.", 
    details: "Opened my eyes to the possibilities when you're in IT industry.",
    images: ["/wisi.jpg", "/wisi1.png"]
  },
  {
    day: 2, 
    title: "CodeChum & Rivan IT Cebu", 
    details: "Two opposite companies that gave different advices but made impact on our perspectives.",
    images: ["/cc.jpeg", "/ric.jpg"]
  },
  {
    day: 3, 
    title: "Mata Technologies, Inc.", 
    details: "Where creativity, passion, and technology meets with a little bit of fun.",
    images: ["/mata1.jpg", "/mata2.jpeg"]
  },
  {
    day: 4, 
    title: "Tagbilaran City Disaster Risk Reduction and Management Office", 
    details: "Security and integrity is priority when it is for every minority.",
    images: ["/cd1.jpg", "/cd2.jpg"]
  }
];

// ... (Keep existing helper functions)

// src/data/constants.js

// ... (Keep existing ELEMENT_COLORS, PAGES, PROJECTS_DATA, TRAVEL_LOG_DATA)

// --- NEW CERTIFICATES DATA ---
export const CERTIFICATES_DATA = [
  {
    id: 1,
    title: "Certificate of Completion: Educational Tour in Cebu and Bohol",
    issuer: "World of Adventures Travel and Tours",
    date: "Issued on 2025-11-22",
    reward: "50 Primogems",
    previewImage: "/eductourcert.jpg", // Placeholder: Ensure this small image exists
    fullImage: "/eductourcert.jpg",       // Placeholder: Ensure this full image exists
    details: "Who actively participated, with sincere effort and meaningful attendance during the tour."
  },
  {
    id: 2,
    title: "Certification of Completion: Information Management",
    issuer: "CodeChum",
    date: "Issued on 2025-12-13",
    reward: "75 Primogems",
    previewImage: "/codechum.png", // Placeholder: Ensure this small image exists
    fullImage: "/codechum.png",       // Placeholder: Ensure this full image exists
    details: "Completion of all activities provided with a total score of 1071 over 1130."
  }
];

// src/data/constants.js (Add this block near the bottom of the file)

export const DOCUMENTATION_LOG_DATA = [
  {
    day: 1, 
    title: "Initial Planning & Wireframes", 
    details: "Defining project scope, user stories, and creating low-fidelity mockups.",
    images: ["/doc_plan1.jpg", "/doc_plan2.jpg"] // Add your new documentation pictures here
  },
  {
    day: 2, 
    title: "Backend Setup & Database Design", 
    details: "Establishing Firebase structure and creating API endpoint prototypes.",
    images: ["/doc_backend1.jpg"] 
  },
  {
    day: 3, 
    title: "Component Development & State Management", 
    details: "Building reusable React components and implementing Redux/Context for state control.",
    images: ["/doc_component1.jpg", "/doc_component2.jpg"] 
  },
  {
    day: 4, 
    title: "Testing & Deployment Prep", 
    details: "Executing unit and integration tests, finalizing responsive design for production.",
    images: ["/doc_test1.jpg"]
  }
];
// ... (Keep existing helper functions)