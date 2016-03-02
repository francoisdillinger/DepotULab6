var library = (function() {
  return {
	TimeStamp: (function(){
   	  return {
		UnixTimestamp: function(){
            var time = Date.now();
            var seconds = time / 1000;
            var timeString = String(seconds);
            var remove = timeString.slice(0, 10);
            return remove;
        },
		UnixMillisecond: function(){
           return new String(Date.now());  
        }
	  }
	})(),
	Local: (function(){
	  return {
		Time: (function() {
		  return {
	  	    WithSeconds: function(){
                  return new Date().toLocaleTimeString();
                  
              },
	   	    WithOutSeconds: function() {
                   return new Date().toLocaleTimeString().replace(/:\d\d /, ' ')
               }
		  }
		})(),
		MDY: (function(){
	  	  return {
		    Numeral: function(){
                var month = String(new Date().getMonth() + 1);
                var dayOfMonth = String(new Date().getDate());
                var fullYear = String(new Date().getFullYear());
                return month + '/' + dayOfMonth + '/' + fullYear;
            },
			Name: function(){
                var month = new Date().getMonth();
                var monthName = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                var convertedMonth = monthName[month];
                var dayOfMonth = String(new Date().getDate());
                var fullYear = String(new Date().getFullYear());
                return convertedMonth + ' ' + dayOfMonth + ', ' + fullYear
            }
		  }
		  })(),
		}
	})(),
	Second: (function(){
		return{
			Second: function(){
                return String( new Date().getSeconds());
            },
			DblDigit: function(){
                var seconds = new Date().getSeconds();
                var convertedSeconds = String( new Date().getSeconds());
                if (seconds <= 9) {
                    return '0' + convertedSeconds;
                }
                else {
                    return convertedSeconds;
                }
            }
		}
	})(),
	Minute: (function(){
		return{
			Minute: function(){
                return String(new Date().getMinutes());
            },
			DblDigit: function(){
                var minute = new Date().getMinutes();
                var convertedMinutes = String(new Date().getMinutes());
                if(minute <= 9) {
                    return '0' + convertedMinutes;
                }
                else {
                    return convertedMinutes
                }
            }
		}
	})(),
	Hour: (function(){
		return {
			TwentyFourHour: function() {
                return String(new Date().getHours());
            },
			TwelveHour: function() {
                var hours = new Date().getHours();
                var hour12Format = ['12','1','2','3','4','5','6','7','8','9','10','11','12','1','2','3','4','5','6','7','8','9','10','11'];
                return hour12Format[hours];
            },
			AMPM: (function() {
				return {
					UpperCase: function(){
                        var hours = new Date().getHours();
                        var upperCaseAmPm = ['AM','AM','AM','AM','AM','AM','AM','AM','AM','AM','AM','AM','PM','PM','PM','PM','PM','PM','PM','PM','PM','PM','PM','PM']
                        return upperCaseAmPm[hours];
                    },
					LowerCase: function(){
                        var hours = new Date().getHours();
                        var lowerCaseAmPm = ['am','am','am','am','am','am','am','am','am','am','am','am','pm','pm','pm','pm','pm','pm','pm','pm','pm','pm','pm','pm']
                        return lowerCaseAmPm[hours];
                    }
				}
			})()
		}
	})(),
	Week: (function(){
		return {
			DayOfWeek: function(){
                var today = new Date().getDay();
                var weekDayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                return weekDayNames[today];
            },
			AbrDayOfWeek: function(){
                var today = new Date().getDay();
                var weekDayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                return weekDayNames[today];
            },
			FirstTwoOfWeek: function(){
                var today = new Date().getDay();
                var weekDayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                return weekDayNames[today];
            },
			WeekOfYear: function(){}
		}
	})(),
	Month: (function(){
		return {
			DateOfMonth: (function(){
				return {
					Numeral: function(){
                       var dayOfMonth = String(new Date().getDate());
                       return dayOfMonth;
                    },
					Ordinal: function(){
                        var ordinal = new Date().getDate();
                        if ([1,21,31].includes(ordinal)) {
                            return String(ordinal) + 'st';
                        }
                        if ([2,22].includes(ordinal)) {
                            return String(ordinal) + 'nd';
                        }
                        if ([3,23].includes(ordinal)) {
                            return String(ordinal) + 'rd';
                        }
                        else {
                            return String(ordinal) + 'th';
                        }
                    
                    },
					DateDblDigit: function(){
                        var dayOfMonth = new Date().getDate();
                        if(dayOfMonth <= 9) {
                            return '0' + dayOfMonth;
                        };
                        
                    }
				}
			})(),
			MonthNumber: function(){ 
                return String(new Date().getMonth() + 1);
                },
			MonthNumberDblDigit: function(){ 
                var month = new Date().getMonth() + 1;
                if(month <= 9) {
                    return '0' + month;
                };
                
                },
			AbrOfCurrentMonth: function(){
                var month = new Date().getMonth();
                var monthAbbreviations = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                return monthAbbreviations[month];
            },
			CurrentMonth: function(){
                var month = new Date().getMonth();
                var monthName = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                return monthName[month];
            }
		}
	})(),
	Year: (function(){
		return {
			DayOfYear: (function(){
				return {
					Numeral: function(){},
					Ordinal: function(){}
				}
			})(),
			YearFull: function(){
                return String(new Date().getFullYear());
            },
			YearAbr: function(){
                var fullYear = String(new Date().getFullYear());
                return fullYear.substring(2, 4);
            }
		}
	})(),
	Defaults: function(){
        var paddedDate = function(x) {
            return (x < 10 ? '0' : '') + x;
        };
        var month = String(new Date().getMonth() + 1);
        var dayOfMonth = String(new Date().getDate());
        var fullYear = String(new Date().getFullYear());
        var hours = String(new Date().getHours());
        var minutes = String(new Date().getMinutes());
        var seconds = String( new Date().getSeconds());
        return fullYear + '-' + paddedDate(month) + '-' + paddedDate(dayOfMonth) + 'T' + paddedDate(hours) + ':' + paddedDate(minutes) + ':' + paddedDate(seconds);
            }
  }
})();






/*
// function daysInFebruary(year) {
//     if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//         // Leap year
//         return 29;
//     } else {
//         // Not a leap year
//         return 28;
//     }
// }

// function dateToDay(date) {
//     var feb = daysInFebruary(date.getFullYear());
//     var aggregateMonths = [0, // January
//                            31, // February
//                            31 + feb, // March
//                            31 + feb + 31, // April
//                            31 + feb + 31 + 30, // May
//                            31 + feb + 31 + 30 + 31, // June
//                            31 + feb + 31 + 30 + 31 + 30, // July
//                            31 + feb + 31 + 30 + 31 + 30 + 31, // August
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31, // September
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30, // October
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31, // November
//                            31 + feb + 31 + 30 + 31 + 30 + 31 + 31 + 30 + 31 + 30, // December
//                          ];
//     return aggregateMonths[date.getMonth()] + date.getDate();
// }
*/