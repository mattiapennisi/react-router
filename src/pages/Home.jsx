import { Link, NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold">Innovazione Digitale</h1>
                            <p className="fs-5 mt-3">
                                Costruiamo soluzioni digitali innovative che trasformano le aziende.
                                Il nostro team di esperti dà vita alle tue idee con tecnologie all'avanguardia.
                            </p>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <img src="https://picsum.photos/id/1/500/250" className="img-fluid rounded shadow" alt="Team al lavoro" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}