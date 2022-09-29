import { useEffect } from "react"

export default function Home() {

    useEffect(function() {
        document.title = 'Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Welcome to My Web</h1>
            <p className="section-description">Halo semua, ini adalah web untuk sistem publikasi.</p>
        </section>
    )
}