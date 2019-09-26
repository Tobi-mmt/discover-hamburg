const DATA = [{
  id: 1,
  name: "Elphi Aussichtsplattform",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Elbphilharmonie%2C_Hamburg.jpg/1024px-Elbphilharmonie%2C_Hamburg.jpg",
  description: "Auf der Aussichtsplattform hat man einen schönen Blick über den ganzen Hafen.",
  locationLink: "https://g.page/elbphilharmonie-hh?share",
  websiteLink: "https://www.elbphilharmonie.de/de/plaza",
  duration: "40 m",
  cost: 0,
  weather: "sunny"
},
{
  id: 2,
  name: "Miniatur Wunderland",
  image: "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Funterkunft-reise.com%2Fwp-content%2Fuploads%2F2014%2F07%2FMiniatur-Wunderland.jpg",
  description: "Sollte das Wetter draußen doof sein, könnt ihr hier drin die ganze Welt im Trockenen sehen.",
  locationLink: "https://goo.gl/maps/TjMGdYFfSsm49EzV9",
  websiteLink: "https://www.miniatur-wunderland.de/",
  duration: "2 h",
  cost: 15,
  weather: "cloudy"
},
{
  id: 3,
  name: "Elbtunnel nach Steinwerder",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Hamburg%2C_Landungsbr%C3%BCcken_--_2016_--_3110.jpg",
  description: "Am Besten bei Sonnenuntergang! Durch den Elbtunnel durch und ihr seht den Hafen mit seinen Schiffen von der anderen Seite und die Abendsonne in der Elphi spiegeln.",
  locationLink: "https://goo.gl/maps/JKztpCZb99pczG8X7",
  websiteLink: "",
  duration: "1 h",
  cost: 0,
  weather: "sunny"
},
{
  id: 12,
  name: "Portugisenviertel",
  image: "https://media.cool-cities.com/portugiesenviertel009pr_f_mob.jpg?h=530",
  description: "Das gesamte Viertel besteht gefühlt nur aus Essen. Von Luigi's Pizza bis O Pescador's Fischrestaurant findet ihr hier alles.",
  locationLink: "https://goo.gl/maps/9mAjVzZAmrZm5o3UA",
  websiteLink: "",
  duration: "1 h",
  cost: 15,
  weather: "cloudy"
},
{
  id: 13,
  name: "Hanseatische Materialverwaltung",
  image: "https://anne-art.com/wp-content/uploads/2019/04/AW20190331_Hamburg-5129.jpg",
  description: "Möbel, Kleidung, Kostüme, Lampen und vieles mehr gibt es hier. Manchmal gibt es auch Events dort, einfach auf der Webseite nachschauen.",
  locationLink: "https://goo.gl/maps/KL2muSSvCG6PPRor7",
  websiteLink: "http://hanseatische-materialverwaltung.de/material/",
  duration: "2 h",
  cost: 0,
  weather: "cloudy"
},
{
  id: 10,
  name: "Altonaer Balkon",
  image: "https://www.hamburg-travel.com/fileadmin/_processed_/6/7/xcsm_30683-altonaer-balkon_c-vera-mueller_03_b7e7a16c6e.jpg.pagespeed.ic.0c2prBX0ox.jpg",
  description: "Mit einem mitgebrachten Getränk euere Wahl auf die Bank setzen und den Schiffen beim vorbei fahren zusehen. Der Park erstreckt sich entlang der Elbe bis zu den Landungsbrücken.",
  locationLink: "https://goo.gl/maps/cnVNF9dJ5duoYCXZ9",
  websiteLink: "",
  duration: "2 h",
  cost: 0,
  weather: "sunny"
},
{
  id: 14,
  name: "farbenmeer besuchen",
  image: "https://farbenmeer.de/static/pic/kitchenGroup.jpg",
  description: "Weil unser Büro sehenswert ist, könnt ihr einfach vorbei kommen, am Besten zum gemeinsamen Kochen am Mittag!",
  locationLink: "https://goo.gl/maps/tRPraHHwDYKjxUwZ6",
  websiteLink: "https://farbenmeer.de/de",
  duration: "1 h",
  cost: 0,
  weather: "cloudy"
},
{
  id: 5,
  name: "Ottensen erkunden",
  image: "https://www.radiohamburg.de/var/ezflow_site/storage/images/media/images/in-fussgaengerzone-umgewandelter-strassenzug-bei-ottensen-macht-platz/58710617-1-ger-DE/In-Fussgaengerzone-umgewandelter-Strassenzug-bei-Ottensen-macht-Platz_image_1200.jpg",
  description: "Die Bahrenfelder Str. und die Ottensen Hauptstr. sind zur Zeit Autofrei. Hier haben sich Cafes und Läden breit gemacht, die erkundet werden können.",
  locationLink: "https://goo.gl/maps/Z6qjRKWT78pSXmkj7",
  websiteLink: "https://ottensenmachtplatz.de/",
  duration: "2 h",
  cost: 0,
  weather: "cloudy"
},
{
  id: 4,
  name: "Bonscheladen",
  image: "https://www.hamburg-magazin.de/public/_processed_/csm_bonscheladen_cbf7586fc7.jpg",
  description: "Hier werden Bonbons gemacht! Und zwar von Hand und mit sehr coolen Motiven im Bonbon! Das ist auch ein gutes Mitbringsel für die Süßen Zuhause!",
  locationLink: "https://goo.gl/maps/4R5DfLTdjGEbkLHS9",
  websiteLink: "http://www.bonscheladen.de/",
  duration: "15 m",
  cost: 3,
  weather: "cloudy"
},
{
  id: 6,
  name: "Einkaufen auf der Mönke",
  image: "https://cdn01.eavar.com/2017/2/6ad3452d-e537-4f70-9f3f-fa6652fdce91.jpg",
  description: "Wenn ihr irgend etwas shoppen wollt, seit ihr hier richtig. Die Königsstraße aus Stuttgart in klein.",
  locationLink: "https://goo.gl/maps/i6c7JzZ4xV4ZSbu18",
  websiteLink: "",
  duration: "3 h",
  cost: 0,
  weather: "cloudy"
},
{
  id: 7,
  name: "Ohlsdorfer Friedhof",
  image: "http://img.fotocommunity.com/mausoleum-auf-dem-friedhof-ohlsdorf-a597cf6e-d773-4b4a-96c6-68f913636557.jpg?height=500",
  description: "Klingt komisch, ist aber ein gros angelegter Park mit Friedhof. Hier gibt es 12 schöne Kapellen, jede Menge Park und auch zauberhafte Gräber.",
  locationLink: "https://goo.gl/maps/9CZ7wepVMnaSfKsS7",
  websiteLink: "",
  duration: "2 h",
  cost: 0,
  weather: "sunny"
},
{
  id: 8,
  name: "Holdhusenbad",
  image: "https://www.hamburg-magazin.de/public/_processed_/csm_holthusenbad_eppendorf_3dbfa3645c.jpg",
  description: "Zwar gibt es in Hamburg keine Quellen wie in Stuttgart, aber auch hier kann man sich in Thermen entspannen. Massagen und Saunen gibts natürlich auch.",
  locationLink: "https://goo.gl/maps/tMCMUHyP1oENvPfa9",
  websiteLink: "https://www.baederland.de/bad/holthusenbad.html",
  duration: "3 h",
  cost: 19,
  weather: "cloudy"
},
{
  id: 11,
  name: "Stadtpark",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Hamburg_Planetarium.jpg/1200px-Hamburg_Planetarium.jpg",
  description: "Im Stadtpark kann man sich eine Auszeit gönnen. Hier findet ihr das Planetarium, ein See zum Schwimmen und auch das ein oder andere Konzert.",
  locationLink: "https://g.page/planetariumHH?share",
  websiteLink: "http://www.hamburgerstadtpark.de/",
  duration: "2 h",
  cost: 0,
  weather: "sunny"
},
{
  id: 9,
  name: "Ausflug nach Bergedorf",
  image: "https://www.bildarchiv-hamburg.de/hamburg/gebaeude/bezirk_bergedorf/11_21461_bergedorfer_schloss/11_21461_bergedorfer_schloss.jpg",
  description: "Das Bergedorfer Schloss, die Vier- und Marschlande und eine wunderschöne Altstadt könnt ihr hier besichtigen. Einfach mit der S21 nach Hamburg-Bergedorf",
  locationLink: "https://goo.gl/maps/9r8Aaz1CnjWgboHs9",
  websiteLink: "https://www.bergedorf.de/tourismus/10-highlights/",
  duration: "6 h",
  cost: 0,
  weather: "sunny"
},
{
  id: 14,
  name: "Tayas KaffeeHaus",
  image: "https://cdn.shopify.com/s/files/1/0064/5814/6906/files/TAYAS_Blick_ins_Cafe_1800x.jpg?v=1564413948",
  description: "Ein sehr süßes und gemütliches Cafe in Uhlenhorst",
  locationLink: "https://goo.gl/maps/LDubBpvCc3oVY5vD6",
  websiteLink: "https://tayas-hamburg.de/",
  duration: "2 h",
  cost: 15,
  weather: "cloudy"
},
{
  id: 15,
  name: "",
  image: "",
  description: "",
  locationLink: "",
  websiteLink: "",
  duration: "",
  cost: 0,
  weather: "cloudy"
},
]

export default DATA