(function(d){
	var romaji_table = {
		// output of iso3602_to_json.js
		"あ": "a", "ア": "a", "い": "i", "イ": "i", "う": "u", "ウ": "u", "え": "e", "エ": "e", "お": "o", "オ": "o",
		"か": "ka", "カ": "ka", "き": "ki", "キ": "ki", "く": "ku", "ク": "ku", "け": "ke", "ケ": "ke", "こ": "ko", "コ": "ko",
		"さ": "sa", "サ": "sa", "し": "si", "シ": "si", "す": "su", "ス": "su", "せ": "se", "セ": "se", "そ": "so", "ソ": "so",
		"た": "ta", "タ": "ta", "ち": "ti", "チ": "ti", "つ": "tu", "ツ": "tu", "て": "te", "テ": "te", "と": "to", "ト": "to",
		"な": "na", "ナ": "na", "に": "ni", "ニ": "ni", "ぬ": "nu", "ヌ": "nu", "ね": "ne", "ネ": "ne", "の": "no", "ノ": "no",
		"は": "ha", "ハ": "ha", "ひ": "hi", "ヒ": "hi", "ふ": "hu", "フ": "hu", "へ": "he", "ヘ": "he", "ほ": "ho", "ホ": "ho",
		"ま": "ma", "マ": "ma", "み": "mi", "ミ": "mi", "む": "mu", "ム": "mu", "め": "me", "メ": "me", "も": "mo", "モ": "mo",
		"や": "ya", "ヤ": "ya", "ゆ": "yu", "ユ": "yu", "よ": "yo", "ヨ": "yo",
		"ら": "ra", "ラ": "ra", "り": "ri", "リ": "ri", "る": "ru", "ル": "ru", "れ": "re", "レ": "re", "ろ": "ro", "ロ": "ro",
		"わ": "wa", "ワ": "wa", "を": "o", "ヲ": "o",
		"ん": "n", "ン": "n",
		"が": "ga", "ガ": "ga", "ぎ": "gi", "ギ": "gi", "ぐ": "gu", "グ": "gu", "げ": "ge", "ゲ": "ge", "ご": "go", "ゴ": "go",
		"ざ": "za", "ザ": "za", "じ": "zi", "ジ": "zi", "ず": "zu", "ズ": "zu", "ぜ": "ze", "ゼ": "ze", "ぞ": "zo", "ゾ": "zo",
		"だ": "da", "ダ": "da", "ぢ": "zi", "ヂ": "zi", "づ": "zu", "ヅ": "zu", "で": "de", "デ": "de", "ど": "do", "ド": "do",
		"ば": "ba", "バ": "ba", "び": "bi", "ビ": "bi", "ぶ": "bu", "ブ": "bu", "べ": "be", "ベ": "be", "ぼ": "bo", "ボ": "bo",
		"ぱ": "pa", "パ": "pa", "ぴ": "pi", "ピ": "pi", "ぷ": "pu", "プ": "pu", "ぺ": "pe", "ペ": "pe", "ぽ": "po", "ポ": "po",
		"っ": "-", "ッ": "-",
		"きゃ": "kya", "キャ": "kya", "きゅ": "kyu", "キュ": "kyu", "きょ": "kyo", "キョ": "kyo",
		"しゃ": "sya", "シャ": "sya", "しゅ": "syu", "シュ": "syu", "しょ": "syo", "ショ": "syo",
		"ちゃ": "tya", "チャ": "tya", "ちゅ": "tyu", "チュ": "tyu", "ちょ": "tyo", "チョ": "tyo",
		"にゃ": "nya", "ニャ": "nya", "にゅ": "nyu", "ニュ": "nyu", "にょ": "nyo", "ニョ": "nyo",
		"ひゃ": "hya", "ヒャ": "hya", "ひゅ": "hyu", "ヒュ": "hyu", "ひょ": "hyo", "ヒョ": "hyo",
		"みゃ": "mya", "ミャ": "mya", "みゅ": "myu", "ミュ": "myu", "みょ": "myo", "ミョ": "myo",
		"りゃ": "rya", "リャ": "rya", "りゅ": "ryu", "リュ": "ryu", "りょ": "ryo", "リョ": "ryo",
		"ぎゃ": "gya", "ギャ": "gya", "ぎゅ": "gyu", "ギュ": "gyu", "ぎょ": "gyo", "ギョ": "gyo",
		"じゃ": "zya", "ジャ": "zya", "じゅ": "zyu", "ジュ": "zyu", "じょ": "zyo", "ジョ": "zyo",
		"ぢゃ": "zya", "ジャ": "zya", "ぢゅ": "zyu", "ジュ": "zyu", "ぢょ": "zyo", "ヂョ": "zyo",
		"びゃ": "bya", "ビャ": "bya", "びゅ": "byu", "ビュ": "byu", "びょ": "byo", "ビョ": "byo",
		"ぴゃ": "pya", "ピャ": "pya", "ぴゅ": "pyu", "ピュ": "pyu", "ぴょ": "pyo", "ピョ": "pyo",
		"ああ": "&acirc;", "アア": "&acirc;", "いい": "&icirc;", "イイ": "&icirc;", "うう": "&ucirc;", "ウウ": "&ucirc;", "ええ": "&ecirc;", "エエ": "&ecirc;", "おお": "&ocirc;", "オオ": "&ocirc;", "おう": "&ocirc;", "オウ": "&ocirc;",
		"かあ": "k&acirc;", "カア": "k&acirc;", "きい": "k&icirc;", "キイ": "k&icirc;", "くう": "k&ucirc;", "クウ": "k&ucirc;", "けえ": "k&ecirc;", "ケエ": "k&ecirc;", "こお": "k&ocirc;", "コオ": "k&ocirc;", "こう": "k&ocirc;", "コウ": "k&ocirc;",
		"さあ": "s&acirc;", "サア": "s&acirc;", "しい": "s&icirc;", "シイ": "s&icirc;", "すう": "s&ucirc;", "スウ": "s&ucirc;", "せえ": "s&ecirc;", "セエ": "s&ecirc;", "そお": "s&ocirc;", "ソオ": "s&ocirc;", "そう": "s&ocirc;", "ソウ": "s&ocirc;",
		"たあ": "t&acirc;", "タア": "t&acirc;", "ちい": "t&icirc;", "チイ": "t&icirc;", "つう": "t&ucirc;", "ツウ": "t&ucirc;", "てえ": "t&ecirc;", "テエ": "t&ecirc;", "とお": "t&ocirc;", "トオ": "t&ocirc;", "とう": "t&ocirc;", "トウ": "t&ocirc;",
		"なあ": "n&acirc;", "ナア": "n&acirc;", "にい": "n&icirc;", "ニイ": "n&icirc;", "ぬう": "n&ucirc;", "ヌウ": "n&ucirc;", "ねえ": "n&ecirc;", "ネエ": "n&ecirc;", "のお": "n&ocirc;", "ノオ": "n&ocirc;", "のう": "n&ocirc;", "ノウ": "n&ocirc;",
		"はあ": "h&acirc;", "ハア": "h&acirc;", "ひい": "h&icirc;", "ヒイ": "h&icirc;", "ふう": "h&ucirc;", "フウ": "h&ucirc;", "へえ": "h&ecirc;", "ヘエ": "h&ecirc;", "ほお": "h&ocirc;", "ホオ": "h&ocirc;", "ほう": "h&ocirc;", "ホウ": "h&ocirc;",
		"まあ": "m&acirc;", "マア": "m&acirc;", "みい": "m&icirc;", "ミイ": "m&icirc;", "むう": "m&ucirc;", "ムウ": "m&ucirc;", "めえ": "m&ecirc;", "メエ": "m&ecirc;", "もお": "m&ocirc;", "モオ": "m&ocirc;", "もう": "m&ocirc;", "モウ": "m&ocirc;",
		"やあ": "y&acirc;", "ヤア": "y&acirc;", "ゆう": "y&ucirc;", "ユウ": "y&ucirc;", "よお": "y&ocirc;", "ヨオ": "y&ocirc;", "よう": "y&ocirc;", "ヨウ": "y&ocirc;",
		"らあ": "r&acirc;", "ラア": "r&acirc;", "りい": "r&icirc;", "リイ": "r&icirc;", "るう": "r&ucirc;", "ルウ": "r&ucirc;", "れえ": "r&ecirc;", "レエ": "r&ecirc;", "ろお": "r&ocirc;", "ロオ": "r&ocirc;", "ろう": "r&ocirc;", "ロウ": "r&ocirc;",
		"わあ": "w&acirc;", "ワア": "w&acirc;",
		"があ": "g&acirc;", "ガア": "g&acirc;", "ぎい": "g&icirc;", "ギイ": "g&icirc;", "ぐう": "g&ucirc;", "グウ": "g&ucirc;", "げえ": "g&ecirc;", "ゲエ": "g&ecirc;", "ごお": "g&ocirc;", "ゴオ": "g&ocirc;", "ごう": "g&ocirc;", "ゴウ": "g&ocirc;",
		"ざあ": "z&acirc;", "ザア": "z&acirc;", "じい": "z&icirc;", "ジイ": "z&icirc;", "ずう": "z&ucirc;", "ズウ": "z&ucirc;", "ぜえ": "z&ecirc;", "ゼエ": "z&ecirc;", "ぞお": "z&ocirc;", "ゾオ": "z&ocirc;", "ぞう": "z&ocirc;", "ゾウ": "z&ocirc;",
		"だあ": "d&acirc;", "ダア": "d&acirc;", "ぢい": "z&icirc;", "ヂイ": "z&icirc;", "ヅう": "z&ucirc;", "ヅウ": "z&ucirc;", "でえ": "d&ecirc;", "デエ": "d&ecirc;", "どお": "d&ocirc;", "ドオ": "d&ocirc;", "どう": "d&ocirc;", "ドウ": "d&ocirc;",
		"ばあ": "b&acirc;", "バア": "b&acirc;", "びい": "b&icirc;", "ビイ": "b&icirc;", "ぶう": "b&ucirc;", "ブウ": "b&ucirc;", "べえ": "b&ecirc;", "ベエ": "b&ecirc;", "ぼお": "b&ocirc;", "ボオ": "b&ocirc;", "ぼう": "b&ocirc;", "ボウ": "b&ocirc;",
		"ぱあ": "p&acirc;", "パア": "p&acirc;", "ぴい": "p&icirc;", "ピイ": "p&icirc;", "ぷう": "p&ucirc;", "プウ": "p&ucirc;", "ぺえ": "p&ecirc;", "ペエ": "p&ecirc;", "ぽお": "p&ocirc;", "ポオ": "p&ocirc;", "ぽう": "p&ocirc;", "ポウ": "p&ocirc;",
		"きゃあ": "ky&acirc;", "キャア": "ky&acirc;", "きゅう": "ky&ucirc;", "キュウ": "ky&ucirc;", "きょう": "ky&ocirc;", "キョウ": "ky&ocirc;",
		"しゃあ": "sy&acirc;", "シャア": "sy&acirc;", "しゅう": "sy&ucirc;", "シュウ": "sy&ucirc;", "しょう": "sy&ocirc;", "ショウ": "sy&ocirc;",
		"ちゃあ": "ty&acirc;", "チャア": "ty&acirc;", "ちゅう": "ty&ucirc;", "チュウ": "ty&ucirc;", "ちょう": "ty&ocirc;", "チョウ": "ty&ocirc;",
		"にゃあ": "ny&acirc;", "ニャア": "ny&acirc;", "にゅう": "ny&ucirc;", "ニュウ": "ny&ucirc;", "にょう": "ny&ocirc;", "ニョウ": "ny&ocirc;",
		"ひゃあ": "hy&acirc;", "ヒャア": "hy&acirc;", "ひゅう": "hy&ucirc;", "ヒュウ": "hy&ucirc;", "ひょう": "hy&ocirc;", "ヒョウ": "hy&ocirc;",
		"みゃあ": "my&acirc;", "ミャア": "my&acirc;", "みゅう": "my&ucirc;", "ミュウ": "my&ucirc;", "みょう": "my&ocirc;", "ミョウ": "my&ocirc;",
		"りゃあ": "ry&acirc;", "リャア": "ry&acirc;", "りゅう": "ry&ucirc;", "リュウ": "ry&ucirc;", "りょう": "ry&ocirc;", "リョウ": "ry&ocirc;",
		"ぎゃあ": "gy&acirc;", "ギャア": "gy&acirc;", "ぎゅう": "gy&ucirc;", "ギュウ": "gy&ucirc;", "ぎょう": "gy&ocirc;", "ギョウ": "gy&ocirc;",
		"じゃあ": "zy&acirc;", "ジャア": "zy&acirc;", "じゅう": "zy&ucirc;", "ジュウ": "zy&ucirc;", "じょう": "zy&ocirc;", "ジョウ": "zy&ocirc;",
		"ぢゃあ": "zy&acirc;", "ヂャア": "zy&acirc;", "ぢゅう": "zy&ucirc;", "ヂュウ": "zy&ucirc;", "ぢょう": "zy&ocirc;", "ヂョウ": "zy&ocirc;",
		"びゃあ": "by&acirc;", "ビャア": "by&acirc;", "びゅう": "by&ucirc;", "ビュウ": "by&ucirc;", "びょう": "by&ocirc;", "ビョウ": "by&ocirc;",
		"ぴゃあ": "py&acirc;", "ピャア": "py&acirc;", "ぴゅう": "py&ucirc;", "ピュウ": "py&ucirc;", "ぴょう": "py&ocirc;", "ピョウ": "py&ocirc;"
	};
	var replace = [];
	function walk(parent){
		for(var i = 0; i < parent.childNodes.length; ++i){
			var child = parent.childNodes[i];
			if(child.nodeType == 3){ // text node
				var src = child.textContent;
				var translated = [];
				var count = 0;
				var cache = [];
				var is_romaji = true;
				function flush_cache(){
					if (cache.length){
						var new_node;
						if (is_romaji){
							new_node = d.createElement("ruby")
							new_node.innerHTML = cache.join("");
						}else{
							new_node = d.createTextNode(cache.join(""));
						}
						translated.push(new_node);
						cache = [];
					}
				}
				for (var j = 0; j < src.length;){
					var kana, romaji;
					for (var k = (src.length - j > 3) ? 3 : (src.length - j); k > 0; --k){
						kana = src.slice(j, j + k);
						romaji = romaji_table[kana];
						if (romaji !== undefined){
							break;
						}
					}
					j += kana.length;
					if(romaji === undefined){
						if(is_romaji){
							flush_cache();
							is_romaji = false;
						}
						cache.push(kana);
					}else{
						if(!is_romaji){
							flush_cache();
							is_romaji = true;
						}
						cache.push(kana + "<rt>" + romaji + "</rt>");
						++ count;
					}
				}
				flush_cache();
				if(count){
					replace.push([translated, child]);
				}
			}else if(child.childNodes.length > 0){
				// TODO: we may not need to descend into certain types of nodes
				walk(child);
			}
		}
	}
	walk(d);
	for (var i = 0; i < replace.length; ++i){
		var new_children = replace[i][0];
		var old = replace[i][1];
		var parent = old.parentNode;
		for (var j = 0; j < new_children.length; ++j){
			parent.insertBefore(new_children[j], old);
		}
		parent.removeChild(old);
	}
})(document);