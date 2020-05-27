
// Creacion de colecciones

db.createCollection("administrators");
db.createCollection("operators");
db.createCollection("passengers");
db.createCollection("nodes");
db.createCollection("flights");
db.createCollection("shops");
db.createCollection("stops");


db.administrators.insert({
	id: "admin",
	name: "Josep M. Roig",
	email: "jmroig@gmail.com",
	password: "admin",
	job: "Jefe"
	});

db.administrators.insert({
	id: "admin-vuelo",
	name: "Paulo Carvalho",
	email: "pmcarvalho@gmail.com",
	password: "admin-vuelo",
	job: "Controlador vuelos"
	});

db.administrators.insert({
	id: "admin-coche",
	name: "Jordi Garcia",
	email: "jlgarcia@gmail.com",
	password: "admin-coche",
	job: "Controlador coches"
	});


db.operators.insert({
	id: "operador1",
	name: "Daniel Ortiz",
	email: "dortiz@gmail.com",
	birthdate: new Date("1985-02-10T16:00:00Z"),
	phone: "+34 923568426",
	password: "operador1",
	airline: "Swissport"
	});

db.operators.insert({
	id: "operador2",
	name: "Isabella Avila",
	email: "isabellavila@gmail.com",
	birthdate: new Date("1975-12-06T16:00:00Z"),
	phone: "+34 916718544",
	password: "m1n2b3v2",
	airline: "Swissport"
	});

db.operators.insert({
	id: "operador3",
	name: "Omar Acevedo",
	email: "oacevedo@gmail.com",
	birthdate: new Date("1983-02-11T16:00:00Z"),
	phone: "+34 952507059",
	password: "qpwoeiru",
	airline: "Swissport"
	});

db.operators.insert({
	id: "operador4",
	name: "Lucian Holguin",
	email: "lholguin@gmail.com",
	birthdate: new Date("1965-21-01T16:00:00Z"),
	phone: "+34 978556217",
	password: "%VAuNhw6n",
	airline: "Swissport"
	});

db.operators.insert({
	id: "operador5",
	name: "Rodrigo Morales",
	email: "rmorales@gmail.com27375263",
	birthdate: new Date("1957-27-02T16:00:00Z"),
	phone: "+34 927375263",
	password: "cOSr6BTT",
	airline: "Qatar airways"
	});



db.passengers.insert({
	id: 56764564,
	name: "Antonio Delgado",
	url_image: "https://es.wikipedia.org/wiki/Cristiano_Ronaldo#/media/Archivo:Cristiano_Ronaldo_2018.jpg",
	type_user: 0,
	email: "adelgado@gmail.com",
	birthdate: new Date("1993-01-26T16:00:00Z"),
	phone: "+34 9839565956",
	password: "lIMsd5NVgs",
	country: "Spain",
	City: "Barcelona",
	location_x:1,
	location_y:1,
	notices: [{
		id: "1",
		notification: "Tu vuelo A25 con direccion a sidney se ha retrasado 30 minutos",
		date: new Date("2020-01-05T16:00:00Z")
		}],
	likes: [{
		type: "Ropa"
	}]
	});

db.passengers.insert({
	id: "3344699",
	name: "Jordi Gasol",
	url_image: "https://es.wikipedia.org/wiki/Lionel_Messi#/media/Archivo:Lionel_Messi_20180626.jpg",
	type_user: 0,
	email: "jgasol@gmail.com",
	birthdate: new Date("1999-01-02T16:00:00Z"),
	phone: "+34 681339900",
	password: "sA3iskps",
	country: "Spain",
	City: "Barcelona",
	location_x:14,
	location_y:55,
	notices: [{
		id: "1",
		notification: "Tu vuelo A25 con direccion a sidney se ha retrasado 30 minutos",
		date: new Date("2020-01-05T16:00:00Z")
		}],
	likes: [{
		type: "Ocio"
	}]
	});


db.passengers.insert({
	id: "45364678",
	name: "Joaquin Montes Salom",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "jmsalom@gmail.com",
	birthdate: new Date("1989-11-12T16:00:00Z"),
	phone: "+34 678345231",
	password: "joaquin123",
	country: "Spain",
	City: "Madrid",
	location_x:12,
	location_y:34,
	notices: [{
		id: "1",
		notification: "Tu vuelo A25 con direccion a nueva york se ha retrasado 1 hora",
		date: new Date("2020-02-10T16:00:00Z")
		}],
	likes: [{
		type: "DutyFree"
	}]
	});

