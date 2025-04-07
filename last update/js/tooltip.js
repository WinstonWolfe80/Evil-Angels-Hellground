/*
 Tooltip script
 powered by jQuery (http://www.jquery.com)

 written by Alen Grakalic (http://cssglobe.com)
 for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery

 ddrivetip conversion & tooltip modification by Rob G, aka Mottie (http://wowmotty.blogspot.com/)
 - updated (8/29/2009): Added Websnapr.com site screenshot option
 - updated (1/8/2011) : cleaned up the code a bit to fix an error in IE
 - updated (5/11/2011): Fixed a problem with new recent posts having a rel with an 8 digit number making the tooltip really really wide
*/

(function($){
$.tooltip = function(el, options){
 var tmp, ttt, tte, rx, ss, t2, t3, w, c,
  tooltipObjFlag = '###',
  tooltipSpeed = 300,
  tooltipLocal = false,
  tooltipCSS = 'position:absolute;z-index:1000;';

 // Disable other tooltip copies
 window.tooltip = function(){};
 $('.tooltip')
  .unbind('mouseover.tooltip mouseout.tooltip')
  .die('mouseover.tooltip mouseout.tooltip')

  // Tooltips
  .live('mouseover.tooltip',function(e) {
   this.t = (this.title === '') ? this.t : this.title;
   ttt = this.t;
   this.title = '';
   // Load tooltip content from an object
   rx = new RegExp('^' + tooltipObjFlag);
   if (rx.test(ttt)) {
    tte = ttt.replace(rx,'#').split(' ')[0];
    if (tte.length < 1 || tte.length > 20) {
     ttt = this.t;
    } else {
     ttt = $(tte).html();
    }
   }
   tmp = '<div id="tooltip">' + ttt + '</div>';
   if (tooltipLocal){
    $(this).before(tmp);
   } else {
    $('body').append(tmp);
   }
   // retrieves width and color information from the rel attribute
   // rel='250,#000000;color:#ffffff;' => tooltip width = 250, background color = #000000, text = #ffffff
   tmp = (typeof($(this).attr('rel'))==='undefined') ? '' : $(this).attr('rel');
   t2 = tmp.indexOf(',');
   t3 = (t2 < 0) ? 0 : t2 + 1;
   w = parseInt(tmp.substring(0, (t2 < 0 ? tmp.length : t2)),10); // recent posts now have a rel with an 8 digit number, so make it 500px wide to fit the tooltip
   w = (tmp === '') ? $('#tooltip').width() : (w > 9999) ? 500 : w;
   c = (typeof(tmp[1])==='undefined' || t2 < 0) ? '' : 'background-color:' + tmp.substring(t3, tmp.length); // ignore numbers (it's for tooltip width)
   tmp = tooltipCSS + "width:" + w + "px;" + c;
   $('#tooltip').attr('style',tmp).fadeIn(tooltipSpeed);
   $.tooltip.locate(e,'#tooltip');
  })
  .live('mouseout.tooltip',function(e) {
   this.title = this.t;
   $('#tooltip, #tooltip2').remove();
  })
  .live('mousemove.tooltip',function(e) {
   $.tooltip.locate(e,'#tooltip');
  });

 // Image & URL screenshot preview
 $('a.preview,a.screenshot')
  .live('mouseover.tooltip',function(e){
   this.t = this.title;
   this.title = '';
   tmp = "<div id='preview' style='" + tooltipCSS + "'><img src='";
   c = (this.t !== '') ? '<br/>' + this.t : '';
   /* use websnapr.com to get website thumbnail preview if rel="#" */
   ss = ($(this).hasClass('screenshot') && this.rel==="#") ? 'http://images.websnapr.com/?url=' + this.href : this.rel;
   tmp += ($(this).hasClass('preview')) ? this.href + "' alt='Image preview' />" : ss + "' alt='URL preview' />";
   tmp += c +"</div>";
   if (tooltipLocal){
    $(this).before(tmp);
   } else {
    $('body').append(tmp);
   }
   $.tooltip.locate(e,'#preview');
   $('#preview').fadeIn(tooltipSpeed);
  })
  .live('mouseout.tooltip',function(e){
   this.title = this.t;
   $('#preview').remove();
  })
  .live('mousemove.tooltip',function(e){
   $.tooltip.locate(e,'#preview');
  });
};


$.tooltip.locate = function(e,ttid){
 var xOffset = 20, // Don't use negative values here
  yOffset = 20,
  tid = jQuery(ttid),
  w = jQuery(window),
  ttw = tid.width(),
  tth = tid.height(),
  wscrY = w.scrollTop(),
  wscrX = w.scrollLeft(),
  curX = e.pageX,
  curY = e.pageY,
  ttleft = ((curX - wscrX + xOffset*2 + ttw) > w.width()) ? curX - ttw - xOffset : curX + xOffset,
  tttop = ((curY - wscrY + yOffset*2 + tth) > w.height()) ? curY - tth - yOffset : curY + yOffset;
 if (ttleft < wscrX + xOffset) { ttleft = wscrX + xOffset; }
 if (tttop < wscrY + yOffset) { tttop = curY + yOffset; }

 // prevent mouse from being inside tooltip & cause a flicker on mouse move
 if ( curX > ttleft && curX < ttleft + ttw && curY > tttop && curY < tttop + tth ) {
  tttop += ( (tttop - tth/2 - yOffset) < wscrY + yOffset ) ? tth/2 + yOffset : -tth/2 - yOffset;
 }

 tid.css({ 'top': tttop, 'left': ttleft });
};

})(jQuery);

// Convert ddrivetip functions (http://www.dynamicdrive.com/dynamicindex5/dhtmltooltip.htm)
// to work with this tooltip
var ddrivetip = function(ttt,ttc,ttw){
 ttc = (ttc === '') ? '' : 'background-color:' + ttc;
 jQuery('body').append("<div id='tooltip' class='ddrivetip' style='position:absolute;z-index:1000;width:" + ttw + "px;" + ttc + "'>" + ttt + "</div>");
 jQuery('#tooltip').fadeIn(300);
};
var hideddrivetip = function(){
 jQuery('#tooltip').remove();
};
var positiontip = function(evt){
 if (jQuery('#tooltip').is('.ddrivetip')) { jQuery.tooltip.locate(evt,'#tooltip'); }
};
document.onmousemove = positiontip;

jQuery(document).ready(function(){
 jQuery.tooltip();
});