console.log('Calendr loaded........');

// array to maintain the month 
var months = ['jANUARY','fEBRUARY','mARCH','aPRIL','mAY','jUNE','jULY','aUGUST','sEPTEMBER','oCTOBER','nOVEMBER','dECEMBER'];

// following variables are used to set the current month and year into a variable which will be further used in previous and next options
var current_month = new Date().getMonth();
var current_year = new Date().getFullYear();

// loadinng the current month and year as per local time
LoadMonth(current_year,current_month);

// initiaizing the popover
$('[data-toggle="popover"]').popover();


// used to load the calender for the supplied value of year and month
function LoadMonth(year,month)
{
	// clearing the table content
	$('#table_content').empty();

	// variable to get the date object of supplied month and year
	var date = new Date(year,month,1);
	var this_month = new Date().getMonth() == month && new Date().getFullYear() == year;
	console.log(this_month)
	var day = new Date().getDate();
	// for tempering storing the tr element
	var row="";

	// setting the month and year
	$('#month').html(months[month]);
	$('#year').html(year);

	console.log(date);

	// used to print the dates of the month along with the holidays
	for(var i=1;i<=lastday(year,month);i++){

		// this function is used to get the holiday for the supplied date and month if it exist
		var holiday = checkHolidays(month,i);

		// used to fill blank if its the 1st date of the month and doesnt start with sunday
		if(i == 1){
			row = $('<tr></tr>').appendTo($('#table_content'));
			for(var j=0;j<date.getDay();j++)
				$('<td></td>').appendTo(row);
		}

		// appending the date if there is no holiday without a holiday class
		if(holiday == false){
			console.log(this_month && i == day);
			$('<td></td>').attr({'class':((((i-1)+date.getDay())%7 == 0)?'sundays':'')+((this_month && i == day)?' current_day':'')}).text(i).appendTo(row);
		}
		// appending the date if there is holiday with a holiday class
		else{
			$('<td></td>').attr({'class':'holiday','data-toggle':"popover", 'data-placement':"bottom", 'data-trigger':"hover",'data-content':holiday}).text(i).appendTo(row);
		} 

		// used to create a new row
		if((i+date.getDay())%7 == 0){
			row = $('<tr></tr>').appendTo($('#table_content'));
		}


	}
	// this need to be initialised everytime we create a new table because the previous object will be erased on clearing the table
	$('[data-toggle="popover"]').popover();
}


// used to return the last day of the supplied year and month
function lastday(year,month)
{
	return  new Date(year, month +1, 0).getDate();
}

// got the list of holidays from https://www.bankbazaar.com/indian-holiday/goa-holidays.html
// this function return the holiday on the supplied date and month
function checkHolidays(Month,Date){
	switch(Month){
		// JANUARY
		case 0:	switch(Date){
					case 1: return "New Year" ;
					case 26: return "Republic Day";
					default: return false;

				}
				break;
		// MARCH
		case 2:	switch(Date){
					case 4: return "Shiv-ratri" ;
					case 21: return "Holi" ;
					default: return false;

				}
				break;
		// APRIL
		case 3:	switch(Date){
					case 1: return "Bank Holiday" ;
					case 17: return "Mahavir Jayanti" ;
					case 19: return "Good Friday" ;
					default: return false;

				}
				break;
		// MAY
		case 4:	switch(Date){
					case 1: return "May Day" ;
					default: return false;

				}
				break;
		// JUNE
		case 5:	switch(Date){
					case 5: return "Id-ul-Fitr" ;
					default: return false;

				}
				break;
		// AUGUST
		case 7:	switch(Date){
					case 12: return "Id-ul-Juha (Bakrid)" ;
					case 15: return "Independence Day" ;
					default: return false;

				}
				break;
		// SEPTEMBER
		case 8:	switch(Date){
					case 2: return "Ganesh Chaturthi" ;
					case 10: return "Muharram" ;
					default: return false;

				}
				break;
		// OCTOBER
		case 9:	switch(Date){
					case 2: return "Mahatma Gandhi Jayanti" ;
					case 8: return "Dussehra" ;
					case 27: return "Diwali" ;
					default: return false;

				}
				break;
		// NOVEMBER
		case 10:switch(Date){
					case 10: return "Id-e-Milad" ;
					case 11: return "Guru Nanak Birthday" ;
					default: return false;

				}
				break;
		// DECEMBER
		case 11:switch(Date){
					case 25: return "Christmas Festival" ;
					default: return false;

				}
				break;
		// DEFAULT CASE
		default: return false;

	}
}

///////////////////////////////////////
// ONCLICK EVENTS
///////////////////////////////////////

// on clicking it will load the previous month
$('#previous').click(function(){
	current_month-- ;
	if(current_month == -1){
		current_month = 11;
		current_year --;
	}
	LoadMonth(current_year,current_month);
});

// on clicking it will load the next month
$('#next').click(function(){
	current_month++ ;
	if(current_month == 12){
		current_month = 0;
		current_year ++;
	}
	LoadMonth(current_year,current_month);
});

