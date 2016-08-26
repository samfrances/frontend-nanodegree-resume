var LIPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec " +
            "nec erat efficitur, fermentum risus sit amet, consequat orci. " +
            "Sed quis condimentum leo. Pellentesque ac vestibulum ante. Nunc " +
            "cursus tincidunt nunc, hendrerit semper justo consectetur nec. " +
            "Proin efficitur mi eu justo porttitor scelerisque. Sed " +
            "tincidunt tempor sem, et vulputate orci imperdiet sit amet. " +
            "Nullam venenatis faucibus sem vitae posuere.";

var work = {
    "jobs": [
        {
            "employer": "Wonka Industries",
            "title": "Full-Stack Developer",
            "location": "Munich",
            "dates": "2010-2011",
            "description": LIPSUM
        },
        {
            "employer": "E-Corp",
            "title": "Web Developer",
            "location": "New York",
            "dates": "2011-2014",
            "description": LIPSUM
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        },
        {
            "title": "",
            "dates": "",
            "description": "",
            "images": []
        }
    ]
}



var bio = {
    "name": "",
    "role": "",
    "welcomeMessage": "",
    "contacts": {
        "mobile": "",
        "email": "",
        "github": "",
        "twitter": "",
        "location": ""
    },
    "skills": ["Python", "Javascript"],
    "biopic": "",
}

var education = {
    "schools": [
        {
            "name": "",
            "location": "",
            "degree": "",
            "majors": [],
            "dates": "",
            "url": ""
        },
        {
            "name": "",
            "location": "",
            "degree": "",
            "majors": [],
            "dates": "",
            "url": ""
        }
    ]
}

if ( 'skills' in bio && bio.skills.length > 0 ) {
    $( '#header' ).append( HTMLskillsStart );
    var $skills = $( '#skills' );
    bio[ 'skills' ].forEach(function( skill ) {
        $skills.append( HTMLskills.replace( '%data%', skill ) )
    });
}

function displayWork() {
    work.jobs.forEach(function( job ) {

        // Create work entry
        $( '#workExperience' ).append( HTMLworkStart );

        // Cache work entry
        var $workentry = $( '.work-entry:last' );

        // Create title line
        var employer = HTMLworkEmployer.replace( '%data%', job.employer );
        var title = HTMLworkTitle.replace( '%data%', job.title );

        $workentry.append( employer + title );

        // Add  work dates
        $workentry.append( HTMLworkDates.replace( "%data%", job.dates ) );

        // Add location
        $workentry.append( HTMLworkLocation.replace( "%data%", job.location ) );

        // Add description
        $workentry.append( HTMLworkDescription.replace( "%data%", job.description) );
    });
}

displayWork();

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});
