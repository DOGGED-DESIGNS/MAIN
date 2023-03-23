 <?php 


session_start();

// $_SESSION['email']="email";

  require_once './funct.php';

  $ultfunct = new Funct();

//   [fullname] => 
//   [email] => 
//   [number] => 
//   [message] => 
//   [contact] => contact

  if(isset($_POST['contact']) && $_POST['contact']=='contact'){

    $full = trim($_POST['fullname']);
    $email = trim($_POST['email']);
    $number = trim($_POST['number']);
    $message = trim($_POST['message']);


    if(!empty($full) && !empty($email) && !empty($number) && !empty($message)){

        $check = $ultfunct->contactstore($full,$email,$number,$message);
        if($check){
         $ultfunct->message('success','we will get back to you shortly');
        }else{
         $ultfunct->message('info','something went wrong');
        }
    }else{
        $ultfunct->message('danger','please fill all the fields correctly');
    }



  }



  if(isset($_POST['donate']) && $_POST['donate']=='donate'){

    $frist = trim($_POST['first']);
    $second = trim($_POST['second']);
    $email = trim($_POST['email']);
    $phonenumber = trim($_POST['phonenumber']);
    $money = trim($_POST['money']);

    if(!empty($frist) && !empty($second) && !empty($email) && !empty($phonenumber) && !empty($money)){
       
       $check = $ultfunct->donorstore($frist,$second,$email,$phonenumber,$money);

       if($check){
        $_SESSION['emailz'] = $email;
        echo 'success';
       }else{
        $ultfunct->message('danger','something went wrong');
       }
        
    }else{
        $ultfunct->message('danger','please fill all the form fields');
    }
  }

 
 if(isset($_POST['first'])&& isset($_POST['second']) && isset($_POST['email'])&& isset($_POST['message']) && isset($_POST['phone']) && $_POST['send']=='send' ){

    if(!empty($_POST['first']) && !empty($_POST['second']) && !empty($_POST["email"]) && !empty($_POST['message']) && !empty($_POST['phone'])){

        $check = $ultfunct->volunteer($_POST['first'],$_POST['second'],$_POST['email'],$_POST['message'],$_POST['phone']);

        $ultfunct->message('success','we will get back to you');
    }else{

        $ultfunct->message('danger',"please fill the form correctly");
    }


    
  
    
 }
 
 
 ?>