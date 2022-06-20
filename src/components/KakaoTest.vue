<!-- <template>
  <div>
    <div class="wrap">
      <div class="info">
        <div class="title">
          카카오 스페이스닷원
          <div class="close" @click="closeOverlay()" title="닫기"></div>
        </div>
        <div class="body">
          <div class="img">
            <img
              src="https://cfile181.uf.daum.net/image/250649365602043421936D"
              width="73"
              height="70"
            />
          </div>
          <div class="desc">
            <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
            <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
            <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                class="link"
                >홈페이지</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {},
  mounted() {
    const { kakao } = window;
    let mapContainer = this.$refs.map, // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.362, 126.5336), // 지도의 중심좌표
        // 33.362,126.5336 한라산 위,경도
        level: 9, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
    // console.log(map);

    let positions = [];
    for (let i = 0; i < this.result.length; i++) {
      positions[i] = {
        title: this.result[i].oleumKname,
        latlng: new kakao.maps.LatLng(this.result[i].y, this.result[i].x),
      };
    }

    for (let i = 0; i < positions.length; i++) {
      let content = `<div>
    <div class="wrap">
      <div class="info">
        <div class="title">
          카카오 스페이스닷원
          <div class="close" @click="closeOverlay()" title="닫기"></div>
        </div>
        <div class="body">
          <div class="img">
            <img
              src="https://cfile181.uf.daum.net/image/250649365602043421936D"
              width="73"
              height="70"
            />
          </div>
          <div class="desc">
            <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
            <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
            <div>
              <a
                href="https://www.kakaocorp.com/main"
                target="_blank"
                class="link"
                >홈페이지</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
      let imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

      let marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title: positions[i].title,
        image: imageSrc, // 마커 이미지
      });

      var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map,
        position: marker.getPosition(),
      });
      kakao.maps.event.addListener(marker, "click", function () {
        overlay.setMap(map);
      });
    }
  },
};
</script>

<style>
.wrap {
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 18px;
  font-weight: bold;
}
.info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
}
.info .close:hover {
  cursor: pointer;
}
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
.info:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.info .link {
  color: #5085bb;
}
</style> -->
