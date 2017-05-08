
//constructor
function Misquad(nombre,apellido,edad,hobbies,hobbies2,hobbies3,avatar){
	this.nombre = nombre;
	this.apellido = apellido;
	this.edad = edad;
	this.hobbies = hobbies;
	this.hobbies2 = hobbies2;
	this.hobbies3 = hobbies3;
	this.avatar = avatar;
}
//
var fran = new Misquad("Francisca","Ojeda",28,"Roller derby", "Lettering", "Cocinar Pizza","assets/images/avataresSquad-03.png");
var jose = new Misquad("María José","Pozo",31,"Bailar","Comer","Dormir","assets/images/avataresSquad-01.png");
var cote = new Misquad("María José","Rodriguez",32,"Ver series","Bailar","Leer","assets/images/avataresSquad-09.png");
var caro = new Misquad("Carolina","Tapia",27,"Trekking", "leer" , "tejer","assets/images/avataresSquad-06.png");
var cami = new Misquad("Camila","Saez",24,"Origami","Viajar","Comprar cosas en Aliexpress","assets/images/avataresSquad-04.png");
var val = new Misquad("Valentina","Saavedra",26,"Medicina autogestiva","Hacer magias","Hacerse tatuajes","assets/images/avataresSquad-05.png");
var marion = new Misquad("Marion","Castillo",29,"Caminar","Hacer series","Pintar","assets/images/avataresSquad-02.png");
var anto = new Misquad("Antonia","Cerda",23,"Diseñar", "Ver series", "Lettering","assets/images/avataresSquad-08.png");
var belen = new Misquad("Belen"," Recabal",29,"Andar en Bici", "Netflix","Empanadas","assets/images/avataresSquad-07.png");


var arrusuario = [];

arrusuario.push(cote,jose,caro,cami,fran,val,marion,anto, belen);

arrusuario.forEach(function(ele){
	var divlistasquad = document.getElementById("listasquad");
	var info = ("<img src=\""+ele.avatar+"\"><br><b>Nombre: </b>"+ ele.nombre + " " +
		ele.apellido+ "<br>" + "<b>Edad: </b>"+  ele.edad+ "<br>"+ "<b>Hobbies: </b> <i>" + "<ul>" + "<li>" + ele.hobbies+ "</li>"+"<li>" +ele.hobbies2+ 
		"</li>"+ "<li>"+ ele.hobbies3 + "</li></ul></i><br></b>"); 
	divlistasquad.innerHTML += info;
})