/*!
 * jQuery sticky table headers plugin: take a valid table element with th tags and make em sticky
 * Examples and documentation at: http://walmik.info/demos/sticky.jquery
 * version 1 (05-APR-2012)
 * Requires jQuery v1.3.2 or later
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Author: Walmik Deshpande
 
 usage:
 $("#tbl").sticky();
 $(".tbl").sticky();
  
*/
;(function($)
{
    var tmp = 'define vars here';
    
    
    $.fn.sticky = function()
    {
        var tableId = this;
        //collect widths of all the <th> elements
        var thWidthsArr = [];
        $(tableId).find("th").each(function(){
            thWidthsArr.push($(this).css("width"));
        });
        var pos = $(tableId).offset();
        //set the distance of the table from the top,
        //we ll need to make the headers sticky when this distance is 0  
        var thTop = pos.top + "px";
        //set the widths of the first and last tr's ths/tds...
        //this is done coz in some cases,
        //the widths will get messed up if the data was generated dynamically
        var count = 0;
        $(tableId).find("tr:first-child>th").each(function(){
            $(this).css("width", thWidthsArr[count]);
            count++;
        });
        count = 0;
        $(tableId).find("tr:last-child>td").each(function(){
            $(this).css("width", thWidthsArr[count]);
            count++;
        });
        $(window).scroll(function(){
            if($(window).scrollTop() > pos.top)
            {
                $(tableId).find("tr:first-child").css("position", "fixed");
                $(tableId).find("tr:first-child").css("top", "0px");
            }
            else
            {
                $(tableId).find("tr:first-child").css("position", "relative");
                $(tableId).find("tr:first-child").css("top", thTop);
            }
        });
        
    }
})(jQuery);