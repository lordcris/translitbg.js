/*
 * translitbg.js - Bulgarian to Latin characters transliteration.
 *
 * @version v1.0.0
 * @link https://github.com/petarov/translitbg.js#readme
 * @license MIT License
 * @author github.com/petarov
 */
(function(){"use strict";function t(){this.buffer=[]}function n(){this._input="",this._mode=o.STREAMLINED}var i=this,e=i.translitbg,r={create:function(){return new n},noConflict:function(){return i.translitbg=e,this}};t.prototype={append:function(t){return this.buffer.push(t),this},toString:function(){return this.buffer.join("")},toArray:function(){return this.buffer}};var o={STREAMLINED:{tokens:{ia:{"ия":"ia","Ия":"Ia","иЯ":"iA","ИЯ":"IA"}},cyr2lat:{"а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"y","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"ts","ч":"ch","ш":"sh","щ":"sht","ъ":"a","ь":"y","ю":"yu","я":"ya","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"Y","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"Ts","Ч":"Ch","Ш":"SH","Щ":"Sht","Ъ":"A","Ь":"Y","Ю":"Yu","Я":"Ya"},lat2cyr:{}},BDS_ISO9_2001:{},DANCHEV:{}};n.prototype={mode:function(t){return this._mode=t,this},"in":function(t){return this._input=t,this},go:function(){for(var n=new t,i=this._input.split(""),e=0;e<i.length;e++){var r=i[e],o=i[e+1];if("undefined"!=typeof o){var s=r+o;if(this._mode.tokens.ia[s]){var u=i[e+2];if("undefined"==typeof u||/^[-\s]$/.test(u)){n.append(this._mode.tokens.ia[s]),e++;continue}}}this._mode.cyr2lat[r]?n.append(this._mode.cyr2lat[r]):n.append(r)}return n.toString()},transliterate:function(){return this.go()}},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=r),exports.translitbg=r):i.translitbg=r}).call(this);