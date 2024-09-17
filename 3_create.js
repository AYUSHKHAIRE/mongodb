// insert one document
db.inventory.insertOne({
  item: "laptop",
  quantity: 10,
  price: 10000,
});

// insert many document
db.inventory.insertMany([
  {
    item: "journal",
    qty: 25,
    size: { h: 14, w: 21, uom: "cm" },
    status: "A",
  },
  {
    item: "notebook",
    qty: 50,
    size: { h: 8.5, w: 11, uom: "in" },
    status: "A",
  },
  { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
  {
    item: "planner",
    qty: 75,
    size: { h: 22.85, w: 30, uom: "cm" },
    status: "D",
  },
  {
    item: "postcard",
    qty: 45,
    size: { h: 10, w: 15.25, uom: "cm" },
    status: "A",
  },
]);

// insert findandmodify
db.inventory.findAndModify({
  query: { item: "notebook" },
  sort: { qty: 1 },
  update: { $inc: { qty: 1000 } },
});

// replace one document
db.inventory.findOneAndReplace(
  {
    qty: {
      $gt: 92,
      $lt: 96,
    },
  },
  {
    item: "modified journal",
  }
);

// sort and replace a doc
db.inventory.insertMany([
  {
    _id: 1,
    team: "Fearful Mallards",
    score: 25000,
  },
  {
    _id: 2,
    team: "Tactful Mooses",
    score: 23500,
  },
  {
    _id: 3,
    team: "Aquatic Ponies",
    score: 19250,
  },
  {
    _id: 4,
    team: "Cuddly Zebras",
    score: 15235,
  },
  {
    _id: 5,
    team: "Garrulous Bears",
    score: 18000,
  },
]);
db.inventory.findOneAndReplace(
  { score: { $lt: 20000 } },
  { team: "Observant Badgers", score: 20000 },
  { sort: { score: 1 } }
);
