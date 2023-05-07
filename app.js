const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    links.classList.toggle('show-links');
});


// FAQ *************************************************************


const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener('click', function(){

        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text");
            }
        });

        question.classList.toggle("show-text");
    });
});



// review ******************

// local reviews data
const reviews = [
    {
      id: 1,
      name: "Vinita Pathak",
      job: "Interior Designer",
      text:
        "Getting an FSSAI License was a daunting task, but the term at Virtual India made it look easy. They helped me with the documentation, and the process was completeted in on time.I highly recommend their services",
    },
    {
      id: 2,
      name: "Vivek Agarwal",
      job: "Developer",
      text:
        "I was skeptical about Udyam Registration, but after to the team at Virtual India,I gained confidence. They explained the process and helped me with the application. I got my registration certicate on the, thanks to them.",
    },
    {
      id: 3,
      name: "Rahul Roy",
      job: "Architech",
      text:
        "Trademark registration was important for my business, and Virtual India helped me through the process. They were patient and professional, and I got my trademark registered without any hassle. I would definitely recommend their services.",
    },
    {
      id: 4,
      name: "Vinita Pathak",
      job: "The boss",
      text:
        "Getting an FSSAI License was a daunting task, but the term at Virtual India made it look easy. They helped me with the documentation, and the process was completeted in on time.I highly recommend their services.",
    },
  ];
  // select items
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");
  
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");
  
  // set starting item
  let currentItem = 0;
  
  // load initial item
  window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  });
  
  // show person based on item
  function showPerson(person) {
    const item = reviews[person];
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  // show next person
  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  // show prev person
  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });





// fixed nav ******************88
