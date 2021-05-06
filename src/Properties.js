import React from 'react';

// Local JSON data import
import PropertiesData from './data/data';

// React-Bootstrap Imports
import {
    Image,
    Row,
    Col,
    Container
} from 'react-bootstrap';

// React-Leaflet Imports
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from 'react-leaflet';

// React Router imports
import {
    Link
} from 'react-router-dom';

/*
MapView component
Uses Leaflet maps to display mapping information
Takes in props from Properties component to provide geo coordiates for map markers
 */
export function MapView(props) {
    return (
        /* Center prop passed in from properties component to display map over a certain area */
        <MapContainer center={props.Center} zoom={14} scrollWheelZoom={true} className="mapStyle rounded">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={props.Center}>
                {/* Places a marker based on center location passed in via props */}
                <Popup>
                    {props.Mark} Property Location 🏠
                    {/* props.Redirect is passed into the Link to redirct to a page based on property id */}
                    <p className="mapLink"><Link to={`/property/${props.Redirect}`}>View Property</Link></p>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

/*
Properties component
Returns data from local JSON file to display properties
 */
export class Properties extends React.Component {
    render() {
        return (
            <>  {/* Filters data based on the inputs from the Filtering component */}
                {PropertiesData.filter(propertyDetail => propertyDetail.Location === this.props.filterLocation
                    && propertyDetail.Type === this.props.filterType
                    && propertyDetail.Price === this.props.filterPrice
                )
                    /* Outputs the filtered data */
                    .map(propertyDetail =>
                        <div key={propertyDetail.id}>
                            <Container fluid >
                                <Row>
                                    <Col sm={6} className="p-0">
                                        {/* Access each value to output */}
                                        <Image src={propertyDetail.pImage} alt={propertyDetail.AltText} className="propImageStyle mb-2 rounded" /> {/* Alt text via local JSON */}
                                        <Link key={propertyDetail.id} to={`/property/${propertyDetail.id}`} className="linkStyle">
                                            <h2 className="PropNameStyle"><strong>Property Name : </strong>{propertyDetail.Name}</h2>
                                        </Link>
                                        <p><strong>Property Type : </strong>{propertyDetail.Type}</p>
                                        <p><strong>Property Price : </strong>{propertyDetail.Price}</p>
                                        <p><strong>Distance : </strong>{propertyDetail.Distance}</p>
                                        <p className="mb-2"><strong>Property Description : </strong>{propertyDetail.Description}</p>
                                    </Col>
                                    <Col sm={6} className="p-0">
                                        {/* Pass values as props to MapView Component */}
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
