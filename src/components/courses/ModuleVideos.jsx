import { useGetVideos } from "../../shared/hooks";
import { addVideoForm } from "./AddVideoForm";
import { DeleteVideoButton } from "./DeleteVideoButton";

export const ModuleVideos = ( { courseId, moduleId, isUserCreator } ) => {
    const { videos, loading, error } = useGetVideos( courseId, moduleId );

    if ( loading ) return <p>Cargando...</p>
    if ( error ) return <p>Error al cargar los videos: {error}</p>

    return (
        <div>
            {isUserCreator && <addVideoForm courseId={courseId} moduleId={moduleId} />}
            <ul>
                {videos.map( video => (
                    <li key={video.name}>
                        <a href={video.url} target="_blank" rel="noreferrer">{video.name}</a>
                        {isUserCreator && <DeleteVideoButton courseId={courseId} moduleId={moduleId} videoName={video.name} />}
                    </li>
                ) )}
            </ul>
        </div>
    )
}