// Single source of truth for all projects.
// To add a project: append one object, then drop images into /assets/projects/<id>/.
// No HTML edits needed.
//
// Schema notes:
//   images: (string | { src: string, caption: string })[]
//   links:  { label: string, url: string }[]
//   Video files (.mp4, .mov, .webm) in images are rendered as <video> automatically.

export const projects = [
  {
    id: "nufsae-aero-cfd",
    title: "Northwestern Formula Racing — Aerodynamics",
    category: "Engineering",
    featured: true,
    priority: 1,
    coverImage: "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_4.png",
    tags: ["CFD", "Aerodynamics", "FSAE"],
    summary: "Optimized FSAE rear wing aerodynamics through CFD and iterative CAD, improving lift/drag ratio from 1.89 → 2.03.",
    impact: "Manufactured rear wing used on the racecar — earned 23rd out of 86 teams at nationals.",
    role: "Aerodynamics Subteam Engineer",
    timeline: "Sept 2024 – Present",
    tools: ["ANSYS Fluent", "Siemens NX", "CFD", "FEA"],
    sections: [
      {
        heading: "More Downforce, Less Drag",
        body: "The main means in order to accomplish these optimizations would be to maximize the magnitude of the Cl/Cd ratio, while keeping weight as low as possible. Updated coefficient plots (on the right) show a larger magnitude of negative lift alongside a lower magnitude of drag. This higher negative lift to drag ratio gives extra grip through corners without giving up straight-line speed. More traction at apex means earlier throttle application and shorter lap times, which is why it’s important to consider these factors when designing.",
        images: [
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_1.png",
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_2.png"
        ]
      },
      {
        heading: "Airfoil CFD",
        body: "While conducting CFD on the airfoils themselves, we can see that there is an accelerated flow of higher velocity, lower pressure air at the bottom of the foil and lower velocity, higher pressure air in the flow above the foil. This creates a strong pressure split, and drives the downforce that we predicted with the coefficients. It also allows us to set the angle of attack for later stages of airflow, resulting in reduced turbulence and vortices.",
        images: [
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_3.png",
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_4.png"
        ]
      },
      {
        heading: "Full Car CFD",
        body: "Running the complete vehicle through the simulation, we again see the higher velocity air channel under the wing, but this time also see it merging smoothly with the wake from the diffuser. This creates an extended low-pressure zone, pulling fresh air over the floor and increasing aerodynamics efficiency. The results also show that the loads experienced from the rear wing are in line with the suspension geometry, and the car won’t have greater forces on one side or another.",
        images: [
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_5.png",
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_6.png",
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_7.png",
          "assets/projects/nufsae-aero-cfd/nufsae-aero-cfd_8.png"
        ]
      },
      {
        heading: "Final Rear Wing Design",
        body: "The final product features three “gills” with chamfered tips that decrease in size with distance from the edge of the endplate. These staggered slits shed away the vortices in stages, allowing each to experience cleaner flow and overall decreasing the drag on the car. The small corner cuts divert the tip vortex away from the tire wake, yet again trimming drag and keeping downforce steady even through different yaw angles. This design was then manufactured and used on the racecar, to earn us 23rd out of 86 teams in this year’s national competition!",
        images: []
      }
    ],
    links: []
  },

  {
    id: "bike-brake-caliper",
    title: "3D-Printed Bicycle Brake Caliper",
    category: "Engineering",
    featured: true,
    priority: 2,
    coverImage: "assets/projects/bike-brake-caliper/bike-brake-caliper_7.jpg",
    tags: ["Mechanical Design", "FEA", "Topology Optimization"],
    summary: "Designed a 3D-printable bicycle brake caliper using topology optimization and FEA, validated through a full design-test-iterate cycle.",
    impact: "Stopped a bicycle traveling at 20 mph in under 5 meters — outperforming the 10 m design target.",
    role: "Mechanical Design (course project)",
    timeline: "Spring 2025",
    tools: ["Siemens NX", "Topology Optimization", "FEA", "FDM 3D Printing"],
    sections: [
      {
        heading: "Topology Optimization",
        body: "First, I defined a design space for the caliper based on the physical bicycle mounts and modeled them within Siemens NX. I applied realistic loading conditions to this designed space and performed topology optimization to identify what ideal material distribution would look like, shown directly below.",
        images: [
          "assets/projects/bike-brake-caliper/bike-brake-caliper_1.png",
          "assets/projects/bike-brake-caliper/bike-brake-caliper_2.png"
        ]
      },
      {
        heading: "Iteration and FEA Validation",
        body: "After interpreting the results, an initial design shown was 3D printed and tested. These results showed excessive deflection and insufficient stiffness, so I redesigned. More mass towards the high stress areas and validating the structure through finite element analysis resulted in a significant improvement on performance and met all functional criteria.",
        images: [
          "assets/projects/bike-brake-caliper/bike-brake-caliper_3.png",
          "assets/projects/bike-brake-caliper/bike-brake-caliper_4.png"
        ]
      },
      {
        heading: "Final Design",
        body: "The final version, shown on the right side of the middle row pictures, reflects a full design-test-iterate cycle using modern digital manufacturing tools and structural analysis. Our design was able to stop the bicycle in under 5 meters!",
        images: [
          { src: "assets/projects/bike-brake-caliper/bike-brake-caliper_5.png", caption: "Final Left Caliper Design" },
          { src: "assets/projects/bike-brake-caliper/bike-brake-caliper_6.png", caption: "Final Right Caliper Design" },
          { src: "assets/projects/bike-brake-caliper/bike-brake-caliper_7.jpg", caption: "3D Printed Final Design" }
        ]
      }
    ],
    links: []
  },

  {
    id: "automatic-card-shuffler",
    title: "Automatic Card Shuffler",
    category: "Engineering",
    featured: true,
    priority: 6,
    coverImage: "assets/projects/automatic-card-shuffler/automatic-card-shuffler_6.png",
    tags: ["Mechatronics", "Embedded Systems", "Mechanical Design"],
    summary: "Self-directed capstone — designed and built an autonomous, gravity-based card shuffler using a Raspberry Pi Pico, friction wheels, and fabricated wood/acrylic frame.",
    impact: "Effectively shuffles a deck in three passes — about 20% faster than manual shuffling, fully hands-free.",
    role: "Self-directed capstone — full project lead",
    timeline: "Spring 2024",
    tools: ["Raspberry Pi Pico", "DC Motors", "Laser-Cut Acrylic", "CNC-Routed Wood"],
    sections: [
      {
        heading: "Early Concepts",
        body: "When playing cards games, it is often a hassle to shuffle the cards in between each and every hand or round. Unless you have a professional dealer, you need someone who wants to deal and can shuffle well and quickly. Someone who is able to do all three is rarely found, so I wanted to come up with a solution. Below are some early rough concepts of possible solutions, including possible integration with lazy susans, belts, and multi-level versions of existing solutions.",
        images: [
          "assets/projects/automatic-card-shuffler/automatic-card-shuffler_1.png",
          "assets/projects/automatic-card-shuffler/automatic-card-shuffler_2.png",
          "assets/projects/automatic-card-shuffler/automatic-card-shuffler_3.png"
        ]
      },
      {
        heading: "Gravity-Based Design",
        body: "Ultimately, I settled on a gravity-based solution that would utilize an inclined surface with randomly rotating high-friction wheels to knock the cards in various directions down the slope. The varying wheel directions and orientations of the cards would slow some down, and leave others speeding down the ramp, effectively shuffling the cards. I found that after about three shuffles, it was able to “effectively” shuffle the cards.",
        images: []
      },
      {
        heading: "Build",
        body: "",
        images: [
          { src: "assets/projects/automatic-card-shuffler/automatic-card-shuffler_4.png", caption: "Electronic Components — Raspberry Pi Pico, Motor Drivers, Motors, Small Wheels, Breadboard" },
          { src: "assets/projects/automatic-card-shuffler/automatic-card-shuffler_5.png", caption: "Frame — 2 Triangle Wood Components, Square Wood Base, Hinges and Screws" },
          { src: "assets/projects/automatic-card-shuffler/automatic-card-shuffler_6.png", caption: "Final Product — Electronics, Frame, Acrylic Sliding Surface, Wheels, Power Bank" }
        ]
      }
    ],
    links: []
  },

  {
    id: "two-stage-gear-transmission",
    title: "Two-Stage Gear Transmission",
    category: "Engineering",
    featured: false,
    priority: 3,
    coverImage: "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_5.png",
    tags: ["Mechanical Design", "Shaft Design", "FEA", "Manufacturing"],
    summary: "Designed and validated shaft 1 of a three-shaft, two-stage speed-reduction gearbox transmitting 65 kW from 3000 rpm to 360 rpm.",
    impact: "2.23 Goodman factor of safety and 13.14 yield factor of safety on shaft 1, validated for a 5-year, 7-day-per-week, 10-hour-per-day duty cycle at 99% reliability.",
    role: "Shaft 1 lead — gear/bearing selection, force analysis, shaft sizing, validation",
    timeline: "Fall 2025",
    tools: ["Siemens NX", "Hand Calculation", "Mechanical Design"],
    sections: [
      {
        heading: "Overview",
        body: "For my Theory of Machines and Design of Elements course, my team and I designed a three-shaft, two-stage speed-reduction gearbox that takes 65 kW from an electric motor running at 3000 rpm and outputs at 360 rpm. I led the design and analysis of shaft 1, including the gear and bearing selections, full force analysis, shaft sizing, and validation under fatigue and yield criteria. The system was specified for 99% reliability over a 5-year, 7-day-per-week, 10-hour-per-day duty cycle.",
        images: []
      },
      {
        heading: "Force Analysis and Reaction Loads",
        body: "Shaft 1 takes the belt input from the electric motor on one end and transfers torque to gear 1 on the other. I started by calculating the angular velocity (314.16 rad/s), torque (206.9 Nm), and pulley belt forces (4138 N at 48.87°) from the input parameters. With the belt entering at an angle that cancels the tangential gear force, I worked through static equilibrium to solve for the reaction forces at both bearings. From there, the shear and moment diagrams in both planes gave a max bending moment of 438 Nm and max shear of 3949 N.",
        images: [
          "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_1.PNG"
        ]
      },
      {
        heading: "Shaft Sizing and Stress Validation",
        body: "With the loading established, I sized the shaft for the critical cross section. The minimum diameter from pure torsion came out to about 24 mm — above the 20 mm course requirement for stiffness — but I chose 55 mm at the critical section to account for stress concentrations from the keyway, fillets, and step changes. I ran through the full stress decomposition (bending, shear, torsion), applied stress concentration factors (Kf = 1.88, Kfs = 1.40), and combined them using von Mises. With Sut = 1000 MPa and Sy = 500 MPa for 4140 steel, plus Marin factors for surface, size, and reliability, the corrected fatigue strength came to 116 MPa. That gave a Goodman factor of safety of 2.23 and a yield factor of safety of 13.14 — both comfortably above unity for the 5-year life requirement.",
        images: [
          "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_2.PNG",
          "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_3.PNG",
          "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_4.PNG"
        ]
      },
      {
        heading: "Bearing Selection and Life Analysis",
        body: "Bearings were sized using L-10 life calculations and checked against dynamic and static load ratings (C and C₀) to confirm they meet the 5-year design life. The 991 N radial load on shaft 1 yielded a required dynamic load rating of 14.7 kN, which the SKF 6010 deep-groove ball bearing exceeds at 22.9 kN — a 1.56 factor of safety on the bearing alone, with an L10 life of 3276 million cycles.",
        images: []
      },
      {
        heading: "Drawings and Final Assembly",
        body: "The final shaft and gear drawings include all key features: stepped diameters for bearing seats, the keyway for the gear interface, fillets at every shoulder, and close-clearance tolerances on the bearing surfaces. The full assembly shows shaft 1 with both 6010 deep-groove ball bearings, the spur gear, end caps, and gaskets — designed for compact center-distance arrangement while meeting performance, strength, reliability, and manufacturability requirements.",
        images: [
          { src: "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_5.png", caption: "Full Assembly Drawing" },
          { src: "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_6.png", caption: "Shaft 1 Drawing" },
          { src: "assets/projects/two-stage-gear-transmission/two-stage-gear-transmission_7.png", caption: "Gear 1 Drawing" }
        ]
      }
    ],
    links: []
  },

  {
    id: "manufacturing-projects",
    title: "Manufacturing Projects",
    category: "Engineering",
    featured: false,
    priority: 5,
    coverImage: "assets/projects/manufacturing-projects/manufacturing-projects_11.png",
    tags: ["Manufacturing", "Fabrication", "Mechanical Design"],
    summary: "A six-lab arc through core manufacturing processes — culminating in using a manually machined mold insert as the actual tooling for an injection-molding run.",
    impact: "Fabricated progressively complex parts across every major process category, with each lab's output feeding directly into the next. Final lab used my hand-machined insert as production tooling.",
    role: "Individual coursework — Manufacturing Processes",
    timeline: "Spring 2026",
    tools: ["Precision Metrology", "FDM 3D Printing", "Sheet Metal Forming", "Manual Milling", "Sand Casting", "Injection Molding"],
    sections: [
      {
        heading: "Overview",
        body: "For my Manufacturing Processes course, I worked through six labs that progressively built up the toolkit of techniques an engineer needs to take a part from concept to production. The arc starts with measuring an existing part by hand, then moves through digital fabrication, mechanical forming, subtractive machining, casting, and finally using one of the parts I machined as the actual tooling for an injection-molding run. Each lab paired hands-on fabrication with analytical work — phase diagrams, cutting forces, tolerance stack-ups, process parameter sweeps.",
        images: []
      },
      {
        heading: "Metrology and Reverse Engineering",
        body: "The first lab was about getting comfortable with precision measurement. Working from a disassembled door latch mechanism, I used dial calipers, Vernier and digital micrometers, height gauges, pin gauges, gauge blocks, feeler gauges, and an optical comparator to measure three different components. Beyond just taking readings, the focus was on uncertainty analysis and tolerance rationale — deciding which interfaces needed close fits (knob-to-frame), which could be loose (bolt holes), and dimensioning the resulting CAD models accordingly.",
        images: [
          { src: "assets/projects/manufacturing-projects/manufacturing-projects_1.png", caption: "CAD Model — Reverse-Engineered Part" },
          { src: "assets/projects/manufacturing-projects/manufacturing-projects_2.png", caption: "Dimensioned Drawing" }
        ]
      },
      {
        heading: "Additive Manufacturing (FDM)",
        body: "I 3D printed one of the reverse-engineered components from Lab 1 using FDM, which meant making decisions about orientation, support structures, and infill density before slicing in Cura. After printing, dimensional comparison against the CAD design quantified the typical FDM shrinkage and surface artifacts. The lab also included a design scenario comparing FDM, SLA, SLS, and Material Jetting for a biocompatible implant — PEEK via FDM landed as the optimal answer when accounting for biocompatibility, mechanical demands, and per-part cost.",
        images: [
          "assets/projects/manufacturing-projects/manufacturing-projects_3.png",
          "assets/projects/manufacturing-projects/manufacturing-projects_4.png"
        ]
      },
      {
        heading: "Sheet Metal Forming and Tensile Testing",
        body: "Built a small carbon steel 1008 box through the full sheet metal workflow: layout and marking, notching and snipping, V-bending, and spot welding the corners. The analytical side covered cutting force (F = StL, or 0.7·TS·t·L) and bending force with the K_bf factor. The same lab included tensile testing of five different dogbone specimens — galvanized steel, Al 3003-H14, brass 260-H02, Al 6061-T6, and Al 2024-O-Clad — to extract Young's modulus, yield strength, ultimate tensile strength, and elongation. The variance across materials made the strength-vs-formability tradeoff tangible.",
        images: [
          "assets/projects/manufacturing-projects/manufacturing-projects_5.png",
          "assets/projects/manufacturing-projects/manufacturing-projects_6.png"
        ]
      },
      {
        heading: "Subtractive Machining",
        body: "Manual milling of an injection mold insert from a 2\" × 2\" × 0.75\" steel stock. The process: fly-cut top and bottom to 0.7\" ± 0.005\", square the length with a 1/2\" end mill, machine a 1\" × 1\" pocket with an end mill plus a 3/16\" ball end mill for radiused corners and five dimples, and finally drill and tap two 1/4-20 mounting holes. The analytical work covered orthogonal cutting (chip thickness ratio, shear angle via Merchant's theory, specific cutting energy and size effect) and surface roughness estimation using Ra ≈ f²/(32R) for face turning.",
        images: [
          "assets/projects/manufacturing-projects/manufacturing-projects_7.png",
          "assets/projects/manufacturing-projects/manufacturing-projects_8.png"
        ]
      },
      {
        heading: "Melting, Solidification, and Sand Casting",
        body: "Cast a small anvil from a Sn-Sb-Cu alloy using a green sand mold — cope and drag with a match plate, sprue and riser placement, runner design. Thermocouple data captured the heating and cooling curves with their phase-transition plateaus (roughly 400–430°F for melting, 475°F for solidification), which I then mapped onto the binary phase diagram for the alloy. Supporting calculations included the heat required to reach pouring temperature, sprue-bottom velocity using Bernoulli (v = √(2gh)), riser velocity from continuity, and fill time prediction.",
        images: [
          "assets/projects/manufacturing-projects/manufacturing-projects_9.png",
          "assets/projects/manufacturing-projects/manufacturing-projects_10.png"
        ]
      },
      {
        heading: "Injection Molding",
        body: "The capstone — using the mold insert I machined in Lab 4 as one half of an actual injection mold on a vertical pneumatic injection molder, with polypropylene as the feedstock. The first experiment dialed in the injection time on my custom insert, going from short shots at 1.56 seconds to complete fills at 4.62 seconds. The second experiment was a parameter sweep on a standard part — varying injection pressure (3000–4500 psi), nozzle/barrel temperature (480–540°F), and time (2–6 seconds) — and observing how each parameter influenced defects: sink marks, flash, voids, short shots, and weld lines. Watching a part I'd machined by hand actually function as production tooling closed the loop on the entire sequence.",
        images: [
          "assets/projects/manufacturing-projects/manufacturing-projects_11.png",
          "assets/projects/manufacturing-projects/manufacturing-projects_12.png"
        ]
      }
    ],
    links: []
  },

  {
    id: "static-structural-fea",
    title: "Static Structural FEA",
    category: "Engineering",
    featured: false,
    priority: 4,
    coverImage: "assets/projects/static-structural-fea/static-structural-fea_1.png",
    tags: ["FEA", "ANSYS", "Structural Analysis"],
    summary: "A series of static structural FEA studies in ANSYS spanning stress concentration, axial members, bimaterial assemblies, thermal-structural coupling, and externally loaded structures.",
    impact: "Eight problem types covered, from classical 2D stress concentration to multiphysics thermal-mechanical coupling — each validated against analytical solutions or physical intuition where available.",
    role: "Individual coursework — ME 362 Computational Methods in Engineering Design",
    timeline: "Spring 2026",
    tools: ["ANSYS Workbench 2024 R2", "Static Structural", "Coupled-Field Analysis"],
    sections: [
      {
        heading: "Overview",
        body: "For my course in Computational Methods in Engineering Design (ME 362), I worked through a series of static structural FEA studies in ANSYS Workbench 2024 R2. Each problem targeted a different class of engineering challenge — stress concentration, axial members, multi-material assemblies, thermal coupling, externally loaded structures — and required deciding the right modeling approach: plane stress vs. plane strain, mesh refinement strategy, boundary condition setup, and symmetry exploitation. Across all of them, the workflow was the same: define the geometry, mesh it sensibly, apply realistic loads and constraints, and interpret the results both numerically and against physical intuition.",
        images: []
      },
      {
        heading: "Plate with Elliptical Hole — Stress Concentration",
        body: "The classic stress concentration problem — a wide plate in tension with an elliptical hole, modeled with quarter-symmetry to cut computational cost. With b/a = 2 (major axis perpendicular to the load), the peak Sxx at the top of the hole reaches approximately 5σ₀, agreeing closely with the analytical Kt = 1 + 2(b/a) result. Mesh refinement on the elliptical edge was critical — coarse meshes consistently underpredicted peak stress by 10–15%.",
        images: [
          "assets/projects/static-structural-fea/static-structural-fea_1.png"
        ]
      },
      {
        heading: "Truss — Direct Stress",
        body: "A 2D truss analyzed for member-by-member direct stress under load case (i). Each member's axial stress was compared against hand calculations from the method of joints, confirming the FEA captures the load path correctly and that boundary conditions were applied at the right nodes.",
        images: [
          "assets/projects/static-structural-fea/static-structural-fea_2.png"
        ]
      },
      {
        heading: "Bimaterial Pipe — Radial Stress and Deformation",
        body: "A pipe made of two concentric layers of different materials under internal pressure. The radial stress plot shows the characteristic stress jump at the bimaterial interface — the stiffer outer layer carries a larger share of the hoop stress, while the inner layer takes most of the radial compression. Total deformation confirms the expected outward expansion with a discontinuity in radial slope at the interface, consistent with the analytical Lamé solution for compound cylinders.",
        images: [
          { src: "assets/projects/static-structural-fea/static-structural-fea_3.png", caption: "Radial Stress Distribution" },
          { src: "assets/projects/static-structural-fea/static-structural-fea_4.png", caption: "Total Deformation" }
        ]
      },
      {
        heading: "Bimaterial Thermal Strip",
        body: "The classic bimetallic switch — two strips of different thermal expansion coefficients bonded along their length, subjected to a uniform temperature increase. The total deformation plot shows the strip curling downward as the higher-α material expands more than its bonded neighbor, replicating the working principle behind thermal cutoff switches.",
        images: [
          "assets/projects/static-structural-fea/static-structural-fea_5.png"
        ]
      },
      {
        heading: "Underwater Tunnel — Stress and Deformation",
        body: "A buried tunnel loaded by hydrostatic pressure and surrounding soil. Stress contours show the typical \"halo\" of high compressive stress around the crown and invert, with the tunnel walls in lower compression. Total deformation confirms inward squeezing at the sidewalls and slight uplift at the invert — patterns that drive lining design decisions in real-world tunnel infrastructure.",
        images: [
          { src: "assets/projects/static-structural-fea/static-structural-fea_6.png", caption: "Equivalent Stress" },
          { src: "assets/projects/static-structural-fea/static-structural-fea_7.png", caption: "Total Deformation" }
        ]
      },
      {
        heading: "Line Load Along a Plate",
        body: "A plate subjected to a line load applied along the y-axis, with Sxx (normal stress in the loading direction) plotted across the field. The peak stress concentrates beneath the load application line and decays away from it according to Saint-Venant's principle — by roughly one plate thickness from the loaded line, the stress distribution becomes essentially uniform.",
        images: [
          "assets/projects/static-structural-fea/static-structural-fea_8.png"
        ]
      }
    ],
    links: []
  },

  {
    id: "fea-cloud-city",
    title: "FEA of Cloud City",
    category: "Engineering",
    featured: false,
    upcoming: true,
    priority: 11,
    coverImage: "assets/projects/fea-cloud-city/fea-cloud-city_1.jpg",
    tags: ["FEA", "Simulation"],
    summary: "[PLACEHOLDER — fill in]",
    impact: "[PLACEHOLDER — fill in]",
    role: "[PLACEHOLDER]",
    timeline: "[PLACEHOLDER]",
    tools: ["[PLACEHOLDER]"],
    sections: [],
    links: []
  },

  {
    id: "radial-vibration-bicycle-rim",
    title: "Radial Mechanical Vibration of a Bicycle Rim",
    category: "Engineering",
    featured: false,
    upcoming: true,
    priority: 12,
    coverImage: "assets/projects/radial-vibration-bicycle-rim/radial-vibration-bicycle-rim_1.png",
    tags: ["Vibration", "Dynamics"],
    summary: "[PLACEHOLDER — fill in]",
    impact: "[PLACEHOLDER — fill in]",
    role: "[PLACEHOLDER]",
    timeline: "[PLACEHOLDER]",
    tools: ["[PLACEHOLDER]"],
    sections: [],
    links: []
  },

  {
    id: "duomark-stylus",
    title: "DuoMark Stylus",
    category: "Engineering",
    featured: false,
    priority: 7,
    coverImage: "assets/projects/duomark-stylus/duomark-stylus_1.png",
    tags: ["Product Design", "Assistive Tech", "Client Work"],
    summary: "Designed an assistive stylus-marker hybrid for an occupational therapist’s clients, enabling seamless transitions between digital and paper writing.",
    impact: "Delivered a functional prototype that reduced task-switching time for clients with limited hand mobility.",
    role: "Team Lead",
    timeline: "3 months",
    tools: ["Design", "Sanding", "Client Work"],
    sections: [
      {
        heading: "Research and Testing",
        body: "A local occupational therapist found it to be very difficult and tedious to keep her clients engaged when switching between using a stylus on electronic device and writing on paper. Myself and three other students worked with her in order to create our solution, the DuoMark Stylus.\n\nThe first step in designing a successful product was learning what the exact needs and wants of the client are. Our occupational therapist emphasized that her clients had limited grip in the hands and a hard time focusing when switching tasks, resulting in long transition time between practicing writing on electronics and writing on paper.",
        images: [
          "assets/projects/duomark-stylus/duomark-stylus_1.png"
        ]
      },
      {
        heading: "Design Features",
        body: "- Hollow stylus tip\n- 5mm hex nut at base of stylus tip\n- Stylus tip mounted on top of marker flap\n- Retractable marker tip\n- Cord with tension allows flap to flip over tip when marker tip is retracted",
        images: [
          "assets/projects/duomark-stylus/duomark-stylus_2.png",
          "assets/projects/duomark-stylus/duomark-stylus_3.png"
        ]
      },
      {
        heading: "Our Solution’s Impact",
        body: "- Uses therapist’s hand mobility\n- Multiple colors encourages child engagement\n- Securely attached parts limit choking hazards\n- More comfortable writing position with thicker grip\n- Stiff clicker ensures mode switch only when wanted",
        images: [
          "assets/projects/duomark-stylus/duomark-stylus_4.mp4",
          "assets/projects/duomark-stylus/duomark-stylus_5.mp4"
        ]
      },
      {
        heading: "Final Design CAD",
        body: "",
        images: [
          "assets/projects/duomark-stylus/duomark-stylus_6.png"
        ]
      }
    ],
    links: []
  },

  {
    id: "dice-in-cup",
    title: "Dice in a Cup Simulation",
    category: "Engineering",
    featured: false,
    priority: 8,
    coverImage: "assets/projects/dice-in-cup/dice-in-cup_1.png",
    tags: ["Simulation", "Python", "Dynamics"],
    summary: "Simulated a dice bouncing inside a moving cup using symbolic math, Euler-Lagrange mechanics, and impact modeling in Python.",
    impact: "Built a full rigid-body simulation with real-time collision detection and momentum-consistent impact handling.",
    role: "Solo project",
    timeline: "2 weeks",
    tools: ["Python", "Dynamics", "Simulation"],
    sections: [
      {
        heading: "Reference Frames and Lagrangian Setup",
        body: "While exploring rigid body and machine dynamics, I simulated a small box (dice) bouncing around in a moving larger box (cup) using Python. This project models the full dynamics of the constrained and planar dice, featuring impacts and external forcing with the walls of the cup. The simulation was developed in Google Colab using symbolic computation and Euler-Lagrange mechanics to capture the interaction between the cup and dice.\n\nFrames were defined to use in the rigid body transformations, seen on the left. The world frame, in black, as well as the cup frame, in purple, and dice frame, in red, were all critical to define and create the Euler-Lagrange equations and impact update functions.",
        images: [
          "assets/projects/dice-in-cup/dice-in-cup_1.png"
        ]
      },
      {
        heading: "Time Integration Under Constraints",
        body: "To simulate motion, I implemented time integration under non-holonomic constraints and enforced velocity and acceleration-level constraints by using Jacobians and projection techniques, as seen below.",
        images: [
          "assets/projects/dice-in-cup/dice-in-cup_2.png"
        ]
      },
      {
        heading: "Impact Model",
        body: "The system includes an impact model that uses conservation of momentum with constrain impulses to handle the collisions between the dice and the walls of the cup. Additionally, the following were used for a smooth simulation and accurate depiction of impacts and forces:\n\n- Analytical derivation of equations of motion using symbolic math\n- Real-time collision detecting and impact handling\n- Momentum-consistent update step that preserves feasibility after each collision\n- Custom trajectory plots and animated visualization of motion",
        images: []
      },
      {
        heading: "Simulation Video",
        body: "[PLACEHOLDER — video to be embedded — Drew will provide]",
        images: []
      }
    ],
    links: [
      { label: "Write-up", url: "https://docs.google.com/document/d/1nrmuOnZ3whG2kzTAc4VHoyjKlIrzclqzfcQM7n1tCFQ/edit?tab=t.0" },
      { label: "Code", url: "https://colab.research.google.com/drive/1oi6AoykJQDkyavASfzb6nlN3HatfprpK#scrollTo=Q-Cv7mgppBmN" }
    ]
  },

  {
    id: "leglatch",
    title: "LegLatch",
    category: "Engineering",
    featured: false,
    priority: 9,
    coverImage: "assets/projects/leglatch/leglatch_4.png",
    tags: ["Design Thinking", "Client Work", "Non-Profit"],
    summary: "Designed wearable pants with attachable legs to prevent toddlers from climbing out of high chairs — a partnership with non-profit Kids In Danger (KID).",
    impact: "Led a 4-person team end-to-end as project manager through concept, prototyping, and client review.",
    role: "Project Manager (4-person team)",
    timeline: "Winter–Spring 2024",
    tools: ["Design Thinking", "Prototyping", "Client Engagement"],
    sections: [
      {
        heading: "Background Research",
        body: "The mission of Kids In Danger (KID), a Chicago-based non-profit, is educating parents, training engineers, designers, and manufacturers, and advocating for improvements in children’s product safety. Myself and three other students worked with the Executive Director of KID to design and create a product to reduce injuries in children caused by high chairs.\n\nWhen researching what parents look for in a high chair, we found that safety was the number one answer. Of course, above anything else, parents want their children to be safe when using the products they buy. We also found that 93-94% of the reason why high chairs are currently the most unsafe childrens product is due to falls and children falling out of the high chairs. With all of this in mind, we knew that we had to find some way to drastically reduce the likelihood of children falling out of the chairs, and this would result in a safer chair overall.",
        images: [
          "assets/projects/leglatch/leglatch_1.png"
        ]
      },
      {
        heading: "Thought Process",
        body: "At first, we did what seemed like the sensible option and tried to look into the high chairs themselves and how to make them more secure. Wider bases, shorter builds, and foolproof straps were all considered in the process, but we had realized that many manufacturers had already made these changes in attempt of a safer product, but falling was still occurring.",
        images: [
          "assets/projects/leglatch/leglatch_2.png",
          "assets/projects/leglatch/leglatch_3.png",
          "assets/projects/leglatch/leglatch_4.png"
        ]
      },
      {
        heading: "Final Product",
        body: "At the root, what we really needed to be able to stop was the children from climbing out of the chair. The LegLatch design is a pair of pants with attachable legs that is comfortable and allows for movement while simultaneously preventing the child from standing up in their chair, or ultimately exiting the chair and falling onto the ground.\n\n[PLACEHOLDER — final product image]",
        images: []
      }
    ],
    links: []
  },

  {
    id: "mechatronics",
    title: "Mechatronics Projects",
    category: "Engineering",
    featured: false,
    upcoming: true,
    priority: 10,
    coverImage: "assets/projects/mechatronics/mechatronics_1.png",
    tags: ["Mechatronics", "Embedded"],
    summary: "[PLACEHOLDER — fill in: one-sentence summary covering the mechatronics coursework / projects to feature here.]",
    impact: "[PLACEHOLDER — fill in: quantified outcome or scope.]",
    role: "[PLACEHOLDER]",
    timeline: "[PLACEHOLDER]",
    tools: ["[PLACEHOLDER]"],
    sections: [
      { heading: "Overview", body: "[PLACEHOLDER — fill in.]", images: [] }
    ],
    links: []
  },

  {
    id: "ascend-consulting",
    title: "Ascend Consulting",
    category: "Non-Engineering",
    featured: false,
    priority: 14,
    coverImage: "assets/projects/ascend-consulting/ascend-consulting_6.jpg",
    tags: ["Leadership", "Y Combinator"],
    summary: "Founding President of the Northwestern Chapter of Ascend Consulting Group — a student-led organization pairing students with YC-backed startups.",
    impact: "Built a 50-member chapter from scratch and actively running consulting projects across the YC startup ecosystem.",
    role: "Founding President, Northwestern Chapter",
    timeline: "July 2024 – Present",
    tools: ["Leadership", "Y Combinator"],
    sections: [
      {
        heading: "Overview",
        body: "Ascend Consulting Group is a fully student-led organization that works with YC-backed startups to gather, analyze, and package student feedback into tangible ideas. I am the founding president of the Northwestern Chapter, where we currently have 50 members actively working on various projects across the startup realm. I've been very grateful to bring this opportunity to Northwestern, and to allow many students to gain real-world experience while simultaneously improving my own leadership skills and exploring potential interests.\n\nTo learn more, visit ascendgroup.co.",
        images: []
      },
      {
        heading: "Our Clients",
        body: "Pictured below are several of the startups Ascend has worked with.",
        images: [
          "assets/projects/ascend-consulting/ascend-consulting_1.jpg",
          "assets/projects/ascend-consulting/ascend-consulting_2.jpg",
          "assets/projects/ascend-consulting/ascend-consulting_3.png",
          "assets/projects/ascend-consulting/ascend-consulting_4.jpg"
        ]
      },
      {
        heading: "The Team in Action",
        body: "Members at recent events and project sessions.",
        images: [
          "assets/projects/ascend-consulting/ascend-consulting_5.png",
          "assets/projects/ascend-consulting/ascend-consulting_6.jpg",
          "assets/projects/ascend-consulting/ascend-consulting_7.png"
        ]
      }
    ],
    links: [
      { label: "ascendgroup.co", url: "http://ascendgroup.co/" }
    ]
  },

  {
    id: "poker",
    title: "Poker",
    category: "Non-Engineering",
    featured: false,
    priority: 13,
    coverImage: "assets/projects/poker/poker_1.jpg",
    tags: ["Texas Hold 'Em", "Tournaments"],
    summary: "Self-taught Texas Hold 'Em player who turned a curiosity at a friend's cottage into multiple top finishes in national-scale tournaments.",
    impact: "2nd of 100 at the SIG Chicago regional ($1,000) and 5th of 8,000 at the SIG national championship in Philadelphia ($1,500) — 2024–25.",
    role: "Player",
    timeline: "2024 – Present",
    tools: ["Texas Hold 'Em", "Tournaments"],
    sections: [
      {
        heading: "Overview",
        body: "About two years ago, I was at one of my friends' cottages in Canada when I spotted a shiny little case in the corner of the room. Naturally, I asked what it was and he told me it was a poker set. I had seen clips of poker here and there, but had no idea how to play. At the time, we weren't busy so he taught me. Since then, how I would spend my free time has never been the same. I became obsessed with learning the game — the math, the strategy, and most importantly the people. Poker isn't like other games since there are an absurd amount of moving parts to the game.\n\nIn order to come out on top, you must learn them all.",
        images: []
      },
      {
        heading: "Learning the Game",
        body: "In addition to playing with my friends and at charity games, I've also had my fair share of appearances in tournaments. Susquehanna hosted a poker tournament recruiting event in October 2024, and I was determined to make it to the end.",
        images: [
          "assets/projects/poker/poker_2.png",
          "assets/projects/poker/poker_3.png"
        ]
      },
      {
        heading: "The SIG Tournament — Chicago Regionals",
        body: "The structure was as follows: from four different cities (Chicago, San Francisco, New York, and Philadelphia), 8,000 players would play in an online fast-paced tournament to narrow the field down to 400 who would compete in regional tournaments, each with a pool of 100 players. After qualifying for the live tournament in Chicago, I woke up at the crack of dawn, put my penguin hat on, and got in the right mindset for the day. The top 4 players from each of these 100-player regional tournaments would advance to the championship in Philadelphia.\n\nThe Chicago tournament lasted a grueling 8 hours, but in the end we managed to secure 2nd place and a $1,000 cash prize.",
        images: [
          "assets/projects/poker/poker_1.jpg",
          "assets/projects/poker/poker_4.png"
        ]
      },
      {
        heading: "Philadelphia Championship",
        body: "Now it was time to prepare for the championship. Come April 2025, I found myself in Philadelphia with 15 of the other players who made it to the end of the 8,000-player competition. I played the best poker I could — taking every note of my opponents' strategies, physical movements, and speech. Ultimately, I secured 5th place in the championship and an extra $1,500 prize.",
        images: [
          "assets/projects/poker/poker_5.png"
        ]
      }
    ],
    links: []
  },

  {
    id: "saxophone",
    title: "Saxophone",
    category: "Non-Engineering",
    featured: false,
    priority: 16,
    coverImage: "assets/projects/saxophone/saxophone_1.jpg",
    tags: ["Tenor Sax", "Marching Band"],
    summary: "Tenor saxophone player for 8 years (after 3 years on alto). Group 1 Open Champions at MetLife Stadium, 2021.",
    impact: "Won the Group 1 Open Championship at MetLife Stadium in 2021 with the high school marching band.",
    role: "Saxophone Player",
    timeline: "11 years (3 years alto, 8 years tenor)",
    tools: ["Tenor Sax", "Marching Band"],
    sections: [
      {
        heading: "Overview",
        body: "I played the Alto Saxophone for about 3 years before switching to the Tenor Saxophone, which I've been playing for about 8 years now — including the year my high school marching band won the Group 1 Open Championship at MetLife Stadium in 2021. It would be impossible to fit even a fraction of my favorite pictures of me playing the saxophone or being in band, but here are a handful.",
        images: []
      },
      {
        heading: "Photos",
        body: "",
        images: [
          "assets/projects/saxophone/saxophone_1.jpg",
          "assets/projects/saxophone/saxophone_2.jpg",
          "assets/projects/saxophone/saxophone_3.jpg",
          "assets/projects/saxophone/saxophone_4.jpg"
        ]
      }
    ],
    links: []
  },

  {
    id: "snowboarding",
    title: "Snowboarding",
    category: "Non-Engineering",
    featured: false,
    priority: 15,
    coverImage: "assets/projects/snowboarding/snowboarding_6.jpg",
    tags: ["Aspen", "Powder"],
    summary: "Snowboarder since age 11, conquering first black diamonds and first jumps in Aspen during December 2024.",
    impact: "First black diamonds and first jumps in Aspen, December 2024 — equivalent leap in skill in 4 days as the previous 8 years combined.",
    role: "Snowboarder",
    timeline: "Since age 11",
    tools: ["Aspen", "Powder"],
    sections: [
      {
        heading: "Overview",
        body: "I was 11 years old the first time I touched a snowboard. Whenever I get the chance, I love to hit the slopes and improve my skills, typically with my mom — who got me into it in the first place. Living in New Jersey for the first 18 years of my life, the conditions to snowboard weren't always the greatest, but I still had tons of fun getting better.",
        images: []
      },
      {
        heading: "Aspen, December 2024",
        body: "During December 2024, I took a trip to Aspen, Colorado, where all of the photos on this page were taken. In the four days I was there, I felt like I had improved as much as I had over the previous 8 years. The snow was perfectly powdery, and I could really work on my technique without worrying about falling into a rocky ditch. I even conquered my first jumps and black diamonds!",
        images: [
          "assets/projects/snowboarding/snowboarding_1.jpg",
          "assets/projects/snowboarding/snowboarding_2.jpg",
          "assets/projects/snowboarding/snowboarding_3.jpg",
          "assets/projects/snowboarding/snowboarding_4.jpg"
        ]
      },
      {
        heading: "Highlights",
        body: "",
        images: [
          { src: "assets/projects/snowboarding/snowboarding_5.jpg", caption: "Top of my first black diamond" },
          { src: "assets/projects/snowboarding/snowboarding_6.jpg", caption: "View atop Aspen Mountain" }
        ]
      }
    ],
    links: []
  }
];
