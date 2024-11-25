$(document).ready(function(){


  AOS.init();

  
 // 페이지가 완전히 로드된 후에 로딩 화면을 서서히 사라지게 하는 함수
 window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loadingScreen');

  // opacity를 0으로 설정해 페이드아웃 효과를 줍니다.
  loadingScreen.style.opacity = '0';

  // transition이 끝난 후 로딩 화면을 완전히 제거합니다.
  loadingScreen.addEventListener('transitionend', function() {
    loadingScreen.style.display = 'none';
  });
});


  //video
// 스크롤 이벤트 감지
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // 스크롤 위치
    const video = document.querySelector('.video'); // 비디오 요소 선택
    const maxScroll = 500; // 최대 스크롤 값
    
    // 스크롤 비율 계산
    const scale = Math.min(scrollY / maxScroll, 1); // 최대 1까지 증가
    const width = 440 + (1280 * scale); // 가로 크기 440에서 1750까지
    const height = width * (220 / 440); // 비율에 맞춰 세로 크기 조정

    // 비디오 크기 적용
    video.style.width = `${width}px`;
    video.style.height = `${height}px`;
    
    // 배경 위치를 스크롤에 맞춰 이동시키기
    const background = document.querySelector('.background');
    background.style.transform = `translateY(${scrollY * 0.5}px)`; // 배경 이동 속도 조정
  });


  gsap.utils.toArray(".item").forEach((item) => {
    let color = item.getAttribute("data-bgcolor");
  
    ScrollTrigger.create({
      trigger: item,
      start: "top 50%",
      end: "bottom 50%",
      markers: true,
  
      onEnter: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 1.4
        }),
      onEnterBack: () =>
        gsap.to("body", {
          backgroundColor: color,
          duration: 1.4
        })
    });
  });
  
  
});