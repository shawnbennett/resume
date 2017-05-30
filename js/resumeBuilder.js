/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*coursework
 */
// $("#main").append(["Shawn Bennett"]);
// var firstname = "Shawn";
// var age = 40;
// console.log(firstname);
// var awesomeThoughts = "I am Shawn Bennett and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
// console.log(funThoughts);
//var name = "Shawn Bennett";
// var formattedName = HTMLheaderName.replace("%data%", name);
// var role = ("Front End Developer");
// var formattedRole = HTMLheaderRole.replace("%data%", role);
// $("#header").append(formattedName);
// $("#header").append(formattedRole);
/*creating the user bio where data will be placed both the footer and header of the resume
 */
var bio = {
    "name": "Shawn Bennett",
    "role": "Telecommunications, Programming",
    "contacts": {
        "mobile": "317-442-0235",
        "email": "shawn.j.bennett@att.com",
        "github": "shawnbennett",
        "location": "Indianapolis, IN"
    },
    "biopic": "images/resume_pic.jpg",
    "welcomeMessage": "Welcome and thank you for your time",
    "skills": ["Technician", " Field Manager", " Center Manager ", " Trainer", " Cheif of Staff", " System Support",
        " Methods & Procedures", " Technology Support", " Basic Programming", " xDSL", " IPTV", " Satellite"
    ],
    display: function() {
        var formattedname = HTMLheaderName.replace("%data%", bio.name);
        var formattedrole = HTMLheaderRole.replace("%data%", bio.role);

        $("#header").prepend(formattedname, formattedrole);

        var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedmobile, formattedemail, formattedgithub, formattedlocation);
        $("#footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedlocation);

        var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").append(formattedbioPic, formattedwelcomeMessage);
        
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
        	var formattedskills = HTMLskills.replace("%data%", skill);
        	$("#skills").append(formattedskills);
        });

		// for (skills in bio.skills) {
  //       	var formattedskills = HTMLskills.replace("%data%", bio.skills[skills]);
  //       $("#skills").append(formattedskills);
        
    }
};
// $("#main").append(bio.name);

/*defining the previous work experience
 */
var work = {
    "jobs": [{
            "employer": "AT&T",
            "title": "Sr. Specialist-Technical Process/Quality",
            "location": "Indianapolis, IN",
            "dates": "2005-Current",
            "description": "Cheif of Staff Support for a District level organization. Directly supporting the field Director, Area Managers, Field Managers, and unionized Technicians"

        },
        {
            "employer": "AT&T",
            "title": "Manager Network Services",
            "location": "Indianapolis, IN",
            "dates": "2005-2005",
            "description": "Led a team of field technicians who performed the installationa and maintenance of POTS, xDSL, 911, and cable"
        },
        {
            "employer": "AT&T",
            "title": "Manager Dispatch Center",
            "location": "Indianapolis, IN",
            "dates": "2003-2005",
            "description": "Led a team of Mainenance Administrators who monitored the work volume and dispatch control over 150 field technicians in Southern Indiana"
        },
        {
            "employer": "AT&T",
            "title": "Manager Network Services",
            "location": "Crown Point, IN",
            "dates": "2001-2003",
            "description": "Led a team of field technicians who performed the installationa and maintenance of POTS, xDSL, 911, and cable"
        },
        {
            "employer": "SBC Communications",
            "title": "Customer Service Specialist",
            "location": "Austin, TX",
            "dates": "1997-2001",
            "description": "Field technician performing the installation, maintenance, and repair of xDSL, POTS, cable, and 911 telcom services"
        },
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            var formattedemployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedtitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedEmployerTitle = formattedemployer + ' ' + formattedtitle;
            var formattedworkLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedworkDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedworkDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedEmployerTitle, formattedworkLocation, formattedworkDates, formattedworkDescription);
        });
    }

};

/*this added an array of location where you have worked
 */
// function locationizer(work_obj) {
//     var locationArray = [];

//     for (job in work_obj.jobs) {
//         var newLocation = work_obj.jobs[job].location;
//         locationArray.push(newLocation);
//     }

//     return locationArray;
// }

// console.log(locationizer(work));

/*creates projects that have been worked on and will be displayed
 */
