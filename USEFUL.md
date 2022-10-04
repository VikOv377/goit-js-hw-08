Запасний код для VIMEO плеєра:

window.onload = () => {
  let video = document.querySelector(iframe)
   /*Якщо в localStorage є значення currentTime, присвоюємо йому значення video.currentTime*/
  if(localStorage.currentTime) {
      video.currentTime = localStorage.currentTime
  };
   /*При кожній зміні video.currentTime записуємо значення в localStorage.currentTime*/
  video.addEventListener('timeupdate', () => 
     localStorage.currentTime = video.currentTime
     )
  }; 

  ЗАМІТКИ:
  
 - node -v - перевірка версії Node.js
 - pwd - перевірка місцезнаходження
 - ls - список папок чи файлів в даному місці
 - mkdir nameOfFolder - створення нової папки
 - cd nameOfFolder - зайти в папку
 - сd .. - вийти з папки
 - touch nameOfFile - створення файлу
 - node index.js - виконання файлу
 - rm -rf nameofFolder - видалення папки

 Клонування проекту через Термінал:
 - копіюєм шлях до проекту на Гітхабі
 - в консолі пишемо git clone adressOfProjectOnGithub renameFolderLikeYouNeed
 - заходимо в папку cd nameOfRenamedFolder
 - створюємо новий репо на Гітхабі і копіюємо адресу http://github.com/xxx/theSameNameLikeRenamedFolder.git
 - прив'язуємо папку до свого нового репозиторію на Гітхабі git remote set-url origin http://github.com/xxx/theSameNameLikeRenamedFolder.git
 - перевіряємо прив'язку до свого репо git remote -v
 - заходимо в папку в терміналі cd nameOfFolder
 - в папці package.json заміняеємо поля homepage (адреса має бути з io) і scripts/build на свої
 - додаємо в коміт всі файли, в яких була зміна через add . (якщо замість крапки написани ім'я файлу, то в репо відправляться зміни тільки в даному файлі)  
 - створюємо коміт, називаємо його git commit -m 'nameOfCommit'
 - пушимо в Гітхаб git push 
 - в файлі .github\workflows записано, що робиться на Гітхабі
 - встановлюємо всі залежності за допомогою npm install
 - щоб розпочати працювати локально виконуємо npm start  
 - запускається localhost (для того, щоб дати іншу назву порту, в файлі package.json в scropts/start пишемо -p nameOfPort)

