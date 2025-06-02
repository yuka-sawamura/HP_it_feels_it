import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenuOpen = () => setIsOpen(false);
  return (
    <section id="/beauty-salon">
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
            </ul>
          </div>
          <div className="itit_header_pages-group">
            <a className="itit_header_pages" href="/removal" target="_blank">
              脱毛ページ ＞
            </a>
          </div>
        </div>
      </header>
    </section>
  );
};
export default Header;
