export const courses = [
  {
    "streamId": "science",
    "stream": "Science",
    "icon": "🔬",
    "description": "For students who studied Physics, Chemistry, Biology or Mathematics in Class 11–12.",
    "backgrounds": ["PCM", "PCB", "PCMB"],
    "levels": [
      {
        "level": "Undergraduate (UG)",
        "duration_note": "3–5 years depending on course",
        "categories": [
          {
            "category": "Engineering & Technology",
            "courses": [
              { "name": "B.Tech / B.E.", "fullForm": "Bachelor of Technology / Bachelor of Engineering", "duration": "4 years", "specializations": ["Computer Science & Engineering", "Information Technology", "Artificial Intelligence & ML", "Data Science", "Electronics & Communication", "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering", "Aerospace Engineering", "Biotechnology Engineering", "Robotics & Automation"], "entranceExams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "SRMJEEE", "MHT-CET"], "topColleges": ["IITs", "NITs", "BITS Pilani", "VIT", "SRM", "IIIT Hyderabad"], "careerOptions": ["Software Engineer", "Data Engineer", "Systems Architect", "Robotics Engineer", "Civil Engineer"], "avgStartingSalary": "₹4–25 LPA" },
              { "name": "B.Arch", "fullForm": "Bachelor of Architecture", "duration": "5 years", "specializations": ["Urban Design", "Interior Architecture", "Landscape Architecture"], "entranceExams": ["NATA", "JEE Paper 2"], "topColleges": ["IIT Roorkee", "SPA Delhi", "CEPT Ahmedabad", "NIT Trichy"], "careerOptions": ["Architect", "Urban Planner", "Interior Designer"], "avgStartingSalary": "₹3–8 LPA" },
              { "name": "B.Tech Lateral Entry", "fullForm": "Lateral Entry into B.Tech (after Diploma)", "duration": "3 years", "specializations": ["All B.Tech branches"], "entranceExams": ["State-level Lateral Entry Exams"], "topColleges": ["NITs", "State Engineering Colleges"], "careerOptions": ["Same as B.Tech"], "avgStartingSalary": "₹3–8 LPA" }
            ]
          },
          {
            "category": "Pure Sciences",
            "courses": [
              { "name": "B.Sc.", "fullForm": "Bachelor of Science", "duration": "3 years", "specializations": ["Physics", "Chemistry", "Mathematics", "Biology", "Zoology", "Botany", "Microbiology", "Biochemistry", "Environmental Science", "Statistics", "Computer Science", "Electronics", "Forensic Science"], "entranceExams": ["CUET", "University-specific exams"], "topColleges": ["St. Stephen's Delhi", "Presidency Kolkata", "Christ University", "Miranda House", "Fergusson College"], "careerOptions": ["Research Scientist", "Lab Technician", "Science Teacher", "Data Analyst", "UPSC Civil Services"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "B.Sc. (Hons.)", "fullForm": "Bachelor of Science Honours", "duration": "3–4 years", "specializations": ["Physics", "Chemistry", "Mathematics", "Biology", "Statistics"], "entranceExams": ["CUET", "University entrance exams"], "topColleges": ["IISc", "Delhi University colleges", "Jadavpur University"], "careerOptions": ["Research Scientist", "Academic", "Data Scientist", "Civil Services"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "BS (Research)", "fullForm": "Bachelor of Science Research", "duration": "4 years", "specializations": ["Physics", "Chemistry", "Biology", "Mathematics", "Earth Sciences", "Humanities & Social Sciences (interdisciplinary)"], "entranceExams": ["IISc Entrance", "IISER Aptitude Test (IAT)", "KVPY (discontinued — now INSPIRE)"], "topColleges": ["IISc Bangalore", "IISER Pune", "IISER Kolkata", "IISER Mohali", "IISER Bhopal", "IISER Tirupati"], "careerOptions": ["Research Scientist", "PhD Scholar", "Academia", "R&D in Industry"], "avgStartingSalary": "₹4–10 LPA" },
              { "name": "B.Sc. Nautical Science", "fullForm": "Bachelor of Science in Nautical Science", "duration": "3 years", "specializations": ["Marine Navigation", "Ship Operations"], "entranceExams": ["IMU CET"], "topColleges": ["IMU Chennai", "MERI Mumbai", "HIMT Chennai"], "careerOptions": ["Merchant Navy Officer", "Marine Superintendent"], "avgStartingSalary": "₹6–15 LPA" }
            ]
          },
          {
            "category": "Medical & Health Sciences",
            "courses": [
              { "name": "MBBS", "fullForm": "Bachelor of Medicine and Bachelor of Surgery", "duration": "5.5 years (incl. 1 yr internship)", "specializations": ["General Medicine (base degree — specialization at PG level)"], "entranceExams": ["NEET-UG"], "topColleges": ["AIIMS (all campuses)", "CMC Vellore", "JIPMER", "Maulana Azad Medical College", "Grant Medical College"], "careerOptions": ["Doctor (General Physician)", "Surgeon (post-PG)", "Medical Researcher", "Healthcare Entrepreneur"], "avgStartingSalary": "₹6–15 LPA" },
              { "name": "BDS", "fullForm": "Bachelor of Dental Surgery", "duration": "5 years (incl. 1 yr internship)", "specializations": ["General Dentistry"], "entranceExams": ["NEET-UG"], "topColleges": ["Maulana Azad Dental College", "Manipal College of Dental Sciences", "SRM Dental College"], "careerOptions": ["Dentist", "Oral Surgeon", "Orthodontist (post-PG)"], "avgStartingSalary": "₹4–10 LPA" },
              { "name": "BAMS", "fullForm": "Bachelor of Ayurvedic Medicine and Surgery", "duration": "5.5 years", "specializations": ["Ayurveda"], "entranceExams": ["NEET-UG"], "topColleges": ["BHU Varanasi", "Gujarat Ayurved University", "NIA Jaipur"], "careerOptions": ["Ayurvedic Physician", "Wellness Consultant", "Researcher"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "BHMS", "fullForm": "Bachelor of Homeopathic Medicine and Surgery", "duration": "5.5 years", "specializations": ["Homeopathy"], "entranceExams": ["NEET-UG"], "topColleges": ["National Institute of Homoeopathy Kolkata", "Nehru Homeopathic Medical College Delhi"], "careerOptions": ["Homeopathic Physician", "Wellness Practitioner"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "BUMS", "fullForm": "Bachelor of Unani Medicine and Surgery", "duration": "5.5 years", "specializations": ["Unani Medicine"], "entranceExams": ["NEET-UG"], "topColleges": ["Jamia Hamdard Delhi", "AMU Aligarh"], "careerOptions": ["Unani Physician"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "B.Pharm", "fullForm": "Bachelor of Pharmacy", "duration": "4 years", "specializations": ["Pharmaceutical Sciences", "Pharmacology", "Drug Regulatory Affairs"], "entranceExams": ["BITSAT", "WBJEE", "State Pharmacy Entrance Exams"], "topColleges": ["JSS Mysore", "Manipal", "Amity University", "ICT Mumbai"], "careerOptions": ["Pharmacist", "Drug Inspector", "Medical Representative", "R&D Scientist"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "B.Sc. Nursing", "fullForm": "Bachelor of Science in Nursing", "duration": "4 years", "specializations": ["General Nursing & Midwifery"], "entranceExams": ["AIIMS Nursing", "JIPMER Nursing", "NEET (some states)"], "topColleges": ["AIIMS Nursing Colleges", "CMC Vellore", "Manipal College of Nursing"], "careerOptions": ["Staff Nurse", "ICU Nurse", "Nursing Educator", "Healthcare Administrator"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "BPT", "fullForm": "Bachelor of Physiotherapy", "duration": "4.5 years", "specializations": ["Orthopaedic Physiotherapy", "Neurological Physiotherapy", "Sports Physiotherapy"], "entranceExams": ["CUET", "State-level exams"], "topColleges": ["CMC Vellore", "AIIMS", "Manipal", "MAMC Delhi"], "careerOptions": ["Physiotherapist", "Sports Therapist", "Rehabilitation Specialist"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "BOT", "fullForm": "Bachelor of Occupational Therapy", "duration": "4.5 years", "specializations": ["Paediatric OT", "Mental Health OT"], "entranceExams": ["State-level exams"], "topColleges": ["AIIMS", "CMC Vellore", "Manipal"], "careerOptions": ["Occupational Therapist", "Rehabilitation Counsellor"], "avgStartingSalary": "₹3–5 LPA" },
              { "name": "BMLT", "fullForm": "Bachelor of Medical Laboratory Technology", "duration": "3 years", "specializations": ["Pathology", "Microbiology", "Haematology"], "entranceExams": ["State-level exams"], "topColleges": ["AIIMS", "JIPMER", "CMC Vellore"], "careerOptions": ["Medical Lab Technician", "Lab Supervisor"], "avgStartingSalary": "₹2.5–4 LPA" },
              { "name": "BVSc & AH", "fullForm": "Bachelor of Veterinary Science & Animal Husbandry", "duration": "5.5 years", "specializations": ["Veterinary Medicine", "Animal Nutrition", "Animal Reproduction"], "entranceExams": ["NEET-UG (some states)", "State Vet Entrance Exams"], "topColleges": ["IVRI Bareilly", "GADVASU Ludhiana", "MAFSU Nagpur"], "careerOptions": ["Veterinarian", "Animal Nutrition Scientist", "Government Vet Officer"], "avgStartingSalary": "₹3–6 LPA" }
            ]
          },
          {
            "category": "Agriculture & Allied Sciences",
            "courses": [
              { "name": "B.Sc. Agriculture", "fullForm": "Bachelor of Science in Agriculture", "duration": "4 years", "specializations": ["Agronomy", "Horticulture", "Soil Science", "Plant Pathology", "Agricultural Economics"], "entranceExams": ["ICAR AIEEA", "State Agriculture Entrance Exams"], "topColleges": ["IARI New Delhi", "BHU Varanasi", "PAU Ludhiana", "TNAU Coimbatore"], "careerOptions": ["Agricultural Officer", "Agronomist", "Farm Manager", "UPSC/State PSC"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "B.Sc. Forestry", "fullForm": "Bachelor of Science in Forestry", "duration": "4 years", "specializations": ["Forest Management", "Wildlife Conservation", "Agroforestry"], "entranceExams": ["ICAR AIEEA", "State Forestry Exams"], "topColleges": ["FRI Dehradun", "BSKKV Maharashtra"], "careerOptions": ["Forest Officer (IFS)", "Wildlife Manager", "Environmental Consultant"], "avgStartingSalary": "₹3–5 LPA" },
              { "name": "B.F.Sc.", "fullForm": "Bachelor of Fisheries Science", "duration": "4 years", "specializations": ["Aquaculture", "Fish Processing", "Marine Biology"], "entranceExams": ["ICAR AIEEA"], "topColleges": ["CIFE Mumbai", "KVAFSU Karnataka"], "careerOptions": ["Fisheries Officer", "Aquaculture Manager"], "avgStartingSalary": "₹3–5 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Postgraduate (PG)",
        "duration_note": "2 years unless specified",
        "categories": [
          {
            "category": "Engineering & Technology",
            "courses": [
              { "name": "M.Tech / M.E.", "fullForm": "Master of Technology / Master of Engineering", "duration": "2 years", "specializations": ["AI & ML", "Data Science", "VLSI Design", "Structural Engineering", "Power Systems", "Computer Science", "Cyber Security", "Robotics"], "entranceExams": ["GATE"], "topColleges": ["IITs", "NITs", "IISC", "BITS Pilani"], "careerOptions": ["Senior Engineer", "Research Scientist", "Technical Lead", "Academic Faculty"], "avgStartingSalary": "₹6–20 LPA" },
              { "name": "M.Arch", "fullForm": "Master of Architecture", "duration": "2 years", "specializations": ["Urban Design", "Sustainable Architecture", "Heritage Conservation"], "entranceExams": ["GATE (AR)", "CEED", "University-specific"], "topColleges": ["IIT Roorkee", "SPA Delhi", "CEPT"], "careerOptions": ["Senior Architect", "Urban Planner", "Heritage Conservationist"], "avgStartingSalary": "₹5–12 LPA" }
            ]
          },
          {
            "category": "Pure Sciences",
            "courses": [
              { "name": "M.Sc.", "fullForm": "Master of Science", "duration": "2 years", "specializations": ["Physics", "Chemistry", "Mathematics", "Biology", "Biochemistry", "Microbiology", "Environmental Science", "Bioinformatics", "Statistics", "Computer Science", "Electronics", "Forensic Science", "Geology", "Oceanography"], "entranceExams": ["IIT JAM", "CUET PG", "University-specific"], "topColleges": ["IITs", "IISc", "IISERs", "BHU", "JNU", "HCU"], "careerOptions": ["Research Scientist", "Data Scientist", "Academic", "DRDO/ISRO Scientist", "Civil Services"], "avgStartingSalary": "₹4–12 LPA" },
              { "name": "M.Sc. Tech", "fullForm": "Master of Science Technology", "duration": "2 years", "specializations": ["Applied Geology", "Applied Geophysics"], "entranceExams": ["IIT JAM", "GATE"], "topColleges": ["IITs", "ISM Dhanbad"], "careerOptions": ["Geologist", "Oil & Gas Industry", "Mining Engineer"], "avgStartingSalary": "₹5–10 LPA" }
            ]
          },
          {
            "category": "Medical & Health Sciences",
            "courses": [
              { "name": "MD / MS", "fullForm": "Doctor of Medicine / Master of Surgery", "duration": "3 years", "specializations": ["General Medicine", "Paediatrics", "Psychiatry", "Dermatology", "Radiology", "General Surgery", "Orthopaedics", "Ophthalmology", "ENT", "Obstetrics & Gynaecology", "Anaesthesiology"], "entranceExams": ["NEET-PG", "INI-CET"], "topColleges": ["AIIMS Delhi", "PGI Chandigarh", "CMC Vellore", "JIPMER"], "careerOptions": ["Specialist Doctor", "Surgeon", "Hospital Consultant"], "avgStartingSalary": "₹12–30 LPA" },
              { "name": "M.Pharm", "fullForm": "Master of Pharmacy", "duration": "2 years", "specializations": ["Pharmacology", "Pharmaceutics", "Pharmaceutical Chemistry", "Clinical Pharmacy"], "entranceExams": ["GPAT", "University-specific"], "topColleges": ["Jamia Hamdard", "JSS Mysore", "Manipal", "ICT Mumbai"], "careerOptions": ["R&D Scientist", "Regulatory Affairs Manager", "Quality Assurance Manager"], "avgStartingSalary": "₹4–10 LPA" },
              { "name": "M.Sc. Nursing", "fullForm": "Master of Science in Nursing", "duration": "2 years", "specializations": ["Medical-Surgical Nursing", "Community Health Nursing", "Paediatric Nursing", "Psychiatric Nursing"], "entranceExams": ["University-specific"], "topColleges": ["AIIMS", "CMC Vellore", "Manipal"], "careerOptions": ["Nursing Educator", "Clinical Specialist", "Nursing Superintendent"], "avgStartingSalary": "₹4–8 LPA" },
              { "name": "MPT", "fullForm": "Master of Physiotherapy", "duration": "2 years", "specializations": ["Sports Physiotherapy", "Neurological Physiotherapy", "Orthopaedic Physiotherapy", "Paediatric Physiotherapy"], "entranceExams": ["University-specific"], "topColleges": ["CMC Vellore", "AIIMS", "Manipal"], "careerOptions": ["Senior Physiotherapist", "Sports Therapist", "Researcher"], "avgStartingSalary": "₹4–8 LPA" },
              { "name": "MHA", "fullForm": "Master of Hospital Administration", "duration": "2 years", "specializations": ["Hospital Management", "Healthcare Quality", "Health Informatics"], "entranceExams": ["CUET PG", "University-specific"], "topColleges": ["AIIMS", "TISS Mumbai", "Symbiosis Pune"], "careerOptions": ["Hospital Administrator", "Healthcare Consultant", "Quality Manager"], "avgStartingSalary": "₹5–12 LPA" }
            ]
          },
          {
            "category": "Agriculture",
            "courses": [
              { "name": "M.Sc. Agriculture", "fullForm": "Master of Science in Agriculture", "duration": "2 years", "specializations": ["Agronomy", "Plant Breeding & Genetics", "Soil Science", "Agricultural Entomology", "Horticulture", "Agricultural Economics"], "entranceExams": ["ICAR AIEEA PG", "University-specific"], "topColleges": ["IARI Delhi", "PAU Ludhiana", "TNAU", "BHU"], "careerOptions": ["Agricultural Scientist", "Government Agricultural Officer", "Agri-Business Manager"], "avgStartingSalary": "₹4–8 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Doctorate (PhD)",
        "duration_note": "3–6 years",
        "categories": [
          {
            "category": "All Science & Technology Domains",
            "courses": [
              { "name": "Ph.D.", "fullForm": "Doctor of Philosophy", "duration": "3–6 years", "specializations": ["Physics", "Chemistry", "Biology", "Mathematics", "Computer Science", "Engineering (all branches)", "Agricultural Sciences", "Environmental Sciences", "Medical Sciences", "Pharmaceutical Sciences", "Data Science & AI", "Biotechnology", "Neuroscience"], "entranceExams": ["CSIR-NET", "UGC-NET", "GATE", "ICMR JRF", "DBT JRF", "JEST", "JGEEBILS", "University-specific"], "topColleges": ["IITs", "IISc", "IISERs", "TIFR", "IARI", "NCBS Bangalore", "IGIB Delhi"], "careerOptions": ["Research Scientist", "University Professor", "Industry R&D Head", "DRDO/ISRO/BARC Scientist", "Postdoctoral Researcher"], "avgStartingSalary": "₹6–20 LPA (academia) / ₹10–30 LPA (industry)" },
              { "name": "D.Sc.", "fullForm": "Doctor of Science", "duration": "Varies (typically post-PhD)", "specializations": ["Advanced research across all science disciplines"], "entranceExams": ["Research submission & evaluation"], "topColleges": ["IITs", "IISc", "Central Universities"], "careerOptions": ["Eminent Researcher", "Distinguished Professor", "National Fellow"], "avgStartingSalary": "Senior academic / research positions" }
            ]
          }
        ]
      }
    ]
  },

  {
    "streamId": "commerce",
    "stream": "Commerce",
    "icon": "📊",
    "description": "For students who studied Accountancy, Business Studies, Economics in Class 11–12.",
    "backgrounds": ["Commerce with Maths", "Commerce without Maths"],
    "levels": [
      {
        "level": "Undergraduate (UG)",
        "duration_note": "3–5 years",
        "categories": [
          {
            "category": "Business & Management",
            "courses": [
              { "name": "BBA", "fullForm": "Bachelor of Business Administration", "duration": "3 years", "specializations": ["Marketing", "Finance", "Human Resource Management", "International Business", "Entrepreneurship", "Supply Chain Management", "Retail Management", "Banking & Insurance"], "entranceExams": ["IPMAT (IIM Indore/Rohtak)", "SET", "UGAT", "University-specific"], "topColleges": ["IIM Indore (IPM)", "IIM Rohtak (IPM)", "Christ University", "Symbiosis", "Amity University", "NMIMS Mumbai"], "careerOptions": ["Marketing Executive", "HR Executive", "Business Analyst", "Entrepreneur", "Sales Manager"], "avgStartingSalary": "₹3–8 LPA" },
              { "name": "BMS", "fullForm": "Bachelor of Management Studies", "duration": "3 years", "specializations": ["Finance", "Marketing", "Operations", "HR"], "entranceExams": ["Mumbai University entrance", "University-specific"], "topColleges": ["HR College Mumbai", "K.J. Somaiya Mumbai", "Jai Hind College Mumbai"], "careerOptions": ["Business Analyst", "Marketing Manager", "Operations Executive"], "avgStartingSalary": "₹3–7 LPA" },
              { "name": "BHM", "fullForm": "Bachelor of Hotel Management", "duration": "4 years", "specializations": ["Food & Beverage Management", "Housekeeping", "Front Office", "Event Management"], "entranceExams": ["NCHMCT JEE", "IHM entrance exams"], "topColleges": ["IHM Mumbai", "IHM Delhi", "IHM Chennai", "Welcomgroup Graduate School"], "careerOptions": ["Hotel Manager", "F&B Manager", "Event Planner", "Travel Consultant"], "avgStartingSalary": "₹3–7 LPA" }
            ]
          },
          {
            "category": "Finance & Accounting",
            "courses": [
              { "name": "B.Com", "fullForm": "Bachelor of Commerce", "duration": "3 years", "specializations": ["Accounting & Finance", "Taxation", "Banking & Insurance", "Computer Applications", "E-Commerce", "Financial Markets"], "entranceExams": ["CUET", "DU JAT", "University-specific"], "topColleges": ["SRCC Delhi", "Lady Shri Ram College", "St. Xavier's Mumbai", "Christ University", "Presidency Kolkata"], "careerOptions": ["Accountant", "Tax Consultant", "Financial Analyst", "Banking Professional", "CA (after clearing ICAI exams)"], "avgStartingSalary": "₹3–6 LPA" },
              { "name": "B.Com (Hons.)", "fullForm": "Bachelor of Commerce Honours", "duration": "3–4 years", "specializations": ["Accounting", "Finance", "Taxation", "Auditing"], "entranceExams": ["CUET", "University-specific"], "topColleges": ["SRCC Delhi", "St. Xavier's Kolkata", "Loyola Chennai"], "careerOptions": ["Chartered Accountant (CA)", "Financial Analyst", "Investment Banker", "Auditor"], "avgStartingSalary": "₹4–10 LPA" },
              { "name": "CA", "fullForm": "Chartered Accountancy", "duration": "3–5 years (concurrent with graduation)", "specializations": ["Auditing & Assurance", "Taxation (Direct & Indirect)", "Financial Reporting", "Corporate Law", "Management Accounting"], "entranceExams": ["ICAI Foundation → Intermediate → Final"], "topColleges": ["ICAI (self-study + articleship)"], "careerOptions": ["Chartered Accountant", "Tax Advisor", "CFO", "Audit Partner", "Financial Controller"], "avgStartingSalary": "₹7–20 LPA" },
              { "name": "CS", "fullForm": "Company Secretary", "duration": "3–4 years (concurrent with graduation)", "specializations": ["Corporate Governance", "Securities Law", "SEBI Compliance", "Company Law"], "entranceExams": ["ICSI Foundation → Executive → Professional"], "topColleges": ["ICSI (self-study)"], "careerOptions": ["Company Secretary", "Legal Compliance Officer", "Corporate Governance Advisor"], "avgStartingSalary": "₹5–12 LPA" },
              { "name": "CMA", "fullForm": "Cost & Management Accountancy", "duration": "3–4 years (concurrent with graduation)", "specializations": ["Cost Accounting", "Management Accounting", "Financial Management"], "entranceExams": ["ICMAI Foundation → Intermediate → Final"], "topColleges": ["ICMAI (self-study)"], "careerOptions": ["Cost Accountant", "Financial Controller", "Management Consultant"], "avgStartingSalary": "₹5–12 LPA" },
              { "name": "B.Com LLB", "fullForm": "Bachelor of Commerce + Bachelor of Laws (Integrated)", "duration": "5 years", "specializations": ["Corporate Law", "Tax Law", "Commercial Law", "Securities Law"], "entranceExams": ["CLAT", "AILET", "LSAT India"], "topColleges": ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "Symbiosis Law School"], "careerOptions": ["Corporate Lawyer", "Tax Lawyer", "Legal Advisor", "Compliance Officer"], "avgStartingSalary": "₹5–15 LPA" }
            ]
          },
          {
            "category": "Economics",
            "courses": [
              { "name": "B.A. Economics (Hons.)", "fullForm": "Bachelor of Arts in Economics Honours", "duration": "3–4 years", "specializations": ["Econometrics", "Development Economics", "International Economics", "Financial Economics", "Public Policy"], "entranceExams": ["CUET", "University-specific"], "topColleges": ["Delhi School of Economics", "St. Stephen's College", "Presidency Kolkata", "Christ University", "JNU"], "careerOptions": ["Economist", "Policy Analyst", "Financial Analyst", "IAS/IES Officer", "Data Analyst"], "avgStartingSalary": "₹4–10 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Postgraduate (PG)",
        "duration_note": "1–2 years",
        "categories": [
          {
            "category": "Business & Management",
            "courses": [
              { "name": "MBA", "fullForm": "Master of Business Administration", "duration": "2 years", "specializations": ["Finance", "Marketing", "Human Resources", "Operations & Supply Chain", "Business Analytics", "International Business", "Entrepreneurship", "Healthcare Management", "Rural Management", "Agri-Business Management", "IT Management", "Luxury Brand Management"], "entranceExams": ["CAT", "XAT", "GMAT", "MAT", "CMAT", "NMAT", "SNAP", "IIFT"], "topColleges": ["IIM Ahmedabad", "IIM Bangalore", "IIM Calcutta", "IIM Lucknow", "IIM Kozhikode", "XLRI Jamshedpur", "FMS Delhi", "MDI Gurgaon", "SPJIMR Mumbai", "ISB Hyderabad"], "careerOptions": ["Management Consultant", "Investment Banker", "Product Manager", "Marketing Head", "CFO", "Entrepreneur"], "avgStartingSalary": "₹8–35 LPA" },
              { "name": "PGDM", "fullForm": "Post Graduate Diploma in Management", "duration": "2 years", "specializations": ["Same as MBA specializations"], "entranceExams": ["CAT", "XAT", "GMAT"], "topColleges": ["IIMs", "XLRI", "SPJIMR", "IMT Ghaziabad", "Great Lakes Chennai"], "careerOptions": ["Same as MBA"], "avgStartingSalary": "₹8–30 LPA" },
              { "name": "MBA (Executive)", "fullForm": "Executive MBA", "duration": "1–2 years", "specializations": ["General Management", "Finance", "Strategy", "Digital Business"], "entranceExams": ["GMAT", "CAT", "University-specific (work experience required)"], "topColleges": ["IIM Ahmedabad (PGPX)", "IIM Bangalore (EPGP)", "ISB Hyderabad", "XLRI"], "careerOptions": ["Senior Manager", "VP", "CXO", "Entrepreneur"], "avgStartingSalary": "₹15–50 LPA" }
            ]
          },
          {
            "category": "Finance & Accounting",
            "courses": [
              { "name": "M.Com", "fullForm": "Master of Commerce", "duration": "2 years", "specializations": ["Accounting & Finance", "Taxation", "Banking", "Business Studies", "E-Commerce"], "entranceExams": ["CUET PG", "University-specific"], "topColleges": ["Delhi University", "Bombay University", "BHU", "Loyola Chennai", "Christ University"], "careerOptions": ["Accountant", "Tax Consultant", "Finance Manager", "Lecturer", "CA (after clearing exams)"], "avgStartingSalary": "₹3–8 LPA" },
              { "name": "CFA", "fullForm": "Chartered Financial Analyst", "duration": "2–4 years (3 levels, self-paced)", "specializations": ["Investment Analysis", "Portfolio Management", "Financial Modelling", "Equity Research"], "entranceExams": ["CFA Institute Exams (Level I, II, III)"], "topColleges": ["CFA Institute (global certification)"], "careerOptions": ["Portfolio Manager", "Equity Research Analyst", "Investment Banker", "Risk Manager"], "avgStartingSalary": "₹8–25 LPA" },
              { "name": "FRM", "fullForm": "Financial Risk Manager", "duration": "1–2 years (self-paced)", "specializations": ["Market Risk", "Credit Risk", "Operational Risk"], "entranceExams": ["GARP FRM Part I & II"], "topColleges": ["GARP (global certification)"], "careerOptions": ["Risk Analyst", "Risk Manager", "Chief Risk Officer"], "avgStartingSalary": "₹7–20 LPA" }
            ]
          },
          {
            "category": "Economics & Policy",
            "courses": [
              { "name": "M.A. Economics", "fullForm": "Master of Arts in Economics", "duration": "2 years", "specializations": ["Development Economics", "Econometrics", "International Trade", "Public Policy", "Environmental Economics"], "entranceExams": ["DSE Entrance", "JNU Entrance", "CUET PG", "HCU Entrance"], "topColleges": ["Delhi School of Economics", "JNU", "IGIDR Mumbai", "Gokhale Institute Pune", "ISI Kolkata"], "careerOptions": ["Economist", "Policy Researcher", "IES Officer", "RBI Grade B Officer", "Data Analyst"], "avgStartingSalary": "₹5–15 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Doctorate (PhD)",
        "duration_note": "3–5 years",
        "categories": [
          {
            "category": "Commerce, Economics & Management",
            "courses": [
              { "name": "Ph.D.", "fullForm": "Doctor of Philosophy", "duration": "3–5 years", "specializations": ["Accounting & Finance", "Marketing Management", "Human Resources", "International Business", "Economics", "Entrepreneurship", "Operations Management", "Business Analytics"], "entranceExams": ["UGC-NET (Commerce/Management)", "CAT + PI (IIMs)", "University-specific DRC exams"], "topColleges": ["IIMs", "FMS Delhi", "XLRI", "IGIDR", "JNU", "DSE"], "careerOptions": ["Professor / Dean", "Senior Research Fellow", "Policy Advisor", "Think-tank Researcher", "Management Consultant"], "avgStartingSalary": "₹8–20 LPA (academia) / ₹15–40 LPA (industry)" }
            ]
          }
        ]
      }
    ]
  },

  {
    "streamId": "arts_humanities",
    "stream": "Arts & Humanities",
    "icon": "🎨",
    "description": "For students from Humanities stream — History, Political Science, Sociology, Languages, Psychology, Fine Arts etc.",
    "backgrounds": ["Arts / Humanities"],
    "levels": [
      {
        "level": "Undergraduate (UG)",
        "duration_note": "3–5 years",
        "categories": [
          {
            "category": "Liberal Arts & Social Sciences",
            "courses": [
              { "name": "B.A.", "fullForm": "Bachelor of Arts", "duration": "3 years", "specializations": ["History", "Political Science", "Sociology", "Geography", "Philosophy", "Psychology", "Hindi", "English Literature", "Sanskrit", "Urdu", "Economics", "Public Administration", "Anthropology"], "entranceExams": ["CUET", "University-specific"], "topColleges": ["St. Stephen's Delhi", "Miranda House", "Lady Shri Ram College", "Presidency Kolkata", "Loyola Chennai"], "careerOptions": ["Civil Services (IAS/IPS/IFS)", "Journalist", "Social Worker", "Policy Analyst", "Teacher / Professor", "Content Writer"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "B.A. (Hons.)", "fullForm": "Bachelor of Arts Honours", "duration": "3–4 years", "specializations": ["English", "History", "Political Science", "Economics", "Sociology", "Psychology", "Philosophy"], "entranceExams": ["CUET", "University-specific"], "topColleges": ["St. Stephen's", "JMI", "DU colleges", "BHU", "JNU (integrated)"], "careerOptions": ["Civil Services", "Academic Researcher", "Journalist", "Diplomat (IFS)", "Policy Analyst"], "avgStartingSalary": "₹3–7 LPA" },
              { "name": "B.S.W.", "fullForm": "Bachelor of Social Work", "duration": "3 years", "specializations": ["Community Development", "Child Welfare", "Rural Development", "Medical Social Work"], "entranceExams": ["TISS entrance", "University-specific"], "topColleges": ["TISS Mumbai", "Delhi University", "Madras School of Social Work"], "careerOptions": ["Social Worker", "NGO Programme Manager", "Counsellor", "Government Welfare Officer"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "B.A. LLB", "fullForm": "Bachelor of Arts + Law (Integrated)", "duration": "5 years", "specializations": ["Constitutional Law", "Criminal Law", "Family Law", "International Law", "Human Rights Law"], "entranceExams": ["CLAT", "AILET", "LSAT India"], "topColleges": ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "NLU Jodhpur", "NLU Kolkata"], "careerOptions": ["Advocate", "Judge (through judicial exams)", "Legal Advisor", "Human Rights Lawyer", "Government Counsel"], "avgStartingSalary": "₹4–12 LPA" }
            ]
          },
          {
            "category": "Media, Communication & Design",
            "courses": [
              { "name": "B.J.M.C. / B.A. Journalism", "fullForm": "Bachelor of Journalism & Mass Communication", "duration": "3 years", "specializations": ["Print Journalism", "Broadcast Journalism", "Digital Media", "Public Relations", "Advertising"], "entranceExams": ["IIMC entrance", "ACJ entrance", "CUET", "University-specific"], "topColleges": ["IIMC New Delhi", "ACJ Chennai", "Jamia Millia Islamia", "Symbiosis Pune"], "careerOptions": ["Journalist", "News Anchor", "PR Manager", "Content Strategist", "Media Planner"], "avgStartingSalary": "₹3–8 LPA" },
              { "name": "BFA", "fullForm": "Bachelor of Fine Arts", "duration": "4 years", "specializations": ["Painting", "Sculpture", "Printmaking", "Applied Arts", "Visual Communication"], "entranceExams": ["NID Entrance", "CEED", "University-specific"], "topColleges": ["MS University Baroda", "BHU", "JMI", "College of Art Delhi"], "careerOptions": ["Artist", "Art Director", "Graphic Designer", "Art Educator", "Gallery Curator"], "avgStartingSalary": "₹3–7 LPA" },
              { "name": "B.Des.", "fullForm": "Bachelor of Design", "duration": "4 years", "specializations": ["Communication Design", "Product Design", "UI/UX Design", "Fashion Design", "Textile Design", "Jewellery Design", "Animation & Film"], "entranceExams": ["NID DAT", "UCEED", "CEED (PG)", "NIFT Entrance", "SOFT Entrance"], "topColleges": ["NID Ahmedabad", "IIT Bombay (IDC)", "IIT Delhi", "NIFT Delhi", "Srishti Manipal"], "careerOptions": ["UX Designer", "Product Designer", "Creative Director", "Brand Consultant", "Interaction Designer"], "avgStartingSalary": "₹4–12 LPA" },
              { "name": "B.F.Tech", "fullForm": "Bachelor of Fashion Technology", "duration": "4 years", "specializations": ["Apparel Production", "Textile Technology", "Fashion Merchandising", "Quality Management"], "entranceExams": ["NIFT Entrance", "Pearl Academy Entrance"], "topColleges": ["NIFT (all campuses)", "Pearl Academy", "Symbiosis Institute of Design"], "careerOptions": ["Merchandiser", "Production Manager", "Textile Technologist", "Buyer"], "avgStartingSalary": "₹3–7 LPA" }
            ]
          },
          {
            "category": "Education",
            "courses": [
              { "name": "B.Ed.", "fullForm": "Bachelor of Education", "duration": "2 years (after graduation)", "specializations": ["Primary Education", "Secondary Education — subject-specific (Science/Maths/Social Science/Languages)"], "entranceExams": ["State B.Ed. entrance exams", "CUET", "University-specific"], "topColleges": ["RIE (NCERT)", "TISS Mumbai", "Jamia Millia Islamia", "CTE Delhi"], "careerOptions": ["School Teacher (TGT/PGT)", "Educational Counsellor", "Curriculum Developer", "Education Administrator"], "avgStartingSalary": "₹3–6 LPA" }
            ]
          },
          {
            "category": "Performing Arts",
            "courses": [
              { "name": "B.A. Music / B.Music", "fullForm": "Bachelor of Music", "duration": "3–4 years", "specializations": ["Hindustani Classical", "Carnatic Music", "Western Music", "Percussion", "Vocal Music"], "entranceExams": ["University-specific auditions"], "topColleges": ["Bhatkhande Music Institute Lucknow", "Faculty of Music BHU", "Delhi University"], "careerOptions": ["Musician", "Music Teacher", "Composer", "Music Therapist", "Film Score Artist"], "avgStartingSalary": "₹2.5–8 LPA" },
              { "name": "B.A. Dance / B.Performing Arts", "fullForm": "Bachelor of Performing Arts", "duration": "3–4 years", "specializations": ["Bharatanatyam", "Kathak", "Odissi", "Contemporary Dance", "Theatre"], "entranceExams": ["University auditions"], "topColleges": ["NSD Delhi (Theatre)", "Kalakshetra Chennai", "Sangit Natak Akademi"], "careerOptions": ["Performer", "Choreographer", "Dance Teacher", "Arts Administrator"], "avgStartingSalary": "₹2.5–6 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Postgraduate (PG)",
        "duration_note": "2 years",
        "categories": [
          {
            "category": "Social Sciences & Humanities",
            "courses": [
              { "name": "M.A.", "fullForm": "Master of Arts", "duration": "2 years", "specializations": ["History", "Political Science", "Sociology", "Psychology", "Philosophy", "Economics", "English Literature", "Hindi", "Linguistics", "Geography", "Public Policy & Administration", "International Relations", "Development Studies", "Women's Studies"], "entranceExams": ["CUET PG", "JNU Entrance", "TISS-NET", "University-specific"], "topColleges": ["JNU", "BHU", "HCU", "TISS", "Jawaharlal Nehru University", "DSE", "Presidency Kolkata"], "careerOptions": ["Civil Services (IAS/IPS)", "Academic Researcher", "Policy Analyst", "NGO Programme Lead", "Journalist", "Diplomat"], "avgStartingSalary": "₹3–10 LPA" },
              { "name": "M.S.W.", "fullForm": "Master of Social Work", "duration": "2 years", "specializations": ["Community Organisation", "Medical & Psychiatric Social Work", "Human Resource Management", "Rural & Urban Development"], "entranceExams": ["TISS-NET", "University-specific"], "topColleges": ["TISS Mumbai", "Madras School of Social Work", "IGNOU", "University of Delhi"], "careerOptions": ["Social Work Manager", "NGO Director", "CSR Head", "Government Welfare Officer"], "avgStartingSalary": "₹3–8 LPA" },
              { "name": "LLM", "fullForm": "Master of Laws", "duration": "1–2 years", "specializations": ["Constitutional Law", "Corporate & Commercial Law", "Criminal Law", "International Law", "Intellectual Property Law", "Tax Law", "Environmental Law", "Human Rights"], "entranceExams": ["CLAT PG", "University-specific"], "topColleges": ["NLUs", "Faculty of Law DU", "BHU", "Symbiosis Law School"], "careerOptions": ["Senior Advocate", "Legal Academic", "Judicial Service", "International Law Practitioner"], "avgStartingSalary": "₹6–20 LPA" },
              { "name": "M.J.M.C.", "fullForm": "Master of Journalism & Mass Communication", "duration": "2 years", "specializations": ["Investigative Journalism", "Digital Media", "Broadcast Journalism", "Strategic Communication"], "entranceExams": ["IIMC entrance", "University-specific"], "topColleges": ["IIMC Delhi", "ACJ Chennai", "Jamia Millia Islamia", "Symbiosis"], "careerOptions": ["Senior Journalist", "News Editor", "Media Strategist", "Communications Manager"], "avgStartingSalary": "₹4–12 LPA" },
              { "name": "M.Ed.", "fullForm": "Master of Education", "duration": "2 years", "specializations": ["Educational Psychology", "Curriculum & Instruction", "Special Education", "Educational Technology"], "entranceExams": ["State-level exams", "University-specific"], "topColleges": ["RIE NCERT (all campuses)", "TISS", "Jamia Millia Islamia", "BHU"], "careerOptions": ["PGT Teacher", "Education Researcher", "Curriculum Developer", "Education Policy Analyst"], "avgStartingSalary": "₹4–8 LPA" }
            ]
          },
          {
            "category": "Design & Creative Arts",
            "courses": [
              { "name": "M.Des.", "fullForm": "Master of Design", "duration": "2 years", "specializations": ["Interaction Design", "Communication Design", "Industrial / Product Design", "Strategic Design", "Service Design", "Animation"], "entranceExams": ["CEED", "NID PG entrance", "UCEED (UG)", "IDC IIT Bombay"], "topColleges": ["NID Ahmedabad", "IIT Bombay IDC", "IIT Delhi", "Srishti Manipal"], "careerOptions": ["Senior UX Designer", "Design Researcher", "Creative Director", "Brand Strategist"], "avgStartingSalary": "₹6–18 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Doctorate (PhD)",
        "duration_note": "3–6 years",
        "categories": [
          {
            "category": "Humanities, Social Sciences & Law",
            "courses": [
              { "name": "Ph.D.", "fullForm": "Doctor of Philosophy", "duration": "3–6 years", "specializations": ["History", "Political Science", "Sociology", "Economics", "Psychology", "English", "Hindi", "Education", "Law", "Social Work", "International Relations", "Gender Studies", "Philosophy", "Linguistics"], "entranceExams": ["UGC-NET (respective subjects)", "JNU Entrance", "TISS PhD entrance", "University-specific"], "topColleges": ["JNU", "TISS Mumbai", "BHU", "HCU", "Presidency Kolkata", "University of Delhi", "NLUs (for law)"], "careerOptions": ["University Professor", "Policy Researcher", "IAS/IFS Officer", "Think-tank Fellow", "Author / Journalist"], "avgStartingSalary": "₹5–15 LPA (academia) / ₹10–25 LPA (policy/industry)" }
            ]
          }
        ]
      }
    ]
  },

  {
    "streamId": "vocational_diploma",
    "stream": "Vocational & Diploma Courses",
    "icon": "🛠️",
    "description": "Skill-based programmes for students who want job-ready qualifications without a traditional 3–4 year degree path.",
    "backgrounds": ["Any stream — Science, Commerce, Arts"],
    "levels": [
      {
        "level": "Certificate & Diploma (UG Level)",
        "duration_note": "6 months – 3 years",
        "categories": [
          {
            "category": "Technical & Engineering Trades",
            "courses": [
              { "name": "ITI (Industrial Training Institute)", "fullForm": "Industrial Training Institute Certificate", "duration": "1–2 years", "specializations": ["Electrician", "Fitter", "Welder", "Machinist", "Plumber", "Electronics Mechanic", "Motor Vehicle Mechanic", "Computer Operator & Programming Assistant (COPA)"], "entranceExams": ["State ITI entrance exams"], "topColleges": ["Government ITIs (state-wise)", "CITS Bhubaneswar"], "careerOptions": ["Skilled Tradesperson", "Factory Technician", "Self-employed Contractor", "Apprenticeship in PSUs"], "avgStartingSalary": "₹1.8–4 LPA" },
              { "name": "Diploma in Engineering (Polytechnic)", "fullForm": "Diploma in Engineering", "duration": "3 years", "specializations": ["Civil Engineering", "Mechanical Engineering", "Electrical Engineering", "Electronics", "Computer Science", "Automobile Engineering", "Chemical Engineering"], "entranceExams": ["State Polytechnic Entrance Exams (e.g., JEECUP in UP, DCECE in Bihar)"], "topColleges": ["Government Polytechnic Colleges (state-wise)", "HSBTE Haryana", "MSBTE Maharashtra"], "careerOptions": ["Junior Engineer", "Site Supervisor", "Technician", "Lateral entry to B.Tech 2nd year"], "avgStartingSalary": "₹2.5–5 LPA" }
            ]
          },
          {
            "category": "Hospitality, Travel & Tourism",
            "courses": [
              { "name": "Diploma in Hotel Management", "fullForm": "Diploma in Hotel Management", "duration": "1–3 years", "specializations": ["Food Production", "Housekeeping", "Front Office", "Food & Beverage Service"], "entranceExams": ["NCHMCT JEE", "State-level"], "topColleges": ["IHMs (state-wise)", "Oberoi STEP", "Taj SATHEE"], "careerOptions": ["Chef", "Hotel Executive", "Event Coordinator", "Travel Consultant"], "avgStartingSalary": "₹2.5–5 LPA" },
              { "name": "Diploma in Travel & Tourism", "fullForm": "Diploma in Travel & Tourism Management", "duration": "1–2 years", "specializations": ["Tour Operations", "Travel Agency Management", "Ticketing & GDS"], "entranceExams": ["University-specific"], "topColleges": ["IITTM Gwalior", "NSHM Kolkata"], "careerOptions": ["Travel Agent", "Tour Operator", "Airline Ticketing Staff", "Tourism Officer"], "avgStartingSalary": "₹2.5–4 LPA" }
            ]
          },
          {
            "category": "Health & Paramedical",
            "courses": [
              { "name": "GNM", "fullForm": "General Nursing and Midwifery", "duration": "3.5 years", "specializations": ["General Nursing"], "entranceExams": ["State nursing entrance exams"], "topColleges": ["State Government Nursing Schools", "AIIMS affiliated"], "careerOptions": ["Staff Nurse", "Community Health Worker", "Midwife"], "avgStartingSalary": "₹2.5–4 LPA" },
              { "name": "ANM", "fullForm": "Auxiliary Nursing and Midwifery", "duration": "2 years", "specializations": ["Community Health & Midwifery"], "entranceExams": ["State-level exams"], "topColleges": ["State Health & Family Welfare Institutes"], "careerOptions": ["ASHA Worker supervisor", "Community Health Worker", "ANM at PHC"], "avgStartingSalary": "₹1.8–3 LPA" }
            ]
          }
        ]
      }
    ]
  },

  {
    "streamId": "interdisciplinary_professional",
    "stream": "Interdisciplinary & Professional Courses",
    "icon": "🌐",
    "description": "Courses open to students from multiple streams — Science, Commerce, or Arts — based on interest and aptitude.",
    "backgrounds": ["Science", "Commerce", "Arts / Humanities"],
    "levels": [
      {
        "level": "Undergraduate (UG)",
        "duration_note": "3–5 years",
        "categories": [
          {
            "category": "Law",
            "courses": [
              { "name": "B.A. LLB / B.Com LLB / B.Sc. LLB", "fullForm": "Integrated Bachelor of Laws", "duration": "5 years", "specializations": ["Constitutional Law", "Criminal Law", "Corporate & Commercial Law", "International Law", "Intellectual Property", "Environmental Law", "Cyber Law", "Tax Law", "Human Rights"], "entranceExams": ["CLAT", "AILET", "LSAT India", "MH-CET Law"], "topColleges": ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "NLU Jodhpur", "Symbiosis Law School", "Christ University Law School"], "careerOptions": ["Advocate", "Corporate Lawyer", "Judicial Services", "Legal Advisor in MNCs", "Public Prosecutor"], "avgStartingSalary": "₹4–15 LPA" }
            ]
          },
          {
            "category": "Computer Applications & IT",
            "courses": [
              { "name": "BCA", "fullForm": "Bachelor of Computer Applications", "duration": "3 years", "specializations": ["Software Development", "Web Development", "Data Science", "Cloud Computing", "Cyber Security", "AI & ML"], "entranceExams": ["CUET", "IPU CET", "University-specific"], "topColleges": ["GGSIPU Delhi", "Symbiosis Pune", "Christ University", "Manipal", "SRM"], "careerOptions": ["Software Developer", "Web Developer", "System Analyst", "Database Administrator", "IT Support Specialist"], "avgStartingSalary": "₹3–8 LPA" }
            ]
          },
          {
            "category": "Mass Communication & Media",
            "courses": [
              { "name": "B.M.M.", "fullForm": "Bachelor of Mass Media", "duration": "3 years", "specializations": ["Journalism", "Advertising", "Public Relations", "Film Making", "Digital Media"], "entranceExams": ["Mumbai University entrance", "University-specific"], "topColleges": ["KC College Mumbai", "Xavier's Mumbai", "Jai Hind College Mumbai"], "careerOptions": ["Journalist", "Advertising Executive", "PR Manager", "Digital Content Creator", "Film Producer"], "avgStartingSalary": "₹3–7 LPA" }
            ]
          },
          {
            "category": "Physical Education & Sports",
            "courses": [
              { "name": "B.P.Ed.", "fullForm": "Bachelor of Physical Education", "duration": "4 years (integrated) or 1 year (after graduation)", "specializations": ["Sports Coaching", "Sports Management", "Fitness Training", "Yoga"], "entranceExams": ["University-specific", "State-level PE entrance"], "topColleges": ["LNIPE Gwalior", "SAI centres", "Pondicherry University"], "careerOptions": ["Sports Coach", "Physical Education Teacher", "Fitness Trainer", "Sports Administrator"], "avgStartingSalary": "₹3–6 LPA" }
            ]
          },
          {
            "category": "Event Management & PR",
            "courses": [
              { "name": "BBA in Event Management / B.Event Management", "fullForm": "Bachelor's in Event Management", "duration": "3 years", "specializations": ["Corporate Events", "Wedding Planning", "Exhibition Management", "Sports Events", "Entertainment"], "entranceExams": ["University-specific"], "topColleges": ["NIEM Mumbai", "Amity University", "National Academy of Event Management (NAEM)"], "careerOptions": ["Event Manager", "Wedding Planner", "Brand Activation Manager", "Venue Manager"], "avgStartingSalary": "₹3–7 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Postgraduate (PG)",
        "duration_note": "1–2 years",
        "categories": [
          {
            "category": "Computer Applications & IT",
            "courses": [
              { "name": "MCA", "fullForm": "Master of Computer Applications", "duration": "2 years", "specializations": ["Software Engineering", "Data Science & AI", "Cloud Computing", "Cyber Security", "Mobile App Development", "Blockchain Technology"], "entranceExams": ["NIMCET", "CUET PG", "University-specific"], "topColleges": ["NITs", "GGSIPU", "Symbiosis Pune", "VIT", "Manipal"], "careerOptions": ["Software Developer", "Data Scientist", "Cloud Architect", "Full-Stack Developer", "Cyber Security Analyst"], "avgStartingSalary": "₹5–15 LPA" }
            ]
          },
          {
            "category": "Public Policy & Administration",
            "courses": [
              { "name": "MPP / MPAdmin", "fullForm": "Master of Public Policy / Master of Public Administration", "duration": "2 years", "specializations": ["Economic Policy", "Social Policy", "Urban Governance", "Health Policy", "Education Policy", "International Development"], "entranceExams": ["TISS-NET", "JNU entrance", "University-specific"], "topColleges": ["TISS Mumbai", "IIPA Delhi", "NIA Pune", "Central University of Rajasthan", "JNU"], "careerOptions": ["IAS/IPS/IFS Officer", "Policy Analyst", "International Development Professional", "NGO Director", "Government Consultant"], "avgStartingSalary": "₹5–15 LPA" }
            ]
          },
          {
            "category": "Hospitality & Tourism",
            "courses": [
              { "name": "MBA in Hospitality Management / M.H.M.", "fullForm": "Master of Hotel / Hospitality Management", "duration": "2 years", "specializations": ["Hotel Operations", "Food & Beverage Management", "Revenue Management", "Tourism & Hospitality Marketing"], "entranceExams": ["CAT/MAT for MBA variant", "NCHMCT PG", "University-specific"], "topColleges": ["IIHM Kolkata", "Welcomgroup Graduate School", "Manipal", "Amity"], "careerOptions": ["Hotel General Manager", "Revenue Manager", "Hospitality Consultant", "Tourism Board Officer"], "avgStartingSalary": "₹5–12 LPA" }
            ]
          }
        ]
      },
      {
        "level": "Doctorate (PhD)",
        "duration_note": "3–5 years",
        "categories": [
          {
            "category": "Cross-disciplinary",
            "courses": [
              { "name": "Ph.D.", "fullForm": "Doctor of Philosophy", "duration": "3–5 years", "specializations": ["Computer Science & Applications", "Law", "Mass Communication & Journalism", "Physical Education", "Hotel & Tourism Management", "Public Administration", "Interdisciplinary Studies"], "entranceExams": ["UGC-NET", "University DRC exams", "CSIR-NET (for tech streams)"], "topColleges": ["Central Universities", "TISS", "NLUs", "IITs (CS/interdisciplinary)", "NITs (CS)"], "careerOptions": ["University Professor", "Senior Policy Researcher", "Industry Research Lead", "Think-tank Fellow"], "avgStartingSalary": "₹6–18 LPA" }
            ]
          }
        ]
      }
    ]
  }
]