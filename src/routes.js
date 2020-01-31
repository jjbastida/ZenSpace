import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";

export const routeObject = [
    {
        slug: '/',
        name: 'homePage',
        pageData: {
            title: "Home",
            description: "The homepage of this site."
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
    },

];