var projects = {
    "projects": [{
            "title": "Contengency Planning",
            "dates": "'07, '09, '12, '14, '15, '17",
            "description": "Organize and administer the contingency planning preperation of an AT&T field organization",
            "images": ["images/ATT.jpg", "images/risk.jpg"]
        },

        // {
        //     "title": "",
        //     "dates": "",
        //     "description": "",
        //     "images": ""
        // }

    ],
    display: function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            var formattedprojectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedprojectDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedprojectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedprojectTitle, formattedprojectDates, formattedprojectDescription);

            project.images.forEach(function(image) {
            	var formattedprojectImage = HTMLprojectImage.replace("%data%", image);
            	$(".project-entry:last").append(formattedprojectImage);
            });
            
        }); 
    }  
};

/*creates the education information, both school and online
 */
var education = {
    "schools": [{
        "name": "High School Diploma",
        "location": "Middletown, IN",
        "degree": "General Studies",
        "majors" : ["N/A"],
        "dates": "1994",
        "url": "http://example.com"

    }],

    "onlineClasses": [{
            "title": "Intro to Programming NanoDegree",
            "school": "Udacity",
            "dates": "2017",
            "url": "https://classroom.udacity.com/me"

        },
        {
            "title": "Agile Program & Project Mgmt",
            "school": "AT&T Personal Learning Experience",
            "dates": "2016",
            "url": "https://ple.web.att.com/#/home"

        },
        {
            "title": "Agile Boot Camp",
            "school": "AT&T Personal Learning Experience",
            "dates": "2016",
            "url": "https://ple.web.att.com/#/home"

        },
        {
            "title": "API for Project Managers",
            "school": "AT&T Personal Learning Experience",
            "dates": "2015",
            "url": "https://ple.web.att.com/#/home"

        },
        {
            "title": "Big Data Boot Camp",
            "school": "AT&T Personal Learning Experience",
            "dates": "2015",
            "url": "https://ple.web.att.com/#/home"

        },
        {
            "title": "Mobile First Bronze",
            "school": "AT&T Personal Learning Experience",
            "dates": "2015",
            "url": "https://ple.web.att.com/#/home"

        },
        {
            "title": "TKT - Technicial Knowledge Test",
            "school": "AT&T Special Services",
            "dates": "2000",
            "url": "https://www.doesnthavealink.com"

        },
    ],
    display: function() {
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var formattedschoolName = HTMLschoolName.replace('%data%', school.name);
            var formattedschoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            var formattedschoolDates = HTMLschoolDates.replace('%data%', school.dates);
            var formattedlocation = HTMLschoolLocation.replace('%data%', school.location);
            var formattedschoolMajor = HTMLschoolMajor.replace('%data%', school.majors);
            $('.education-entry:last').append(formattedschoolName + formattedschoolDegree, formattedschoolDates, formattedlocation, formattedschoolMajor);
        });
        $('#education').append(HTMLonlineClasses);
        education.onlineClasses.forEach(function(onlineclass) {
            $('#education').append(HTMLschoolStart);
            var formattedonlineTitle = HTMLonlineTitle.replace('%data%', onlineclass.title);
            var formattedonlineSchool = HTMLonlineSchool.replace('%data%', onlineclass.school);
            var formattedonlineDates = HTMLonlineDates.replace('%data%', onlineclass.dates);
            var formattedonlineURL = HTMLonlineURL.replace('%data%', onlineclass.url);
            $('.education-entry:last').append(formattedonlineTitle + formattedonlineSchool, formattedonlineDates, formattedonlineURL);
        });
    }
};

/*this adds the click location in the console
 */
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

/*this added the button at the very bottom of the webpage that will make the last name all caps. Known as the international
 */
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

/*activates the google map where you have lived and worked
 */
$("#mapDiv").append(googleMap);



bio.display();
work.display();
projects.display();
education.display();





/*coursework
 */

// $("#main").append(work["position"]);
// $("#main").append(education.name);

// if(bio.skills.length > 0) {

// 	$("#header").append(HTMLskillsStart);

// 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
// 	$("#skills").append(formattedSkill);
// 	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
// 	$("#skills").append(formattedSkill);

// }

// for (job in work.jobs) {
// 	$("#workExperience").append(HTMLworkStart);

// 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
// 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
// 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

// 	$(".work-entry:last").append(formattedEmployerTitle);
// }