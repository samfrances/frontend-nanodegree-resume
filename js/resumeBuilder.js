var name = 'Sam Frances';
var role = 'Web Developer';
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole).prepend(formattedName);