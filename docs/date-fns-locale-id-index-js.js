"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[35820,90243,50599,80680,50417,50931],{82576:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lessThanXSeconds:{one:"kurang dari 1 detik",other:"kurang dari {{count}} detik"},xSeconds:{one:"1 detik",other:"{{count}} detik"},halfAMinute:"setengah menit",lessThanXMinutes:{one:"kurang dari 1 menit",other:"kurang dari {{count}} menit"},xMinutes:{one:"1 menit",other:"{{count}} menit"},aboutXHours:{one:"sekitar 1 jam",other:"sekitar {{count}} jam"},xHours:{one:"1 jam",other:"{{count}} jam"},xDays:{one:"1 hari",other:"{{count}} hari"},aboutXWeeks:{one:"sekitar 1 minggu",other:"sekitar {{count}} minggu"},xWeeks:{one:"1 minggu",other:"{{count}} minggu"},aboutXMonths:{one:"sekitar 1 bulan",other:"sekitar {{count}} bulan"},xMonths:{one:"1 bulan",other:"{{count}} bulan"},aboutXYears:{one:"sekitar 1 tahun",other:"sekitar {{count}} tahun"},xYears:{one:"1 tahun",other:"{{count}} tahun"},overXYears:{one:"lebih dari 1 tahun",other:"lebih dari {{count}} tahun"},almostXYears:{one:"hampir 1 tahun",other:"hampir {{count}} tahun"}},i=function(e,a,i){var n,r=t[e];return n="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",a.toString()),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"dalam waktu "+n:n+" yang lalu":n};a.default=i,e.exports=a.default},75702:function(e,a,t){var i=t(57739).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(62750)),r={date:(0,n.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"d/M/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"HH.mm.ss",long:"HH.mm.ss",medium:"HH.mm",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'pukul' {{time}}",long:"{{date}} 'pukul' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=r,e.exports=a.default},84294:function(e,a){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var t={lastWeek:"eeee 'lalu pukul' p",yesterday:"'Kemarin pukul' p",today:"'Hari ini pukul' p",tomorrow:"'Besok pukul' p",nextWeek:"eeee 'pukul' p",other:"P"},i=function(e,a,i,n){return t[e]};a.default=i,e.exports=a.default},45486:function(e,a,t){var i=t(57739).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(93572)),r={ordinalNumber:function(e,a){return"ke-"+Number(e)},era:(0,n.default)({values:{narrow:["SM","M"],abbreviated:["SM","M"],wide:["Sebelum Masehi","Masehi"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["Kuartal ke-1","Kuartal ke-2","Kuartal ke-3","Kuartal ke-4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agt","Sep","Okt","Nov","Des"],wide:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["M","S","S","R","K","J","S"],short:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],abbreviated:["Min","Sen","Sel","Rab","Kam","Jum","Sab"],wide:["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},abbreviated:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"},wide:{am:"AM",pm:"PM",midnight:"tengah malam",noon:"tengah hari",morning:"pagi",afternoon:"siang",evening:"sore",night:"malam"}},defaultFormattingWidth:"wide"})};a.default=r,e.exports=a.default},32362:function(e,a,t){var i=t(57739).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(7998)),r={ordinalNumber:(0,i(t(9254)).default)({matchPattern:/^ke-(\d+)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(sm|m)/i,abbreviated:/^(s\.?\s?m\.?|s\.?\s?e\.?\s?u\.?|m\.?|e\.?\s?u\.?)/i,wide:/^(sebelum masehi|sebelum era umum|masehi|era umum)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^s/i,/^(m|e)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K-?\s[1234]/i,wide:/^Kuartal ke-?\s?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)/i,wide:/^(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^ap/i,/^me/i,/^jun/i,/^jul/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[srkjm]/i,short:/^(min|sen|sel|rab|kam|jum|sab)/i,abbreviated:/^(min|sen|sel|rab|kam|jum|sab)/i,wide:/^(minggu|senin|selasa|rabu|kamis|jumat|sabtu)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^m/i,/^s/i,/^s/i,/^r/i,/^k/i,/^j/i,/^s/i],any:[/^m/i,/^sen/i,/^sel/i,/^r/i,/^k/i,/^j/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|tengah m|tengah h|(di(\swaktu)?) (pagi|siang|sore|malam))/i,any:/^([ap]\.?\s?m\.?|tengah malam|tengah hari|(di(\swaktu)?) (pagi|siang|sore|malam))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^pm/i,midnight:/^tengah m/i,noon:/^tengah h/i,morning:/pagi/i,afternoon:/siang/i,evening:/sore/i,night:/malam/i}},defaultParseWidth:"any"})};a.default=r,e.exports=a.default},27648:function(e,a,t){var i=t(57739).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=i(t(82576)),r=i(t(75702)),u=i(t(84294)),o=i(t(45486)),d=i(t(32362)),l={code:"id",formatDistance:n.default,formatLong:r.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};a.default=l,e.exports=a.default}}]);