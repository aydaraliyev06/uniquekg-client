import Admin from "../pages/Admin"
import Auth from "../pages/Auth"
import Basket from "../pages/Basket"
import Contacts from "../pages/Contacts"
import DevicePaeg from "../pages/DevicePaeg"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import { ADMIN_ROUTE, BASKET_ROUTE, CONTACTS_ROUTE, DEVICE_ROUTE, ERROR_ROUTE, HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePaeg
    },
    {
        path: ERROR_ROUTE,
        Component: Shop
    }
]