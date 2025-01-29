import { useEffect, useState } from "react";
import Navigation from "../component/navigation";

const Map = () => {
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        if (localStorage.getItem("access_token") === null) {
            window.location.href = "/login";
        }
    }, []);

    const handleSearch = () => {
        if (searchInput.trim() !== "") {
            window.location.href = `/search?query=${encodeURIComponent(searchInput)}`;
        }
    };

    return (
        <div className="w-full h-screen flex flex-col overflow-hidden">
            <div className="flex-shrink-0">
                <Navigation />
            </div>
            <div className="relative flex-grow bg-Map bg-no-repeat bg-cover">
                <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg w-80">
                    <label htmlFor="animal-search" className="block text-gray-800 font-bold mb-2">
                        Search for an Animal:
                    </label>
                    <div className="flex items-center space-x-2">
                        <input
                            id="animal-search"
                            type="text"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            placeholder="Enter animal name..."
                            className="flex-grow p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-green-300"/>
                        <button onClick={handleSearch} className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
