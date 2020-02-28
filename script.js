// my lit gitbranch change
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.getElementsByTagName("li");
// remove button 


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    //3 bonus appending done butotns to new elements
    // creating done buttons next to items
    var doneButton = document.createElement('button');
    doneButton.appendChild(document.createTextNode('Done'))
    li.appendChild(doneButton)
    
    
   
   
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//1 toggling list items
for (let items = 0; items < listItems.length; items++) {

    
    listItems[items].addEventListener('click',toggle)

    // creating done buttons next to items
    var doneButton = document.createElement('button');
    doneButton.appendChild(document.createTextNode('Done'))
    listItems[items].appendChild(doneButton)

    doneButton.addEventListener('click',deleteItems)



} 

function toggle(e) {
    console.log(e)
    console.log(e.target)
    e.target.classList.toggle('done')

}

// delete individual list items
function deleteItems(e) {
    console.log(e.target.parentElement)
    e.target.parentElement.remove()

}
 
// gradient background
var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

// we want to listen to even to notice user input 
color1.addEventListener('input',createGradient)
color2.addEventListener('input',createGradient)

function createGradient() {
    
    // main component !!!
    body.style.background = 
    'linear-gradient(to right,'
     + color1.value + 
     ',' 
     + color2.value +
      ')';
}
// textContext ? css
css.textContent = body.style.background + ';';



