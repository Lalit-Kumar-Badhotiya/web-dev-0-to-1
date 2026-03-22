/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  var obj = [];

  for (var i = 0; i < transactions.length; i++) {
    var cat = transactions[i].category;
    var index = ispresent(obj, cat);

    if (index !== -1) {
      obj[index].totalSpent += transactions[i].price;
    } else {
      obj.push({
        category: cat,
        totalSpent: transactions[i].price
      });
    }
  }

  return obj;
}

function ispresent(obj, category) {
  for (var i = 0; i < obj.length; i++) {
    if (obj[i].category === category) {
      return i;
    }
  }
  return -1;
}

module.exports = calculateTotalSpentByCategory;