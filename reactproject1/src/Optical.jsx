import React from "react";

export default function Optical() {
    return (
        <>
            <div className='container2' >
                <div style={{
                    width: "100%",
                    height: "25vh",
                    position: "relative",
                    top: "5vh",
                    display: "flex"
                }}>
                    <div>
                        <img
                            src="https://serosight.net/wp-content/uploads/2024/09/c0802d561d050e64a82a5411edb2f8ec.png"
                            width='300'
                            height='300'
                            style={{ transform: "translateX(8vh) scale(1.5)" }}
                            alt="Optical"
                        />
                    </div>
                    <div style={{ width: "100%" }}>
                        <h1 className='font1' style={{
                            color: "#FFFFFF", transform: "translate(25%, 70%)", fontSize: '4rem', textAlign: 'left'
                        }}>Optical</h1>
                        <svg width="100%" height="6" viewBox="160 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 3H603" stroke="#9BA2FF" strokeWidth="5" strokeLinecap="round"></path>
                        </svg>
                    </div>


                </div>
                <div style={{ height: '75%', transform: " translateX(10%)" }}>
                    <div style={{ transform: "translateY(4vh)", height: "23%", display: "flex" }}>
                        <div style={{ marginLeft: "5%", width: "15%", alignContent: 'center' }}>
                            <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>1</h1>
                        </div>
                        <div style={{ width: "95%", height: 'auto', alignContent: 'center' }}>
                            <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF' }}>Pixel Size</h1>
                            <p className='nomargin' style={{
                                color: '#98A2FF', textAlign: 'left', fontSize: "3vh"
                            }}>sample 7 &#956;m or 10 &#956;m</p>
                        </div>
                    </div>
                    <div style={{ transform: "translateY(2vh)", height: "23%", display: "flex" }}>
                        <div style={{ marginLeft: "5%", width: "15%", alignContent: 'center' }}>
                            <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>2</h1>
                        </div>
                        <div style={{ width: "95%", height: 'auto', alignContent: 'center' }}>
                            <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF' }}>Maximum Field of View</h1>
                            <p className='nomargin' style={{
                                color: '#98A2FF', textAlign: 'left', fontSize: "3vh"
                            }}>20 mm x 20 mm (single image)</p>
                        </div>
                    </div>
                    <div style={{ transform: "translateY(2vh)", height: "23%", display: "flex" }}>
                        <div style={{ marginLeft: "5%", width: "15%", alignContent: 'center' }}>
                            <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>3</h1>
                        </div>
                        <div style={{ width: "95%", height: 'auto', alignContent: 'center' }}>
                            <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF' }}>Maximum Scan Area</h1>
                            <p className='nomargin' style={{
                                color: '#98A2FF', textAlign: 'left', fontSize: "3vh"
                            }}>20 mm x 80 mm (with image stitching)</p>
                        </div>
                    </div>
                    <div style={{ transform: "translateY(2vh)", height: "23%", display: "flex" }}>
                        <div style={{ marginLeft: "5%", width: "15%", alignContent: 'center' }}>
                            <h1 className="nomargin" style={{ fontSize: "6rem", justifyContent: 'center', color: '#98A2FF' }}>4</h1>
                        </div>
                        <div style={{ width: "95%", height: 'auto', alignContent: 'center' }}>
                            <h1 className='nomargin' style={{ fontSize: '2rem', textAlign: 'left', color: '#FFFFFF' }}>Typical Imaging Speed</h1>
                            <p className='nomargin' style={{
                                color: '#98A2FF', textAlign: 'left', fontSize: "3vh"
                            }}>10 s per slide per channel</p>
                        </div>
                    </div>
                </div>

            </div>



        </>
    );
}
