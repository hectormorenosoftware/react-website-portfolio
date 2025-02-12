import React from "react";
import { withRouter } from "react-router-dom";
import "./Header.css";

class Header extends React.PureComponent {
  goToContactPage = () => {
    const { history } = this.props;

    return history.push("/contact");
  };

  goToQandAPage = () => {
    const { history } = this.props;

    return history.push("/QandA");
  };

  render() {
    return (
      <div className="Header">
        <div className="HeaderGroup">
          <a href="#companies">Companies</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a onClick={this.goToQandAPage}>Q and A</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
