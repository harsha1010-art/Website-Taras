function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-blue ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Med<span>iu</span>m</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav ms-auto">
                            <a className="nav-link1" aria-current="page" href="#about-us" >About</a>
                            <a className="nav-link2" href="#service">Services</a>
                            <a className="nav-link3" href="#project">Projects</a>
                            <a className="nav-link4" href="#team">Team</a>
                            <a className="nav-link5" href="#contact">Contact Us</a>
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}
export default Navbar