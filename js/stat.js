'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 110;
var CLOUD_Y = 20;
var GAP = 10;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - GAP, CLOUD_Y - GAP, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 4, CLOUD_Y);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 4, CLOUD_Y + GAP * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(
        Math.round(times[i]),
        CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i,
        CLOUD_Y + 40 + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime
    );

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(236, ' + Math.round(Math.random(0, 100) * 100) + '%, 50%)';
    }

    ctx.fillRect(
        CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i,
        CLOUD_Y + 60 + BAR_HEIGHT - BAR_HEIGHT * times[i] / maxTime,
        BAR_WIDTH,
        BAR_HEIGHT * times[i] / maxTime
    );

    ctx.fillStyle = '#000';
    ctx.fillText(
        names[i],
        CLOUD_X + BAR_GAP * (i + 1) + BAR_WIDTH * i,
        CLOUD_HEIGHT - CLOUD_Y
    );
  }
};
