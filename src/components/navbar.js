import '../CSS/navbar.css'
function Navbar() {
    return (
        <header id="head">
            <img src="../logo.png" id="logo" />
            <h1>
                Bharath's Emperors
            </h1>
            <nav id="navbar">
                <ul>
                    <li><a target="_blank" href="https://en.wikipedia.org/wiki/Chanakya">Chanakya(Guru)</a></li>
                    <li><a target="_blank" href="https://en.wikipedia.org/wiki/Chandragupta_Maurya">wikipedia</a></li>
                    <li><a target="_blank" href="https://www.google.com/search?q=chandragupta+maurya+images&tbm=isch&chips=q:chandragupta+maurya+images,g_1:king:QJByTnFKQgE%3D&hl=en&sa=X&ved=2ahUKEwi-zfa8yof7AhVA4nMBHR-cCYgQ4lYoAXoECAEQJg&biw=1380&bih=656">Images</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;




// Local:            http://localhost:3000
//   On Your Network:  http://192.168.26.125:3000