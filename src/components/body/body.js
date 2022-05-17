import React from "react";
import "./Body.css";

export default function Header(props) {
  

  return (
    <div className="body">
      <div data-aos='fade-up' data-aos-duration="2500">
        <h2>Nội thất đỉnh cao - Thiết kế thời thượng - Không gì là không thể</h2>
        <h1>Là chúng tôi <strong>UR</strong></h1>
      </div>
      <div className="main_container">
        <div data-aos="fade-right">
          <p style={{textAlign:'justify', fontSize:'20px'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum dictum consequat. Duis ac dolor ut lorem egestas placerat quis id erat. Nunc vel nunc fringilla, semper enim et, porta dui. Mauris tristique nunc non velit vestibulum luctus. In mattis velit non eros consectetur blandit. Sed et posuere dolor, vel condimentum felis. Praesent a turpis mi. Nulla molestie odio purus, vitae commodo massa imperdiet vel. Morbi eget imperdiet nisi.
            <br/>
            Aenean aliquet mollis diam, at condimentum sapien tincidunt at. Aenean facilisis sodales scelerisque. Fusce enim magna, lobortis non ex a, laoreet facilisis enim. Cras aliquam risus ipsum, sed sagittis mi consequat sit amet. Proin at eros sem. Sed eget malesuada orci. Donec facilisis volutpat nibh quis tempus. Suspendisse fermentum cursus nunc eget sodales. Ut ultrices commodo felis eleifend accumsan. Duis mauris felis, aliquam sed dolor molestie, lobortis sollicitudin enim.
          </p>
        </div>
        <span class="divider" />
        <div data-aos="fade-left">
          <img className="cover-img"
            src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/affordable-home-decor-ideas-hero-A.jpg"
            width={580}
            alt="cover"
          />
        </div>
      </div>
    </div>
  );
}