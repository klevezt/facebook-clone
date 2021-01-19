import React from "react";

import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <iframe
        key="iframe1"
        title="frame1"
        className="widgets__iframe"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSkipDeveloper%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted_media"
      ></iframe>
    </div>
  );
}

export default Widgets;
