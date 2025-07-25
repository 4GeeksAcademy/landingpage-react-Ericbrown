
const Navbar = () => {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary ms-auto">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Photos</a>
        <a class="nav-link" href="#">Videos</a>
        <a class="nav-link" href="#">About Us</a>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Navbar;