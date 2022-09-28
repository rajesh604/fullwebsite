import axios from 'axios';
import { image } from 'image-downloader';

function downloadImage(url, filepath) {
    return image({
       url,
       dest: filepath 
    });
}

let images = 'blur backgrounds';
// const getCircularReplacer = () => {
//   const seen = new WeakSet();
//   return (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//       if (seen.has(value)) {
//         return;
//       }
//       seen.add(value);
//     }
//     return value;
//   };
// };

function imageDownloader(i){
  axios.get(`https://api.unsplash.com/photos/random?query=${images}&client_id=-7SgCtgI-2BWGMQ2JgBz1a14DjuJJmRfHbLI2sy_IHU`)
  .then(function (response) {
    // console.log(response);
    // var hello = JSON.stringify(response,getCircularReplacer());
    // console.log(response);
    downloadImage(response['data']['urls']['full'],`C:/Users/bunnysunny/vs_code/myproject/public/${images.replace(" ","")}_${i}.jpg`)
    // ['data']['urls']['full']
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
};

for (let i = 0; i < 25; i++) {
  imageDownloader(i);
}