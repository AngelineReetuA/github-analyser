import PropTypes from "prop-types";

export default function StatCard({ statName, children }) {
  return (
    <>
      <div className="col row d-flex justify-content-center align-items-end">
        <div className="p-3 text-center fw-bold" style={{ fontSize: "60px" }}>
          {children}
        </div>
        <div className="d-flex justify-content-center text-muted">
          {statName}
        </div>
      </div>
    </>
  );
}

StatCard.propTypes = {
  children: PropTypes.element.isRequired,
  statName: PropTypes.string.isRequired,
  cardPadding: PropTypes.string,
};
