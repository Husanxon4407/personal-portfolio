const modal = document.querySelector(".certificate-modal");
const modalImage = document.getElementById("modal-image");
const downloadBtn = document.getElementById("download-certificate");
const closeModal = document.querySelector(".close-modal");
const previewButtons =
    document.querySelectorAll(
        ".certificate-preview, .other-certificate-view"
    );
const projectImages = document.querySelectorAll(".project-image");
const heroFirstName =
    document.getElementById("hero-first-name");

const heroLastName =
    document.getElementById("hero-last-name");
const albumCards = document.querySelectorAll(".album-card");
const albumModal = document.querySelector(".album-modal");
const albumTitle = document.querySelector(".album-title");
const albumImages = document.querySelector(".album-images");
const closeAlbum = document.querySelector(".close-album");
const viewer = document.querySelector(".viewer");
const viewerImage = document.querySelector(".viewer-image");
const viewerPrev = document.querySelector(".viewer-prev");
const viewerNext = document.querySelector(".viewer-next");
const viewerClose = document.querySelector(".viewer-close");
const quizBody = document.querySelector(".quiz-body");
let currentCategory = "";
let currentIndex = 0;
const navLinks = document.querySelectorAll(".nav-links a");

/* =========================================================
   LANGUAGE SYSTEM
   ========================================================= */


/* =========================================================
   TRANSLATIONS
   ========================================================= */

