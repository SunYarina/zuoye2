var pan2=document.getElementById("panel_d2");
var ajax2 = new XMLHttpRequest;
ajax2.open("get", "php/2.php", true);
ajax2.send(null);
ajax2.onreadystatechange = function () {
    if (ajax2.readyState === 4 && ajax2.status === 200) {
        var data=JSON.parse(ajax2.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<p><span>${data[i].content}</span></p>
						</dt>
						<dd>
							<p><span>${data[i].pingjia}</span>人想看</p>
							<em>预告片</em>
							<a href="">预 售</a>
						</dd>
						<h5>${data[i].shangying}</h5>
					</dl>`;
		}
		pan2.innerHTML=str;
     }
}