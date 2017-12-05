var Shelf = function (spaces) {
    this.spaces = spaces;
    this.compactDiscList = [];
    this.amtPaid = [];
    
    this.freeSpaces = function () {
        return this.spaces - this.compactDiscList.length ;
    };
    this.add = function(album, price){
        this.compactDiscList.push(album);
        this.amtPaid.push(price);
    };

    this.albumDetails = function (){
        let albumDetails = [];
        this.compactDiscList.forEach(element => {
            albumDetails.push(element.artist + ' (' + element.album + ')')
        });
        return albumDetails;
    };

    this.amountPaid = function(){
        return this.amtPaid.reduce((total, amount) => total + amount); 
    };

    this.swapAlbums = function(album1, album2){    
        this.compactDiscList[this.compactDiscList.indexOf(album1)] = album2;
        this.compactDiscList[this.compactDiscList.indexOf(album2)] = album1;
    };
}

module.exports = Shelf
