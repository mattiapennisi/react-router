export default function About() {
    return (
        <>
            <div className="py-5 bg-light">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h2 className="fw-bold">Chi siamo</h2>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm text-center h-100">
                                <img src="https://picsum.photos/id/65/200" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "150px", height: "150px" }} alt="Membro del Team" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="text-primary">Lead Developer</p>
                                    <p className="card-text">Esperto full-stack con oltre 8 anni di esperienza nello sviluppo di applicazioni web scalabili.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm text-center h-100">
                                <img src="https://picsum.photos/id/65/200" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "150px", height: "150px" }} alt="Membro del Team" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="text-primary">UX/UI Designer</p>
                                    <p className="card-text">Designer creativo specializzato nella creazione di interfacce utente intuitive e accessibili.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm text-center h-100">
                                <img src="https://picsum.photos/id/65/200" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "150px", height: "150px" }} alt="Membro del Team" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="text-primary">Backend Engineer</p>
                                    <p className="card-text">Specialista di architetture server e database con focus sull'ottimizzazione delle prestazioni.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="card border-0 shadow-sm text-center h-100">
                                <img src="https://picsum.photos/id/65/200" className="card-img-top rounded-circle mx-auto mt-3" style={{ width: "150px", height: "150px" }} alt="Membro del Team" />
                                <div className="card-body">
                                    <h5 className="card-title">John Doe</h5>
                                    <p className="text-primary">Mobile Developer</p>
                                    <p className="card-text">Specializzato nello sviluppo di app cross-platform con Flutter e React Native.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}