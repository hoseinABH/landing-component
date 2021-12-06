import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Container from './components/styles/container.styled';
import GlobalStyles from './components/styles/global';

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
          <h1>Hello world</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
