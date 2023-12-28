import React from 'react'

function Home() {
    return (
        <>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="image/s2.jpg" height="200px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/s3.jpg" height="200px" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="image/s4.jpg" height="200px" className="d-block w-100" alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}

export default Home