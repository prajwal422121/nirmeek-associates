import { useEffect, useState } from "react";
import { dynamicDB, ref, onValue } from "./firebase";

export const useProjects = () => {
  const [slides, setSlides] = useState({
    slide1: {},
    slide2: {},
    slide3: {},
    slide4: {},
    slide5: {},
    slide6: {},
    slide7: {},
    slide8: {},
    slide9: {},
    slide10: {},
    projects: {}, // Add projects to initial state
  });

  useEffect(() => {
    // Fetch slides 1-10
    const fetchSlideData = (slideNumber) => {
      const slideRef = ref(dynamicDB, `slide${slideNumber}`);
      onValue(slideRef, (snapshot) => {
        const data = snapshot.val();
        setSlides((prev) => ({ ...prev, [`slide${slideNumber}`]: data }));
      });
    };

    for (let i = 1; i <= 10; i++) fetchSlideData(i);

    // Fetch projects
    const projectsRef = ref(dynamicDB, "projects");
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val();
      setSlides((prev) => ({ ...prev, projects: data }));
    });
  }, []);

  // Process projects data
  const firebaseProjects = Object.entries(slides.projects || {}).map(
    ([key, project]) => ({
      id: key,
      name: project.title || "Unnamed Project",
      subtitle: project.subtitle || "",
      services: Array.isArray(project.services) ? project.services : [],
      image: project.image || "default.jpg",
      category: project.category || "current",
    })
  );

  // Categorize projects
  const currentProjects = [
    {
      id: 1,
      name: "M/s. Shivruddhi Dreams LLP",
      subtitle:
        "1402, Signature Business Park, Postal Colony, Chembur, Mumbai - 400 071",
      services: [
        "Proposed Redevelopment of Indira Niwas on FP No. 1168 TPS-IV, Mahim Division",
        "Location: Kashinath Dhuru Marg, Opp. Kirti College, Dadar (W), Mumbai - 400 028",
        "Registration: 33(7) + 33(12)(B) of DCPR 2034",
        "Construction Area: 70,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 2,
      name: "M/s. Aadi Shikhar LLP",
      subtitle:
        "7, Plot No. 147/A, Kalapurna Bldg., Sion (W), Mumbai - 400 022",
      services: [
        "Redevelopment of Plot No. 147A & 147 (CS No. 147A/6 & 147/6)",
        "Location: Near Jain Mandir, Sion (E), Mumbai - 400 022",
        "Registration: 33(7) + 33(12)(B) of DCPR 2034",
        "Construction Area: 97,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 3,
      name: "M/s. R House Realty Private Limited",
      subtitle: "Jindal Mansion, Dr. G. Deshmukh Marg, Mumbai - 400 026",
      services: [
        "Redevelopment of C.S. No. 246, Malabar Hill Division",
        "Location: Ruparel House, 38 Ridge Road, Mumbai 400 006",
        "Registration: 30(A) of DCPR 2034",
        "Construction Area: 134,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 4,
      name: "Sandu Developers",
      subtitle: "Laxmi Nilaya, Bhaudaji Cross Road, Matunga (CR), Mumbai",
      services: [
        "Redevelopment of Radha Mandir under DC Regn. 33(7)",
        "Location: Sir Bhalchandra Road, Matunga, Mumbai-400 019",
        "Registration: 33(7) + 33(7)(22) of DCPR 2034",
        "Construction Area: 60,200 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 5,
      name: "Shree Shantinagar Venture",
      subtitle: "D.B. House, Goregaon (E), Mumbai-63",
      services: [
        "Re-development of Shantinagar CHSL",
        "Location: Sane Guruji Marg, Satrasta, Mumbai - 400 011",
        "Registration: 33(7) + 33(18) of DCPR 2034",
        "Construction Area: 394,000 Sq.Ft.",
        "Project Cost: ₹118 Cr",
      ],
      image: "",
    },
    {
      id: 6,
      name: "Aikya Realty Pvt. Ltd.",
      subtitle: "213, Turf Estate, Mahalaxmi, Mumbai: 400 011",
      services: [
        "Redevelopment of C.S.No.1E/659, Gamadia Colony Road",
        "Registration: 30(A) of DCPR 2034",
        "Construction Area: 21,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 7,
      name: "Neelkamal Realtors Tower Pvt. Ltd.",
      subtitle: "D.B. House, Goregaon (E), Mumbai-63",
      services: [
        "Redevelopment of C.S. No. 1906, Byculla Division",
        "Location: Maulana Azad Road, Jacob Circle",
        "Registration: 33(7)+33(18)+30(A) of DCPR 2034",
        "Construction Area: 1,292,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 8,
      name: "Neelkamal Realtors & Builders Pvt. Ltd.",
      subtitle: "D.B. House, Goregaon (E), Mumbai-63",
      services: [
        "Redevelopment of C.S. No. 241-243, Tardeo Division",
        "Location: Bellasis Road, Mumbai Central",
        "Registration: 33(7)+33(18)+30(A) of DCPR 2034",
        "Construction Area: 1,130,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 9,
      name: "M/s. Nikita Properties Ltd.",
      subtitle: "310, Gundecha Chambers, Fort, Mumbai - 400 023",
      services: [
        "Redevelopment of Bldg. No. 28, Matharpakhadi Road",
        "Registration: 33(7) of DCPR 2034",
        "Construction Area: 28,000 Sq.Ft.",
        "Part OC Obtained: Nov 2023",
      ],
      image: "",
    },
    {
      id: 10,
      name: "Sankalp Construction",
      subtitle: "101, Monalisa, Malad West, Mumbai-400064",
      services: [
        "Residential Complex at Survey No. 104, Ghodbunder",
        "Construction Area: 120,000 Sq.Ft.",
      ],
      image: "",
    },
    {
      id: 11,
      name: "Shree Pancham Associates",
      subtitle: "Beverly Park, Mira Road East, Thane",
      services: [
        "Building No. 1 at Survey No. 115/6 Pt.",
        "Construction Area: 85,000 Sq.Ft.",
        "Part OC Obtained: May 2024",
      ],
      image: "",
    },
    {
      id: 12,
      name: "PNK Space Development Pvt. Ltd.",
      subtitle: "601, Purva Plaza CHS Ltd, Borivali (W) Mumbai 400092",
      services: [
        "Residential Complex at Ghodbunder Village",
        "Construction Area: 728,000 Sq.Ft.",
      ],
      image: "",
    },
    ...firebaseProjects.filter((p) => p.category === "current"),
  ];

  const completedProjects = [
    {
      id: 1,
      name: "M/s. ELITE HOUSING DEVELOPERS LLP",
      subtitle: "Laloobhai Amichand Group Co., Mumbai-7",
      services: [
        "Redevelopment of Dattatray Bldg (CS No. 3/296)",
        "Location: Javji Dadaji Road, Tardeo",
        "Registration: 33(7) of DCPR 2034",
        "Area: 80,000 Sq.Ft.",
        "Cost: ₹45 Cr",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Windsor Residency Pvt. Ltd.",
      subtitle: "Jindal Mansion, Dr. G. Deshmukh Marg, Mumbai-26",
      services: [
        "Redevelopment of Morena House (CS No.2C/738)",
        "Location: M.L. Dahanukar Marg",
        "Registration: 33(7) of DCPR 2034",
        "Area: 95,000 Sq.Ft.",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Aikya Realty Pvt. Ltd.",
      subtitle: "Kalbadevi, Mumbai-400 002",
      services: [
        "Redevelopment of C.S. No. 2/283",
        "Location: Tukaram Javaji Marg, Tardeo",
        "Registration: 33(7) of DCPR 2034",
        "Area: 77,800 Sq.Ft.",
        "Cost: ₹42 Cr",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      name: "Neelkamal Realtors & Builders Pvt. Ltd.",
      subtitle: "D.B. House, Goregaon (E), Mumbai-63",
      services: [
        "Construction of 'ORCHID STAR' IT Building",
        "Location: Sayani Road, Elphinstone Mill Chawl",
        "Registration: 58 of DCR-1991",
        "Area: 45,000 Sq.Ft.",
        "Cost: ₹60 Cr",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      name: "Sadguru Brothers Developers Pvt. Ltd",
      subtitle: "Vile Parle (E), Mumbai-400057",
      services: [
        "Plinth Completion Certificate for Survey No. 424/1",
        "Location: Village Navghar, Thane",
        "Area: 75,000 Sq.Ft.",
        "Cost: ₹92 Cr",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      name: "Balaji Infrastructure",
      subtitle: "Borivali (W), Mumbai",
      services: [
        "Re-development of CTS No. 18",
        "Under CE/A-5179/BPWS/AR",
        "Area: 12,000 Sq.Ft.",
        "Cost: ₹12.6 Cr",
      ],
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=1200&q=80",
    },
    ...firebaseProjects.filter((p) => p.category === "completed"),
  ];

  const consultationProjects = [
    {
      id: 1,
      name: "Turf Estate J.V. (D.B. Realty Venture)",
      subtitle: "D.B. House, Gen. A. K. Vaidya Marg, Goregaon (E), Mumbai-63",
      services: [
        "Proposed Development under Urban Renewal Scheme as per modified DC Regulation 33(9) and 33(24)",
        "Property: CS No 67, 2/65, 3/65, 66 and 1A/66 of Lower Parel Division",
        "Location: Dr E Moses Road, Worli, Mahalaxmi, Mumbai 400018",
        "Total Construction Area: 13,60,000 Sq.Ft.",
      ],
      image:
        "https://images.unsplash.com/photo-1625594092263-313a44f74408?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      name: "Bombay Real Estate Development Company",
      subtitle: "Norshiwan Mansion, Henry Road, Colaba, Mumbai - 400 001",
      services: [
        "Consultation for C.T.S. No. 852/B at Kandivali (E)",
        "Approval coordination with municipal authorities",
        "DC Regulation 1991 compliance advisory",
      ],
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      name: "Marine Drive Hospitality & Realty Pvt. Ltd. (D.B. Realty Venture)",
      subtitle: "D.B. House, Gen. A. K. Vaidya Marg, Goregaon (E), Mumbai-63",
      services: [
        "Redevelopment consultation for CS No. 2193 of Bhuleshwar Division",
        "Location: Junction of Baba Saheb Jaykar Marg and Maharshi Karve Road",
        "DC Regulation 33(7) compliance",
        "Construction Area: 3,90,000 Sq.Ft.",
      ],
      image:
        "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      name: "Naman Developers",
      subtitle:
        "1-2, Shivram Sadan Bldg., V.S. Marg, Prabhadevi, Mumbai: 400 025",
      services: [
        "Redevelopment consultation for CS No. 83/10 Matunga division",
        "Location: Hindu Colony Road No. 2, Dadar (East)",
        "File No. CHE/CTY/2646 /FN/337 (NEW)",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 5,
      name: "M/s. Shraddha Enterprises",
      subtitle: "12/53, Nehru Road, Santacruz (E.), Mumbai 400 055",
      services: [
        "Redevelopment consultation for C.T.S. No. 521",
        "Location: Gopi Tank road, Mahim (W)",
        "DC Regulation 33(7) compliance",
        "Construction Area: 19,000 Sq.Ft.",
      ],
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 6,
      name: "Jayant Sirsat",
      subtitle:
        "Gr. Fl., Welspun House, Kamala City, Senapati Bapat Marg, Lower Parel (W), Mumbai - 400 013",
      services: [
        "Redevelopment consultation for Plot No. 126 Shivaji Park Estate",
        "Location: M.B. Raut Marg, Dadar (W)",
        "G/N Ward compliance advisory",
      ],
      image:
        "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 7,
      name: "M/s. Nishuvi Corporation",
      subtitle: "Nishvi, 4th Floor, 75, Dr. A. B. Road, Worli, Mumbai-400018",
      services: [
        "Redevelopment consultation for CS No. 1/47, 2/47, 117-121",
        "Location: 75 Annie Besant Road, Worli",
        "DC Regulation 33(7) compliance",
        "Construction Area: 10,30,000 Sq.Ft.",
      ],
      image:
        "https://images.unsplash.com/photo-1628746404106-4d3843b231b3?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 8,
      name: "M/s. Om Sahil Solitare",
      subtitle:
        "142, Atianta Building, 14th floor, Nariman Point, Mumbai - 400021",
      services: [
        "Redevelopment of 110 Municipal tenements at D.G. Mahajani Path",
        "DC Regulation 33(9) compliance",
        "Location: Sewree (W), Mumbai - 400 015",
        "Construction Area: 10,10,000 Sq.Ft.",
      ],
      image:
        "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 9,
      name: "Smt. Jyoti Pednekar & Smt. Lata Kini",
      subtitle:
        "Flat No.11 New Dinkar CHSL, Bhagoji Keer Marg, Near Paradise Cinema, Mahim (West), Mumbai-400 016",
      services: [
        "Redevelopment consultation for FP No. 816, TPS-III",
        "Location: Mori Road, Mahim",
        "DC Regulation 30(A) compliance",
      ],
      image:
        "https://images.unsplash.com/photo-1625594092263-313a44f74408?auto=format&fit=crop&w=1200&q=80",
    },

    ...firebaseProjects.filter((p) => p.category === "consultation"),
  ];

  return {
    currentProjects,
    completedProjects,
    consultationProjects,
  };
};
