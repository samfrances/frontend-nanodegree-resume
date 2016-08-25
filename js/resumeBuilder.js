var name = 'Sam Frances';
var role = 'Web Developer';
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole).prepend(formattedName);

var bio = {
	name: 'Sam Frances',
	role: "Web Developer",
	contactInfo: 'sam@samfrances.uk',
	pictureURL: 'images/fry.jpg',
	welcomeMessage: 'Welcome!',
	skills: ['Python', 'Javascript'],
}

var bioFormatted = Object.keys(bio).map(function(key) {
	if (key === 'pictureURL') {
		return '';
	}
	return "<li>" + key + ": " + bio[key] + "</li>";
}).join('');

$('#main').append('<img src="' + bio.pictureURL +'" alt="Me">')
		  .append("<ul>" + bioFormatted + "</ul>");

var work = {
	employer: 'Big Company',
	position: 'Web Developer',
	yearsWorked: 4,
	city: 'Metropolis',
}

var education = {
	name: 'Gotham University',
	years: 3,
	city: 'Gotham City',
}

$('#main').append("<p>" + work["position"] + "</p>")
          .append("<p>" + education.name + "</p>");