function Navbar(props) {
  return (
    <div>
      <h1>{props.navHeading}</h1>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">PROFIL</a>
        </li>

        <li>
          <a href="#">{props.navText}</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
