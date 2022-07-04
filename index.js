const audio = document.getElementById("audio");
const playPause = document.getElementById("play");
/**const progressBar = wrapper.querySelector(".progress-bar");**/

playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    playPause.querySelector(".bi-play-fill").classList.toggle("hide");
    playPause.querySelector(".bi-pause-fill").classList.toggle("hide");
    audio.play();
  } else {
    audio.pause();
    playPause.querySelector(".bi-play-fill").classList.toggle("hide");
    playPause.querySelector(".bi-pause-fill").classList.toggle("hide");
  }
});

/**mainAudio.addEventListener("timeupdate",(e)=>{
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let progressWidth = (currentTime/ duration) *100;
  progressBar.getElementsByClassName.width = '${progressWidth}%';

mainAudio.addEventListener("loadeddata",()=>{
  let musicCurrentTime = wrapper.querySelector(".current"),
  let musicDuration = wrapper.querySelector(".current");
  
  let audioDuration = mainAudio.duration;
  let totalMin = Math.floor(audioDuration / 60 );

  let totalSec = Math.floor(audioDuration % 60 );
  musicDuration.innerText = '${totalMin}:${totalSec}';

})

});**/