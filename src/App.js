import { useEffect } from 'react';
import { Scene } from 'Three';
import { ContactBar, Title } from 'Components';
import 'Scss/main.scss';

const App = () => {
  useEffect(() => {
    console.log(
      "%c👋 Hello dev console user! If you're a fan of what you've seen on this site then reach out to me at michael@eightnine.co and let's build something together!",
      'font-size: 13px'
    );
  }, []);

  return (
    <div className="app">
      <Title copy="Building good things well." />
      <Scene />
      <ContactBar />
    </div>
  );
};

export default App;
