// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category,{
  foreignKey:'category_id'
});
// Categories have many Products
Category.hasMany(Product,{
  foreignKey:'category_id',
  onDelete:'CASCADE'//If a  category deleted then products belonging to that category gets deleted
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag,{
  // through:'product_id',
  through: ProductTag,
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product,{
  // foreignKey:'tag_id',
  through: ProductTag
});
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
