var bio = {
	
	"name" : "Scott McWilliams",
	"role" : "Full Stack Web Developer",
	"welcomeMessage" : "Welcome to my Resume!",
	"contactInfo" : {
		"email" : "scottymac64@hotmail.com",
		"twitter" : "@macengr",
		"blog" : "http://macengr.wordpress.com",
		"portfolio" : "codepen.io",
		"github" : "macengr"
	},
	"location" : "Pittsburgh, PA",
	"biopic" : "images/later.jpg",
	"skills" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS", "SQL"]	
}

var work = {
	"jobs" : [ 
	{
	"employer" : "Home Depot",
	"title" : "Cashier",
	"location" : "Pittsburgh, PA",
	"dates" : "Aug 2015 - present",
	"description" : "later"
},
{
	"employer" : "Google via Synergis Staffing",
	"title" : "Contract Position - Product Specialist",
	"location" : "Pittsburgh, PA",
	"dates" : "Sep 2013 - Oct 2014",
	"description" : "later"
},
{
	"employer" : "Siemens",
	"title" : "Contract Position - Product Specialist",
	"location" : "Pittsburgh, PA",
	"dates" : "Feb 2012 - Dec 2012",
	"description" : "later"
},
{
	"employer" : "Alco Parking",
	"title" : "Lot Attendant",
	"location" : "Pittsburgh, PA",
	"dates" : "Dec 2010 - Jun 2013",
	"description" : "later"
},
{
	"employer" : "Emerson Power and Water Solutions",
	"title" : "Product Manager",
	"location" : "Pittsburgh, PA",
	"dates" : "Oct 2007 - Feb 2010",
	"description" : "later"
},
{
	"employer" : "Compunetix",
	"title" : "Account Executive",
	"location" : "Monroeville, PA",
	"dates" : "Nov 2005 - Oct 2007",
	"description" : "later"
},
{
	"employer" : "Elliott Company",
	"title" : "Project Engineer, Applications Engineer",
	"location" : "Jeannette, PA",
	"dates" : "Jun 1996 - Jul 2005",
	"description" : "later"
}
]}

var education = {
	"schools": [{
		"name": "Community College of Allegheny County",
		"majors": "Software Development Certificate",
		"location": "Monroeville, PA",
		"degree dates": "Dec 2014",
		"url" : "TBA"
	}, {
		"name": "University of Pittsburgh",
		"majors": "Masters in Business Administration",
		"location": "Pittsburgh, PA",
		"degree dates": "Jun 2000",
		"url" : "TBA"
	}, {
		"name": "State University of New York at Buffalo",
		"majors": "Bachelor of Science in Mechanical Engineering",
		"location": "Buffalo, NY",
		"degree dates": "Jun 1994",
		"url" : "TBA"
	}],
	"online courses": [{
		"school": "FreeCodeCamp",
		"title": "Full Stack JavaScript Developer",
		"dates": "Jun 2017",
		"url" : "TBA"
	}]
}

var projects = {}



if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var j = 0; j < bio.skills.length; j++) {
			console.log(bio.skills.length);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[j]);
		console.log(bio.skills[j]);
		$("#skills").append(formattedSkill);
	};
}

for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + " " + formattedTitle;
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedEmployerTitle);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
	
}
