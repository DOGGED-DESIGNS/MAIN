

<?php 

class Config {

    public $stmt;
    private $host = 'localhost';
    private $user = 'root';
    private $pass = "dogged8000";
    private $dbname = "goif";
 
    private $dsn ='mysql:host=localhost;dbname=goif';
    


    function __construct()
    {
       
        try{
            $this->stmt = new PDO($this->dsn,$this->user,$this->pass);

    
        }catch(Exception $e){
          echo $e->getMessage();
        }
        



    }


}


?>