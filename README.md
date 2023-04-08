# E-commerce Back End

## Description

This is a back end web app that was designed for an online store. It was build with Node.js, Express and Sequelize<br/>
It simulates routes to veiw, update and delete products/categories or tags in database.


## Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Questions](#questions)
- [License](#license)

## Installation

- Clone application [E-commerce Back End](https://github.com/TerryKor/E-Commerce-Back-End)<br />

- Create `.env` file in derictory using this sample:<br />
```
DB_NAME = 'ecommerce_db'(database name)
DB_USER = ''(username)
DB_PW = ''(password)
```
- Then in file directory, to install necessary dependencies, run the following command:
```
npm i
```
- To seed the data base run:<br />
```
node seeds/index.js
```

- To run the app run the following command:<br />
```
node server.js
```

- To test API routes use [Insomnia](https://insomnia.rest/download)  or [Postman](https://www.postman.com/downloads/)<br />

API routes to Categories:

`http://localhost:3001/api/categories/`    &nbsp;  to view all categories<br/>

`http://localhost:3001/api/categories/:id` &nbsp; to view category by ID<br/>

`http://localhost:3001/api/categories/`    &nbsp; to create category (i.e {"category_name": "computer"})<br/>

`http://localhost:3001/api/categories/:id` &nbsp;  to update category by ID (i.e {"category_name": "computer parts"})<br/>

`http://localhost:3001/api/categories/:id` &nbsp;  to delete category by ID<br/>

API routes to Products:

`http://localhost:3001/api/products`    &nbsp;  to view all products<br/>

`http://localhost:3001/api/products/:id` &nbsp; to view product by ID<br/>

`http://localhost:3001/api/products/`    &nbsp; to create product (i.e {   "product_name": "Basketball","price": 200.00,"stock": 3,"tagIds": [1, 2, 3, 4]})<br/>

`http://localhost:3001/api/products/:id` &nbsp;  to update product by ID (i.e {"price": 300.00})<br/>

`http://localhost:3001/api/products/:id` &nbsp;  to delete product by ID<br/>

API routes to Tags:

`http://localhost:3001/api/tags/`    &nbsp;  to view all tags<br/>

`http://localhost:3001/api/tags/:id` &nbsp; to view tag by ID<br/>

`http://localhost:3001/api/tags`    &nbsp; to create tag (i.e {"tag_name": "tag"})<br/>

`http://localhost:3001/api/tags/:id` &nbsp;  to update tag by ID (i.e {"tag_name": "pro tag"})<br/>

`http://localhost:3001/api/tags/:id` &nbsp;  to delete tag by ID<br/>


- Note: please make sure you have installed [MySQL](https://www.mysql.com/downloads/) and created account;<br />

- To create schema run the following commands:<br />
to login to MYSQL and enter password when prompted, run the following command:<br />
```
mysql -u root -p (where "root" is your user name)
```
- then run:
```
source ./db/schema.sql 
```

## Usage

You can see demonstration video [here](https://drive.google.com/file/d/1ajYa-n8Vc4IyDqoJ_nxMRUWPyQhxPdmE/view)<br />


## Contribution

Application was created by Terry Kornienko and if you want to contribute send me email.<br />

## Questions

My Email:
[misterfreemann@gmail.com](mailto:misterfreemann@gmail.com)
My Github:
[TerryKor](https://github.com/TerryKor)

## License

![badge](https://img.shields.io/badge/license-MIT-blue)