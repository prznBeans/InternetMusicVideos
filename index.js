const { Client } = require("youtubei");
const youtube = new Client();

async function ytvidsearch() {
    var seed = prompt('Input seed artist')
    const videos = await youtube.search(seed + " Music Video", {
        type: "video"
    });
    console.log(videos)
}


window.onload = function() {
    document.getElementById('startbutton').addEventListener('click', ytvidsearch)
  };