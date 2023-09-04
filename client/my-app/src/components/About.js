import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Accordion from "react-bootstrap/Accordion";
export default function About() {
  return (
    <>
      {/* ACCORDIAN CONTAINER */}
      <div className="container" style={{ paddingLeft: "25px" }}>
        <p>
          <strong>Welcome to Chitrakala - Where Art Meets Heart!</strong> At
          Chitrakala, we are passionate about celebrating the rich tapestry of
          India's art and craft traditions while making a positive impact on the
          lives of local Indian artisans. Our mission is to bridge the gap
          between art lovers and talented artisans, offering you a unique
          opportunity to explore and purchase exquisite handmade creations while
          directly supporting the families behind these timeless crafts. Join us
          on a journey of discovery and appreciation for India's art and craft
          heritage. Whether you're an art collector, a lover of unique home
          decor, or someone seeking meaningful gifts, Chitrakala is your gateway
          to an enchanting world of creativity and culture. Thank you for being
          a part of our community, and for supporting the art and craft of local
          Indian artisans. Together, we can make a difference, one masterpiece
          at a time. Explore, experience, and embrace the beauty of Indian
          artistry with Chitrakala today!
        </p>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who We Are</Accordion.Header>
            <Accordion.Body>
              Chitrakala is more than just an online marketplace; it's a
              platform built on a foundation of respect, creativity, and
              compassion. We are a dedicated team of art enthusiasts who believe
              in the power of art to transform lives. Our platform is designed
              to showcase the incredible talents of local Indian artisans,
              helping them reach a wider audience and secure a sustainable
              income for their families.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What We Offer</Accordion.Header>
            <Accordion.Body>
              Discover a world of artistry right at your fingertips. At
              Chitrakala, you'll find an extensive collection of handcrafted
              treasures, each with its own unique story to tell. From intricate
              handwoven textiles and vibrant pottery to exquisite jewelry and
              intricate paintings, our platform brings together a diverse range
              of traditional and contemporary Indian art forms.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Why Choose Chitrakala</Accordion.Header>
            <Accordion.Body>
              Empowering Artisans: When you shop at Chitrakala, you're not just
              buying art; you're investing in the livelihoods of local Indian
              artisans. We ensure that our artisans receive fair compensation
              for their exceptional work, enabling them to support their
              families and preserve their craft traditions.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Quality and Authenticity</Accordion.Header>
            <Accordion.Body>
              We take pride in curating a selection of high-quality, authentic
              handmade products. Each item on our platform is crafted with care,
              reflecting the skill and passion of the artisans who create them.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Supporting Local Communities</Accordion.Header>
            <Accordion.Body>
              Chitrakala believes in the strength of communities. Through your
              purchases, we contribute to the well-being of the artisan
              communities across India, helping them thrive for generations to
              come.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Affordability</Accordion.Header>
            <Accordion.Body>
              We understand the value of your hard-earned money. Chitrakala
              offers reasonable prices for handmade goods, ensuring that
              everyone can appreciate and own a piece of Indian artistry.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}
