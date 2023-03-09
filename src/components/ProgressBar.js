import React from "react";

window.onscroll = function() {showProgress()};

function showProgress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const ProgressBar = () => {
    return(
        <div className="progress">
            <div className="progress__container">
                <div className="progress__bar" id="myBar"></div>
            </div>
        </div>
    );
}

export default ProgressBar;