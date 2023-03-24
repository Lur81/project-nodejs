const cloudinary = require('cloudinary').v2;

const deleteFile = (url) => {
    const imgSplited = url.split('/');  //convierto mi imagen en un array con cada elemento separado por /
    const nameSplited = imgSplited[imgSplited.length - 1].split('.'); //convierto en nombre.tipo en array con el splited
    const folder = imgSplited[imgSplited.length - 2]; //cojo el penultimo elemento

    const imgToDelete = `${folder}/${nameSplited[0]}`;
    if(imgToDelete !== "dragonBall/pegatina-bola-de-dragon-4-goku_qtqr41"){
        cloudinary.uploader.destroy(imgToDelete, ()=> console.log('imagen borrada en cloudinary'));
    }
}

module.exports = {deleteFile};