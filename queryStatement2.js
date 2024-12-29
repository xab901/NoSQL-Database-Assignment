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

//Filter out student documents with a major in Computer Science.
db.student.aggregate([
    {
        $match: { major: "Computer Science" }
    }
]);

//Filter out teachers with a teaching style of 'Lecture based' and specify the fields to display (except _id).
db.teachers.aggregate([
    {
        $match: { teachingStyle: "Lecture - based" }
    },
    {
        $project: {
            _id: 0,
            teacherID: 1,
            name: 1,
            teachingStyle: 1,
            expertiseArea: 1
        }
    }
]);

//Query teachers with teaching style of "Lecture based", limit the display of the first 4 items and specify the display fields
db.teachers.aggregate([
    {
        $match: { teachingStyle: "Lecture - based" }
    },
    {
        $project: {
            _id: 0,
            teacherID: 1,
            name: 1,
            teachingStyle: 1,
            expertiseArea: 1
        }
    },
    {
        $limit: 4
    }
]);

//Count students whose major is Compiuter Science
db.student.aggregate([
    {
        $match: { major: "Computer Science" }
    },
    {
        $count: "computerScienceStudentCount"
    }
]);

//count students in each major
db.student.aggregate([
    {
        $group: {
            _id: "$major",
            studentCount: { $sum: 1 }
        }
    }
]);

//Calculate the average, minimum, and maximum credits of course credits based on difficulty levels
db.course.aggregate([
    {
        $group: {
            _id: "$difficultyLevel",
            averageCredit: { $avg: "$credit" }, // avg credit
            minCredit: { $min: "$credit" },// min credit
            maxCredit: { $max: "$credit" }// max credit
        }
    }
]);

//Count the number of course registrations with an "A" grade
db.student.aggregate([
    {
        $unwind: "$enrollments"
    },
    {
        $match: { "enrollments.grade": "A" }
    },
    {
        $count: "gradeACourseEnrollmentsCount"
    }
]);

//Search for teacher information with a teaching style of "Lecture based" and perform projection operation, 
// then output the results to a new collection.
db.teachers.aggregate([
    {
        $match: { teachingStyle: "Lecture - based" }
    },
    {
        $project: {
            _id: 0,
            teacherID: 1,
            name: 1,
            teachingStyle: 1,
            expertiseArea: 1
        }
    },
    {
        $out: "lecture_based_teachers"
    }
]);

//Add a 'taughtCourse' field for each teacher document which meets the condition
db.lecture_based_teachers.aggregate([
    {
        $lookup: {
            from: "courses",
            localField: "teacherID",
            foreignField: "teacherID",
            as: "taughtCourses"
        }
    }
]);

//----------------The following query statement involves updating and deleting, and cannot be executed directly---------------------
//----------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------
/*
db.student.deleteOne({studentID: 5});

db.student.deleteMany({major: "Law"});

db.course.updateOne({ courseID: 101 },{ $set: { difficultyLevel: "Advanced" } });

db.course.updateMany({ difficultyLevel: "Beginner" },{ $inc: { credit: 1 } });

db.course.updateOne({ courseID: 102 },{ $pop: { prerequisite: 1 } });

db.student.updateOne(
    { studentID: 1 },
    {$set: {"enrollments.$[element].grade": "A+"}},
    {arrayFilters: [{ "element.courseRef": "c001" }]}
);

*/
