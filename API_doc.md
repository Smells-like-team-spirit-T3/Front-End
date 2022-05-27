Get all trips:
GET
https://tripcalendarapi.azurewebsites.net/api/trips
///////////////////////////////////////////////////////////////////////////////

Get a trip by its id:
GET
https://tripcalendarapi.azurewebsites.net/api/trips/{id}
///////////////////////////////////////////////////////////////////////////////

Add a trip:
POST
https://tripcalendarapi.azurewebsites.net/api/trips
Json:
{
	"title" : "name",
	"startdate" : "2001-11-21",
	"enddate" : "2001-12-01",
	"cost" : 2999,
	"amountparticipants" : 3,
	"events" : []
}
/////////////////////////////////////////////////////////////////////////////////////
Edit a trip:
PUT
https://tripcalendarapi.azurewebsites.net/api/trips
Json:
{
	"id" : 1
	"title" : "name",
	"startdate" : "2001-11-21",
	"enddate" : "2001-12-01",
	"cost" : 2999,
	"amountparticipants" : 3,
	"events" : []
}
/////////////////////////////////////////////////////////////////////////////////////
Get events by trip id:
GET
https://tripcalendarapi.azurewebsites.net/api/events/trip?id={}
/////////////////////////////////////////////////////////////////////////////////////
Get an event by its id:
GET
https://tripcalendarapi.azurewebsites.net/api/events/{id}
/////////////////////////////////////////////////////////////////////////////////////
Add an event to a trip:
POST
https://tripcalendarapi.azurewebsites.net/api/events?id={}
*id – id of a trip
Json:
{
	"title" : "title-3",
	"type" : "type-3",
	"startdate" : "2001-11-21",
	"enddate" : "2001-11-25",
	"cost" : 100,
	"duration" : 2,
	"description" : "description-3"
}
/////////////////////////////////////////////////////////////////////////////////////
Edit an event:
PUT
https://tripcalendarapi.azurewebsites.net/api/events
Json:
{
	"id" : 1
	"title" : "title-3",
	"type" : "type-3",
	"startdate" : "2001-11-21",
	"enddate" : "2001-11-25",
	"cost" : 100,
	"duration" : 2,
	"description" : "description-3"
}
