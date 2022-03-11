import React from 'react'

function Footer() {
    return (
        <>
            <footer className="home">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <a ><img src="../asset/images/logo.png" alt="Indx" title="Indx" /></a>
                            <p>COPYRIGHT &copy; <script>document.write(/\d{4}/.exec(Date())[0])</script> DESIGN BY RXCE</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer