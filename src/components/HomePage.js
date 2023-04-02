import '../assets/css/HomePage.css';
import bg from '../assets/img/bg.png';

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
                                <a className="nav-link" aria-current="page" href="#">About us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log In</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            
            <div className="container mt-5 col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mt-lg-1">
                    <div className="col-10 col-sm-8 col-lg-6 m-auto">
                        <img src={bg} className="channel-background d-block mx-lg-auto img-fluid rounded" alt="Background Themes" width="700" height="500" loading="lazy" />
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
        </div>
    );
}

export default HomePage;