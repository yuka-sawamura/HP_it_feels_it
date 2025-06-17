import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { client } from "@/libs/client";
import { MenuItem, Staff } from "@/libs/types";
import Instagram from "@/components/Instagram";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Removal({
  staff,
  women,
  men,
}: {
  staff: Staff[];
  women: MenuItem[];
  men: MenuItem[];
}) {
  const [selectedMenu, setSelectedMenu] = useState("woman");

  console.log(selectedMenu);
  console.log(women);
  console.log(men);

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
        <Header pageName="美容室ページ" pageLink="/" />
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
            <div className="itit_menu2">
              <div className="itit_menu2_group">
                <h1 className="itit_menu2_title">脱毛メニュー</h1>
                <p className="itit_menu2_text">(税込)</p>
              </div>
              <div className="itit_menu2_button">
                <button
                  className="itit_menu2_button-woman"
                  style={{
                    backgroundColor:
                      selectedMenu === "woman" ? "#565656" : "white",
                    color: selectedMenu === "woman" ? "white" : "#565656",
                  }}
                  onClick={() => setSelectedMenu("woman")}
                >
                  女性
                </button>
                <button
                  className="itit_menu2_button-man"
                  style={{
                    backgroundColor:
                      selectedMenu === "man" ? "#565656" : "white",
                    color: selectedMenu === "man" ? "white" : "#565656",
                  }}
                  onClick={() => setSelectedMenu("man")}
                >
                  男性
                </button>
              </div>

              <div className="itit_menu2_card">
                {selectedMenu === "woman" ? (
                  <div className="itit_menu2_card-group">
                    {women.map((item, index) => (
                      <div key={index} className="itit_menu2_card-grid">
                        <img
                          src={item.thumbnail.url}
                          alt={item.menu}
                          className="itit_menu2_card-image"
                        />
                        <div className="itit_menu2_card-info">
                          <span className="itit_menu2_card-info_label">
                            {item.menu}
                          </span>
                          <span className="itit_menu2_card-info_price">
                            ¥{item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="itit_menu2_card-group">
                    {men.map((item, index) => (
                      <div key={index} className="itit_menu2_card-grid">
                        <img
                          src={item.thumbnail.url}
                          alt={item.menu}
                          className="itit_menu2_card-image"
                        />
                        <div className="itit_menu2_card-info">
                          <span className="itit_menu2_card-info_label">
                            {item.menu}
                          </span>
                          <span className="itit_menu2_card-info_price">
                            ¥{item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                <p className="itit_menu2_card_p">※ 学生は10％割引</p>
              </div>
            </div>
          </section>

          <section>
            <div className="itit_light">
              <div className="itit_light_group">
                <h2 className="itit_light_title">光フェイシャルメニュー</h2>
                <p className="itit_light_text">
                  光フェイシャルとは
                  <br />
                  顔の肌内部に特殊な光を当てることで
                  <br />
                  美白効果や、シミ、しわ、たるみ
                  <br />
                  肌トラブルの改善などが期待できます。
                </p>
              </div>
              <div className="itit_light_menu">
                <div className="itit_light_menu-group">
                  <h3 className="itit_light_menu-title">
                    ベーシックコース
                    <p className="itit_light_menu-price">¥5,500</p>
                    <div className="itit_light_menu-matome">
                      <p className="itit_light_menu-line">クレンジング</p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">光フェイシャル</p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">パック</p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">仕上げ</p>
                    </div>
                  </h3>
                  <h3 className="itit_light_menu-title2">
                    スペシャルフェイシャルコース
                    <p className="itit_light_menu-price">¥7,150</p>
                    <div className="itit_light_menu-matome">
                      <p className="itit_light_menu-line">クレンジング</p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">光フェイシャル</p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">
                        トリートメントパック
                      </p>
                      <p className="itit_light_menu-line">∨</p>
                      <p className="itit_light_menu-line">仕上げ</p>
                    </div>
                  </h3>
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
                {staff
                  .filter((staff) => staff.removal)
                  .map((item, index) => (
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "staff", queries: { limit: 100 } });
  const women = await client.get({
    endpoint: "removal-menu-women",
    queries: { limit: 100 },
  });
  const men = await client.get({
    endpoint: "removal-menu-men",
    queries: { limit: 100 },
  });

  return {
    props: {
      staff: data.contents,
      women: women.contents,
      men: men.contents,
    },
  };
};
