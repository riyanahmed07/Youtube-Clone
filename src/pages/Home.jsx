import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between; /* To ensure equal spacing between cards */
`;

const CardWrapper = styled.div`
  flex-basis: calc(33.33% - 10px); /* 3 cards per row, adjusting for the gap */
  margin-bottom: 10px;
  @media (max-width: 768px) {
    flex-basis: calc(50% - 10px); /* 2 cards per row on smaller screens */
  }
  @media (max-width: 480px) {
    flex-basis: 100%; /* 1 card per row on mobile screens */
  }
`;


const Home = () => {
    return (
      <Container>
        <CardWrapper><Card photo="https://www.shutterstock.com/image-vector/frontend-developer-typographic-header-website-260nw-1810322299.jpg" /></CardWrapper>
        <CardWrapper><Card photo="https://www.mindinventory.com/img/featured-insights/react-vs-vue.webp" /></CardWrapper>
        <CardWrapper><Card photo="https://www.newdev.io/images/blog/javascript-functions-for-beginners/thumbnail.webp" /></CardWrapper>
        <CardWrapper><Card photo="https://miro.medium.com/v2/resize:fit:1200/1*E4GoPGpx-OelEDfZtVx5dw.png" /></CardWrapper>
        <CardWrapper><Card photo="https://freefrontend.com/assets/img/css-thumbnails/CSS-THUMBNAIL-HOVER-EFFECTS.png" /></CardWrapper>
        <CardWrapper><Card photo="https://designtocodes.com/wp-content/uploads/2022/11/05-Hero-Section-Bootstrap-Bundle-1280x720.jpg" /></CardWrapper>
        <CardWrapper><Card photo="https://www.shutterstock.com/image-vector/frontend-developer-typographic-header-website-260nw-1810322299.jpg" /></CardWrapper>
        <CardWrapper><Card photo="https://www.webworksdreams.com/images/posts/React-Helmet-SEO-Thumbnail.webp" /></CardWrapper>
        <CardWrapper><Card photo="https://civo-com-assets.ams3.digitaloceanspaces.com/learn_guides/1212.original.png?1721059725" /></CardWrapper>
        <CardWrapper><Card photo="https://assets.myco.io/public/compressed/thumbnails/20231114/qasim279-277022-1699947286014.webp" /></CardWrapper>
        <CardWrapper><Card photo="https://i.ytimg.com/vi/lvpCEeYg044/hqdefault.jpg" /></CardWrapper>
        <CardWrapper><Card photo="https://i.ytimg.com/vi/y_jbPMlOK2s/hqdefault.jpg" /></CardWrapper>
      </Container>
    );
  };
  
  export default Home;
  