import { useEffect } from "react";

export default function Contact() {
    useEffect(function() {
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact Page</h1>
            <p className="section-description">Ini adalah halaman untuk Contact.</p>
        </section>
    );
}