
<?php

class Config {


    public $stmt;

    private $root = "root";
    private $dbname = 'goif';
    private $password = 'dogged8000';

    private $host = 'localhost';

    private $dsn = 'mysql:host=localhost; dbname=goif';



    function __construct()
    {
        
        $this->stmt = new PDO($this->dsn,$this->root, $this->password);
        

    }

   
  






}



?>