//find all documents in the student collection 
db.student.find();

//find all student whose major is "Computer Science"
db.student.find({ major: "Computer Science" });

//find all courses whose credit is 3 and course "c006" is its prerequisite
db.course.find({ credit: 3, prerequisite: "c006" });

//Search for students with student IDs between 2 and 4 (including 2 and 4) and a grade of A in a certain course (assuming course ID is c005)
db.student.find({ studentID: { $gte: 2, $lte: 4 }, "enrollments.courseID": "c005", "enrollments.grade": "A" });

//Search for students with the surname Davis and hobbies that include both Painting and Gaming
db.student.find({ lastName: "Davis", hobbies: { $all: ["Painting", "Gaming"] } });

//Only retrieve the department name and office location fields
db.department.find({}, { name: 1, officeLocation: 1, _id: 0 });

//Only obtain the name (firstName and lastName) fields of the student with student ID 1
db.student.findOne({ studentID: 1 }, { firstName: 1, lastName: 1, _id: 0 });

//To count the number of prerequisite courses that include c001
db.course.find({ prerequisite: "c001" }).count();

//Sort students based on their grade in a particular course (let's say the course with _id c001)
db.student.find({ "enrollments.courseRef": "c001" }).sort({ "enrollments.grade": 1 });

//Sort courses based on credit in ascending order, then courseID in descending order
db.course.find().sort({ credit: 1, courseID: -1 });

//Limit result to 3 returns
db.student.find().limit(3);

//Find teachers whose teaching style is Interactive or Discussion based
db.teachers.find({ teachingStyle: { $in: ["Interactive", "Discussion-based"] } });

//Find students whose hobbies include both Reading and Sports
db.student.find({ hobbies: { $all: ["Reading", "Sports"] } });

//Find students whose hobbies include Reading and whose grades in the course (assuming course ID is c001) are A or A -.
db.student.find({
    $and: [
        { hobbies: "Reading" },
        {
            enrollments: {
                $elemMatch: {
                    grade: { $in: ["A", "A -"] }
                }
            }
        }
    ]
});

//Find teachers with teaching styles of Interactive or teaching courses (course ID is c001)
db.teachers.find({
    $or: [
        { teachingStyle: "Interactive" },
        { "courseInfo.courseRef": "c001" }
    ]
});

//Find courses in the prerequisite courses that contain c001 and have credits greater than or equal to 3
db.course.find({
    prerequisite: {
        $elemMatch: {
            $eq: "c001"
        }
    },
    credit: { $gte: 3 }
});