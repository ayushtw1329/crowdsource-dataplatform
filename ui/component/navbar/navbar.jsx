export function Navbar() {
  return (
    <div>
      <div className="d-flex align-items-center">
        <a className="logo-text text-dark" href="/">
          <h2 class="mb-0">
            <img
              src="../img/BoloIndiaLogo.png"
              alt="Bolo India"
              width="64px"
              height="54px"
            />
          </h2>
        </a>
        <div className="version-beta">Beta</div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item p-2 dropdown" id="locale_language_dropdown">
            <div
              href="https://inference.vakyansh.in/"
              className="nav-link text-dark font-weight-bold dropdown-toggle cursor-pointer"
              id="localeDropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {"Language"}
            </div>
            <div
              id="localisation_dropdown"
              className="dropdown-menu"
              aria-labelledby="localeDropdownMenuButton"
            >
              <a id="english" className="dropdown-item" href="#" locale="en">
                English
              </a>
            </div>
          </li>
          <li className="nav-item p-2 dropdown d-none">
            <div
              href="https://inference.vakyansh.in/"
              className="nav-link text-dark font-weight-bold dropdown-toggle cursor-pointer"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {"Speech Recognition Models"}
            </div>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/indian-english"
              >
                English (IN)
              </a>
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/gujarati"
              >
                Gujarati
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/hindi"
              >
                Hindi
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/kannada"
              >
                Kannada
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/kannada-lm"
              >
                Kannada (With LM)
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/odia"
              >
                Odia
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/tamil"
              >
                Tamil
              </a>{" "}
              <a
                className="dropdown-item"
                href="https://inference.vakyansh.in/telugu"
              >
                Telugu
              </a>
            </div>
          </li>
          <li className="nav-item p-2">
            <a
              href="./about-us.html"
              className="nav-link text-dark font-weight-bold"
            >
              {"About Us"}
            </a>
          </li>
          <li className="nav-item p-2">
            <a
              className="nav-link text-dark font-weight-bold d-none"
              id="nav-user"
            >
              <span className="material-icons align-middle mx-1">
                account_circle
              </span>{" "}
              <span id="nav-username"></span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
