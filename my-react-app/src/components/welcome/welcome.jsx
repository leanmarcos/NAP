import '../welcome/welcome.css';

export function Welcome() {
    return (
        <>
            <div className="welcome">
                <h2 className='welcome-h2'>Welcome to NAP!</h2>
                <img src="/welcome_img.png" alt="" />
                <div className="log">
                    <button className="btn-welcome">Log in</button>
                    <button className="btn-welcome">Sign up</button>
                    <a href="" className='guest-link'>Continue as guest</a>
                </div>

            </div>
        </>
    );
}