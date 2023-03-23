
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
          <div id="mainput">
             
          </div>
          <div class="col-12">
            <div class="card">
              <div class="d-flex card-header bg-light">
                <h4 class="text-capitalize">projects</h4>
                <button
                  data-target="#mm2"
                  data-toggle="modal"
                  class="btn d-block btn-outline-primary ml-auto"
                >
                  add projects <i class="font-weight-bold fa fa-plus"></i>
                </button>
              </div>

              <div class="card-body">
                <div class="row">
                  <div class="col-12">

                   <div class="" id="drawp"></div>
                    <!-- <table
                      style="max-width: 100%"
                      class="
                        table
                        table-sm
                        table-light
                        table-success
                        table-bordered
                        table-hover
                      "
                    >
                      <thead class="bg-success">
                        <th>#id</th>
                        <th>category</th>
                        <th>image</th>
                        <th>time</th>
                        <th>action</th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>da ta</td>
                          <td>data</td>
                          <td>data</td>
                          <td>data</td>
                          <td>
                            <button
                              class="
                                btn btn-outline-danger
                                text-capitalize
                                font-weight-bold
                              "
                            >
                              delete
                              <i class="font-weight-bold fa fa-trash"> </i>
                            </button>
                          </td>
                          &nbsp;
                        </tr>
                      </tbody>
                    </table> -->
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
              <div id="projectput">

              </div>
            </div>
          </div>
          <div class="modal-header">
            <button class="close" data-dismiss="modal">&times;</button>
          </div>

          <div class="modal-body">
            <div class="card shadow-sm m-auto" style="max-width: 400px">
              <div class="card-header bg-light">
                <h4 class="font-weight-bold text-capitalize">
                  <i class="text-primary fa fa-2x fa-list"></i>
                  projects
                </h4>
              </div>
              <form action="" id="projectz">
                <div class="card-body">
                  <div id="selectorz" class="form-group">
                 
                  </div>

                  <div class="form-group">
                    <label for="">add project image</label>
                    <input name="image" type="file" class="" />
                  </div>
                </div>

                <div class="card-footer">
                  <button type="submit" class="w-100 btn-outline-primary btn-lg">
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

    <script src="../jquery.3.4.1.js"></script>
    <!-- linking the owl carousel -->

    <script src="../owl-carousel/js/owl.carousel.min.js?cd=123"></script>

    <script src="../final/all.js?cd=123"></script>

    <script type="text/javascript">

      $(document).ready(()=>{

        const projectselect = ()=>{
          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{selectorz:'selectorz'},
            success:(data, status)=>{
              $('#selectorz').html(data);
            }  
          })
        }

        projectselect();
        
        // start of drawing project;

        const drawproject = () =>{
          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{drawp:'drawp'},
            success:(data, status) =>{
              $('#drawp').html(data)
            }
          })
        }

        drawproject();

        //  end of drawing project;
        // deleting project;

        $('body').on('click','.drawp',(e)=>{
          const draw = e.currentTarget;

          const drawatt = $(draw).attr('id');
          $.ajax({
            url:'./asset/process.php',
            method:'POST',
            data:{delproject:drawatt},
            success:(data, status)=>{
              $('#mainput').html(data);
              setTimeout(() => {
                $('#mainput').html('');
              }, 7000);
              drawproject();
            }
          })
        })
        // end of deleting project

        // adding projects
        $('#projectz').submit((e)=>{

          e.preventDefault();
          console.log(' i have been clicked');
          

          $.ajax({
            url:'asset/process.php',
            method:'POST',
            contentType:false,
            processData:false,
            data: new FormData(document.getElementById('projectz')),
            success:(data, status)=>{

              if($.trim(data) === "success"){
                $('#mm2').modal('hide');
                $('#mainput').html(`
                <div style='max-width:700px ;' class=' alert alert-success fade show alert-dismissiable'>
          <strong>datasaved successfully</strong>
          <button class='close' data-dismiss='alert' >&times;</button>
        </div>
                `)

                drawproject();

                setTimeout(() => {
                  $('#mainput').html("")
                }, 7000);
              }else{
                $('#projectput').html(data)

                setTimeout(() => {
                  $('#projectput').html('');
                  
                }, 5000);

              }
            }
          })
        })
      })


    </script>
  </body>
</html>
