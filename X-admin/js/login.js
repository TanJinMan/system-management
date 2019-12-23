window.onload = function() {

	var btn = document.getElementById("lg");
	console.log(btn)
	btn.onclick = function() {
		var userVal = document.getElementById("user").value;
		var passVal = document.getElementById("paw").value;


		location.href="./index.html"
	}
	var cav = document.getElementsByClassName('auth_code')[0]
	var val = '';
	console.log(cav)
	var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	var str = '';
	canvas(cav, arr, 4, function(res) {
		val = res
	})

	// car--画板
	// arr--数组
	// num--随机数的个数
	// fn--函数返回的随机数
	function canvas(cav, arr, num, fn) {
		var num = num;
		var str = '';
		var ctx = cav.getContext('2d')
		ctx.clearRect(0, 0, cav.width, cav.height)
		ctx.fillStyle = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
		ctx.rect(0, 0, cav.width, cav.height)
		ctx.fill();
		ctx.closePath()
		ctx.beginPath()
		for(var i = 0; i < num; i++) {
			var color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16)
			var f = Math.random() * 80 + 80;
			var w = cav.width / num
			var h = cav.height - f
			var x = Math.random() * w;
			var y = Math.random() * f + h;
			var ran = random()
			ctx.font = f + 'px 黑体';
			ctx.fillStyle = color;
			str += arr[ran]
			y = y < f ? y = f : y;
			y = y > cav.height ? y = cav.height : y
			var s = i * w + x
			s = s > cav.width - f / 2 ? s = cav.width - f / 2 : s
			ctx.fillText(arr[ran], s, y)
			ctx.closePath()
		}

		function random() {
			return Math.floor(Math.random() * arr.length)
		}
		return fn(str)
	}

	$('.auth_code').on('click', function() {
		canvas(cav, arr, 4, function(res) {
			val = res
		})
	})

}