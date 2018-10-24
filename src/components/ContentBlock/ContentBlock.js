import React, { Component } from "react";
import "./content-block.scss";

class ContentBlock extends Component {
  constructor() {
    super();
    this.state = {
      transitionActive: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ transitionActive: false });
    }, 300);
  }

  render() {
    const { transitionActive } = this.state;
    return (
      <div
        className={
          transitionActive
            ? "content-block content-block--transition"
            : "content-block"
        }
      >
        <p className="content-block__section">
          Morbi nisl nibh, malesuada at rutrum faucibus, accumsan eget libero.
          Sed vitae mi quam. Nullam ut mollis felis, id euismod ex. Integer
          felis quam, dapibus eu nunc ac, lacinia molestie neque. Curabitur
          auctor dolor vehicula risus congue interdum.
        </p>
        <p className="content-block__section">
          Praesent mattis efficitur hendrerit. Cras fringilla gravida ante sed
          commodo. Aliquam vehicula est vel augue fringilla, id dictum orci
          varius. Vestibulum nec ultricies quam. Nunc interdum mattis libero a
          ornare.
        </p>
        <div className="content-block__links">
          <a href="google.com">Resume</a>
          <a href="google.com">Hometown [dis]Advantage</a>
          <a href="google.com">GitHub</a>
        </div>
      </div>
    );
  }
}

export default ContentBlock;
