var work = {
	"jobs": [
		{
			"employer": "Company A",
			"title": "Developer",
			"location": "",
			"dates": "",
			"description": ""
		},
		{
			"employer": "Company B",
			"title": "Programmer",
			"location": "",
			"dates": "",
			"description": ""
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

for ( var i in work.jobs ) {
	var job = work.jobs[i];
	$( '#workExperience' ).append( HTMLworkStart );
	var employer = HTMLworkEmployer.replace( '%data%', job.employer );
	var title = HTMLworkTitle.replace( '%data%', job.title );
	$( '.work-entry:last' ).append( employer + title );
}