const translations = {

    en: {

        nav: {

            home: "Home",

            about: "About",

            experience: "Experience",

            projects: "Projects",

            skills: "Skills",

            gallery: "Gallery",

            contact: "Contact"

        },

        hero: {

            greeting: "Hello, I'm",

            title:
                "Business Information Systems Student",

            description:
                "Passionate about Full Stack Development, Data Science, and building impactful digital experiences.",

            quote:
                "Turning ideas<br>into <strong>digital reality.</strong>",

            ielts:
                "IELTS",

            webProjects:
                "Web Projects",

            volunteerProjects:
                "Volunteer Projects",

            teaching:
                "Years Teaching",

            downloadCV:
                "Download CV",

            viewProjects:
                "View Projects"

        },

        about: {

            subtitle: "Get To Know Me",

            title: "About Me",

            description:
                "A little about my background, interests, and the journey behind my passion for technology.",

            leftTitle:
                "More Than Just a Developer",

            intro:
                "I'm Husanxon Bahodirxonov, a Business Information Systems student at Westminster International University in Tashkent. I enjoy building modern web applications, solving problems through technology, and continuously learning new skills.",

            beyond:
                "Beyond programming, I stay involved in volunteering, networking, and community projects because I believe personal growth happens beyond the classroom.",

            education:
                "Education",

            educationValue:
                "BIS, WIUT",

            focus:
                "Focus",

            focusValue:
                "Full Stack & Data Science",

            passion:
                "Passion",

            passionValue:
                "Technology & Community",

            quickFacts:
                "Quick Facts",

            from:
                "📍 From",

            goal:
                "🎯 Goal",

            goalValue:
                "Backend Engineer",

            favoriteTech:
                "💻 Favorite Tech",

            hobbies:
                "🎮 Hobbies",

            journey:
                "My Journey",

            firstBusiness:
                "My First Business",

            firstBusinessText:
                "Started a popcorn business at 15, repaid the initial investment within a month, and ran it for two years.",

            teaching:
                "Teaching English",

            teachingText:
                "Began teaching English and IELTS while strengthening my own communication skills.",

            wiut:
                "Westminster International University",

            wiutText:
                "Started studying Business Information Systems and developed a stronger interest in software development.",

            itCommunity:
                "IT Community of Uzbekistan",

            itCommunityText:
                "Became an active volunteer and contributed to community projects, onboarding, and Connect Challenge initiatives.",

            today:
                "Today",

            future:
                "Building My Future",

            futureText:
                "Practicing Full Stack Development while expanding my Python and Data Science skills."

        },

        experience: {

            subtitle:
                "Where I've Contributed",

            title:
                "Experience & Leadership & Community Impact",

            description:
                "A journey of teaching, volunteering, leadership, and contributing to communities that create meaningful impact.",

            note:
                "Click any organization to learn more about its mission and impact.",


            hardwork: {

                title:
                    "Hardwork Learning Center",

                tag1:
                    "English Teacher",

                tag3:
                    "Communication",

                item1:
                    "Taught English and IELTS courses",

                item2:
                    "Designed engaging lesson plans",

                item3:
                    "Conducted speaking and grammar sessions",

                item4:
                    "Helped students improve communication skills",

                item5:
                    "Mentored learners toward their language goals"

            },


            itCommunity: {

                title:
                    "IT Community of Uzbekistan",

                tag1:
                    "Volunteer",

                tag2:
                    "Reviewer",

                tag3:
                    "Present",

                item1:
                    "Active Volunteer",

                item2:
                    "Completed onboarding program",

                item3:
                    "Volunteer Application Reviewer",

                item4:
                    "Connect Challenge Reviewer",

                item5:
                    "Participated in 4 community projects"

            },


            plugPlay: {

                title:
                    "Plug and Play",

                tag1:
                    "Expo Day",

                item1:
                    "Expo Day Volunteer",

                item2:
                    "Registration Team",

                item3:
                    "Represented organization at TechFest"

            },


            uEnter: {

                title:
                    "U-Enter Innovation Center",

                tag2:
                    "Volunteer",

                item1:
                    "SAGE Program Volunteer",

                item2:
                    "Event Support"

            },


            wcce: {

                title:
                    "World Conference on Creative Economy",

                tag1:
                    "Volunteer",

                tag3:
                    "International",

                item1:
                    "Conference Volunteer",

                item2:
                    "Assisted international delegates",

                item3:
                    "Supported conference logistics",

                item4:
                    "Helped manage event operations"

            },


            ibrat: {

                title:
                    "Ibrat Debate",

                item1:
                    "Top 6 out of 70+ Teams",

                item2:
                    "Semi Finalist",

                item3:
                    'Team "Tom & Jerry"'

            },


            instagram:
                "Instagram Page",

            officialWebsite:
                "Official Website",

            linkedinPage:
                "LinkedIn Page"

        },

        education: {

            subtitle:
                "Where I've Learned",

            title:
                "My Learning Journey",

            description:
                "Every institution has shaped my knowledge, skills, and professional growth.",

            visitWebsite:
                "Visit Website",

            instagramPage:
                "Instagram Page",


            school26: {

                location:
                    "Chodak Village, Pop District",

                tag1:
                    "Primary Education",

                tag2:
                    "Secondary Education",

                tag3:
                    "Academic Foundation",

                description:
                    "Completed my primary and secondary education, where I developed the academic foundation, discipline, and curiosity that later inspired my passion for learning."

            },


            hardwork: {

                location:
                    "Chilanzar District, Tashkent",

                tag1:
                    "English",

                tag3:
                    "Communication",

                description:
                    "Studied English and IELTS preparation, which strengthened my communication skills and prepared me for university."

            },


            wiut: {

                location:
                    "Mirabad District, Tashkent",

                tag1:
                    "Business",

                tag2:
                    "Technology",

                tag3:
                    "Leadership",

                description:
                    "Currently pursuing a Bachelor's degree in Business Information Systems, where I combine business knowledge with software development, databases, and digital transformation."

            },


            najot: {

                location:
                    "Chilanzar District, Tashkent",

                tag3:
                    "Backend",

                description:
                    "Strengthening my backend development skills through practical projects while learning JavaScript, Node.js, Express, PostgreSQL, and modern web technologies."

            },


            school21: {

                location:
                    "Mirzo Ulugbek District, Tashkent",

                tag1:
                    "Algorithms",

                tag2:
                    "Teamwork",

                tag3:
                    "Projects",

                description:
                    "Learning software engineering through the innovative peer-to-peer educational model while solving real-world programming challenges and collaborating with other learners."

            }

        },

        certifications: {

            subtitle:
                "Verified Achievements",

            title:
                "Professional Certifications",

            description:
                "Certifications that reflect my commitment to continuous learning and professional development.",

            overallBand:
                "Overall Band Score:",

            englishLevel:
                "English Level:",

            academicModule:
                "Academic Module",

            international:
                "International",

            nationalExam:
                "National Exam",

            publicSpeaking:
                "Public Speaking",

            diplomacy:
                "Diplomacy",

            leadership:
                "Leadership",

            networking:
                "Networking",

            personalBranding:
                "Personal Branding",

            viewCertificate:
                "View Certificate",

            otherCertificates:
                "View Other Certificates",


            ielts: {

                description:
                    "International English language qualification demonstrating academic proficiency in listening, reading, writing and speaking."

            },


            c1: {

                description:
                    "Earned a nationally recognized C1 English certificate with perfect scores in Reading and Listening, reflecting strong language proficiency and teaching experience."

            },


            mun: {

                delegate:
                    "Delegate of France",

                description:
                    "Represented France at BMU Model United Nations, strengthening negotiation, public speaking, teamwork, and critical thinking skills."

            },


            connect: {

                program:
                    "21-Day LinkedIn Program",

                description:
                    "Successfully completed a 21-day LinkedIn challenge focused on professional networking, profile optimization, and personal branding."

            },

            additionalAchievements:
                "Additional Achievements",

            otherTitle:
                "Other Certificates",

            languageCertification:
                "Language Certification",

            downloadCertificate:
                "Download Certificate",

            otherDescription:
                "A collection of additional qualifications and achievements.",

        },

        projects: {

            subtitle:
                "Projects I've Done",

            title:
                "Selected Projects",

            description:
                "Applications and interfaces I have designed and developed while learning modern web technologies.",


            viewFullImage:
                "🔍 View Full Image",

            github:
                "GitHub",

            liveDemo:
                "Live Demo",

            responsive:
                "Responsive",

            forms:
                "Forms",


            otherProjects:
                "View Other Projects",

            otherProjectsDescription:
                "Explore more projects, experiments, and learning work.",

            moreWork:
                "More Work",

            otherTitle:
                "Other Projects",

            otherDescription:
                "Additional projects, experiments, and learning work.",

            webProject:
                "Web Project",

            webApplication:
                "Web Application",

            projectPreview:
                "Project Preview",


            seedra: {

                title:
                    "Seedra",

                description:
                    "Modern e-commerce landing page developed from a professional Figma design using HTML and CSS with responsive layouts.",

                extraDescription:
                    "E-commerce interface developed from a professional design using HTML and CSS."

            },


            uzchess: {

                description:
                    "A modern chess learning platform developed from a professional Figma design, focusing on responsive UI, component-based architecture, and user experience.",

                extraDescription:
                    "Chess learning platform built around responsive UI and component-based development."

            },


            portfolio: {

                title:
                    "Personal Portfolio",

                description:
                    "A personal portfolio website created to showcase my projects, technical skills, certifications, and volunteering experience through a modern and interactive user interface."

            },


            studentPortal: {

                title:
                    "Student Registration Portal",

                description:
                    "An interactive registration system featuring modern form design, real-time validation, responsive layouts, and an improved user experience for collecting student information."

            }

        },

        skills: {
            subtitle: "What Skills I Possess",

            title: "Skills & Strengths",

            description:
                "A combination of technical expertise, professional qualities, and continuous learning that helps me build impactful digital experiences and collaborate effectively with others.",

            frontendTitle:
                "Frontend Development",

            frontendDescription:
                "Building responsive, accessible, and interactive user interfaces using modern frontend technologies.",

            backendTitle:
                "Backend Development",

            backendDescription:
                "Developing server-side applications, REST APIs, and database-driven systems while focusing on clean architecture and scalability.",

            toolsTitle:
                "Tools & Platforms",

            toolsDescription:
                "Using modern development and design tools to improve productivity, collaboration, version control, and user interface design.",

            learningTitle:
                "Currently Learning",

            learningDescription:
                "Continuously expanding my knowledge by exploring cloud computing, data science, and modern technologies to become a better engineer.",

            strengthsTitle:
                "Professional Strengths",

            strengthsDescription:
                "Developed through volunteering, teaching, university projects, and collaboration within diverse communities and organizations.",

            languagesTitle:
                "Languages",

            languagesDescription:
                "Able to communicate and collaborate with people from different backgrounds through multiple languages and continuous learning.",

            leadership: "Leadership",
            communication: "Communication",
            teamwork: "Teamwork",
            problemSolving: "Problem-Solving",
            adaptability: "Adaptability",
            timeManagement: "Time Management",

            tajik: "Tajik (Native)",
            uzbek: "Uzbek (C1)",
            english: "English (C1)",
            german: "German (A2)",
            russian: "Russian (A2)"
        },

        album: {
            subtitle: "Gallery",

            title: "Get to Know Me",

            description:
                "Every chapter of my life has helped shape who I am today. Explore the experiences, people, places, and moments that tell my story beyond the screen.",

            volunteeringTitle: "Volunteering",

            volunteeringDescription:
                "Community projects, leadership experiences, events, and meaningful moments of giving back.",

            socialTitle: "Social Life",

            socialDescription:
                "Friends, memorable moments, celebrations, and experiences that have shaped my personal life.",

            placesTitle: "Places",

            placesDescription:
                "Cities, landscapes, travels, and locations that have become part of my journey.",

            workTitle: "Work & Studies",

            workDescription:
                "University life, projects, competitions, internships, teaching, learning, and professional growth.",

            explore: "Explore Album →",

            modalVolunteering: "Volunteering",
            modalSocial: "Social Life",
            modalPlaces: "Places",
            modalWork: "Work & Studies"
        },

        quiz: {

            subtitle: "Challenge",

            title: "How Well Do You Know Me?",

            description:
                "Think you've explored my portfolio carefully? Test your memory with a few questions and see how well you know my journey.",

            question: "Question",

            score: "Score",

            previous: "Previous",

            next: "Next",

            finish: "Finish",

            loading: "Loading...",

            selectAnswer:
                "Please select an answer before continuing.",

            result: {

                completed: "Quiz Completed!",

                perfect: "Perfect! 🎉",

                perfectMessage:
                    "Amazing! You really explored every part of my portfolio.",

                great: "Great Job! 👏",

                greatMessage:
                    "You know me pretty well! Thanks for taking the time to explore my portfolio.",

                nice: "Nice Try! 😊",

                niceMessage:
                    "You got some correct answers, but there is still more to discover.",

                tryAgain: "Try Again 😄",

                tryAgainMessage:
                    "Looks like you skipped a few sections. Explore the portfolio once more and come back.",

                playAgain: "Play Again"

            },

            questions: {

                q1: {

                    question:
                        "Which sentence best describes my journey?",

                    options: [

                        "I started as a graphic designer.",

                        "I study Business Information Systems and I'm becoming a Backend Engineer.",

                        "I've been a software engineer for over 10 years.",

                        "I switched from medicine to programming."

                    ]

                },

                q2: {

                    question:
                        "Which organizations have I volunteered with?",

                    options: [

                        "Google & Microsoft",

                        "IT Community, Plug and Play and U-Enter",

                        "Tesla & SpaceX",

                        "Amazon & Apple"

                    ]

                },

                q3: {

                    question:
                        "Which project represents my biggest technical achievement?",

                    options: [

                        "Calculator",

                        "Portfolio Website",

                        "UzChess",

                        "Weather App"

                    ]

                },

                q4: {

                    question:
                        "Which language do I NOT speak?",

                    options: [

                        "Uzbek",

                        "Tajik",

                        "German",

                        "Korean"

                    ]

                },

                q5: {

                    question:
                        "Which hobby is mentioned in my portfolio?",

                    options: [

                        "Photography",

                        "Playing PlayStation",

                        "Swimming",

                        "Painting"

                    ]

                },

                q6: {

                    question:
                        "What is my long-term career goal?",

                    options: [

                        "Game Developer",

                        "Backend Engineer",

                        "Data Analyst",

                        "Cybersecurity Specialist"

                    ]

                }

            }

        },

        contact: {

            subtitle: "Contact",

            title: "Let's Build Something Together",

            description:
                "Have a project in mind, an internship opportunity, or simply want to connect? I'd be happy to hear from you. Choose your preferred way to reach me or send me a message directly.",

            formTag: "Contact Form",

            formTitle: "Send Me a Message",

            formDescription:
                "Whether it's an internship opportunity, a collaboration, a freelance project, or simply a question, I'd love to hear from you.",

            fullName: "Full Name",

            email: "Email Address",

            subject: "Subject",

            message: "Message",

            namePlaceholder: "Enter your full name",

            emailPlaceholder: "example@email.com",

            subjectPlaceholder: "What would you like to discuss?",

            messagePlaceholder:
                "Tell me about your idea, project or opportunity...",

            privacyNote:
                "Your information is only used to respond to your message.",

            sendMessage: "Send Message",

            available: "Available for Opportunities",

            connectTitle: "Let's Connect",

            connectDescription:
                "Thank you for taking the time to explore my portfolio. Whether you're looking for a Backend Developer, a collaborator for an exciting project, or simply want to exchange ideas, I'd be happy to hear from you.",

            openInternships: "Open to internships",

            openCollaborations: "Open to collaborations",

            replyTime: "Usually replies within 24 hours",

            emailTitle: "Email",

            emailDescription: "Send me an email",

            telegramTitle: "Telegram",

            telegramDescription: "Chat with me",

            instagramTitle: "Instagram",

            instagramDescription: "Follow my journey",

            linkedinTitle: "LinkedIn",

            linkedinDescription: "View my professional profile",

            githubTitle: "GitHub",

            githubDescription: "Explore my projects",

            locationTitle: "Location",

            locationDescription: "Tashkent, Uzbekistan",

            quote:
                "\"Every great project starts with a simple conversation.\"",

            toast: {

                sending: "Sending...",

                successTitle: "Message Sent!",

                successMessage:
                    "Thank you! I'll reply as soon as possible.",

                errorTitle: "Something went wrong",

                errorMessage:
                    "Please try again later."

            }

        },

        footer: {

            title: "Thank you for visiting!",

            description:
                "I appreciate you taking the time to explore my portfolio. If you have an opportunity, project, or simply want to connect, don't hesitate to reach out.",

            backToTop: "Back to Top",

            copyright:
                "© 2026 Husanxon Bahodirxonov. All rights reserved.",

            credit:
                "Designed, developed, and continuously improved by Husanxon Bahodirxonov."

        }

    },


    uz: {

        nav: {

            home: "Bosh sahifa",

            about: "Men haqimda",

            experience: "Tajriba",

            projects: "Loyihalar",

            skills: "Ko‘nikmalar",

            gallery: "Galereya",

            contact: "Aloqa"

        },


        hero: {

            greeting:
                "Salom, men",

            title:
                "Biznes axborot tizimlari talabasi",

            description:
                "Full Stack dasturlash, Data Science va ta’sirchan raqamli tajribalar yaratishga qiziqaman.",

            quote:
                "G‘oyalarni<br><strong>raqamli haqiqatga</strong> aylantirish.",

            ielts:
                "IELTS",

            webProjects:
                "Veb loyihalar",

            volunteerProjects:
                "Ko‘ngillilar loyihalari",

            teaching:
                "Yillik o‘qituvchilik",

            downloadCV:
                "CV yuklab olish",

            viewProjects:
                "Loyihalarni ko‘rish"

        },

        about: {

            subtitle:
                "Men haqimda",

            title:
                "Men haqimda",

            description:
                "Mening kelib chiqishim, qiziqishlarim va texnologiyaga bo‘lgan qiziqishimni shakllantirgan yo‘lim haqida.",

            leftTitle:
                "Dasturchidan ham ko‘proq",

            intro:
                "Men Husanxon Bahodirxonov, Toshkentdagi Westminster International University universitetida Biznes axborot tizimlari yo‘nalishida tahsil olaman. Zamonaviy veb-ilovalar yaratish, texnologiyalar orqali muammolarni hal qilish va doimiy ravishda yangi ko‘nikmalarni o‘rganishga qiziqaman.",

            beyond:
                "Dasturlashdan tashqari, ko‘ngillilik, networking va turli jamoaviy loyihalarda faol qatnashaman, chunki shaxsiy rivojlanish faqat auditoriya ichida emas, deb hisoblayman.",

            education:
                "Ta’lim",

            educationValue:
                "BIS, WIUT",

            focus:
                "Yo‘nalish",

            focusValue:
                "Full Stack va Data Science",

            passion:
                "Qiziqishlar",

            passionValue:
                "Texnologiya va hamjamiyat",

            quickFacts:
                "Qisqa ma’lumotlar",

            from:
                "📍 Men",

            goal:
                "🎯 Maqsad",

            goalValue:
                "Backend muhandisi",

            favoriteTech:
                "💻 Sevimli texnologiyalar",

            hobbies:
                "🎮 Qiziqishlar",

            journey:
                "Mening yo‘lim",

            firstBusiness:
                "Birinchi biznesim",

            firstBusinessText:
                "15 yoshimda popkorn biznesini boshladim, bir oy ichida dastlabki sarmoyani qaytardim va uni ikki yil davomida yuritdim.",

            teaching:
                "Ingliz tilini o‘qitish",

            teachingText:
                "Ingliz tili va IELTS fanlarini o‘qitishni boshladim va shu bilan birga o‘z kommunikatsiya ko‘nikmalarimni ham rivojlantirdim.",

            wiut:
                "Westminster International University",

            wiutText:
                "Biznes axborot tizimlari yo‘nalishida o‘qishni boshladim va dasturiy ta’minot ishlab chiqishga bo‘lgan qiziqishimni yanada oshirdim.",

            itCommunity:
                "O‘zbekiston IT hamjamiyati",

            itCommunityText:
                "Faol ko‘ngilli bo‘ldim va turli jamoaviy loyihalar, onboarding hamda Connect Challenge tashabbuslarida ishtirok etdim.",

            today:
                "Bugun",

            future:
                "Kelajagimni qurmoqdaman",

            futureText:
                "Full Stack Development bilan shug‘ullanib, Python va Data Science bo‘yicha bilimlarimni amaliy loyihalar orqali kengaytirmoqdaman."

        },

        experience: {

            subtitle:
                "Men hissa qo‘shgan joylar",

            title:
                "Tajriba, yetakchilik va jamoatchilikdagi faoliyat",

            description:
                "O‘qitish, ko‘ngillilik, yetakchilik va mazmunli loyihalarga hissa qo‘shish yo‘lidagi tajribam.",

            note:
                "Tashkilot haqida batafsil ma’lumot olish uchun istalganini bosing.",


            hardwork: {

                title:
                    "Hardwork Learning Center",

                tag1:
                    "Ingliz tili o‘qituvchisi",

                tag3:
                    "Kommunikatsiya",

                item1:
                    "Ingliz tili va IELTS kurslaridan dars berdim",

                item2:
                    "Qiziqarli dars rejalarini ishlab chiqdim",

                item3:
                    "Speaking va grammatika mashg‘ulotlarini olib bordim",

                item4:
                    "Talabalarning kommunikatsiya ko‘nikmalarini rivojlantirishga yordam berdim",

                item5:
                    "O‘quvchilarga til o‘rganish maqsadlariga erishishda ustozlik qildim"

            },


            itCommunity: {

                title:
                    "O‘zbekiston IT hamjamiyati",

                tag1:
                    "Ko‘ngilli",

                tag2:
                    "Tekshiruvchi",

                tag3:
                    "Hozirgi faoliyat",

                item1:
                    "Faol ko‘ngilli",

                item2:
                    "Onboarding dasturini yakunladim",

                item3:
                    "Ko‘ngilli arizalarini tekshiruvchi",

                item4:
                    "Connect Challenge tekshiruvchisi",

                item5:
                    "4 ta jamoaviy loyihada ishtirok etdim"

            },


            plugPlay: {

                title:
                    "Plug and Play",

                tag1:
                    "Expo Day",

                item1:
                    "Expo Day ko‘ngillisi",

                item2:
                    "Ro‘yxatdan o‘tkazish jamoasi",

                item3:
                    "TechFest’da tashkilot vakili sifatida qatnashdim"

            },


            uEnter: {

                title:
                    "U-Enter Innovatsiya Markazi",

                tag2:
                    "Ko‘ngilli",

                item1:
                    "SAGE dasturi ko‘ngillisi",

                item2:
                    "Tadbirni qo‘llab-quvvatlash"

            },


            wcce: {

                title:
                    "Ijodiy iqtisodiyot bo‘yicha Jahon konferensiyasi",

                tag1:
                    "Ko‘ngilli",

                tag3:
                    "Xalqaro",

                item1:
                    "Konferensiya ko‘ngillisi",

                item2:
                    "Xalqaro delegatlarga yordam berdim",

                item3:
                    "Konferensiya logistikasini qo‘llab-quvvatladim",

                item4:
                    "Tadbir jarayonlarini boshqarishga yordam berdim"

            },


            ibrat: {

                title:
                    "Ibrat Debate",

                item1:
                    "70+ jamoa orasida Top 6",

                item2:
                    "Yarim finalchi",

                item3:
                    '“Tom & Jerry” jamoasi'

            },


            instagram:
                "Instagram sahifasi",

            officialWebsite:
                "Rasmiy veb-sayt",

            linkedinPage:
                "LinkedIn sahifasi"

        },

        education: {

            subtitle:
                "Qayerda tahsil olganman",

            title:
                "Ta’lim yo‘lim",

            description:
                "Har bir ta’lim muassasasi bilimlarim, ko‘nikmalarim va professional rivojlanishimga o‘z hissasini qo‘shgan.",

            visitWebsite:
                "Veb-saytga o‘tish",

            instagramPage:
                "Instagram sahifasi",


            school26: {

                location:
                    "Chodak qishlog‘i, Pop tumani",

                tag1:
                    "Boshlang‘ich ta’lim",

                tag2:
                    "Umumiy o‘rta ta’lim",

                tag3:
                    "Akademik asos",

                description:
                    "Boshlang‘ich va umumiy o‘rta ta’limni tamomladim. Bu davrda keyinchalik ta’lim olishga bo‘lgan qiziqishimni shakllantirgan bilim, intizom va izlanish asoslarini rivojlantirdim."

            },


            hardwork: {

                location:
                    "Chilonzor tumani, Toshkent",

                tag1:
                    "Ingliz tili",

                tag3:
                    "Kommunikatsiya",

                description:
                    "Ingliz tili va IELTSga tayyorgarlikni o‘rgandim. Bu tajriba kommunikatsiya ko‘nikmalarimni rivojlantirib, universitetga tayyorlanishimga yordam berdi."

            },


            wiut: {

                location:
                    "Mirobod tumani, Toshkent",

                tag1:
                    "Biznes",

                tag2:
                    "Texnologiya",

                tag3:
                    "Yetakchilik",

                description:
                    "Hozirda Business Information Systems yo‘nalishida bakalavr darajasida tahsil olyapman. Biznes bilimlarimni dasturiy ta’minot, ma’lumotlar bazalari va raqamli transformatsiya bilan birlashtirmoqdaman."

            },


            najot: {

                location:
                    "Chilonzor tumani, Toshkent",

                tag3:
                    "Backend",

                description:
                    "Amaliy loyihalar orqali backend dasturlash ko‘nikmalarimni mustahkamlayapman hamda JavaScript, Node.js, Express, PostgreSQL va zamonaviy web texnologiyalarini o‘rganmoqdaman."

            },


            school21: {

                location:
                    "Mirzo Ulug‘bek tumani, Toshkent",

                tag1:
                    "Algoritmlar",

                tag2:
                    "Jamoaviy ish",

                tag3:
                    "Loyihalar",

                description:
                    "Innovatsion peer-to-peer ta’lim modeli orqali dasturiy injiniringni o‘rganmoqdaman. Amaliy dasturlash muammolarini yechish va boshqa o‘quvchilar bilan hamkorlik qilish orqali tajriba orttiryapman."

            }

        },

        certifications: {

            subtitle:
                "Tasdiqlangan yutuqlar",

            title:
                "Professional sertifikatlar",

            description:
                "Ushbu sertifikatlar mening uzluksiz o‘rganish va professional rivojlanishga bo‘lgan intilishimni aks ettiradi.",

            overallBand:
                "Umumiy ball:",

            englishLevel:
                "Ingliz tili darajasi:",

            academicModule:
                "Akademik modul",

            international:
                "Xalqaro",

            nationalExam:
                "Milliy imtihon",

            publicSpeaking:
                "Ommaviy nutq",

            diplomacy:
                "Diplomatiya",

            leadership:
                "Yetakchilik",

            networking:
                "Networking",

            personalBranding:
                "Shaxsiy brend",

            viewCertificate:
                "Sertifikatni ko‘rish",

            otherCertificates:
                "Boshqa sertifikatlarni ko‘rish",

            otherDescription:
                "Qo‘shimcha sertifikatlar, yutuqlar va tasdiqlovchi hujjatlar.",


            ielts: {

                description:
                    "Tinglab tushunish, o‘qish, yozish va gapirish bo‘yicha akademik til ko‘nikmalarini tasdiqlovchi xalqaro ingliz tili malaka sertifikati."

            },


            c1: {

                description:
                    "O‘qish va tinglab tushunish bo‘yicha mukammal natijalarga ega bo‘lgan, milliy miqyosda tan olingan C1 darajadagi ingliz tili sertifikatini qo‘lga kiritdim. Ushbu natija kuchli til ko‘nikmalari va o‘qituvchilik tajribamni aks ettiradi."

            },


            mun: {

                delegate:
                    "Fransiya delegati",

                description:
                    "BMU Model United Nations tadbirida Fransiya delegati sifatida qatnashib, muzokara olib borish, ommaviy nutq, jamoaviy ish va tanqidiy fikrlash ko‘nikmalarimni rivojlantirdim."

            },


            connect: {

                program:
                    "21 kunlik LinkedIn dasturi",

                description:
                    "Professional networking, profilni optimallashtirish va shaxsiy brendni rivojlantirishga qaratilgan 21 kunlik LinkedIn challenge dasturini muvaffaqiyatli yakunladim."

            },

            additionalAchievements:
                "Qo‘shimcha yutuqlar",

            otherTitle:
                "Boshqa sertifikatlar",

            languageCertification:
                "Til sertifikati",

            downloadCertificate:
                "Sertifikatni yuklab olish",

        },

        projects: {

            subtitle:
                "Men yaratgan loyihalar",

            title:
                "Tanlangan loyihalar",

            description:
                "Zamonaviy web texnologiyalarni o‘rganish davomida ishlab chiqqan ilovalar va interfeyslarim.",


            viewFullImage:
                "🔍 To‘liq rasmni ko‘rish",

            github:
                "GitHub",

            liveDemo:
                "Jonli demo",

            responsive:
                "Moslashuvchan",

            forms:
                "Formalar",


            otherProjects:
                "Boshqa loyihalarni ko‘rish",

            otherProjectsDescription:
                "Qo‘shimcha loyihalar, tajribalar va o‘quv ishlarimni ko‘ring.",

            moreWork:
                "Qo‘shimcha ishlar",

            otherTitle:
                "Boshqa loyihalar",

            otherDescription:
                "Qo‘shimcha loyihalar, tajribalar va o‘quv ishlari.",

            webProject:
                "Veb loyiha",

            webApplication:
                "Veb ilova",

            projectPreview:
                "Loyiha ko‘rinishi",


            seedra: {

                title:
                    "Seedra",

                description:
                    "Professional Figma dizayni asosida HTML va CSS yordamida yaratilgan zamonaviy elektron tijorat landing sahifasi.",

                extraDescription:
                    "Professional dizayn asosida HTML va CSS yordamida yaratilgan elektron tijorat interfeysi."

            },


            uzchess: {

                description:
                    "Professional Figma dizayni asosida yaratilgan zamonaviy shaxmat o‘rganish platformasi. Loyiha moslashuvchan interfeys, komponentlarga asoslangan arxitektura va foydalanuvchi tajribasiga e’tibor qaratadi.",

                extraDescription:
                    "Moslashuvchan interfeys va komponentlarga asoslangan ishlab chiqish tamoyillari asosida yaratilgan shaxmat o‘rganish platformasi."

            },


            portfolio: {

                title:
                    "Shaxsiy Portfolio",

                description:
                    "Loyihalarim, texnik ko‘nikmalarim, sertifikatlarim va ko‘ngillilik tajribamni zamonaviy va interaktiv interfeys orqali namoyish etish uchun yaratilgan shaxsiy portfolio sayti."

            },


            studentPortal: {

                title:
                    "Talabalar ro‘yxatdan o‘tish portali",

                description:
                    "Talabalar ma’lumotlarini yig‘ish uchun zamonaviy forma dizayni, real vaqt rejimidagi validatsiya, moslashuvchan maket va qulay foydalanuvchi tajribasiga ega interaktiv ro‘yxatdan o‘tish tizimi."

            }

        },

        skills: {
            subtitle: "Mening ko‘nikmalarim",
            title: "Ko‘nikmalar va kuchli jihatlar",

            description:
                "Texnik bilimlar, kasbiy fazilatlar va doimiy o‘rganish uyg‘unligi menga ta’sirchan raqamli loyihalar yaratish va boshqalar bilan samarali hamkorlik qilishga yordam beradi.",

            frontendTitle: "Frontend dasturlash",

            frontendDescription:
                "Zamonaviy frontend texnologiyalaridan foydalanib, moslashuvchan, qulay va interaktiv foydalanuvchi interfeyslarini yaratish.",

            backendTitle: "Backend dasturlash",

            backendDescription:
                "Server tomonidagi ilovalar, REST API va ma’lumotlar bazasiga asoslangan tizimlarni ishlab chiqish, toza arxitektura va kengayuvchanlikka e’tibor qaratish.",

            toolsTitle: "Vositalar va platformalar",

            toolsDescription:
                "Unumdorlik, hamkorlik, versiyalarni boshqarish va foydalanuvchi interfeysi dizaynini yaxshilash uchun zamonaviy dasturlash va dizayn vositalaridan foydalanish.",

            learningTitle: "Hozir o‘rganayotganlarim",

            learningDescription:
                "Yaxshi muhandis bo‘lish uchun bulutli texnologiyalar, Data Science va zamonaviy texnologiyalarni o‘rganish orqali bilimlarimni doimiy ravishda kengaytirmoqdaman.",

            strengthsTitle: "Kasbiy kuchli jihatlar",

            strengthsDescription:
                "Ko‘ngillilik, o‘qituvchilik, universitet loyihalari hamda turli jamoalar va tashkilotlar bilan hamkorlik orqali rivojlantirilgan.",

            languagesTitle: "Tillar",

            languagesDescription:
                "Bir nechta tillarni bilish va doimiy o‘rganish orqali turli muhitdagi insonlar bilan muloqot qilish va hamkorlik qilish imkoniyatiga egaman.",

            leadership: "Yetakchilik",
            communication: "Muloqot",
            teamwork: "Jamoaviy ish",
            problemSolving: "Muammolarni hal qilish",
            adaptability: "Moslashuvchanlik",
            timeManagement: "Vaqtni boshqarish",

            tajik: "Tojik tili (Ona tili)",
            uzbek: "O‘zbek tili (C1)",
            english: "Ingliz tili (C1)",
            german: "Nemis tili (A2)",
            russian: "Rus tili (A2)"
        },

        album: {
            subtitle: "Galereya",

            title: "Men bilan yaqindan tanishing",

            description:
                "Hayotimning har bir bosqichi bugungi inson bo‘lib shakllanishimga o‘z hissasini qo‘shgan. Ekran ortidagi hayotimni aks ettiruvchi tajribalar, insonlar, joylar va unutilmas lahzalar bilan tanishing.",

            volunteeringTitle: "Ko‘ngillilik",

            volunteeringDescription:
                "Jamoaviy loyihalar, yetakchilik tajribalari, tadbirlar va boshqalarga yordam berish bilan bog‘liq mazmunli lahzalar.",

            socialTitle: "Ijtimoiy hayot",

            socialDescription:
                "Do‘stlar, unutilmas lahzalar, bayramlar va shaxsiy hayotimni shakllantirgan turli tajribalar.",

            placesTitle: "Joylar",

            placesDescription:
                "Hayotimning bir qismiga aylangan shaharlar, manzaralar, sayohatlar va turli maskanlar.",

            workTitle: "Ish va ta’lim",

            workDescription:
                "Universitet hayoti, loyihalar, musobaqalar, amaliyotlar, o‘qitish, o‘rganish va kasbiy rivojlanish.",

            explore: "Albomni ko‘rish →",

            modalVolunteering: "Ko‘ngillilik",
            modalSocial: "Ijtimoiy hayot",
            modalPlaces: "Joylar",
            modalWork: "Ish va ta’lim"
        },

        quiz: {

            subtitle: "Sinov",

            title: "Men haqimda qanchalik yaxshi bilasiz?",

            description:
                "Portfoliomni diqqat bilan ko‘rib chiqdingizmi? Bir nechta savollar orqali xotirangizni sinab ko‘ring va mening yo‘lim haqida qanchalik yaxshi bilishingizni aniqlang.",

            question: "Savol",

            score: "Ball",

            previous: "Oldingi",

            next: "Keyingi",

            finish: "Yakunlash",

            loading: "Yuklanmoqda...",

            selectAnswer:
                "Davom etishdan oldin javobni tanlang.",

            result: {

                completed: "Test yakunlandi!",

                perfect: "Mukammal! 🎉",

                perfectMessage:
                    "Ajoyib! Portfoliomning deyarli barcha qismlarini diqqat bilan ko‘rib chiqibsiz.",

                great: "Ajoyib natija! 👏",

                greatMessage:
                    "Men haqimda ancha yaxshi bilasiz! Portfoliomni ko‘rishga vaqt ajratganingiz uchun rahmat.",

                nice: "Yomon emas! 😊",

                niceMessage:
                    "Bir nechta savolga to‘g‘ri javob berdingiz, ammo hali kashf qiladigan narsalar ko‘p.",

                tryAgain: "Yana urinib ko‘ring 😄",

                tryAgainMessage:
                    "Aftidan, ayrim bo‘limlarni o‘tkazib yuborgansiz. Portfoliomni yana bir bor ko‘rib chiqing va qaytib keling.",

                playAgain: "Yana o‘ynash"

            },

            questions: {

                q1: {

                    question:
                        "Qaysi jumla mening yo‘limni eng yaxshi ifodalaydi?",

                    options: [

                        "Men grafik dizayner sifatida boshlaganman.",

                        "Men Biznes axborot tizimlari yo‘nalishida o‘qiyman va Backend muhandisi bo‘lish yo‘lidan ketyapman.",

                        "Men 10 yildan ortiq vaqt davomida dasturiy ta’minot muhandisi bo‘lib kelganman.",

                        "Men tibbiyotdan dasturlashga o‘tganman."

                    ]

                },

                q2: {

                    question:
                        "Qaysi tashkilotlarda ko‘ngilli sifatida qatnashganman?",

                    options: [

                        "Google va Microsoft",

                        "IT Community, Plug and Play va U-Enter",

                        "Tesla va SpaceX",

                        "Amazon va Apple"

                    ]

                },

                q3: {

                    question:
                        "Qaysi loyiha mening eng katta texnik yutuqlarimdan birini ifodalaydi?",

                    options: [

                        "Kalkulyator",

                        "Portfolio veb-sayti",

                        "UzChess",

                        "Ob-havo ilovasi"

                    ]

                },

                q4: {

                    question:
                        "Qaysi tilda men gaplasha olmayman?",

                    options: [

                        "O‘zbek tili",

                        "Tojik tili",

                        "Nemis tili",

                        "Koreys tili"

                    ]

                },

                q5: {

                    question:
                        "Portfoliomda qaysi hobbi haqida aytilgan?",

                    options: [

                        "Fotografiya",

                        "PlayStation o‘ynash",

                        "Suzish",

                        "Rasm chizish"

                    ]

                },

                q6: {

                    question:
                        "Mening uzoq muddatli karyera maqsadim nima?",

                    options: [

                        "Game Developer",

                        "Backend Engineer",

                        "Data Analyst",

                        "Cybersecurity Specialist"

                    ]

                }

            }

        },

        contact: {

            subtitle: "Bog‘lanish",

            title: "Keling, birgalikda nimadir yarataylik",

            description:
                "Loyihangiz, amaliyot imkoniyati yoki shunchaki suhbatlashish istagingiz bormi? Sizdan xabar olishdan mamnun bo‘laman. O‘zingizga qulay aloqa usulini tanlang yoki menga to‘g‘ridan-to‘g‘ri xabar yuboring.",

            formTag: "Aloqa formasi",

            formTitle: "Menga xabar yuboring",

            formDescription:
                "Amaliyot, hamkorlik, frilanс loyihasi yoki shunchaki savolingiz bo‘lsa, sizdan xabar olishdan mamnun bo‘laman.",

            fullName: "To‘liq ism",

            email: "Elektron pochta",

            subject: "Mavzu",

            message: "Xabar",

            namePlaceholder: "To‘liq ismingizni kiriting",

            emailPlaceholder: "example@email.com",

            subjectPlaceholder:
                "Nima haqida suhbatlashmoqchisiz?",

            messagePlaceholder:
                "G‘oyangiz, loyihangiz yoki imkoniyatingiz haqida yozing...",

            privacyNote:
                "Sizning ma’lumotlaringiz faqat xabaringizga javob berish uchun ishlatiladi.",

            sendMessage: "Xabar yuborish",

            available: "Imkoniyatlar uchun ochiq",

            connectTitle: "Keling, bog‘lanamiz",

            connectDescription:
                "Portfoliomni ko‘rib chiqqaningiz uchun rahmat. Backend dasturchi, hamkor yoki qiziqarli loyiha uchun sherik izlayotgan bo‘lsangiz yoki shunchaki fikr almashmoqchi bo‘lsangiz, sizdan xabar olishdan mamnun bo‘laman.",

            openInternships: "Amaliyot imkoniyatlari uchun ochiq",

            openCollaborations: "Hamkorlik uchun ochiq",

            replyTime: "Odatda 24 soat ichida javob beraman",

            emailTitle: "Elektron pochta",

            emailDescription: "Menga email yuboring",

            telegramTitle: "Telegram",

            telegramDescription: "Men bilan bog‘laning",

            instagramTitle: "Instagram",

            instagramDescription: "Sayohatimni kuzating",

            linkedinTitle: "LinkedIn",

            linkedinDescription: "Professional profilimni ko‘ring",

            githubTitle: "GitHub",

            githubDescription: "Loyihalarimni ko‘ring",

            locationTitle: "Joylashuv",

            locationDescription: "Toshkent, O‘zbekiston",

            quote:
                "\"Har bir ajoyib loyiha oddiy suhbatdan boshlanadi.\"",

            toast: {

                sending: "Yuborilmoqda...",

                successTitle: "Xabar yuborildi!",

                successMessage:
                    "Rahmat! Imkon qadar tezroq javob beraman.",

                errorTitle: "Xatolik yuz berdi",

                errorMessage:
                    "Iltimos, keyinroq qayta urinib ko‘ring."

            }

        },

        footer: {

            title: "Tashrifingiz uchun rahmat!",

            description:
                "Portfoliomni ko‘rib chiqishga vaqt ajratganingiz uchun minnatdorman. Agar sizda biror imkoniyat, loyiha yoki shunchaki bog‘lanish istagi bo‘lsa, bemalol murojaat qiling.",

            backToTop: "Yuqoriga qaytish",

            copyright:
                "© 2026 Husanxon Bahodirxonov. Barcha huquqlar himoyalangan.",

            credit:
                "Husanxon Bahodirxonov tomonidan ishlab chiqilgan, yaratilgan va doimiy ravishda takomillashtirilmoqda."

        }

    },


    ru: {

        nav: {

            home: "Главная",

            about: "Обо мне",

            experience: "Опыт",

            projects: "Проекты",

            skills: "Навыки",

            gallery: "Галерея",

            contact: "Контакты"

        },


        hero: {

            greeting:
                "Привет, я",

            title:
                "Студент направления Business Information Systems",

            description:
                "Увлекаюсь Full Stack разработкой, Data Science и созданием современных цифровых решений.",

            quote:
                "Превращая идеи<br>в <strong>цифровую реальность.</strong>",

            ielts:
                "IELTS",

            webProjects:
                "Веб-проекты",

            volunteerProjects:
                "Волонтёрские проекты",

            teaching:
                "Лет преподавания",

            downloadCV:
                "Скачать CV",

            viewProjects:
                "Посмотреть проекты"

        },

        about: {

            subtitle:
                "Обо мне",

            title:
                "Обо мне",

            description:
                "Немного о моём прошлом, интересах и пути, который сформировал мою страсть к технологиям.",

            leftTitle:
                "Больше, чем просто разработчик",

            intro:
                "Я Хусанхон Баходирхонов, студент направления Business Information Systems в Вестминстерском международном университете в Ташкенте. Мне нравится создавать современные веб-приложения, решать задачи с помощью технологий и постоянно осваивать новые навыки.",

            beyond:
                "Помимо программирования, я активно участвую в волонтёрских, networking- и общественных проектах, потому что считаю, что личностное развитие происходит не только в учебной аудитории.",

            education:
                "Образование",

            educationValue:
                "BIS, WIUT",

            focus:
                "Направление",

            focusValue:
                "Full Stack и Data Science",

            passion:
                "Интересы",

            passionValue:
                "Технологии и сообщество",

            quickFacts:
                "Коротко обо мне",

            from:
                "📍 Родом",

            goal:
                "🎯 Цель",

            goalValue:
                "Backend-инженер",

            favoriteTech:
                "💻 Любимые технологии",

            hobbies:
                "🎮 Увлечения",

            journey:
                "Мой путь",

            firstBusiness:
                "Мой первый бизнес",

            firstBusinessText:
                "В 15 лет я начал бизнес по продаже попкорна, вернул первоначальные вложения в течение месяца и продолжал заниматься этим два года.",

            teaching:
                "Преподавание английского",

            teachingText:
                "Начал преподавать английский язык и IELTS, одновременно развивая собственные коммуникативные навыки.",

            wiut:
                "Westminster International University",

            wiutText:
                "Начал изучать Business Information Systems и стал ещё больше интересоваться разработкой программного обеспечения.",

            itCommunity:
                "IT Community of Uzbekistan",

            itCommunityText:
                "Стал активным волонтёром и участвовал в общественных проектах, onboarding-программе и инициативе Connect Challenge.",

            today:
                "Сегодня",

            future:
                "Строю своё будущее",

            futureText:
                "Практикую Full Stack Development и одновременно расширяю свои знания в Python и Data Science."

        },

        experience: {

            subtitle:
                "Где я принимал участие",

            title:
                "Опыт, лидерство и вклад в сообщества",

            description:
                "Мой путь в преподавании, волонтёрстве, лидерстве и участии в сообществах, создающих значимый вклад.",

            note:
                "Нажмите на организацию, чтобы узнать больше о её деятельности и влиянии.",


            hardwork: {

                title:
                    "Hardwork Learning Center",

                tag1:
                    "Преподаватель английского",

                tag3:
                    "Коммуникация",

                item1:
                    "Преподавал английский язык и IELTS",

                item2:
                    "Разрабатывал интересные планы уроков",

                item3:
                    "Проводил занятия по разговорной речи и грамматике",

                item4:
                    "Помогал студентам развивать коммуникативные навыки",

                item5:
                    "Помогал ученикам достигать их языковых целей"

            },


            itCommunity: {

                title:
                    "IT Community of Uzbekistan",

                tag1:
                    "Волонтёр",

                tag2:
                    "Ревьюер",

                tag3:
                    "В настоящее время",

                item1:
                    "Активный волонтёр",

                item2:
                    "Прошёл программу адаптации",

                item3:
                    "Ревьюер заявок волонтёров",

                item4:
                    "Ревьюер Connect Challenge",

                item5:
                    "Участвовал в 4 общественных проектах"

            },


            plugPlay: {

                title:
                    "Plug and Play",

                tag1:
                    "Expo Day",

                item1:
                    "Волонтёр Expo Day",

                item2:
                    "Команда регистрации",

                item3:
                    "Представлял организацию на TechFest"

            },


            uEnter: {

                title:
                    "U-Enter Innovation Center",

                tag2:
                    "Волонтёр",

                item1:
                    "Волонтёр программы SAGE",

                item2:
                    "Поддержка мероприятия"

            },


            wcce: {

                title:
                    "Всемирная конференция по креативной экономике",

                tag1:
                    "Волонтёр",

                tag3:
                    "Международный",

                item1:
                    "Волонтёр конференции",

                item2:
                    "Помогал международным делегатам",

                item3:
                    "Поддерживал логистику конференции",

                item4:
                    "Помогал организовывать работу мероприятия"

            },


            ibrat: {

                title:
                    "Ibrat Debate",

                item1:
                    "Вошёл в Top 6 среди 70+ команд",

                item2:
                    "Полуфиналист",

                item3:
                    'Команда «Tom & Jerry»'

            },


            instagram:
                "Страница в Instagram",

            officialWebsite:
                "Официальный сайт",

            linkedinPage:
                "Страница в LinkedIn"

        },

        education: {

            subtitle:
                "Где я учился",

            title:
                "Мой образовательный путь",

            description:
                "Каждое учебное заведение внесло свой вклад в мои знания, навыки и профессиональное развитие.",

            visitWebsite:
                "Посетить сайт",

            instagramPage:
                "Страница в Instagram",


            school26: {

                location:
                    "Село Чодак, Попский район",

                tag1:
                    "Начальное образование",

                tag2:
                    "Среднее образование",

                tag3:
                    "Академическая база",

                description:
                    "Я получил начальное и среднее образование, сформировав академическую базу, дисциплину и любознательность, которые позже вдохновили меня на дальнейшее обучение."

            },


            hardwork: {

                location:
                    "Чиланзарский район, Ташкент",

                tag1:
                    "Английский язык",

                tag3:
                    "Коммуникация",

                description:
                    "Изучал английский язык и готовился к IELTS. Этот опыт укрепил мои коммуникативные навыки и подготовил меня к университетскому обучению."

            },


            wiut: {

                location:
                    "Мирабадский район, Ташкент",

                tag1:
                    "Бизнес",

                tag2:
                    "Технологии",

                tag3:
                    "Лидерство",

                description:
                    "В настоящее время изучаю Business Information Systems на бакалаврской программе, сочетая знания в области бизнеса с разработкой программного обеспечения, базами данных и цифровой трансформацией."

            },


            najot: {

                location:
                    "Чиланзарский район, Ташкент",

                tag3:
                    "Backend",

                description:
                    "Развиваю навыки backend-разработки через практические проекты, изучая JavaScript, Node.js, Express, PostgreSQL и современные веб-технологии."

            },


            school21: {

                location:
                    "Мирзо-Улугбекский район, Ташкент",

                tag1:
                    "Алгоритмы",

                tag2:
                    "Командная работа",

                tag3:
                    "Проекты",

                description:
                    "Изучаю программную инженерию в рамках инновационной peer-to-peer образовательной модели, решая реальные задачи программирования и сотрудничая с другими учащимися."

            }

        },

        certifications: {

            subtitle:
                "Подтверждённые достижения",

            title:
                "Профессиональные сертификаты",

            description:
                "Эти сертификаты отражают моё стремление к непрерывному обучению и профессиональному развитию.",

            overallBand:
                "Общий балл:",

            englishLevel:
                "Уровень английского:",

            academicModule:
                "Академический модуль",

            international:
                "Международный",

            nationalExam:
                "Национальный экзамен",

            publicSpeaking:
                "Публичные выступления",

            diplomacy:
                "Дипломатия",

            leadership:
                "Лидерство",

            networking:
                "Нетворкинг",

            personalBranding:
                "Персональный бренд",

            viewCertificate:
                "Посмотреть сертификат",

            otherCertificates:
                "Посмотреть другие сертификаты",

            otherDescription:
                "Дополнительные сертификаты, достижения и подтверждающие документы.",


            ielts: {

                description:
                    "Международная квалификация по английскому языку, подтверждающая академические навыки аудирования, чтения, письма и говорения."

            },


            c1: {

                description:
                    "Получил признанный на национальном уровне сертификат английского языка уровня C1 с максимальными результатами по чтению и аудированию, что отражает высокий уровень владения языком и опыт преподавания."

            },


            mun: {

                delegate:
                    "Делегат Франции",

                description:
                    "Представлял Францию на BMU Model United Nations, развивая навыки ведения переговоров, публичных выступлений, командной работы и критического мышления."

            },


            connect: {

                program:
                    "21-дневная программа LinkedIn",

                description:
                    "Успешно завершил 21-дневный LinkedIn Challenge, посвящённый профессиональному нетворкингу, оптимизации профиля и развитию персонального бренда."

            },

            additionalAchievements:
                "Дополнительные достижения",

            otherTitle:
                "Другие сертификаты",

            languageCertification:
                "Языковой сертификат",

            downloadCertificate:
                "Скачать сертификат",

        },

        projects: {

            subtitle:
                "Мои проекты",

            title:
                "Избранные проекты",

            description:
                "Приложения и интерфейсы, которые я разработал и спроектировал во время изучения современных веб-технологий.",


            viewFullImage:
                "🔍 Посмотреть полное изображение",

            github:
                "GitHub",

            liveDemo:
                "Демо",

            responsive:
                "Адаптивность",

            forms:
                "Формы",


            otherProjects:
                "Посмотреть другие проекты",

            otherProjectsDescription:
                "Исследуйте дополнительные проекты, эксперименты и учебные работы.",

            moreWork:
                "Другие работы",

            otherTitle:
                "Другие проекты",

            otherDescription:
                "Дополнительные проекты, эксперименты и учебные работы.",

            webProject:
                "Веб-проект",

            webApplication:
                "Веб-приложение",

            projectPreview:
                "Просмотр проекта",


            seedra: {

                title:
                    "Seedra",

                description:
                    "Современная посадочная страница интернет-магазина, разработанная на основе профессионального дизайна Figma с использованием HTML и CSS и адаптивной вёрстки.",

                extraDescription:
                    "Интерфейс электронной коммерции, разработанный на основе профессионального дизайна с использованием HTML и CSS."

            },


            uzchess: {

                description:
                    "Современная платформа для изучения шахмат, разработанная на основе профессионального дизайна Figma с акцентом на адаптивный интерфейс, компонентную архитектуру и пользовательский опыт.",

                extraDescription:
                    "Платформа для изучения шахмат, созданная с использованием адаптивного интерфейса и компонентного подхода к разработке."

            },


            portfolio: {

                title:
                    "Личное портфолио",

                description:
                    "Личный сайт-портфолио, созданный для демонстрации моих проектов, технических навыков, сертификатов и волонтёрского опыта через современный и интерактивный интерфейс."

            },


            studentPortal: {

                title:
                    "Портал регистрации студентов",

                description:
                    "Интерактивная система регистрации с современным дизайном форм, проверкой данных в реальном времени, адаптивной вёрсткой и удобным пользовательским интерфейсом для сбора информации о студентах."

            }

        },

        skills: {
            subtitle: "Мои навыки",
            title: "Навыки и сильные стороны",

            description:
                "Сочетание технических знаний, профессиональных качеств и постоянного обучения помогает мне создавать значимые цифровые продукты и эффективно сотрудничать с другими.",

            frontendTitle: "Frontend-разработка",

            frontendDescription:
                "Создание адаптивных, доступных и интерактивных пользовательских интерфейсов с использованием современных frontend-технологий.",

            backendTitle: "Backend-разработка",

            backendDescription:
                "Разработка серверных приложений, REST API и систем на основе баз данных с акцентом на чистую архитектуру и масштабируемость.",

            toolsTitle: "Инструменты и платформы",

            toolsDescription:
                "Использование современных инструментов разработки и дизайна для повышения продуктивности, улучшения совместной работы, контроля версий и проектирования пользовательских интерфейсов.",

            learningTitle: "Сейчас изучаю",

            learningDescription:
                "Постоянно расширяю свои знания, изучая облачные технологии, Data Science и современные технологии, чтобы стать более сильным инженером.",

            strengthsTitle: "Профессиональные качества",

            strengthsDescription:
                "Развиты благодаря волонтёрству, преподаванию, университетским проектам и сотрудничеству с различными сообществами и организациями.",

            languagesTitle: "Языки",

            languagesDescription:
                "Могу общаться и сотрудничать с людьми из разных стран и культур благодаря знанию нескольких языков и постоянному обучению.",

            leadership: "Лидерство",
            communication: "Коммуникация",
            teamwork: "Командная работа",
            problemSolving: "Решение проблем",
            adaptability: "Адаптивность",
            timeManagement: "Управление временем",

            tajik: "Таджикский (родной)",
            uzbek: "Узбекский (C1)",
            english: "Английский (C1)",
            german: "Немецкий (A2)",
            russian: "Русский (A2)"
        },

        album: {
            subtitle: "Галерея",

            title: "Узнайте меня лучше",

            description:
                "Каждый этап моей жизни помог сформировать меня таким, какой я есть сегодня. Познакомьтесь с опытом, людьми, местами и моментами, которые рассказывают мою историю за пределами экрана.",

            volunteeringTitle: "Волонтёрство",

            volunteeringDescription:
                "Общественные проекты, лидерский опыт, мероприятия и значимые моменты, связанные с помощью другим.",

            socialTitle: "Социальная жизнь",

            socialDescription:
                "Друзья, памятные моменты, праздники и события, которые сформировали мою личную жизнь.",

            placesTitle: "Места",

            placesDescription:
                "Города, пейзажи, путешествия и места, которые стали частью моего жизненного пути.",

            workTitle: "Работа и учёба",

            workDescription:
                "Университетская жизнь, проекты, соревнования, стажировки, преподавание, обучение и профессиональное развитие.",

            explore: "Открыть альбом →",

            modalVolunteering: "Волонтёрство",
            modalSocial: "Социальная жизнь",
            modalPlaces: "Места",
            modalWork: "Работа и учёба"
        },

        quiz: {

            subtitle: "Испытание",

            title: "Насколько хорошо вы меня знаете?",

            description:
                "Думаете, вы внимательно изучили моё портфолио? Проверьте свою память с помощью нескольких вопросов и узнайте, насколько хорошо вы знаете мой путь.",

            question: "Вопрос",

            score: "Счёт",

            previous: "Назад",

            next: "Далее",

            finish: "Завершить",

            loading: "Загрузка...",

            selectAnswer:
                "Выберите ответ перед продолжением.",

            result: {

                completed: "Тест завершён!",

                perfect: "Идеально! 🎉",

                perfectMessage:
                    "Потрясающе! Вы действительно внимательно изучили всё моё портфолио.",

                great: "Отличный результат! 👏",

                greatMessage:
                    "Вы довольно хорошо меня знаете! Спасибо, что уделили время моему портфолио.",

                nice: "Неплохо! 😊",

                niceMessage:
                    "Вы правильно ответили на несколько вопросов, но вам ещё многое предстоит узнать.",

                tryAgain: "Попробуйте ещё раз 😄",

                tryAgainMessage:
                    "Похоже, вы пропустили несколько разделов. Изучите портфолио ещё раз и возвращайтесь.",

                playAgain: "Играть снова"

            },

            questions: {

                q1: {

                    question:
                        "Какое утверждение лучше всего описывает мой путь?",

                    options: [

                        "Я начинал как графический дизайнер.",

                        "Я изучаю бизнес-информационные системы и становлюсь Backend-инженером.",

                        "Я работаю инженером-программистом более 10 лет.",

                        "Я перешёл из медицины в программирование."

                    ]

                },

                q2: {

                    question:
                        "В каких организациях я участвовал в качестве волонтёра?",

                    options: [

                        "Google и Microsoft",

                        "IT Community, Plug and Play и U-Enter",

                        "Tesla и SpaceX",

                        "Amazon и Apple"

                    ]

                },

                q3: {

                    question:
                        "Какой проект представляет одно из моих главных технических достижений?",

                    options: [

                        "Калькулятор",

                        "Сайт-портфолио",

                        "UzChess",

                        "Приложение погоды"

                    ]

                },

                q4: {

                    question:
                        "На каком языке я НЕ говорю?",

                    options: [

                        "Узбекский",

                        "Таджикский",

                        "Немецкий",

                        "Корейский"

                    ]

                },

                q5: {

                    question:
                        "Какое хобби упоминается в моём портфолио?",

                    options: [

                        "Фотография",

                        "Игра в PlayStation",

                        "Плавание",

                        "Рисование"

                    ]

                },

                q6: {

                    question:
                        "Какова моя долгосрочная карьерная цель?",

                    options: [

                        "Game Developer",

                        "Backend Engineer",

                        "Data Analyst",

                        "Cybersecurity Specialist"

                    ]

                }

            }

        },

        contact: {

            subtitle: "Связаться со мной",

            title: "Давайте создадим что-нибудь вместе",

            description:
                "У вас есть проект, возможность стажировки или просто желание пообщаться? Я буду рад получить ваше сообщение. Выберите удобный способ связи или отправьте мне сообщение напрямую.",

            formTag: "Форма связи",

            formTitle: "Отправьте мне сообщение",

            formDescription:
                "Если у вас есть предложение о стажировке, сотрудничестве, фриланс-проекте или просто вопрос, я буду рад с вами связаться.",

            fullName: "Полное имя",

            email: "Электронная почта",

            subject: "Тема",

            message: "Сообщение",

            namePlaceholder: "Введите ваше полное имя",

            emailPlaceholder: "example@email.com",

            subjectPlaceholder:
                "О чём вы хотите поговорить?",

            messagePlaceholder:
                "Расскажите о вашей идее, проекте или возможности...",

            privacyNote:
                "Ваши данные используются только для ответа на ваше сообщение.",

            sendMessage: "Отправить сообщение",

            available: "Открыт для новых возможностей",

            connectTitle: "Давайте свяжемся",

            connectDescription:
                "Спасибо, что уделили время моему портфолио. Если вы ищете Backend-разработчика, партнёра для интересного проекта или просто хотите обменяться идеями, я буду рад получить ваше сообщение.",

            openInternships: "Открыт для стажировок",

            openCollaborations: "Открыт для сотрудничества",

            replyTime: "Обычно отвечаю в течение 24 часов",

            emailTitle: "Email",

            emailDescription: "Написать мне на почту",

            telegramTitle: "Telegram",

            telegramDescription: "Написать мне",

            instagramTitle: "Instagram",

            instagramDescription: "Следите за моим путём",

            linkedinTitle: "LinkedIn",

            linkedinDescription: "Посмотреть мой профиль",

            githubTitle: "GitHub",

            githubDescription: "Посмотреть мои проекты",

            locationTitle: "Местоположение",

            locationDescription: "Ташкент, Узбекистан",

            quote:
                "\"Каждый великий проект начинается с простого разговора.\"",

            toast: {

                sending: "Отправка...",

                successTitle: "Сообщение отправлено!",

                successMessage:
                    "Спасибо! Я отвечу вам как можно скорее.",

                errorTitle: "Что-то пошло не так",

                errorMessage:
                    "Пожалуйста, попробуйте ещё раз позже."

            }

        },

        footer: {

            title: "Спасибо за визит!",

            description:
                "Спасибо, что уделили время моему портфолио. Если у вас есть интересная возможность, проект или вы просто хотите связаться со мной, не стесняйтесь написать.",

            backToTop: "Вернуться наверх",

            copyright:
                "© 2026 Husanxon Bahodirxonov. Все права защищены.",

            credit:
                "Разработано и создано Husanxon Bahodirxonov с постоянным улучшением проекта."

        }

    },

};

