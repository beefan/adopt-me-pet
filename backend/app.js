const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080
const youtubeJsonPackage = {
    "type": "video",
    "thumbnail_url": "https://i.ytimg.com/vi/7Zxm2wcgeYI/hqdefault.jpg",
    "author_name": "The Dodo",
    "provider_url": "https://www.youtube.com/",
    "title": "Dogs React To Being Adopted and Rescued: Happy Dog Compilation | The Dodo",
    "height": 270,
    "version": "1.0",
    "width": 480,
    "html": "<iframe width=\"480\" height=\"270\" src=\"https://www.youtube.com/embed/7Zxm2wcgeYI?feature=oembed\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
    "thumbnail_height": 360,
    "provider_name": "YouTube",
    "author_url": "https://www.youtube.com/user/TheDodoSite",
    "thumbnail_width": 480
  }

app.use(cors())
app.options('*', cors())
app.get('/', (req, res) => res.send(youtubeJsonPackage))
app.listen(port, () => console.log(`dummy backend running at http://localhost:${port}`))