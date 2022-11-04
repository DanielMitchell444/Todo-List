

const addTasks = document.querySelector('.add-task')

const content = document.querySelector(".content");

const todayBtn = document.getElementById('today');

const form = document.querySelector(".form");

const submitBtn = document.querySelector(".addTaskBtn");

const toggleBtn = document.querySelector(".fa-bars");

const add = document.querySelector('.add');

const button = document.querySelector('.submit');

const myArray = [];

const today = document.querySelector('.today');






toggleBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("main-toggle");
});


const getInfo = () => {

  var modal = document.getElementById("myModal");
  const taskValue = document.querySelector('.taskName').value;
  const scheduleValue = document.querySelector('.scheduled').value;
  const contentTwo = document.querySelector('.task-content');


  if(taskValue !== "" && scheduleValue !== ""){

  const createDiv = document.createElement('div');
  const h1 = document.createElement('p');
  const h2 = document.createElement('p');
  const deleteBtn = document.createElement('button');


  deleteBtn.innerHTML = "Delete";

  deleteBtn.className = "deleteBtn";



  createDiv.classList.add('task-box');

  h1.innerHTML = taskValue;

  h2.innerHTML = scheduleValue;

  createDiv.appendChild(h1);
  createDiv.appendChild(h2);
  createDiv.appendChild(deleteBtn);

  contentTwo.appendChild(createDiv);

  myArray.push(createDiv);




 

  modal.style.display = "none";


  
  deleteBtn.addEventListener("click", (event) => {
    event.target.parentNode.remove();

     myArray.filter((v) => v[1] !== event.target);
  });


  }

  else{
   alert('please enter a value');
  }

}


/*js for modal window */

const openModal = () => {
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

}



const getDate = () => {

  const date = document.querySelector(".scheduled").value;
  var q = new Date();
  var dateValue = new Date(q.getFullYear(), q.getMonth(), q.getDate());
  var mydate = new Date(date);
  let valid = false;

  if (dateValue >= mydate) {

    getInfo();


  } else {
    alert("please enter a date later todays date");
    valid = false;
  }
  return valid;


}




addTasks.addEventListener('click', openModal);

button.addEventListener('click', getInfo);


add.addEventListener('click', (e) => {

getDate();
})


today.addEventListener('click', (e) => {
 getDate();
})



