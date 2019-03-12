import React, { Component } from "react";

/**
 * Takes a react component and passes it a `transitionActive` prop that is set to `false`
 * after 300ms via the setTimeout in componentDidMount
 *
 * @param {ReactComponent} WrappedComponent - component to wrap in the WithTransition HOC
 * @returns {WrappedComponent}
 */
const WithTransition = WrappedComponent =>
  class extends Component {
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
        <WrappedComponent transitionActive={transitionActive} {...this.props} />
      );
    }
  };

export default WithTransition;
