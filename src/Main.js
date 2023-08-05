import React from 'react';
import './index.css';
import hero_pic from './hero_section_image.jpg'

function Main () {
    return (
        <main>
      <article class="hero-grid">
        <div class="hero empty1">
        </div>
        <div class="hero tittle">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        </div>
        <div class="hero">
          <img class="pic" src={hero_pic} width="300" height="420" alt="hero section"/>
        </div>
        <div class="hero para">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam convallis fermentum finibus. Donec lobortis risus 
          cursus enim interdum, eu volutpat magna volutpat. </p>
        </div>
        <div class="hero">
          <button class="btn" role='button'>Reserve a Table</button>
        </div>
        <div class="hero empty2">
        </div>
      </article>
      <article class="specials">
        <h2>This Week's Specials</h2>
        <div class="dish">
          <img src="src/greek salad.jpg" alt="greek dish"/>
          <h4>Greek Salad</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="dish">
          <img src="src/bruchetta.jpg" alt="bruchetta dish"/>
          <h4>Bruchetta</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="dish">
          <img src="src/lemon dessert.jpg" alt="Lemon cake"/>
          <h4>Lemon Cake</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </article>
      <article class="testimonials">
        <h2>Testimonials</h2>
        <div class="review">
          <h5>Rating</h5>
          <img src="src/customer.png" alt="customer"/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src="src/customer.png" alt="customer"/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src="src/customer.png" alt="customer"/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div class="review">
          <h5>Rating</h5>
          <img src="src/customer.png" alt="customer"/>
          <p>Review: Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </article>
      <article class="about">
        <h2>About</h2>
        <img src="restaurant chef B.jpg" alt="owners"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Aliquam convallis fermentum finibus. Donec lobortis risus 
          cursus enim interdum, eu volutpat magna volutpat.</p>
      </article>
    </main>    
    )
}

export default Main;
