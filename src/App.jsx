import Doughnut from "./components/Doughnut";
import StackedBarChart from "./components/StackedBar";

function App() {
  return (
    <>
      <nav className="navbar bg-dark">
        <a className="navbar-brand text-light px-3">quickGit</a>
      </nav>
      <div className="d-flex">
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
        <div className="container-fluid">
          <div className="row mt-3">
            <div className="col-md-12">
              <div className="row">
                <div className="col-auto py-2">
                  <img
                    className="rounded-circle"
                    src="https://thumbs.dreamstime.com/b/girl-12694188.jpg"
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <b className="fs-3">Jane Smith</b>
                  </div>
                  <div className="row">
                    <div className="fs-6 fst-italic">headline blah blah</div>
                  </div>
                  <div className="d-flex gap-5">
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-users"></i>
                        <span className="fs-6 fst-italic ms-2">
                          8 followers
                        </span>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-building"></i>
                        <span className="fs-6 fst-italic ms-2">IT Company</span>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-link"></i>
                        <a
                          className="fs-6 fst-italic ms-2"
                          href="https://www.google.com"
                          target="_blank"
                        >
                          go to link
                        </a>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-link"></i>
                        <a
                          className="fs-6 fst-italic ms-2"
                          href="https://www.google.com"
                          target="_blank"
                        >
                          go to link
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row d-flex justify-content-center">
            <div className="d-flex">
              <div className="col">
                <div className="d-flex px-1">
                  <Doughnut />
                </div>
              </div>
              <div className="vr"></div>
              <div className="col d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <div className="fw-bold" style={{ fontSize: "60px" }}>
                    300+
                  </div>
                </div>
              </div>
              <div className="vr"></div>
              <div className="col d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <div className="fw-bold" style={{ fontSize: "60px" }}>
                    80+
                  </div>
                </div>
              </div>
              <div className="vr"></div>
              <div className="col d-flex justify-content-center align-items-center">
                <div className="text-center">
                  <div className="fw-bold" style={{ fontSize: "60px" }}>
                    40+
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="d-flex text-muted pt-2"
              style={{ textAlign: "center" }}
            >
              <div className="col">ACTIVITY</div>
              <div className="col">LOC</div>
              <div className="col">COMMITS</div>
              <div className="col">PULL REQUESTS</div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-2">
              <StackedBarChart />
            </div>
            <div className="col-md-6">
              <div className="card border-dark p-1 px-2">
                <div className="card-title fs-3 fw-bold">Highlights</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <div className="card border-dark p-1">
                        <div className="card-title">Github1</div>
                        <div className="card-body">
                          Hi this is supposed to be a famous github repo with a
                          lot of stars and commits
                        </div>
                        <div className="text-muted">
                          small icons representing fame
                        </div>
                        <div className="card-footer">
                          <a href="https://www.google.com" target="_blank">
                            Go to the repo
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card border-dark p-1">
                        <div className="card-title">Github2</div>
                        <div className="card-body">
                          Hi this is supposed to be a famous github repo with a
                          lot of stars and commits
                        </div>
                        <div className="text-muted">
                          small icons representing fame
                        </div>
                        <div className="card-footer">
                          <a href="https://www.google.com" target="_blank">
                            Go to the repo
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <h3>Releases</h3>
              <a href="https://www.google.com" className="fs-5" target="_blank">
                www.google.com
              </a>
              <br />
              <a href="https://www.google.com" className="fs-5" target="_blank">
                www.google.com
              </a>
              <br />
              <a href="https://www.google.com" className="fs-5" target="_blank">
                www.google.com
              </a>
              <br />
              <a href="https://www.google.com" className="fs-5" target="_blank">
                www.google.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
