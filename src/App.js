import { ThemeProvider } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './components/styles/container.styled';
import GlobalStyles from './components/styles/global';
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },

  breakpoints: {
    mobile: '768px',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card index={index} key={item.id} {...item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
