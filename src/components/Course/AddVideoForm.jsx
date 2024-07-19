import { useState } from "react";
import { useAddUrlsToModule } from '../../shared/hooks'

export const AddVideoForm = ( { courseId, moduleId } ) => {
    const [videoLink, setVideoLink] = useState( '' )
    const { addUrls, loading, success, error } = useAddUrlsToModule()


    const handleSubmit = async ( e ) => {
        e.preventDefault()
        await addUrls( courseId, moduleId, videoLink )
        setVideoLink( '' )
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={videoLink}
                    onChange={( val ) => setVideoLink( val.target.value )}
                    placeholder="URL del video"
                />
                <button type="submit" disabled={loading}>Agregar</button>
            </form>
            {success && <p>Video agregado con éxito!</p>}
            {error && <p>Error al agregar el video: {error}</p>}
        </div>
    )
}