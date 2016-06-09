# Submit_test
Display Contacts/Outlets Coding Exercise

For this exercise, you will create a web page that will read in and display a collection of Media Contacts and therr Outlets.

Requirements

The following requirements apply:

The application should read in the supplied Outlet and Contact data to use for display
Records should be shown in a grid type control with the following information:

Contact Name (First and Last)
Contact Title
Outlet name (outlet that they are associated with using the OutletId)
Contact Profile
The grid should be sortable

Paging should be implemented so that there are 25 contacts per page
The grid should be styled so that every other row is highlighted/shaded
The application can be in any format you wish (e.g. AngularJS app, static files, nodejs app, MVC App, etc…) - NOTE: AngularJS is the preferred method.
The finished application should have no external dependencies (e.g. a database connection)
Feel free to use any third party/open source libraries
Delivery of project can be via zip file, GitHub repository or other
Data Format

Included in this project are two JSON files, one that defines Outlets and one that defines Contacts that belong to outlets. The structure of the data is defined as follows:

Outlet
Id - int
Name - string
Contacts - List
Contact
Id - int
OutletId - int
FirstName - string
LastName - string
Title - string
Profile - string
When reading in the JSON data, Contacts should be related to thier parent Outlet.

Example Outlet Data:

{
  "id": 1374048,
  "name": "Educational Marketer"
},
Example Contact Data:

{
  "id": 4415401,
  "outletId": 1374048,
  "firstName": "Kathleen",
  "lastName": "Mickey",
  "title": "Managing Editor",
  "profile": "Mickey is the Managing Editor for Educational Marketer and Electronic Education Report and covers Print and Electronic Educational Publishing. Do not send photographs or article submissions as they only accept story ideas and press releases. She can be contacted via e-mail.  Mickey has served as the managing editor for Educational Marketer and Electronic Education Report since 2000."
},
