<template>
  <Subpage :pagetit="'도서 소개'">
    <div class="bookpage">
      <VueSlickCarousel 
        class="subpageslider" 
        v-bind="settings"
        @init="handleInit"
        ref="carousel"
      >
        <div 
          class="rollimg"
          :class="{active: index === tabIndex}"
          v-for="(item,index) in Newbooks" 
          :key="index"
          @click="Clicklink(index)"
        >
          <span class="imgbox">
            <img :src="item.imgurl" alt="책 이미지" />
          </span>
          <strong v-html="item.name"></strong>
        </div>
      </VueSlickCarousel>
      <component
        :is="componentslist[tabIndex]"
        :bookUrl="Newbooks[tabIndex].imgurl"
        :bookName="Newbooks[tabIndex].name"
        :bookDec="Newbooks[tabIndex].dec"
      >
      </component>
    </div>
  </Subpage>
</template>

<script>
import Subpage from '@/layout/components/Subpage.vue';
import BookDetail1 from './BookDetail1.vue';
import BookDetail2 from './BookDetail2.vue';
import BookDetail3 from './BookDetail3.vue';
import BookDetail4 from './BookDetail4.vue';
import BookDetail5 from './BookDetail5.vue';
import BookDetail6 from './BookDetail6.vue';
import BookDetail7 from './BookDetail7.vue';
import BookDetail8 from './BookDetail8.vue';
import BookDetail9 from './BookDetail9.vue';
import BookDetail10 from './BookDetail10.vue';

  export default{
    components: {
      Subpage,
      BookDetail1,
      BookDetail2,
      BookDetail3,
      BookDetail4,
      BookDetail5,
      BookDetail6,
      BookDetail7,
      BookDetail8,
      BookDetail9,
      BookDetail10
    },
    mounted(){
      if(!this.$route.query.tabId) {
        this.tabIndex = 0;
      } else {
        this.tabIndex = Number(this.$route.query.tabId);
      }
    },
    data(){
      return{
        Newbooks:[
          { imgurl:"images/books_image/book01.jpg", name: "Do it! 웹 사이트 따라 만들기", subdec: "HTML, CSS, 자바스크립트 문법서는 공부했지만, 웹 사이트를...", },
          { imgurl:'images/books_image/book02.jpg', name:'Do it! 첫 알고리즘' , subdec:'160가지 그림과 스토리텔링으로 이해한다! 자료구조부터 보안...' },
          { imgurl:'images/books_image/book03.jpg', name:'Do it! C# 프로그래밍 입문' , subdec:'이 책은 기본이 충실하면서도 프로젝트 실습까지 챙긴 C# 입문서...' },
          { imgurl:'images/books_image/book04.jpg', name:'IT 5분 잡학사전' , subdec:'IT 분야 직장에서 일하는 나 요즘 주변에 이상한 사람이...' },
          { imgurl:'images/books_image/book05.jpg', name:'Do it! SQL 입문' , subdec:'20년간 글로벌 기업에서 데이터베이스 전문가로 근무한 저자의...' },
          { imgurl:'images/books_image/book06.jpg', name:'Do it! 클론 코딩 줌' , subdec:'클론 코딩 시리즈 3탄, 노마드 코더의 동영상 무료 공개! ...' },
          { imgurl:'images/books_image/book07.jpg', name:'Do it! 오토캐드 2023' , subdec:'5년 연속 베스트셀러! 평면도 그리기부터 치수 문제 해결까지!...' },
          { imgurl:"images/books_image/book08.jpg", name: "된다! 엑셀 수식 & 함수", subdec: "매일 쓰는 엑셀이 매번 어렵게 느껴지는 건 너무 많은 기능을...", },
          { imgurl:'images/books_image/book09.jpg', name:'일 잘하는 디자이너' , subdec:'일 잘하는 디자이너가 되는 69가지 방법으로 자신을 지키면서 일...' },
          { imgurl:'images/books_image/book10.jpg', name:'된다! 아이패드 하루 24시간' , subdec:'아이패드로 하루 24시간, 365일을 알차게 보내는 방법..' },
        ],
        settings: {
          slidesToShow: 8, //화면에 나타날 슬라이드 개수
          arrows: true, //버튼 사용 여부
          dots: false, //하단 버튼 사용 여부
          infinite:true, //슬라이드 반복 여부
          responsive:[
            //반응형 옵션
            {
              breakpoint: 1023, //브라우저 크기가 767 이하일 때
              settings: {
                slidesToShow: 5,
              },
            },
            {
              breakpoint: 767, //브라우저 크기가 464 이하일 때
              settings: {
                slidesToShow: 2,
              },
            },
          ],
        },
        componentslist: [
          BookDetail1,BookDetail2,BookDetail3,BookDetail4,
          BookDetail5,BookDetail6,BookDetail7,BookDetail8,BookDetail9,BookDetail10
        ],
        tabIndex: 0,
      }
    },
    methods: {
      Clicklink(tabIndex){
        if(!(this.$route.query.tabId === tabIndex)) {
          this.tabIndex = tabIndex;
          return this.$router.push("/book?tabId=" + tabIndex);
        }
      },
      handleInit(){
        this.$nextTick(() => {
          this.$refs.carousel.goTo(this.tabIndex);
        });
      }
    },
  };
</script>