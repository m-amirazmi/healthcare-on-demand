import React from 'react'
import { Card, CardImg, CardBody } from 'reactstrap'
import placeholder from '../assets/images/front.png'

export const HomeClinicCard = ({ clinic }) => {

    console.log(clinic)

    const renderClinicImage = () => {
        return (
            <CardImg top width="100%" height="200px" src={clinic.image_main} alt="Card image cap" />
        )
    }

    const renderClinicName = () => {
        return (
            <div className='d-flex align-items-center fs-4'>
                <p className=''>{clinic.name}</p>
                <div className='ms-auto d-flex align-items-center text-primary'>
                    <i className="bi bi-star-fill mx-1 fs-6"></i>
                    <p className='fs-6 mx-1'>5.00</p>
                    <p className='fs-6'>(364 clients)</p>
                </div>
            </div>
        )
    }

    const renderRegion = () => {
        return (
            <div className='text-gray'>
                <p>{clinic.location.city}, {clinic.location.state}</p>
            </div>
        )
    }

    const renderSymptomsHandled = () => {

        const symptomsHandled = clinic.symptoms_handled.map((symptom) => <span className='badge rounded-pill text-secondary border border-secondary text-capitalize me-1'>{symptom.name}</span>)

        return (
            <div className='mt-2'>
                <div>
                    <p className="text-gray">Symptoms Handled:</p>
                </div>
                <div>
                    {symptomsHandled}
                </div>
            </div>
        )
    }

    const renderButtons = () => {
        return (
            <div className='d-flex mt-3'>
                <button className='btn btn-outline-primary w-100'>Book Now</button>
                <button className='btn btn-white border-0 w-100'>Locate</button>
            </div>
        )
    }

    return (
        <Card className="shadow-sm mb-4 me-2">
            {/* {renderAvatar()} */}
            {renderClinicImage()}
            <CardBody>
                {renderClinicName()}
                {renderRegion()}
                {renderSymptomsHandled()}
                {renderButtons()}
            </CardBody>
        </Card>
    )
}