const heroNames = {

    en: {
        first: "Husankhon",
        last: "Bahodirkhonov"
    },

    uz: {
        first: "Husanxon",
        last: "Bahodirxonov"
    },

    ru: {
        first: "Хусанхон",
        last: "Баходирхонов"
    }

};

/* =========================================================
   LANGUAGE ELEMENTS
   ========================================================= */

const languageBtn =
    document.querySelector(".language-btn");

const languageMenu =
    document.querySelector(".language-menu");

const languageSwitcher =
    document.querySelector(".language-switcher");

const languageItems =
    document.querySelectorAll(".language-menu li");

const currentLanguage =
    document.getElementById("current-language");


/* =========================================================
   GET TRANSLATION BY KEY
   ========================================================= */

function getTranslation(language, key) {

    const parts = key.split(".");

    let value = translations[language];

    for (const part of parts) {

        if (value && value[part] !== undefined) {

            value = value[part];

        } else {

            return null;

        }

    }

    return value;

}


/* =========================================================
   APPLY LANGUAGE
   ========================================================= */

function applyLanguage(language) {

    const elements =
        document.querySelectorAll("[data-i18n]");

    const placeholderElements =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholderElements.forEach(element => {

        const key =
            element.dataset.i18nPlaceholder;

        const translation =
            getTranslation(language, key);

        if (translation !== null) {

            element.placeholder =
                translation;

        }

    });

    elements.forEach(element => {

        const key =
            element.dataset.i18n;

        const translation =
            getTranslation(language, key);

        if (translation !== null) {

            if (element.id === "hero-quote") {

                element.innerHTML =
                    translation;

            } else {

                element.textContent =
                    translation;

            }

        }

        const heroQuote =
            document.getElementById("hero-quote");

        if (heroQuote) {

            heroQuote.innerHTML =
                translations[language].hero.quote;

        }

    });


    /* Update language button */

    currentLanguage.textContent =
        language.toUpperCase();


    /* Active language */

    languageItems.forEach(item => {

        item.classList.toggle(
            "active",
            item.dataset.lang === language
        );

    });


    /* Save language */

    localStorage.setItem(
        "portfolio-language",
        language
    );


    /* Update document language */

    document.documentElement.lang =
        language;

    /* =========================================================
   UPDATE HERO NAME
   ========================================================= */

    // if (heroFirstName && heroLastName) {
    //
    //     heroFirstName.textContent = "";
    //
    //     heroLastName.textContent = "";
    //
    //     typeFirstName();
    //
    // }

}

