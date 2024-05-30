const express = require("express");
const app = express();
const qs = require("qs");
const port = 3000;

app.set("view engine", "ejs");
app.set("query parser", function (str) {
  return qs.parse(str, {
    /* custom options */
  });
});

app.use(express.static("public"));

app.get("/data", function (req, res) {
  res.json({ name: "송강", age: 28, address: "서울" });
});
//인증 된 사용자인지 체크
//요청 확인
//db에서 데이터를 가져온다'
//가져온 데이터를 json으로 변환한다.

app.get("/champions", function (req, res) {
  /*var champions = [
    "카이사",
    "닐라",
    "징크스"
  ]*/
  res.json({ champions: champions });
});

app.get("/champions/:championIndex", (req, res) => {
  /*var champions =[
    "카이사",
    "닐라",
    "징크스"
  ]*/
  res.json({ champions: champions[req.params.championIndex] });
});

app.get("/flowers", (req, res) => {
  /*var flowers =[
  "개나리",
  "진달래",
  "무궁화"
  ]*/
  res.json({ flowers: flowers });
});

app.get("/flowers/:flowerIndex", (req, res) => {
  var flowers = ["개나리", "진달래", "무궁화"];
  res.json({ flowers: flowers[req.params.flowerIndex] });
});

var champions = ["카이사", "닐라", "징크스"];

var flowers = [
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
    name: "무궁화",
    color: "핑쿠",
    season: "봄",
  },
];

app.get("/flowers2", (req, res) => {
  console.log(req.query);
  // query에서 color 값이 있을 경우, 가져와서 Flowers 목록에서 일치하는 color를 가진 항목만 반환
  if (req.query.color !== undefined) {
    const filteredFlowers = flowers.filter(
      (flower) => flower.color === req.query.color
    );
    res.json({ flowers: filteredFlowers });
  } else {
    /* var list = [];
    for(var i = 0; i<flowers.lwngth; i++) {
      list.push(flowers[i].name);
    }*/

    //var list = flowers.map(flower => flower.name)

    /*flowers.map(function (flower) {
      return flower.name;
    } 셋다 같은 뜻이래*/

    //res.json({ flowers: list })
    res.json({ flowers: flowers.map((flower) => flower.name) });
  }
});

var flowers2 = [
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
];

app.get("/example1", (req, res) => {
  res.render("index", { name: "한강;" });
});

app.get("/example2", (req, res) => {
  res.render("index", { name: "이재명" });
});

app.get("/example3", (req, res) => {
  res.render("index", { name: "한동훈" });
});

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/2', (req, res) => {
//     res.send('안녕!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

/*API란
클라이언트(브라우저) <-http-> 서버
모바일,pc등이 생겼다 API화 해서 주고받는다.
url은 서버가 만들어낸 url기준으로 찾아낸다.*/
// 옵션을 넣을 때 /flowers/id/?key=value&key=value로 이루어진다.
