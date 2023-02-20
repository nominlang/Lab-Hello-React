
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
    <h1>Say hello to <br /> React JS</h1>
        <p class='headerText'>You will learn how to use <br /> the most popular frontend library,
        <br /> and become a super Ninja developer.</p>
    </div>


    <a href="/">
        <button className="btn">Awesome!</button>
      </a>

      
      </nav>
    
    );
  }
  
  export default Navbar;
  