import React from 'react';

import Routes from './routes/index';



import ContextProvider from './hooks/index';
import GlobalStyles from './styles/globalStyles';

const App: React.FC = () => {
  return (
    <>
      <ContextProvider>
        <Routes/>
      </ContextProvider>
      <GlobalStyles />
    </>
  )
}

export default App;
