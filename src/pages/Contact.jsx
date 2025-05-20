import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Contact = () => {

    const titleRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        gsap.from(titleRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 1,
            ease: "power3.out",
        });

        gsap.from(formRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            delay: 0.5,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="py-12 md:py-16 bg-[#2B221C] lg:py-24 flex flex-col w-full items-center justify-center">
            <div
                className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
                ref={titleRef}
            >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                    Contacto
                </h1>
                <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300">
                    ¿Tienes alguna pregunta o quieres trabajar conmigo? Rellena el formulario
                    y me pondre en contacto contigo.
                </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2" ref={formRef}>
                <div
                    className="rounded-lg bg-card text-card-foreground shadow-sm border border-border"
                    data-v0-t="card"
                >
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight text-primary">
                            Envíame un mensaje
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Completa el formulario a continuación y me pondré en contacto contigo
                            lo antes posible.
                        </p>
                    </div>
                    <div className="p-6 pt-0">
                        <form className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Nombre
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="subject"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Asunto
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary"
                                />
                            </div>

                            <div className="space-y-2">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary"
                                />
                            </div>

                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary/90"
                            >
                                Enviar mensaje
                            </button>
                        </form>
                    </div>
                </div>
                <div className="space-y-8">
                    <div
                        className="rounded-lg bg-card text-card-foreground shadow-sm border border-border"
                        data-v0-t="card"
                    >
                        <div className="flex flex-col space-y-1.5 p-6">
                            <h3 className="text-2xl font-semibold leading-none tracking-tight text-primary">
                                Información de contacto
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Puedes contactarme a través de correo electrónico.
                            </p>
                        </div>
                        <div className="p-6 pt-0 space-y-4">
                            <div className="flex items-start space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-mail h-5 w-5 mt-0.5 text-primary"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <a className="text-sm text-muted-foreground" href="mailto:raulbello@vedrunavall.cat">raulbello@vedrunavall.cat</a>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide lucide-map-pin h-5 w-5 mt-0.5 text-primary"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                                <div>
                                    <h3 className="font-medium">Ubicación</h3>
                                    <p className="text-sm text-muted-foreground">Barcelona, España</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}