function addRandomQuote() {
  const greetings =
      ['Act as if what you do makes a difference. It does. - William James', 'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchhill', 
       'Never bend your head. Always hold it high. Look the world straight in the eye. - Hellen Keller', 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome. - William James',
       'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein', 'Sometimes you will never know the value of a moment, until it becomes a memory. - Dr. Seus', 'The most wasted of days is one without laughter. - E. E. Cummings',
       'You must do the things you think you cannot do. - Eleanor Roosevelt', 'It is never too late to be what you might have been. - George Eliot', 'Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination. - Mae Jemison',
       'Be the change that you wish to see in the world. - Mahatma Gandhi', 'If I cannot do great things, I can do small things in a great way. - Martin Luther King Jr.', 'Each person must live their life as a model for others. - Rosa Parks'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}  

// Greeting function
async function getGreetingUsingAsyncAwait() {
  const response = await fetch('/data');
  const greeting = response.text();
  document.getElementById('data-holder').innerText = greeting;
}

var mybtn = document.getElementsByClassName("testbtn")[0];
mybtn.click();

function move() {
  var elem = document.getElementById("Bar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width == 50) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}
function changeFont(){
	var fontType = [ "Arial", "Verdana", "Helvetica"];
var num;
num=Math.floor(Math.random()*3);
$('#fonts').css("font-family",fontType[num]).text("This is "+fontType[num]+". Beautiful!");
}