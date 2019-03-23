
console.log('Calendr loaded........');

function LoadCurrentMonth()
{
	$('#table_content').empty();
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();

	console.log(date);
	for(var i=1;i<=lastday(year,month);i++){
		if(i%7 == 0 || i == lastday(year,month)){
			
		}
	}
}

LoadCurrentMonth();

function lastday(year,month)
{
	return  new Date(year, month +1, 0).getDate();
}


// got the list of holidays from https://www.bankbazaar.com/indian-holiday/goa-holidays.html
function setHolidays(Month,Date){
	switch(Month){
		case 0:	switch(Date){
					case 1: return "New Year" ;
					case 26: return "Republic Day";
					default: return false;

				}
				break;
		case 2:	switch(Date){
					case 4: return "Shiv-ratri" ;
					case 21: return "Holi" ;
					default: return false;

				}
				break;
		case 3:	switch(Date){
					case 1: return "Bank Holiday" ;
					case 17: return "Mahavir Jayanti" ;
					case 19: return "Good Friday" ;
					default: return false;

				}
				break;
		case 4:	switch(Date){
					case 1: return "May Day" ;
					default: return false;

				}
				break;
		case 5:	switch(Date){
					case 5: return "Id-ul-Fitr" ;
					default: return false;

				}
				break;
		case 7:	switch(Date){
					case 12: return "Id-ul-Juha (Bakrid)" ;
					case 15: return "Independence Day" ;
					default: return false;

				}
				break;
		case 8:	switch(Date){
					case 2: return "Ganesh Chaturthi" ;
					case 10: return "Muharram" ;
					default: return false;

				}
				break;
		case 9:	switch(Date){
					case 2: return "Mahatma Gandhi Jayanti" ;
					case 8: return "Dussehra" ;
					case 27: return "Diwali" ;
					default: return false;

				}
				break;
		case 10:switch(Date){
					case 10: return "Id-e-Milad" ;
					case 11: return "Guru Nanak Birthday" ;
					default: return false;

				}
				break;
		case 11:switch(Date){
					case 25: return "Christmas Festival" ;
					default: return false;

				}
				break;

	}
}