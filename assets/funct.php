

<?php 

require_once './config.php';


class Funct extends Config{

    // [first] => wrewwd
    // [second] => werwesds
    // [email] => uzoechijeremiah@yahoo.com
    // [phone] => 2323212
    // [message] => werw
    // [send] => sen


    public function volunteer($first, $second,$email,$phone,$message){

       $first2= stripslashes($first);
        $second2 = stripslashes($second);
       $email2 = stripslashes($email);
        $phone2 = stripslashes($phone);
         $message2= stripslashes($message);
       $first3= trim($first2);
        $second3= trim($second2);
        $email3 =trim($email2);
        $phone3=trim($phone2);
       $message3= trim($message2);


       try{
           $sql = "insert into goif.volunteer (firstname,secondname,message,email,numbers)  
           value(:first,:second,:message,:email,:numbers)";   
          $stmt2 = $this->stmt->prepare($sql);
          $stmt2->execute(["first"=>$first3,'second'=>$second3,'message'=>$message3,'email'=>$email3,'numbers'=>$phone3]);
          return true;

       }catch(Exception $e){
          echo $e->getMessage();
          return false;
       }
    }
    public function message ($type, $message){
        echo "
        <div style='max-width:700px ;' class=' alert alert-{$type} fade show alert-dismissiable'>
              <strong>{$message}</strong>
              <button class='close' data-dismiss='alert' >&times;</button>
            </div>
        ";
    }
   public function donorstore($firsts,$seconds,$emails,$numbers,$amounts){

    try{
        $sql = "insert into goif.donors (firstname, secondname, email, numbers, amount) values(:first,:second,:email,:number,:amount) ";        
       $stmt2 = $this->stmt->prepare($sql);
       $stmt2->execute(['first'=>$firsts,'second'=>$seconds,'email'=>$emails,'number'=>$numbers,'amount'=>$amounts]);
       return true;
    }catch(Exception $e){

        echo $e->getMessage();

        return false;
    }
       

   }

//    [fullname] => 
//     [email] => 
//     [number] => 
//     [message] => 
//     [contact] => contact
   public function contactstore($fullname, $email, $phone, $message ){

    try{
        $sql = 'insert into goif.contact (fullname, email, phone, message)
        values(:full,:mail,:phone,:message)';
    
        $stmt2 = $this->stmt->prepare($sql);
    $stmt2->execute(['full'=>$fullname,'mail'=>$email,'phone'=>$phone,'message'=>$message]);

    return true;

    }catch(Exception $e){
        echo $e->getMessage();
        return false;
    }

      
   }

   

}



?>