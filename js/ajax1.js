var pan1=document.getElementById("panel_d");
var ajax = new XMLHttpRequest;
ajax.open("get", "php/1.php", true);
ajax.send(null);
ajax.onreadystatechange = function () {
    if (ajax.readyState === 4 && ajax.status === 200) {
        var data=JSON.parse(ajax.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<img src="${data[i].imgurl}" >
							<p><span>${data[i].content}</span><i>${data[i].pingjia}</i></p>
							<img src="${data[i].imgurl2}" >
						</dt>
						<dd>购 票</dd>
					</dl>`;
		}
		pan1.innerHTML=str;
     }
}