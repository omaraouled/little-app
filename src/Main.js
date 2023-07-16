import React from "react";

function Main () {
    return (
        <main>
      <section class="hero">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <img src="hero_section_image.jpg"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam convallis fermentum finibus. Donec lobortis risus 
          cursus enim interdum, eu volutpat magna volutpat. </p>
          <button>Book Table</button>
      </section>
      <section class="specials">
        <h2>This Week's Specials</h2>
        <div class="dish">
          <img src="public/greek salad.jpg"/>
          <h4>Greek Salad</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="dish">
          <img src="public/greek salad.jpg"/>
          <h4>Bruchetta</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="dish">
          <img src="public/greek salad.jpg"/>
          <h4>Lemon Cake</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </section>
      <section class="testimonials">
        <h2>Testimonials</h2>
        <div class="review">
          <h5>Rating</h5>
          <img src=""/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src=""/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src=""/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src=""/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </section>
      <section class="about">
        <h2>About</h2>
        <img src="restaurant chef B.jpg"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam convallis fermentum finibus. Donec lobortis risus 
          cursus enim interdum, eu volutpat magna volutpat.</p>
      </section>
    </main>    
    )
}

export default Main;
