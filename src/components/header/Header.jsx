export const Header = ({ selectedPage, setSelectedPage }) => {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-[#2B221C] px-20">
            <div className="container flex h-16 items-center justify-between">
                <button onClick={() => setSelectedPage(null)} className="text-xl font-bold text-primary">Portfolio</button>
                <nav className="hidden md:flex gap-6">
                    <button onClick={() => setSelectedPage(null)} className={`text-sm font-medium transition-colors hover:text-primary ${!selectedPage ? 'text-primary' : 'text-muted-foreground'} cursor-pointer`}>
                        Inicio
                    </button>
                    <button onClick={() => setSelectedPage('Contact')} className={`text-sm font-medium transition-colors hover:text-primary ${selectedPage ? 'text-primary' : 'text-muted-foreground'} cursor-pointer`}>
                        Contacto
                    </button>
                </nav>
            </div>
        </header>
    )
}