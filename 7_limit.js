// will get only one and first element
db.inventory.find().limit(1);

// skip first and then get document
db.inventory.find().limit(1).skip(1);

// sort in increasing order
db.inventory.find().sort({ qty: 1 });

// sort in decreasing order
db.inventory.find().sort({ qty: -1 });

// a simple example : pagination in your website
// 1 to 10
no = 8;
db.blogs()
  .find()
  .skip((pageno - 1) * no)
  .limit(no);
db.blogs().find().skip(0).limit(8);
db.blogs().find().skip(8).limit(8);
