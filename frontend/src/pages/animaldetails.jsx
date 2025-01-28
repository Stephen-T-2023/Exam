import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navigation from "../component/navigation";

const AnimalDetails = () => {
    const [animalDetails, setAnimalDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const animalName = queryParams.get("name");

    useEffect(() => {
        if (!animalName) {
            setError("Animal name is missing.");
            setLoading(false);
            return;
        }

        const fetchAnimalDetails = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.api-ninjas.com/v1/animals?name=${animalName}`, {
                    headers: {
                        "X-Api-Key": "DedjPlwuUfCzi0VNR5LlXg==NaRcMBXrSLcAfY32",
                    },
                });

                const data = await response.json();

                if (data.length > 0) {
                    setAnimalDetails(data[0]);
                } else {
                    setError("No details found for this animal.");
                }
            } catch (error) {
                setError("Error fetching animal details.");
                console.error("Error fetching animal details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimalDetails();
    }, [animalName]);

    if (loading) {
        return (
            <div className="flex justify-center w-full h-full m-10">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-4 border-t-green-600 border-solid rounded-full animate-spin"></div>
                <span className="ml-4 text-xl text-green-600">Loading...</span>
            </div>
        );
    }
    
    
    
    if (error) {
        return <div>{error}</div>;
    }

    if (!animalDetails) {
        return <div>No data available for this animal.</div>;
    }

    const handleBackToMap = () => {
        navigate("/map");
    };

    return (
        <div className="bg-green-100 w-full h-screen overflow-hidden flex flex-col">
            <Navigation />
            <div className="flex flex-col items-center justify-start p-6 space-y-8 flex-grow overflow-y-auto">
                <div className="w-full bg-white rounded-lg shadow-md p-6 flex-1 overflow-y-auto">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">{animalDetails.name}</h2>
                    <ul className="space-y-2">
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Common Name:</strong> {animalDetails.characteristics.common_name}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Scientific Name:</strong> {animalDetails.taxonomy.scientific_name}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Kingdom:</strong> {animalDetails.taxonomy.kingdom}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Phylum:</strong> {animalDetails.taxonomy.phylum}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Class:</strong> {animalDetails.taxonomy.class}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Order:</strong> {animalDetails.taxonomy.order}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Family:</strong> {animalDetails.taxonomy.family}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Genus:</strong> {animalDetails.taxonomy.genus}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Diet:</strong> {animalDetails.characteristics.diet}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Location:</strong> {animalDetails.locations}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Dinsinctive Features:</strong> {animalDetails.characteristics.distinctive_feature}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Top Speed:</strong> {animalDetails.characteristics.top_speed}
                        </li>
                        <li className="p-4 bg-gray-200 rounded-md text-gray-800 shadow-sm">
                            <strong>Lifespan:</strong> {animalDetails.characteristics.lifespan}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center flex-grow">
                <button
                    onClick={handleBackToMap}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all w-full max-w-xs mb-6">
                    Back to Map
                </button>
            </div>
        </div>
    );
};

export default AnimalDetails;
