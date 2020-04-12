import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { Walkthrough } from "./pages/Walkthrough";
import { Dashboard } from "./pages/Dashboard";

export const routeObject = [
    {
        slug: '/',
        name: 'homePage',
        pageData: {
            forceTitle: "ZenDen",
            description: "Breathe easy with the help of guided mindful sessions, to balance your living space and create a purposeful place to call your own."
        },
        Component: Home,
        exact: true,
    }, {
        slug: '/login',
        name: 'homePage',
        pageData: {
            title: "Login",
            description: "Login page."
        },
        Component: Login,
        exact: true,
    }, {
        slug: '/sign-up',
        name: 'homePage',
        pageData: {
            title: "SignUp",
            description: "SignUp page."
        },
        Component: SignUp,
        exact: true,
    }, {
        slug: '/getting-started',
        name: 'Getting Started',
        pageData: {
            title: "Getting Started",
            description: "SignUp page."
        },
        Component: Walkthrough,
        exact: true,
    }, {
        slug: '/dashboard',
        name: 'Dashboard',
        pageData: {
            title: "Dashboard",
            description: "Dashboard page."
        },
        Component: Dashboard,
        exact: true,
    },
];