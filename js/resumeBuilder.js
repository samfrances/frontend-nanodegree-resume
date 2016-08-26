var work = [
	{
		"employer": "",
		"title": "",
		"location": "",
		"dates": {
			"start": "",
			"end": ""
		},
		"description": ""
	},
	{
		"employer": "",
		"title": "",
		"location": "",
		"dates": {
			"start": "",
			"end": ""
		},
		"description": ""
	}
]

var projects = [
	{
		"title": "",
		"dates": {
			"start": "",
			"end": ""
		},
		"description": "",
		"images": []
	},
	{
		"title": "",
		"dates": {
			"start": "",
			"end": ""
		},
		"description": "",
		"images": []
	}
]

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

var education = [
	{
		"name": "",
		"location": "",
		"degree": "",
		"majors": [],
		"dates": {
			"start": "",
			"end": ""
		},
		"url": ""
	},
	{
		"name": "",
		"location": "",
		"degree": "",
		"majors": [],
		"dates": {
			"start": "",
			"end": ""
		},
		"url": ""
	}
]

if ( 'skills' in bio && bio[ 'skills' ].length > 0 ) {
	$( '#header' ).append( HTMLskillsStart );
	var $skills = $( '#skills' );
	bio[ 'skills' ].forEach(function( skill ) {
		$skills.append( HTMLskills.replace( '%data%', skill ) )
	});
}