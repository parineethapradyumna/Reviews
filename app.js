// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "    Lorem ipsum dolor sit amet consectetur  adipisicing elit. Esse tempora corrupti voluptatem deleniti, quos, similique aperiam repellendus non sapiente amet mollitia.",
  },
  {
    
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora corrupti voluptatem deleniti, quos, similique aperiam repellendus non sapiente amet mollitia.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Software Engineering",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur  adipisicing elit. Esse tempora corrupti voluptatem deleniti, quos, similique aperiam repellendus non sapiente amet mollitia..",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "Boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse tempora corrupti voluptatem  deleniti, quos, similique aperiam repellendus non  sapiente amet mollitia..",
  },
];


// select items
const img = document.getElementById("person-img");
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
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
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
    currentItem = reviews.length -1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});