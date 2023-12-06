  const quotes = [
  "“Excuses are monuments of nothing, that build bridges to nowhere” – Dre",
  "“If you are tired of starting over, don't quit” – James",
    "“This for everybody going through tough times, believe me, been there, done that. But every day above ground is a great day, remember that” – Pitbut (Mr. Worldwide)",
    "“When the cat is away, the mice have fun” – John K.",
    "The Night is Darkest Right Before the Dawn. And i Promise you, the Dawn is Coming",
    "You either die a Hero or live long enough to see yourself become the Villain",
   "“Pressure is a privilege” – James",
   "“I'm usually Drug-free, but shiiiit i'm with the homies” – Kendrick Lamar",
   "“There are no timeouts in real life” – Jared",
   "“You are only as good as your last F up” – Glenn",
    "“Go piss up a rope” – Glenn",
     "“The way to get started is to quit talking and begin doing.” – Walt Disney",
  "“If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.” – Oprah Winfrey", 
  "“If life were predictable it would cease to be life, and be without flavor.” – Eleanor Roosevelt",
  "“If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.” – James Cameron",
  "“Spread love everywhere you go. Let no one ever come to you without leaving happier.” – Mother Teresa",
  "“When you reach the end of your rope, tie a knot in it and hang on.” – Franklin D. Roosevelt",
  "“Always remember that you are absolutely unique. Just like everyone else.” – Margaret Mead",
  "“Believe you can and you're halfway there.” – Theodore Roosevelt",
  "“What you get by achieving your goals is not as important as what you become by achieving your goals.” ― Zig Ziglar",
  "“I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.” – Jimmy Dean",
  "“There is nothing impossible to they who will try.” – Alexander the Great",
  "“The person who says it cannot be done should not interrupt the person who is doing it.” – Chinese Proverb",
  "“A room without books is like a body without a soul.” – Marcus Tullius Cicero",
  " “You miss 100% of the shots you don’t take.” – Wayne Gretzky",
  "“Winning isn’t everything, but wanting to win is.” – Vince Lombardi",
  "“I am not a product of my circumstances. I am a product of my decisions.” – Stephen Covey",
  "“Every child is an artist.  The problem is how to remain an artist once he grows up.” – Pablo Picasso",
  "“You can never cross the ocean until you have the courage to lose sight of the shore.” – Christopher Columbus",
  "“I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” – Maya Angelou",
  "“Either you run the day, or the day runs you.” – Jim Rohn",
  "“Heaven on Earth is a choice you must make, not a place you must find.” - Wayne Dyer",  
  "“You must expect great things of yourself before you can do them.” - Michael Jordan",
  " “There are no traffic jams along the extra mile.” - Roger Staubach",
  "“Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.” - Arthur Rubinstein",
  "“If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.” – Vincent Van Gogh",
  "“The best revenge is massive success.” – Frank Sinatra",
  "“People often say that motivation doesn’t last. Well, neither does bathing... that’s why we recommend it daily.” – Zig Ziglar",
  "“In order to succeed, your desire for success should be greater than your fear of failure. ”- Bill Cosby",
  "“A ship is safe in harbor, but that’s not what ships are for.” – William Shedd",  
  "“There are better starters than me but I’m a strong finisher.” – Usain Bolt",
  "“The only person you are destined to become is the person you decide to be.” – Ralph Waldo Emerson", 
  "“Whether you think you can or you think you can’t, you’re right.” – Henry Ford",
  "“You must be the change you wish to see in the world.” - Gandhi",
  "“Whenever you see a successful person, you only see the public glories, never the private sacrifices to reach them.” – Vaibhav Shah",
  "“You may have to fight a battle more than once to win it.” – Margaret Thatcher",
  "“I didn’t come this far, to only come this far.” – Unknown",
  "“Be not afraid of greatness. Some are born great, some achieve greatness, and others have greatness thrust upon them.” – William Shakespeare",
  "“A champion is afraid of losing. Everyone else is afraid of winning.” – Billie Jean King",
  "“For every reason it's not possible, there are hundreds of people who have faced the same circumstances and succeeded.” – Jack Canfield",
  "“People ask, 'What's the best role you've ever played?' The next one.” – Kevin Kline",
  "“What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.” – Bob Dylan",
  "“The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.” – Napoleon Hill",
  "“You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.” – Booker T. Washington",
  "“Self-belief and hard work will always earn you success.” - Virat Kohli",
  "“If you believe it’ll work out, you’ll see opportunities. If you don't believe it'll work out, you'll see obstacles.” – Wayne Dyer",
  "“I honestly think it is better to be a failure at something you love than to be a success at something you hate.” – George Burns"  
  
  ];
  
  
   // let ding = new Audio("yugh.mp3");


  let images = ["heather.webp","Heather2.jpg", "dre.jpg", "mikes.webp","davel.jpg","Bob Jones.png","Scot E.jpg","Sam.png","John K.png","IMG_9636.jpg","IMG_9882.jpg","IMG_9776.png","IMG_9882.jpg","IMG_9865.jpg","IMG_9769.png","Jesse.png","jared.png", "james.png", "glenn.png", "joe.webp", "bob.webp","chrish.webp", "chrisw.webp", "dave.webp", "joana.webp", "nancy.webp", "rick.webp", "sam.webp", "yann.webp", "john.webp"];  
  
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
