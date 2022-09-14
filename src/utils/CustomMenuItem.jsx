import { Link } from "react-router-dom";

const CustomMenuItem = ({ name, link, image }) => {
  return (
    <Link
      className="hover:bg-blueish rounded-lg"
      to={`/${link}`}
      style={{
        width: "200px",
        color: "white",
        fontSize: "12pt",
        padding: "5px",
        marginBottom: "3px"
        
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <img
          style={{
            width: "32px",
            paddingRight: "5px"
          }}
          src={image}
          alt=""
        />
        {name}
      </div>
    </Link>
  );
};

export default CustomMenuItem;