function updateHeroNameForLanguage(language) {

    if (!heroFirstName || !heroLastName) return;

    heroFirstName.textContent = "";
    heroLastName.textContent = "";

    typeFirstName();

}


/* =========================================================
   OPEN / CLOSE LANGUAGE MENU
   ========================================================= */

languageBtn.addEventListener("click", () => {

    languageMenu.classList.toggle("show");

});


/* =========================================================
   SELECT LANGUAGE
   ========================================================= */

languageItems.forEach(item => {

    item.addEventListener("click", () => {

        const language =
            item.dataset.lang;


        /* Apply normal portfolio translations */

        applyLanguage(language);


        /* Update hero name */

        updateHeroNameForLanguage(language);


        /* Update quiz if it exists */

        const quizSection =
            document.getElementById("quiz");


        if (quizSection) {

            /*
               If the quiz is currently showing,
               redraw the current question.
            */

            if (
                quizResult &&
                quizResult.classList.contains("hidden")
            ) {

                renderQuestion();

            }

            /*
               If the result screen is showing,
               redraw the translated result.
            */

            else if (
                quizResult
            ) {

                showResult();

            }

        }


        /* Close language menu */

        languageMenu.classList.remove("show");

    });

});

/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", event => {

    if (
        languageSwitcher &&
        !languageSwitcher.contains(event.target)
    ) {

        languageMenu.classList.remove("show");

    }

});


