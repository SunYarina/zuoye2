var pan3=document.getElementById("panel_d3");
var ajax3 = new XMLHttpRequest;
ajax3.open("get", "php/3.php", true);
ajax3.send(null);
ajax3.onreadystatechange = function () {
    if (ajax3.readyState === 4 && ajax3.status === 200) {
        var data=JSON.parse(ajax3.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<p><span>${data[i].content}</span><i>${data[i].pingjia}</i></p>
							<img src="${data[i].imgurl2}" >
						</dt>
					</dl>`;
		}
		pan3.innerHTML=str;
     }
}