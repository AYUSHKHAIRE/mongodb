// delete all
db.inventory.deleteMany({});

// delete all object with a condition
db.inventory.deleteMany({
  status: "A",
});

// only one object with a condition
db.inventory.deleteOne({
  status: "D",
});
