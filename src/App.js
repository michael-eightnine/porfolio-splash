import { Scene } from '@Three';
import '@Scss/main.scss';

const App = () => (
  <div className="app">
    <h1 className="title">
      Building good things well.
    </h1>
    <h1 aria-hidden="true" className="title-overlap">
      Building good things well.
    </h1>
    <Scene />
    <div className="links">
      <h4 className="links__title">
        Let's talk
      </h4>
      <div className="links__list">
      <a href="#">resume</a>
      <a href="#">contact</a>
      <a href="#">hometown advantage</a>
      <a href="#">github</a>
      </div>
    </div>
  </div>
);

export default App;
