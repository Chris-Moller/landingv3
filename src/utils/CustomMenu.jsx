import CustomMenuItem from "./CustomMenuItem";

const CustomMenu = () => {
  return (
    <>
      <div
        style={{
          background: "none",
          height: "20px",
          display: "flex",
          position: "absolute",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 93,
          left: 50,
          backgroundColor: "#0A0421",
          borderRadius: "10px",
          padding: "5px",
          border: "solid",
          borderWidth: "0.5px",
          borderColor: "#817dac",
        }}
      >
        <CustomMenuItem
          image="/images/EL-icon.svg"
          name="EigenLayer"
          link="products"
        ></CustomMenuItem>
        <CustomMenuItem
          image="/images/EDA-icon.svg"
          name="EigenDA"
          link="products"
        ></CustomMenuItem>
      </div>
    </>
  );
};

export default CustomMenu;
