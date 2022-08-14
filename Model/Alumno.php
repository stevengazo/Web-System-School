<?php
    /**
     * DEPENDENCIAS
     */
    require_once "connections/conexion.php";
    class Alumno
    {
        /**
        * Conexión con la Base de Datos
        */
        private $ins_conexion;
        private $obj_conexion;
        private static $instance=null;

        /**
        * Funcion para inicializar singleton
        * Si hay más de una instancia borra  la información
        */
        public static function getInstancia(){
            if(self::$instance == null ){
                self::$instance = new Alumno();
            }
            return self::$instance;
        }

        public function __construct()
        {
        }


        function insert_alumno($id,$nivel,$usuario,$pass,$nombre,$apellidos)
        {
            try{

              $this->ins_conexion = new conexion();
              $this->obj_conexion = $this->ins_conexion->conectar();
                // QUERY PARA INGRESAR A LA DB
                $sql = "INSERT INTO alumno (id,nivel_id,login,clave,nombre,apellidos)";
                $sql .= "values ('$id','$nivel','$usuario','$pass','$nombre','$apellidos')";
                $sqlResults = $this->obj_conexion->query($sql);
                $this->ins_conexion->desconectar();
                return true;
            }catch(Exception $error){
                echo "Error in insertarAlumno".$error->getMessage();
                return null;
            }

        }
        function val_login($usu,$pass){

            $this->ins_conexion = new conexion();
            $this->obj_conexion = $this->ins_conexion->conectar();
        
            $sql  = "SELECT id,login,clave FROM alumno";
            $sql .= " WHERE  login='$usu' AND clave= '$pass'";
        
             $rs = $this->obj_conexion->query($sql);
             $this->ins_conexion->desconectar();
             return $rs;
            }        

}
