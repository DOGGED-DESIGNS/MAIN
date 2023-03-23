
<?php 

session_start();
if(isset($_SESSION['email'])){

  header('location: contact.php');
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="LOVING THE UNLOVEABLE!.
    At Goif we aim to sustainably develop communities around the Eastern and Northern region of Nigeria by grass roots based interactions addressing accessibility to welfare and healthy living for orphans, destitute and vulnerable children, women and youths." />
    <link
      rel="stylesheet"
      href="../owl-carousel/css/owl.carousel.min.css?cd=123"
    />
    <link rel="stylesheet" href="../final/fontawesome.min.css?cd=123" />
    <link rel="stylesheet" href="../final/index.min.css?cd=123" />
    <title>Document</title>
  </head>
  <body class="bg-secondary">
    <!-- <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <a href="" class="navbar-brand">
        <img src="../img/logo2.png" alt="" />
        <img src="../img/logo1.png" alt="" />
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
              <a class="nav-link" href="about.php"> about</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials"> testimonials</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#courses"> causes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#volunteer"> volunteer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.php"> contacts</a>
            </li>
          </ul>

          <div class="phone">
            <div class="float-left">
              <img src="../img/phone.svg" alt="" />
            </div>
            <p class="float-right">(+234) 814 631 5373</p>
            <div class="clearfix"></div>
          </div>
          <!-- ?ref="" class=" trans2-btn -->
          <!-- " data-target="#mmz" data-toggle="modal">donate now</a> -->
     

    <section class="pt-5 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card shadow-sm m-auto" style="max-width: 400px">
            <div class="row">
              <div class="col-12" id="addzz">

              </div>

            </div>
              <div class="card-header bg-light">
                <h4 class="font-weight-bold text-capitalize">
                  <i class="text-danger fa fa-2x fa-user"></i>
                  Admin
                </h4>
              </div>
              <form action="" id="adminz">
                <div class="card-body">
                  <div class="form-group">
                    <label for="">user name</label>
                    <input name="user" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="">password</label>
                    <input type="password" name="password" type="text" class="form-control" />
                  </div>
                </div>

                <div class="card-footer">
                  <button id="subz" type="submit" class="w-100 btn-outline-danger btn-lg">
                    login
                    <i class="font-weight-bold text-primaryb fa fa-sign-in"></i>
                  </button>
                </div>
              </form>
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
   
        $('#adminz').submit((e)=>{
          e.preventDefault();

        const add =  $('#adminz').serializeArray();
        let addz ={}

        $.map(add, (val,index)=>{
          addz[val['name']] = val['value'];
        })
     
          $('#subz').html(
            `please wait..
                    <i class="font-weight-bold text-primaryb fa fa-sign-in"></i>`
          )

          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{...addz, admin:'admin'},
            success: (data, status)=>{
              console.log(data)

              if($.trim(data) === "successz"){
                window.location.href = 'contact.php';
                $('#subz').html(`login
                    <i class="font-weight-bold text-primaryb fa fa-sign-in"></i>`)
              }else{
                 $('#addzz').html(data);
                 $('#subz').html(`login
                    <i class="font-weight-bold text-primaryb fa fa-sign-in"></i>`)
                 setTimeout(() => {
                  $('#addzz').html('')
                 }, 6000);
              }
            }
            
          })
        })

      })

    </script>
  </body>
</html>
