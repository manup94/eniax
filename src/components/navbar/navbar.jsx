
export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <a href="#" className="text-white text-2xl font-bold">Eniax</a>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="text-white">Inicio</a></li>
                        <li><a href="#" className="text-white">Acerca de</a></li>
                        <li><a href="#" className="text-white">Servicios</a></li>
                        <li><a href="#" className="text-white">Contacto</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
