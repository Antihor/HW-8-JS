import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', function (currentTime) {
  const seconds = currentTime.seconds;
  localStorage.setItem(
    'videoplayer-current-time',
    throttle(JSON.stringify(seconds), 1000)
  );
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
/*player
  .setCurrentTime()
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
/*const player = new Player('handstick', {
  id: 19231868,
  width: 640,
});

player.on('play', function () {
  console.log('played the video!');
});*/
