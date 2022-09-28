import axios from 'axios';
import { image } from 'image-downloader';
var path_dir = 'C:/Users/bunnysunny/vs_code/myproject/public/images/image4';

function downloadImage(url, filepath) {
    return image({
       url,
       dest: filepath 
    });
}

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
  axios.get('https://api.unsplash.com/photos/random?query=user&client_id=JepocpCrqFwszjD2YKeFIzqUIkjyn1w3wOt-cmTBeto')
  .then(function (response) {
    // console.log(response);
    // var hello = JSON.stringify(response,getCircularReplacer());
    // console.log(response);
    downloadImage(response['data']['urls']['full'],path_dir+`/blur_backgrounds${i}.jpg`)
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

for (let i = 0; i < 20; i++) {
  imageDownloader(i);
}