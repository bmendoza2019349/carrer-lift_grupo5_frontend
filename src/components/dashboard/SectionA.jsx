import React from 'react'

function SectionA() {
    return (
        <div className="m-auto max-w-6xl p-12 mt-[-2rem]">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 max-w-md flex flex-col justify-center">
                    <div className="md:text-5xl text-2xl uppercase font-black">Carrer lift</div>
                    <div className="text-xl mt-4">"Somos una comunidad dedicada a revolucionar la educación a través de la tecnología y la innovación."
                    </div>
                    <div className="my-5 h-16">
                        <a href={"/auth"}>
                            <div className="shadow-md font-medium py-2 px-4 text-yellow-100
                            cursor-pointer bg-gray-800 hover:bg-yellow-500 rounded text-lg text-center w-48">
                                Comienza ahora
                            </div>
                        </a>

                    </div>
                </div>
                <div className="flex md:justify-end w-full md:w-1/2 -mt-5">
                    <div className="bg-dots">
                        <div className="shadow-2xl max-w-md z-10 rounded-full mt-6 ml-4">
                            <img alt="card img" className="rounded-t" src="https://i.postimg.cc/8cbFKHwn/img-Logo-Carrer-L.png" />
                            <div className="text-2xl p-10 bg-white">
                                <img alt="quote" className="float-left mr-1" src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                "Transforma tu aprendizaje con nuestras herramientas innovadoras."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}

export default SectionA