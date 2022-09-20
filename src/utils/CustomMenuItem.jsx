import { Link } from "react-router-dom";

const CustomMenuItem = ({ setProdOpen, name, link, image }) => {

  const closeMenu = () => {
    setProdOpen(false)
  }

  return (
    <Link
      className="hover:bg-blueish rounded-lg"
      to={`/${link}`}
      onClick={closeMenu}
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
