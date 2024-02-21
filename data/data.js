var express = require('express');
var router = express.Router();

const data = {
    "website": "",
    "categories": [
        {
            "name": "Sobne biljke",
            "image": ".jpg",
            "id_kat": 1,
            "products": [
                {
                    "name": "Fikus Benjamin", "image": "fikus_benjamin.jpg", "id": 1
                },
                {
                    "name": "Paukova biljka", "image": "paukova_biljka.jpg", "id": 2
                },
                {
                    "name": "Sansevieria", "image": "sansevieria.jpg", "id": 3
                },
                {
                    "name": "Filadendron", "image": "filadendron.jpg", "id": 4
                },
                {
                    "name": "Adenium", "image": "adenium.jpg", "id": 5
                }
            ]
        },
        {
            "name": "Voćke",
            "image": ".jpg",
            "id_kat": 2,
            "products": [
                {
                    "name": "Jabuka", "image": "jabuka.jpg", "id": 6
                },
                {
                    "name": "Marelica", "image": "marelica.jpg", "id": 7
                },
                {
                    "name": "Jagoda", "image": "jagoda.jpg", "id": 8
                },
                {
                    "name": "Banana", "image": "banana.jpg", "id": 9
                },
                {
                    "name": "Ananas", "image": "ananas.jpg", "id": 10
                }
            ]
        },
        {
            "name": "Cvijeće",
            "image": ".jpg",
            "id_kat": 3,
            "products": [
                {
                    "name": "Ruža", "image": "ruza.jpg", "id": 11
                },
                {
                    "name": "Tulipan", "image": "tulipan.jpg", "id": 12
                },
                {
                    "name": "Hortenzija", "image": "hortenzija.jpg", "id": 13
                },
                {
                    "name": "Đurđica", "image": "durdica.jpg", "id": 14
                },
                {
                    "name": "Narcisa", "image": "narcisa.jpg", "id": 15
                }
            ]
        },
        {
            "name": "Egzotične biljke",
            "image": ".jpg",
            "id_kat": 4,
            "products": [
                {
                    "name": "Opuncija", "image": "opuncija.jpg", "id": 16
                },
                {
                    "name": "Plumerija", "image": "plumerija.jpg", "id": 17
                },
                {
                    "name": "Strelitzia", "image": "strelitzia.jpg", "id": 18
                },
                {
                    "name": "Banjan", "image": "banjan.jpg", "id": 19
                },
                {
                    "name": "Passiflora", "image": "passiflora.jpg", "id": 20
                }
            ]
        },
        {
            "name": "Biljke za vrt",
            "image": ".jpg",
            "id_kat": 5,
            "products": [
                {
                    "name": "Dalija", "image": "dalija.jpg", "id": 21
                },
                {
                    "name": "Krokus", "image": "krokus.jpg", "id": 22
                },
                {
                    "name": "Tratinčica", "image": "tratincica.jpg", "id": 23
                },
                {
                    "name": "Šafran", "image": "safran.jpg", "id": 24
                },
                {
                    "name": "Drijen", "image": "drijen.jpg", "id": 25
                }
            ]
        },
        {
            "name": "Začinske biljke",
            "image": ".jpg",
            "id_kat": 6,
            "products": [
                {
                    "name": "Ružmarin", "image": "ruzmarin.jpg", "id": 26
                },
                {
                    "name": "Vlasac", "image": "vlasac.jpg", "id": 27
                },
                {
                    "name": "Kopriva", "image": "kopriva.jpg", "id": 28
                },
                {
                    "name": "Menta", "image": "menta.jpg", "id": 29
                },
                {
                    "name": "Origano", "image": "origano.jpg", "id": 30
                }
            ]
        },
        {
            "name": "Sukulenti",
            "image": ".jpg",
            "id_kat": 7,
            "products": [
                {
                    "name": "Aloe vera", "image": "aloevera.jpg", "id": 31
                },
                {
                    "name": "Gasterija", "image": "gasterija.jpg", "id": 32
                },
                {
                    "name": "Crasula", "image": "crasula.jpg", "id": 33
                },
                {
                    "name": "Sedum", "image": "sedum.jpg", "id": 34
                },
                {
                    "name": "Eheverija", "image": "eheverija.jpg", "id": 35
                }
            ]
        },
        {
            "name": "Aromatične biljke",
            "image": ".jpg",
            "id_kat": 8,
            "products": [
                {
                    "name": "Bosiljak", "image": "bosiljak.jpg", "id": 36
                },
                {
                    "name": "Timijan", "image": "timijan.jpg", "id": 37
                },
                {
                    "name": "Lavanda", "image": "lavanda.jpg", "id": 38
                },
                {
                    "name": "Estragon", "image": "estragon.jpg", "id": 39
                },
                {
                    "name": "Kadulja", "image": "kadulja.jpg", "id": 40
                }
            ]
        },
        {
            "name": "Tropske biljke",
            "image": ".jpg",
            "id_kat": 9,
            "products": [
                {
                    "name": "Papaja", "image": "papaja.jpg", "id": 41
                },
                {
                    "name": "Orhideja", "image": "orhideja.jpg", "id": 42
                },
                {
                    "name": "Mangovača", "image": "mangovaca.jpg", "id": 43
                },
                {
                    "name": "Vanilija", "image": "vanilija.jpg", "id": 44
                },
                {
                    "name": "Hibiskus", "image": "hibiskus.jpg", "id": 45
                }
            ]
        },
        {
            "name": "Viseće biljke",
            "image": ".jpg",
            "id_kat": 10,
            "products": [
                {
                    "name": "Bršljan", "image": "brsljan.jpg", "id": 46
                },
                {
                    "name": "Pustinjak", "image": "pustinjak.jpg", "id": 47
                },
                {
                    "name": "Zebrica", "image": "zebrica.jpg", "id": 48
                },
                {
                    "name": "Bambus", "image": "bambus.jpg", "id": 49
                },
                {
                    "name": "Petunija", "image": "petunija.jpg", "id": 50
                }
            ]
        },
    ]
}
module.exports = data;