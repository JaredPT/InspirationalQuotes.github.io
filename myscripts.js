  const quotes = [
    "Be yourself; everyone else is already taken", 
    "You only live once, but if you do it right, once is enough",
    "Be the change that you wish to see in the world",
    "Excuses are monuments of nothing, that build bridges to nowhere",
    "If you are tired of starting over, don't quit", 
    "This for everybody going through tough times, believe me, been there, done that. But every day above ground is a great day, remember that",
    "The way to get started is to quit talking and begin doing",
    "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
    "If life were predictable it would cease to be life, and be without flavor",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success",
    "Life is what happens when you're busy making other plans",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier", 
    "When you reach the end of your rope, tie a knot in it and hang on",
    "Always remember that you are absolutely unique. Just like everyone else",
    "Don't judge each day by the harvest you reap but by the seeds that you plant",
    "The future belongs to those who believe in the beauty of their dreams",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn",
    "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart",
    "It is during our darkest moments that we must focus to see the light",
    "Whoever is happy will make others happy too",
    "Do not go where the path may lead, go instead where there is no path and leave a trail",
    "You will face many defeats in life, but never let yourself be defeated",
    "In the end, it's not the years in your life that count. It's the life in your years", 
    "Never let the fear of striking out keep you from playing the game",
    "Life is either a daring adventure or nothing at all",
    "Many of life's failures are people who did not realize how close they were to success when they gave up",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier",
    "When you reach the end of your rope, tie a knot in it and hang on",
    "Always remember that you are absolutely unique. Just like everyone else",
    "When the cat is away, the mice come out and play",
    "The Night is Darkest Right Before the Dawn. And i Promise you, the Dawn is Coming",
    "You either die a Hero or live long enough to see yourself become the Villain",
    "Pressure is a privilege",
    "I'm usually Drug-Free, but shiiiit I'm with the homies",
    "There are no timeouts in real life",
  
  ];
  
  
   // let ding = new Audio("yugh.mp3");


  let images = ["heather.webp","mikes.webp","davel.jpg","Bob Jones.png","Scot E.jpg","Sam.png","John K.png","IMG_9636.jpg","IMG_9882.jpg","IMG_9776.png","IMG_9882.jpg","IMG_9865.jpg","IMG_9769.png","Jesse.png","jared.png", "james.png", "glenn.png", "joe.webp", "bob.webp","chrish.webp", "chrisw.webp", "dave.webp", "joana.webp", "nancy.webp", "pam.webp", "rick.webp", "sam.webp", "yann.webp", "john.webp"];  
  
  function generate() {

  //  ding.play();

    let randomQuoteIndex = Math.floor(Math.random() * quotes.length);  
    let randomImageIndex = Math.floor(Math.random() * images.length);
    
    document.getElementById("quote").innerText = quotes[randomQuoteIndex];
    document.getElementById("randomImg").src = "images/" + images[randomImageIndex];

  
  }

const ytId = "fV7zFzhqYps"; // Example video ID
const ytUrl = `https://www.youtube.com/embed/${ytId}?autoplay=1`;

let audio = new Audio(ytUrl); 

audio.play();


  setInterval(generate, 15000); // call every 10 seconds

  // On button click
  document.getElementById("generate-btn").addEventListener("click", generate);
  
  const myDate = new Date(); 
  const xmas = Date.parse("Dec 25, "+myDate.getFullYear()) 
  const today = Date.parse(myDate) 
  
  const daysToChristmas = Math.round((xmas-today)/(1000*60*60*24)) 
  
  
  if (daysToChristmas == 0) 
  $('#days').text("It's Christmas!! Merry Christmas!");
  
  if (daysToChristmas < 0) 
  $('#days').text("Christmas was "+-1*(daysToChristmas)+" days ago.");
  
  if (daysToChristmas > 0) 
  $('#days').text(daysToChristmas+" days to Christmas!");
  
  //make snow
  snowDrop(150, randomInt(1035, 1280));
  snow(150, 150);
  
  function snow(num, speed) {
      if (num > 0) {
        setTimeout(function () {
          $('#drop_' + randomInt(1, 250)).addClass('animate');
          num--;
          snow(num, speed);
        }, speed);
      }
    };
  
    function snowDrop(num, position) {
      if (num > 0) {
        var drop = '<div class="drop snow" id="drop_' + num + '"></div>';
  
        $('body').append(drop);
        $('#drop_' + num).css('left', position);
        num--;
        snowDrop(num, randomInt(60, 1280));
      }
    };
  
  function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
