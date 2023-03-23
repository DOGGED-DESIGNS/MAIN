
<?php 

session_start();
 
 if(!isset($_SESSION['emailz'])){

  header('location: index.php');
  die();
 }

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Goif|Finance</title>
  <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="description" content="LOVING THE UNLOVEABLE!.
    At Goif we aim to sustainably develop communities around the Eastern and Northern region of Nigeria by grass roots based interactions addressing accessibility to welfare and healthy living for orphans, destitute and vulnerable children, women and youths." />
    <meta name="keywords" content="Charity, Donations, Goif, Underserved, Orphans, Goif, Goif " />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="./img/logo2.png" />

    <link
      rel="stylesheet"
      href="./owl-carousel/css/owl.carousel.min.css?cd=123"
    />
    <link rel="stylesheet" href="./final/fontawesome.min.css?cd=10023" />
    <link rel="stylesheet" href="./final/index.min.css?cd=12300" />
  </head>
  <body>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a href="index.php" class="navbar-brand">
        <img src="./img/logo2.png" alt="" />
      </a>
      <button class="ml-auto navbar-toggler">
        <span
          class="navbar-toggler-icon"
          data-target="#coll"
          data-toggle="collapse"
        ></span>
      </button>
      <div class="container">
        <div class="navbar-collapse collapse" id="coll">
          <ul class="navbar-nav m-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.php"> home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="aboutzz.php"> about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php#testimonials">
                testimonials</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php#courses"> projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php"> volunteer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.php"> contacts</a>
            </li>
          </ul>

          <div class="phone">
            <div class="float-left">
              <img src="./img/phone.svg" alt="" />
            </div>

            <p class="float-right"> (+234) 802 659 7353</p>

            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </nav>

    <section class="finance-card">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h2 class="articleh2">Account Details</h2>
              </div>

              <div class="card-body">
                <div class="finance-card__bank">
                  <h4>bank name:</h4>
                  <span class="articleh3">Acess Bank</span>
                </div>
                <div class="finance-card__bank">
                  <h4>Account number:</h4>
                  <span class="articleh3">0099178852</span>
                </div>
                <div class="finance-card__bank">
                  <h4>account name:</h4>
                  <span class="articleh3"
                    >Geoffrey Onwuzulike Ibeagha Foundation</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script src="jquery.3.4.1.js"></script>
    <!-- linking the owl carousel -->

    <script src="./owl-carousel/js/owl.carousel.min.js?cd=123"></script>

    <script src="./final/all.js?cd=123"></script>
  </body>
</html>
