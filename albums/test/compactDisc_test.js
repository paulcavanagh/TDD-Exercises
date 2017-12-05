var expect = require('chai').expect;
var CompactDisc = require('../compactDisc');
var Shelf = require('../shelf');

describe('Shelf', function() {

  it("gets initialized with a space capacity", function() {

    var shelf = new Shelf(20);
    expect(shelf.spaces).to.equal(20);
    expect((new Shelf(30)).spaces).to.equal(30);

  });

  it("starts out with free spaces equal to the capacity", function() {
  
    var topShelf = new Shelf(20);
    expect(topShelf.freeSpaces()).to.equal(20);
  
    var bottomShelf = new Shelf(30);
    expect(bottomShelf.freeSpaces()).to.equal(30);
  
  });
  
  
  it("allows you to add an album with a title, name and number of tracks to the shelf", function() {
  
    var shelf = new Shelf(10);
    var adele = new CompactDisc(1, 'Adele', '21');
    var vanHalen = new CompactDisc(2, 'Van Halen', '1984');
  
    shelf.add(adele);
    expect(shelf.freeSpaces()).to.equal(9);
  
    shelf.add(vanHalen);
    expect(shelf.freeSpaces()).to.equal(8);
  
    expect(shelf.spaces).to.equal(10);
  
  });
  
  
  it("allows you to see full names of album details (in the order they were added)", function() {
  
    var shelf = new Shelf(4);
    var adele = new CompactDisc(1, 'Adele', '21');
    var vanHalen = new CompactDisc(2, 'Van Halen', '1984');
  
    expect(shelf.albumDetails()).to.deep.equal([]);
  
    shelf.add(adele);
    expect(shelf.albumDetails()).to.deep.equal(['Adele (21)']);
  
    shelf.add(vanHalen);
    expect(shelf.albumDetails()).to.deep.equal(['Adele (21)', 'Van Halen (1984)']);
  
  });
  
  
  it("allows you to get the total cost of all the albums on your shelf", function() {
  
    var shelf = new Shelf(4);
  
    var adele = new CompactDisc(1, 'Adele', '21', 12);
    var vanHalen = new CompactDisc(2, 'Van Halen', '1984');
    var acdc = new CompactDisc(3, 'AC/DC', 'Back in Black');
  
    shelf.add(adele, 9.99);
    expect(shelf.amountPaid()).to.equal(9.99);
  
    shelf.add(vanHalen, 11.99);
    expect(shelf.amountPaid()).to.equal(21.98);
  
    shelf.add(acdc, 10.99)
    expect(shelf.amountPaid()).to.equal(32.97);
  
  });
  
  
  it("allows albums to be moved around the shelf", function() {
  
    var shelf = new Shelf(4);
  
    var adele = new CompactDisc(1, 'Adele', '21', 12);
    var vanHalen = new CompactDisc(2, 'Van Halen', '1984');
    var acdc = new CompactDisc(3, 'AC/DC', 'Back in Black');
    var pink = new CompactDisc(4, 'Pink', 'Beautiful Trauma');
  
    shelf.add(adele);
    shelf.add(vanHalen);
    shelf.add(acdc);
    shelf.add(pink);
  
    shelf.swapAlbums(acdc, adele);
    shelf.swapAlbums(pink, vanHalen);
    shelf.swapAlbums(adele, pink);
  
    expect(shelf.albumDetails()).to.deep.equal(['AC/DC (Back in Black)',
                                                'Adele (21)',
                                                'Pink (Beautiful Trauma)',
                                                'Van Halen (1984)']);
  });

});
