import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/*Ініціалізація існуючого плеєра*/

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

/* Використання методу on, відсліджування часу оновлення програвання timeupdate,
зберігання часу програвання в localStorage. */

player.on('timeupdate', throttle(onUpdatedTime, 1000));

function onUpdatedTime ({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds)
  };

/*Використання методу setCurrentTime() при перезгрузці сторінки, для того щоб відео розпочиналось зі 
збереженого моменту */

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(function (error) {
    console.error(error)
});
 