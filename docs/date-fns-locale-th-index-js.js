"use strict";(self.webpackChunk_blueprintjs_docs_app=self.webpackChunk_blueprintjs_docs_app||[]).push([[21408,3330,90412,45203,25367,65156],{12817:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"น้อยกว่า 1 วินาที",other:"น้อยกว่า {{count}} วินาที"},xSeconds:{one:"1 วินาที",other:"{{count}} วินาที"},halfAMinute:"ครึ่งนาที",lessThanXMinutes:{one:"น้อยกว่า 1 นาที",other:"น้อยกว่า {{count}} นาที"},xMinutes:{one:"1 นาที",other:"{{count}} นาที"},aboutXHours:{one:"ประมาณ 1 ชั่วโมง",other:"ประมาณ {{count}} ชั่วโมง"},xHours:{one:"1 ชั่วโมง",other:"{{count}} ชั่วโมง"},xDays:{one:"1 วัน",other:"{{count}} วัน"},aboutXWeeks:{one:"ประมาณ 1 สัปดาห์",other:"ประมาณ {{count}} สัปดาห์"},xWeeks:{one:"1 สัปดาห์",other:"{{count}} สัปดาห์"},aboutXMonths:{one:"ประมาณ 1 เดือน",other:"ประมาณ {{count}} เดือน"},xMonths:{one:"1 เดือน",other:"{{count}} เดือน"},aboutXYears:{one:"ประมาณ 1 ปี",other:"ประมาณ {{count}} ปี"},xYears:{one:"1 ปี",other:"{{count}} ปี"},overXYears:{one:"มากกว่า 1 ปี",other:"มากกว่า {{count}} ปี"},almostXYears:{one:"เกือบ 1 ปี",other:"เกือบ {{count}} ปี"}},i=function(e,t,i){var n,o=a[e];return n="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",String(t)),null!=i&&i.addSuffix?i.comparison&&i.comparison>0?"halfAMinute"===e?"ใน"+n:"ใน "+n:n+"ที่ผ่านมา":n};t.default=i,e.exports=t.default},68122:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(62750)),o={date:(0,n.default)({formats:{full:"วันEEEEที่ do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"H:mm:ss น. zzzz",long:"H:mm:ss น. z",medium:"H:mm:ss น.",short:"H:mm น."},defaultWidth:"medium"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'เวลา' {{time}}",long:"{{date}} 'เวลา' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},12818:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"eeee'ที่แล้วเวลา' p",yesterday:"'เมื่อวานนี้เวลา' p",today:"'วันนี้เวลา' p",tomorrow:"'พรุ่งนี้เวลา' p",nextWeek:"eeee 'เวลา' p",other:"P"},i=function(e,t,i,n){return a[e]};t.default=i,e.exports=t.default},65779:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(93572)),o={ordinalNumber:function(e,t){return String(e)},era:(0,n.default)({values:{narrow:["B","คศ"],abbreviated:["BC","ค.ศ."],wide:["ปีก่อนคริสตกาล","คริสต์ศักราช"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["ไตรมาสแรก","ไตรมาสที่สอง","ไตรมาสที่สาม","ไตรมาสที่สี่"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],abbreviated:["ม.ค.","ก.พ.","มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."],wide:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],short:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],abbreviated:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],wide:["อาทิตย์","จันทร์","อังคาร","พุธ","พฤหัสบดี","ศุกร์","เสาร์"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"เช้า",afternoon:"บ่าย",evening:"เย็น",night:"กลางคืน"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},abbreviated:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"},wide:{am:"ก่อนเที่ยง",pm:"หลังเที่ยง",midnight:"เที่ยงคืน",noon:"เที่ยง",morning:"ตอนเช้า",afternoon:"ตอนกลางวัน",evening:"ตอนเย็น",night:"ตอนกลางคืน"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},14979:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(7998)),o={ordinalNumber:(0,i(a(9254)).default)({matchPattern:/^\d+/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^([bB]|[aA]|คศ)/i,abbreviated:/^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,wide:/^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^[bB]/i,/^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^ไตรมาส(ที่)? ?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|แรก|หนึ่ง)/i,/(2|สอง)/i,/(3|สาม)/i,/(4|สี่)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,abbreviated:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,wide:/^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^มก/i,/^กุม/i,/^มี/i,/^เม/i,/^พฤษ/i,/^มิ/i,/^กรก/i,/^ส/i,/^กัน/i,/^ต/i,/^พฤศ/i,/^ธ/i],any:[/^ม\.?ค\.?/i,/^ก\.?พ\.?/i,/^มี\.?ค\.?/i,/^เม\.?ย\.?/i,/^พ\.?ค\.?/i,/^มิ\.?ย\.?/i,/^ก\.?ค\.?/i,/^ส\.?ค\.?/i,/^ก\.?ย\.?/i,/^ต\.?ค\.?/i,/^พ\.?ย\.?/i,/^ธ\.?ค\.?/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,short:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,abbreviated:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,wide:/^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^อา/i,/^จั/i,/^อั/i,/^พุธ/i,/^พฤ/i,/^ศ/i,/^เส/i],any:[/^อา/i,/^จ/i,/^อ/i,/^พ(?!ฤ)/i,/^พฤ/i,/^ศ/i,/^ส/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{any:/^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ก่อนเที่ยง/i,pm:/^หลังเที่ยง/i,midnight:/^เที่ยงคืน/i,noon:/^เที่ยง/i,morning:/เช้า/i,afternoon:/บ่าย/i,evening:/เย็น/i,night:/กลางคืน/i}},defaultParseWidth:"any"})};t.default=o,e.exports=t.default},47408:function(e,t,a){var i=a(57739).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(12817)),o=i(a(68122)),r=i(a(12818)),d=i(a(65779)),u=i(a(14979)),l={code:"th",formatDistance:n.default,formatLong:o.default,formatRelative:r.default,localize:d.default,match:u.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);