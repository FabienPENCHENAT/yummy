var valMS = getData();

$(document).ready(function() {
	
	//Menu
	var menu = ''
	$.each(valMS, function(index, v) {
		menu += '<option value="' + v["location"] + '">' + v["location"] + '</option>';
	});
	$('#selectLocation').append(menu);
	
	// content
	var content = '<div class="mx-4 d-block">';
	$.each(valMS[0]["foodtruck"], function(index, v) {
		
		if(index % 2 == 0) {
			content += '<div class="row justify-content-center">';
		}

		content += '<div class="col-12 col-lg-6 my-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div>';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="mr-2 vertical';
		
		if(v["day"] == day()) {
			content += ' today';
		}
		
		content += '">' + v["day"] + '</div>';
		content += '<div class="col-8">';
		content += '<div class="mb-1 ml-2"><span class="text-uppercase title-name ">' + v["name"] + '</span></div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1 ml-2"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light ml-2"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		content += '<div class="website mt-1 ml-2"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		content += '</div>'
		content += '<div class="col-3 type">';
		content += '<div class="toto ' + v["type"] + '"></div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		
		if(index % 2 == 1) {
			content += '</div>';
		}
	});
	content += '</div>';
	$('.foodtruck-content').append(content);
});

function updateFootruck() {
	var e = document.getElementById("selectLocation");
	var selected = e.options[e.selectedIndex].value;
	var tmp = valMS.filter(function(x){ return x.location == selected; });
	var foodtrucks = tmp[0]["foodtruck"];
	
	var content = '<div class="mx-4 d-block">';
	$.each(foodtrucks, function(index, v) {
		
		if(index % 2 == 0) {
			content += '<div class="row justify-content-center">';
		}
		
		content += '<div class="col-12 col-lg-6 my-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div>';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="mr-2 vertical';
		
		if(v["day"] == day()) {
			content += ' today';
		}
		
		content += '">' + v["day"] + '</div>';
		content += '<div class="col-8">';
		content += '<div class="mb-1 ml-2"><span class="text-uppercase title-name ">' + v["name"] + '</span></div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1 ml-2"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light ml-2"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		if(v["website"] != "") {
			content += '<div class="website mt-1 ml-2"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		}
		content += '</div>'
		content += '<div class="col-3 type">';
		content += '<div class="toto ' + v["type"] + '"></div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		content += '</div>';
		
		if(index % 2 == 1) {
			content += '</div>';
		}
	});
	content += '</div>';
	$('.foodtruck-content').html(content);
}

function day() {
	var weekdays = new Array( "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
	var today = new Date(); 
	return weekdays[today.getDay()];
}