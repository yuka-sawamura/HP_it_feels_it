import React from "react";

const VisitBeauty = () => {
  return (
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
  );
};

export default VisitBeauty;
