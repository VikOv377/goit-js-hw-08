import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/*Ініціалізація існуючого плеєра*/

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

/* Використання методу on, відсліджування часу оновлення програвання timeupdate,
зберігання часу програвання в localStorage. */

player.on('timeupdate', throttle(onUpdatedTime, 1000));

function onUpdatedTime ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds)
  };

/*Використання методу setCurrentTime() при перезгрузці сторінки, для того щоб відео розпочиналось зі 
збереженого моменту */

const savedCurrantTime = localStorage.getItem(STORAGE_KEY);

if (savedCurrantTime !== null) {
  player
  .setCurrentTime(savedCurrantTime)
  .catch(function (error) {
    console.error(error);
    }
  );
};
