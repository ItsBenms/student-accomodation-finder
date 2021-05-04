import React from 'react';

import PropertiesData from './data/data';

import {
    Image,
    Row,
    Col,
    Container
} from 'react-bootstrap';

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';

import {
    Link
} from 'react-router-dom';

export function MapView(props) {
    return (
        <MapContainer center={props.Center} zoom={14} scrollWheelZoom={true} className="mapStyle rounded">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.Center}>
                <Popup>
                    {props.Mark} Property Location 🏠
                    <p className="mapLink"><Link to={`/property/${props.Redirect}`}>View Property</Link></p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export class Properties extends React.Component {
    render() {
        return (
            <>
                {PropertiesData.filter(propertyDetail => propertyDetail.Location === this.props.filterLocation
                    && propertyDetail.Type === this.props.filterType
                    && propertyDetail.Price === this.props.filterPrice
                )
                    .map(propertyDetail =>
                        <div key={propertyDetail.id}>
                            <Container fluid >
                                <Row>
                                    <Col sm={6} className="p-0">
                                        <Image src={propertyDetail.pImage} alt={propertyDetail.AltText} width="90%" className="mb-2 rounded" />
                                        <Link key={propertyDetail.id} to={`/property/${propertyDetail.id}`} className="linkStyle">
                                            <h1 className="PropNameStyle"><strong>Property Name : </strong>{propertyDetail.Name}</h1>
                                        </Link>
                                        <p><strong>Property Type : </strong>{propertyDetail.Type}</p>
                                        <p><strong>Property Price : </strong>{propertyDetail.Price}</p>
                                        <p><strong>Distance : </strong>{propertyDetail.Distance}</p>
                                        <p className="mb-2"><strong>Property Description : </strong>{propertyDetail.Description}</p>
                                    </Col>
                                    <Col sm={6} className="p-0">
                                        <MapView Center={propertyDetail.Geo} Position={propertyDetail.Geo} Mark={propertyDetail.Name} Redirect={propertyDetail.id} />
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    )}
            </>
        )
    }
}
