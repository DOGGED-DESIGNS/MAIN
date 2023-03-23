<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Goif|Details</title>
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
    <link rel="stylesheet" href="./final/fontawesome.min.css?cd=123000" />
    <link rel="stylesheet" href="./final/index.min.css?cd=100023" />
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
              <a class="activez nav-link" href="aboutzz.php"> about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php#testimonials">
                testimonials</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php#courses">projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.php#volunteer"> volunteer</a>
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

          <a href="" class="trans2-btn" data-target="#mmz" data-toggle="modal"
            >donate now</a
          >
        </div>
      </div>
    </nav>

    <div class="container">
      <article class="details-article">
        <h1 class="articleh1">education for all</h1>
        <p class="articlep">
          School based interventions – including (but not limited to)
          establishment of early child learning centres, late adult education
          and provision of basic school amenities and scholarships
        </p>
      </article>
    </div>

    <!-- <section class="detailz">
      <div class="container">
        <div class="owl-carousel owl-theme">
          <div class="row">
            <div class="col-12">
              <div class="detailz__img">
                <img src="./img/crowd1.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="detailz__img">
                <img src="./img/crowd2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="detailz__img">
                <img src="./img/crowd3.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <div class=" fade modal" id="mmz" data-keyboard="false" data-backdrop="static" >
        <div class=" modal-dialog">
          <div class=" modal-content p-2"> 
           

           
            <div class=" modal-header">
              <button class=" close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div class="row">
              <div class="col-12">
                <div id="put2">

                </div>
              </div>
            </div>
            <h4 class="modal-content__h4">make the world a better place the little way you can</h4>

            <p class=" modal-content__p">your details will never be made public</p>
            <div class=" modal-body">
             <form action="" id="donors">

              <div class="row">
                <div class="mb-3 col-6">
                  <input name="first" class=" modal-content__input" type="text" placeholder="first name">
                </div>
                <div class="mb-3 col-6">
                  <input name="second" class="modal-content__input" type="text" placeholder="last name">
                </div>
                
                <div class=" mb-3 col-12 d-flex">
                  <input name="email" placeholder="email" class="modal-content__input" type="email">
                  <span> <i class=" fa fa-envelope-open"></i></span>
                </div>
                <div class=" mb-3 col-12 d-flex ">
                  <input name="phonenumber"  placeholder="phone number" class="modal-content__input" type="number">
                  <span> <i class=" fa fa-phone"></i></span>
                </div>
                <div class=" mb-3 col-12 d-flex">
                  <input name="money"  placeholder="amount" class="modal-content__input " type="number">
                  <span class=" p-1" ><img src="./img/nair2.svg" alt=""></span>
                </div>
                <div class="mb-3 col-12">
                  <textarea name="message" class="modal-content__textarea" name="" placeholder="specify projects...eg:back to school project" id="" cols="30" rows="5"></textarea>
                </div>
              </div>
              
              <!-- <input type="text">
              <input type="text">
              <input type="text"> -->
              
              
              
            </div>
            <div class=" modal-footer">
              
              
              
              <button id="donzbut" type="submit" class=" trans2-btn" >donate</button>
              
              
            </div>
          </form>

          </div>

        </div>

      </div>
    <script src="jquery.3.4.1.js"></script>
    <!-- linking the owl carousel -->

    <script src="./owl-carousel/js/owl.carousel.min.js?cd=123"></script>

    <script src="./final/all.js?cd=123"></script>
    <script type="text/javascript">
      $('#donors').submit((e)=>{
      e.preventDefault();

      const don= $('#donors').serializeArray();

      let donors = {}

      $.map(don, (val,index)=>{
         donors[val['name']]=val['value'];
      })

       $('#donzbut').html('please wait..')
      $.ajax({
        url:'./assets/process.php',
        method:'POST',
        data:{...donors,donate:'donate'},
        success:(data, status)=>{
          if($.trim(data) === 'success'){
            window.location.href='finance.php';

            $('#donzbut').html('donate')
          }else{
            $('#donzbut').html('donate')

            $('#put2').html(data);
            setTimeout(() => {
              $('#put2').html("")
            }, 5000);
          }
        }
      })
    })
    </script>
  </body>
</html>
