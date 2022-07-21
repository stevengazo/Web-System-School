    <div>
        <div>
            <h4>
                Lista de Faltas de asistencia
            </h4>
            <p>
                A continuación se muestran las faltas realizadas por los estudiantes
            </p>
            <a href="index.php?action=InsertarAusencia">Agregar Nueva Ausencia</a>
        </div>
    </div>
    <table class="table">
        <thead>
            <tr>
                <th>
                    Id
                </th>
                <th>
                    Id Estudiante
                </th>
                <th>
                    Id Materia
                </th>
                <th>
                    Día
                </th>
                <th>
                    Motivo
                </th>
                <th>
                    Accion
                </th>
            </tr>
        </thead>
        <tbody>
            {assign var='counter' value={0}}
            {section name=item loop=$ListaFaltasAsistencia}
            <tr>
                <!--id-->
                <td>
                    {$ListaFaltasAsistencia[$counter].id}
                </td>
                <!--id Estudiante-->
                <td>
                    {$ListaFaltasAsistencia[$counter].alumno_id}
                </td>
                <!--Id Materia-->
                <td>
                    {$ListaFaltasAsistencia[$counter].asignatura_id}
                </td>
                <!--Dia-->
                <td>
                    {$ListaFaltasAsistencia[$counter].fecha}
                </td>
                <!--Motivo-->
                <td>
                    {$ListaFaltasAsistencia[$counter].justificada}
                </td>
                <!--Botton ver-->
                <td>
                    <button type="button" class="btn btn-primary">
                        <a class="text-light nav-link active"
                            href="index.php?action=verInfoFaltas&idFalta={$ListaFaltasAsistencia[$counter].id}">Ver
                            Detalles</a>
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-success">
                        <a class="text-light nav-link active"
                            href="index.php?action=EditarFaltas&idFalta={$ListaFaltasAsistencia[$counter].id}">Ver
                            Editar</a>
                    </button>
                </td>
                <td>
                    <button type="button" class="btn btn-danger">
                        <a class="text-light nav-link active"
                            href="index.php?action=BorrarFaltas&idFalta={$ListaFaltasAsistencia[$counter].id}">Ver
                            Eliminar</a>
                    </button>
                </td>
            </tr>
            {assign var='counter' value=$counter+1}
            {/section}
        </tbody>
    </table>
</body>
