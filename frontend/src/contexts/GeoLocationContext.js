import React, { useContext, useState, useEffect } from "react"

const GeoLocationContext = React.createContext()

export const useGeoLocation = () => useContext(GeoLocationContext)

export const GeoLocationProvider = ({ children }) => {
    const [currentGeoLocation, setCurrentGeoLocation] = useState()

    const getCurrentGeoLocation = () => {
        if ("geolocation" in navigator) {
            console.log("Available");
        } else {
            console.log("Not Available");
        }
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);

            setCurrentGeoLocation([position.coords.latitude, position.coords.longitude])
        });
    }

    useEffect(() => {
        const unsubscribe = getCurrentGeoLocation()

        return unsubscribe
    }, [])

    const value = {
        currentGeoLocation
    }

    return (
        <GeoLocationContext.Provider value={value}>
            {children}
        </GeoLocationContext.Provider>
    )
}