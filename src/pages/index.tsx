import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { client } from "@/libs/client";
import { HairMenu, MenuItem, Staff } from "@/libs/types";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import Instagram from "@/components/Instagram";

export default function Home({
  staff,
  menu,
}: {
  staff: Staff[];
  menu: HairMenu[];
}) {
  console.log(menu);
  const menuByCategory = menu.reduce((acc, item) => {
    item.category.forEach((cat) => {
      if (!acc[cat]) {
        acc[cat] = [];
      }
      acc[cat].push(item);
    });
    return acc;
  }, {} as Record<string, HairMenu[]>);

  // 各カテゴリーのアイテムを逆順にソート
  Object.keys(menuByCategory).forEach((category) => {
    menuByCategory[category] = menuByCategory[category].reverse();
  });

  console.log("menuByCategory:", menuByCategory);

  return (
    <>
      <Head>
        <title>ヘアメイク it feels it イットフィールズイット</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="ヘアメイク it feels it イットフィールズイット"
        />
        <meta
          property="og:description"
          content="八戸市妙の美容室 イットフィールズイットのホームページです。カット、カラー、パーマネント、脱毛や着物着付けも承っております。御予約はお電話ください。"
        />
        <meta property="og:image" content="/ogp.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div>
        <Header pageName="脱毛ページ" pageLink="/removal" />
        <main>
          <div className="itit_top">
            <div className="itit_top_group">
              <div className="itit_top_text">
                <p className="itit_top_text_p">ご予約はお電話でお受けします</p>
                <a className="itit_top_text_phone" href="tel:0178-25-8425">
                  0178-25-8425
                </a>
              </div>
              <div className="itit_top_phone-link-group">
                <a className="itit_top_phone-link" href="tel:0178-25-8425">
                  電話する
                </a>
              </div>
              <div className="itit_top_image-gruop">
                <img
                  className="itit_top_image-pc"
                  src="/it-feels-it-top-image.png"
                  alt="top-image pc画像"
                />
                <img
                  className="itit_top_image-sp"
                  src="/topimage_sp.png"
                  alt="top-image sp画像"
                />
              </div>
            </div>
          </div>

          <section id="menu">
            <div className="itit_menu">
              <div className="itit_menu_group">
                <h1 className="itit_menu_title">メニューと料金</h1>
              </div>
              {/* ヘアカテゴリーのメニューを動的に表示 */}
              <div className="itit_menu_price-table_group">
                {menuByCategory["ヘア"] && (
                  <div className="itit_menu_price-table">
                    <p className="itit_menu_price-table_title">ヘア</p>
                    <ul className="itit_menu_price-table_list">
                      {menuByCategory["ヘア"].map((item, index) => (
                        <li
                          key={index}
                          className="itit_menu_price-table_list_item"
                        >
                          <span className="itit_menu_price-table_name">
                            {item.label}
                          </span>
                          <span className={`itit_menu_price-table_number`}>
                            {item.pricing}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="itit_menu_price-table">
                  <p className="itit_menu_price-table_title">ストレート</p>
                  <ul className="itit_menu_price-table_list">
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        縮毛矯正
                      </span>
                      <span className="itit_menu_price-table_number non_tilde">
                        ¥4,000
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        酸性ストレートパーマ
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥8,000〜
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="itit_menu_price-table_group">
                <div className="itit_menu_price-table">
                  <p className="itit_menu_price-table_title">ハイライト</p>
                  <ul className="itit_menu_price-table_list">
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        ハイライトS
                      </span>
                      <span className="itit_menu_price-table_number non_tilde">
                        ¥4,000
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        ハイライトM
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥8,000〜
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        ハイライトL
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥8,000〜
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="itit_menu_price-table">
                  <p className="itit_menu_price-table_title">トリートメント</p>
                  <ul className="itit_menu_price-table_list">
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        トリートメント
                      </span>
                      <span className="itit_menu_price-table_number non_tilde">
                        ¥4,000
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="itit_menu_price-table_group">
                <div className="itit_menu_price-table">
                  <p className="itit_menu_price-table_title">出張</p>
                  <ul className="itit_menu_price-table_list">
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">カット</span>
                      <span className="itit_menu_price-table_number">
                        ¥2,000
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        カット＋顔剃り
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥2,500
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">顔剃り</span>
                      <span className="itit_menu_price-table_number">
                        ¥1,000
                      </span>
                    </li>
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        カット＋顔剃り＋カラー
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥5,000
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="itit_menu_price-table">
                  <p className="itit_menu_price-table_title">自宅出張</p>
                  <ul className="itit_menu_price-table_list">
                    <li className="itit_menu_price-table_list_item">
                      <span className="itit_menu_price-table_name">
                        自宅出張
                      </span>
                      <span className="itit_menu_price-table_number">
                        ¥5,000
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="itit_payment_method">
            <div className="itit_payment_method_group">
              <h1 className="itit_payment_method_title">お支払い方法</h1>
            </div>
            <div className="itit_payment_method_list">
              <div className="itit_payment_method_item">
                <img
                  className="itit_payment_method_image"
                  src="/Cash.svg"
                  alt="現金"
                />
                <div className="itit_payment_method_item_group">
                  <span className="itit_payment_method_badge">1</span>
                  <p className="itit_payment_method_text">現金</p>
                </div>
              </div>
              <div className="itit_payment_method_item">
                <img
                  className="itit_payment_method_image"
                  src="/CreditCard.svg"
                  alt="クレジットカード"
                />
                <div className="itit_payment_method_item_group">
                  <span className="itit_payment_method_badge">2</span>
                  <p className="itit_payment_method_text">クレジットカード</p>
                </div>
              </div>
              <div className="itit_payment_method_item">
                <img
                  className="itit_payment_method_image"
                  src="/IC-QR.svg"
                  alt="QR・電子マネー"
                />
                <div className="itit_payment_method_item_group">
                  <span className="itit_payment_method_badge">3</span>
                  <p className="itit_payment_method_text">QR, 電子マネー</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="itit_reservation">
              <div className="itit_reservation_group">
                <h1 className="itit_reservation_title">ご予約</h1>
                <p className="itit_reservation_text">
                  当店は完全予約制です
                  <br /> ご予約は電話にて承っています <br />
                  AM 09:00〜PM 18:00(月曜定休)
                </p>
                <a className="itit_reservation_tel" href="tel:0178-25-8425">
                  tel: 0178-25-8425
                </a>
                <div className="itit_reservation_tel-link-group">
                  <a
                    className="itit_reservation_tel-link"
                    href="tel:0178-25-8425"
                  >
                    0178-25-8425
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="staff" className="itit_staff">
            <h2 className="itit_staff_title">スタッフ</h2>
            <div className="itit_staff_list">
              <Swiper
                navigation={{
                  nextEl: "#staff-button-next",
                  prevEl: "#staff-button-prev",
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  768: {
                    slidesPerView: staff.length,

                    spaceBetween: 10,
                  },
                }}
              >
                {staff.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="itit_staff_item">
                      <div className="itit_staff_image">
                        <img src={item.image.url} alt={item.name} />
                      </div>
                      <p className="itit_staff_role">{item.position}</p>
                      <h3 className="itit_staff_name">{item.name}</h3>
                      <p className="itit_staff_message">{item.intro}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <div className="itit_staff_arrow-group">
              <button
                id="staff-button-prev"
                className=" itit_staff_arrow-group_button"
                tabIndex={0}
                role="button"
              >
                <img src="/chevron_left.svg" alt="左矢印" />
              </button>
              <button
                id="staff-button-next"
                className="itit_staff_arrow-group_button"
                tabIndex={0}
                role="button"
              >
                <img src="/chevron_right.svg" alt="右矢印" />
              </button>
            </div>
          </section>

          <Instagram />

          <section id="access">
            <div className="itit_access">
              <div className="itit_access_group">
                <h2 className="itit_access_title">アクセス</h2>
              </div>
            </div>
          </section>

          <section>
            <div className="itit_ReFa">
              <div className="itit_ReFa_group">
                <div className="itit_ReFa_image-group">
                  <img
                    className="itit_ReFa_image"
                    src="/ReFa.png"
                    alt="ReFaの画像"
                  />
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

          <section id="visit-beauty">
            <div className="itit_visit-beauty">
              <div className="itit_visit-beauty_group">
                <div className="itit_visit-beauty_image-group">
                  <img
                    className="itit_visit-beauty_image"
                    src="/visit-beauty.png"
                    alt="訪問理美容の画像"
                  />
                </div>
                <div className="itit_visit-beauty_text-group">
                  <h2 className="itit_visit-beauty_title">訪問理美容</h2>
                  <div className="itit_visit-beauty_text-list">
                    <p className="itit_visit-beauty_text">
                      介護・医療施設への訪問美容も実施しています。
                    </p>
                    <p className="itit_visit-beauty_text">
                      お気軽にお問い合わせください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "staff", queries: { limit: 100 } });
  const menu = await client.get({
    endpoint: "hair-menu",
    queries: { limit: 100 },
  });

  return {
    props: {
      staff: data.contents,
      menu: menu.contents,
    },
  };
};
