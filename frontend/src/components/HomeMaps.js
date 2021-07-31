import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup, SVGOverlay } from 'react-leaflet'
import { Col, Card, CardImg, CardBody } from 'reactstrap'
import styles from '../assets/css/HomeMaps.module.css'
import { useGeoLocation } from '../contexts/GeoLocationContext'
import { HomeClinicCard } from './HomeClinicCard'
import currentLocationIcon from '../assets/icons/person-location.svg'
import L from 'leaflet'


// const iconPerson = L.icon({
//     iconUrl: currentLocationIcon,
//     iconRetinaUrl: currentLocationIcon,
//     iconAnchor: null,
//     popupAnchor: null,
//     shadowUrl: null,
//     shadowSize: null,
//     shadowAnchor: null,
//     iconSize: new L.Point(45, 45),
// });


export const HomeMaps = ({ clinics }) => {

    const { currentGeoLocation } = useGeoLocation()

    console.log('IN MAPS', currentGeoLocation)

    const renderMarkers = () => clinics.map((clinic) => {
        const position = [clinic.location.latitude, clinic.location.longitude]
        return (
            <Marker position={position}>
                <Popup maxWidth="500" maxHeight="auto">
                    <HomeClinicCard clinic={clinic} />
                </Popup>
            </Marker>
        )
    })






    return (
        <Col md={6} className="p-0">
            <div className={styles.home__maps}>
                <MapContainer center={currentGeoLocation} zoom={15} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <Marker position={currentGeoLocation}>
                        <Popup>
                            <p>
                                This is your current location
                            </p>
                        </Popup>
                    </Marker> */}
                    {renderMarkers()}
                </MapContainer>
            </div>
        </Col>
    )
}
