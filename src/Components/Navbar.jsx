import React from "react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid w-100 justify-content-center gap-5">
                <a className="navbar-brand rounded" style={{backgroundColor:"orange", padding:"0.25rem 0.55rem", fontWeight:"700"}} href="/">ImDb</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <form className="d-flex" role="search">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle rounded-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            All
                        </button>
                        <ul className="dropdown-menu bg-black">
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">All</button></li>
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">Titles</button></li>
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">TV Episodes</button></li>
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">Celebs</button></li>
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">Companies</button></li>
                            <li><button className="dropdown-item" style={{color:"orange", padding:"0.75rem"}} type="button">Keywords</button></li>
                        </ul>
                    </div>
                    <input className="form-control me-2 w-100 rounded-0" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                <button type="button" className="btn" style={{color:"white", fontWeight:"700"}}>WatchList</button>
                <button type="button" className="btn" style={{color:"white", fontWeight:"700"}}>Sign In</button>
            </div>
        </nav>
    )
}

export default Nav;