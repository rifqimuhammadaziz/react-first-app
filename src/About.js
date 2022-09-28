import { Link, Outlet } from "react-router-dom";

export default function About() {
    return (
    <>
    <h1>About Page</h1>
    <p>Halo, this is about page for us.</p>
    <ul>
        <li><Link to="/about/team">Team</Link></li>
        <li><Link to="/about/team2">Team 2</Link></li>
    </ul>
    <Outlet />
    </>
    );
}