var cdl=document.getElementById("con_dl");
var ajax9 = new XMLHttpRequest;
ajax9.open("get", "php/9.php", true);
ajax9.send(null);
ajax9.onreadystatechange = function () {
    if (ajax9.readyState === 4 && ajax9.status === 200) {
        var data=JSON.parse(ajax9.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`
					<dl>
						<dt>
							<i>${data[i].list}</i>
							<img src="${data[i].imgurl}" >
							<img src="${data[i].imgurl2}" >
						</dt>
						<dd>
							<div>
								<h3>${data[i].content}</h3>
								<h4>${data[i].zhuyan}</h4>
								<p>${data[i].time}</p>
							</div>
							<h5>${data[i].pingjia}</h5>
						</dd>
					</dl>`;
		}
		cdl.innerHTML=str;
     }
}