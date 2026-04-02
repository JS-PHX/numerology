
// document.addEventListener('DOMContentLoaded', function() {
//     var container = document.getElementById('divContainer');
//     iNoBounce.enable(container);
//   });


document.addEventListener("DOMContentLoaded", function() {
    var navElement = document.getElementById("userInfo");
    var button = document.getElementById("myButton");
  
    button.addEventListener("click", function() {
      if (!navElement.classList.contains("top")) {
        navElement.classList.add("top");
        navElement.classList.remove("centered");
      }
    });
  });

  var script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/inobounce@0.1.6/inobounce.min.js';
  document.body.appendChild(script);





document.addEventListener('DOMContentLoaded', function() {
    var divContainer = document.getElementById('astroDiv');
    divContainer.addEventListener('mousemove', function(event) {
      var trail = document.createElement('div');
      trail.className = 'trail';
    
      var x = event.clientX - 0;
      var y = event.clientY - 0;
      trail.style.left = x + 'px';
      trail.style.top = y + 'px';
    
      this.appendChild(trail);
    
      setTimeout(function() {
        trail.style.opacity = '0';
        setTimeout(function() {
          this.removeChild(trail);
        }.bind(this), 50);
      }.bind(this), 500);
    });
    


const button = document.getElementById("myButton"); 
let myDropdown = document.getElementById("monthList");
let myGem = document.getElementById("gemName");
let myParagraph = document.getElementById("gemInfo");
let flowerText = document.getElementById("flowerInfo");
let flowerName = document.getElementById("flowerName")
const myElement = document.getElementById("gemColor");
const body = document.body;
myElement.style.animation = "none";


 button.addEventListener("click", function() {
 // myDropdown.addEventListener("change", function() {
 var monthValue = monthList.value;

 if (monthValue === "Jan") {
    //  document.body.style.backgroundColor = "#7b0c00",
    document.body.style.background = "linear-gradient(to bottom, rgba(123, 12, 1, 1), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";
    myGem.textContent = "Garnet",
     document.getElementById("gemImg").src = "./gems/garnet.png"
     myParagraph.textContent = "Legends say the garnet offers protection from nightmares and gives its wearer guidance in the night for those born in January. The red color of the gemstone symbolizes faith, love and courage. Wearing garnet can reportedly protect children from nightmares and can promote overall self-worth.",
     document.getElementById("flowerImage").src = "./Flowers/carnation.png",
     flowerName.textContent = "Carnation",
     flowerText.textContent = "Fitting for a January flower, carnations prefer cool temperatures and come in a variety of colors, each with a unique symbol. Pink carnations represent a mother's love, for example, while dark red carnations indicate deep love, and white ones mean pure love.";
 } else if (monthValue === "Feb") {
    //  document.body.style.backgroundColor = "#9510d0",
     body.style.background = "linear-gradient(to bottom, rgb(149, 16, 208), rgba(0, 0, 0, 1), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Amethyst",
     document.getElementById("gemImg").src = "./gems/amethyst.png"
     myParagraph.textContent = "The amethyst gemstone represents royalty, passion and hope. This gem supposedly calms the spirit and give focus to all with February birthdays. Amethyst theoretically protects its wearers from drunkenness, arthritis and illness. Amethyst guards the mind and sets the wearer free from passion.",
     document.getElementById("flowerImage").src = "./Flowers/violet.png",
     flowerName.textContent = "Violet",
     flowerText.textContent = "Violets are named after their purple color, but can also be found in yellow, blue, and cream shades. The three primary traits associated with violets are modesty, humility, and faithfulness.";
 } else if (monthValue === "Mar") {
    //  document.body.style.backgroundColor = "#73cdff",
     body.style.background = "linear-gradient(to bottom, rgb(115, 205, 255), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Aquamarine",
     document.getElementById("gemImg").src = "./gems/aquamarine.png"
     myParagraph.textContent = "In ancient times, people believed aquamarine, the traditional birthstone of March, protected seafarers in helping them clearly remember their loved ones when they were far away at sea. Wearing aquamarine promotes creativity, hope, self-expression and courage. Wear this gemstone to boost love, youth, good health and overall happiness.",
     document.getElementById("flowerImage").src = "./Flowers/Daffodil.png",
     flowerName.textContent = "Daffodil",
     flowerText.textContent = "Daffodils are one of the first flowers to bloom in spring, which connects to their representation of rebirth and new beginnings. They also have various region-specific connotations. For example, in Wales and China they are believed to bring wealth.";
 }else if (monthValue === "Apr") {
    //  document.body.style.backgroundColor = "#e0fbff",
     body.style.background = "linear-gradient(to bottom, rgb(224, 251, 255), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Diamond",
     document.getElementById("gemImg").src = "./gems/diamond.png"
     myParagraph.textContent = "Diamonds have been the traditional symbol of love since ancient Greece and the sparkling birthstone for April-born babies. This gemstone is the symbol of eternal love and courage. This gem protects its wearers from insanity. People believe diamonds increase energy, both positive and negative. They also treat dizziness and vertigo and can detoxify the body and cure allergies.",
     document.getElementById("flowerImage").src = "./Flowers/Daisy.png", 
     flowerName.textContent = "Daisy",
     flowerText.textContent = "Gerbera daises were discovered in South Africa in the late 1800s by a Scotsman who brought them home to Europe. They have come to symbolize true love, new beginnings and purity. ";
 }else if (monthValue === "May") {
    //  document.body.style.backgroundColor = "#009B77",
     body.style.background = "linear-gradient(to bottom, rgb(0, 155, 119), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Emerald",
     document.getElementById("gemImg").src = "./gems/emerald.png"
     myParagraph.textContent = "Some believe that by wearing the vivid emerald gem, the symbol of May birthdays, you can cure specific ailments and will be able to see into the future. This birthstone promotes health, faithfulness, fertility and wealth. Emeralds also reportedly possess magical qualities that prevent illness.",
     document.getElementById("flowerImage").src = "./Flowers/lotv.png", 
     flowerName.textContent = "Lily of the Valley",
     flowerText.textContent = "Lily of the Valleys bloom in May, making them an apt choice for May's official birth flower. They are characterized by their bell shaped heads, and represent sweetness, motherhood, and humility."
 }else if (monthValue === "Jun") {
    //  document.body.style.backgroundColor = "#E2DFD2",
     body.style.background = "linear-gradient(to bottom, rgb(226, 223, 210), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Pearl",
     document.getElementById("gemImg").src = "./gems/pearl.png"
     myParagraph.textContent = "Celebrate June birthdays with pearls, which supposedly symbolize modesty and purity. Pearls protect against nervous and anxious thoughts, as well as control anger. Medically, pearls can treat digestive disorders, increase fertility and ease the pain of childbirth. Alexandrite also correlates with June. It ranks alongside ruby, one of the world's most desirable gemstones.",
     document.getElementById("flowerImage").src = "./Flowers/rose.png",
     flowerName.textContent = "Rose",
     flowerText.textContent = "Red roses need no introduction as one of the most popular, romantic flowers, but you may not know that other colored roses also have special meanings. Pink roses symbolize admiration and happiness, and orange ones indicate excitement and desire."
 }else if (monthValue === "Jul") {
    //  document.body.style.backgroundColor = "#eb1246",
     body.style.background = "linear-gradient(to bottom, rgb(235, 18, 70), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Ruby",
     document.getElementById("gemImg").src = "./gems/ruby.png"
     myParagraph.textContent = "The vivid gem of ruby is symbolic of July birthdays. The gemstones are supposed to protect against misfortune and allow their wearer to live in harmony with others. Rubies are red, which symbolizes strength and courage. They can support the emotional health of the wearer. Rubies encourage the removal of negative energies from your path and can treat exhaustion and lethargy.",
     document.getElementById("flowerImage").src = "./Flowers/Larkspur.png",
     flowerName.textContent = "Larkspur",
     flowerText.textContent = "With their height and vibrant color, larkspurs are an attractive flower, but can be dangerous for gardens due to the fact that they are poisonous. As July's birth flower, they symbolize positivity and dedication."
 }else if (monthValue === "Aug") {
    //  document.body.style.backgroundColor = "#B4C424",
     body.style.background = "linear-gradient(to bottom, rgb(180, 196, 36), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Peridot",
     document.getElementById("gemImg").src = "./gems/peridot.png"
     myParagraph.textContent = "Historically, peridots bring courage, wealth, wisdom and purity to wearers with a birthday in August. The light green gemstone relieves stress and calms anger, as well as protecting the wearer from evil, negativity and black magic. Peridot boosts the immune system and improves skin quality.",
     document.getElementById("flowerImage").src = "./Flowers/Gladiolus.png",
     flowerName.textContent = "Gladiolus",
     flowerText.textContent = "Today, the gladiolus stands for integrity, remembrance, and strength. In Victorian times however, it was associated with infatuation, since romantics believed the flowers could pierce hearts with their beauty."
 }else if (monthValue === "Sep") {
    //  document.body.style.backgroundColor = "#0F52BA",
     body.style.background = "linear-gradient(to bottom, rgb(15, 82, 186), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Sapphire",
     document.getElementById("gemImg").src = "./gems/sapphire.png"
     myParagraph.textContent = "The popular imagination portrays the majestic sapphire gemstone as a symbol of truth and protection to those born in September. The blue sapphire gemstone brings success to all who wear it. Sapphires reduce pain and demonstrate purity, wisdom, faith, loyalty and serenity in the wearer. Sapphires also have a reputation for treating blood disorders and excessive bleeding.",
     document.getElementById("flowerImage").src = "./Flowers/Aster.png",
     flowerName.textContent = "Aster",
     flowerText.textContent = "Asters are named after the Greek word for 'star' due to their star-like appearance. They have a variety of associations, including love, wisdom, and faith, and have been the subject of famous artworks by Claude Monet and Vincent van Gogh."
 }else if (monthValue === "Oct") {
    //  document.body.style.backgroundColor = "#ffcfef",
     body.style.background = "linear-gradient(to bottom, rgb(255, 207, 239), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Tourmaline",
     document.getElementById("gemImg").src = "./gems/tourmaline.png"
     myParagraph.textContent = "Ancient legends say the opal gemstone will soothe away sadness and envy for those with October birthdays. The tourmaline gem also represents the birth month of October with its resistance to breaking and scratching. Both opal and tourmaline gems possess healing and restorative qualities and are symbols of hope, innocence and creativity. Opals strengthen the wearer's memory and increase the will to live. Tourmaline can relieve stress and increase mental alertness.",
     document.getElementById("flowerImage").src = "./Flowers/Marigold.png",
     flowerName.textContent = "Marigold",
     flowerText.textContent = "With its bright orange color, the Marigold is the perfect companion to fall pumpkins as the representatives for October. This flower comes from the Mediterranean, and evokes courage, passion, and creativity."
 }else if (monthValue === "Nov") {
    //  document.body.style.backgroundColor = "#ffc87c",
     body.style.background = "linear-gradient(to bottom, rgb(255, 200, 124), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Topaz",
     document.getElementById("gemImg").src = "./gems/topaz.png"
     myParagraph.textContent = "Citrine traditionally has a reputation for warding off evil thoughts and poisonous snakes. Today, the cheerful citrine, representative of November birthdays, brings success and prosperity to its wearers. Citrine improves intellect and removes negativity from the wearer. Topaz also complements the month of November with its shades of brown, orange and yellow. Both topaz and citrine promote health and wellness in the mind and body. They also protect their wearers from negative influences.",
     document.getElementById("flowerImage").src = "./Flowers/Chrys.png",
     flowerName.textContent = "Chrysantheum",
     flowerText.textContent = "The Chrysanthemum is the only birth flower of November and has a long history, dating back to 15th century China when it was first cultivated. It symbolizes joy, longevity, and loyalty."
 }else if (monthValue === "Dec") {
    //  document.body.style.backgroundColor = "#001e80",
     body.style.background = "linear-gradient(to bottom, rgb(0, 30, 128), rgba(0, 0, 0, .75), rgba(0, 0, 0, 0))";

     myGem.textContent = "Tanzanite",
     document.getElementById("gemImg").src = "./gems/tanzanite.png"
     myParagraph.textContent = "Zircon provides the wearer with wisdom, honor and riches for those born in December. Turquoise also associates with December, bringing its wearer happiness and good fortune. Turquoise used to be an indicator of the wearer's ill health or danger because of the gemstone's ability to change color. Topaz brings good health and prevents headaches. All of the birthstones for December possess healing properties.",
     document.getElementById("flowerImage").src = "./Flowers/holly.png",
     flowerName.textContent = "Holly",
     flowerText.textContent = "Holly will look very familiar as a modern staple of Christmas decorations. The spiky leaves have long been a symbol in Christianity of the thorny crown placed on Jesus's head at his crucifixion. In current times, it represents happiness and peace."
 } else if (monthValue === "") {
    myGem.textContent = "enter your birth month",
    document.getElementById("gemImg").src = "",
    myParagraph.textContent = "",
    document.getElementById("flowerImage").src = "",
    flowerName.textContent = "",
    flowerText.textContent = "",
    body.style.background = "linear-gradient(to bottom, rgb(0, 0, 0, .9), rgba(0, 0, 0, .5), rgba(0, 0, 0, 0))";
}

 const scrollUpButton = document.getElementById("myButton");

 scrollUpButton.addEventListener('click', function() {
   window.scrollTo(-120, -120);
 }); 

});



 let newButton = document.getElementById("myButton"); 
 let myYear = document.getElementById("yearList")
 let chineseZodiac = document.getElementById("lunarInfo")

 newButton.addEventListener("click", function() {
 // get the selected value from the dropdown list
 var yearValue = yearList.value;

 if (yearValue === "1924" || yearValue === "1936" || yearValue === "1948" || yearValue === "1960" || yearValue === "1972" || yearValue === "1984" || yearValue === "1996" || yearValue === "2008" || yearValue === "2020") {
     document.getElementById("lunarZodiac").textContent = "Year of the Rat";
     document.getElementById("lunarImg").src = "./animal/rat.png",
     document.getElementById("lunarInfo").textContent = "Optimistic and energetic, people born in the Rat year are likable by all. They are sensitive to other's emotions but are stubborn with your opinion. Their personality is kind, but due to weak communication skills, their words may seem impolite and rude.";
 } 
 else if (yearValue === "1925" || yearValue === "1937" || yearValue === "1949" || yearValue === "1961" || yearValue === "1973" || yearValue === "1985" || yearValue === "1997" || yearValue === "2009" || yearValue === "2021" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Ox",
     document.getElementById("lunarImg").src = "./animal/ox.png",
     document.getElementById("lunarInfo").textContent = "Oxen are honest and earnest. They are low key and never look for praise or to be the center of attention. This often hides their talent, but they'll gain recognition through their hard work." ;
 } 
 else if ( yearValue === "1926" || yearValue === "1938" || yearValue === "1950" || yearValue === "1962" || yearValue === "1974" || yearValue === "1986" || yearValue === "1998" || yearValue === "2010" || yearValue === "2022" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Tiger",
     document.getElementById("lunarImg").src = "./animal/tiger.png",
     document.getElementById("lunarInfo").textContent = "Tigers are courageous and authoritative, although they have a cute and charming side as well to those who know them more intimately. Their ambitions run sky-high, however, and Tigers will never treat them as pipe dreams. They are adventurers with the courage to be a pioneer in the line of work they choose. They work tirelessly to realize their dream of changing the world in some way, one step at a time.";
 } 
 else if ( yearValue === "1927" || yearValue === "1939" || yearValue === "1951" || yearValue === "1963" || yearValue === "1975" || yearValue === "1987" || yearValue === "1999" || yearValue === "2011" || yearValue === "2023") {
     document.getElementById("lunarZodiac").textContent = "Year of the Rabbit",
     document.getElementById("lunarImg").src = "./animal/rabbit.png",
     document.getElementById("lunarInfo").textContent = "To outsiders, the Rabbit's kindness may make them seem soft and weak. In truth, the Rabbit's quiet personality hides their confidence and strength. They are steadily moving towards their goal, no matter what negativity the others give them.";
 } 
 else if ( yearValue === "1928" || yearValue === "1940" || yearValue === "1952" || yearValue === "1964" || yearValue === "1976" || yearValue === "1988" || yearValue === "2000" || yearValue === "2012" || yearValue === "2024" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Dragon",
     document.getElementById("lunarImg").src = "./animal/dragon.png",
     document.getElementById("lunarInfo").textContent = "They don't waste money, but also don't pay much attention to it. Adventurous entrepreneurs at heart, they dream of shooting to fame. Sometimes their efforts go to waste though. Still, their lives revolve around work.";
 } 
 else if ( yearValue === "1929" || yearValue === "1941" || yearValue === "1953" || yearValue === "1965" || yearValue === "1977" || yearValue === "1989" || yearValue === "2001" || yearValue === "2013" || yearValue === "2025" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Snake",
     document.getElementById("lunarImg").src = "./animal/snake.png",
     document.getElementById("lunarInfo").textContent = "Snakes are humorous and sophisticated. They don't like small talk or thinking about small everyday problems. In a chaotic environment, they are the eye of the storm. Snakes are able to hold their ground and calmly think of solutions.";
 } 
 else if ( yearValue === "1930" || yearValue === "1942" || yearValue === "1954" || yearValue === "1966" || yearValue === "1978" || yearValue === "1990" || yearValue === "2002" || yearValue === "2014" || yearValue === "2026" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Horse",
     document.getElementById("lunarImg").src = "./animal/horse.png",
     document.getElementById("lunarInfo").textContent = "Horses are full of energy, albeit a bit too much. Both studious and athletic, they are strong believers of chasing after dreams. Rather than wealth and fame, happiness is what motivates them. They expect others to operate at the same speed as them and don't understand why others can't.";
 } 
 else if ( yearValue === "1931" || yearValue === "1943" || yearValue === "1955" || yearValue === "1967" || yearValue === "1979" || yearValue === "1991" || yearValue === "2003" || yearValue === "2015" || yearValue === "2027" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Goat",
     document.getElementById("lunarImg").src = "./animal/sheep.png",
     document.getElementById("lunarInfo").textContent = "Goats are able to persevere through any difficulty. This is their most notable trait. They are strong and resilient, though their gentleness might be misleading.";
 } 
 else if ( yearValue === "1932" || yearValue === "1944" || yearValue === "1956" || yearValue === "1968" || yearValue === "1980" || yearValue === "1992" || yearValue === "2004" || yearValue === "2016" || yearValue === "2028" ) {
     document.getElementById("lunarZodiac").textContent = "Year of the Monkey",
     document.getElementById("lunarImg").src = "./animal/monkey.png",
     document.getElementById("lunarInfo").textContent = "Monkeys' most defining trait is their intelligence. As children, they win awards and the praises of teachers. As adults, they gain professional recognition and make great leaders.";
 } 
 else if ( yearValue === "1933" || yearValue === "1945" || yearValue === "1957" || yearValue === "1969" || yearValue === "1981" || yearValue === "1993" || yearValue === "2005" || yearValue === "2017" || yearValue === "2029") {
     document.getElementById("lunarZodiac").textContent = "Year of the Rooster",
     document.getElementById("lunarImg").src = "./animal/rooster.png",
     document.getElementById("lunarInfo").textContent = "Roosters are serious in their work. They are straightforward and decisive in their actions. They'll directly criticize what they see unfit and are perfectionists. They are logical and good at managing teams.";
 } 
 else if ( yearValue === "1934" || yearValue === "1946" || yearValue === "1958" || yearValue === "1970" || yearValue === "1982" || yearValue === "1994" || yearValue === "2006" || yearValue === "2018" || yearValue === "2030") {
     document.getElementById("lunarZodiac").textContent = "Year of the Dog",
     document.getElementById("lunarImg").src = "./animal/dog.png",
     document.getElementById("lunarInfo").textContent = "A Dog's most defining characteristic is their loyalty. They will never abandon their friends, family or work. Honest and just, they are popular in social circles. Everyone needs a Dog friend for advice and help. They are also good at helping others find and fix their bad habits.";
 } 
 else if ( yearValue === "1935" || "1947" || "1959" || "1971" || "1983" || "1995" || "2007" || "2019" || "2031") {
     document.getElementById("lunarZodiac").textContent = "Year of the Pig",
     document.getElementById("lunarImg").src = "./animal/pig.png",
     document.getElementById("lunarInfo").textContent = "Pigs might not stand out in a crowd. But they are very realistic. Others may be all talk and no action. Pigs are the opposite."
 } 
 else if ( yearValue === "") {
    document.getElementById("lunarZodiac").textContent = "Enter your birth year",
    document.getElementById("lunarImg").src = "",
    document.getElementById("lunarInfo").textContent = "";
}
});

var scrollButton = document.getElementById("myButton");


if (scrollButton) {
    scrollButton.onclick = function() {
      window.scrollBy(0, 100); // scroll down by 100 pixels each time the button is clicked
    };
  }

 
 let astroButton = document.getElementById("myButton"); 

 astroButton.addEventListener("click", function() {
    var monthValue = monthList.value;
    var dayValue = dayList.value;

    if (monthValue === "Jan" && (dayValue === "20" || dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Aquarius",
        document.getElementById("astroImg").src = "./astrology/aquarius.png",
        document.getElementById("astroInfo").textContent = "Intellectual, independent and contemplative, Aquarians are often deeply focused on their beliefs and ideas. They are hungry for knowledge in order to better establish their firm perception on how the universe and society operate around them. Open to exploring new concepts, once they have found their core analysis, they will not waver from their point of view."
        console.log("Aquarius");
    } 
    else if (monthValue === "Feb" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18")){
        document.getElementById("astroTitle").textContent = "Aquarius",
        document.getElementById("astroImg").src = "./astrology/aquarius.png",
        document.getElementById("astroInfo").textContent = "Intellectual, independent and contemplative, Aquarians are often deeply focused on their beliefs and ideas. They are hungry for knowledge in order to better establish their firm perception on how the universe and society operate around them. Open to exploring new concepts, once they have found their core analysis, they will not waver from their point of view."
        console.log("Aquarius");
    } 
    else if (monthValue === "Feb" && (dayValue === "19" || dayValue === "20" || dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29")){
        document.getElementById("astroTitle").textContent = "Pisces",
        document.getElementById("astroImg").src = "./astrology/pisces.png",
        document.getElementById("astroInfo").textContent = "Imaginative, intuitive and emotional, Pisces are often old souls. They have an innate connection to the mystical and spiritual world, often drawn to deeply romantic, creative or transformative experiences. They are especially compassionate and sensitive, often putting the needs of others before themselves.",
        console.log("pisces");
    } 
    else if (monthValue === "Mar" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20")){
        document.getElementById("astroTitle").textContent = "Pisces",
        document.getElementById("astroImg").src = "./astrology/pisces.png",
        document.getElementById("astroInfo").textContent = "Imaginative, intuitive and emotional, Pisces are often old souls. They have an innate connection to the mystical and spiritual world, often drawn to deeply romantic, creative or transformative experiences. They are especially compassionate and sensitive, often putting the needs of others before themselves.",
        console.log("pisces");
    } 
    else if (monthValue === "Mar" && (dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Aries",
        document.getElementById("astroImg").src = "./astrology/aries.png",
        document.getElementById("astroInfo").textContent = "Bold, pioneering and courageous, Aries is the leader of the zodiac. They are daring and adventurous and are unafraid to strike out into unknown territory where others would be unable to go. An eternal child at heart, Aries are energetic and aggressive, filled with an enthusiasm for life.",
        console.log("Aries");
    } 
    else if (monthValue === "Apr" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19")){
        document.getElementById("astroTitle").textContent = "Aries",
        document.getElementById("astroImg").src = "./astrology/aries.png",
        document.getElementById("astroInfo").textContent = "Bold, pioneering and courageous, Aries is the leader of the zodiac. They are daring and adventurous and are unafraid to strike out into unknown territory where others would be unable to go. An eternal child at heart, Aries are energetic and aggressive, filled with an enthusiasm for life.",
        console.log("Aries");
    } 
    else if (monthValue === "Apr" && (dayValue === "20" || dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Taurus",
        document.getElementById("astroImg").src = "./astrology/taurus.png",
        document.getElementById("astroInfo").textContent = "Sensual, determined and loyal, Tauruses value security and stability above all. They enjoy the finer things in life and are attracted to the full exploration of the senses. They are drawn to beauty and pleasure and invest themselves entirely in what they believe in. These people are especially hard-working and like to take a practical approach to life.",
        console.log("Taurus");
    } 
    else if (monthValue === "May" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20")){
        document.getElementById("astroTitle").textContent = "Taurus",
        document.getElementById("astroImg").src = "./astrology/taurus.png",
        document.getElementById("astroInfo").textContent = "Sensual, determined and loyal, Tauruses value security and stability above all. They enjoy the finer things in life and are attracted to the full exploration of the senses. They are drawn to beauty and pleasure and invest themselves entirely in what they believe in. These people are especially hard-working and like to take a practical approach to life.",
        console.log("Taurus");
    } 
    else if (monthValue === "May" && (dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Gemini",
        document.getElementById("astroImg").src = "./astrology/gemini.png",
        document.getElementById("astroInfo").textContent = "Quick-witted, excitable and inquisitive, Geminis are curious about everything. They take a highly intellectual view of the world, ready to learn about everything and everyone. As master communicators, they are gifted at being flexible and versatile in connecting with others.",
        console.log("Gemini");
    } 
    else if (monthValue === "Jun" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20")){
        document.getElementById("astroTitle").textContent = "Gemini",
        document.getElementById("astroImg").src = "./astrology/gemini.png",
        document.getElementById("astroInfo").textContent = "Quick-witted, excitable and inquisitive, Geminis are curious about everything. They take a highly intellectual view of the world, ready to learn about everything and everyone. As master communicators, they are gifted at being flexible and versatile in connecting with others.",
        console.log("Gemini");
    } 
    else if (monthValue === "Jun" && (dayValue === "21" || dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Cancer",
        document.getElementById("astroImg").src = "./astrology/cancer.png",
        document.getElementById("astroInfo").textContent = "Sensitive, emotional and receptive, Cancers often put their hearts fully into anything they believe in. However, represented by the crab, they have a hard shell to crack before you can get to their softest side. These people also tend to be especially nurturing, valuing domesticity and family greatly.",
        console.log("Cancer");
    } 
    else if (monthValue === "Jul" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21" || dayValue === "22")){
        document.getElementById("astroTitle").textContent = "Cancer",
        document.getElementById("astroImg").src = "./astrology/cancer.png",
        document.getElementById("astroInfo").textContent = "Sensitive, emotional and receptive, Cancers often put their hearts fully into anything they believe in. However, represented by the crab, they have a hard shell to crack before you can get to their softest side. These people also tend to be especially nurturing, valuing domesticity and family greatly.",
        console.log("Cancer");
    } 
    else if (monthValue === "Jul" && (dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Leo",
        document.getElementById("astroImg").src = "./astrology/leo.png",
        document.getElementById("astroInfo").textContent = "Creative, enthusiastic and dramatic, Leos love to live life to the fullest. They tend to have an innate confidence and radiance that gives them the ability to easily assert themselves and stand out from the crowd. They often like to be recognized for everything they bring to the world, sometimes to the point of pride or arrogance.",
        console.log("Leo");
    } 
    else if (monthValue === "Aug" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21" || dayValue === "22")){
        document.getElementById("astroTitle").textContent = "Leo",
        document.getElementById("astroImg").src = "./astrology/leo.png",
        document.getElementById("astroInfo").textContent = "Creative, enthusiastic and dramatic, Leos love to live life to the fullest. They tend to have an innate confidence and radiance that gives them the ability to easily assert themselves and stand out from the crowd. They often like to be recognized for everything they bring to the world, sometimes to the point of pride or arrogance.",
        console.log("Leo");
    } 
    else if (monthValue === "Aug" && (dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Virgo",
        document.getElementById("astroImg").src = "./astrology/virgo.png",
        document.getElementById("astroInfo").textContent = "Practical, hardworking and analytical, Virgos are immensely talented at assessing the details of any situation and finding solutions to problem-solve them. They are natural-born organizers and value consistency, loyalty and productivity. They invest very much of themselves into their goals and plans but can become very critical if things do not develop as they had originally expected.",
        console.log("Virgo");
    } 
    else if (monthValue === "Sep" & (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21" || dayValue === "22")){
        document.getElementById("astroTitle").textContent = "Virgo",
        document.getElementById("astroImg").src = "./astrology/virgo.png",
        document.getElementById("astroInfo").textContent = "Practical, hardworking and analytical, Virgos are immensely talented at assessing the details of any situation and finding solutions to problem-solve them. They are natural-born organizers and value consistency, loyalty and productivity. They invest very much of themselves into their goals and plans but can become very critical if things do not develop as they had originally expected.",
        console.log("Virgo");
    } 
    else if (monthValue === "Sep" && (dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Libra",
        document.getElementById("astroImg").src = "./astrology/libra.png",
        document.getElementById("astroInfo").textContent = "Charming, social and diplomatic, Libras value peace and balance above all. They strive for fairness in life and in their relationships. They also have a natural tendency to surround themselves with beauty and luxury. Also, as eternal romantics, they crave relationships and partnerships and will dive into union headfirst when they find someone they admire deeply.",
        console.log("Libra");
    } 
    else if (monthValue === "Oct" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21" || dayValue === "22")){
        document.getElementById("astroTitle").textContent = "Libra",
        document.getElementById("astroImg").src = "./astrology/libra.png",
        document.getElementById("astroInfo").textContent = "Charming, social and diplomatic, Libras value peace and balance above all. They strive for fairness in life and in their relationships. They also have a natural tendency to surround themselves with beauty and luxury. Also, as eternal romantics, they crave relationships and partnerships and will dive into union headfirst when they find someone they admire deeply.",
        console.log("Libra");
    } 
    else if (monthValue === "Oct" && (dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Scorpio",
        document.getElementById("astroImg").src = "./astrology/scorpio.png",
        document.getElementById("astroInfo").textContent = "Intense, passionate and cunning, Scorpios are “all or nothing” kinds of people. They have a natural ability to enchant others, utilizing their powerful minds and auras to dominate situations and relationships. Deeply emotional, they can brood in the extremes of their feelings. Craving intimacy and psychological depth above all, they navigate the world like a game in order to win and conquer whatever they set their sights upon.",
        console.log("Scorpio");
    } 
    else if (monthValue === "Nov" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21")){
        document.getElementById("astroTitle").textContent = "Scorpio",
        document.getElementById("astroImg").src = "./astrology/scorpio.png",
        document.getElementById("astroInfo").textContent = "Intense, passionate and cunning, Scorpios are “all or nothing” kinds of people. They have a natural ability to enchant others, utilizing their powerful minds and auras to dominate situations and relationships. Deeply emotional, they can brood in the extremes of their feelings. Craving intimacy and psychological depth above all, they navigate the world like a game in order to win and conquer whatever they set their sights upon.",
        console.log("Scorpio");
    } 
    else if (monthValue === "Nov" && (dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Sagittarius",
        document.getElementById("astroImg").src = "./astrology/sagittarius.png",
        document.getElementById("astroInfo").textContent = "Adventurous, spontaneous and optimistic, Sagittarians crave expansion and exploration above all. They refuse to be caged and hunger for everything that life has to offer them. They tend to be sojourners, seeking new ideas, relationships and experiences that will teach them more about themselves and the world.",
        console.log("Sagittarius");
    } 
    else if (monthValue === "Dec" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19" || dayValue === "20" || dayValue === "21")){
        document.getElementById("astroTitle").textContent = "Sagittarius",
        document.getElementById("astroImg").src = "./astrology/sagittarius.png",
        document.getElementById("astroInfo").textContent = "Adventurous, spontaneous and optimistic, Sagittarians crave expansion and exploration above all. They refuse to be caged and hunger for everything that life has to offer them. They tend to be sojourners, seeking new ideas, relationships and experiences that will teach them more about themselves and the world.",
        console.log("Sagittarius");
    } 
    else if (monthValue === "Dec" && (dayValue === "22" || dayValue === "23" || dayValue === "24" || dayValue === "25" || dayValue === "26" || dayValue === "27" || dayValue === "28" || dayValue === "29" || dayValue === "30" || dayValue === "31")){
        document.getElementById("astroTitle").textContent = "Capricorn",
        document.getElementById("astroImg").src = "./astrology/capricorn.png",
        document.getElementById("astroInfo").textContent = "Ambitious, reserved and patient, Capricorns desire to build a life that has a solid foundation. This most often leads them to become especially hardworking, focused on creating career and financial success. However, they just as equally value strong long-term relationships and a domestic life that also feel like personal achievements.",
        console.log("Capricorn");
    } 
    else if (monthValue === "Jan" && (dayValue === "1" || dayValue === "2" || dayValue === "3" || dayValue === "4" || dayValue === "5" || dayValue === "6" || dayValue === "7" || dayValue === "8" || dayValue === "9" || dayValue === "10" || dayValue === "11" || dayValue === "12" || dayValue === "13" || dayValue === "14" || dayValue === "15" || dayValue === "16" || dayValue === "17" || dayValue === "18" || dayValue === "19")){
        document.getElementById("astroTitle").textContent = "Capricorn",
        document.getElementById("astroImg").src = "./astrology/capricorn.png",
        document.getElementById("astroInfo").textContent = "Ambitious, reserved and patient, Capricorns desire to build a life that has a solid foundation. This most often leads them to become especially hardworking, focused on creating career and financial success. However, they just as equally value strong long-term relationships and a domestic life that also feel like personal achievements.",
        console.log("Capricorn");
    } 
    else if (monthValue === "" || dayValue === "") {
        document.getElementById("astroTitle").textContent = "enter your birth day",
        document.getElementById("astroImg").src = "",
        document.getElementById("astroInfo").textContent = "",
        console.log("");
    }

     }
)

 
 
 const elements = document.querySelectorAll(".fade");

    // Add event listener for scrolling
    window.addEventListener("scroll", () => {
    elements.forEach(element => {
        // Get the distance of the element from the top of the viewport
        const distance = element.getBoundingClientRect().top;

        // If the element is in the viewport, add the "fade-in" class
        if (distance < window.innerHeight * 1) {
        element.classList.add("fade-in");
        } else {
        element.classList.remove("fade-in");
        }
    });
    });


      
// const observer = new IntersectionObserver( (entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//         entry.target.classList.add('show');
//         } 
//         else {
//             entry.target.classList.remove('show');
//             }
//         });
//     });
//     const hiddenElements = document.querySelectorAll(".hidden");
//     hiddenElements.forEach((el) => observer.observe(el));

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }
});

inobounce.enable();



// const navBar = document.getElementById('userInfo');

// window.addEventListener('scroll', () => {
//     let lastScrollPosition = 0;

//     window.addEventListener('scroll', () => {
//       const currentScrollPosition = window.scrollY;
    
//       if (currentScrollPosition < lastScrollPosition) {
//         // User has scrolled up, show the navigation bar
//         navBar.classList.remove('hidden');
//       } else {
//         // User has scrolled down, hide the navigation bar
//         navBar.classList.add('hidden');
//       }
    
//       lastScrollPosition = currentScrollPosition;
//     });
//       });



function scrollToTop() {
    document.documentElement.scrollTop = 0;
    }

    window.addEventListener("scroll", function() {
        let scrollPos = window.scrollY;
        let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        let percentScrolled = (scrollPos / documentHeight) * 100;
        let progressBar = document.querySelector(".progress-bar");
        progressBar.style.width = percentScrolled + "%";
      });
      

