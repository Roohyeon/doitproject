<template>
  <section class="maincontents">
    <section class="mainbanner">
      <img src="/images/mainimg.png" alt="메인이미지">
    </section>
    <section class="newbook">
      <h1 class="maintit">
        새로 나온 도서<span>분야별로 새로 나온 도서를 만나 보세요</span>
      </h1>
      <div class="tapcontent">
        <div class="tap">
          <b-button variant="tap active">IT 전문서</b-button>
          <b-button variant="tap">업무 능력, 기타</b-button>
          <b-button variant="tap">사진 예술</b-button>
          <b-button variant="tap">데이터 과학</b-button>
        </div>

        <VueSlickCarousel class="mainslider" v-bind="settings">
          <div class="rollimg" v-for="(item,index) in Newbooks" :key="index">
            <span class="imgbox">
              <img :src="item.imgurl" alt="책 이미지" />
            </span>
            <strong v-html="item.name"></strong>
            <span class="textbox" v-html="item.subdec"></span>
          </div>
        </VueSlickCarousel>
      </div>
    </section>
    <section class="searchbook">
      <h1 class="maintit">
        도서 검색<span>찾고자 하는 도서명을 검색해 주세요</span>
      </h1>
    </section>
    <section class="bannermenu"></section>
    <section class="notice">
      <h1 class="maintit">공지 사항</h1>
    </section>
  </section>
</template>

<script>
  export default {
    data(){
      return {
        Newbooks: [
                { imgurl: "/images/books_image/book01.jpg", name: "Do it! 웹 사이트 따라 만들기", subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...", },
                { imgurl:'/images/books_image/book02.jpg', name:'Do it! 첫 알고리즘' , subdec:'160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안...' },
                { imgurl:'/images/books_image/book03.jpg', name:'Do it! C# 프로그래밍 입문' , subdec:'이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서...' },
                { imgurl:'/images/books_image/book04.jpg', name:'IT 5분 잡학사전' , subdec:'IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이...' },
                { imgurl:'/images/books_image/book05.jpg', name:'Do it! SQL 입문' , subdec:'20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의...' },
                { imgurl:'/images/books_image/book06.jpg', name:'Do it! 클론 코딩 줌' , subdec:'클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! ...' },
                { imgurl:'/images/books_image/book07.jpg', name:'Do it! 오토캐드 2023' , subdec:'5년 연속 베스트셀러! 평면도 그리기부터 치수 문제 해결까지!...' }
        ],
        settings: {
          slidesToShow: 5, //화면에 나타날 슬라이드 개수
          arrows: true, //버튼 사용 여부
          dots: false, //하단 버튼 사용 여부
          infinite:true, //슬라이드 반복 여부
          responsive:[
            //반응형 옵션
            {
              breakpoint: 767, //브라우저 크기가 767 이하일 때
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 414, //브라우저 크기가 464 이하일 때
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        },
      };
    },
  };
</script>