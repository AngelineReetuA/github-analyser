import PropTypes from "prop-types";

export default function Headline({photoURL ,name, bio, followers, emp, link}){
    return(
        <>
         <div className="row mt-3">
            <div className="col-md-12">
              <div className="row">
                <div className="col-auto py-2">
                  <img
                    className="rounded-circle"
                    src={photoURL}
                    style={{ height: "100px", width: "100px" }}
                  />
                </div>
                <div className="col">
                  <div className="row">
                    <b className="fs-3">{name}</b>
                  </div>
                  <div className="row">
                    <div className="fs-6 fst-italic">{bio}</div>
                  </div>
                  <div className="d-flex gap-5">
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-users"></i>
                        <span className="fs-6 fst-italic ms-2">
                          {followers} followers
                        </span>
                      </div>
                    </div>
                    <div className="row pt-2">
                      <div className="d-flex align-items-center">
                        <i className="fa-regular fa-building"></i>
                        <span className="fs-6 fst-italic ms-2">{emp}</span>
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
                          {link}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}

Headline.propTypes = {
    photoURL: PropTypes.string,
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired,
    emp: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
}