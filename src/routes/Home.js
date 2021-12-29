import React from "react";
import "../Sidebar.css"
const Home = () => {
  return(
  <div class="l-navbar" id="navbar">
  <nav class="nav">
      <div>
          <div class="nav__brand">
              <ion-icon name="menu-outline" class="nav__toggle" id="nav-toggle"></ion-icon>
              <a href="#" class="nav__logo">cc</a>
          </div>
          <div class="nav__list">
              <a href="#" class="nav__link active">
                  <ion-icon name="home-outline" class="nav__icon"></ion-icon>
                  <span class="nav_name">Home</span>
              </a>
              <a href="#" class="nav__link">
                  <ion-icon name="chatbubbles-outline" class="nav__icon"></ion-icon>
                  <span class="nav_name">Profile</span>
              </a>


              <div href="#" class="nav__link collapse">
                  <ion-icon name="people-outline" class="nav__icon"></ion-icon>
                  <span class="nav_name">Team</span>
              </div>

              <a href="#" class="nav__link">
                  <ion-icon name="settings-outline" class="nav__icon"></ion-icon>
                  <span class="nav_name">info</span>
              </a>
          </div>
          <a href="#" class="nav__link">
              <ion-icon name="log-out-outline" class="nav__icon"></ion-icon>
              <span class="nav_name">Log out</span>
          </a>
      </div>
  </nav>
</div>
)
};
export default Home;
