let search = document.getElementById('search').querySelector('input');
let content = document.querySelectorAll('.content');
let search_no_result = document.getElementById('search_no_result');

search.addEventListener('input', function() {
	let foundCount = 0;

	if (search.value === '') {
		foundCount = 1;
		search_no_result.style.display = 'none'
		content.forEach(function(item) {
			item.style.display = '';
		});
	} else {
		content.forEach(function(item) {
			item.style.display = 'none';
		});
		content.forEach(function(item) {
			let contentTitle = item.getAttribute('data-contentTitle');
			if (contentTitle && contentTitle.toLowerCase().includes(search.value.toLowerCase())) {
				item.style.display = '';
				foundCount++;
			};
		});
	};

	if (foundCount === 0) {
		search_no_result.style.display = ''
	}else{
		search_no_result.style.display = 'none'
	}
});