use SchoolManagements

db.student.insertMany([
    [
        {
            _id: "s001",
            studentID: 1,
            firstName: "John",
            lastName: "Robinson",
            email: "jrobinson@nuist.edu.cn",
            phoneNumber: "12345678901",
            major: "Software Engineering",
            hobbies: ["Reading", "Sports", "Painting", "Gaming"],
            enrollments: [
                {
                    courseRef: "c001",
                    grade: 'A',
                    date: "2024-12-01"
                },
                {
                    courseID: "c002",
                    grade: 'B',
                    date: "2024-9-14"
                }
            ]
        },
        {
            _id: "s002",
            studentID: 2,
            firstName: "Emma",
            lastName: "Smith",
            email: "esmith@nuist.edu.cn",
            phoneNumber: "12345678902",
            major: "Business Administration",
            hobbies: ["Traveling", "Music", "Dancing"],
            enrollments: [
                {
                    courseRef: "c003",
                    grade: 'B+',
                    date: "2024-11-15"
                },
                {
                    courseID: "c004",
                    grade: 'A-',
                    date: "2024-8-20"
                }
            ]
        },
        {
            _id: "s003",
            studentID: 3,
            firstName: "Oliver",
            lastName: "Johnson",
            email: "ojohnson@nuist.edu.cn",
            phoneNumber: "12345678903",
            major: "Art Design",
            hobbies: ["Drawing", "Photography", "Filmmaking"],
            enrollments: [
                {
                    courseRef: "c005",
                    grade: 'C+',
                    date: "2024-10-10"
                },
                {
                    courseID: "c006",
                    grade: 'B',
                    date: "2024-7-18"
                }
            ]
        },
        {
            _id: "s004",
            studentID: 4,
            firstName: "Ava",
            lastName: "Williams",
            email: "awilliams@nuist.edu.cn",
            phoneNumber: "12345678904",
            major: "Psychology",
            hobbies: ["Writing", "Meditation", "Volunteering"],
            enrollments: [
                {
                    courseRef: "c007",
                    grade: 'A',
                    date: "2024-9-25"
                },
                {
                    courseID: "c008",
                    grade: 'B+',
                    date: "2024-6-12"
                }
            ]
        },
        {
            _id: "s005",
            studentID: 5,
            firstName: "William",
            lastName: "Brown",
            email: "wbrown@nuist.edu.cn",
            phoneNumber: "12345678905",
            major: "Law",
            hobbies: ["Debating", "Researching", "Collecting"],
            enrollments: [
                {
                    courseRef: "c009",
                    grade: 'B',
                    date: "2024-8-30"
                },
                {
                    courseID: "c010",
                    grade: 'C',
                    date: "2024-5-20"
                }
            ]
        },
        {
            _id: "s006",
            studentID: 6,
            firstName: "Isabella",
            lastName: "Jones",
            email: "ijones@nuist.edu.cn",
            phoneNumber: "12345678906",
            major: "Computer Science",
            hobbies: ["Coding", "Hacking", "Exploring"],
            enrollments: [
                {
                    courseRef: "c011",
                    grade: 'A-',
                    date: "2024-7-15"
                },
                {
                    courseID: "c012",
                    grade: 'B+',
                    date: "2024-4-10"
                }
            ]
        },
        {
            _id: "s007",
            studentID: 7,
            firstName: "James",
            lastName: "Miller",
            email: "jmiller@nuist.edu.cn",
            phoneNumber: "12345678907",
            major: "Business Administration",
            hobbies: ["Socializing", "Investing", "Shopping"],
            enrollments: [
                {
                    courseRef: "c013",
                    grade: 'B',
                    date: "2024-6-20"
                },
                {
                    courseID: "c014",
                    grade: 'C+',
                    date: "2024-3-18"
                }
            ]
        },
        {
            _id: "s008",
            studentID: 8,
            firstName: "Sophia",
            lastName: "Davis",
            email: "sdavis@nuist.edu.cn",
            phoneNumber: "12345678908",
            major: "Art Design",
            hobbies: ["Sculpting", "Designing", "Exhibiting"],
            enrollments: [
                {
                    courseRef: "c015",
                    grade: 'A',
                    date: "2024-5-15"
                },
                {
                    courseID: "c016",
                    grade: 'B',
                    date: "2024-2-12"
                }
            ]
        },
        {
            _id: "s009",
            studentID: 9,
            firstName: "Benjamin",
            lastName: "Garcia",
            email: "bgarcia@nuist.edu.cn",
            phoneNumber: "12345678909",
            major: "Psychology",
            hobbies: ["Analyzing", "Counseling", "Helping"],
            enrollments: [
                {
                    courseRef: "c017",
                    grade: 'B+',
                    date: "2024-4-10"
                },
                {
                    courseID: "c018",
                    grade: 'A-',
                    date: "2024-1-10"
                }
            ]
        },
        {
            _id: "s010",
            studentID: 10,
            firstName: "Mia",
            lastName: "Martinez",
            email: "mmartinez@nuist.edu.cn",
            phoneNumber: "12345678910",
            major: "Law",
            hobbies: ["Arguing", "Judging", "Defending"],
            enrollments: [
                {
                    courseRef: "c019",
                    grade: 'C',
                    date: "2024-3-15"
                },
                {
                    courseID: "c020",
                    grade: 'B',
                    date: "2024-12-10"
                }
            ]
        },
        {
            _id: "s011",
            studentID: 11,
            firstName: "Daniel",
            lastName: "Wilson",
            email: "dwilson@nuist.edu.cn",
            phoneNumber: "12345678911",
            major: "Computer Science",
            hobbies: ["Building", "Testing", "Optimizing"],
            enrollments: [
                {
                    courseRef: "c001",
                    grade: 'B',
                    date: "2024-11-20"
                },
                {
                    courseID: "c003",
                    grade: 'A-',
                    date: "2024-10-15"
                }
            ]
        },
        {
            _id: "s012",
            studentID: 12,
            firstName: "Charlotte",
            lastName: "Taylor",
            email: "ctaylor@nuist.edu.cn",
            phoneNumber: "12345678912",
            major: "Business Administration",
            hobbies: ["Managing", "Planning", "Organizing"],
            enrollments: [
                {
                    courseRef: "c005",
                    grade: 'C+',
                    date: "2024-9-10"
                },
                {
                    courseID: "c007",
                    grade: 'B+',
                    date: "2024-8-15"
                }
            ]
        }
    ]
]);// student中对course的引用使用了自定义的_id

