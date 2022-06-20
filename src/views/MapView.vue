<template>
  <div>
    <div ref="map" style="width: 100%; height: 94.9vh"></div>
  </div>
</template>

<script>
export default {
  props: {
    result: Array,
  },
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

    // 마커 이미지의 이미지 주소입니다
    let imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      let imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      let marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      // console.log(marker);
      marker;
    }
  },
};
</script>

<style></style>