/* =========================================================
   LOAD SAVED LANGUAGE
   ========================================================= */

const savedLanguage =
    localStorage.getItem("portfolio-language");

const initialLanguage =
    savedLanguage || "en";


applyLanguage(initialLanguage);

// ========================================
// Mobile Navigation
// ========================================

const mobileMenuToggle =
    document.getElementById("mobile-menu-toggle");

const mobileNav =
    document.querySelector(".nav-links");

mobileMenuToggle.addEventListener("click", () => {

    mobileNav.classList.toggle("mobile-open");

    mobileMenuToggle.classList.toggle("active");

});



document.addEventListener("click", (event) => {

    if (!languageSwitcher.contains(event.target)) {

        languageMenu.classList.remove("show");

    }

});

/* =========================================================
   NAVBAR ACTIVE LINK
   ========================================================= */

const navbarSections = [
    document.getElementById("hero"),
    document.getElementById("about"),
    document.getElementById("experience"),
    document.getElementById("projects"),
    document.getElementById("skills"),
    document.getElementById("album"),
    document.getElementById("contact")
].filter(Boolean);

/* =========================================================
   NAVBAR ACTIVE LINK / SCROLL SPY
   ========================================================= */

const navbarSectionIds = [
    "hero",
    "about",
    "experience",
    "projects",
    "skills",
    "album",
    "contact"
];


