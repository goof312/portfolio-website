<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/pawantech12/portfolio-website)
  ![GitHub stars](https://img.shields.io/github/stars/pawantech12/portfolio-website?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/pawantech12/portfolio-website?style=social)

  <br />

  <h2 align="center">Responsive Portfolio Website</h2>

  Responsive Portfolio Website using HTML, CSS, and JavaScript.

  <a href="https://pawantech12.github.io/portfolio-website/"><strong>➥ Live Demo</strong></a>

</div>

<br />

### Desktop Preview

https://github.com/pawantech12/portfolio-website/assets/118673866/0322c419-a173-4aa9-a360-b09bd7bd24aa

### Prerequisites

Before you begin, ensure you have met the following requirements:

* You Should Know Basic or Intermediate of HTML ,CSS and JavaScript
* This website is developed by bootstrap 5 copy below code :
```
<!--- Bootstrap 5 css CDN Link --->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

<!-- bootstrap javascript cdn link  -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
```

* JQuery CDN LInk :
```
<!-- JavaScript jQuery CDN -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
```

* Bootstrap Icon :
```
<!-- bootstrap icon cdn link  -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.4/font/bootstrap-icons.css"/>
```

### AOS Animation Library Installation

### Basic
Add Styles in `<head>` :
```css
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
```
Add script right before closing `</body>` tag, and initialize AOS :
```js
<script src="https://unpkg.com/aos@next/dist/aos.js"></script>
<script>
  AOS.init();
</script>
```

### Using package managers

Install `aos` package:
* `yarn add aos@next`
* or `npm install --save aos@next`

Import script, styles and initialize AOS:
```js
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
```

In order to make it work you'll have to make sure your build process has configured styles loader, and bundles it all correctly.
If you're using [Parcel](https://parceljs.org/) however, it will work out of the box as provided.

### How to use it ?
1. Initialize AOS :
```js
// initializing AOS library
AOS.init({
  duration: 1000,
  offset: 50,
});
```

2. Set animation using `data-aos` attribute:
```
<div data-aos="fade-in"></div>
```

* For More Guidence Click on <a href="https://github.com/michalsnik/aos/blob/next/README.md">AOS Animation</a>

### Project Contain

* Sticky Responsive Navigation Bar
* Hero Section
* Expertise section
* Skill Section with Progress Animation
* Working Portfolio Section
* Testimonial Section
* Blog Section
* Contact Section
* Footer Section
* Fully Responsive for all devices

### Font Family
 
 * I have Used Google Fonts - Josefin Sans 
```
<!-- google font link -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
```

### Run Locally

To run **Personal Portfolio** locally, run this command on your git bash:

Linux and macOS:

```bash
sudo git clone https://github.com/pawantech12/portfolio-website.git
```

Windows:

```bash
git clone https://github.com/pawantech12/portfolio-website.git
```

### Contact

If you want to contact with me you can reach me at [Instagram](https://www.instagram.com/codewithpawan/).

### License

This project is **Free To Use** and does not contains any license.




backup code

 <section class="testimonial mt-5 pt-5" id="testimonial">
    <div class="row justify-content-evenly">
      <div class="col-md-4 col-10" data-aos="slide-right">
        <img src="images/tastimonials-img.png" class="img-fluid" alt="" />
      </div>
      <div class="col-md-6 col-10 mt-5" data-aos="slide-left">
        <div class="heading">
          <small>Testimonials</small>
          <h3>Happy Clients Feedback</h3>
          <!-- here we will use carousel element from bootstrap -->
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class="row justify-content-evenly">
                  <div class="col-2 text-center">
                    <i class="bi bi-quote"></i>
                  </div>
                  <div class="col-10">
                    <p class="text-muted">
                      Quisruam est, qui dolorem ipsum quia dolor sit amet,
                      consecteaur aeci velit, sed quia non numquam eius modi
                      tempora incidunt ut lao magnam aliquam quaerat ...
                    </p>
                    <h4>Kevin Andrew</h4>
                    <small class="fs-6 text-muted">CEO of Company</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-evenly">
                  <div class="col-2 text-center">
                    <i class="bi bi-quote"></i>
                  </div>
                  <div class="col-10">
                    <p class="text-muted">
                      Quisruam est, qui dolorem ipsum quia dolor sit amet,
                      consecteaur aeci velit, sed quia non numquam eius modi
                      tempora incidunt ut lao magnam aliquam quaerat ...
                    </p>
                    <h4>Kevin Andrew</h4>
                    <small class="fs-6 text-muted">CEO of Company</small>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div class="row justify-content-evenly">
                  <div class="col-2 text-center">
                    <i class="bi bi-quote"></i>
                  </div>
                  <div class="col-10">
                    <p class="text-muted">
                      Quisruam est, qui dolorem ipsum quia dolor sit amet,
                      consecteaur aeci velit, sed quia non numquam eius modi
                      tempora incidunt ut lao magnam aliquam quaerat ...
                    </p>
                    <h4>Kevin Andrew</h4>
                    <small class="fs-6 text-muted">CEO of Company</small>
                  </div>
                </div>
              </div>
            </div>
            <button class="nextprev-btn rounded-pill prev-btn" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="prev">
              <i class="bi bi-arrow-left-circle-fill prev"></i>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="nextprev-btn rounded-pill next-btn" type="button" data-bs-target="#carouselExampleControls"
              data-bs-slide="next">
              <i class="bi bi-arrow-right-circle-fill next"></i>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- testimonial ends here -->

  <!-- blog section starts -->
  <section class="blog mt-5 pb-5" id="blog">
    <div class="heading text-center pt-5">
      <small>Latest News</small>
      <h3>Blog & Articles</h3>
    </div>
    <div class="row justify-content-evenly px-4 mt-4" data-aos="fade-up">
      <div class="blogpost col-md-4 col-10 mt-2 mt-md-0 game all">
        <div class="card">
          <img src="images/2048game.png" class="card-img-top rounded-4" alt="..." />
          <div class="card-body px-4">
            <small>By Pawan Kumavat</small><span class="ms-3">Mar 8,2022</span>
            <h4 class="card-title">
              <a href="">Quis autem vea eum iure reprehenderit</a>
            </h4>
            <p class="text-muted">
              Dolor repellendus temporibus autem quibusdam officiis debitis
              rerum nece aibus minima veniam.
            </p>
            <a href="#" class="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal1">Read More</a>
          </div>
        </div>
      </div>
      <div class="blogpost col-md-4 col-10 mt-5 mt-md-0 website all">
        <div class="card">
          <img src="images/currency-converter.png" class="card-img-top rounded-4" alt="..." />
          <div class="card-body px-4">
            <small>By Pawan Kumavat</small><span class="ms-3">Mar 8,2022</span>
            <h4 class="card-title">
              <a href="">Quis autem vea eum iure reprehenderit</a>
            </h4>
            <p class="text-muted">
              Dolor repellendus temporibus autem quibusdam officiis debitis
              rerum nece aibus minima veniam.
            </p>
            <a href="#" class="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal2">Read More</a>
          </div>
        </div>
      </div>
      <div class="blogpost col-md-4 col-10 mt-5 mt-md-0 webapp all">
        <div class="card">
          <img src="images/dictionary.png" class="card-img-top rounded-4" alt="..." />
          <div class="card-body px-4">
            <small>By Pawan Kumavat</small><span class="ms-3">Mar 8,2022</span>
            <h4 class="card-title">
              <a href="">Quis autem vea eum iure reprehenderit</a>
            </h4>
            <p class="text-muted">
              Dolor repellendus temporibus autem quibusdam officiis debitis
              rerum nece aibus minima veniam.
            </p>
            <a href="#" class="read-more-btn link" data-bs-toggle="modal" data-bs-target="#exampleModal3">Read More</a>
          </div>
        </div>
      </div>
      <!-- here we will make modals if Read more link is clicked the modal will popup -->
      <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <button type="button" class="btn-c rounded-pill" data-bs-dismiss="modal"><i
                class="bi bi-x-circle-fill"></i></button>

            <div class="modal-body px-4">
              <div class="img">
                <img src="images/2048game.png" class="img-fluid" alt="">
              </div>
              <div class="content mt-3">
                <small>By Pawan Kumavat</small><span class="text-muted ms-2">Mar 8,2022</span>
                <h4 class="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                <div class="social-links mt-4">
                  <button href="" class="rounded-pill dribble">
                    <i class="bi bi-dribbble"></i>
                  </button>
                  <button href="" class="rounded-pill whatsapp">
                    <i class="bi bi-whatsapp"></i>
                  </button>
                  <button href="" class="rounded-pill behance">
                    <i class="bi bi-behance"></i>
                  </button>
                </div>
                <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a
                  tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus
                  nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin.
                  Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero
                  arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
              </div>
            </div>
            <div class="heading px-2">
              <h3 class="fs-3 ms-3">Leave A Comment</h3>
            </div>
            <div class="contact-form ms-3 mt-3 pb-4 px-2">
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mobile No." />
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                  rows="5"></textarea>
              </div>
              <button class="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <button type="button" class="btn-c rounded-pill" data-bs-dismiss="modal"><i
                class="bi bi-x-circle-fill"></i></button>

            <div class="modal-body px-4">
              <div class="img">
                <img src="images/currency-converter.png" class="img-fluid" alt="">
              </div>
              <div class="content mt-3">
                <small>By Pawan Kumavat</small><span class="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                <h4 class="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                <div class="social-links mt-4">
                  <button href="" class="rounded-pill dribble">
                    <i class="bi bi-dribbble"></i>
                  </button>
                  <button href="" class="rounded-pill whatsapp">
                    <i class="bi bi-whatsapp"></i>
                  </button>
                  <button href="" class="rounded-pill behance">
                    <i class="bi bi-behance"></i>
                  </button>
                </div>
                <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a
                  tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus
                  nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin.
                  Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero
                  arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
              </div>
            </div>
            <div class="heading px-2">
              <h3 class="fs-3 ms-3">Leave A Comment</h3>
            </div>
            <div class="contact-form ms-3 mt-3 pb-4 px-2">
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mobile No." />
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                  rows="5"></textarea>
              </div>
              <button class="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
      <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">

            <button type="button" class="btn-c rounded-pill" data-bs-dismiss="modal"><i
                class="bi bi-x-circle-fill"></i></button>

            <div class="modal-body px-4">
              <div class="img">
                <img src="images/dictionary.png" class="img-fluid" alt="">
              </div>
              <div class="content mt-3">
                <small>By Pawan Kumavat</small><span class="text-muted ms-2 ms-md-0">Mar 8,2022</span>
                <h4 class="card-title mt-3">Quis autem vea eum iure reprehenderit</h4>
                <div class="social-links mt-4">
                  <button href="" class="rounded-pill dribble">
                    <i class="bi bi-dribbble"></i>
                  </button>
                  <button href="" class="rounded-pill whatsapp">
                    <i class="bi bi-whatsapp"></i>
                  </button>
                  <button href="" class="rounded-pill behance">
                    <i class="bi bi-behance"></i>
                  </button>
                </div>
                <p class="text-muted mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor eros a
                  tellus auctor, nec suscipit nunc dignissim. Ut suscipit gravida augue sed elementum. Sed sed luctus
                  nisl. Donec scelerisque nisi in sodales mattis. Vestibulum suscipit odio ac enim blandit sollicitudin.
                  Aliquam ultrices sem quis urna placerat interdum. Etiam rutrum, quam sagittis tristique mollis, libero
                  arcu scelerisque erat, eget tincidunt eros diam quis nunc.</p>
              </div>
            </div>
            <div class="heading px-2">
              <h3 class="fs-3 ms-3">Leave A Comment</h3>
            </div>
            <div class="contact-form ms-3 mt-3 pb-4 px-2">
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
              </div>
              <div class="mb-3">
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail" />
              </div>
              <div class="mb-3">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Mobile No." />
              </div>
              <div class="mb-3">
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                  rows="5"></textarea>
              </div>
              <button class="c-btn h-btn mt-3 py-2 px-4 rounded-pill">
                Submit
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- blog section ends here -->