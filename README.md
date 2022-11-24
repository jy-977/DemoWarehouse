# Demo Warehouse

Its aim is to provide a modern and responsive interface for viewing warehouse

![Screenshot]( /ScreenShot.PNG)

## How to run
1. Clone the repo
2. Run the command `npm install` followed by `npm start dev`on top level (/DemoWarehouse)

## Frameworks and Libraries
- Front End : React + Redux + Styled-component + javascript
    - Redux : On the small project, Redux might cause more problems than using context API. However, to prove the knowledge of Redux, I decide to use Redux even though Context API and useState hook can be simpler solution on this project. 
    - Styled-Component : This is a one of the best option to improve simplicity, readability of the React Project. 


- Back End : node.js + Express
    - DB : In this application, I decide to not to use Database since this is too small project to build and configure the database system. Still, if you want to expand the service, you are able to connect with Database. 


## Solution Approachs

    1. Collect requirements 
        Before starts the coding, To define the requirements is most important part of the project. There were some ambiguities on the assigned tasks. (No product id, No price of the prodect)

    2. Design 
        Since I decide to use the redux, The architecture of the store needs to be well organized. Mainly, There are 1)product_Reducer 2)Inventory_Reducer which are contain the list of the produts and articles.
        Also, The Routes of backend(/server) can be seperated in two phase into productRoute and inventoryRoute. So that it can be easily expanded and maintained since each data can be handled seperately. 
        < Pages Structures and tasks >
            1. Landing Page
            2. Products Page 
                - List up products 
                - increase and decrease the products (update the inventory automatically)
            3. Products Detail Page
                - present product article information
            4. Inventory Page
                - List up articles and stock of articles




### Technologies used
[React](https://reactjs.org/) |
[Redux](https://redux.js.org//) |
[React-Router-Dom](https://www.npmjs.com/package/react-router-dom) |
[Styled-components](https://styled-components.com/) |
[Express](https://expressjs.com/) |



### Suggestions
- 

