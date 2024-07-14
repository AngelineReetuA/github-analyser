import PropTypes from "prop-types";

export default function Releases({link1, link2, link3, link4}) {
  return (
    <>
      <h3>Releases</h3>
      <a href={link1} className="fs-5" target="_blank">
        {link1}
      </a>
      <br />
      <a href={link2} className="fs-5" target="_blank">
        {link2}
      </a>
      <br />
      <a href={link3} className="fs-5" target="_blank">
        {link3}
      </a>
      <br />
      <a href={link4} className="fs-5" target="_blank">
        {link4}
      </a>
    </>
  );
}

Releases.propTypes = {
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,

}