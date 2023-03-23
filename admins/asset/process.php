<?php 

session_start();



require_once './config.php';

require_once './functions.php';

$ultfunctz = new FunctClassz();


// draw selector inputs


if(isset($_POST['delproject'])){
  $check = $ultfunctz->drawsingleproject($_POST['delproject']);
  if($check){
    foreach($check as $ch){
      $take = "../..".$ch['imgproject'];
      $take = unlink($take);
      $check2 = $ultfunctz->delproject($_POST['delproject']);

      if($take && $check2){
        $ultfunctz->message('success', 'project deleted successfully');
      }else{
        $ultfunctz->message('danger','there was and error');
      }
    }
  }
}

if(isset($_POST['drawp']) && $_POST['drawp'] == 'drawp'){

  $check = $ultfunctz->drawproject();
  
  if($check){

    $table = "
    <table
    style='max-width: 100%'
    class='
      table
      table-sm
      table-light
      table-success
      table-bordered
      table-hover
    '
  >
    <thead class='bg-success'>
      <th class='text-white'>#id</th>
      <th class='text-white' >category</th>
      <th class='text-white' >image</th>
      <th class='text-white' >action</th>
    </thead>
    <tbody> 
    ";

    $id = 1;

    foreach($check as $ch){

      $table .= "
      <tr>
  <td>".$id++."</td>
                    <td>".$ch['category']."</td>
                    <td> <img src='".'..'."".$ch['imgproject']."' width='50px' height='50px' alt=''>
                    </td>
                    <td> <button id='".$ch['category']."' class=' btn btn-outline-danger drawp'> delete <i class='font-weight-bold fa fa-trash'></i> </button></td>
                    &nbsp;
                  </tr>
      ";
    }

    $table .= "
    </tbody>
    </table>
    ";
     echo $table;
    // print_r($check);
  }else{
     $ultfunctz->message('info','there is currently no project available');
  }

}


if(isset($_POST['cate']) && isset($_FILES['image'])){

  if(!empty($_POST['cate']) && !empty($_FILES['image']['name'])){
      $name = $_FILES['image']['name'];
      $fileext = explode('.',$_FILES['image']['name']);
  
      // echo end($fileext);
      // echo $fileext;
      // echo $fileext;
      $filename =basename($_FILES['image']['name'],'.'.end($fileext)) ;
      $destination = '../../img/dyna/'.$name ;
      $imgsrc = '/img/dyna/'.$name ;
      $filetemplocation = $_FILES['image']['tmp_name'];
  
      
  // checking file extentions
      $arzz = array('png','jpeg','jpg');
      if(in_array(end($fileext),$arzz)){
  
        // checking if files have been uploaded
  
        if(!file_exists($destination)){      
          $check = $ultfunctz->addproject($_POST['cate'],$imgsrc);    
          if($check){
            move_uploaded_file($filetemplocation,$destination);
  
            // $ultfunctz->message('success','datasaved successfully');
            echo 'success';
          }else{
            $ultfunctz->message('info','category must have a unique id');
          }
        }else{
          
          $ultfunctz->message('info','file already exist please choose another file');
        }
        // end of checking if file has been uploaded
        
      }else{
        $ultfunctz->message('danger','this file is not surported');
      }
    }else{
      $ultfunctz->message('danger','please fill all the form fields');
    }

  


}

if(isset($_POST['selectorz']) && $_POST['selectorz'] == 'selectorz'){
  $check = $ultfunctz->drawcategory();
  if($check){
    
    $select = "  <label for=''>category</label>
    <select class=' form-control' name='cate' id=''>
     
    ";
    foreach($check as $ch){
      $select .=  "
      <option class='form-control'  value='".$ch['category']."'> ".$ch['category']." </option>
      ";
    }
    $select .= "
    </select>
    ";

    echo $select;

  }else{
     echo "<label for=''>category</label>
     <select class=' form-control' name='category' id=''>
     <option class='form-control'  value=''> no category </option>
     </select>";
  }
}


if(isset($_POST['del'])){
  $tell = $ultfunctz->drawsinglecat($_POST['del']);

  if($tell){

    foreach($tell as $t){
      $delz = "../..".$t['img'];
      $check2 = unlink($delz);
      $check = $ultfunctz->deletecat($_POST['del']);
      if($check &&$check2){
        $ultfunctz->message('success', 'category deleted');
      }else{
        $ultfunctz->message('danger','there was an error while trying to delte category');
      }
    }

  }else{
    $ultfunctz->message('dange','could not draw data');
  }

}