db.passengers.insert({
	id: "3344949",
	name: "Pau Molla Freud",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "pmfreud@gmail.com",
	birthdate: new Date("2000-12-12T16:00:00Z"),
	phone: "+34 612347834",
	password: "aW12sB234",
	country: "Spain",
	City: "Barcelona",
	location_x:124,
	location_y:85
	});

db.passengers.insert({
	id: "0957832",
	name: "Earl Harrison",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "eharrison@gmail.com",
	birthdate: new Date("1980-05-03T16:00:00Z"),
	phone: "+34 681223987",
	password: "aYsTsEvRsG1",
	country: "EEUU",
	City: "California",
	location_x:13,
	location_y:87,
	notices: [{
		id: "1",
		notification: "Tu vuelo QB15 con direccion a Paris se ha retrasado 4 horas",
		date: new Date("2020-05-15T16:00:00Z")
		}]
	});

db.passengers.insert({
	id: "4334499",
	name: "Harald Haaland",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "hhaaland@gmail.com",
	birthdate: new Date("1985-04-12T16:00:00Z"),
	phone: "+34 613457728",
	password: "opSpauHS",
	country: "Norway",
	City: "Oslo",
	location_x:21,
	location_y:54
	});
db.passengers.insert({
	id: "9275399",
	name: "Fernando Montilla ",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "fmontilla@gmail.com",
	birthdate: new Date("1996-21-07T16:00:00Z"),
	phone: "+34 696662419",
	password: "Ir5$BLSBI",
	country: "Spain",
	City: "Murcia",
	location_x:23,
	location_y:40
	});
db.passengers.insert({
	id: "454104",
	name: "Alex Delgado",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "adelgado@gmail.com",
	birthdate: new Date("1995-02-03T16:00:00Z"),
	phone: "+34 689571706",
	password: "UH$XkdsJA",
	country: "Spain",
	City: "Orcera",
	location_x:34,
	location_y:54
	});
db.passengers.insert({
	id: "909736885",
	name: "Daniela Zabala",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "dzabala@gmail.com",
	birthdate: new Date("1975-21-04T16:00:00Z"),
	phone: "+34 627356731",
	password: "c^D1Ipj@V",
	country: "Spain",
	City: "Jaen",
	location_x:32,
	location_y:43
	});
db.passengers.insert({
	id: "91488945",
	name: "Leonardo Acelas",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "lacelas@gmail.com",
	birthdate: new Date("1955-30-09T16:00:00Z"),
	phone: "+34 688506876",
	password: "mRNb*zdwD",
	country: "Spain",
	City: "Cartagena",
	location_x:18,
	location_y:45
	});
db.passengers.insert({
	id: "863077323",
	name: "David Blanco",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "dblanco@gmail.com",
	birthdate: new Date("1966-22-01T16:00:00Z"),
	phone: "+34 634669817",
	password: "lUfSUJ%cD",
	country: "Spain",
	City: "Caceres",
	location_x:67,
	location_y:89
	});
db.passengers.insert({
	id: "459131612",
	name: "David Gonzalez",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "dgonzalez@gmail.com",
	birthdate: new Date("1956-21-04T16:00:00Z"),
	phone: "+34 667865334",
	password: "nM*RFdsCQ",
	country: "Spain",
	City: "Alicantes",
	location_x:67,
	location_y:23
	});
db.passengers.insert({
	id: "641939123",
	name: "Andres Ardila",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "aardila@gmail.com",
	birthdate: new Date("1987-34-11T16:00:00Z"),
	phone: "+34 613617879",
	password: "E%a4luw&3",
	country: "Spain",
	City: "Lugo",
	location_x:19,
	location_y:21
	});
db.passengers.insert({
	id: "92235512",
	name: "Lyney Gamboa",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "lgamboa@gmail.com",
	birthdate: new Date("1994-05-03T16:00:00Z"),
	phone: "+34 639333410",
	password: "6b*hUoBjc",
	country: "Spain",
	City: "Teruel",
	location_x:45,
	location_y:136
	});
db.passengers.insert({
	id: "24233721",
	name: "Felipe Gonzalez",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "fgonzalez@gmail.com",
	birthdate: new Date("1945-21-03T16:00:00Z"),
	phone: "+34 622335145",
	password: "Do!b8ouAU",
	country: "Spain",
	City: "Valencia",
	location_x:98,
	location_y:2
	});
