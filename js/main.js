var downloadURL = {
    clientPc: '../BANDIZIP-SETUP-KR.EXE',
    clientMobile: '../BANDIZIP-SETUP-KR.EXE',
    adminPc: '../BANDIZIP-SETUP-KR.EXE',
    adminMobile: '../BANDIZIP-SETUP-KR.EXE'
}

// SETTING DOWNLOAD URL
setDownloadLink();

function setDownloadLink() {
    var clientPc = document.querySelector('.client__pc');
    clientPc.href = downloadURL.clientPc;

    var clientMobile = document.querySelector('.client__mobile');
    clientMobile.href = downloadURL.clientMobile;

    var adminPc = document.querySelector('.admin__pc');
    adminPc.href = downloadURL.adminPc;

    var adminMobile = document.querySelector('.admin__mobile');
    adminMobile.href = downloadURL.adminMobile;
}


// function getBlob(url, callback) {

//     var xhr = new XMLHttpRequest();
    
//     xhr.open("GET", url);
    
//     xhr.responseType = "blob"; // Blob 형식으로 부탁합니다!
    
//     xhr.onload = function() {
    
//       callback(xhr.response); // blob을 콜백으로 전달한다 
    
//     } 
    
//     xhr.send(null);
    
//     }
//     getBlob('./BANDIZIP-SETUP-KR.EXE', cb);
    
//     function cb(obj) {
//         // console.log(obj);
//         // var blobObject = new Blob(obj); 
//         window.navigator.msSaveOrOpenBlob(obj, 'BANDIZIP-SETUP-KR.EXE'); // Now the user will have the option of clicking the Save button and the Open button.
//     alert('File save request made using msSaveOrOpenBlob() - note the two "Open" and "Save" buttons below.');
//     }
//     //     var blobObject = new Blob(["I scream. You scream. We all scream for ice cream."]); 
    
//     // window.navigator.msSaveBlob(blobObject, 'msSaveBlob_testFile.txt'); // The user only has the option of clicking the Save button.
//     // alert('File save request made using msSaveBlob() - note the single "Save" button below.');
    
//     // var fileData = ["Before you insult a person, walk a mile in their shoes. That way, when you insult them, you'll be a mile away - and have their shoes."];
//     // blobObject = new Blob(fileData);
//     // window.navigator.msSaveOrOpenBlob(blobObject, 'msSaveBlobOrOpenBlob_testFile.txt'); // Now the user will have the option of clicking the Save button and the Open button.
//     // alert('File save request made using msSaveOrOpenBlob() - note the two "Open" and "Save" buttons below.');