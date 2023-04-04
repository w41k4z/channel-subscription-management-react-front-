import '../assets/css/HomePage.css';

const assets = require.context('../assets/img/background', true);

const images = {};
assets.keys().forEach((filename) => {
    const image = assets(filename);
    const name = filename.replace('./', '');
    images[name] = image;
});

const HomePage = () => {
    return (
        <div className="homePage text-white">
            <nav className="navbar navbar-expand-md navbar-dark bg-transparent container px-5" aria-label="Fourth navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand brand-logo" href="./"><i className="fas fa-moon"></i>anal-Store</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav ms-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href=".">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href=".">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-4 col-xxl-8 px-4 py-5">

                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mt-lg-1">
                    <div className="col-10 col-sm-8 col-lg-6 m-auto channel-background">

                        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="bd-placeholder-img" width="100%" height="100%" src={images['bg1.png']} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                </div>
                                <div class="carousel-item">
                                    <img class="bd-placeholder-img" width="100%" height="100%" src={images['bg2.jpg']} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                </div>
                                <div class="carousel-item">
                                    <img class="bd-placeholder-img" width="100%" height="100%" src={images['bg3.jpg']} aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Welcome</h1>
                        <p className="lead">Dive into the world of imagination, fiction and mistery. Catch up news and follow your favorite team on the most famous sport channel</p>
                        <div className="d-md-flex justify-content-md-start">
                            <button className="me-md-2 explore-button">Explore <i className='far fa-arrow-alt-circle-right'></i></button>
                        </div>
                    </div>

                </div>

            </div>

            <div className="container mt-3">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="." className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                            <i className='fas fa-moon'></i>
                        </a>
                        <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-body-secondary" href="."><i className="fab fa-twitter" width="24" height="24"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="."><i className="fab fa-instagram"></i></a></li>
                        <li className="ms-3"><a className="text-body-secondary" href="."><i className="fab fa-facebook"></i></a></li>
                    </ul>
                </footer>
            </div>
        </div>
    );
}

export default HomePage;