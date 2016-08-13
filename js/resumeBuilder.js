var name = "Scott McWilliams";
var role = "Full Stack Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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
	"biopic" : "images/8150967.gif",
	"skills" : ["HTML", "CSS", "JavaScript", "jQuery", "AngularJS", "SQL"]	
}

function displayBio() {
var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
$("#topContacts").append(formattedEmail);
var formattedBlog = HTMLblog.replace("%data%", bio.contactInfo.blog);
$("#topContacts").append(formattedBlog);
var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
$("#topContacts").append(formattedGithub);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
$("#topContacts").append(formattedTwitter);
var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#topContacts").append(formattedLocation);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcome);
var formattedBioImage = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioImage);

if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for (var j = 0; j < bio.skills.length; j++) {
			console.log(bio.skills.length);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[j]);
		console.log(bio.skills[j]);
		$("#skills").append(formattedSkill);
	};
}


$("#footerContacts").append(formattedEmail); 
$("#footerContacts").append(formattedBlog);
$("#footerContacts").append(formattedGithub);
$("#footerContacts").append(formattedLocation);

}


var work = {
	"jobs" : [ 
	{
	"employer" : "Home Depot",
	"title" : "Cashier",
	"location" : "Pittsburgh, PA",
	"dates" : "Aug 2015 - present",
	"description" : ""
},
{
	"employer" : "Google via Synergis Staffing",
	"title" : "Contract Position - Product Specialist",
	"location" : "Pittsburgh, PA",
	"dates" : "Sep 2013 - Oct 2014",
	"description" : "<ul><li>Built expertise on a wide variety of products through thorough research and analysis of data from multiple channels. Quickly learned and mastered new processes and technical applications.</li><li>Identified and corrected problems in the knowledge repository, and used a variety of configuration tools to improve the presentation of product data.</li><li>Used editorial skills to organize information, write, and publish high quality online content according to requirements regarding order, clarity, conciseness, style, and terminology.</li><li>Responsible for editing, standardizing, and suggesting changes to materials prepared by others.</li><li>Worked to normalize brand and product data throughout Google Shopping to ensure a consistent and pleasant experience for users.</li></ul>"
},
{
	"employer" : "Siemens",
	"title" : "Contract Position - Product Specialist",
	"location" : "Pittsburgh, PA",
	"dates" : "Feb 2012 - Dec 2012",
	"description" : "<ul><li>Supported Product Management department, particularly for controls, of Medium Voltage Motor Drives.</li><li>Project lead for new Cyber Security initiative researching NERC CIP</li><li>Researched and analyzed service costs and future exposure for existing product.</li><li>Lead team to add features to new controller.</li></ul>"
},
{
	"employer" : "Alco Parking",
	"title" : "Lot Attendant",
	"location" : "Pittsburgh, PA",
	"dates" : "Dec 2010 - Jun 2013",
	"description" : ""
},
{
	"employer" : "Emerson Power and Water Solutions",
	"title" : "Product Manager",
	"location" : "Pittsburgh, PA",
	"dates" : "Oct 2007 - Feb 2010",
	"description" : "<ul><li>Was responsible as product manager for design, packaging, implementation and marketing of Controllers and I/O for Power Plant and Water / Wastewater plants control systems.</li><li>Developed new products based on customer feedback. Customers included FPL, Dominion, Southern Company, other US companies as well as various Indian and Chinese utilities.</li><li>Worked with Dominion Clover on development of I/O system project.</li><li>Involved in cost reduction efforts on existing products.</li><li>Supported field sales technical queries.</li></ul>"
},
{
	"employer" : "Compunetix",
	"title" : "Account Executive",
	"location" : "Monroeville, PA",
	"dates" : "Nov 2005 - Oct 2007",
	"description" : "<ul><li>Wrote technical proposals, researched new markets, assisted in systems demonstrations as well as in testing.</li><li>Made cold calls to various government and private federal contractors to develop new business.</li><li>Made presentations to customers and interfaced with them on quotes.</li></ul>"
},
{
	"employer" : "Elliott Company",
	"title" : "Applications Engineer",
	"location" : "Jeannette, PA",
	"dates" : "Jun 2000 - Jul 2005",
	"description" : "<ul><li>Supported international sales force by determining acceptable price levels for bids and quotations and answering technical questions</li><li>Created cost buildups to determine margin levels and scope of supply, resulting in bookings of approximately $15 million of equipment per year.</li><li>Kept sales force informed of market developments and tracked competitors&apos; actions.</li><li>Determined new product requirements and communicated these to Product Engineering Department for implementation.</li><li>Developed sales tools for field salespeople such as division website, brochures, and CD-ROM with pricing and product descriptions. Developed CD-ROM in house saving $25,000 in consultant fees.</li><li>Represented Company at national trade shows.</li><li>Assisted in training field sales force in product line.</li><li>Prepared quotations for customers in various field offices as necessary.</li><li>Developed automated pricing program helping to reduce leadtimes by 60 percent and saving nearly $100,000 in programming consulting fees.</li><li>Worked with independent sales representatives to sell to customers, involving presentations as well as preparing quotes.</li><li>Prepared of quotes for customers including reviewing specifications from API (611/612) as well as customers&apos; own specifications.</li><li></li><li></li></ul>"
},
{
	"employer" : "Elliott Company",
	"title" : "Project Engineer",
	"location" : "Jeannette, PA",
	"dates" : "Jun 1996 - Jun 2000",
	"description" : "<ul><li>Primary Point of Contact for customers and subvendors.</li><li>Managed 10 to 12 projects (typically valued from $100K to $500K) concurrently for both domestic and international customers.</li><li>Responsible for overall design and quality and meeting customer specifications.</li><li>Selected parts and purchased auxiliaries, also reviewed supplier drawings and data to ensure compliance with company and customer specifications</li><li>Sized water cooling and lube oil systems, inlet air filters and aftercoolers</li><li>Supervised construction and testing, and handled customer witnesses.</li><li>Expedited change orders and assisted sales force.</li><li>Selected for Value Analysis Team to reduce product production costs by $10,000.</li><li>Wrote manual and trained Chinese Project Engineers for Joint Venture in Shanghai, China and made trip to Italy for meetings with customer.</li></ul>"
}
]}

