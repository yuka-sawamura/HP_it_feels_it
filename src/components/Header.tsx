import React, { useState } from "react";

interface HeaderProps {
  pageName: string;
  pageLink: string;
}

const Header: React.FC<HeaderProps> = ({ pageName, pageLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenuOpen = () => setIsOpen(false);

  const pageLinkStyle = {
    backgroundColor: pageName === "美容室ページ" ? "#73C986" : "#E2734B",
  };

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
          <a
            className="itit_header_pages-group itit_header_pages"
            href={pageLink}
            style={pageLinkStyle}
          >
            {pageName}
            <img
              src="/arrow_right.svg"
              alt="右矢印"
              className="itit_header_pages_arrow"
            />
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
