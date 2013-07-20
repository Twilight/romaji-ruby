var fs = require("fs");
// http://www.age.ne.jp/x/nrs/iso3602/iso3602_unicode.html
var src = fs.readFileSync("iso3602_unicode.html", {encoding: "utf-8"})

// pre process
src = src.replace(/<td\s[^>]*>/g, "<td>")
src = src.replace(/<small>[^<]*<\/small>/g, "");
src = src.replace(/&nbsp;/g, "");
src = src.replace(/\s/g, "");

// fs.writeFileSync("iso3602_unicode.html.pre-processed", src);

src.match(/<tr>(<td>[^<]*<\/td>)+<\/tr>/g).forEach(function(row){
	var row_result = [];
	cells = row.match(/<td>\d+<\/td><td>[^<]+<\/td><td>[^<]+<\/td><td>[^<]+<\/td>/g);
	if (cells === null)return;
	cells.forEach(function(cell){
		var cr = [];
		cell.match(/<td>[^<]+<\/td>/g).forEach(function(sub_cell){
			cr.push(sub_cell.slice(4, -5));
		});
		row_result.push("\"" + cr[1] + "\": \"" + cr[3] + "\",",
			"\"" + cr[2]  + "\": \"" + cr[3] + "\",");
	});
	if (row_result.length > 0){
		console.log(row_result.join(" "))
	}
});

