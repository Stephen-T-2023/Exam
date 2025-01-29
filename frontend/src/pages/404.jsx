import Navigation from "../component/navigation";

const FourZeroFour = () => {
    return (
        <div className="flex flex-col w-full h-screen bg-green-100">
            <Navigation />
            <div className="flex flex-col items-center justify-center flex-grow p-6 space-y-6">
                <div className="text-center">
                    <h1 className="text-6xl font-bold text-green-600">404</h1>
                    <p className="text-2xl text-gray-800 mt-4">Page Not Found</p>
                </div>
                
                <div className="w-3/4 h-64 bg-zooEntrance bg-no-repeat bg-cover rounded-lg"></div>
                
                <a
                    href="/"
                    className="py-3 px-6 bg-green-600 text-white text-lg rounded-md hover:bg-green-700 transition-all"
                >
                    Go Back Home
                </a>
            </div>
        </div>
    );
};

export default FourZeroFour;