db.passengers.insert({
	id: "55662534",
	name: "Kevin Ferney",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 0,
	email: "kferney@gmail.com",
	birthdate: new Date("1965-21-11T16:00:00Z"),
	phone: "+34 680106448",
	password: "hHdW5$4mP",
	country: "Spain",
	City: "Palencia",
	location_x:122,
	location_y:98
	});
db.passengers.insert({
	id: "798807564",
	name: "Andrea Anaya",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "anaya@gmail.com",
	birthdate: new Date("1989-21-02T16:00:00Z"),
	phone: "+34 678822284",
	password: "%vvMEjMOj",
	country: "Spain",
	City: "Barcelona",
	location_x:136,
	location_y:18
	});
db.passengers.insert({
	id: "50842722",
	name: "Steven Gutierrez",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "sgutierrez@gmail.com",
	birthdate: new Date("1995-24-10T16:00:00Z"),
	phone: "+34 689598836",
	password: "tnKC!ZEGY",
	country: "Spain",
	City: "Tarragona",
	location_x:136,
	location_y:177
	});
db.passengers.insert({
	id: "55922345",
	name: "Jordi Steve",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "jsteve@gmail.com",
	birthdate: new Date("1985-04-25T16:00:00Z"),
	phone: "+34 665965681",
	password: "Fs&R#uZyA",
	country: "Spain",
	City: "Olot",
	location_x:19,
	location_y:135
	});
db.passengers.insert({
	id: "27866405",
	name: "Juana Ramirez",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "sramirez@gmail.com",
	birthdate: new Date("1998-21-11T16:00:00Z"),
	phone: "+34 6",
	password: "",
	country: "Spain",
	City: "",
	location_x:169,
	location_y:54
	});
db.passengers.insert({
	id: "3776535",
	name: "Sofia Mejia",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "smejia@gmail.com",
	birthdate: new Date("1987-21-02T16:00:00Z"),
	phone: "+34 697459725",
	password: "n&G5^W2J6",
	country: "Spain",
	City: "Toledo",
	location_x:12,
	location_y:67
	});
db.passengers.insert({
	id: "52975855",
	name: "Jesus Poveda",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "jpoveda@gmail.com",
	birthdate: new Date("1967-30-11T16:00:00Z"),
	phone: "+34 685784078",
	password: "xPKNq#5rf",
	country: "Spain",
	City: "Granada",
	location_x:12,
	location_y:87
	});
db.passengers.insert({
	id: "5759742",
	name: "Mariana Quezada",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "mquezada@gmail.com",
	birthdate: new Date("1998-04-11T16:00:00Z"),
	phone: "+34 682020747",
	password: "5Q&MfNQrz",
	country: "Spain",
	City: "Albacete",
	location_x:48,
	location_y:169
	});
db.passengers.insert({
	id: "9685135",
	name: "Alec Plata",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "aplata@gmail.com",
	birthdate: new Date("1987-12-03T16:00:00Z"),
	phone: "+34 663907119",
	password: "PRr$$ubhC",
	country: "Spain",
	City: "Robledo",
	location_x:45,
	location_y:23
	});
db.passengers.insert({
	id: "84036968",
	name: "Sebastian Muñoz",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "smuñoz@gmail.com",
	birthdate: new Date("1999-23-09T16:00:00Z"),
	phone: "+34 688154474",
	password: "oG%ha3GJa",
	country: "Spain",
	City: "Madrilejos",
	location_x:123,
	location_y:156
	});
db.passengers.insert({
	id: "196653456",
	name: "Santiago Salazar",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "salazae@gmail.com",
	birthdate: new Date("2001-02-01T16:00:00Z"),
	phone: "+34 637744289",
	password: "A$kGzET48",
	country: "Spain",
	City: "Salamanca",
	location_x:17,
	location_y:183
	});

db.passengers.insert({
	id: "13875264",
	name: "Santiago Camacho",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "scamacho@gmail.com",
	birthdate: new Date("2002-02-12T16:00:00Z"),
	phone: "+34 641233389",
	password: "!Kn#0lYxu",
	country: "Spain",
	City: "Badajoz",
	location_x:146,
	location_y:68
	});

db.passengers.insert({
	id: "2798036",
	name: "Alfred Casat",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "acasat@gmail.com",
	birthdate: new Date("1999-02-12T16:00:00Z"),
	phone: "+34 666235791",
	password: "Tp4z$bBZk",
	country: "Spain",
	City: "Reus",
	location_x:21,
	location_y:45
	});
