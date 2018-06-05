function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
  this.numOfPages = Math.ceil(this.collection.length / this.itemsPerPage);

  this.pages = {};
  var start = 0;
  var end = this.itemsPerPage;

  for(var i = 0; i < this.numOfPages; i++) {
    this.pages[i] = this.collection.slice(start, end);
    start += this.itemsPerPage;
    end += this.itemsPerPage;
  }
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return this.numOfPages;
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.pages[pageIndex] ? this.pages[pageIndex].length : -1;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  return this.collection[itemIndex] ? 
    Math.floor(itemIndex / this.itemsPerPage) : 
    -1;
};