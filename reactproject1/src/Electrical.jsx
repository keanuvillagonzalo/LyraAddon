import React from "react"


export default function Electrical() {
    return (
        <div className='container2' style={{ display: "grid" }}>
            <div style={{
                width: "100%",
                height: "25vh",
                position: "relative",
                top: "5vh",
                display: "flex"
            }}>
                <div>
                    <img src="https://serosight.net/wp-content/uploads/2024/08/image-21.png" width='200' height='200' style={{ width: 'auto', transform: "translateX(8vh)" }}>

                    </img>

                </div>
                <div style={{ width: "100%" }}>
                    <h1 className='font1' style={{
                        color: "#FFFFFF", transform: "translate(10%, 70%)", fontSize: '4rem'
                    }}>Electrical</h1>
                    <svg width="100%" height="6" viewBox="120 0 005 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H603" stroke="#9BA2FF" stroke-width="5" stroke-linecap="round"></path></svg>

                </div>

            </div>
            <div style={{ width: "100%", height: '60vh', transform: " translateY(5vh)" }}>
                <div>
                    <div style={{ display: 'flex', width: "85%", height: '100%', margin: '0vh auto', transform: 'translateY(5vh)' }}>
                        <div style={{ width: '50%', height: '50vh' }}>
                            <div>
                                <div style={{ height: '20vh', display: 'flex' }}>
                                    <div style={{ width: "25%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>1</h1>
                                    </div>
                                    <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                                        <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF', transform: "translateY(1.5vh)" }}>Power<br />Consumption</h1>
                                        <p className='nomargin' style={{
                                            color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left'
                                        }}>(imager only)</p>
                                    </div>
                                </div>
                                <div style={{ width: '100%', height: "30vh" }}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-start', height: '8vh', alignItems: 'center', transform: 'translateX(4vh)' }}>
                                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                                            <rect width="33" height="31" fill="url(#pattern0_2051_19)" />
                                            <defs>
                                                <pattern id="pattern0_2051_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_2051_19" transform="matrix(0.00978535 0 0 0.0104167 -0.00394571 0)" />
                                                </pattern>
                                                <image id="image0_2051_19" width="103" height="96" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                        </svg>
                                        &nbsp;
                                        &nbsp;
                                        <p className="nomargin" style={{ fontSize: "3vh", color: '#FFFFFF' }}>Standby &lt;1 W</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: 'flex-start', height: '8vh', alignItems: 'center', transform: 'translateX(4vh)' }}>
                                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                                            <rect width="33" height="31" fill="url(#pattern0_2051_19)" />
                                            <defs>
                                                <pattern id="pattern0_2051_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_2051_19" transform="matrix(0.00978535 0 0 0.0104167 -0.00394571 0)" />
                                                </pattern>
                                                <image id="image0_2051_19" width="103" height="96" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                        </svg>
                                        &nbsp;
                                        &nbsp;
                                        <p className="nomargin" style={{ fontSize: "3vh", color: '#FFFFFF' }}>Idle ca. 5 W</p>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: 'flex-start', height: '8vh', alignItems: 'center', transform: 'translateX(4vh)' }}>
                                        <svg width="33" height="31" viewBox="0 0 33 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
                                            <rect width="33" height="31" fill="url(#pattern0_2051_19)" />
                                            <defs>
                                                <pattern id="pattern0_2051_19" patternContentUnits="objectBoundingBox" width="1" height="1">
                                                    <use xlinkHref="#image0_2051_19" transform="matrix(0.00978535 0 0 0.0104167 -0.00394571 0)" />
                                                </pattern>
                                                <image id="image0_2051_19" width="103" height="96" xlinkHref="data:image/png;base64,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" />
                                            </defs>
                                        </svg>
                                        &nbsp;
                                        &nbsp;
                                        <p className="nomargin" style={{ fontSize: "3vh", color: '#FFFFFF' }}>Peak max. 36 W</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style={{ width: '50%', height: '50vh', display: "grid" }} >
                            <div style={{ height: '20vh', display: 'flex' }}>
                                <div style={{ width: "25%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>2</h1>
                                </div>
                                <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                                    <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF', transform: "translateY(1.5vh)" }}>Data Interface</h1>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left', fontSize: "3vh"
                                    }}>USB Type Gen 3.2</p>
                                </div>
                            </div>
                            <div style={{ height: '20vh', display: 'flex' }}>
                                <div style={{ width: "25%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>3</h1>
                                </div>
                                <div style={{ alignContent: 'center', justifyContent: 'center' }}>
                                    <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF', transform: "translateY(1.5vh)" }}>Power Supply</h1>
                                    <p className='nomargin' style={{
                                        color: '#98A2FF', transform: 'translateY(1.5vh)', textAlign: 'left', fontSize: "3vh"
                                    }}>12 VDC, 3 A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
