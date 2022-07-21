import MainContainer from "components/shared-components/MainContainer";

export default function Resources() {
  return (
    <MainContainer sx={{ padding: "10px 0" }}>
      <div>
        <h1>Resources:</h1>
        <p align="center">
        <h2>Eigenlayer @ ETHConomics Amsterdam</h2>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/01xDSwMO5U4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br />
        <h2>Eigenspace @ ZKSummit 7 Amsterdam</h2>
        <iframe width="800" height="400" src="https://www.youtube.com/embed/OtUOXTqrSyg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </p>
      </div>
    </MainContainer>
  );
}
