import Projects from '../../assets/Projects.json'

export const HighLatedProjects = () => {

    console.log(Projects);

    return (
        <section id='projects' className="w-full flex items-center justify-center bg-[#2B221C] py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl">
                            Proyectos destacados
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Aquí hay una selección de mis proyectos más destacados en los que he participado.
                        </p>
                    </div>
                </div>

                <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
                    {Projects.map((project) => (
                        <div
                            key={project.id}
                            className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden"
                            data-v0-t="card"
                        >
                            <img
                                loading="lazy"
                                decoding="async"
                                className="w-full max-h-60 object-contain p-3"
                                src={project.image}
                                alt={project.alt}
                                style={{ color: "transparent" }}
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">Proyecto {project.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}