db.passengers.insert({
	id: "1322771",
	name: "Alicia Boned",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "aboned@gmail.com",
	birthdate: new Date("1987-01-01T16:00:00Z"),
	phone: "+34 618260422",
	password: "ZnHx*t79e",
	country: "Spain",
	City: "Girona",
	location_x:59,
	location_y:16
	});
db.passengers.insert({
	id: "7687251",
	name: "Laura Borras",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "lborras@gmail.com",
	birthdate: new Date("1976-21-01T16:00:00Z"),
	phone: "+34 622352420",
	password: "t*wL4GdrT",
	country: "Spain",
	City: "Lleida",
	location_x:178,
	location_y:180
	});
db.passengers.insert({
	id: "5768218",
	name: "Albert Rivera",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "arivera@gmail.com",
	birthdate: new Date("1978-02-03T16:00:00Z"),
	phone: "+34 622874917",
	password: "IpK%42rbS",
	country: "Spain",
	City: "Barcelona",
	location_x:12,
	location_y:23
	});
db.passengers.insert({
	id: "9869276",
	name: "Aleix Bove",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "above@gmail.com",
	birthdate: new Date("1998-21-12T16:00:00Z"),
	phone: "+34 697970304",
	password: "Iu&WVSDaE",
	country: "Spain",
	City: "Manresa",
	location_x:6,
	location_y:125,
	notices: [{
		id: "1",
		notification: "Tu vuelo B8556 con direccion a Madrid se ha retrasado 20 minutos",
		date: new Date("2020-01-05T16:00:00Z")
		}]
	});
db.passengers.insert({
	id: "7321242",
	name: "Adria Asensio",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "asensio@gmail.com",
	birthdate: new Date("1984-24-02T16:00:00Z"),
	phone: "+34 668598829",
	password: "IbxI%W2CE",
	country: "Spain",
	City: "Viladecans",
	location_x:145,
	location_y:68
	});
db.passengers.insert({
	id: "43190471",
	name: "Andreu Bueno",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "abueno@gmail.com",
	birthdate: new Date("1998-12-01T16:00:00Z"),
	phone: "+34 683539967",
	password: "83VD&oDjN",
	country: "Spain",
	City: "Tortosa",
	location_x:56,
	location_y:68
	});
db.passengers.insert({
	id: "58143545",
	name: "Angels Buixeda",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 1,
	email: "abuixeda@gmail.com",
	birthdate: new Date("1992-23-09T16:00:00Z"),
	phone: "+34 692492789",
	password: "XZi&GX*4!",
	country: "Spain",
	City: "Olot",
	location_x:13,
	location_y:164
	});
db.passengers.insert({
	id: "21104665",
	name: "Antoni Calbet",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "acalbet@gmail.com",
	birthdate: new Date("1998-02-09T16:00:00Z"),
	phone: "+34 642467912",
	password: "&ve7UbPR6",
	country: "Spain",
	City: "Salt",
	location_x:12,
	location_y:145
	});
db.passengers.insert({
	id: "93986565",
	name: "Bernat Camats",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "bcamats@gmail.com",
	birthdate: new Date("1997-21-01T16:00:00Z"),
	phone: "+34 625853479",
	password: "S%!sEo1HF",
	country: "Spain",
	City: "Salt",
	location_x:53,
	location_y:63
	});
db.passengers.insert({
	id: "56549225",
	name: "Blai Campi",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "bcampi@gmail.com",
	birthdate: new Date("1996-24-11T16:00:00Z"),
	phone: "+34 661944470",
	password: "iccPe#r@F",
	country: "Spain",
	City: "Sitges",
	location_x:111,
	location_y:122
	});
db.passengers.insert({
	id: "65730465",
	name: "Manuel Camps",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "mcamps@gmail.com",
	birthdate: new Date("1998-28-11T16:00:00Z"),
	phone: "+34 672351160",
	password: "B2&lZmkQf",
	country: "Spain",
	City: "Olot",
	location_x:36,
	location_y:2
	});
db.passengers.insert({
	id: "1269646",
	name: "Carla Candini",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "ccandini@gmail.com",
	birthdate: new Date("1997-11-01T16:00:00Z"),
	phone: "+34 691842722",
	password: "FsT$k!ifx",
	country: "Spain",
	City: "Martorell",
	location_x:78,
	location_y:23
	});
