// read all

// SELECT * FROM inventory
db.inventory.find();
db.inventory.find({});

// read in conditions

// SELECT * FROM inventory WHERE status = "D"
db.inventory.find({
  status: "D",
});
// SELECT * FROM inventory WHERE status in ("A", "D")
db.inventory.find({
  status: {
    $in: ["A", "D"],
  },
});

// and operator

// SELECT * FROM inventory WHERE status = "A" AND qty < 30
db.inventory.find({
  status: "A",
  qty: {
    $lt: 30,
  },
});

// or operator

// SELECT * FROM inventory WHERE status = "A" OR qty < 30
db.inventory.find({
  $or: [
    {
      status: "A",
    },
    {
      qty: {
        $lt: 30,
      },
    },
  ],
});

// mix

// SELECT * FROM inventory WHERE status = "A" AND ( qty < 30 OR item LIKE "p%")
db.inventory.find({
  status: "A",
  $or: [
    {
      qty: {
        $lt: 30,
      },
    },
    {
      item: /^p/,
    },
  ],
});

// find one
db.bios.findOne();
db.bios.findOne({
  $or: [
    {
      "name.first": /^G/,
    },
    {
      birth: {
        $lt: new Date("01/01/1945"),
      },
    },
  ],
});

// aggregation pipeline
db.orders.aggregate([
  // Stage 1: Filter pizza order documents by pizza size
  {
    $match: {
      size: "medium",
    },
  },

  // Stage 2: Group remaining documents by pizza name and calculate total quantity
  {
    $group: {
      _id: "$name",
      totalQuantity: {
        $sum: "$quantity",
      },
    },
  },
]);

db.orders.aggregate([
  // Stage 1: Filter pizza order documents by date range
  {
    $match: {
      date: {
        $gte: new ISODate("2020-01-30"),
        $lt: new ISODate("2022-01-30"),
      },
    },
  },

  // Stage 2: Group remaining documents by date and calculate results
  {
    $group: {
      _id: {
        $dateToString: {
          format: "%Y-%m-%d",
          date: "$date",
        },
      },
      totalOrderValue: {
        $sum: {
          $multiply: ["$price", "$quantity"],
        },
      },
      averageOrderQuantity: {
        $avg: "$quantity",
      },
    },
  },

  // Stage 3: Sort documents by totalOrderValue in descending order
  {
    $sort: { totalOrderValue: -1 },
  },
]);
