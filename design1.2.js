use SchoolManagements

db.student.insertMany([
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
                courseRef: "c001", // referencing
                grade: 'A', //embedding
                date: "2024-12-01",
            },
            {
                courseID: "c002",
                grade: 'B',
                date: "2024-9-14",
            },
        ]
    },
    {
        _id: "s002",
        studentID: 2,
        firstName: "Alice",
        lastName: "Smith",
        email: "asmith@nuist.edu.cn",
        phoneNumber: "13888888888",
        major: "Computer Science",
        hobbies: ["Reading", "Programming"],
        enrollments: [
            {
                courseRef: "c003",
                grade: 'A',
                date: "2024-11-15",
            },
            {
                courseID: "c004",
                grade: 'B+',
                date: "2024-10-20",
            },
            {
                courseID: "c005",
                grade: 'A-',
                date: "2024-9-05",
            }
        ]
    },
    {
        _id: "s003",
        studentID: 3,
        firstName: "Bob",
        lastName: "Johnson",
        email: "bjohnson@nuist.edu.cn",
        phoneNumber: "13666666666",
        major: "Business Administration",
        hobbies: ["Sports", "Music"],
        enrollments: [
            {
                courseRef: "c002",
                grade: 'B',
                date: "2024-10-10"
            },
            {
                courseID: "c005",
                grade: 'C+',
                date: "2024-9-10"
            }
        ]
    },
    {
        _id: "s004",
        studentID: 4,
        firstName: "Emma",
        lastName: "Davis",
        email: "edavis@nuist.edu.cn",
        phoneNumber: "13999999999",
        major: "Visual Art",
        hobbies: ["Painting", "Gaming", "Sculpture"],
        enrollments: [
            {
                courseRef: "c005",
                grade: 'A',
                date: "2024-9-01"
            }
        ]
    },
    {
        _id: "s005",
        studentID: 5,
        firstName: "David",
        lastName: "Wilson",
        email: "dwilson@nuist.edu.cn",
        phoneNumber: "13333333333",
        major: "Computer Science",
        hobbies: ["Gaming", "Hiking", "Programming"],
        enrollments: [
            {
                courseRef: "c001",
                grade: 'B-',
                date: "2024-11-05"
            },
            {
                courseID: "c003",
                grade: 'A+',
                date: "2024-10-25"
            },
            {
                courseID: "c004",
                grade: 'B',
                date: "2024-10-15"
            }
        ]
    }
]);// student中对course的引用使用了自定义的_id

db.course.insertMany(
    [
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
            phoneNumber: "12345678902",
            courseInfo: [
                {
                    courseRef: "c001",
                    semester: "Fall 2024"
                },
                {
                    courseRef: "c003",
                    semester: "Spring 2025"
                }
            ],
            teachingStyle: "Interactive",
            expertiseArea: ["Programming", "Database"]
        },
        {
            _id: "t002",
            teacherID: 2,
            name: "Cameron Johnson",
            email: "cjohnson@setu.ie",
            phoneNumber: "12345678903",
            courseInfo: [
                {
                    courseID: "c001",
                    semester: "Spring 2024",
                },
                {
                    courseID: "c004",
                    semester: "Fall 2025",
                }
            ],
            teachingStyle: "Lecture-based",
            expertiseArea: ["Software Engineering"]
        },
        {
            _id: "t003",
            teacherID: 3,
            name: "Catherine Williams",
            email: "cwilliams@setu.ie",
            phoneNumber: "12345678904",
            courseInfo: [
                {
                    courseID: "408",
                    semester: "Fall 2024"
                }
            ],
            teachingStyle: "Discussion-based",
            expertiseArea: ["Art History"]
        },
        {
            _id: "t004",
            teacherID: 4,
            name: "Michael Brown",
            email: "mbrown@setu.ie",
            phoneNumber: "18888888888",
            courseInfo: [
                {
                    courseID: "c006",
                    semester: "Spring 2024"
                }
            ],
            teachingStyle: "Project-based",
            expertiseArea: ["Basic Programming"]
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
            departmentIntro: "This department focuses on computer technology and software development.",
            officeLocation: "Building A, Floor 3"
        },
        {
            _id: "d002",
            departmentID: 2,
            name: "Visual Art",
            head: "David Canny",
            courses: [408],
            teachers: [3],
            departmentIntro: "Dedicated to various art forms and art history studies.",
            officeLocation: "Building B, Floor 2"
        },
        {
            _id: "d003",
            departmentID: 3,
            name: "Business Administration",
            head: "Prof. Lee",
            courses: [211],
            teachers: [],
            departmentIntro: "Provides comprehensive business knowledge and management skills training.",
            officeLocation: "Building C, Floor 1"
        }
    ]
)// department中对course,teachers的引用，使用了手动设置的ID