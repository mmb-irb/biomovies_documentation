$(document).ready(function() {
	var path = '';
	
	if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../index.html') path = '../';
	else if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../../index.html') path = '../../';
		
	$('.wy-side-nav-search .icon.icon-home').html('<img src="' + path + '_static/logo_white.png" class="logo" alt="Logo" style="width:110px;">');
	$('.wy-breadcrumbs .icon.icon-home').html('biomovies');

	// releases
	if($( "h1" ).text().indexOf('Releases') != -1) {
		var count = 1;
		// get data from github releases
		fetch('https://api.github.com/repos/mmb-irb/biomovies-app/releases?per_page=100')
			.then(res => res.json())
			.then(json => {

				json = json.reverse();

				$( ".toctree-l1.current" ).append(`<ul></ul>`);

				// markdown headings start at h3, below the h2 of each release
				marked.use({
					walkTokens(token) {
						if(token.type === 'heading') token.depth = Math.max(token.depth, 3)
					}
				})

				json.forEach(item => {

					// format date
					let publish_date = ''

					// format body
					const lines = item.body.split(/\r?\n/)

					// get type from first line
					let type = ''
					if(lines[0].indexOf('Pre-alpha') !== -1) type = 'Pre-alpha'
					else if(lines[0].indexOf('Alpha') !== -1) type = 'Alpha'
					else if(lines[0].indexOf('Beta') !== -1) type = 'Beta'
					else if(lines[0].indexOf('Release') !== -1) type = 'Release'
					else type = 'Unknown'

					const body_lines = lines.filter((line, index) => {
						// get date from body: a line like [dd/mm/yyyy]
						const date = line.match(/^\s*\[([^\]]+)\]\s*$/)
						if(date) {
							publish_date = date[1]
							return false
						}
						// a first line that is only a heading (e.g. "## Alpha release") repeats the type
						if(index == 0 && /^\s*#/.test(line)) return false
						return true
					})

					// render markdown
					const body = marked.parse(body_lines.join('\n'))

					// get assets
					let assets = ''
					let label = ''
					let icon = ''
					item.assets.forEach(asset => {
						if(asset.name.indexOf('dmg') !== -1 && asset.name.indexOf('arm64') !== -1) {
							label = 'Apple Silicon'
							icon = '<i class="fa-brands fa-apple"></i>'
						}
						else if(asset.name.indexOf('dmg') !== -1 && asset.name.indexOf('arm64') === -1) {
							label = 'Apple Universal'
							icon = '<i class="fa-brands fa-apple"></i>'
						}
						else if(asset.name.indexOf('exe') !== -1) {
							label = 'Windows'
							icon = '<i class="fa-brands fa-windows"></i>'
						}
						else if(asset.name.indexOf('AppImage') !== -1) {
							label = 'Linux AppImage'
							icon = '<i class="fa-brands fa-linux"></i>'
						} else if(asset.name.indexOf('deb') !== -1) {
							label = 'Linux Deb'
							icon = '<i class="fa-brands fa-linux"></i>'
						}

						assets += `<a class="btn btn-primary" data-toggle="collapse" href="${asset.browser_download_url}">${icon} ${label}</a>`
					})

					// add release section
					$( "h1" ).after(`
						<section id="id${count}">
						<h2>${item.tag_name}<a class="headerlink" href="#id${count}" title="Link to this heading"></a></h2>
						<p>${publish_date} - <a class="reference external" href="${item.html_url}">${type} <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i></a></p>
						${body}
						</section>

						<div class="downloads-container">${assets}</div>
					`);

					// add link to sidebar
					$( ".toctree-l1.current ul" ).prepend(`
						<li class="toctree-l2"><a class="reference internal" href="#id${count}">${item.tag_name}</a></li>
					`);

					count++;
				})

				document.querySelector('#loading').remove()

			}).catch(function() {

				document.querySelector('#loading').remove()

				// if no data available from github releases show error message
				$( "h1" ).after(`
					<p>Unable to connect to GitHub Source code</p>
				`);
				
			});
	}


});