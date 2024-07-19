import { useDeleteVideo } from "../../shared/hooks";
export const DeleteVideoButton = ( { courseId, moduleId, videoName } ) => {
    const { deleteVideo, loading, success, error } = useDeleteVideo();

    const handleDelete = () => {
        deleteVideo( courseId, moduleId, videoName );
    }

    return (
        <div>
            <button onClick={handleDelete} disabled={loading}>Delete</button>
            {success && <p>Video borrado con éxito!</p>}
            {error && <p>Error al borrar el video: {error}</p >}
            {console.log( 'Error del boton: ', { error } )}
        </div>
    )
}