/* =========================================================
   SET ACTIVE LINK
   ========================================================= */

function setActiveNav(sectionId) {

    navLinks.forEach(link => {

        link.classList.remove("active");

    });


    const activeLink =
        document.querySelector(
            `.nav-links a[href="#${sectionId}"]`
        );


    if (activeLink) {

        activeLink.classList.add("active");

    }

}


/* =========================================================
   CLEAR ACTIVE LINK
   ========================================================= */

function clearActiveNav() {

    navLinks.forEach(link => {

        link.classList.remove("active");

    });

}


/* =========================================================
   NAVBAR CLICK
   ========================================================= */

let navigationClickInProgress = false;


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        const targetId =
            link
                .getAttribute("href")
                .replace("#", "");


        /*
           Immediately activate the clicked link.
        */

        setActiveNav(targetId);


        /*
           Prevent the scroll-spy from fighting
           the clicked link while smooth scrolling.
        */

        navigationClickInProgress = true;


        setTimeout(() => {

            navigationClickInProgress = false;

            setActiveNav(targetId);

        }, 850);


        /*
           Close mobile menu if it exists.
        */

        if (
            typeof mobileNav !== "undefined"
        ) {

            mobileNav.classList.remove(
                "mobile-open"
            );

        }


        if (
            typeof mobileMenuToggle !== "undefined"
        ) {

            mobileMenuToggle.classList.remove(
                "active"
            );

        }

    });

});


/* =========================================================
   FIND CURRENT SECTION
   ========================================================= */

function getCurrentSectionId() {

    /*
       Fixed navbar height + small breathing space.
    */

    const spyPosition =
        window.scrollY + 20;


    let currentSectionId = null;


    /*
       Check ALL major page sections.

       The last section whose top has passed
       the spy line is considered current.
    */

    const allSections = [

        "hero",
        "about",
        "experience",
        "education",
        "certifications",
        "projects",
        "skills",
        "album",
        "contact"

    ];


    allSections.forEach(id => {

        const section =
            document.getElementById(id);


        if (!section) return;


        if (
            section.offsetTop <= spyPosition
        ) {

            currentSectionId = id;

        }

    });


    return currentSectionId;

}


/* =========================================================
   UPDATE ACTIVE NAV FROM SCROLL
   ========================================================= */

function updateActiveNavFromScroll() {

    /*
       Don't fight a navbar click while the
       browser is smoothly scrolling.
    */

    if (
        navigationClickInProgress
    ) {

        return;

    }


    const currentSectionId =
        getCurrentSectionId();


    /*
       Nothing visible yet.
    */

    if (
        !currentSectionId
    ) {

        clearActiveNav();

        return;

    }


    /*
       If we're inside a section that DOES have
       a navbar link, activate it.
    */

    if (
        navbarSectionIds.includes(
            currentSectionId
        )
    ) {

        setActiveNav(
            currentSectionId
        );

        return;

    }


    /*
       We're inside a section such as:

       Education
       Certifications
       etc.

       Those sections have no navbar link,
       so NOTHING should be active.
    */

    clearActiveNav();

}


/* =========================================================
   SCROLL
   ========================================================= */

let scrollTicking = false;


