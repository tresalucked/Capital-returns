var $j=jQuery.noConflict();function oceanwpWooMobileCart(){"use strict";if(!$j("body").hasClass("woocommerce-cart")&&!$j("body").hasClass("woocommerce-checkout")){var e=function(){$j("html").css({overflow:"","margin-right":""}),$j("body").removeClass("show-cart-sidebar")};$j(document).on("click",".oceanwp-mobile-menu-icon a.wcmenucart",function(o){o.preventDefault();var e=$j("html").innerWidth();$j("html").css("overflow","hidden");var c=$j("html").innerWidth();$j("html").css("margin-right",c-e),$j("body").addClass("show-cart-sidebar")}),$j(".oceanwp-cart-sidebar-overlay, .oceanwp-cart-close").on("click",function(o){o.preventDefault(),e(),$j("body").removeClass("show-cart")}),$j(window).resize(function(){e()})}}$j(document).ready(function(){"use strict";oceanwpWooMobileCart()});