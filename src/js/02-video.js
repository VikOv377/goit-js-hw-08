import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

/*Ініціалізація існуючого плеєра*/

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_CURRENT_TIME_KEY = "videoplayer-current-time";

/* Використання методу on, відсліджування часу оновлення програвання timeupdate,
зберігання часу програвання в localStorage. */

player.on('timeupdate', throttle(onUpdatedTime, 1000));

function onUpdatedTime ({ seconds }) {
    localStorage.setItem(STORAGE_CURRENT_TIME_KEY, seconds)
  };

/*Використання методу setCurrentTime() при перезгрузці сторінки, для того щоб відео розпочиналось зі 
збереженого моменту */

const savedCurrentTime = localStorage.getItem(STORAGE_CURRENT_TIME_KEY);
const initialTime = 0;

if (savedCurrentTime !== null) {
  player
  .setCurrentTime(savedCurrentTime);
} else {
  return initialTime;
};

/*------Запасний варіант без setCurrentTime в USEFUL.md-----*/