db.passengers.insert({
	id: "55637395",
	name: "Didac Capdevila",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "dcapdevila@gmail.com",
	birthdate: new Date("1994-02-01T16:00:00Z"),
	phone: "+34 621321340",
	password: "F^BhxU#zO",
	country: "Spain",
	City: "Valls",
	location_x:12,
	location_y:34
	});
db.passengers.insert({
	id: "1185084",
	name: "Elvira Carmona",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "ecarmona@gmail.com",
	birthdate: new Date("2001-02-01T16:00:00Z"),
	phone: "+34 660578870",
	password: "hN32^XMBG",
	country: "Spain",
	City: "Manlleu",
	location_x:63,
	location_y:15
	});
db.passengers.insert({
	id: "33693264",
	name: "Esteve Casanes",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "ecasanes@gmail.com",
	birthdate: new Date("1998-02-10T16:00:00Z"),
	phone: "+34 615814291",
	password: "Nt#CwSB3s",
	country: "Spain",
	City: "vila-seca",
	location_x:132,
	location_y:56
	});
db.passengers.insert({
	id: "70526666",
	name: "Eulalia Catala",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "ecatala@gmail.com",
	birthdate: new Date("2001-10-08T16:00:00Z"),
	phone: "+34 626556196",
	password: "iq!LUlQJF",
	country: "Spain",
	City: "Amposta",
	location_x:65,
	location_y:34,
	notices: [{
		id: "1",
		notification: "Tu vuelo A25 con direccion a sidney se ha retrasado 30 minutos",
		date: new Date("2020-01-05T16:00:00Z")
		}]
	});
db.passengers.insert({
	id: "4199295",
	name: "Emilia Cifra",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 2,
	email: "ecifra@gmail.com",
	birthdate: new Date("1993-22-11T16:00:00Z"),
	phone: "+34 636861470",
	password: "o$EjLq#hE",
	country: "Spain",
	City: "Masnou",
	location_x:41,
	location_y:44
	});
db.passengers.insert({
	id: "62115345",
	name: "Dolors Cluet",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 3,
	email: "dcluet@gmail.com",
	birthdate: new Date("1965-11-11T16:00:00Z"),
	phone: "+34 650045114",
	password: "Fi^Ci#@6I",
	country: "Spain",
	City: "Calafell",
	location_x:87,
	location_y:36
	});
db.passengers.insert({
	id: "88545564",
	name: "Eduard Coll",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 3,
	email: "ecoll@gmail.com",
	birthdate: new Date("1997-12-01T16:00:00Z"),
	phone: "+34 674813147",
	password: "oW$Ze$6Cm",
	country: "Spain",
	City: "Valls",
	location_x:26,
	location_y:185
	});
db.passengers.insert({
	id: "72419554",
	name: "Diana Corcoy",
	url_image:"https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14046.jpg",
	type_user: 3,
	email: "dcorcoy@gmail.com",
	birthdate: new Date("1986-18-05T16:00:00Z"),
	phone: "+34 610470765",
	password: "OBbh&meif",
	country: "Spain",
	City: "Esparreguera",
	location_x:2,
	location_y:21
	});



db.nodes.insert({
	id:"CH0001",
	location_x: 0,
	location_y: 0,
	state: 0,
	destination: 200
});

db.nodes.insert({
	id:"CH0002",
	location_x: 20,
	location_y: 30,
	state: 0,
	destination: 300
});

db.nodes.insert({
	id:"CH0003",
	location_x: 50,
	location_y: 60,
	state: 0,
	destination: 400
});

db.nodes.insert({
	id:"CH0004",
	location_x: 70,
	location_y: 80,
	state: 0,
	destination: 500
});

db.nodes.insert({
	id:"CH0005",
	location_x: 90,
	location_y: 100,
	state: 0,
	destination: 600
});

db.nodes.insert({
	id:"CH0006",
	location_x: 100,
	location_y: 145,
	state: 0,
	destination: 700
});


db.stops.insert({
	id: "12340",
	location_x: 141,
	location_y: 36
});

