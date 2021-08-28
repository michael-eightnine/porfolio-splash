import { useState } from 'react';
import { Scene } from 'Three';
import { ContactBar, Title } from 'Components';
import { THEMES } from 'Constants';
import 'Scss/main.scss';

const themeNames = THEMES.map(({ id }) => id);

const App = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const currentTheme = THEMES[currentThemeIndex];

  return (
    <div className={`app app--theme-${themeNames[currentThemeIndex]}`}>
      <Title {...{ currentTheme }} copy="Building good things well." />
      <Scene {...{ currentTheme }} onThemeChange={setCurrentThemeIndex} />
      <ContactBar {...{ currentTheme }} />
    </div>
  );
};

export default App;
