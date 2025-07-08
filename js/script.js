// htmlcss progress circular bar 
// ======= HTML =======
let htmlProgress = document.querySelector(".html"),
  htmlValue = document.querySelector(".html-progress");

let htmlStartValue = 0,
  htmlEndValue = 90,
  htmlSpeed = 30;

let progressHtml = setInterval(() => {
  htmlStartValue++;
  htmlValue.textContent = `${htmlStartValue}%`;
  htmlProgress.style.background = `conic-gradient(#fca61f ${htmlStartValue * 3.6}deg, #ededed 0deg)`;
  if (htmlStartValue === htmlEndValue) clearInterval(progressHtml);
}, htmlSpeed);


// ======= JavaScript =======
let jsProgress = document.querySelector(".javascript"),
  jsValue = document.querySelector(".javascript-progress");

let jsStartValue = 0,
  jsEndValue = 75,
  jsSpeed = 30;

let progressJs = setInterval(() => {
  jsStartValue++;
  jsValue.textContent = `${jsStartValue}%`;
  jsProgress.style.background = `conic-gradient(#7d2ae8 ${jsStartValue * 3.6}deg, #ededed 0deg)`;
  if (jsStartValue === jsEndValue) clearInterval(progressJs);
}, jsSpeed);


// ======= Python =======
let pythonProgress = document.querySelector(".python"),
  pythonValue = document.querySelector(".python-progress");

let pythonStartValue = 0,
  pythonEndValue = 85,
  pythonSpeed = 30;

let progressPython = setInterval(() => {
  pythonStartValue++;
  pythonValue.textContent = `${pythonStartValue}%`;
  pythonProgress.style.background = `conic-gradient(#306998 ${pythonStartValue * 3.6}deg, #ededed 0deg)`;
  if (pythonStartValue === pythonEndValue) clearInterval(progressPython);
}, pythonSpeed);


// ======= Django =======
let djangoProgress = document.querySelector(".django"),
  djangoValue = document.querySelector(".django-progress");

let djangoStartValue = 0,
  djangoEndValue = 80,
  djangoSpeed = 30;

let progressDjango = setInterval(() => {
  djangoStartValue++;
  djangoValue.textContent = `${djangoStartValue}%`;
  djangoProgress.style.background = `conic-gradient(#092e20 ${djangoStartValue * 3.6}deg, #ededed 0deg)`;
  if (djangoStartValue === djangoEndValue) clearInterval(progressDjango);
}, djangoSpeed);


// ======= Flask =======
let flaskProgress = document.querySelector(".flask"),
  flaskValue = document.querySelector(".flask-progress");

let flaskStartValue = 0,
  flaskEndValue = 70,
  flaskSpeed = 30;

let progressFlask = setInterval(() => {
  flaskStartValue++;
  flaskValue.textContent = `${flaskStartValue}%`;
  flaskProgress.style.background = `conic-gradient(#000000 ${flaskStartValue * 3.6}deg, #ededed 0deg)`;
  if (flaskStartValue === flaskEndValue) clearInterval(progressFlask);
}, flaskSpeed);


// ======= Bootstrap =======
let bootstrapProgress = document.querySelector(".bootstrap"),
  bootstrapValue = document.querySelector(".bootstrap-progress");

let bootstrapStartValue = 0,
  bootstrapEndValue = 85,
  bootstrapSpeed = 30;

let progressBootstrap = setInterval(() => {
  bootstrapStartValue++;
  bootstrapValue.textContent = `${bootstrapStartValue}%`;
  bootstrapProgress.style.background = `conic-gradient(#563d7c ${bootstrapStartValue * 3.6}deg, #ededed 0deg)`;
  if (bootstrapStartValue === bootstrapEndValue) clearInterval(progressBootstrap);
}, bootstrapSpeed);


// ======= C# =======
let csharpProgress = document.querySelector(".csharp"),
  csharpValue = document.querySelector(".csharp-progress");

let csharpStartValue = 0,
  csharpEndValue = 75,
  csharpSpeed = 30;

let progressCsharp = setInterval(() => {
  csharpStartValue++;
  csharpValue.textContent = `${csharpStartValue}%`;
  csharpProgress.style.background = `conic-gradient(#178600 ${csharpStartValue * 3.6}deg, #ededed 0deg)`;
  if (csharpStartValue === csharpEndValue) clearInterval(progressCsharp);
}, csharpSpeed);


// ======= ASP.NET =======
let aspnetProgress = document.querySelector(".aspnet"),
  aspnetValue = document.querySelector(".aspnet-progress");

let aspnetStartValue = 0,
  aspnetEndValue = 80,
  aspnetSpeed = 30;

let progressAspnet = setInterval(() => {
  aspnetStartValue++;
  aspnetValue.textContent = `${aspnetStartValue}%`;
  aspnetProgress.style.background = `conic-gradient(#512bd4 ${aspnetStartValue * 3.6}deg, #ededed 0deg)`;
  if (aspnetStartValue === aspnetEndValue) clearInterval(progressAspnet);
}, aspnetSpeed);


// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      document.getElementById('navbar-top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
    } else {
      document.getElementById('navbar-top').classList.remove('fixed-top');
      // remove padding top from body
      document.body.style.paddingTop = '0';
    }
  });
});


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section[id]");
  console.log(sections)
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
});

