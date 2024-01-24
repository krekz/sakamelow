function includeHeaderAndFooter() {
    const headerHTML = `
    <link rel="stylesheet" href="style.css">
    <header>
    <nav class="navbar navbar-expand-lg  ">
        <div class="container   ">
          <a class="navbar-brand fs-3 text-dark" href="index.html">sakamelow.</a>
          <button class="navbar-toggler align-items-center" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-start " id="navbarNav">
            <ul class="navbar-nav fs-4  ">
              <li class="nav-item ">
                <a class="nav-link "  href="index.html">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="menu.html">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>`;

    const footerHTML = `    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <footer>
    <div class="container-fluid text-center">
        <div class="row justify-content-center ">
          <div class="col">
              <h2>sakamelow.vercel.app</h2>
          </div>
        </div>
        <div class="row">
          <div class="col fs-4 " >
           <a class="text-dark" href="https://instagram.com/kyrool_" target="_blank"><i class="bi bi-instagram"></i></a> 
           <a class="text-dark" href="#"><i class="bi bi-facebook"></i></a> 
           <a class="text-dark" href="#"><i class="bi bi-whatsapp"></i></a> 
          </div>
        </div>
        <div class="row">
          <div class="col">
           | Copyright ©2024 All rights reserved | @ky |
          </div>
        </div>
    </div>


</footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML); //header , style.css , boots cdn css here
   document.body.insertAdjacentHTML('beforeend', footerHTML); //footer ,icon here
}

includeHeaderAndFooter();
