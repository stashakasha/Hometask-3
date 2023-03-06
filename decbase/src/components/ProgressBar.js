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
        <div class="progress">
            <div class="progress__container">
                <div class="progress__bar" id="myBar"></div>
            </div>
        </div>
    );
}

export default ProgressBar;