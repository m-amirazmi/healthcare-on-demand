import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap'
import { routes } from '../../utils/routes';
import styles from '../../assets/css/TopNav.module.css'
import { useTranslation } from 'react-i18next';

const lngs = {
    en: { nativeName: 'English' },
    ms: { nativeName: 'Malay' }
};

export const TopNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { i18n } = useTranslation()

    const toggle = () => setIsOpen(!isOpen);

    const renderLinks = () => routes.map((route) => {
        if (!route.isProtected && route.showOnNav) return (
            <NavItem className={styles.nav__item}>
                <Link to={route.path}>{route.name}</Link>
            </NavItem>
        )
    })


    return (
        <div>
            <Navbar color="white" light className="shadow-sm" expand="md">
                <Container className="themed-container" fluid={true}>
                    <NavbarBrand href="/">Healhcare.</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            {renderLinks()}
                            {/* {Object.keys(lngs).map((lng) => (
                                <NavItem className={styles.nav__item}>
                                    <Button key={lng} style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                        {lngs[lng].nativeName}
                                    </Button>
                                </NavItem>
                            ))} */}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}