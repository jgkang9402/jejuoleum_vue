<template>
  <div>
    <div id="map" style="width: 600px; height: 350px"></div>
  </div>
</template>

<script>

export default {
  props: {
    xy: Array,
  },
  mounted() {
    const { kakao } = window;
    // console.log("좌표는", this.xy);
    let mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(this.xy[1], this.xy[0]), // 지도의 중심좌표
        // 33.362,126.5336 한라산 위,경도
        level: 4, // 지도의 확대 레벨
      };

    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    let map = new kakao.maps.Map(mapContainer, mapOption);
    console.log(map);

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "카카오",
        latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      },
      {
        title: "생태연못",
        latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      },
      {
        title: "텃밭",
        latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];
    console.log(positions);
  },
};
</script>

<style>
#map {
  width: "100%";
  height: "94.9vh";
}
</style>
