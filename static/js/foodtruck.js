var valMS = [{
		"location" : "Ramassiers",
		"foodtruck" : [ {
			"name" : "Miam Thai",
			"type" : "chinese-food",
			"com" : "",
			"num" : "07 71 57 85 41",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "",
			"day" : "Lundi",
			"website" : "https://www.miamthai.com"
		}, {
			"name" : "Madame en route",
			"type" : "menu",
			"com" : "",
			"num" : "06 33 73 69 38",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "true",
			"day" : "Mardi",
			"website" : "https://www.madameenroute.com"
		}, {
			"name" : "Le CamiHong",
			"type" : "noodles",
			"com" : "",
			"num" : "07 83 60 21 24",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "",
			"day" : "Mercredi",
			"website" : "https://www.camihong.com"
		}, {
			"name" : "L'epicurieux",
			"type" : "burger",
			"com" : "",
			"num" : "07 82 31 92 09",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "true",
			"day" : "Jeudi",
			"website" : "https://www.lepicurieux.net"
		}, {
			"name" : "Kumquat",
			"type" : "chinese-food",
			"com" : "",
			"num" : "",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "",
			"day" : "Tous les jours",
			"website" : "https://www.kumquat-blagnac.fr"
		}]
	},{
		"location" : "Basso Cambo",
		"foodtruck" : [{
			"name" : "Perritos",
			"type" : "hot-dog",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Lundi",
			"website" : ""
		},{
			"name" : "Les Mecs au Camion",
			"type" : "burger",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Lundi",
			"website" : ""
		},{
			"name" : "Chez Papilles",
			"type" : "",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Mardi",
			"website" : ""
		},{
			"name" : "Neko's",
			"type" : "noodles",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Mardi",
			"website" : ""
		}, {
			"name" : "O Tuk Tuk",
			"type" : "chinese-food",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Mercredi",
			"website" : ""
		}, {
			"name" : "Le Chant des papilles",
			"type" : "menu",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Mercredi",
			"website" : ""
		}, {
			"name" : "L'epicurieux",
			"type" : "burger",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "true",
			"day" : "Jeudi",
			"website" : "https://www.lepicurieux.net"
		}, {
			"name" : "O Bey",
			"type" : "shawarma",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Jeudi",
			"website" : ""
		}, {
			"name" : "Pass' a la maison",
			"type" : "burger",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Vendredi",
			"website" : ""
		}, {
			"name" : "O Camion des saveurs",
			"type" : "burger",
			"com" : "",
			"num" : "",
			"address" : "",
			"vegan" : "",
			"day" : "Vendredi",
			"website" : ""
		}]
	}
], html;

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

		content += '<div class="col m-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div class="card-body">';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="col mr-2">';
		content += '<div class="mb-1">';
		content += '<span class="text-uppercase title-name ">' + v["name"] + '</span>';
		content += '<span class="title-day "> - ' + v["day"] + '</span>';
		content += '</div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		content += '<div class="website mt-1"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		content += '</div>'
		content += '<div class="col-auto w-25">';
		content += '<div class="' + v["type"] + '"></div>';
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
		
		content += '<div class="col m-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div class="card-body">';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="col mr-2">';
		content += '<div class="mb-1">';
		content += '<span class="text-uppercase title-name ">' + v["name"] + '</span>';
		content += '<span class="title-day "> - ' + v["day"] + '</span>';
		content += '</div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		content += '<div class="website mt-1"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		content += '</div>'
		content += '<div class="col-auto w-25">';
		content += '<div class="' + v["type"] + '"></div>';
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