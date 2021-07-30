$(function(){
	
	let eGrupoDownload = {
		Brawser: 1,
		Antivirus: 2,
		Game: 3,
		Player: 4,
		Dev: 5
	}
	
	let eArquitetura = {
		x86: "32 bits",
		x64: "64 bits",
		portable: "portable",
		arm: "ARM"
	}
	
	var listaDownloads = [{
		id: 1,
		grupo: eGrupoDownload.Brawser,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/768px-Google_Chrome_icon_%28September_2014%29.svg.png",
		title: "Google Chrome",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: "https://chromeenterprise.google/intl/pt_br/browser/download/?utm_source=adwords&utm_medium=cpc&utm_campaign=2021-H2-chromebrowser-paidmed-paiddisplay-other-chromebrowserent&utm_term=downloadnow%23chrome-browser-download&utm_content=GCEJ&brand=GCEJ&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOMFDaXr6rqGlTvfgFDij4LiE4Fb_E6K9BqnzJrzAbMiXi0hSPJTEzBoChAIQAvD_BwE&gclsrc=aw.ds"
	},
	{
		id: 2,
		grupo: eGrupoDownload.Brawser,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/768px-Google_Chrome_icon_%28September_2014%29.svg.png",
		title: "Google Chrome",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: "https://chromeenterprise.google/intl/pt_br/browser/download/?utm_source=adwords&utm_medium=cpc&utm_campaign=2021-H2-chromebrowser-paidmed-paiddisplay-other-chromebrowserent&utm_term=downloadnow%23chrome-browser-download&utm_content=GCEJ&brand=GCEJ&gclid=CjwKCAjwo4mIBhBsEiwAKgzXOMFDaXr6rqGlTvfgFDij4LiE4Fb_E6K9BqnzJrzAbMiXi0hSPJTEzBoChAIQAvD_BwE&gclsrc=aw.ds"
	},
	{
		id: 3,
		grupo: eGrupoDownload.Brawser,
		icon: "https://cdn.worldvectorlogo.com/logos/mozilla-firefox-1.svg",
		title: "Mozilla Firefox",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 4,
		grupo: eGrupoDownload.Brawser,
		icon: "https://cdn.worldvectorlogo.com/logos/mozilla-firefox-1.svg",
		title: "Mozilla Firefox",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 5,
		grupo: eGrupoDownload.Brawser,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1024px-Opera_2015_icon.svg.png",
		title: "Opera",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 6,
		grupo: eGrupoDownload.Brawser,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Opera_2015_icon.svg/1024px-Opera_2015_icon.svg.png",
		title: "Opera",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 7,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://4.bp.blogspot.com/-2p9bqRAhxm8/XH_LtU2lWZI/AAAAAAAAIYc/PsVHyjQp5OcWtDjVH0EVrOeFGEFCKkt-wCK4BGAYYCw/s1600/icon%2Bavg%2B.png",
		title: "AVG",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 8,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://4.bp.blogspot.com/-2p9bqRAhxm8/XH_LtU2lWZI/AAAAAAAAIYc/PsVHyjQp5OcWtDjVH0EVrOeFGEFCKkt-wCK4BGAYYCw/s1600/icon%2Bavg%2B.png",
		title: "AVG",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 9,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://toppng.com/uploads/preview/avast-icon-transparent-avast-free-antivirus-icon-11553412697wzpivgtvwh.png",
		title: "Avast",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 10,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://toppng.com/uploads/preview/avast-icon-transparent-avast-free-antivirus-icon-11553412697wzpivgtvwh.png",
		title: "Avast",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 11,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://e7.pngegg.com/pngimages/245/298/png-clipart-panda-cloud-antivirus-panda-security-antivirus-software-computer-security-software-others-blue-angle-thumbnail.png",
		title: "Panda",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 12,
		grupo: eGrupoDownload.Antivirus,
		icon: "https://e7.pngegg.com/pngimages/245/298/png-clipart-panda-cloud-antivirus-panda-security-antivirus-software-computer-security-software-others-blue-angle-thumbnail.png",
		title: "Panda",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 13,
		grupo: eGrupoDownload.Player,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/VLC.svg/1200px-VLC.svg.png",
		title: "VLC Player",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 14,
		grupo: eGrupoDownload.Player,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/VLC.svg/1200px-VLC.svg.png",
		title: "VLC Player",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 15,
		grupo: eGrupoDownload.Game,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
		title: "Steam",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 16,
		grupo: eGrupoDownload.Game,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png",
		title: "Steam",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 17,
		grupo: eGrupoDownload.Game,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1200px-Epic_Games_logo.svg.png",
		title: "EPIC Games",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 18,
		grupo: eGrupoDownload.Game,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1200px-Epic_Games_logo.svg.png",
		title: "EPIC Games",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 19,
		grupo: eGrupoDownload.Game,
		icon: "https://cdn.worldvectorlogo.com/logos/origin-4.svg",
		title: "Origin",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 20,
		grupo: eGrupoDownload.Game,
		icon: "https://cdn.worldvectorlogo.com/logos/origin-4.svg",
		title: "Origin",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 21,
		grupo: eGrupoDownload.Programa,
		icon: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/winrar_logo.png",
		title: "Winrar",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 22,
		grupo: eGrupoDownload.Programa,
		icon: "https://cdn.freelogovectors.net/wp-content/uploads/2019/02/winrar_logo.png",
		title: "Winrar",
		description: "Navegador de internet",
		arquitetura: eArquitetura.x64,
		url: ""
	},
	{
		id: 23,
		grupo: eGrupoDownload.Programa,
		icon: "https://svgsilh.com/svg/1293306.svg",
		title: "Digitação",
		description: "Aprenda a digitar com as duas mãos",
		arquitetura: eArquitetura.portable,
		url: "https://download2267.mediafire.com/xqh5p6chnr0g/9i4q62qhemsgwr0/Aprenda+a+digitar.rar"
	},
	{
		id: 24,
		grupo: eGrupoDownload.Dev,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png",
		title: "Visual Studio 2019",
		description: "IDE de Desenvolvimento .NET (community)",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 25,
		grupo: eGrupoDownload.Dev,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Visual_Studio_Icon_2019.svg/1200px-Visual_Studio_Icon_2019.svg.png",
		title: "Visual Studio 2019",
		description: "IDE de Desenvolvimento .NET (community)",
		arquitetura: eArquitetura.x64,
		url: "https://download2267.mediafire.com/xqh5p6chnr0g/9i4q62qhemsgwr0/Aprenda+a+digitar.rar"
	},
	{
		id: 26,
		grupo: eGrupoDownload.Dev,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
		title: "VS Code",
		description: "Editor de código aberto desenvolvido pela Microsoft.",
		arquitetura: eArquitetura.x86,
		url: ""
	},
	{
		id: 27,
		grupo: eGrupoDownload.Dev,
		icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
		title: "VS Code",
		description: "Editor de código aberto desenvolvido pela Microsoft.",
		arquitetura: eArquitetura.x64,
		url: "https://download2267.mediafire.com/xqh5p6chnr0g/9i4q62qhemsgwr0/Aprenda+a+digitar.rar"
	}];
	
	
	let $domListaProgramas = $("#lista-programas").append("<div class='row mt-2' id='row-list'></div>");
	
	for (let i = 0; i < listaDownloads.length; i++) {
		let app = listaDownloads[i];
		let htmlCard = document.createElement('div');
		htmlCard.className = "col-3";
		htmlCard.innerHTML = `
			<div class="card mb-3">
				<div class="card-header text-center">
					<img src="${app.icon}" width="40" /><br />
					<small><span class="badge badge-${app.arquitetura === eArquitetura.x86 ? "info" : app.arquitetura === eArquitetura.x64 ? "danger" : "warning" }">${app.arquitetura}</span></small>
					<h4>
						${app.title}
					</h4>
				</div>
				<div class="card-body">
					<p class="text-justify">${app.description}</p>
				</div>
				<div class="card-footer">
					<button class="btn btn-primary w-100">Baixar</button>
				</div>
			</div>
		`;
				
		$("#row-list").append(htmlCard);
	}
});
