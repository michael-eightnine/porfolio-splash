import './style.scss';

const Specialization = ({ currentTheme }) => {
  const themeStyle = {
    container: {
      borderColor: currentTheme.primaryColor
    },
    title: {
      color: currentTheme.primaryColor
    },
  };

  return (
    <div className="specialization" style={themeStyle.container}>
      <h2 className="specialization__title" style={themeStyle.title}>specializing in</h2>
      <ul className="specialization__list">
        <li>Front-End Architecture</li>
        <li>Visual &amp; Interface Design</li>
        <li>"Making It Happen"</li>
      </ul>
    </div>
  );
};

export default Specialization;
