function FolderPath($folderpath){
   $folderpath.$folder('client', $folderpath.$resolve(__dirname, '../../'));
}

module.exports = FolderPath;
