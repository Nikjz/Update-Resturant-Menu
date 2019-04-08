# Update-Resturant-Menu

To install all the node module run the below command - 

      npm install express --save

      npm install sqlite

      npm install bluebird


Create Rest API for the below - 

 1) Get a menu section by id. For this scenario run the following code and try hitting the below URL and at end of the URL mention the id of the Menu Section.
         
         http://localhost:3000/menusection/id     ---- Replace id with ID in the Menu Section
         
         Expected output - 
         
         {
                "MenuSection": [
                    {
                        "name": "Lunch Special",
                        "id": 1
                    }
                ]
          }
         
 2) Get all menu section. For this scenario run the following code and try hitting the below URL to get all the menu sections.
         
         http://localhost:3000/menusection
         
         Expected output - 
               {
                      "MenuSection": [
                          {
                              "name": "Lunch Special",
                              "id": 1
                          },
                          {
                              "name": "Breakfast Special",
                              "id": 2
                          },
                          {
                              "name": "Dinner Special",
                              "id": 3
                          }
                      ]
            }
   
   3) Add a new menu section. For this scenario run the given code and use PostMan tool to send the request body which will have the name of the new Menu Section to be added.
         
         Resquest Body - 
         
         "name":"Chicken Special"
         
         Response Body - 
         
         {
                "success": true,
                "MenuSection": [
                    {
                        "name": "Chicken Special",
                        "id": 7
                    }
                ]
            }




