import React from "react";

export default function MailButton() {
  return (
    <button className="Mail-Button">
      <a href="mailto:chellappan@135@gmail.com">
        <div className="MailEnclose">
          <img src="Mail.png" alt="Mail"/>
          <p>Email</p>
        </div>
      </a>
    </button>
  );
}

export function Buttons() {
  return (
    <div className="Button">
      <div className="enclose">
        <a href="https://www.linkedin.com/in/chellappan-ramachandran-ba85a1257/">
          <img src="LinkedIn.png" alt="Linkedin"/>
        </a>
      </div>
      <div className="enclose">
        <a href="https://www.instagram.com/chellappan_05/">
          <img src="Instagram.png" alt="Instagram"/>
        </a>
      </div>
      <div className="enclose">
        <a href="https://github.com/Chellappan15">
          <img src="Github.png" alt="Github" />
        </a>
      </div>
    </div>
  );
}
