var ban=document.getElementById("banel_d");
var ajax4 = new XMLHttpRequest;
ajax4.open("get", "php/4.php", true);
ajax4.send(null);
ajax4.onreadystatechange = function () {
    if (ajax4.readyState === 4 && ajax4.status === 200) {
        var data=JSON.parse(ajax4.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<img src="${data[i].imgurl2}" >
						</dt>
						<dd><h3>${data[i].content}</h3><p>${data[i].pingjia}</p></dd>
					</dl>
					<ul>
						<li><i style="color:#EF4238;">2</i><span>${data[i].name}</span><em>${data[i].kan}</em></li>
						<li><i style="color:#EF4238;">3</i><span>${data[i].name2}</span><em>${data[i].kan2}</em></li>
						<li><i>4</i><span>${data[i].name3}</span><em>${data[i].kan3}</em></li>
						<li><i>5</i><span>${data[i].name4}</span><em>${data[i].kan4}</em></li>
						<li><i>6</i><span>${data[i].name5}</span><em>${data[i].kan5}</em></li>
						<li><i>7</i><span>${data[i].name6}</span><em>${data[i].kan6}</em></li>
						<li><i>8</i><span>${data[i].name7}</span><em>${data[i].kan7}</em></li>
						<li><i>9</i><span>${data[i].name8}</span><em>${data[i].kan8}</em></li>
						<li><i>10</i><span>${data[i].name9}</span><em>${data[i].kan9}</em></li>
					</ul>`;
		}
		ban.innerHTML=str;
     }
}