window.addEventListener(
    "scroll",
    () => {

        if (
            navigationClickInProgress
        ) {

            return;

        }


        if (
            scrollTicking
        ) {

            return;

        }


        scrollTicking = true;


        requestAnimationFrame(() => {

            updateActiveNavFromScroll();

            scrollTicking = false;

        });

    },
    {
        passive: true
    }
);

//========================================
// EmailJS Initialization
//========================================

emailjs.init({
    publicKey: "7I0bjbOburJ_o5eqG"
});

previewButtons.forEach(button=>{
    button.addEventListener("click",()=>{
        const image = button.dataset.image;
        const download = button.dataset.download;
        modalImage.src = image;
        downloadBtn.href = download;
        modal.classList.add("active");
    });
});

closeModal.addEventListener("click",()=>{
    modal.classList.remove("active");
});

modal.addEventListener("click",(e)=>{
    if(e.target===modal){
        modal.classList.remove("active");
    }
});

document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){
        modal.classList.remove("active");
    }
});

/* =========================================================
   OTHER CERTIFICATES MODAL
   ========================================================= */

const otherCertificatesModal =
    document.getElementById(
        "other-certificates-modal"
    );

const openOtherCertificates =
    document.getElementById(
        "open-other-certificates"
    );

const closeOtherCertificates =
    document.getElementById(
        "close-other-certificates"
    );


/* =========================================================
   OPEN
   ========================================================= */

if (
    openOtherCertificates &&
    otherCertificatesModal
) {

    openOtherCertificates.addEventListener(
        "click",
        () => {

            otherCertificatesModal.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   CLOSE
   ========================================================= */

if (
    closeOtherCertificates &&
    otherCertificatesModal
) {

    closeOtherCertificates.addEventListener(
        "click",
        () => {

            otherCertificatesModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE
   ========================================================= */

if (otherCertificatesModal) {

    otherCertificatesModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                otherCertificatesModal
            ) {

                otherCertificatesModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   CLOSE WITH ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            otherCertificatesModal
        ) {

            otherCertificatesModal.classList.remove(
                "active"
            );

        }

    }
);

/* =========================================================
   PROJECT PREVIEW MODAL
   ========================================================= */

const projectPreviewModal =
    document.getElementById(
        "project-preview-modal"
    );

const projectPreviewImage =
    document.getElementById(
        "project-preview-image"
    );

const projectPreviewTitle =
    document.getElementById(
        "project-preview-title"
    );

const projectPreviewGithub =
    document.getElementById(
        "project-preview-github"
    );

const projectPreviewDemo =
    document.getElementById(
        "project-preview-demo"
    );

const projectPreviewClose =
    document.getElementById(
        "project-preview-close"
    );


/* =========================================================
   MAIN PROJECT IMAGES
   ========================================================= */

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        const imageContainer =
            card.querySelector(".project-image");

        const image =
            card.querySelector(".project-image img");

        if (!imageContainer || !image) return;


        imageContainer.addEventListener(
            "click",
            () => {

                projectPreviewImage.src =
                    image.src;

                projectPreviewImage.alt =
                    image.alt;

                const title =
                    card.querySelector(
                        ".project-content h3"
                    );

                projectPreviewTitle.textContent =
                    title
                        ? title.textContent.trim()
                        : "Project";


                projectPreviewGithub.href =
                    card.dataset.github || "#";

                projectPreviewDemo.href =
                    card.dataset.demo || "#";


                projectPreviewModal.classList.add(
                    "active"
                );

            }
        );

    });


/* =========================================================
   CLOSE PROJECT PREVIEW
   ========================================================= */

if (projectPreviewClose) {

    projectPreviewClose.addEventListener(
        "click",
        () => {

            projectPreviewModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   CLICK OUTSIDE
   ========================================================= */

if (projectPreviewModal) {

    projectPreviewModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                projectPreviewModal
            ) {

                projectPreviewModal.classList.remove(
                    "active"
                );

            }

        }
    );

}


/* =========================================================
   ESCAPE
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            projectPreviewModal
        ) {

            projectPreviewModal.classList.remove(
                "active"
            );

        }

    }
);

/* =========================================================
   OTHER PROJECTS MODAL
   ========================================================= */

const otherProjectsModal =
    document.getElementById(
        "other-projects-modal"
    );

const openOtherProjects =
    document.getElementById(
        "open-other-projects"
    );

const closeOtherProjects =
    document.getElementById(
        "close-other-projects"
    );


/* =========================================================
   OPEN
   ========================================================= */

if (
    openOtherProjects &&
    otherProjectsModal
) {

    openOtherProjects.addEventListener(
        "click",
        () => {

            otherProjectsModal.classList.add(
                "active"
            );

        }
    );

}


/* =========================================================
   CLOSE
   ========================================================= */

if (
    closeOtherProjects &&
    otherProjectsModal
) {

    closeOtherProjects.addEventListener(
        "click",
        () => {

            otherProjectsModal.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================================
   CLICK OUTSIDE
   ========================================================= */

if (otherProjectsModal) {

    otherProjectsModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                otherProjectsModal
            ) {

                otherProjectsModal.classList.remove(
                    "active"
                );

            }

        }
    );

}

/*========================================*/
/* Album Database */
/*========================================*/

const albums = {

    volunteering: [

        { image: "assets/images/volunteering/Mun_participant.jpg" },

        { image: "assets/images/volunteering/plugandplay.jpg" },

        { image: "assets/images/volunteering/plugandplay2.jpg" },

        { image: "assets/images/volunteering/plugandplay3.jpg" },

        { image: "assets/images/volunteering/plugandplay4.jpg" },

        { image: "assets/images/volunteering/plugandplay5.jpg" },

        { image: "assets/images/volunteering/plugandplay6.jpg" },

        { image: "assets/images/volunteering/studentoftheyear_volunteering_team.jpg" }

    ],

    social: [

        { image: "assets/images/social/islomsivilizatsiyasi.jpg" },

        { image: "assets/images/social/islomsivilizatsiyasi2.jpg" },

        { image: "assets/images/social/novikov_cafe.jpg" },

        { image: "assets/images/social/school21_team.jpg" },

        { image: "assets/images/social/school21_team2.jpg" },

        { image: "assets/images/social/seoul_mun.jpg" },

        { image: "assets/images/social/walkandtalk.jpg" },

        { image: "assets/images/social/walkandtalk2.jpg" },

        { image: "assets/images/social/walkandtalk3.jpg" },

        { image: "assets/images/social/withclassmates.jpg" },

        { image: "assets/images/social/withclassmates2.jpg" },

        { image: "assets/images/social/withrelatives.jpg" },

        { image: "assets/images/social/withrelatives2.jpg" }

    ],

    places: [

        { image: "assets/images/places/alisherNavoiy_statue.jpg" },

        { image: "assets/images/places/anhorpark.jpg" },

        { image: "assets/images/places/anhorpark2.jpg" },

        { image: "assets/images/places/anhorpark3.jpg" },

        { image: "assets/images/places/aroundoybek.jpg" },

        { image: "assets/images/places/astronomypark.jpg" },

        { image: "assets/images/places/astronomypark2.jpg" },

        { image: "assets/images/places/astronomypark3.jpg" },

        { image: "assets/images/places/astronomypark4.jpg" },

        { image: "assets/images/places/astronomypark5.jpg" },

        { image: "assets/images/places/astronomypark6.jpg" },

        { image: "assets/images/places/bulvard.jpg" },

        { image: "assets/images/places/hazrati_imam_mosque.jpg" },

        { image: "assets/images/places/one_mosque.jpg" },

        { image: "assets/images/places/one_mosque2.jpg" },

        { image: "assets/images/places/novza_mosque.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi2.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi3.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi4.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi5.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi6.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi7.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi8.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi9.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi10.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi11.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi12.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi13.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi14.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi15.jpg" },

        { image: "assets/images/places/islomsivilizatsiyasi16.jpg" }



    ],

    work: [

        { image: "assets/images/work/teaching.jpg" }

    ]

};

/*========================================*/
/* Open Album */
/*========================================*/

albumCards.forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        if (!albums[category]) {
            console.error(`Album "${category}" does not exist.`);
            return;
        }

        openAlbum(category);

    });

});

const albumTitles = {

    en: {

        volunteering: "🤝 Volunteering",

        social: "🌍 Social Life",

        places: "📍 Places",

        work: "💼 Work & Studies"

    },

    uz: {

        volunteering: "🤝 Ko‘ngillilik",

        social: "🌍 Ijtimoiy hayot",

        places: "📍 Joylar",

        work: "💼 Ish va ta’lim"

    },

    ru: {

        volunteering: "🤝 Волонтёрство",

        social: "🌍 Социальная жизнь",

        places: "📍 Места",

        work: "💼 Работа и учёба"

    }

};

let currentAlbumCategory = null;

function openAlbum(category) {

    /* =========================================
       Save currently opened album
       ========================================= */

    currentAlbumCategory = category;


    /* =========================================
       Open modal
       ========================================= */

    albumModal.classList.add("active");


    /* =========================================
       Get current language
       ========================================= */

    const language =
        localStorage.getItem("portfolio-language") || "en";


    /* =========================================
       Set translated album title
       ========================================= */

    albumTitle.textContent =
        albumTitles[language][category];


    /* =========================================
       Clear old images
       ========================================= */

    albumImages.innerHTML = "";


    /* =========================================
       Create album photos
       ========================================= */

    albums[category].forEach((photo, index) => {

        const item =
            document.createElement("div");

        item.className =
            "album-photo";

        item.dataset.category =
            category;

        item.dataset.index =
            index;

        item.innerHTML = `
            <img
                src="${photo.image}"
                alt=""
            >
        `;

        albumImages.appendChild(item);

    });


    /* =========================================
       Add image click events
       ========================================= */

    document
        .querySelectorAll(".album-photo")
        .forEach(photo => {

            photo.addEventListener("click", () => {

                currentCategory =
                    photo.dataset.category;

                currentIndex =
                    Number(photo.dataset.index);

                showImage();

            });

        });

}

/*========================================*/
/* Close Album */
/*========================================*/

closeAlbum.addEventListener("click", () => {

    albumModal.classList.remove("active");

});


albumModal.addEventListener("click", (e) => {

    if (e.target === albumModal) {

        albumModal.classList.remove("active");

    }

});


document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        albumModal.classList.remove("active");
        viewer.classList.remove("active");

    }

    if(!viewer.classList.contains("active")) return;

    if(e.key === "ArrowRight"){

        viewerNext.click();

    }

    if(e.key === "ArrowLeft"){

        viewerPrev.click();

    }

});

function showImage(){

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";

    viewerImage.src =
        albums[currentCategory][currentIndex].image;

}

viewerPrev.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = albums[currentCategory].length - 1;

    }

    showImage();

});

viewerNext.addEventListener("click", () => {

    currentIndex++;

    if(currentIndex >= albums[currentCategory].length){

        currentIndex = 0;

    }

    showImage();

});

viewerClose.addEventListener("click",()=>{

    viewer.classList.remove("active");

    document.body.style.overflow = "auto";

});

/*========================================
                QUIZ
========================================*/

/*========================================
    Quiz Data
========================================*/

const quizData = [

    {
        id: "q1",
        answer: 1
    },

    {
        id: "q2",
        answer: 1
    },

    {
        id: "q3",
        answer: 2
    },

    {
        id: "q4",
        answer: 3
    },

    {
        id: "q5",
        answer: 1
    },

    {
        id: "q6",
        answer: 1
    }

];

/*========================================
    DOM Elements
========================================*/

const quizContent = document.querySelector(".quiz-content");
const quizResult = document.querySelector(".quiz-result");

const questionNumber = document.getElementById("question-number");
const scoreElement = document.getElementById("score");

const questionElement = document.getElementById("quiz-question");
const optionsContainer = document.getElementById("quiz-options");

const progressFill = document.querySelector(".quiz-progress-fill");

const previousButton = document.getElementById("previous-question");
const nextButton = document.getElementById("next-question");

const restartButton = document.getElementById("restart-quiz");

const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");

// const quizBody =
//     document.querySelector(".quiz-body");

