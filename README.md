# Inventory

Inventory App create using T3 Stack
## Todo List
- Create Dashboard
- Implement Product CRUD operations
  - Create a new product
  - Read product details
  - Update product information
  - Delete a product
- Implement Inventory management features
  - Track inventory levels
  - Update inventory quantities
  - Generate inventory reports
  - Check in items
  - Check out items
- Implement User management features
  - Register new users
  - Update user profiles
  - Delete users
- Add authentication and authorization
  - Implement login and logout functionality
  - Implement role-based access control
- Design and implement API endpoints
- Test all functionalities
- Deploy the application

// Add your content here
## Table 

- Product
  - id : number (Unique identifier for the product)
  - name : string (Name of the product)
  - status : enum (Current status of the product: ACTIVE, INACTIVE, DISCONTINUED)
  - id_warehouse : number (Identifier for the warehouse where the product is stored)
  - createdAt : Date (Date when the product was created)
  - updatedAt : Date (Date when the product was last updated)
- Inventory
  - id : number (Unique identifier for the inventory)
  - name : string (Name of the inventory)
  - status : enum (Current status of the inventory: ACTIVE, INACTIVE)
  - id_warehouse : number (Identifier for the warehouse where the inventory is stored)
  - createdAt : Date (Date when the inventory was created)
  - updatedAt : Date (Date when the inventory was last updated)
- Warehouse
  - id : number (Unique identifier for the warehouse)
  - name : string (Name of the warehouse)
  - status : enum (Current status of the warehouse: ACTIVE, INACTIVE)
  - id_user_charge : number (Identifier for the user in charge of the warehouse)
  - createdAt : Date (Date when the warehouse was created)
  - updatedAt : Date (Date when the warehouse was last updated)
- User
  - id : number (Unique identifier for the user)
  - name : string (Name of the user)
  - status : enum (Current status of the user: ACTIVE, INACTIVE)
  - id_warehouse : number (Identifier for the warehouse where the user is assigned)
  - createdAt : Date (Date when the user was created)
  - updatedAt : Date (Date when the user was last updated)

### Route
- Dashboard
- Warehouse
  - Warehouse
    - Show warehouse location
      - check in
      - check out
      - stock opname
    - Add new warehouse
      - Name
      - Select Staff
      - Select Location
  - Service center
    - Show service location
      - Change service status
    - Add new service
- Master Data
  - Model
  - Product
    - Create Product
      - masukan data product
      - pilih model
      - pilih warehouse
    - Update Product
    - Delete Product
  - 
