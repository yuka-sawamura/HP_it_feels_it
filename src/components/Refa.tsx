import React from "react";

const Refa = () => {
  return (
    <section>
      <div className="itit_ReFa">
        <div className="itit_ReFa_group">
          <div className="itit_ReFa_image-group">
            <img className="itit_ReFa_image" src="/ReFa.png" alt="ReFaの画像" />
          </div>
          <div className="itit_ReFa_text-group">
            <h2 className="itit_ReFa_title">ReFa 商品をご購入できます</h2>
            <ul className="itit_ReFa_text-list">
              <li className="itit_ReFa_text">
                <img
                  src="/check.svg"
                  alt="チェックマーク"
                  className="itit_ReFa_text_list_check"
                />
                メーカー直営オンラインショップ(B happy)での買い物が可能！
              </li>
              <li className="itit_ReFa_text">
                <img
                  src="/check.svg"
                  alt="チェックマーク"
                  className="itit_ReFa_text_list_check"
                />
                B happy会員限定クーポンプレゼント
              </li>
              <li className="itit_ReFa_text">
                <img
                  src="/check.svg"
                  alt="チェックマーク"
                  className="itit_ReFa_text_list_check"
                />
                お買い物ポイント付与
              </li>
            </ul>
            <p className="itit_ReFa_text_sp">
              当店では、ReFaなどMTG製品をご購入できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refa;
