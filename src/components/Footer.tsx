import React, { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenuOpen = () => setIsOpen(false);
  return (
    <footer className="itit_footer">
      <div className="itit_footer_group">
        <h3 className="itit_footer_name">美容室 it feels it</h3>
        <p className="itit_footer_text">〒031-0814 青森県八戸市妙花生8-161</p>
        <a className="itit_footer_text1" href="#">
          TEL:0178-25-8425
        </a>
        <p className="itit_footer_text">
          AM 09:00〜PM 18:00(月曜定休) <br /> ※完全予約制
        </p>
        <img
          className="itit_footer_icon"
          src="/Instagram_icon.svg"
          alt="インスタグラムロゴ"
        />
        <p className="itit_footer_text">
          ©2025 it feels it. All Right Reserved.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
