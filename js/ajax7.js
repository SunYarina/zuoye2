var img=document.getElementsByClassName("img")[0];
var ajax7 = new XMLHttpRequest;
ajax7.open("get", "php/7.php", true);
ajax7.send(null);
ajax7.onreadystatechange = function () {
    if (ajax7.readyState === 4 && ajax7.status === 200) {
        var data=JSON.parse(ajax7.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<img src="${data[i].imgurl2}" >
						</dt>
						<dd><h3>${data[i].content}</h3><p>${data[i].pingjia}</p></dd>
					</dl>`;
		}
		img.innerHTML=str;
     }
}