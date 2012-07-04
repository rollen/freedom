function ClientApplicationController(httpFileResponseWriter, fileInfoService, folderpath){
  var object = {};
  object.index = function(){
    var filename = 'index.html'
    var fileInfo = fileInfoService(fullyQualifiedPathToIndex(), filename);
    httpFileResponseWriter.writeToResponseAndEnd(fileInfo);
  }

  function fullyQualifiedPathToIndex(){
    return folderpath.join(folderpath.filepath('client'), 'client');
  }
  return object;
}

module.exports = ClientApplicationController;
