/**
 * Trae elementos html a mostrar
 */
function ViewListaAsigHasAlum() {
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * Muestra un AsignaturaHasAlumno en especifico
 */
function ViewAsignaturaHasAlumno(idAsignaturaHasAlumno) {
  debugger;
  $.ajax({
    type: "VIEW",
    url: `http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php?asigAlum_id=${idAsignaturaHasAlumno}`,
    data: {},
    success: (data) => {
      debugger;
      const objectJson = JSON.parse(data);
      const htmlRender = `
            <div>
                <div>
                    <h4>
                        Información Alumno - Asignatura
                    </h4>
                    <div class="d-flex flex-row justify-content-between">
                        <p>
                            A continuación se muestra la información de la nota a borrar
                        </p>
                        <button class="btn btn-sm btn-info text-light" onclick="ViewListaAsigHasAlum()">
                            Lista 
                        </button>
                    </div>        
                </div>
            </div>
            <hr />
            
            <table class="table">
                <tbody>
                    <tr>
                        <th>
                            N° de Registro
                        </th>
                        <!--id-->
                        <td>            
                        ${objectJson.id}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Estudiante
                        </th>
                        <!--Estudiante-->
                        <td>
                        ${objectJson.alumnoNombre} ${objectJson.alumnoApellidos}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Asignatura
                        </th>
                        <!--Asignatura-->
                        <td>
                        ${objectJson.asignaturaNombre}
                        </td>
                    </tr>  
                </tbody>
            </table>        
        `;
      $("#renderbody").empty();
      $("#renderbody").html(htmlRender);
    },
    error: (error) => {
      debugger;
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * Trae vista para insertar AsignaturaHasAlumno
 */
function GetInsertAsignaturaHasAlumno() {
  let htmlRender = `
      <div>
        <h2>Matricular Alumno en asistencia</h2>
        <p>
          Esta vista permite realizar la matricula de un estudiante en una asignatura.
          Seleccione el estudiante que desee matricular en la asignatura          
        </p>
      </div>

    `;
  let arrayObjectsAlumnos = [];
  let arrayObjectsAsignaturas = null;
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_Asignatura.php?tipo=Json",
    data: {},
    success: (data) => {
      debugger;
      console.table(JSON.parse(data));
      arrayObjectsAsignaturas = JSON.parse(data);
      
      debugger;
    },
    error: (error) => {
      debugger;
      arrayObjectsAlumnos = null;
      debugger;
    },
  });
debugger;
  htmlRender =
    htmlRender +
    `
    <div class="d-flex flex-column">
      <div class="form-group">
          <label>Alumno</label>
          <select class="form-control">
              <option value="">Ejemplo alumno</option>
          </select>
      </div>
      <div class="form-group">
          <label>Asignatura</label>
          <select class="form-control" id="selectAsignaturas">          
          </select>
      </div>
      <div class="d-flex flex-row justify-content-around mt-2">
          <button class="btn btn-sm btn-outline-success bg-white">Agregar</button>
          <button class="btn btn-sm btn-outline-info bg-white">Regresar</button>
      </div>
    </div>
    `;

  $("#renderbody").empty();
  $("#renderbody").html(htmlRender);

  debugger;
  arrayObjectsAsignaturas.map((element) => {
    var tmpOption = document.createElement("option");
    tmpOption.value = element.id;
    tmpOption.innerText = `${element.nombre} - ${element.nombreProfesor} ${element.apellidosProfesor}`;
    debugger;
    document.getElementById("selectAsignaturas").appendChild(tmpOption);
  });
}
/**
 * Envia un AsignaturaHasAlumno a la DB y trae la vista ViewAsignaturaHasAlumno si lo agrega
 */
function PostInsertAsignaturaHasAlumno() {
  alert("View");
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * Trae vista para modificar
 */
function GetUpdateAsignaturaHasAlumno() {
  alert("View");
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * Envia vista modifiada
 */
function PostUpdateAsignaturaHasAlumno() {
  alert("View");
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * modificar
 */
function GetDeleteAsignaturaHasAlumno() {
  alert("View");
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}

/**
 * confirma la eliminación
 */
function PostDeleteAsignaturaHasAlumno() {
  alert("View");
  $.ajax({
    type: "GET",
    url: "http://localhost/app_School/WebService/ws_AsignaturaHasAlumno.php",
    data: {},
    success: (data) => {
      $("#renderbody").empty();
      $("#renderbody").html(data);
    },
    error: (error) => {
      $("#renderbody").empty();
      $("#renderbody").html(error);
      console.error(error);
    },
  });
}
