!function(e){e.fn.outerHTML=function(t){return t?this.before(t).remove():e("<p>").append(this.eq(0).clone()).html()}}(jQuery),SyntaxHighlighter.defaults.gutter=!1,$(function(){$(".js-codeMe").each(function(){var e=$(this).outerHTML().replace(" js-codeMe","").replace("js-codeMe","").replace(' class=""',"").replace('class=""',""),t=$("<div>").text(e).html();$(this).parent().hasClass("sandbox")===!0?$item=$(this).parent():$item=$(this),$item.after('<pre class="brush: html">'+t+"</pre>"),SyntaxHighlighter.highlight()}),$(".js-codeChild").each(function(){var e=$(this).html().replace(" js-codeChild","").replace("js-codeChild","").replace(' class=""',"").replace('class=""',""),t=$("<div>").text(e).html();$(this).parent().hasClass("sandbox")===!0?$item=$(this).parent():$item=$(this),$item.after('<pre class="brush: html">'+t+"</pre>"),SyntaxHighlighter.highlight()})});