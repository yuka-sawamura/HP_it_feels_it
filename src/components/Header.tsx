import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const hundleMenuOpen = () => setIsOpen(false);
  return (
    <header className="itit_header">
      <div className="itit_header_group">
        <div className="itit_header_text">
          <div className="itit_header_title">it feels it</div>
          <div className="itit_header_p-group">
            <p className="itit_header_p">メニュー</p>
            <p className="itit_header_p">ギャラリー</p>
            <p className="itit_header_p">スタッフ</p>
            <p className="itit_header_p">アクセス</p>
            <p className="itit_header_p">訪問美容</p>
          </div>
        </div>
        <div className="itit_header_pages-group">
          <div className="itit_header_pages">脱毛ページ ＞</div>
        </div>
      </div>
    </header>
  );
};
export default Header;
