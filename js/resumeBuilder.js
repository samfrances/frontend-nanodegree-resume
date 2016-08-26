var work = [
	{
		"employer": "",
		"title": "",
		"location": "",
		"dates": "",
		"description": ""
	},
	{
		"employer": "",
		"title": "",
		"location": "",
		"dates": "",
		"description": ""
	}
]

var projects = [
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

if ( 'skills' in bio && bio[ 'skills' ].length > 0 ) {
	$( '#header' ).append( HTMLskillsStart );
	var $skills = $( '#skills' );
	bio[ 'skills' ].forEach(function( skill ) {
		$skills.append( HTMLskills.replace( '%data%', skill ) )
	});
}