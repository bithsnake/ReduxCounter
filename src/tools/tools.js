import audio from '../audio/sndCanHit0.mp3';
export const playAudio = (pitch = 1) => {
  var sound = new Audio(audio);
  sound.currentTime = 0;
  if (pitch !== null) {
    sound.mozPreservePitch = false;
    sound.playbackRate = pitch;
  }
    const playPromise = sound.play();
  
        if (playPromise !== undefined) {
          playPromise
            .then(_ => {
              console.log("sound played");
            })
            .catch(error => {
              console.log("playback prevented", error);
            });
        }
  }