
function Navbar() {
    return (
      <nav>
      <img
        id="bg-img"
        src="./src/assets/react.svg"
        />

       <img
        id="logo-img"
        src="./src/assets/ironhackLogo.png"
        />

        <img
        id="nav-img"
        src="./src/assets/nav.png"
        />
    <div>
    <h1>Say hello to</h1>
        <h1>React JS</h1>
        <p>You will how to use</p>
        <p>the most popular frontend library,</p>
        <p>and become a super Ninja developer.</p>
    </div>

    <a href="/">
        <button className="btn">Awesome!</button>
      </a>

      
      </nav>
    
    );
  }
  
  export default Navbar;
  