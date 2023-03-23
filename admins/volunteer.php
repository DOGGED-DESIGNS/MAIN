
<?php 

session_start();

if(!isset($_SESSION['email'])){
   header('location: index.php');
   die();
}


?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <link
      rel="stylesheet"
      href="../owl-carousel/css/owl.carousel.min.css?cd=123"
    />
    <link rel="stylesheet" href="../final/fontawesome.min.css?cd=123" />
    <link rel="stylesheet" href="../final/index.min.css?cd=123" />
    <title>Document</title>
  </head>
  <body>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a href="" class="navbar-brand">
        <img src="../img/logo2.png" alt="" />
        <!-- <img src="../img/logo1.png" alt="" /> -->
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
            <!-- <li class="nav-item mx-4">
              <a class="nav-link" href="category.php"
                >category
                <i class="text-primary fa fa-plus font-weight-bold"></i
              ></a>
            </li> -->
            <li class="nav-item mx-4">
              <a class="nav-link" href="volunteer.php">
                volunteers
                <i class="text-primary fa fa-handshake-o font-weight-bold"></i
              ></a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="donations.php">
                donations <i class="text-primary fa fa-money"></i
              ></a>
            </li>
            <!-- <li class="nav-item mx-4">
              <a class="nav-link" href="project.php">
                project <i class="text-primary fa fa-tasks"></i
              ></a>
            </li> -->
            <li class="nav-item mx-4">
              <a class="nav-link" href="contact.php">
                contact <i class="text-primary fa fa-address-book"></i
              ></a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link" href="./asset/bustsession.php">
                logout <i class="text-primary fa fa-sign-out"></i
              ></a>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="#volunteer"> volunteer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.php"> contacts</a>
            </li> -->
          </ul>

          <!-- ?ref="" class=" trans2-btn -->
          <!-- " data-target="#mmz" data-toggle="modal">donate now</a> -->
        </div>
      </div>
    </nav>

    <section class="mt-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div id="delvol">

            </div>
          </div>
          <div class="col-12">
            <div class="card">
              <div class="d-flex card-header bg-light">
                <h4 class="text-capitalize">VOLUNTEERS</h4>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                   <div id="vol"></div>
                  </div>
                </div>
              </div>
              <table></table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script src="../jquery.3.4.1.js"></script>
    <!-- linking the owl carousel -->

    <script src="../owl-carousel/js/owl.carousel.min.js?cd=123"></script>

    <script src="../final/all.js?cd=123"></script>

    <script type="text/javascript">

      $(document).ready(()=>{


        const volunteer = ()=>{
          
          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{vol:"vol"},
            success: (data ,status)=>{
              $('#vol').html(data)
            }
          })
        }


        volunteer()


        $('body').on('click','.delvol',(e)=>{

          let delvol = e.currentTarget;

          delvol = $(delvol).attr('id');

          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{delvol:delvol, delz:'delvol'},
            success:(data, status)=>{
               $('#delvol').html(data);
               volunteer();

               setTimeout(() => {
                $('#delvol').html('');
               }, 7000);
            }
          })

        });

       

      })




    </script>
  </body>
</html>
