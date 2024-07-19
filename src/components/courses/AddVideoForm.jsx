import { useState } from "react";
import { addUrlsToModule } from '../../shared//hooks'

export const addVideoForm = ( { courseId, moduleId } ) => {
    const [videoLink, setVideoLink] = useState( '' )
    const { addUrls, loading, success, error } = addUrlsToModule


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