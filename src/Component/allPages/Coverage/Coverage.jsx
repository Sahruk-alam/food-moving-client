import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563]
    const serviceCenters = useLoaderData();
    console.log(serviceCenters);
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <h3 className="text-4xl font-semibold">We are available 64 districts</h3>
        <div>

        </div>

        <div className='w-full   h-[800px] my-10'>
        <MapContainer center={position}
         zoom={8} 
         scrollWheelZoom={false}
         className='w-full h-full rounded-md'
         >
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {
            serviceCenters.map((center, index) => 
    <Marker position={[center.latitude, center.longitude]} key={index}>
      <Popup>
       <strong>{center.district}</strong> <br /> service area : {center.covered_area.join(', ')}
      </Popup>
    </Marker>
            )
        }

        </MapContainer> 
        </div>

        </div>
    );
};
export default Coverage;