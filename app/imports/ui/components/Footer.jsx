import React from 'react';
import { Container, Header } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const footerStyle = { paddingTop: '15px', paddingBottom: '15px', backgroundColor: '#024731' };
    return (
        <footer style={footerStyle}>
          <Container>
            <Header textAlign='center' as='h5' inverted>
              Department of Information and Computer Sciences<br/>
              University of Hawaii<br/>
              Honolulu, HI 96822
            </Header>
          </Container>
        </footer>
    );
  }
}

export default Footer;
