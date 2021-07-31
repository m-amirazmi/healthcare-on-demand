import { AppointmentDetail } from "../pages/AppointmentDetail";
import { Appointments } from "../pages/Appointments";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";
import { Shops } from "../pages/Shops";

export const routes = [

    // GENERAL PAGES
    { path: '/', name: 'Home', component: Home, showOnNav: true, isProtected: false },
    { path: '/shops', name: 'Shops', component: Shops, showOnNav: false, isProtected: false },
    { path: '/login', name: 'Login', component: Login, showOnNav: true, isProtected: false, restricted: true },
    { path: '/register', name: 'Register', component: Register, showOnNav: false, isProtected: false, restricted: true },

    // CUSTOMER PAGES
    { path: '/customer/dashboard', name: 'Dashboard', component: Dashboard, showOnNav: true, isProtected: true, role: ['customer'] },
    { path: '/customer/profile', name: 'Profile', component: Profile, showOnNav: true, isProtected: true, role: ['customer'] },
    { path: '/customer/appointment-detail', name: 'Appointment Detail', component: AppointmentDetail, showOnNav: false, isProtected: true, role: ['customer'] },

    // SHOP PAGES
    { path: '/provider/dashboard', name: 'Dashboard', component: Dashboard, showOnNav: true, isProtected: true, role: ['provider'] },
    { path: '/provider/profile', name: 'Profile', component: Profile, showOnNav: true, isProtected: true, role: ['provider'] },
    { path: '/provider/appointments', name: 'Appointments', component: Appointments, showOnNav: true, isProtected: true, role: ['provider'] },
    { path: '/provider/appointment-detail', name: 'Appointment Detail', component: AppointmentDetail, showOnNav: false, isProtected: true, role: ['provider'] },
]