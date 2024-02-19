const Navbar = () => {
  const buttonStyle = {
    color: "white",
    backgroundColor: "#f1356d",
    borderRadius: "5px",
  };
  return (
    <nav className="navbar">
      <h1>microblog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={buttonStyle}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