/*========================================
    State
========================================*/

let currentQuestion = 0;

let selectedAnswers = new Array(quizData.length).fill(null);

/*========================================
    Render Question
========================================*/

function getCurrentQuizLanguage() {

    return (
        localStorage.getItem("portfolio-language")
        || "en"
    );

}

function getCurrentQuizData() {

    const language =
        getCurrentQuizLanguage();

    return translations[language].quiz;

}

function renderQuestion() {

    const language =
        getCurrentQuizLanguage();

    const quizTranslations =
        translations[language].quiz;

    const currentQuiz =
        quizData[currentQuestion];

    const questionData =
        quizTranslations.questions[currentQuiz.id];


    questionNumber.textContent =
        String(currentQuestion + 1);


    questionElement.textContent =
        questionData.question;


    optionsContainer.innerHTML = "";


    questionData.options.forEach(
        (option, index) => {

            const optionCard =
                document.createElement("div");


            optionCard.classList.add(
                "quiz-option"
            );


            optionCard.textContent =
                option;


            if (
                selectedAnswers[currentQuestion]
                === index
            ) {

                optionCard.classList.add(
                    "active"
                );

            }


            optionCard.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".quiz-option")
                        .forEach(card => {

                            card.classList.remove(
                                "active"
                            );

                        });


                    optionCard.classList.add(
                        "active"
                    );


                    selectedAnswers[currentQuestion] =
                        index;


                    updateButtons();

                }
            );


            optionCard.style.animationDelay =
                `${index * 0.08}s`;


            optionsContainer.appendChild(
                optionCard
            );

        }
    );


    updateProgress();

    updateButtons();

}

function changeQuestion(direction = "next") {

    quizBody.classList.add("changing");

    setTimeout(() => {

        renderQuestion();

        quizBody.classList.remove("changing");

    },300);

}

/*========================================
    Progress
========================================*/

function updateProgress() {

    const percentage =
        ((currentQuestion + 1) / quizData.length) * 100;

    progressFill.style.width = percentage + "%";

}

/*========================================
    Calculate Score
========================================*/

function calculateScore() {

    let score = 0;

    selectedAnswers.forEach((answer, index) => {

        if (answer === quizData[index].answer) {

            score++;

        }

    });

    scoreElement.textContent = score;

    return score;

}

/*========================================
    Update Buttons
========================================*/

function updateButtons() {

    const language =
        getCurrentQuizLanguage();

    const quizTranslations =
        translations[language].quiz;


    previousButton.disabled =
        currentQuestion === 0;


    nextButton.disabled =
        selectedAnswers[currentQuestion]
        === null;


    if (
        currentQuestion ===
        quizData.length - 1
    ) {

        nextButton.textContent =
            quizTranslations.finish;

    }

    else {

        nextButton.textContent =
            quizTranslations.next;

    }

}

/*========================================
    Show Result
========================================*/

function showResult() {

    const language =
        getCurrentQuizLanguage();

    const quizTranslations =
        translations[language].quiz;


    const finalScore =
        calculateScore();


    quizContent.classList.add(
        "hidden"
    );


    quizResult.classList.remove(
        "hidden"
    );


    if (
        finalScore ===
        quizData.length
    ) {

        launchConfetti();

    }


    resultScore.textContent =
        `${finalScore} / ${quizData.length}`;


    if (
        finalScore ===
        quizData.length
    ) {

        resultTitle.textContent =
            quizTranslations.result.perfect;

        resultMessage.textContent =
            quizTranslations.result.perfectMessage;

    }

    else if (
        finalScore >= 4
    ) {

        resultTitle.textContent =
            quizTranslations.result.great;

        resultMessage.textContent =
            quizTranslations.result.greatMessage;

    }

    else if (
        finalScore >= 2
    ) {

        resultTitle.textContent =
            quizTranslations.result.nice;

        resultMessage.textContent =
            quizTranslations.result.niceMessage;

    }

    else {

        resultTitle.textContent =
            quizTranslations.result.tryAgain;

        resultMessage.textContent =
            quizTranslations.result.tryAgainMessage;

    }


    restartButton.textContent =
        quizTranslations.result.playAgain;

}

function launchConfetti(){

    const duration = 2500;

    const animationEnd = Date.now() + duration;

    const defaults = {

        startVelocity:30,

        spread:360,

        ticks:80,

        zIndex:9999

    };

    const interval = setInterval(() => {

        const timeLeft = animationEnd - Date.now();

        if(timeLeft <= 0){

            clearInterval(interval);

            return;

        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({

            ...defaults,

            particleCount,

            origin:{
                x:Math.random(),
                y:Math.random() - 0.2
            }

        });

    },250);

}

/*========================================
    Previous Button
========================================*/

previousButton.addEventListener("click", () => {

    if (currentQuestion > 0) {

        currentQuestion--;

        changeQuestion("previous");

    }

});

/*========================================
    Next Button
========================================*/

nextButton.addEventListener("click", () => {

    if (selectedAnswers[currentQuestion] === null) {

        const language =
            getCurrentQuizLanguage();

        alert(
            translations[language]
                .quiz
                .selectAnswer
        );

        return;

    }

    if (currentQuestion === quizData.length - 1) {

        showResult();

        return;

    }

    calculateScore();

    currentQuestion++;

    changeQuestion("next");

});

/*========================================
    Restart Quiz
========================================*/

restartButton.addEventListener("click", () => {

    currentQuestion = 0;

    selectedAnswers = new Array(quizData.length).fill(null);

    quizResult.classList.add("hidden");

    quizContent.classList.remove("hidden");

    calculateScore();

    renderQuestion();

});

/*========================================
    Initialize Quiz
========================================*/

function initQuiz() {

    calculateScore();

    renderQuestion();

}

initQuiz();

//========================================
// Contact Form
//========================================

const contactForm =
    document.getElementById("contact-form");

const submitButton =
    document.querySelector(".contact-submit");


contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();


        const language =
            localStorage.getItem("portfolio-language")
            || "en";

        const contactTranslations =
            translations[language].contact;


        submitButton.disabled = true;


        submitButton.innerHTML = `
            <i class="fa-solid fa-spinner fa-spin"></i>
            <span>
                ${contactTranslations.toast.sending}
            </span>
        `;


        emailjs.sendForm(
            "service_dnjkm7d",
            "template_6nohnlw",
            this
        )

            .then(() => {

                showToast(
                    "success",
                    contactTranslations.toast.successTitle,
                    contactTranslations.toast.successMessage
                );


                contactForm.reset();


                setTimeout(() => {

                    submitButton.disabled =
                        false;

                    submitButton.innerHTML = `
                    <i class="fa-solid fa-paper-plane"></i>
                    <span data-i18n="contact.sendMessage">
                        ${contactTranslations.sendMessage}
                    </span>
                `;

                }, 3000);

            })


            .catch((error) => {

                console.error(error);


                submitButton.disabled =
                    false;


                showToast(
                    "error",
                    contactTranslations.toast.errorTitle,
                    contactTranslations.toast.errorMessage
                );


                setTimeout(() => {

                    submitButton.innerHTML = `
                    <i class="fa-solid fa-paper-plane"></i>
                    <span data-i18n="contact.sendMessage">
                        ${contactTranslations.sendMessage}
                    </span>
                `;

                }, 3000);

            });

    }
);


//========================================
// Toast
//========================================

const toast =
    document.getElementById("toast");

const toastTitle =
    document.getElementById("toast-title");

const toastMessage =
    document.getElementById("toast-message");

const toastIcon =
    document.querySelector(".toast-icon");


function showToast(
    type,
    title,
    message
){

    toastTitle.textContent =
        title;

    toastMessage.textContent =
        message;


    if (
        type === "success"
    ){

        toastIcon.innerHTML =
            '<i class="fa-solid fa-circle-check"></i>';

        toastIcon.style.background =
            "#DCFCE7";

        toastIcon.style.color =
            "#16A34A";

    }

    else{

        toastIcon.innerHTML =
            '<i class="fa-solid fa-circle-xmark"></i>';

        toastIcon.style.background =
            "#FEE2E2";

        toastIcon.style.color =
            "#DC2626";

    }


    toast.classList.remove("show");


    void toast.offsetWidth;


    toast.classList.add("show");


    clearTimeout(
        window.toastTimer
    );


    window.toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 3500);

}

/* =========================================================
   HERO INTRO ANIMATION
   ========================================================= */


/* =========================================================
   ELEMENTS
   ========================================================= */

const greeting =
    document.querySelector(".greeting-reveal");

const heroTitle =
    document.querySelector(".hero-title");

const description =
    document.querySelector(".description");

const achievements =
    document.querySelector(".hero-achievements");

const actions =
    document.querySelector(".hero-actions");

const socials =
    document.querySelector(".hero-socials");


// /* =========================================================
//    NAME
//    ========================================================= */

/* =========================================================
   TYPE FIRST NAME
   ========================================================= */

function typeFirstName(index = 0) {

    if (!heroFirstName) return;

    const language =
        localStorage.getItem("portfolio-language") || "en";

    const firstName =
        heroNames[language].first;

    heroFirstName.textContent =
        firstName.slice(0, index);

    if (index < firstName.length) {

        setTimeout(() => {

            typeFirstName(index + 1);

        }, 55);

    } else {

        setTimeout(() => {

            typeLastName();

        }, 120);

    }
}

/* =========================================================
   TYPE LAST NAME
   ========================================================= */

function typeLastName(index = 0) {

    if (!heroLastName) return;

    const language =
        localStorage.getItem("portfolio-language") || "en";

    const lastName =
        heroNames[language].last;

    heroLastName.textContent =
        lastName.slice(0, index);

    if (index < lastName.length) {

        setTimeout(() => {

            typeLastName(index + 1);

        }, 55);

    }

}

/* =========================================================
   REVEAL ELEMENT
   ========================================================= */

function revealHeroElement(element, delay) {

    if (!element) return;

    setTimeout(() => {

        element.classList.add("show");

    }, delay);

}

/* =========================================================
   START HERO ANIMATION
   ========================================================= */

function startHeroAnimation() {

    /*
        1. Greeting
    */

    revealHeroElement(
        greeting,
        100
    );


    /*
        2. Start typing name
    */

    setTimeout(() => {

        requestAnimationFrame(() => {

            typeFirstName();

        });

    }, 450);


    /*
        3. Student title
    */

    revealHeroElement(
        heroTitle,
        1300
    );


    /*
        4. Description
    */

    revealHeroElement(
        description,
        1500
    );


    /*
        5. Achievement cards
    */

    revealHeroElement(
        achievements,
        1800
    );


    /*
        6. Buttons
    */

    revealHeroElement(
        actions,
        2150
    );


    /*
        7. Social links
    */

    revealHeroElement(
        socials,
        2400
    );

}

/* =========================================================
   START WHEN PAGE IS READY
   ========================================================= */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        startHeroAnimation
    );

} else {

    startHeroAnimation();

}

/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const themeToggle =
    document.getElementById("theme-toggle");


const themeIcon =
    themeToggle
        ? themeToggle.querySelector("i")
        : null;


/* =========================================================
   UPDATE ICON
   ========================================================= */

function updateThemeIcon() {

    if (!themeIcon) return;


    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeIcon.classList.remove(
            "fa-moon"
        );

        themeIcon.classList.add(
            "fa-sun"
        );

    } else {

        themeIcon.classList.remove(
            "fa-sun"
        );

        themeIcon.classList.add(
            "fa-moon"
        );

    }

}


/* =========================================================
   LOAD SAVED THEME
   ========================================================= */

const savedTheme =
    localStorage.getItem("theme");


if (
    savedTheme === "dark"
) {

    document.body.classList.add(
        "dark-mode"
    );

}


/* =========================================================
   INITIAL ICON
   ========================================================= */

updateThemeIcon();


/* =========================================================
   TOGGLE
   ========================================================= */

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark-mode"
            );


            const isDark =
                document.body.classList.contains(
                    "dark-mode"
                );


            localStorage.setItem(
                "theme",
                isDark
                    ? "dark"
                    : "light"
            );


            updateThemeIcon();

        }
    );

}



