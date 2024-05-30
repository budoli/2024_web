const flowers = [
  {
    name: "개나리",
    color: "노랑색",
    season: "봄",
  },
  {
    name: "철쭉",
    color: "보라",
    season: "봄",
  },
  {
    name: '할미꽃',
    color: '파랑',
    season: "여름",
  }
];
// 서버로 부터 데이터를 가져와 HTML을 그에 맞게 편집
// TODO : http://127.0.0.1:3000/flowers API를 통해 데이터 가져오기
fetch("http://127.0.0.1:3000/flowers", {method:'GET'})
  .then((response) => response.json())
  .then((json) => {
    // 가져온데이터 (json)에 담기 flowers array 길이만큼 반복해서 카드 순서대로 데이터를 넣어준다.
    for (var i = 0; i < json.flowers.length; i++) {
      const pElenment = document.querySelector('#card' + (i + 1) + '-text');
      pElenment.innerHTML = flowers[i].name;
    }

    console.log(json);
  });

const pElenment = document.querySelector("#card1-text");
pElenment.innerHTML = flowers[0].name;
