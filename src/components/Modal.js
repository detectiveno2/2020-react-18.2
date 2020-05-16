import React, { Component } from "react";
import "./../css/Modal.css";

class Modal extends Component {
  constructor() {
    super();
  }

  render() {
    const { children } = this.props;

    return (
      <div className="Modal">
        <div className="content">
          <h2>This is a modal</h2>
          <p>{children}</p>
          <div className="btn-area">
            <button href="#" className="btn green-btn">
              Accept
            </button>
            <button href="#" className="btn red-btn">
              Decline
            </button>
          </div>
          <button href="#" className="close-btn">
            <img src="https://image.flaticon.com/icons/svg/271/271203.svg" />
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
