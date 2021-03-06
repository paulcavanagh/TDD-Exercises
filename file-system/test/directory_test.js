var Directory = require('../directory');
var expect = require('chai').expect;

describe('Directory', function () {
  it("has a name", function () {
    var directory = new Directory('workspace');
    expect(directory.name).to.equal('workspace');

    directory = new Directory('filestuff');
    expect(directory.name).to.equal('filestuff');
  });
  
  it("returns filenames in order with ls", function () {
    var directory = new Directory('workspace');
    expect(directory.ls()).to.deep.equal([]);
  
    directory.write("foo.txt", "w00t!");
    expect(directory.ls()).to.deep.equal(["foo.txt"]);
  
    directory.write("bar.txt", "Hello world");
    expect(directory.ls()).to.deep.equal(["bar.txt", "foo.txt"]);
  });
  
  it("returns filenames with size with ls_la", function () {
    var directory = new Directory('workspace');
    expect(directory.ls_la()).to.deep.equal([]);
  
    directory.write("foo.txt", "w00t!");
    expect(directory.ls_la()).to.deep.equal(["foo.txt - 5"]);
  
    directory.write("bar.txt", "Hello world");
    expect(directory.ls_la()).to.deep.equal(["bar.txt - 11", "foo.txt - 5"]);
  });
 
  it("returns the content of the given file with cat", function () {
    var directory = new Directory('workspace');
  
    directory.write("foo.txt", "w00t!");
    expect(directory.cat('foo.txt')).to.equal("w00t!");
  
    directory.write("bar.txt", "Hello world");
    directory.ls();
    expect(directory.cat('bar.txt')).to.equal("Hello world");
  });
  
  it("changes the name of a given file to another name with mv", function () {
    var directory = new Directory('workspace');
  
    directory.write("bar.txt", "Hello world");
    directory.mv("bar.txt", "foo.txt");
  
    expect(directory.cat('foo.txt')).to.equal('Hello world');
    expect(directory.ls()).to.deep.equal(['foo.txt']);
  });
  
  it("copies one object to another with cp", function () {
    var directory = new Directory('workspace');
  
    directory.write("bar.txt", "Hello world");
    directory.cp("bar.txt", "foo.txt");
    directory.write("bar.txt", "I've changed");
  
    expect(directory.cat('foo.txt')).to.equal('Hello world');
    expect(directory.cat('bar.txt')).to.equal("I've changed");
    expect(directory.ls()).to.deep.equal(['bar.txt', 'foo.txt']);
  });
  
  it("symlinks one object to another with ln_s", function () {
    var directory = new Directory('workspace');
  
    directory.write("bar.txt", "Hello world");
    directory.ln_s("bar.txt", "foo.txt");
    directory.write("bar.txt", "I've changed");
  
   //expect(directory.cat('foo.txt')).to.equal("I've changed");
   expect(directory.cat('bar.txt')).to.equal("I've changed");
   expect(directory.ls()).to.deep.equal(['bar.txt', 'foo.txt']);
  });
});
