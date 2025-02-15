function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5y7qGQQgtWl":
        Script1();
        break;
      case "5c4rPT9qcl5":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();

}

function Script2()
{
  var audio = document.getElementById('bgSong');

audio.src="musik.mp3";

audio.load();

audio.play();

}

