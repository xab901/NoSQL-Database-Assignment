db.student.insertMany([
  {
    _id: "s001",
    studentID: 1,
    firstName: "John",
    lastName: "Robinson",
    email: "jrobinson@nuist.edu.cn",
    phoneNumber: "12345678901",
    enrollments: [
      { courseRef: "c001", grade: "A", date: "2024-12-01" },
      { courseID: "c002", grade: "B", date: "2024-9-14" },
    ],
  },
  {
    _id: "s002",
    studentID: 2,
    firstName: "Christopher",
    lastName: "Walker",
    email: "cwalker@setu.ie",
    phoneNumber: "12345678905",
    enrollments: [
      { courseRef: "c007", grade: "C", date: "2024-8-27" },
      { courseRef: "c006", grade: "D", date: "2023-7-17" },
      { courseRef: "c005", grade: "C", date: "2023-3-25" },
    ],
  },
  {
    _id: "s003",
    studentID: 3,
    firstName: "Robert",
    lastName: "Smith",
    email: "rsmith@setu.ie",
    phoneNumber: "12345678906",
    enrollments: [
      { courseRef: "c001", grade: "A", date: "2024-5-13" },
      { courseRef: "c003", grade: "A", date: "2024-5-29" },
    ],
  },
  {
    _id: "s004",
    studentID: 4,
    firstName: "Emily",
    lastName: "Taylor",
    email: "etaylor@setu.ie",
    phoneNumber: "12345678907",
    enrollments: [
      { courseRef: "c008", grade: "C", date: "2016-8-13" },
      { courseRef: "c010", grade: "B", date: "2017-9-17" },
    ],
  },
  {
    _id: "s005",
    studentID: 5,
    firstName: "Thomas",
    lastName: "Clark",
    email: "tclark@setu.ie",
    phoneNumber: "12345678908",
    enrollments: [
      { courseRef: "c011", grade: "A", date: "2016-2-1" },
      { courseRef: "c013", grade: "C", date: new Date() },
    ],
  },
  {
    _id: "s006",
    studentID: 6,
    firstName: "Sarah",
    lastName: "Lewis",
    email: "slewis@setu.ie",
    phoneNumber: "12345678909",
    enrollments: [
      { courseRef: "c015", grade: "B", date: new Date() },
      { courseRef: "c016", grade: "D", date: new Date() },
    ],
  },
  {
    _id: "s007",
    studentID: 7,
    firstName: "Laura",
    lastName: "Allen",
    email: "lallen@setu.ie",
    phoneNumber: "1234567810",
    enrollments: [
      { courseRef: "c017", grade: "A", date: "2018-3-6" },
      { courseRef: "c018", grade: "B", date: new Date() },
      { courseRef: "c019", grade: "B", date: new Date() },
    ],
  },
  {
    _id: "s008",
    studentID: 8,
    firstName: "Richard",
    lastName: "Harris",
    email: "rharris@setu.ie",
    phoneNumber: "086-263-2951",
    enrollments: [
      { courseRef: "c001", grade: "B", date: "2019-4-7" },
      { courseRef: "c002", grade: "B", date: "2019-11-23" },
      { courseRef: "c003", grade: "C", date: new Date() },
    ],
  },
  {
    _id: "s009",
    studentID: 9,
    firstName: "John",
    lastName: "Brown",
    email: "jbrown@setu.ie",
    phoneNumber: "086-592-8143",
    enrollments: [
      { courseRef: "c004", grade: "A", date: "2017-5-16" },
      { courseRef: "c005", grade: "D", date: "2020-6-7" },
      { courseRef: "c006", grade: "C", date: "2021-8-15" },
      { courseRef: "c007", grade: "A", date: new Date() },
    ],
  },
  {
    _id: "s010",
    studentID: 10,
    firstName: "David",
    lastName: "Jackson",
    email: "djackson@setu.ie",
    phoneNumber: "086-673-4821",
    enrollments: [
      { courseRef: "c008", grade: "C", date: new Date() },
      { courseRef: "c009", grade: "A", date: "2021-1-21" },
      { courseRef: "c010", grade: "A", date: "2022-2-10" },
    ],
  },
  {
    _id: "s011",
    studentID: 11,
    firstName: "Thomas",
    lastName: "Martinez",
    email: "tmartinez@setu.ie",
    phoneNumber: "086-943-8165",
    enrollments: [
      { courseRef: "c011", grade: "B", date: "2023-9-16" },
      { courseRef: "c012", grade: "C", date: "2021-8-7" },
      { courseRef: "c013", grade: "C", date: new Date() },
    ],
  },
  {
    _id: "s012",
    studentID: 12,
    firstName: "Sophia",
    lastName: "Martin",
    email: "smartin@setu.ie",
    phoneNumber: "086-394-1265",
    enrollments: [
      { courseRef: "c014", grade: "A", date: "2024-8-1" },
      { courseRef: "c015", grade: "B", date: new Date() },
      { courseRef: "c016", grade: "C", date: "2017-4-27" },
    ],
  },
  {
    _id: "s013",
    studentID: 13,
    firstName: "William",
    lastName: "Miller",
    email: "wmiller@setu.ie",
    phoneNumber: "086-481-6293",
    enrollments: [
      { courseRef: "c017", grade: "A", date: "2023-9-1" },
      { courseRef: "c018", grade: "A", date: new Date() },
      { courseRef: "c019", grade: "A", date: new Date() },
      { courseRef: "c020", grade: "A", date: new Date() },
    ],
  },
]);

