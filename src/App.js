import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Table from "./Table";
import Navigation from "./layout/Navigation";
import ArtistListComponent from './components/artists/artists-list.component'
import ArtistDetailComponent from "./components/artists/artist-detail.component";
import ContactListComponent from "./components/contacts/contact-list.component";
import LoginComponent from "./components/login/login.component"
import NoLink from './components/twowaybinding/nolink.component'
import WithLink from "./components/twowaybinding/withlink.component";
import TicketListComponent from "./components/tickets/ticket-list.component";

import { Component } from "react";
import AuthenticateService from "./services/authenticate.service";
import OrderComponent from "./components/orders/orders-list.component";
const users = [
    {
        email: "gowtham@outlook.com",
        firstname: "gowtham",
        lastname: "ss",
        password: "outlook010"
    },
    {
        email: "ss@ss.com",
        firstname: "ss",
        lastname: "ss",
        password: "ss"
    },
    {
        email: "gow@gow.com",
        firstname: "gow",
        lastname: "gow",
        password: "gow"
    },
    {
        email: "thanhhh@wow.com",
        firstname: "Ho Huu",
        lastname: "Thanh",
        password: "wow"
    }
];

// const App = () => <Table data={users} />;
// const App = () => <ArtistListComponent data={users} />;

//Two-way bidning components
// const App = () => {
//     return (
//         <div>
//             <NoLink></NoLink><WithLink></WithLink>
//         </div>)
// }

const getIsLoggedIn = () => {
    return sessionStorage.token && sessionStorage.token != null;
}

const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
        if (getIsLoggedIn()) {
            next();
        }
        next.redirect('/login');
    } else {
        next();
    }
};
//Routing
// const App = () => {
//     return (
//         <><BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Navigation />}>
//                     <Route path="artists" element={<ArtistListComponent />}  render = {() => (auth ?  (<ArtistListComponent />) : (<Redirect to="/login" />))}>
//                     </Route>
//                     <Route path="artists/details/:_id/:_year_born" element={<ArtistDetailComponent />} />
//                     <Route path="contacts" element={<ContactListComponent />} />
//                     <Route path="tickets" element={<TicketListComponent />}></Route>
//                 </Route>
//             </Routes>
//         </BrowserRouter></>
//     );

// }
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = { auth: false }
        this.authService = new AuthenticateService();
    }
    checkAuthenticated = () => {
        var authenticated = (sessionStorage.getItem("token") != null && sessionStorage.getItem("token") !== "");
        
        return authenticated;
    }
    componentDidMount() {

    }

    componentWillUnmount() {
        sessionStorage.removeItem("token")
    }
    render() {
        return <><BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation />}>
                    <Route path="login" element={<LoginComponent />} />
                    <Route path="artists" element={this.checkAuthenticated() ? <ArtistListComponent /> : <LoginComponent redirect={"artists"}/>} />
                    <Route path="contacts" element={this.checkAuthenticated() ? <ContactListComponent /> : <LoginComponent redirect={"contacts"} />} />
                    <Route path="tickets" element={this.checkAuthenticated() ? <TicketListComponent /> : <LoginComponent redirect={"tickets"} />}></Route>
                    <Route path="orders" element={this.checkAuthenticated() ? <OrderComponent/> : <LoginComponent redirect={"orders"} />}></Route>
                </Route>
            </Routes>
        </BrowserRouter></>

    }
}
