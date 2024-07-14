import PropTypes from "prop-types";

export default function GithubCard({
  repoName,
  repoDesc,
  repoLang,
  repoStars,
}) {
  return (
    <>
      <a
        href="https://www.google.com"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <div className="card bg-dark text-white border-dark p-2">
          <div className="card-header">{repoName}</div>
          <div className="card-body">{repoDesc}</div>
          <div className="card-footer">
            <i
              className="fa-regular fa-file-code me-2"
              style={{ color: "white" }}
            ></i>
            {repoLang}
            <i
              className="fa-regular fa-star me-2 ms-3"
              style={{ color: "white" }}
            ></i>
            {repoStars}
          </div>
        </div>
      </a>
    </>
  );
}

GithubCard.propTypes = {
  repoName: PropTypes.string.isRequired,
  repoDesc: PropTypes.string.isRequired,
  repoLang: PropTypes.string.isRequired,
  repoStars: PropTypes.string.isRequired,
};
