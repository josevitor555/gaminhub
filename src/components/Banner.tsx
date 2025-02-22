import gamingControllerImg from "../assets/undraw_gaming-controller_qzoc.png";

export function Banner() {
    return (
        <div className="main-banner">
            <div className="headline">
                <h1 className="text-7xl">
                    Unlock Your Ultimate Gaming Experience Today
                </h1>

                <p className="text-3xl">
                    Dive into the world of gaming with our latest news, reviews, and insights. Join our community of passionate gamers and stay ahead of the curve!
                </p>

                <div className="buttons-headline">
                    <button className="button" role="button"> Discord community </button>
                    <button className="button" id="no-background" role="button"> Login Now </button>
                </div>
            </div>

            <div className="image-cover flex items-center justify-center">
                <img className="w-200" src={gamingControllerImg} alt="Image not found" />
            </div>
        </div>
    )
}