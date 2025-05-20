
export const AboutMe = () => {


    return (
        <section
            className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 flex items-center justify-center"
        >
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2 animate-fade-slide">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Sobre mí
                        </h2>
                        <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Soy Raúl Bello, desarrollador web. He trabajado en proyectos creando aplicaciones web personalizadas que integran y facilitan el uso de funcionalidades ERP mediante interfaces intuitivas.
                            Estoy siempre aprendiendo nuevas tecnologías para crear soluciones prácticas y accesibles que conecten sistemas complejos con experiencias de usuario simples y efectivas.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4 animate-fade-slide">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-primary">Educación</h3>
                                    <p className="text-gray-400">
                                        SMIX Nicolau Copèrnic
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        DAM Vedruna Vall
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-primary">Experiencia</h3>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        Desarrollador en nbGroup (2023-Presente)
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold text-primary">Habilidades</h3>
                                    <p className="text-gray-700 dark:text-gray-400">
                                        React, Next.js, TypeScript, Node.js, Tailwind CSS, MYSQL, AL, Bussines Central, React Native
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center animate-fade-slide">
                        <img
                            alt="Imagen de habilidades"
                            loading="lazy"
                            width={600}
                            height={400}
                            decoding="async"
                            className="aspect-video overflow-hidden rounded-xl object-cover object-center shadow-lg"
                            src="/AboutMe.png"
                            style={{ color: "transparent" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}