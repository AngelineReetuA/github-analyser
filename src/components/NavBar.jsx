export default function NavBar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0"
        style={{
          width: "4.5rem",
          backgroundColor: "#d9edf8",
          height: "92vh",
        }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item" style={{ backgroundColor: "#7eb8d9" }}>
            <a
              href="/"
              className="d-block p-3 link-dark text-center text-decoration-none"
            >
              <i className="fa-solid fa-eye fa-lg"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/"
              className="d-block p-3 link-dark text-center text-decoration-none"
            >
              <i className="fa-solid fa-code fa-lg"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/"
              className="d-block p-3 link-dark text-center text-decoration-none"
            >
              <i className="fa-regular fa-user fa-lg"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
