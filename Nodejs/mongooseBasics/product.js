const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO ERROR!!!!");
    console.log(err);
  });

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20,
  },

  OnSale: {
    type: Boolean,
    default: false,
  },

  price: {
    type: Number,
    min: [0, "price must be positive"],
  },
  category: [String],

  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
  },

  size: {
    type: String,
    enum: ["S", "M", "L"],
  },
});

productSchema.methods.greet = function () {
  console.log("HELLO!!! HI!! HOWDY");
  console.log(`from - ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.OnSale = !this.OnSale;
  return this.save();
};
productSchema.methods.addCategory = function (newCat) {
  this.category.push(newCat);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({}, { OnSale: true, price: 0 });
};
const Product = mongoose.model("Product", productSchema);

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Bike Helmet" });
  console.log(foundProduct);
  foundProduct.toggleOnSale();
  console.log(foundProduct);
  foundProduct.addCategory("tucson helmet");
  console.log(foundProduct);
};
findProduct();

Product.fireSale().then((res) => console.log(res));

const bike = new Product({
  name: "Cycling jersey",
  price: 49.2,
  category: ["Cycling", "Safety", "123"],
  size: "XL",
});
bike
  .save()
  .then((data) => {
    console.log("IT WORKED");
    console.log(data);
  })
  .catch((err) => {
    console.log("OH NO ERROR!!");
    console.log(err);
  });

// Product.findOneAndUpdate(
//   { name: "tire pump" },
//   { price: -19 },
//   { new: true, runValidators: true }
// )
//   .then((data) => {
//     console.log("IT WORKED");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO ERROR!!");
//     console.log(err);
//   });
