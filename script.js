const quotes = [
    "\"You must do the things you think you cannot do\"",
      "\"Be curious.\"",
      "\"Be bold, be courageous, be your best.\"",
      "\"If you want the rainbow, you gotta put up with the rain.\"",
      "\"If your actions inspire others to dream more, learn more, do more, and become more, you are a leader.\"",
    "\"Do one thing every day that scares you.\"",
    "\"Creativity is the sudden cessation of stupidity.\"",
    "\"When one's mind is made up, this diminishes fear.\""
  ]
  
  // changes the quote on the top bar of the website
  function changeQuote(){
    const quote = document.getElementById("quote");
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerHTML = randomQuote;
  }
  
  // adds a course to the course manager section of the website
  // displays in an organized table
  function addCourse(){
    const form = document.getElementById("form");
    if (form.style.display == 'none'|| form.style.display ==''){
        form.style.display = 'block';
    }
  }