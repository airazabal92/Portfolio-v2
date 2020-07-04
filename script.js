$(document).ready(function () {
  new TypeIt("#subHeader", {
    strings: ["Amanda Irazabal", "a developer", "a designer"],
    speed: 150,
    breakLines: false,
    loop: true,
    nextStringDelay: [3000, 1000],
    cursor: false,
  }).go();
});
