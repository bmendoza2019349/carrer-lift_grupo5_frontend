import { useGetVideos } from "../../shared/hooks";
import { addVideoForm } from "./AddVideoForm";
import { DeleteVideoButton } from "./DeleteVideoButton";

const extraerUrl = ( url ) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match( regExp );
    return match ? match[1] : null;
}

const FrameVideo = ( { url } ) => {
    const idYt = extraerUrl( url )
    return idYt ? (
        <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${idYt}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        ></iframe>
    ) : ( <div>Url invalida</div> )
}

export const ModuleVideos = ( { courseId, moduleId, isUserCreator } ) => {
    const { videos, loading, error } = useGetVideos( courseId, moduleId );

    if ( loading ) return <p>Cargando...</p>;
    if ( error ) return <p>Error al cargar los videos: {error}</p>;

    return (
        <div>
            {isUserCreator && <addVideoForm courseId={courseId} moduleId={moduleId} />}
            <ul>
                {videos.map( ( video, index ) => (
                    <li key={index}>
                        <FrameVideo url={video} />
                        {isUserCreator && <DeleteVideoButton courseId={courseId} moduleId={moduleId} videoName={video} />}
                    </li>
                ) )}
            </ul>
        </div>
    );
};
