import React, { useState, useEffect } from 'react';

// Define the higher-order component
export const withDataFetching = (WrappedComponent, dataSource) => {
    return () => {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            const fetchData = async () => {
                setIsLoading(true);
                try {
                    const response = await fetch(dataSource);
                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }
                    const result = await response.json();
                    setData(result);
                } catch (error) {
                    setError(error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchData();

        }, []);

        return (
            <WrappedComponent
                data={data}
                isLoading={isLoading}
                error={error}
            />
        );
    };
};