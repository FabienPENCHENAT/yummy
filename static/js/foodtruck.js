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
			"name" : "So Piad'in",
			"type" : "burrito",
			"com" : "",
			"num" : "06 64 51 64 05",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "true",
			"day" : "Vendredi",
			"website" : "http://www.sopiadin.fr/"
		}, {
			"name" : "Kumquat",
			"type" : "chinese-food",
			"com" : "",
			"num" : "",
			"address" : "37 Chemin des Ramassiers",
			"vegan" : "",
			"day" : "every day",
			"website" : "https://www.kumquat-blagnac.fr"
		}]
	},{
		"location" : "Basso Cambo",
		"foodtruck" : [{
			"name" : "Perritos",
			"type" : "hot-dog",
			"com" : "",
			"num" : "07 71 87 10 72",
			"address" : "7 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Lundi",
			"website" : "www.perritos.fr"
		},{
			"name" : "Les Mecs au Camion",
			"type" : "burger",
			"com" : "",
			"num" : "07 85 66 75 16",
			"address" : "5 rue Paulin Talabot 31100",
			"vegan" : "",
			"day" : "Lundi",
			"website" : "http://lesmecsaucamion.com"
		},{
			"name" : "Chez Papilles",
			"type" : "burger",
			"com" : "",
			"num" : "06 62 46 20 98",
			"address" : "7 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Mardi",
			"website" : "https://www.chezpapilles.fr"
		},{
			"name" : "Neko's",
			"type" : "noodles",
			"com" : "",
			"num" : "06 31 05 63 74",
			"address" : "12 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Mardi",
			"website" : "https://nekosasianfood-56.webself.net"
		}, {
			"name" : "O Tuk Tuk",
			"type" : "chinese-food",
			"com" : "",
			"num" : "07 62 33 64 76",
			"address" : "9 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Mercredi",
			"website" : "https://otuktuk.fr"
		}, {
			"name" : "Le Chant des papilles",
			"type" : "menu",
			"com" : "",
			"num" : "06 31 67 66 87",
			"address" : "7 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Mercredi",
			"website" : ""
		}, {
			"name" : "L'epicurieux",
			"type" : "burger",
			"com" : "",
			"num" : "07 82 31 92 09",
			"address" : "7 Rue Michel Labrousse",
			"vegan" : "true",
			"day" : "Jeudi",
			"website" : "https://www.lepicurieux.net"
		}, {
			"name" : "O Bey",
			"type" : "shawarma",
			"com" : "",
			"num" : "07 83 59 97 19",
			"address" : "12 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Jeudi",
			"website" : "https://o-bey.fr"
		}, {
			"name" : "Pass' a la maison",
			"type" : "burger",
			"com" : "",
			"num" : "06 71 33 44 14",
			"address" : "7 rue paulin talabot",
			"vegan" : "",
			"day" : "Vendredi",
			"website" : "http://www.passalamaison.fr"
		}, {
			"name" : "O Camion des saveurs",
			"type" : "burger",
			"com" : "",
			"num" : "06 80 22 48 84",
			"address" : "9 Rue Michel Labrousse",
			"vegan" : "",
			"day" : "Vendredi",
			"website" : "http://www.ocamiondessaveurs.fr"
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

		content += '<div class="col-sm-12 col-md-6 my-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div>';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="col-1 mr-2 vertical">' + v["day"] + '</div>';
		content += '<div class="col mr-2">';
		content += '<div class="mb-1 ml-2"><span class="text-uppercase title-name ">' + v["name"] + '</span></div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1 ml-2"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light ml-2"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		content += '<div class="website mt-1 ml-2"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		content += '</div>'
		content += '<div class="col-auto type">';
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
		
		content += '<div class="col-sm-12 col-md-6 my-2">';
		content += '<div class="card border-left-primary h-100 py-2">';
		content += '<div>';
		content += '<div class="row no-gutters align-items-center">';
		content += '<div class="col-1 mr-2 vertical">' + v["day"] + '</div>';
		content += '<div class="col mr-2">';
		content += '<div class="mb-1 ml-2"><span class="text-uppercase title-name ">' + v["name"] + '</span></div>';
		if(v["num"] != "") {
			content += '<div class="text-light mt-1 ml-2"><i class="fas fa-mobile-alt mr-2"></i>' + v["num"] + '</div>';
		}
		if(v["address"] != "") {
			content += '<div class="text-light ml-2"><i class="fas fa-map-marker-alt mr-2"></i>' + v["address"] + '</div>';
		}
		content += '<div class="website mt-1 ml-2"><a href="' + v["website"] + '" target="_blank">' + v["website"] +'</a></div>';
		content += '</div>'
		content += '<div class="col-auto type">';
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