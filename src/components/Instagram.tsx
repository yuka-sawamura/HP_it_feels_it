import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface InstagramMedia {
  media_url: string;
  timestamp: string;
  caption: string;
  permalink: string;
}

interface InstagramResponse {
  media: {
    data: InstagramMedia[];
  };
}

export default function Instagram() {
  const [allPosts, setAllPosts] = useState<InstagramMedia[]>([]);

  useEffect(() => {
    fetch(
      `https://graph.facebook.com/v15.0/${process.env.NEXT_PUBLIC_INSTAGRAM_ID}?access_token=${process.env.NEXT_PUBLIC_INSTAGRAM_ACCESS_TOKEN}&fields=media{caption,media_url,timestamp,permalink}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: InstagramResponse) => setAllPosts(data.media.data))
      .catch((error) =>
        console.error(
          "An error occurred while fetching Instagram images:",
          error
        )
      );
  }, []);
  const posts = allPosts.slice(0, 3);
  return (
    <>
      <section id="information">
        <div className="itit_information">
          <div className="itit_information_group">
            <h2 className="itit_information_title">新着情報</h2>
            <p className="itit_information_subtitle">(Instagram)</p>
            <div className="itit_information_instagram_group">
              <Swiper
                navigation={{
                  nextEl: "#information-button-next",
                  prevEl: "#information-button-prev",
                }}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                }}
              >
                {posts.map((post, index) => (
                  <SwiperSlide key={index}>
                    <div className="itit_information_instagram">
                      <div className="itit_information_instagram_item">
                        <img
                          className="itit_information_instagram_logo"
                          src="/Instagram_logo.svg"
                          alt="Instagram画像"
                        />
                        <p className="itit_information_instagram_name">
                          itfeelsit
                        </p>
                        <p className="itit_information_instagram_date">
                          {dayjs(post.timestamp).format("YYYY/MM/DD")}
                        </p>
                      </div>
                      <div className="itit_information_instagram_image">
                        <img src={post.media_url} alt="" />
                      </div>
                      <p className="itit_information_instagram_text">
                        {`${post.caption.slice(0, 50)}...`}
                      </p>
                      <a
                        className="itit_information_instagram_more"
                        href={post.permalink}
                        target="_blank"
                      >
                        もっと読む→
                      </a>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="itit_information_arrow-group">
          <button
            id="information-button-prev"
            className=" itit_information_arrow-group_button"
            tabIndex={0}
            role="button"
          >
            <img src="/chevron_left.svg" alt="左矢印" />
          </button>
          <button
            id="information-button-next"
            className="itit_information_arrow-group_button"
            tabIndex={0}
            role="button"
          >
            <img src="/chevron_right.svg" alt="右矢印" />
          </button>
        </div>
      </section>
    </>
  );
}