db.stops.insert({
	id: "12341",
	location_x: 273,
	location_y: 36
});
db.stops.insert({
	id: "12342",
	location_x: 118,
	location_y: 165
});
db.stops.insert({
	id: "12343",
	location_x: 242,
	location_y: 165
});
db.stops.insert({
	id: "12344",
	location_x: 373,
	location_y: 165
});
db.stops.insert({
	id: "12345",
	location_x: 448,
	location_y: 165
});
db.stops.insert({
	id: "12346",
	location_x: 525,
	location_y: 168
});
db.stops.insert({
	id: "12347",
	location_x: 614,
	location_y: 168
});
db.stops.insert({
	id: "12348",
	location_x: 273,
	location_y: 302
});
db.stops.insert({
	id: "12349",
	location_x: 141,
	location_y: 302
});

db.shops.insert({
	id: "234537744289",
	name: "Jack and Jones",
	url_image:"https://marinedacity.com/store-photos/jack-jones.jpg",
	product_name: "Ropa",
	location_x:102,
	location_y:145,
	type: "Ropa",
	promotions:[ {
			offer: "10% en camisetas"
		},
		{
			offer: "2 x 1 en panatalones"
		}]
	});

db.shops.insert({
	id: "18468259592",
	name: "The Coffee House",
	url_image:"https://doanhnghiepvietnam.org/img_duhoc/images/15029_TheCoffeeHouse.jpg",
	product_name: "Desayuno",
	location_x:53,
	location_y:45,
	type: "Restauración",
	promotions:[ {
			offer: "Cafe del dia por solo 2 euros"
		},
		{
			offer: "Cafe gratis"
		}]
	});

db.shops.insert({
	id: "6280579817",
	name: "Starbucks Cafe",
	url_image:"https://www.mundofranquicia.com/wp-content/uploads/2018/06/starbuc.jpg",
	product_name: "Desayuno",
	location_x:69,
	location_y:20,
	type: "Restauración",
	promotions:[ {
			offer: "15% decuento en tu segundo café"
		}]
	});

db.shops.insert({
	id: "801982870",
	name: "Pepe Jeans",
	url_image:"https://upload.wikimedia.org/wikipedia/commons/5/56/Pepejeans.jpg",
	product_name: "Ropa",
	location_x:62,
	location_y:33,
	type: "Ropa",
	promotions:[ {
			offer: "10% de descuento en pantalones"
		}]
	});

db.shops.insert({
	id: "824648593",
	name: "Burguer King",
	url_image: "https://www.aeroportofaro.pt/sites/default/files/media/burger_king_faro.jpg",
	product_name: "Desayuno",
	location_x:82,
	location_y:33,
	type: "Restauración",
	promotions:[ {
			offer:"2x1 en cafes"
		},
		{
			offer:"Menu long chicken por solo 5 euros"
		},
		{
			offer:"Aros de cebolla gratis con tu menú"
		}]
	});


db.shops.insert({
	id: "251877523",
	name: "Tommy Hilfiger",
	url_image: "https://www.modaes.com/files/000_2016/tommy%20hilfiger/tommy-hilfiger-tienda-aeropuerto-india-948.jpg",
	product_name: "Ropa",
	location_x:122,
	location_y:33,
	type: "Ropa",
	promotions:[ {
			offer: "15% de descuento en camisas"
		}]
	});

db.shops.insert({
	id: "6386206655",
	name: "NIKE",
	url_image:"https://www.marketingdirecto.com/wp-content/uploads/2018/03/nike-el-corte-ingl%C3%A9s.jpg",
	product_name: "Calzado",
	location_x:162,
	location_y:33,
	type: "Ropa",
	promotions:[ {
			offer: "30% de descuento en todo"
		}]
	});

db.shops.insert({
	id: "251754823",
	name: "Adidas",
	url_image: "https://www.mataro-parc.com/sites/default/files/field/image/adidas.jpg",
	product_name: "Calzado",
	location_x:162,
	location_y:33,
	type: "Ropa",
	promotions:[ {
			offer: "30% de descuento en zapatillas"
		}]
	});

db.flights.insert({
    name: "VL 203",
    airline: "Qatar Airways",
   // type: "Salida",
    from: "Vilanova",
    to: "London",
    boarding_time: "18:30",
    departure_time: "19:10",
    arrival_time: "21:30",
    state: "En hora",
    date: "2020-05-26",
    gate: {
      name: "F4",
      location_x: 50,
      location_y: 50,
    },
    boarding_pass: [{
		id_hash: "75092425388432490762",
		seat: "1A",
		id_passenger: "56764564X"
    },
    {
		id_hash: "55853654337661995555",
		seat: "1B",
		id_passenger: "3344699Z"
    }]
});