if(isset($_POST['catdraw']) && $_POST['catdraw'] == 'draw'){
  $check = $ultfunctz->drawcategory();

  $id = 1;

  if($check){
    // print_r($check);
    $table = "
    <table
    style='max-width: 100%'
    class='
      table
      table-sm
      table-light
      table-success
      table-bordered
      table-hover
    '
  >
    <thead class='bg-success'>
      <th class='text-white'>#id</th>
      <th class='text-white' >category</th>
      <th class='text-white' >description</th>
      <th class='text-white' >tags</th>
      <th class='text-white' >img</th>
      <th class='text-white' >actions</th>
    </thead>
    <tbody>
    
    ";

    foreach($check as $ch){

      

  $table .= "
  <tr>
  <td>".$id++."</td>
                    <td>".$ch['category']."</td>
                    <td>".$ch['des']."</td>
                    <td>".$ch['tags']."</td>
                    <td> <img src='".'..'."".$ch['img']."' width='50px' height='50px' alt=''>
                    </td>
                    <td> <button id='".$ch['category']."' class=' btn btn-outline-danger take'> delete <i class='font-weight-bold fa fa-trash'></i> </button></td>
                    &nbsp;
                  </tr>
  ";
    }

  $table .= "
  </tbody>
    </table>
  ";

  echo $table;

  }else{
    $ultfunctz->message('info','there is currently no category');
  }
}

if(isset($_POST['tag']) ){

  $category = $_POST['category']; 
  $tag = stripslashes(trim($_POST['tag'])); 
  $description = stripslashes(trim($_POST['description']));

  if(!empty($category) && !empty($tag) && !empty($description) && $_FILES['image']['name'] != ""){
     
    $name = $_FILES['image']['name'];
    $fileext = explode('.',$_FILES['image']['name']);

    // echo end($fileext);
    // echo $fileext;
    // echo $fileext;
    $filename =basename($_FILES['image']['name'],'.'.end($fileext)) ;
    $destination = '../../img/dyna/'.$name ;
    $imgsrc = '/img/dyna/'.$name ;
    $filetemplocation = $_FILES['image']['tmp_name'];

    
// checking file extentions
    $arzz = array('png','jpeg','jpg');
    if(in_array(end($fileext),$arzz)){

      // checking if files have been uploaded

      if(!file_exists($destination)){      
        $check = $ultfunctz->addCat($category,$description,$tag,$imgsrc);    
        if($check){
          move_uploaded_file($filetemplocation,$destination);

          // $ultfunctz->message('success','datasaved successfully');
          echo 'success';
        }else{
          $ultfunctz->message('info','category must have a unique id');
        }
      }else{
        
        $ultfunctz->message('info','file already exist please choose another file');
      }
      // end of checking if file has been uploaded
      
    }else{
      $ultfunctz->message('danger','this file is not surported');
    }
  }else{
    $ultfunctz->message('danger','please fill all the form fields');
  }

}


if(isset($_POST['admin'])&& $_POST['admin']=='admin'){

    // print_r($_POST);

    $username = trim($_POST['user']);
    $pass = trim ($_POST['password']);

   $check =  $ultfunctz->adminz($username,$pass);

  if($check){
    // print_r($check);
    echo 'successz';
    $_SESSION['email']= 'setz';
  }else{
    $ultfunctz->message('danger','incorrect username or password');
  }

    
}


if(isset($_POST['vol']) && $_POST['vol'] == 'vol'){

    $id = 1;

    $table =" <table
    style='max-width: 100%'
    class='
      table
      table-sm
      table-light
      table-success
      table-bordered
      table-hover
    '
  >
    <thead class='bg-success'>
      <th class='text-white'>#id</th>
      <th class='text-white' >firstname</th>
      <th class='text-white' >secondname</th>
      <th class='text-white' >message</th>
      <th class='text-white' >email</th>
      <th class='text-white'>number</th>
      <th class='text-white'>date</th>
      <th class='text-white'>action</th>
    </thead>
    <tbody>
";


    $draw = $ultfunctz->drawvolunteers();

    foreach($draw as $d){

        $table .= "
        <tr>
        <td>".$id++."</td>
                          <td>".$d['firstname']."</td>
                          <td>".$d['secondname']."</td>
                          <td>".$d['message']."</td>
                          <td>".$d['email']."</td>
                          <td>".$d['numbers']."</td>
                          <td>".date('j M Y ' ,strtotime($d['times']))."</td>
                          <td><button id='".$d['id']."' class=' btn btn-outline-danger delvol'> delete <i class='font-weight-bold fa fa-trash'></i> </button></td>
                          &nbsp;
                        </tr>
        ";

    }

    $table .= "
    </tbody>
    </table>
    ";

    echo $table;


    
}

