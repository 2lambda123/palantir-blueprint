"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[47443,41807,16783,36202,42225,17573],{57910:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"کمتر از یک ثانیه",other:"کمتر از {{count}} ثانیه"},xSeconds:{one:"1 ثانیه",other:"{{count}} ثانیه"},halfAMinute:"نیم دقیقه",lessThanXMinutes:{one:"کمتر از یک دقیقه",other:"کمتر از {{count}} دقیقه"},xMinutes:{one:"1 دقیقه",other:"{{count}} دقیقه"},aboutXHours:{one:"حدود 1 ساعت",other:"حدود {{count}} ساعت"},xHours:{one:"1 ساعت",other:"{{count}} ساعت"},xDays:{one:"1 روز",other:"{{count}} روز"},aboutXWeeks:{one:"حدود 1 هفته",other:"حدود {{count}} هفته"},xWeeks:{one:"1 هفته",other:"{{count}} هفته"},aboutXMonths:{one:"حدود 1 ماه",other:"حدود {{count}} ماه"},xMonths:{one:"1 ماه",other:"{{count}} ماه"},aboutXYears:{one:"حدود 1 سال",other:"حدود {{count}} سال"},xYears:{one:"1 سال",other:"{{count}} سال"},overXYears:{one:"بیشتر از 1 سال",other:"بیشتر از {{count}} سال"},almostXYears:{one:"نزدیک 1 سال",other:"نزدیک {{count}} سال"}},i=function(e,t,i){var n,o=a[e];return n="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"در "+n:n+" قبل":n};t.default=i,e.exports=t.default},79931:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(62750)),o={date:(0,n.default)({formats:{full:"EEEE do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'در' {{time}}",long:"{{date}} 'در' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},50822:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"eeee 'گذشته در' p",yesterday:"'دیروز در' p",today:"'امروز در' p",tomorrow:"'فردا در' p",nextWeek:"eeee 'در' p",other:"P"},i=function(e,t,i,n){return a[e]};t.default=i,e.exports=t.default},96609:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(93572)),o={ordinalNumber:function(e,t){return String(e)},era:(0,n.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل از میلاد","بعد از میلاد"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["س‌م1","س‌م2","س‌م3","س‌م4"],wide:["سه‌ماهه 1","سه‌ماهه 2","سه‌ماهه 3","سه‌ماهه 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["ژ","ف","م","آ","م","ج","ج","آ","س","ا","ن","د"],abbreviated:["ژانـ","فور","مارس","آپر","می","جون","جولـ","آگو","سپتـ","اکتـ","نوامـ","دسامـ"],wide:["ژانویه","فوریه","مارس","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["ی","د","س","چ","پ","ج","ش"],short:["1ش","2ش","3ش","4ش","5ش","ج","ش"],abbreviated:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],wide:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},26903:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(7998)),o={ordinalNumber:(0,i(a(9254)).default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?د\.?\s?م\.?|م\.?\s?|د\.?\s?م\.?)/i,wide:/^(قبل از میلاد|قبل از دوران مشترک|میلادی|دوران مشترک|بعد از میلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^س‌م[1234]/i,wide:/^سه‌ماهه [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[جژفمآاماسند]/i,abbreviated:/^(جنو|ژانـ|ژانویه|فوریه|فور|مارس|آوریل|آپر|مه|می|ژوئن|جون|جول|جولـ|ژوئیه|اوت|آگو|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نوامـ|دسامبر|دسامـ|دسم)/i,wide:/^(ژانویه|جنوری|فبروری|فوریه|مارچ|مارس|آپریل|اپریل|ایپریل|آوریل|مه|می|ژوئن|جون|جولای|ژوئیه|آگست|اگست|آگوست|اوت|سپتمبر|سپتامبر|اکتبر|اکتوبر|نوامبر|نومبر|دسامبر|دسمبر)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^(ژ|ج)/i,/^ف/i,/^م/i,/^(آ|ا)/i,/^م/i,/^(ژ|ج)/i,/^(ج|ژ)/i,/^(آ|ا)/i,/^س/i,/^ا/i,/^ن/i,/^د/i],any:[/^ژا/i,/^ف/i,/^ما/i,/^آپ/i,/^(می|مه)/i,/^(ژوئن|جون)/i,/^(ژوئی|جول)/i,/^(اوت|آگ)/i,/^س/i,/^(اوک|اک)/i,/^ن/i,/^د/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[شیدسچپج]/i,short:/^(ش|ج|1ش|2ش|3ش|4ش|5ش)/i,abbreviated:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i,wide:/^(یکشنبه|دوشنبه|سه‌شنبه|چهارشنبه|پنج‌شنبه|جمعه|شنبه)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ی/i,/^دو/i,/^س/i,/^چ/i,/^پ/i,/^ج/i,/^ش/i],any:[/^(ی|1ش|یکشنبه)/i,/^(د|2ش|دوشنبه)/i,/^(س|3ش|سه‌شنبه)/i,/^(چ|4ش|چهارشنبه)/i,/^(پ|5ش|پنجشنبه)/i,/^(ج|جمعه)/i,/^(ش|شنبه)/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ب|ق|ن|ظ|ص|ب.ظ.|ع|ش)/i,abbreviated:/^(ق.ظ.|ب.ظ.|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i,wide:/^(قبل‌ازظهر|نیمه‌شب|ظهر|صبح|بعدازظهر|عصر|شب)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^(ق|ق.ظ.|قبل‌ازظهر)/i,pm:/^(ب|ب.ظ.|بعدازظهر)/i,midnight:/^(‌نیمه‌شب|ن)/i,noon:/^(ظ|ظهر)/i,morning:/(ص|صبح)/i,afternoon:/(ب|ب.ظ.|بعدازظهر)/i,evening:/(ع|عصر)/i,night:/(ش|شب)/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},17100:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(57910)),o=i(a(79931)),r=i(a(50822)),d=i(a(96609)),u=i(a(26903)),l={code:"fa-IR",formatDistance:n.default,formatLong:o.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:6,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);