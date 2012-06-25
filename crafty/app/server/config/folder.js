function FolderPath($folderpath){
   $folderpath.$folder('client', $folderpath.$resolve(__dirname, '../../client/'));
}

module.exports = FolderPath;
