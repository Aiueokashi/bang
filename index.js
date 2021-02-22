<!DOCTYPE html>
<html lang="ja">
<head>
</head>
<body>
<script src="./bangbangboom-game.js"></script>
<script>
  let GameConfig = {
    judgeOffset: 20,
    visualOffset: 10,
    speed: 10.5,
    resolution: 1,
    noteScale: 1,
    barOpacity: 0.7,
    backgroundDim: 0.7,
    effectVolume: 1,
    showSimLine: true,
    laneEffect: true,
    mirror: false,
    beatNote: true
  }

  GameLoadConfig = {
    mapContent: loadMap, // some function that loads the map content
    musicSrc: "/assets/local/10001.mp3",
    backgroundSrc: "/assets/local/10001.jpg",
    skin: "/assets/skin/default",
    songName: "Ringing Bloom - Hard"
  }

  function GameStart() {
    const div = document.getElementById("app")
    const canvas = document.createElement("canvas")
    canvas.style.height = "100%"
    canvas.style.width = "100%"
    div.appendChild(canvas)

    const game = new BangGame.Game(canvas, GameConfig, GameLoadConfig)
    game.start()
    game.ondestroyed = () => {
      div.removeChild(canvas)
    }
  }
  GameStart()
</script>
</body>
</html>
