var container = document.getElementById('container');
var animItem = bodymovin.loadAnimation({
  wrapper: container,
  animType: 'svg',
  loop: true,
  path: 'animation.json'
});