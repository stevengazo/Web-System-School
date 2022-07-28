<?php

    /**
     * DEPENDENCIAS
     */
    require_once "libs/smarty4_1_1/config_smarty.php";
    require_once "Model/Falta_Asistencia.php";
    require_once "connections/conexion.php";
    require_once "Model/Nota.php";

    class NotasController{

        private $Smarty;
        private $NotaModel;
        public static $instance;
    

        public static function getInstancia(){
            if(self::$instance == null){
                self::$instance =new NotasController();                            
            }
            return self::$instance;
        }

        function __construct()
        {
            $this->Smarty= new config_smarty();
            $this->NotaModel = Nota::getInstancia();
        }
        
        function Gestor($accion){
                        
            switch ($accion) {
                case "listaNotas":
                    $this->listaNotas();
                    break;
                case "CrearNota":
                    $this->getInsertarNota();
                    break;
                case "VerNota":
                    $id = $_REQUEST['idNota'];
                    $this->VerNota($id);
                    break;                    
                default:
                    break;
            }
        }

        function VerNota($id){
            $Result = $this->NotaModel->obtenerNotaPorId($id);
            $this->Smarty->setAssign("NotaObjecto", $Result[0]);
            $this->Smarty->setAssign("titulo", "Información Nota");            
            $this->Smarty->setDisplay("Shared/LayoutInit.tpl");       
            $this->Smarty->setDisplay("Shared/Head.tpl");       
            $this->Smarty->setDisplay("Shared/NavBar.tpl");       
            $this->Smarty->setDisplay("Notas/Ver_Nota.tpl");     
            $this->Smarty->setDisplay("Shared/LayoutClose.tpl");                   
        }

        function getInsertarNota(){
            $id=  $this->NotaModel->getUltimoId() + 1;
            $this->Smarty->setAssign("titulo", "Crear Nota");
            $this->Smarty->setAssign("NuevoId", $id);
            $this->Smarty->setDisplay("Shared/LayoutInit.tpl");       
            $this->Smarty->setDisplay("Shared/Head.tpl");       
            $this->Smarty->setDisplay("Shared/NavBar.tpl");       
            $this->Smarty->setDisplay("Notas/Insertar_Nota.tpl");     
            $this->Smarty->setDisplay("Shared/LayoutClose.tpl");       
        }


        /**
         * Descripción: trae la lista de notas completa
         */
        function listaNotas(){
            $results = $this->NotaModel->obtenerListaNotas();

            $this->Smarty->setAssign("ListaNotas",$results);
            $this->Smarty->setAssign("titulo", "Lista de Notas");

            $this->Smarty->setDisplay("Shared/LayoutInit.tpl");       
            $this->Smarty->setDisplay("Shared/Head.tpl");       
            $this->Smarty->setDisplay("Shared/NavBar.tpl");       
            $this->Smarty->setDisplay("Notas/ListaNotas.tpl");     
            $this->Smarty->setDisplay("Shared/LayoutClose.tpl");       
        }

    }
