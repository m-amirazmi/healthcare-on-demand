import { HomeClinicCard } from './HomeClinicCard'
import { Col, Row } from 'reactstrap'

export const HomeClinicList = ({ clinics }) => {

    const renderClinic = () => clinics.map((clinic) => (
        <Col md={6}>
            <HomeClinicCard clinic={clinic} />
        </Col>
    ))

    return (
        <div>
            <Row>
                {renderClinic()}
            </Row>
        </div>
    )
}
