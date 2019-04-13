import React, { Component } from 'react';
import MediaObject from '../MediaObject/MediaObject';
import Content from '../Content/Content';
import photo from './photo.png';
import play from './play.svg';
import styles from './Home.module.css';
import Container from '../Container/Container.js';
import Page from '../Page/Page';
import ContainerWrapper from '../ContainerWrapper/ContainerWrapper';

class Home extends Component {
  render() {
    return (
      <Page>
        <ContainerWrapper>
          <Container>
            <Content />
          </Container>
        </ContainerWrapper>
        <MediaObject alt="photo" src={photo}>
          <img className={styles.play} alt="play" src={play} />
        </MediaObject>
      </Page>
    );
  }
}

export default Home;
