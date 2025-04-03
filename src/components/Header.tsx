import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenuOpen = () => setIsOpen(false);
  return (
    <header className="itit_header">
      <div className="itit_header_group">
        <div className="itit_header_text">
          <div className="itit_header_title">it feels it</div>
          <ul className="itit_header_p-group">
            <li className="itit_header_p">
              <a href="#menu">メニュー</a>
            </li>
            <li className="itit_header_p">
              <a href="#staff">スタッフ</a>
            </li>
            <li className="itit_header_p">
              <a href="#information">新着情報</a>
            </li>
            <li className="itit_header_p">
              <a href="#access">アクセス</a>
            </li>
            <li className="itit_header_p">
              <a href="#visit-beauty">訪問美容</a>
            </li>
          </ul>
        </div>
        <div className="itit_header_pages-group">
          <div className="itit_header_pages">脱毛ページ </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
