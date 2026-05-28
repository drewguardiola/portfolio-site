// Single source of truth for resume page content.

export const resume = {
  education: [
    {
      school: "Northwestern University — McCormick School of Engineering",
      degree: "Combined B.S./M.S. in Mechanical Engineering · GPA 3.75 / 4.00",
      timeline: "Expected June 2027 · Evanston, IL",
      notes: [
        "Relevant coursework: Engineering Analysis I–IV, Design Thinking and Communication, Electronics Design, Mechanics of Materials, Mechatronics, Thermodynamics, Mechanical Design, Fluid Mechanics, Machine Dynamics, Embedded Programming in Python."
      ]
    }
  ],

  experience: [
    {
      role: "Systems Engineering Intern",
      org: "Honeywell Aerospace Technologies",
      location: "Phoenix, AZ",
      timeline: "Jun 2025 – Sep 2025",
      bullets: [
        "Verified 200+ engine requirements and enabled team-friendly reporting through 50+ reports in DOORS Report Builder.",
        "Contributed to FEA and CFD simulations for propulsion systems using physics-based analysis and design validation."
      ]
    },
    {
      role: "Aerodynamics Subteam Engineer",
      org: "Northwestern Formula Racing (FSAE)",
      location: "Evanston, IL",
      timeline: "Sept 2024 – Present",
      bullets: [
        "Raised the rear-wing lift/drag ratio from 1.89 to 2.03 through iterative CFD optimization in ANSYS Fluent.",
        "Built and meshed full-vehicle CFD models, integrating diffuser and floor low-pressure behavior into rear-wing setup.",
        "Designed wing geometry in Siemens NX while staying within FSAE competition regulations."
      ]
    },
    {
      role: "Mechanical Design — 3D-Printed Bicycle Brake Caliper",
      org: "Northwestern McCormick (course project)",
      location: "Evanston, IL",
      timeline: "Spring 2025",
      bullets: [
        "Designed a 3D-printable brake caliper that stops a bicycle traveling 20 mph within 5 meters.",
        "Applied topology optimization and FEA in Siemens NX with first-principles load pathing and failure analysis."
      ]
    },
    {
      role: "Project Lead — Automatic Card Shuffler",
      org: "Self-directed capstone",
      location: "Evanston, IL",
      timeline: "Spring 2024",
      bullets: [
        "Built an autonomous card shuffler that thoroughly shuffles a deck in two passes — roughly 20% faster than manual shuffling.",
        "Integrated DC motors and microcontroller logic with laser-cut acrylic and CNC-routed wood components."
      ]
    }
  ],

  leadership: [
    {
      role: "Founding President",
      org: "Ascend Consulting Group, Northwestern Chapter",
      timeline: "Jul 2024 – Present",
      bullets: [
        "Built the chapter from scratch: formed a 5-member executive board, defined leadership roles, recruited 30 members through a rigorous selection process.",
        "Led a consulting engagement with Y Combinator-backed Capitol AI — weekly data collection, user feedback analysis, and actionable recommendations.",
        "Coordinated with student leaders at peer universities to align on chapter mission and values."
      ]
    },
    {
      role: "VP of Marketing",
      org: "Kappa Theta Pi (KTP), Kappa Chapter",
      timeline: "[PLACEHOLDER — dates]",
      bullets: [
        "Oversaw marketing strategy and initiatives, increasing chapter visibility and engagement 200%."
      ]
    }
  ],

  skills: {
    "Simulation & CAD": ["ANSYS", "Siemens NX", "SolidWorks"],
    "Programming": ["Python", "Microsoft Excel"],
    "Fabrication": ["Laser Cutting", "3D Printing", "CNC Router"]
  },

  awards: [
    {
      label: "SIG Poker — Regional",
      value: "2nd of 100 · $1,000 (2024–25 Susquehanna International Group)"
    },
    {
      label: "SIG Poker — National",
      value: "5th of 8,000 · $1,500"
    },
    {
      label: "Scholarship",
      value: "Hispanic Scholarship Fund Scholar"
    }
  ]
};
