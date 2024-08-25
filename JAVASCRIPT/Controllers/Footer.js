// Footer.js
document.addEventListener("DOMContentLoaded", function () {
  let Footer = `<footer class="footer">
  <div class="container">
    <div class="section footer-top grid-list">
      <div class="footer-brand">
        <a href="#" class="logo">
          <img
            src="../IMAGES/logo1.png"
            width="148"
            height="38"
            alt="BookMe"
          />
        </a>
        <h2 class="h2">The Best Online Ticket Booking!</h2>
        <p class="section-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
          excepturi, sapiente, debitis distinctio soluta natus in, delectus
          qui necessitatibus ullam illo magni at quisquam eligendi?
        </p>
      </div>

      <ul class="footer-list">
        <li>
          <p class="footer-list-title h5">Categories</p>
        </li>

        <li>
          <a href="#" class="footer-link">
            <span class="span">Home</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </li>

        <li>
          <a href="./About_us.html" target="_blank" class="footer-link">
            <span class="span">About Us</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="footer-link">
            <span class="span">Contact Us</span>

            <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon>
          </a>
        </li>
      </ul>

      <ul class="footer-list">
        <li>
          <p class="footer-list-title h5">Reach Us</p>
        </li>

        <li>
          <a href="mailto:bookme@mail.net" class="footer-link">
            <ion-icon name="mail" aria-hidden="true"></ion-icon>

            <span class="span">bookme@mail.net</span>
          </a>
        </li>

        <li>
          <a href="tel:+91344567890" class="footer-link">
            <ion-icon name="call" aria-hidden="true"></ion-icon>

            <span class="span">+91 34 456 78 90</span>
          </a>
        </li>

        <li>
          <ul class="social-list">
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        &copy Copyright 2023 BookMe. All rights reserved.
      </p>
    </div>
  </div>
</footer>`;
  $("body").append(Footer);
});
