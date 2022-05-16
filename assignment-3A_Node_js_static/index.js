const express = require('express'); // Importing expresses 
const app = express(); //  creating object of Express
const port = 4000; // on this port application will run

//to make pages .html .txt .jpeg .mp3 .mp4  static content 
app.use(express.static("public"));//in node js there is public folder making that public folder as static( the file also contain index.html)

app.listen(port, () => { /// this jar tya post var request ali tar listen 
    console.log(`app started on port ${port}`); ///ani start pan kar
})