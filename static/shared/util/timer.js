export function timeFormat(dateString){
	const date = new Date(dateString);
	const year = date.getFullYear();
	const _month = date.getMonth()+1;
	const month = _month < 10 ? `0${_month}` : _month;
	const _day = date.getDate();
	const day = _day < 10 ? `0${_day}` : _day;
	const _hour = date.getHours();
	const hour = _hour < 10 ? `0${_hour}` : _hour;
	const _minute = date.getMinutes();
	const minute = _minute < 10 ? `0${_minute}` : _minute;
	const _second = date.getSeconds();
	const second = _second < 10 ? `0${_second}` : _second; 

	const ary1 = [];
	ary1.push(year, month, day)
	const ary2 = [];
	ary2.push(hour, minute, second)

	return `${ary1.join('-')} ${ary2.join(':')}`;
}