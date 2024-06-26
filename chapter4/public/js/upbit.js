// UPBIT API 활용
//비트코인, 이더리움 현재가 테이블에 적용
function fetchupbitData() {
    fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC,KRW-ETH")
    .then((Response) => Response.json())
    .then((json) => {
        const tBody = document.querySelector("#tBody");
        tBody.innerHTML = " ";
     
        for (var i = 0; i < json.length; i++) {
            switch (json[i].market) {
                case "KRW-BTC":
                    tBody.innerHTML += `<tr>
                        <th scope="row">1</th>
                        <td>비트코인</td>
                        <td>BTC</td>
                        <td>${json[i].trade_price}</td>
                </tr>`;
                break;
                case "KRW-ETH":
                    tBody.innerHTML += `<tr>
                        <th scope="row">2</th>
                        <td>이더리움</td>
                        <td>ETH</td>
                        <td>${json[i].trade_price}</td>
                </tr>`;
                break;
            }

            // if (json[i].market === 'KRW-BTC') {
            //     console.log('비트코인');
            // } else if (json[i].martket === 'KRW-ETH') {
            //      console.log('이더리움');
            // }
        }
        console.json(json);
    });
}

fetchupbitData();
setInterval(fetchupbitData, 5000);


