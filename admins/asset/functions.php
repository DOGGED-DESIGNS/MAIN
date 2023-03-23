
<?php 


require_once "./config.php";

class FunctClassz extends Config{
    public function drawcontact(){
        $sql = "SELECT * from contact";

        $stmtz = $this->stmt->prepare($sql);
        $stmtz->execute();

        $all = $stmtz->fetchAll();

        return $all;
    }
    public function drawvolunteers(){

        try{
            $sql = "SELECT * from volunteer";
            // return true;
            $stmt2 =$this->stmt->prepare($sql);
            $stmt2->execute();
            $all = $stmt2->fetchAll();
            return $all;
        }catch(Exception $e){

            echo $e->getMessage();
            return false;
        }
    }

    public function drawdonors(){
        try{
            $sql = "select id,  firstname,secondname, email, numbers, sum(amount) as total, count(*) as donations from donors group by email";
            $stmt2 = $this->stmt->prepare($sql);
            $stmt2->execute();
            $all = $stmt2->fetchAll();
            return $all;
        }catch(Exception $e){
            echo $e->getMessage();
            return false;
        }
    }
   public function adminz($user, $pass){    
    try{
        $sql = "select * from admin where username = :user and passwords = :pass";
        $stmt2 = $this->stmt->prepare($sql);
        $stmt2->execute(['user'=>$user,'pass'=>$pass]);
        if( $stmt2->rowCount() < 1){
            return false;
        }else{
          $all =  $stmt2->fetchAll();
          return $all;
        }
        return false;
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
// adding to category
public function addCat ($category,$des,$tags,$image){
    try{
        $sql = "insert into category (category,tags,img,des)      
        values(:category,:tags,:img,:des)";
        $stmt2 =$this->stmt->prepare($sql);
        $stmt2->execute(['category'=>$category,'des'=>$des,'tags'=>$tags,'img'=>$image]);
        return true;
    }catch(Exception $e){
         echo $e->getMessage();
        return false;
    }
}
  public function drawcategory (){
    try{

        $sql = "select * from category";
        $stmt2 =$this->stmt->prepare($sql);
        $stmt2->execute();
        $all = $stmt2->fetchAll();
        return $all;
    }catch(Exception $e){
        return false;
    }
  }
 
  public function deletecat ($cat){

    try{
        $sql = " delete from category where category = :del";
        $stmt2 =$this->stmt->prepare($sql);
        $stmt2->execute(['del'=>$cat]);
        return true;
    }catch(Exception $e){
        return false;
    }
  }
 
  public function drawsinglecat($sing){

    try{

        $sql = 'select * from category where category = :cat';
        $stmt2=$this->stmt->prepare($sql);
        $stmt2->execute(['cat'=>$sing]);
        $all = $stmt2->fetchAll();
        return $all;
    }catch(Exception $e){
        return false;
    }
    
  }


//   inserting into project

public function addproject ($cat,$img){

    try{
        $sql = "insert into project (category,imgproject)
        values(:cat,:img)
        ";
        $stm2 =  $this->stmt->prepare($sql);
        $stm2->execute(['cat'=>$cat,'img'=>$img]);
        return true;
    }catch(Exception $e){
        return false;
    }
}


public function drawproject (){

    try{
        $sql = "select * from project";
        $stmt2 = $this->stmt->prepare($sql);
        $stmt2->execute();
        $all = $stmt2->fetchAll();

        return($all);
    }catch(Exception $e){
      return false;
    }
}

// draw a single project;

public function drawsingleproject($id){
    try{
      
       $sql = "select * from project where category = :id";
       $stmt2 = $this->stmt->prepare($sql);
       $stmt2->execute(['id'=>$id]);
       $all = $stmt2->fetchAll();
       return $all;
    }catch(Exception $e){
        return false;
    }
}
public function delproject($id){
    try{
      
       $sql = "delete from project where category = :id";
       $stmt2 = $this->stmt->prepare($sql);
       $stmt2->execute(['id'=>$id]);
       return true;
    }catch(Exception $e){
        return false;
    }
}

public function delcontact($id){

    try{
        $sql = 'delete from contact where id = :id';
        $stmt2 = $this->stmt->prepare($sql);
        $stmt2->execute(['id'=>$id]);
        return true;
    }catch(Exception $e){
        return false;
    }
}
// delete donors

public function deldonors($id){
    try{

        $sql = 'delete from donors where id = :id';
        $stmt2 = $this->stmt->prepare($sql);
        $stmt2->execute(['id'=>$id]);

        return true;
    }catch(Exception $e){
      return false;
    }
}
// end of delete donors


// start of delete volunteers

public function delvol($id){

   try{

    $sql = "delete from volunteer where id = :id";
    $stmt2 = $this->stmt->prepare($sql);
    $stmt2->execute(['id'=>$id]);

    return true;



   }catch(Exception $e){
    return false;
   }
}

// end of delete volunteers


}


?>