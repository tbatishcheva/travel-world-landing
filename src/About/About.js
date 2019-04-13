import React, { Component } from 'react';
import MediaObject from '../MediaObject/MediaObject';
import view from '../view.png';
import History from '../History/History';
// import styles from './About.module.css';
import Container from "../Container/Container";
import Page from "../Page/Page";
import ContainerWrapper from "../ContainerWrapper/ContainerWrapper";

class About extends Component {
  render() {
    return (
      <Page>
        <ContainerWrapper>
          <Container>
            <History />
          </Container>
        </ContainerWrapper>
        <MediaObject alt="photo" src={view}>
        </MediaObject>
      </Page>
    );
  }
}

export default About;
