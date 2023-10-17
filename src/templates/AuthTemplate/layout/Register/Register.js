import React from 'react'
// import "./Register.css"
const Register = () => {
    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form action>
                            <h2>Register</h2>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required />
                                <label htmlFor>Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline" />
                                <input type="password" required />
                                <label htmlFor>Password</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required />
                                <label htmlFor>Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="mail-outline" />
                                <input type="email" required />
                                <label htmlFor>Email</label>
                            </div>
                            <div className="forget">
                                <label htmlFor><input type="checkbox" />Remember Me  <a href="#">Forget Password</a></label>
                            </div>
                            <button>Log in</button>
                            <div className="register">
                                <p>Don't have a account <a href="#">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default Register