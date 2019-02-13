var ban2=document.getElementById("banel_d2");
var ajax5 = new XMLHttpRequest;
ajax5.open("get", "php/5.php", true);
ajax5.send(null);
ajax5.onreadystatechange = function () {
    if (ajax5.readyState === 4 && ajax5.status === 200) {
        var data=JSON.parse(ajax5.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<img src="${data[i].imgurl2}" >
						</dt>
						<dd><h3>${data[i].content}</h3><p>上映时间：${data[i].dataed}</p><span>${data[i].pingjia}</span></dd>
					</dl>
					<dl>
						<dt>
							<img src="${data[i].imgurl3}" >
							<i>2</i>
						</dt>
						<dd><h3>${data[i].content2}</h3><p>${data[i].pingjia2}</p></dd>
					</dl>
					<dl>
						<dt>
							<img src="${data[i].imgurl4}" >
							<i>3</i>
						</dt>
						<dd><h3>${data[i].content3}</h3><p>${data[i].pingjia3}</p></dd>
					</dl>
					<ul>
						<li><i>4</i><span>${data[i].name}</span><em>${data[i].kan}</em></li>
						<li><i>5</i><span>${data[i].name2}</span><em>${data[i].kan2}</em></li>
						<li><i>6</i><span>${data[i].name3}</span><em>${data[i].kan3}</em></li>
						<li><i>7</i><span>${data[i].name4}</span><em>${data[i].kan4}</em></li>
						<li><i>8</i><span>${data[i].name5}</span><em>${data[i].kan5}</em></li>
						<li><i>9</i><span>${data[i].name6}</span><em>${data[i].kan6}</em></li>
						<li><i>10</i><span>${data[i].name7}</span><em>${data[i].kan7}</em></li>
					</ul>`;
		}
		ban2.innerHTML=str;
     }
}