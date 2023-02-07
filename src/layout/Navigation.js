import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <ul>
                    <li key={'home'}>
                        <Link to="/">Home</Link>
                    </li>
                    <li key={'artists'}>
                        <Link to="/artists">Artist</Link>
                    </li>
                    <li key={'contacts'}>
                        <Link to="/contacts">Contact</Link>
                    </li>
                    <li key={'tickets'}>
                        <Link to="/tickets">Ticket</Link>
                    </li>
                    <li key={'orders'}>
                        <Link to="/orders">Orders</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Navigation;