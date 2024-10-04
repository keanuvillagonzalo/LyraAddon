export default function Mechanical() {
    return (
        <>
            <div className='container2'>
                <div style={{
                    width: "100%",
                    height: "25vh",
                    position: "relative",
                    top: "5vh",
                    display: "flex"
                }}>
                    <div>
                        <img src="https://serosight.net/wp-content/uploads/2024/09/image-24.png" width='200' height='200' style={{ width: 'auto', transform: "translateX(8vh)" }}>

                        </img>

                    </div>
                    <div style={{ width: "100%" }}>
                        <h1 className='font1' style={{
                            color: "#FFFFFF", transform: "translate(10%, 70%)", fontSize: '4rem'
                        }}>Mechanical</h1>
                        <svg width="100%" height="6" viewBox="160 0 005 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H603" stroke="#9BA2FF" stroke-width="5" stroke-linecap="round"></path></svg>

                    </div>

                </div>
                <div style={{ width: "100%", height: '60vh', transform: " translateY(5vh)" }}>
                    <div style={{ width: '50%', height: '50vh', transform: "translateX(35%)" }}>
                        <div>
                            <div style={{ height: '20vh', display: 'flex' }}>
                                <div style={{ width: "25%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1 className="nomargin" style={{ fontSize: "7rem", justifyContent: 'center', color: '#98A2FF' }}>1</h1>
                                </div>
                                <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                                    <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF', transform: "translateY(1.5vh)" }}>Device Footprint</h1>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left'
                                    }}>ca. 190 mm x 235 mm</p>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left'
                                    }}>(7.5&#x0022; x 9.3&#x0022;)</p>
                                </div>
                            </div>
                            <div style={{ height: '20vh', display: 'flex' }}>
                                <div style={{ width: "25%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1 className="nomargin" style={{ fontSize: "7rem", justifyContent: 'center', color: '#98A2FF' }}>2</h1>
                                </div>
                                <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                                    <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF', transform: "translateY(1.5vh)" }}>Device Weight</h1>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left'
                                    }}>ca. 4.6 kg (10 lbs)</p>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left'
                                    }}>depends on configuration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
