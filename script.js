const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

function addMember(member) {
  grid.innerHTML += `
        <div class="col-lg-6 col-xxl-4">
        <div class="bg-black text-white">
        <div class="row">

              <div class="col-4">
                <img class="h-100 w-100" src="${member.img}" alt="${member.name}">
              </div>

              <div class="col-8 my-4">
                  <h2 class="fs-3 mb-0 fw-bold">${member.name.toUpperCase()}</h2>
                  <p class="fs-5 mb-0">${member.role}</p>
                  <a class="fs-5 text-info text-decoration-none" href="mailto:${member.email}">${member.email}</a>
              </div>

        </div>
        </div>
        </div>`;
}

// selectors
const grid = document.getElementById("grid");
const form = document.getElementsByTagName("form")[0];

// populating grid
for (const member of teamMembers) {
  addMember(member);
}

// ------ finisci BONUS ------
// adding listener
form.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      pro;
    };
  }
});