if(isset($_POST['donor']) && $_POST['donor'] == 'donor'){
    // echo "donation time";

    $draw  = $ultfunctz->drawdonors();

    $id = 1;

    $table = "
    

    <table
                      style='max-width: 100%'
                      class='
                        table
                        table-sm
                        table-light
                        table-success
                        table-bordered
                        table-hover
                      '
                    >
                      <thead class='bg-success'>
                        <th class='text-white'>#id</th>
                        <th class='text-white' >first name</th>
                        <th class='text-white' >second name</th>
                        <th class='text-white'>email</th>
                        <th class='text-white'>phone no</th>
                        <th class='text-white'>total</th>
                        <th class='text-white'>donations</th>
                        <th class='text-white'>action</th>
                      </thead>
                      <tbody>
    ";

    foreach($draw as $dra){

        $table .= "
        
        <tr>
        <td>".$id++."</td>
                          <td>".$dra['firstname']."</td>
                          <td>".$dra['secondname']."</td>
                          <td>".$dra['email']."</td>
                          <td>".$dra['numbers']."</td>
                          <td>".$dra['total']."</td>
                          <td>".$dra['donations']."</td>
                          <td><button id='".$dra['id']."' class=' btn btn-outline-danger deldonor'> delete <i class='font-weight-bold fa fa-trash'></i> </button></td>
                          &nbsp;
                        </tr>
        
        ";
       

    }

    $table .= "</tbody>
    </table>";

    echo $table;
}


if(isset($_POST['cont']) && $_POST['cont'] == 'cont'){
    

   $draw = $ultfunctz->drawcontact();
    // print_r($draw);

    $id = 1;

    

    // date('D M Y', strtotime())

    
    $table = "

    <table
                      style='max-width: 100%'
                      class='
                        table
                        table-sm
                        table-light
                        table-success
                        table-bordered
                        table-hover
                      '
                    >
                      <thead class='bg-success'>
                        <th class='text-white'>#id</th>
                        <th class='text-white' >fullname</th>
                        <th class='text-white' >email</th>
                        <th class='text-white'>phone</th>
                        <th class='text-white'>message</th>
                        <th class='text-white'>date</th>
                        <th class='text-white'>action</th>
                      </thead>
                      <tbody>
                        

    ";

    foreach($draw as $daw){


        $table .=" 
        <tr>
        <td>".$id++."</td>
                          <td>".$daw['fullname']."</td>
                          <td>".$daw['email']."</td>
                          <td>".$daw['phone']."</td>
                          <td>".$daw['message']."</td>
                          <td>".date('j M Y ' ,strtotime($daw['times']))."</td>
                          <td><button id='".$daw['id']."' class=' btn btn-outline-danger idzz'> delete <i class='font-weight-bold fa fa-trash'></i> </button></td>
                          &nbsp;
                        </tr>
        ";

    }

    $table .= "</tbody>
    </table>";

    echo $table;

}


if(isset($_POST['delcon']) && isset($_POST['curr']) && $_POST['curr']=='delcontact'){

  $check = $ultfunctz->delcontact($_POST['delcon']);

  if($check){
    $ultfunctz->message('success', 'contact deleted successfully');
  }else{
    $ultfunctz->message('danger', 'contact was not deleted');
  }
}

// deleting volunteer 

if(isset($_POST['delvol']) && $_POST['delz'] == 'delvol'){

  $check = $ultfunctz->delvol($_POST['delvol']);

  if($check){
    $ultfunctz->message('success','volunteers deleted successfully');
  }else{
    $ultfunctz->message('danger','failed to delte volunteers');
  }

}

if(isset($_POST['deldonor']) && $_POST['delz'] =='deldonor'){
   $check = $ultfunctz->deldonors($_POST['deldonor']);

   if($check){
    $ultfunctz->message('success', 'potential donors deleted successfully');
   }else{
    $ultfunctz->message('danger','failed to delete potential donors');
   }
}

// deleting donors




?>