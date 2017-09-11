
function addProject(url) {

	document.getElementById("show-add-project").click();
	document.getElementById("project-url").value = url;
	document.getElementById("add-project-by-url").click();
}
var xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'https://api.scratch.mit.edu/proxy/featured', true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var response = xmlhttp.responseText;
	    var parsedJSON = JSON.parse(response).curator_top_projects;
	    for (var i =0; i < 5; i++) {
	    addProject("https://scratch.mit.edu/projects/" + parsedJSON[i].id);}
        }}
