<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Restro - Amazing & Delicious Food</title>
  <meta name="title" content="Restro - Amazing & Delicious Food">
  <meta name="description" content="This is a Restaurant html template">

  <link rel="shortcut icon" href="./images/favicon.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Forum&display=swap" rel="stylesheet">

  <link rel="stylesheet" href="styles.css">

  <link rel="preload" as="image" href="./images/hero-slider-1.jpg">
  <link rel="preload" as="image" href="./images/hero-slider-2.jpg">
  <link rel="preload" as="image" href="./images/hero-slider-3.jpg">
  <link rel="preload" as="image" href="./images/hero-slider-4.jpg">

</head>

<body id="top">

  <div class="preload" data-preaload>
    <div class="circle"></div>
    <p class="text">Restro</p>
  </div>

  <header class="header" data-header>
    <div class="container">

      <nav class="navbar" data-navbar>

        <button class="close-btn" aria-label="close menu" data-nav-toggler>
          <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
        </button>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link hover-underline active">
              <div class="separator"></div>

              <span class="span">Home</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#menu" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Menus</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">About Us</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#chef" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Our Chefs</span>
            </a>
          </li>

          <li class="navbar-item">
            <a href="#contact" class="navbar-link hover-underline">
              <div class="separator"></div>

              <span class="span">Contact</span>
            </a>
          </li>

        </ul>

      </nav>

      <a href="#" class="btn btn-secondary">
        <span class="text text-1">Log In</span>

        <span class="text text-2" aria-hidden="true">Log In</span>
      </a>

      <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
        <span class="line line-1"></span>
        <span class="line line-2"></span>
        <span class="line line-3"></span>
      </button>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>

  <div class="wrapperr">
    <span class="icon-close">
      <ion-icon name="close"></ion-icon>
    </span>
    <div class="form-box login">
      <h2>Login</h2>
      <form action="#">
        <div class="input-box">
          <span class="icon">
            <ion-icon name="mail"></ion-icon>
          </span>
          <input type="email" required>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" required>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox">RememberMe</label>
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit" class="btn">Login</button>
        <div class="login-register">
          <p>Dont have an account? <a href="#" class="register-link">Register</a></p>
        </div>
      </form>
    </div>

    <div class="form-box register">
      <h2>Registration</h2>
      <form action="#">
        <div class="input-box">
          <span class="icon">
            <ion-icon name="person"></ion-icon>
          </span>
          <input type="text" required>
          <label>Username</label>
        </div>
        <div class="input-box">
          <span class="icon">
            <ion-icon name="mail"></ion-icon>
          </span>
          <input type="email" required>
          <label>Email</label>
        </div>
        <div class="input-box">
          <span class="icon">
            <ion-icon name="lock-closed"></ion-icon>
          </span>
          <input type="password" required>
          <label>Password</label>
        </div>
        <button type="submit" class="btn">Register</button>
        <div class="login-register">
          <p>Already have an account? <a href="#" class="login-link">LogIn</a></p>
        </div>
      </form>
    </div>

  </div>

  <main>
    <article>
      <section class="hero text-center" aria-label="home" id="home">

        <ul class="hero-slider" data-hero-slider>

          <li class="slider-item active" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./images/hero-slider-1.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Delicious Food</p>

            <h1 class="display-1 hero-title slider-reveal">
              Welcome to <br>
              Restro
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Your ultimate destination for amazing and delicious food!
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./images/hero-slider-2.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Delicious Food</p>

            <h1 class="display-1 hero-title slider-reveal">
              Discover the <br>
              Essence of Flavor
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Every bite tells a story of passion and craftsmanship.
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./images/hero-slider-3.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Amazing Experience</p>

            <h1 class="display-1 hero-title slider-reveal">
              Experience Taste <br>
              Like Never Before
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Indulge in our exquisite culinary creations.
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

          <li class="slider-item" data-hero-slider-item>

            <div class="slider-bg">
              <img src="./images/hero-slider-4.jpg" width="1880" height="950" alt="" class="img-cover">
            </div>

            <p class="label-2 section-subtitle slider-reveal">Mouth Watering</p>

            <h1 class="display-1 hero-title slider-reveal">
              Unforgettable Dining <br>
              Experience
            </h1>

            <p class="body-2 hero-text slider-reveal">
              Experience culinary excellence at Restro!
            </p>

            <a href="#" class="btn btn-primary slider-reveal">
              <span class="text text-1">View Our Menu</span>

              <span class="text text-2" aria-hidden="true">View Our Menu</span>
            </a>

          </li>

        </ul>

        <button class="slider-btn prev" aria-label="slide to previous" data-prev-btn>
          <ion-icon name="chevron-back"></ion-icon>
        </button>

        <button class="slider-btn next" aria-label="slide to next" data-next-btn>
          <ion-icon name="chevron-forward"></ion-icon>
        </button>

        <a href="#" class="hero-btn has-after">
          <img src="./images/hero-icon.png" width="48" height="48" alt="booking icon">

          <span class="label-2 text-center span">Book A Table</span>
        </a>

      </section>

      <section class="section service bg-black-10 text-center" aria-label="service">
        <div class="container">

          <p class="section-subtitle label-2">Flavors For Royalty</p>

          <h2 class="headline-1 section-title">Welcome to Restro</h2>

          <p class="section-text">
            Explore our diverse menu featuring a wide range of culinary delights, from appetizers to desserts. Each dish is carefully curated to tantalize your taste buds and leave you craving for more.
          </p>

          <ul class="grid-list">

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./images/service-1.jpg" width="285" height="336" loading="lazy" alt="Breakfast"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Breakfast</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./images/service-2.jpg" width="285" height="336" loading="lazy" alt="Appetizers"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Appetizers</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

            <li>
              <div class="service-card">

                <a href="#" class="has-before hover:shine">
                  <figure class="card-banner img-holder" style="--width: 285; --height: 336;">
                    <img src="./images/service-3.jpg" width="285" height="336" loading="lazy" alt="Drinks"
                      class="img-cover">
                  </figure>
                </a>

                <div class="card-content">

                  <h3 class="title-4 card-title">
                    <a href="#">Drinks</a>
                  </h3>

                  <a href="#" class="btn-text hover-underline label-2">View Menu</a>

                </div>

              </div>
            </li>

          </ul>

          <img src="./images/shape-1.png" width="246" height="412" loading="lazy" alt="shape"
            class="shape shape-1 move-anim">
          <img src="./images/shape-2.png" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-2 move-anim">

        </div>
      </section>

      <section class="special-dish text-center" aria-labelledby="dish-label">

        <div class="special-dish-banner">
          <img src="./images/special-dish-banner.webp" width="940" height="900" loading="lazy" alt="special dish"
            class="img-cover">
        </div>

        <div class="special-dish-content bg-black-10">
          <div class="container">

            <img src="./images/badge-1.png" width="28" height="41" loading="lazy" alt="badge" class="abs-img">

            <p class="section-subtitle label-2">Special Dish</p>

            <h2 class="headline-1 section-title">Rob Lucci Spaghetti</h2>

            <p class="section-text">
              Creamy spaghetti with roasted spring vegetables is so simple to make, but hearty and healthy. Roasted asparagus, cherry tomatoes and red onion create a flavorful vegetable medley to accompany spaghetti.  This dish becomes heavenly with the addition of garlic and herb cheese spread which packs flavor and adds a creamy consistency.  Serve warm, room temperature, or even straight from the fridge for a satisfying and healthy meal made with all real ingredients and fresh flavors.  This dish makes a perfect meal prep when paired with a lean protein like grilled chicken.
            </p>

            <div class="wrapper">
              <del class="del body-3">Rs. 400</del>

              <span class="span body-1">Rs. 300</span>
            </div>

            <a href="#" class="btn btn-primary">
              <span class="text text-1">View All Menu</span>

              <span class="text text-2" aria-hidden="true">View All Menu</span>
            </a>

          </div>
        </div>

        <img src="./images/shape-4.png" width="179" height="359" loading="lazy" alt="" class="shape shape-1">

        <img src="./images/shape-9.png" width="351" height="462" loading="lazy" alt="" class="shape shape-2">

      </section>

      <section class="section menu" aria-label="menu-label" id="menu">
        <div class="container">

          <p class="section-subtitle text-center label-2">Special Selection</p>

          <h2 class="headline-1 section-title text-center">Delicious Menu</h2>

          <ul class="grid-list">

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-1.png" width="100" height="100" loading="lazy" alt="Greek Salad"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Crème Brûlée</a>
                    </h3>

                    <span class="badge label-1">Seasonal</span>

                    <span class="span title-2">Rs. 300</span>
                  </div>

                  <p class="card-text label-1">
                    A classic French dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.
                  </p>

                </div>

              </div>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-2.png" width="100" height="100" loading="lazy" alt="Lasagne"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Pasta Alfredo</a>
                    </h3>

                    <span class="span title-2">Rs. 440</span>
                  </div>

                  <p class="card-text label-1">
                    Creamy pasta dish made with fettuccine noodles and a rich Alfredo sauce consisting of butter, cream, and Parmesan cheese.
                  </p>

                </div>
              </div>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-3.png" width="100" height="100" loading="lazy" alt="Butternut Pumpkin"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Spaghetti bolognese</a>
                    </h3>

                    <span class="span title-2">Rs. 190</span>
                  </div>

                  <p class="card-text label-1">
                    A classic Italian pasta dish featuring spaghetti noodles topped with a savory bolognese sauce made from ground meat, tomatoes, and herbs.
                  </p>

                </div>
              </div>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-4.png" width="100" height="100" loading="lazy" alt="Tokusen Wagyu"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Moussaka</a>
                    </h3>

                    <span class="badge label-1">New</span>

                    <span class="span title-2">Rs. 380</span>
                  </div>

                  <p class="card-text label-1">
                    A traditional Greek dish made with layers of eggplant, minced meat, potatoes, and a creamy béchamel sauce, baked to perfection.
                  </p>

                </div>
              </div>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-5.png" width="100" height="100" loading="lazy" alt="Olivas Rellenas"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Paella</a>
                    </h3>

                    <span class="span title-2">Rs. 250</span>
                  </div>

                  <p class="card-text label-1">
                    A classic Spanish rice dish cooked with saffron, vegetables, and a variety of seafood or meat, bursting with flavors and vibrant colors.
                  </p>

                </div>
              </div>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

            <li>
              <div class="menu-card hover:card">

                <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                  <img src="./images/menu-6.png" width="100" height="100" loading="lazy" alt="Opu Fish"
                    class="img-cover">
                </figure>

                <div>

                  <div class="title-wrapper">
                    <h3 class="title-3">
                      <a href="#" class="card-title">Ramen</a>
                    </h3>

                    <span class="span title-2">Rs. 500</span>
                  </div>

                  <p class="card-text label-1">
                    A Japanese noodle soup dish consisting of wheat noodles served in a flavorful broth, topped with various ingredients such as sliced pork, seaweed, and green onions.
                  </p>

                </div>
              </div>
              <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </li>

          </ul>

          <p class="menu-text text-center">
            During winter daily from <span class="span">7:00 pm</span> to <span class="span">9:00 pm</span>
          </p>

          <a href="#" class="btn btn-primary">
            <span class="text text-1">View All Menu</span>

            <span class="text text-2" aria-hidden="true">View All Menu</span>
          </a>

          <img src="./images/shape-5.png" width="921" height="1036" loading="lazy" alt="shape"
            class="shape shape-2 move-anim">
          <img src="./images/shape-6.png" width="343" height="345" loading="lazy" alt="shape"
            class="shape shape-3 move-anim">

        </div>
      </section>

      <section class="section about text-center" aria-labelledby="about-label" id="about">
        <div class="container">

          <div class="about-content">

            <p class="label-2 section-subtitle" id="about-label">Our Story</p>

            <h2 class="headline-1 section-title">Every Flavor Tells a Story</h2>

            <p class="section-text">
              Our journey began with a passion for culinary adventures. Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

          </div>

          <figure class="about-banner">

            <img src="./images/about-banner.jpg" width="570" height="570" loading="lazy" alt="about banner"
              class="w-100" data-parallax-item data-parallax-speed="1">

            <div class="abs-img abs-img-1 has-before" data-parallax-item data-parallax-speed="1.75">
              <img src="./images/about-abs-image.jpg" width="285" height="285" loading="lazy" alt=""
                class="w-100">
            </div>

            <div class="abs-img abs-img-2 has-before">
              <img src="./images/badge-2.png" width="133" height="134" loading="lazy" alt="">
            </div>

          </figure>

          <img src="./images/shape-3.png" width="197" height="194" loading="lazy" alt="" class="shape">

        </div>
      </section>

      <section class="section features text-center" aria-label="features" id="chef">
        <div class="container">

          <p class="section-subtitle label-2">Why Choose Us</p>

          <h2 class="headline-1 section-title">Our Strength</h2>

          <ul class="grid-list">

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="./images/features-icon-1.png" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Quality Ingredients</h3>

                <p class="label-1 card-text">We source only the finest ingredients, ensuring freshness and quality in every bite.</p>

              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="./images/features-icon-2.png" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Exceptional Service</h3>

                <p class="label-1 card-text">Our dedicated staff is committed to providing exceptional service, making every visit memorable.</p>
              
              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="./images/features-icon-3.png" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Expert Chefs</h3>

                <p class="label-1 card-text">Our expert chefs bring creativity and passion to every dish, ensuring a delightful culinary experience.</p>

              </div>
            </li>

            <li class="feature-item">
              <div class="feature-card">

                <div class="card-icon">
                  <img src="./images/features-icon-4.png" width="100" height="80" loading="lazy" alt="icon">
                </div>

                <h3 class="title-2 card-title">Ambiance</h3>

                <p class="label-1 card-text">Immerse yourself in a cozy and inviting ambiance, perfect for enjoying delicious meals with friends and family.</p>

              </div>
            </li>

          </ul>

          <img src="./images/shape-7.png" width="208" height="178" loading="lazy" alt="shape"
            class="shape shape-1">

          <img src="./images/shape-8.png" width="120" height="115" loading="lazy" alt="shape"
            class="shape shape-2">

        </div>
      </section>

    </article>
  </main>

  <footer class="footer section has-bg-image text-center"
    style="background-image: url('./images/footer-bg.jpg')" id="contact">
    <div class="container">
      <div class="footer-top grid-list">
        <div class="footer-brand has-before has-after">

          <p class="body-1">
            Open : 09:00 am - 01:00 pm
          </p>

          <div class="wrapper">
            <div class="separator"></div>
            <div class="separator"></div>
            <div class="separator"></div>
          </div>

          <p class="title-1">Get News & Offers</p>

          <p class="label-1">
            Subscribe us & Get <span class="span">25% Off.</span>
          </p>

          <form action="" class="input-wrapper">
            <div class="icon-wrapper">
              <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
              <input type="email" name="email_address" placeholder="Your email" autocomplete="off" class="input-field">
            </div>

            <button type="submit" class="btn btn-secondary">
              <span class="text text-1">Subscribe</span>
              <span class="text text-2" aria-hidden="true">Subscribe</span>
            </button>
          </form>
        </div>

        <ul class="footer-list">
          <li> <a href="#" class="label-2 footer-link hover-underline">Home</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Menus</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">About Us</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Our Chefs</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Contact</a> </li>
        </ul>

        <ul class="footer-list">
          <li> <a href="#" class="label-2 footer-link hover-underline">Facebook</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Instagram</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Twitter</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Youtube</a> </li>
          <li> <a href="#" class="label-2 footer-link hover-underline">Google Map</a> </li>
        </ul>

      </div>
      <div class="footer-bottom">
        <p class="copyright"> &copy; 2024 Restro. All Rights Reserved </p>
      </div>
    </div>
  </footer>

  <a href="#top" class="back-top-btn active" aria-label="back to top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>

  <script src="script.js"></script>
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>
</html>
