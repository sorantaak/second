let courses = {
	courseName: "Advanced Js",
	studentLimit: 30,
	studentCount: 0,
	checkAvailability: function (courseSize) {
		let leftCount = this.studentLimit - this.studentCount;
		return courseSize <= leftCount;
	},
};
console.log(courses.checkAvailability(50));
