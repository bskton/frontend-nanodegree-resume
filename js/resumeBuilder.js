/**
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
	name: "Ilya Levin",
	role: "Front-End Web Developer",
	contacts: {
		mobile: "+7(999)777-55-33",
		email: "bskton@gmail.com",
		github: "bskton",
		twitter: "@i_bskton",
		blog: "http://blog.bskton.ru",
		location: "Vladivostok"
	},
	welcomeMessage: "Hello World!",
	skills: [
		"Codding", "Testing", "Project Management", "Solving Problems", "Teaching", "Dealing with People"
	],
	picture: "images/avatar.jpg",
	display: function() {
		var $header = $("#header");
		$header.prepend(HTMLheaderRole.replace("%data%", this.role));
		$header.prepend(HTMLheaderName.replace("%data%", this.inName(this.name)));
		var $topContacts = $("#topContacts");
		$topContacts.append(HTMLmobile.replace("%data%", this.contacts.mobile));
		$topContacts.append(HTMLemail.replace("%data%", this.contacts.email));
		$topContacts.append(HTMLtwitter.replace("%data%", this.contacts.twitter));
		$topContacts.append(HTMLgithub.replace("%data%", this.contacts.github));
		$topContacts.append(HTMLblog.replace("%data%", this.contacts.blog));
		$topContacts.append(HTMLlocation.replace("%data%", this.contacts.location));
		$header.append(HTMLbioPic.replace("%data%", this.picture));

		this.displaySkills();
	},
	inName: function(name) {
		var nameParts = name.trim().split(" ");
		name = nameParts[0][0].toUpperCase() + nameParts[0].slice(1).toLowerCase() + " "
			+ nameParts[1].toUpperCase();

		return name;
	},
	displaySkills: function() {
		if (this.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			bio.skills.forEach(function(skill) {
				$("#skills").append(HTMLskills.replace("%data%", skill));
			});
		}
	}
};

var work = {
	jobs: [{
		"position": "Full-Stack Web Developer",
		"employer": "Astra",
	 	"years": "May 2010 - Present",
	 	"location": "Vladivostok",
	 	"description": "Developing multi-user applications within a (SOA) service orientated architecture. Building up and enhancing integration within existing systems. Monitoring website and platform performance. Developing enterprise CMS systems. Carrying out tasks related to full software development life-cycle. "
	 },{
	 	"position": "Front-End Web Developer",
		"employer": "Fast",
	 	"years": "October 2007 - April 2010",
	 	"location": "Moscow",
	 	"description": "Responsible for working closely with the product management team to organise the web presence of clients, and to develop rich user interface for them. Developing and maintaining the front end functionality of websites. Writing cross-browser compliant XHTML, CSS & JavaScript."
	},{
	 	"position": "Web Developer",
		"employer": "Fast",
	 	"years": "September 2005 - September 2007",
	 	"location": "Novosibirsk",
	 	"description": "Build customised websites to the highest specifications. Work closely with other developers and professionals. Providing technical support to end users. Performed maintenance and updates to existing client Web sites."
	}],
	display: function() {
		this.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", job.employer) 
				+ HTMLworkTitle.replace("%data%", job.position));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", job.years));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", job.location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", job.description));
		});
	}
};

var projects = {
	list: [{
		"name": "Monastirev.rf",
		"date": "2015",
		"description": "Health Care online store.",
		"images": [
			"images/projects/monastirev/home.png",
			"images/projects/monastirev/catalog.png"
		]
	},{
		"name": "Rentmv.ru",
		"date": "2010",
		"description": "Real estate site that gives you the local scoop about homes for sale.",
		"images": [
			"images/projects/rentmv/home.png",
			"images/projects/rentmv/page.png"
		]
	},{
		"name": "Tulikivi",
		"date": "2007",
		"description": "Tulikivi Soapstone Fireplace & Bakeovens web site.",
		"images": [
			"images/projects/tulikivi/home.png",
			"images/projects/tulikivi/catalog.png"
		]
	}],
	display: function() {
		this.list.forEach(function(project) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", project.name));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", project.date));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", project.description));
			project.images.forEach(function(image) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", image));
			});
		});
	}
};

var education = {
	"schools": [{
 		"name": "Far Eastern Federal University",
 		"degree": "Masters",
 		"years": "2005",
 		"location": "Vladivostok",
 		"major": "CS"
 	},{
 		"name": "Vladivostok Hight School №23",
 		"degree": "BA",
 		"years": "2000",
 		"location": "Vladivostok",
 		"major": "CS"
 	}],
 	display: function() {
 		this.schools.forEach(function(school) {
	 		$("#education").append(HTMLschoolStart);
	 		$(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name) 
	 			+ HTMLschoolDegree.replace("%data%", school.degree));
	 		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", school.years));
	 		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", school.location));
	 		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", school.major));
 		});
 	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);