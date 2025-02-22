export function Header() {
    return (
        <header>
            <div className="logo">
                <h2 className="text-3xl font-semibold"> GamersHub </h2>
            </div>

            <div className="nav-links">
                <ul className="flex">
                    <li> <a className="act-link" href="#"> Game News </a> </li>
                    <li> <a href="#"> Latest Reviews </a> </li>
                    <li> <a href="#"> Top Picks </a> </li>
                    <li> <a href="#"> More Games </a> </li>
                </ul>
            </div>

            <div className="buttons">
                <button className="button" role="button"> Join </button>
                <button className="button" id="no-background" role="button"> Explorer </button>
            </div>
        </header>
    )
}