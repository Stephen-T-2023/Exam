const Navigation = () => {

    return ( 
        <>
            <div className="w-full bg-green-600">
                <nav className="flex items-center justify-between p-2 bg-green-600 text-white">
                    <a href="/" className="text-2xl font-bold px-4 py-2 rounded-md hover:text-black">
                        Riget Zoo Adventures
                    </a>
                    <div className="flex space-x-4">
                        <a href="/bookingchoice" className="px-4 py-2 border-2 border-white rounded-md hover:bg-green-700 hover:text-white transition-all">
                            Shop
                        </a>
                        <a href="/map" className="px-4 py-2 border-2 border-white rounded-md hover:bg-green-700 hover:text-white transition-all">
                            Map
                        </a>
                        <a href="/about" className="px-4 py-2 border-2 border-white rounded-md hover:bg-green-700 hover:text-white transition-all">
                            About
                        </a>
                        <a href="/logout" className="px-4 py-2 border-2 border-white rounded-md hover:bg-green-700 hover:text-white transition-all">
                            Logout
                        </a>
                    </div>
                </nav>
            </div>
        </>
        );
}

export default Navigation;