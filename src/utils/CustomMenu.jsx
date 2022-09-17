import CustomMenuItem from "./CustomMenuItem";

const CustomMenu = () => {
  return (
    <>
      <div
      className="rotate-45 rounded-sm"
        style={{
          height: "20px",
          width: "20px",
          display: "flex",
          top: 85,
          left: 100,
          position: "absolute",
          border: "solid",
          borderWidth: "0.5px",
          borderColor: "#817dac",
          
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: 93,
          left: 50,
          backgroundColor: "#00001D",
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
          link="EigenLayer"
        ></CustomMenuItem>
        <CustomMenuItem
          image="/images/EDA-icon.svg"
          name="EigenDA"
          link="EigenDA"
        ></CustomMenuItem>
      </div>
    </>
  );
};

export default CustomMenu;
