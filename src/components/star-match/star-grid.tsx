import StarIcon from "@material-ui/icons/Star";

export const StarGrid = ({ size = 7 }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {new Array(size).fill(0).map((x, i) => (
        <div key={`star-grid-${i}`} style={{ padding: "10px" }}>
          <StarIcon fontSize="large" />
        </div>
      ))}
    </div>
  );
};
