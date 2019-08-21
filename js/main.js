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

var mobileGuide = document.querySelector('.mobile__title');

mobileGuide.addEventListener('click', appendMobileGuide);

function appendMobileGuide() {

    var mobileWrap = document.querySelector('.mobile-wrap');
    var guideWrap = document.querySelector('.guide-wrap');
    if( guideWrap !== null) {
        mobileWrap.innerHTML = '';
        return;
    }
    mobileWrap.innerHTML = 
    '<div class="guide-wrap"><div class="guide-image-box"><img class="guide-image" src="./image/01.jpg" alt=""></div><div class="guide-image-box"><img class="guide-image" src="./image/02.jpg" alt=""></div><p class="guide-paragraph">1. 삼성인터넷으로 pball.biz에 접속하여 MOBILE 버튼을 눌러 다운로드합니다.</p></div><div class="guide-wrap"><div class="guide-image-box"><img class="guide-image" src="./image/03.jpg" alt=""></div><div class="guide-image-box"><img class="guide-image" src="./image/04.jpg" alt=""></div><p class="guide-paragraph">2. 다운로드가 완료 후 상단 알림창 파일 또는 화면의 파일 열기 버튼을 누릅니다.</p></div><div class="guide-wrap"><div class="guide-image-box"><img class="guide-image" src="./image/05.jpg" alt=""></div><div class="guide-image-box"><img class="guide-image" src="./image/06.jpg" alt=""></div><p class="guide-paragraph">3. 경고알림창이 표시되면 설정 버튼을 눌러 허용 버튼을 활성화 상태로 바꿔줍니다.</p></div><div class="guide-wrap"><div class="guide-image-box"><img class="guide-image" src="./image/07.jpg" alt=""></div><div class="guide-image-box"><img class="guide-image" src="./image/08.jpg" alt=""></div><p class="guide-paragraph">4. 애플리케이션 목록에서 내 파일을 누른 뒤 최근 파일 목록 또는 다운로드 항목에서 PBALL.apk 파일을 누릅니다.</p></div><div class="guide-wrap"><div class="guide-image-box"><img class="guide-image" src="./image/09.jpg" alt=""></div><div class="guide-image-box"><img class="guide-image" src="./image/10.jpg" alt=""></div><p class="guide-paragraph">5. 경고알림창이 표시되면 설정 버튼을 눌러 허용버튼을 활성화 상태로 바꿔준 뒤 4번 항목을 다시 진행합니다.</p></div>';
    
}