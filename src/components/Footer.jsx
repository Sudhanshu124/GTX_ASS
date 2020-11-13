import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <p>© Aman Kumar {props.time}</p>
    </footer>
  );
}

export default Footer;
