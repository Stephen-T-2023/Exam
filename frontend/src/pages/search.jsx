import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Navigation from "../component/navigation";

const Search = () => {
    const [searchParams] = useSearchParams();
    const [animalData, setAnimalData] = useState([]);
    const [loading, setLoading] = useState(false);
    const query = searchParams.get("query");
    const apiKey = "DedjPlwuUfCzi0VNR5LlXg==NaRcMBXrSLcAfY32";

    useEffect(() => {
        const fetchAnimalData = async () => {
            if (!query) return;
            setLoading(true);
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/animals`, {
                    headers: {
                        "X-Api-Key": apiKey,
                    },
                    params: {
                        name: query,
                    },
                });
                if (response.data && Array.isArray(response.data)) {
                    setAnimalData(response.data);
                } else {
                    setAnimalData([]);
                }
            } catch (error) {
                console.error("Error fetching animal data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimalData();
    }, [query]);

    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-shrink-0">
                <Navigation />
            </div>
            <div className="flex-grow bg-gray-100 p-6">
                {loading ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-green-600 border-solid rounded-full animate-spin"></div>
                        <span className="ml-4 text-xl text-green-600">Loading...</span>
                    </div>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold text-green-600 mb-4">
                            Search Results for: {query}
                        </h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {animalData.length > 0 ? (
                                animalData.map((animal, index) => (
                                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                                        <h3 className="text-lg font-semibold text-gray-800">
                                            {animal.name}
                                        </h3>
                                        <p className="text-gray-600">{animal.latin_name}</p>
                                        <p className="text-gray-600">{animal.classification}</p>
                                        <p className="text-gray-600">
                                            {animal.diet ? `Diet: ${animal.diet}` : "Diet: N/A"}
                                        </p>
                                        <a href={`/animaldetails?name=${animal.name}`} className="text-blue-500 hover:underline mt-2 block">
                                            Learn More
                                        </a>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500">No results found for "{query}".</p>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Search;
