/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */

const playlist = {
  name: "My amazing playlist",
  rating: 5,
  tracks: ["track-1", "track-2", "track-3"],
  changeName(newName) {
    console.log(newName);
    // playlist.name = newName // так ми не робимо!

    this.name = newName;

    // this отримує своє значення тільки під час виклику функції(методу), це значить, що ми не знаємо на що він посилається, поки не викличимо метод
    // this - контекст виклику функції, тобто своє значення він отримає від обʼєкту, який цей метод(або фукнцію) викликає. Тобто, те, що ви бачите до крапки під час виклику, то і буде вашим контекстом. Наприклад, якщо виклик буде таким: playlist.changeName("New playlist name");, то значенням this стане обʼєкт playlist, тому що він стоїть до крапки і він викликає цей метод.
  },
  addTrack(track) {
    this.tracks.push(track);
  },
  updateRating(newRating) {
    this.rating = newRating;
  },
  getTrackCount() {
    return this.tracks.length;
  },
};

// const playlist2 = {
//   name: "Second playlist",
//   rating: 2,
//   tracks: ["track-1.1", "track-2.1", "track-3.1"],
//   addTrack: playlist.addTrack,
// };

// playlist2.addTrack("new track 1111");

// console.log(playlist2);

playlist.changeName("New playlist name");

playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist.getTrackCount());

console.log(playlist);