db.course.insertMany(
    [       //理工类（6个）
        {
            _id: "c001",
            courseID: 101,
            courseName: "C++ Program Design",
            credit: 3,
            prerequisite: ["c006"],
            difficultyLevel: "Intermediate"
        },
        {
            _id: "c002",
            courseID: 211,
            courseName: "Buiseness Management",
            credit: 4,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c003",
            courseID: 102,
            courseName: "NoSQL Database",
            credit: 3,
            prerequisite: ["c001", "c006"],
            difficultyLevel: "Advanced"
        },
        {
            _id: "c004",
            courseID: 103,
            courseName: "Software Optimization",
            credit: 4,
            prerequisite: ["c001", "c003", "c006"],
            difficultyLevel: "Expert"
        },
        {
            _id: "c005",
            courseID: 408,
            courseName: "Art History",
            credit: 2,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c006",
            courseID: 100,
            courseName: "Introduction to Programming",
            credit: 2,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        //文学艺术类（3个）
        {
            _id: "c007",
            courseID: 203,
            courseName: "Ancient Chinese Literature",
            credit: 4,
            prerequisite: [],
            difficultyLevel: "Intermediate"
        },
        {
            _id: "c008",
            courseID: 209,
            courseName: "Appreciation of Western Art",
            credit: 1,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c009",
            courseID: 303,
            courseName: "Creation of Modern Poetry",
            credit: 3,
            prerequisite: ["c008"],
            difficultyLevel: "Intermediate"
        },
        //商业类（4个）
        {
            _id: "c010",
            courseID: 204,
            courseName: "Fundamentals of Marketing",
            credit: 1,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c011",
            courseID: 305,
            courseName: "Introduction of Financial Management ",
            credit: 1,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c012",
            courseID: 206,
            courseName: "International Business Negotiation",
            credit: 3,
            prerequisite: ["c010"],
            difficultyLevel: "Advanced"
        },
        {
            _id: "c013",
            courseID: 501,
            courseName: "Enterprise Strategic Management",
            credit: 4,
            prerequisite: ["c011"],
            difficultyLevel: "Expert"
        },
        //心理类（3个）
        {
            _id: "c014",
            courseID: 301,
            courseName: "General Psychology",
            credit: 1,
            prerequisite: [],
            difficultyLevel: "Beginner"
        },
        {
            _id: "c015",
            courseID: 111,
            courseName: "Social Psychology",
            credit: 2,
            prerequisite: ["c014"],
            difficultyLevel: "Advanced"
        },
        {
            _id: "c016",
            courseID: 210,
            courseName: "Developing Psychology",
            credit: 3,
            prerequisite: ["c014"],
            difficultyLevel: "Intermediate"
        },
        //法律类（4个）
        {
            _id: "c017",
            courseID: 409,
            courseName: "Fundamentals of Constitutional Law",
            credit: 3,
            prerequisite: [],
            difficultyLevel: "Intermediate"
        },
        {
            _id: "c018",
            courseID: 403,
            courseName: "Introduction to Civial Law",
            credit: 3,
            prerequisite: [],
            difficultyLevel: "Intermediate"
        },
        {
            _id: "c019",
            courseID: 407,
            courseName: "Principles of Criminal Law",
            credit: 3,
            prerequisite: [],
            difficultyLevel: "Intermediate"
        },
        {
            _id: "c020",
            courseID: 502,
            courseName: "Principles of Criminal Law",
            credit: 5,
            prerequisite: ["c017", "c018", "c019"],
            difficultyLevel: "Expert"
        }
    ]
)

db.teachers.insertMany(
    [
        {
            _id: "t001",
            teacherID: 1,
            name: "Dr. Organ",
            email: "jorgan@setu.ie",
            phoneNumber: "086-263-2951",
            courseInfo: [
                {
                    courseRef: "c004",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c007",
                    semester: "Spring 2025"
                }
            ],
            teachingStyle: "Lecture-based",
            expertiseArea: ["Computer Science", "Literature"]
        },
        {
            _id: "t002",
            teacherID: 2,
            name: "Cameron Johnson",
            email: "cjohnson@setu.ie",
            phoneNumber: "087-472-8317",
            courseInfo: [
                {
                    courseRef: "c005",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c004",
                    semester: "Fall 2025"
                }
            ],
            teachingStyle: "Interactive",
            expertiseArea: ["Art", "Computer Science"]
        },
        {
            _id: "t003",
            teacherID: 3,
            name: "Catherine Williams",
            email: "cwilliams@setu.ie",
            phoneNumber: "083-234-5678",
            courseInfo: [
                {
                    courseRef: "c006",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c007",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Project-based",
            expertiseArea: ["Programming", "Literature"]
        },
        {
            _id: "t004",
            teacherID: 4,
            name: "James Anderson",
            email: "janderson@setu.ie",
            phoneNumber: "083-123-4567",
            courseInfo: [
                {
                    courseRef: "c005",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c006",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Discussion-based",
            expertiseArea: ["Art", "Programming"]
        },
        {
            _id: "t005",
            teacherID: 5,
            name: "William Johnson",
            email: "wjohnson@setu.ie",
            phoneNumber: "085-987-6543",
            courseInfo: [
                {
                    courseRef: "c001",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c003",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Practical-oriented",
            expertiseArea: ["Programming", "Database"]
        },
        {
            _id: "t006",
            teacherID: 6,
            name: "Michael Brown",
            email: "mbrown@setu.ie",
            phoneNumber: "086-345-6789",
            courseInfo: [
                {
                    courseRef: "c002",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c003",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Case-study",
            expertiseArea: ["Business", "Database"]
        },
        {
            _id: "t007",
            teacherID: 7,
            name: "Benjamin Davis",
            email: "bdavis@setu.ie",
            phoneNumber: "089-432-1987",
            courseInfo: [
                {
                    courseRef: "c001",
                    semester: "Spring 2023"
                },
                {
                    courseRef: "c002",
                    semester: "Fall 2024"
                }
            ],
            teachingStyle: "Group-work",
            expertiseArea: ["Programming", "Business"]
        },
        {
            _id: "t008",
            teacherID: 8,
            name: "Henry Wilson",
            email: "hwilson@setu.ie",
            phoneNumber: "087-567-8901",
            courseInfo: [
                {
                    courseRef: "c008",
                    semester: "Fall 2023"
                },
                {
                    courseRef: "c009",
                    semester: "Spring 2024"
                }
            ],
            teachingStyle: "Creative",
            expertiseArea: ["Art", "Literature"]
        },
        {
            _id: "t009",
            teacherID: 9,
            name: "Alexander Martinez",
            email: "amartinez@setu.ie",
            phoneNumber: "083-876-5432",
            courseInfo: [
                {
                    courseRef: "c009",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c010",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Inspirational",
            expertiseArea: ["Literature", "Business"]
        },
        {
            _id: "t010",
            teacherID: 10,
            name: "Daniel Garcia",
            email: "dgarcia@setu.ie",
            phoneNumber: "089-210-5437",
            courseInfo: [
                {
                    courseRef: "c008",
                    semester: "Spring 2023"
                },
                {
                    courseRef: "c010",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Engaging",
            expertiseArea: ["Art", "Business"]
        },
        {
            _id: "t011",
            teacherID: 11,
            name: "Matthew Clark",
            email: "mclark@setu.ie",
            phoneNumber: "087-890-4563",
            courseInfo: [
                {
                    courseRef: "c014",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c015",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Interactive",
            expertiseArea: ["Psychology"]
        },
        {
            _id: "t012",
            teacherID: 12,
            name: "Emma Hall",
            email: "ehall@setu.ie",
            phoneNumber: "086-765-4321",
            courseInfo: [
                {
                    courseRef: "c016",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c014",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Supportive",
            expertiseArea: ["Psychology"]
        },
        {
            _id: "t013",
            teacherID: 13,
            name: "Charlotte Allen",
            email: "callen@setu.ie",
            phoneNumber: "087-678-1234",
            courseInfo: [
                {
                    courseRef: "c015",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c016",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Collaborative",
            expertiseArea: ["Psychology"]
        },
        {
            _id: "t014",
            teacherID: 14,
            name: "Amelia Young",
            email: null,
            phoneNumber: "085-345-6789",
            courseInfo: [
                {
                    courseRef: "c011",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c012",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Case-study",
            expertiseArea: ["Business"]
        },
        {
            _id: "t015",
            teacherID: 15,
            name: "Sophia King",
            email: "sking@setu.ie",
            phoneNumber: "085-987-6543",
            courseInfo: [
                {
                    courseRef: "c013",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c011",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Project-based",
            expertiseArea: ["Business"]
        },
        {
            _id: "t016",
            teacherID: 16,
            name: "Isabella Wright",
            email: "iwright@setu.ie",
            phoneNumber: "089-654-3210",
            courseInfo: [
                {
                    courseRef: "c012",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c013",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Interactive",
            expertiseArea: ["Business"]
        },
        {
            _id: "t017",
            teacherID: 17,
            name: "Mia Scott",
            email: "mscott@setu.ie",
            phoneNumber: "086-789-1234",
            courseInfo: [
                {
                    courseRef: "c017",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c018",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Lecture-based",
            expertiseArea: ["Law"]
        },
        {
            _id: "t018",
            teacherID: 18,
            name: "Ava Green",
            email: "agreen@setu.ie",
            phoneNumber: "087-567-8902",
            courseInfo: [
                {
                    courseRef: "c019",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c017",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Discussion-based",
            expertiseArea: ["Law"]
        },
        {
            _id: "t019",
            teacherID: 19,
            name: "Evelyn Baker",
            email: "ebaker@setu.ie",
            phoneNumber: "085-432-1987",
            courseInfo: [
                {
                    courseRef: "c018",
                    semester: "Spring 2024"
                },
                {
                    courseRef: "c019",
                    semester: "Fall 2023"
                }
            ],
            teachingStyle: "Case-study",
            expertiseArea: ["Law"]
        },
        {
            _id: "t020",
            teacherID: 20,
            name: "Abigail Adams",
            email: "aadams@setu.ie",
            phoneNumber: "083-876-5432",
            courseInfo: [
                {
                    courseRef: "c020",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c017",
                    semester: "Spring 2023"
                }
            ],
            teachingStyle: "Project-based",
            expertiseArea: ["Law"]
        }
    ]
)// teachers中对course的引用，和student一样，都使用了自定义的_id

db.department.insertMany(
    [
        {
            _id: "d001",
            departmentID: 1,
            name: "Computer Science",
            head: "Prof. Organ",
            courses: [101, 102, 103, 100],
            teachers: ["t001", "t005", "t007"],
            departmentIntro: "This department focuses on computer technology and software development.",
            officeLocation: "Building A, Floor 3"
        },
        {
            _id: "d002",
            departmentID: 2,
            name: "Art Institute",
            head: "David Canny",
            courses: [408, 203, 209, 303],
            teachers: ["t002", "t004", "t008"],
            departmentIntro: "Dedicated to various art forms and art history studies.",
            officeLocation: "Building B, Floor 2"
        },
        {
            _id: "d003",
            departmentID: 3,
            name: "Business Administration",
            head: "Prof. Lee",
            courses: [211, 204, 305, 206, 501],
            teachers: ["t006", "t009", "t014", "t015", "t016"],
            departmentIntro: "Provides comprehensive business knowledge and management skills training.",
            officeLocation: "Building C, Floor 1"
        },
        {
            _id: "d004",
            departmentID: 4,
            name: "Law Institution",
            head: "Dean Zhang",
            courses: [409, 407, 403, 502],
            teachers: ["t017", "t018", "t019", "t020"],
            departmentIntro: "Offers professional legal education and research programs, cultivating legal professionals with a solid legal foundation and practical skills.",
            officeLocation: "Building E, Floor 3"
        }
    ]
)// department中对course,teachers的引用，使用了手动设置的ID