var education = {
	"schools": [{
		"name": "Community College of Allegheny County",
		"degree": "Certificate",
		"majors": "Software Development",
		"location": "Monroeville, PA",
		"degreeDates": "Dec 2014",
		"url" : "TBA"
	}, {
		"name": "University of Pittsburgh",
		"degree": "Masters",
		"majors": "Business Administration",
		"location": "Pittsburgh, PA",
		"degreeDates": "Jun 2000",
		"url" : "TBA"
	}, {
		"name": "State University of New York at Buffalo",
		"degree": "Bachelor of Science",
		"majors": "Mechanical Engineering",
		"location": "Buffalo, NY",
		"degreeDates": "Jun 1994",
		"url" : "TBA"
	}],
	"onlineCourses": [{
		"school": "FreeCodeCamp",
		"title": "Full Stack JavaScript Developer",
		"dates": "Jun 2017",
		"url" : "https://www.freecodecamp.com/"
	},
	{
		"school": "UC Davis via Coursera",
		"title": "Geographic Information Systems (GIS) Specialization",
		"dates": "Dec 2016",
		"url" : "https://www.coursera.org/specializations/gis"
	}
	]
}

var projects = {}




function displayWork() {

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
}

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if(projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

function displaySchools() {

	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].degreeDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedName);
		$(".education-entry:last").append(formattedDegree);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedMajor);
		$(".education-entry:last").append(formattedLocation);
	}
	$(".education-entry:last").append(HTMLonlineClasses);
	for(course in education.onlineCourses) {
		var formattedTitle = HTMLonlineTitle.replace("%data%",
			education.onlineCourses[course].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%",
			education.onlineCourses[course].school);
		var formattedDates = HTMLonlineDates.replace("%data%",
			education.onlineCourses[course].dates);
		var formattedUrl = HTMLonlineURL.replace("%data%",
			education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedTitle + formattedSchool);	
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedUrl);
	}
	
}

displayBio();
displaySchools();
displayWork();
displayProjects();





$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x,y);
});



function inName() {
  var name = window.name;
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  
  return name[0] +" "+ name[1];	
}

var name = $("#name").text();

$('#main').append(internationalizeButton);

function locationizer(work_obj) {
	var locationArray = [];
	
	for(job in work_obj.jobs)  {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
}

$("#mapDiv").append(googleMap);






//footerContacts