db.course.insertMany([
  // 文学艺术类 (3个)
  { _id: "c001", courseID: 101, courseName: "Creative Writing", credit: 2 },
  { _id: "c002", courseID: 102, courseName: "Art History", credit: 3 },
  {
    _id: "c003",
    courseID: 103,
    courseName: "Introduction to Film Studies",
    credit: 3,
  },

  // 理工类 (4个)
  { _id: "c004", courseID: 201, courseName: "Linear Algebra", credit: 3 },
  { _id: "c005", courseID: 202, courseName: "Data Structures", credit: 4 },
  {
    _id: "c006",
    courseID: 203,
    courseName: "Artificial Intelligence",
    credit: 3,
  },
  {
    _id: "c007",
    courseID: 204,
    courseName: "Physics for Engineers",
    credit: 4,
  },

  // 历史类 (3个)
  { _id: "c008", courseID: 301, courseName: "World History", credit: 3 },
  { _id: "c009", courseID: 302, courseName: "Medieval Europe", credit: 3 },
  {
    _id: "c010",
    courseID: 303,
    courseName: "History of Modern China",
    credit: 3,
  },

  // 心理类 (3个)
  {
    _id: "c011",
    courseID: 401,
    courseName: "Introduction to Psychology",
    credit: 3,
  },
  { _id: "c012", courseID: 402, courseName: "Cognitive Psychology", credit: 3 },
  { _id: "c013", courseID: 403, courseName: "Abnormal Psychology", credit: 3 },

  // 法律类 (3个)
  { _id: "c014", courseID: 501, courseName: "Introduction to Law", credit: 3 },
  { _id: "c015", courseID: 502, courseName: "Constitutional Law", credit: 3 },
  {
    _id: "c016",
    courseID: 503,
    courseName: "Criminal Justice System",
    credit: 3,
  },

  // 商业类 (4个)
  { _id: "c017", courseID: 601, courseName: "Business Management", credit: 4 },
  { _id: "c018", courseID: 602, courseName: "Marketing Principles", credit: 3 },
  { _id: "c019", courseID: 603, courseName: "Financial Accounting", credit: 3 },
  { _id: "c020", courseID: 604, courseName: "Entrepreneurship", credit: 4 },
]);

db.teachers.insertMany([
  {
    _id: "t001",
    teacherID: 1,
    name: "Dr. Organ",
    email: "jorgan@setu.ie",
    phoneNumber: "086-263-2951",
    courseInfo: [
      {
        courseRef: "c004", // referencing
        semester: "Fall 2024",
      },
      {
        courseRef: "c007",
        semester: "Spring 2025",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c004",
        semester: "Fall 2025",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c007",
        semeseter: "Spring 2023",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c006",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c003",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c003",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2023",
      },
      {
        courseRef: "c002",
        semester: "Fall 2024",
      },
    ],
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
        semester: "Fall 2023",
      },
      {
        courseRef: "c009",
        semester: "Spring 2024",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c010",
        semester: "Spring 2023",
      },
    ],
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
        semester: "Spring 2023",
      },
      {
        courseRef: "c010",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c015",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c014",
        semester: "Spring 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c016",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c012",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c011",
        semester: "Spring 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c013",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c018",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c017",
        semester: "Spring 2023",
      },
    ],
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
        semester: "Spring 2024",
      },
      {
        courseRef: "c019",
        semester: "Fall 2023",
      },
    ],
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
        semester: "Fall 2024",
      },
      {
        courseRef: "c017",
        semester: "Spring 2023",
      },
    ],
  },
]); // teachers中对course的引用，和student一样，都使用了自定义的_id

db.department.insertMany([
  {
    _id: "d001",
    departmentID: 1,
    name: "Department of Computer Science",
    head: "Prof. Organ",
    courses: [201, 202, 203, 204], // referencing
    teachers: [1, 2, 3, 4], // referencing
  },
  {
    _id: "d002",
    departmentID: 2,
    name: "Department of Art and Literature",
    head: "David Canny",
    courses: [101, 102, 103],
    teachers: [5, 6, 7],
  },
  {
    _id: "d003",
    departmentID: 3,
    name: "Department of History",
    head: "Lance Robert",
    courses: [301, 302, 303],
    teachers: [8, 9, 10],
  },
  {
    _id: "d004",
    departmentID: 4,
    name: "Department of Law",
    head: "Kevin Morgan",
    courses: [501, 502, 503],
    teachers: [11, 12, 13],
  },
  {
    _id: "d005",
    departmentID: 5,
    name: "Department of Psychology",
    head: "James Holland",
    courses: [401, 402, 403],
    teachers: [14, 15, 16],
  },
  {
    _id: "d006",
    departmentID: 6,
    name: "Department of Business Administration",
    head: "Sansa White",
    courses: [601, 602, 603, 604],
    teachers: [17, 18, 19, 20],
  },
]); // department中对course,teachers的引用，使用了手动设置的ID
