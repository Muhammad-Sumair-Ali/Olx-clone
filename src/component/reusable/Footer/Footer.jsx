import './footer.css';

const Footer = () => {
  return (
    <>
      <footer class="footer">
  <div class="footer__addr">
    <h1 class="footer__logo"><img src="images/blueolx.png" width="40px" alt="" /></h1>
    <h2>Contact</h2>
    <address>
      OLX_Pakistan@gmail.com 2023<br/>
      <a class="footer__btn" >Email Us</a>
    </address>
  </div>
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">POPULAR CATEGORIES</h2>
      <ul class="nav__ul">
        <li>
          <a>Cars</a>
        </li>
        <li>
          <a>Flats For Rent</a>
        </li>
        <li>
          <a>Mobile Phones</a>
        </li>
        <li>
          <a>Jobs</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">TRENDING SEARCHES</h2>
      <ul class="nav__ul nav__ul--extra">
        <li><a>Bikes</a></li>
        <li><a>Watches</a></li>
        <li><a>Terms of Use</a> </li>
        <li> <a>Privacy Policy</a></li>
      </ul>
    </li>
    <li class="nav__item">
      <h2 class="nav__title">ABOUT US</h2>
      <ul class="nav__ul">
        <li>
          <a>About Dubizzle Group</a>
        </li>
        <li>
          <a>OLX Blog</a>
        </li>
        <li>
          <a >Contact Us</a>
        </li>
        <li>
          <a>OLX For Business</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2023 OLX. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Design and Development By /<span class="heart">♥</span>Muhammad Sumair <small>Jatoi</small></span>
    </div>
  </div>
</footer>
    </>
  );
}

export default Footer;