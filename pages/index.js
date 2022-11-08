import config from "../config.json";

function HomePage() {
  const style = { backgroundColor: "red" };
  return (
    <div style={style}>
      <Header />
      <Menu />
      <Timeline />
    </div>
  );
}

function Header() {
  return (
    <div>
      <img src="banner" alt="" />
      <img src={`https://github.com/${config.fotoPerfil}.png`} alt="" />
      {config.nome}
      {config.cargo}
    </div>
  );
}
function Menu() {
  return <div>Menu</div>;
}
function Timeline() {
  return <div>Timeline</div>;
}

export default HomePage;
