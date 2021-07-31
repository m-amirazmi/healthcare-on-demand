import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MainLayout } from '../layouts/MainLayout'
import { HomeMaps } from '../components/HomeMaps'
import { HomeClinicList } from '../components/HomeClinicList'
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import styles from '../assets/css/Home.module.css'
import { api } from '../utils/apis'

export const Home = () => {

    const [clinics, setClinics] = useState()
    const [symptoms, setSymptoms] = useState()
    const [selectedSymptoms, setSelectedSymptoms] = useState([])
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        fetchSymptoms()
        fetchClinics()
    }, [])

    const fetchClinics = async () => {

        setLoading(1)

        const url = api.clinics
        const { data: fetchedClinics } = await axios.get(url)

        const clinicList = []
        for (const clinicKey in fetchedClinics) {
            const eachClinic = { ...fetchedClinics[clinicKey] }

            const urlLocation = api.locations + eachClinic.location
            const { data: fetchedLocation } = await axios.get(urlLocation)

            const serviceList = []
            for (const serviceKey in eachClinic.services) {
                const urlService = api.services + eachClinic.services[serviceKey]
                const { data: fetchedService } = await axios.get(urlService)
                serviceList.push(fetchedService)
            }

            const symptomHandledList = []
            for (const symptomHandleKey in eachClinic.symptoms_handled) {
                const urlSymptom = api.symptoms + eachClinic.symptoms_handled[symptomHandleKey]
                const { data: fetchedSymptom } = await axios.get(urlSymptom)
                symptomHandledList.push(fetchedSymptom)
            }

            eachClinic.symptoms_handled = symptomHandledList
            eachClinic.services = serviceList
            eachClinic.location = fetchedLocation

            clinicList.push(eachClinic)
        }
        setClinics(clinicList)
        setLoading(2)
    }

    const fetchSymptoms = async () => {
        const url = api.symptoms

        const { data: fetchedSymptoms } = await axios.get(url)

        setSymptoms(fetchedSymptoms)
    }

    const selectSymptoms = (id) => {

        const findExisting = selectedSymptoms.find((symptom) => symptom.id === id)
        if (!!findExisting) {
            const removeSymptom = selectedSymptoms.filter((symptom) => symptom.id !== id)
            return setSelectedSymptoms(removeSymptom)
        }

        const filterSymptom = symptoms.filter((symptom) => symptom.id === id)
        setSelectedSymptoms([...selectedSymptoms, ...filterSymptom])
    }

    const renderSearch = () => {
        return (
            <Form className="mb-3">
                <FormGroup>
                    <Input type="text" name="search" id="search" placeholder="Search clinics by name, phone number or symptoms handled..." />
                </FormGroup>
            </Form>
        )
    }

    const renderTags = () => {
        return (
            <div className="mb-3">
                <div className="mb-2">
                    <h6>
                        Filter by Tags
                    </h6>
                </div>
                <div>
                    <Button outline className="rounded-pill me-2" color="dark" style={{ fontSize: "0.8rem" }}>Open 24 Hours</Button>
                    <Button outline className="rounded-pill me-2" color="dark" style={{ fontSize: "0.8rem" }}>Specialize for Bones</Button>
                    <Button outline className="rounded-pill me-2" color="dark" style={{ fontSize: "0.8rem" }}>Only for Kilang</Button>
                </div>
            </div>
        )
    }

    const renderFilterSymptoms = () => {

        const symptomsList = symptoms.map((symptom) => {
            const selectedButton = !selectedSymptoms.find((sym) => sym.id === symptom.id)
            return <Button outline={selectedButton} className="rounded-pill me-2" color="primary" onClick={() => selectSymptoms(symptom.id)}>{symptom.name}</Button>
        })

        return (
            <div className="mb-3">
                <div className="mb-2">
                    <h6>
                        Filter by Symptoms
                    </h6>
                </div>
                <div>
                    {symptomsList}
                </div>
            </div>
        )
    }

    const renderClinicList = () => {
        return (
            <Col md={6} className="p-0">
                <div className="m-0 p-0">
                    <div className={styles.home__filter}>

                        {renderSearch()}
                        {renderFilterSymptoms()}
                        {renderTags()}
                    </div>
                    <div className={styles.home__list}>

                        <HomeClinicList clinics={clinics} selectSymptoms={selectedSymptoms} />
                    </div>
                </div>
            </Col>
        )
    }

    const renderContent = () => {
        if (loading === 1) return (
            <h1>Loading.....</h1>
        )

        if (loading === 2) return (
            <Row>
                {renderClinicList()}
                <HomeMaps clinics={clinics} />
            </Row>
        )
    }

    return (
        <MainLayout>
            <Container className="themed-container" fluid={true}>
                {renderContent()}
            </Container>
        </MainLayout>
    )
}
