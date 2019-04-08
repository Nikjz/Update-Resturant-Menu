# Update-Resturant-Menu

To install all the node module run the below command - 

      npm install


The sample SQLite schema looks like - 




Create Rest API for the below - 

 1) Get a menu section by id. For this scenario run the following code and try hitting the below URL and at end of the URL mention the id of the Menu Section.
         
         http://localhost:3000/menusection/id     ---- Replace id with ID in the Menu Section
         
         Sample Request - 
         
              http://localhost:3000/menusection/1 
         
         Response Body -
         
         {
                "MenuSection": [
                    {
                        "name": "Lunch Special",
                        "id": 1
                    }
                ]
          }
         
 2) Get all menu section. For this scenario run the following code and try hitting the below URL to get all the menu sections.
         
         Sample Request -
         
              http://localhost:3000/menusection
         
         Response Body - 
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
   
   3) Add a new menu section. For this scenario run the given code, use the PUT method in PostMan tool to send the request body which will have the name of the new Menu Section to be added.
            
            Sample Request -
         
                 http://localhost:3000/menusection
            
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
                  
   4) Update the existing new menu section. For this scenario run the given code, use the POST method in PostMan tool to send the request body which will update the name of the Menu Section and the URL is also needed to pass the id.
            
            http://localhost:3000/menusection/id     ---- Replace id with ID in the Menu Section
         
            Sample Request -
         
               http://localhost:3000/menusection/7
            Resquest Body - 

               "name":"Chicken Special New"
         
            Response Body - 

               {
                      "success": true,
                      "MenuSection": [
                          {
                              "name": "Chicken Special New",
                              "id": 7
                          }
                      ]
               }
               
   5) Delete the existing new menu section. For this scenario run the following code and try hitting the below URL and at end of the URL mention the id of the Menu Section.
         
            http://localhost:3000/menusection/id     ---- Replace id with ID in the Menu Section
         
            Sample Request -
         
                  http://localhost:3000/menusection/7
         
            Response Body - 

               {
                  "success": true
               }




