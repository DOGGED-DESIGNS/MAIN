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
    <link rel="stylesheet" href="../final/index.min.css?cd=12323" />
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
                volunteer
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
            <div id="message" class="col-12">
  
            </div>

          </div>
        </div>
       
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="d-flex card-header bg-light">
                <h4 class="text-capitalize">category</h4>
                <button
                  data-target="#mm2"
                  data-toggle="modal"
                  class="btn d-block btn-outline-primary ml-auto"
                >
                  add category <i class="font-weight-bold fa fa-plus"></i>
                </button>
              </div>


              <div class="card-body">
                <div class="row">
                  <div class="col-12">
                    <div id="put">


                    </div>
                  </div>
                </div>
              </div>
              <table></table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div
      class="fade modal"
      id="mm2"
      data-keyboard="false"
      data-backdrop="static"
    >
      <div class="modal-dialog">
        <div class="modal-content p-2">
          <div class="row">
            <div class="col-12">
              <div id="catinfo">

              </div>
            </div>
          </div>
          <div class="modal-header">
            <i class="fa fa-plus font-weight-bold text-primary"></i> add
            category <button class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
       
          <div id="infomessage">

          </div>
        
            <div class="card shadow-sm m-auto" style="max-width: 400px">
              <div class="card-header bg-light">
                <h4 class="font-weight-bold text-capitalize">
                  <i class="text-primary fa fa-2x fa-file"></i>
                  category
                </h4>
              </div>
              <form id="catform" action="" enctype="multipart/form-data">
                <div class="card-body">
                  <div class="form-group">
                    <label for="">category</label>
                    <input
                    maxlength="50" name="category" type="text" class="form-control" />
                  </div>
                  <div class="form-group">
                    <label for="">tag</label>
                    <input 
                    maxlength="20" name="tag" type="text" class="form-control" />
                  </div>
                   
                  <div class="form-group">
                    <label for="">description</label>
                    <textarea class=" form-control" name="description" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div class="form-group">
                    <label for="">add image</label>
                    <input name="image" type="file" class="" />
                  </div>
                </div>

                <div class="card-footer">
                  <button name="submit" type="submit" class="w-100 btn-outline-primary btn-lg">
                    add
                    <i class="font-weight-bold fa fa-plus"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
 
<
    <script src="../jquery.3.4.1.js?cd=123"></script>
    <!-- linking the owl carousel -->

    <script src="../owl-carousel/js/owl.carousel.min.js?cd=123"></script>

    <script src="../final/all.js?cd=12234332"></script>

    

    <script type="text/javascript">

    $(Document).ready(()=>{




      // getting categories

      const drawcat = ()=>{
        $.ajax({
          url:'./asset/process.php',
          method:'POST',
          data:{catdraw:'draw'},
          success:(data, status)=>{
            console.log(data);
            $('#put').html(data);
          }

        })
      }

      drawcat();
      // end of getting category;

      // deleting category;


     $("body").on('click','.take',(e)=>{

      const take = e.currentTarget;
      const take2 =$(take).attr("id")
      $.ajax({
          url:'./asset/process.php',
          method:'POST',
          data:{del:take2},
          success: (data, status)=>{
            $('#message').html(data);
            drawcat();

            setTimeout(() => {
              $('#message').html('')
            }, 7000);
          }
         })
      
     })

     

      // end of deleting category

      $('#catform').submit((e)=>{
        e.preventDefault();

       $.ajax({
        url:'./asset/process.php',
        method:'POST',
        contentType:false,
        processData:false,
        data:new FormData(document.getElementById('catform')),
        success: (data, status)=>{
          if($.trim(data) === "success"){
             $('#mm2').modal('hide');
             $('#message').html(`<div style='max-width:700px ;' class=' alert alert-success fade show alert-dismissiable'>
          <strong>datasaved successfully</strong>
          <button class='close' data-dismiss='alert' >&times;</button>
        </div>`);
        drawcat();
             setTimeout(() => {
              $('#message').html("")
             }, 7000);
          }else{
            $('#catinfo').html(data);
            setTimeout(() => {
              $('#catinfo').html('');
            }, 5000);
          }
        }
       })
      })
    })

     
           

    </script>
  </body>
</html>
