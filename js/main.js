var downloadURL = {
    clientPc: '../BANDIZIP-SETUP-KR.EXE',
    clientMobile: '../BANDIZIP-SETUP-KR.EXE',
    adminPc: '../BANDIZIP-SETUP-KR.EXE',
    adminMobile: '../BANDIZIP-SETUP-KR.EXE'
}

var client = document.querySelector('.client');
var admin = document.querySelector('.admin');

if( client !== null) {
    setClientDownloadLink();
} else if( admin !== null) {
    setAdminDownloadLink();
}


function setClientDownloadLink() {
    var clientPc = document.querySelector('.client__pc');
    clientPc.href = downloadURL.clientPc;

    var clientMobile = document.querySelector('.client__mobile');
    clientMobile.href = downloadURL.clientMobile;
}

function setAdminDownloadLink() {
    var adminPc = document.querySelector('.admin__pc');
    adminPc.href = downloadURL.adminPc;

    var adminMobile = document.querySelector('.admin__mobile');
    adminMobile.href = downloadURL.adminMobile;
}