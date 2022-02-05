// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the places and people
function cleanAndCap (str){
  if(!str) return null
  let temp = str.trim()
  return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstPluralNoun= words.get('plural-noun-1');
const secondPluralNoun = words.get('plural-noun-2');

const noun1 = words.get('noun-1');
const person1 = cleanAndCap(words.get('person-1'));

const verb1 = words.get('verb-1');
const place1 = words.get('place-1');

const adj1 = words.get('adj-1');
const adj2 = words.get('adj-2');

const verb2 = words.get('verb-2');
const noun2 = words.get('noun-2');

const noun3 = words.get('noun-3');
const adj3 = words.get('adj-3');

const person2 = cleanAndCap(words.get('person-2'));
const person3 = cleanAndCap(words.get('person-3'));

const verb3 = cleanAndCap(words.get('verb-3'));


// The string containing HTML and text which will populate the story.html page
const story = `<p>Blanche certainly has a way with words, especially when she speaks about <span class="word" title="id: plural-noun-1">${firstPluralNoun}</span>:</p>

<p>"I do believe your sweet <span class="word" title="id: plural-noun-2">${secondPluralNoun}</span> could charm the <span class="word" title="id: noun-1">${noun1}</span> right off the honeysuckle!"</p>

<p>"I swear, <span class="word" title="id: person-1">${person1}</span>, that I will never <span class="word" title="id: verb-1">${verb1}</span> another man. In (the) <span class="word" title="id: place-1">${place1}</span>. On a Saturday. Unless he’s <span class="word" title="id: adj-1">${adj1}</span>… and drives a nice car."</p>

<p>"Like Big Daddy always said about me, I have hair as <span class="word" title="id: plural-adj-2">${adj2}</span> as the dew on a field of sunflowers, eyes that <span class="word" title="id: verb-2">${verb2}</span> as blue as the Mississippi, and the prettiest smile this side of the Georgia <span class="word" title="id: noun-2">${noun2}</span>."</p>

<p>"Oh, I’ll never forget it! That night under the dogwood <span class="word" title="id: noun-3">${noun3}</span>, the air <span class="word" title="id: adj-3">${adj3}</span>, me with <span class="word" title="id: person-2">${person2}</span>. Or was it <span class="word" title="id: person-3">${person3}</span>?"</p>

<p>"I’m from the South! <span class="word" title="id: verb-3">${verb3}</span> is part of my heritage!"</p>`;


// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;