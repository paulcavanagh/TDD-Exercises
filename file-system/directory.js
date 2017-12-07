'use strict'

var FileDetails = require('./fileDetails');

class Directory {
    constructor(directoryName) {
        this.name = directoryName;
        this.files = [];
    };

    ls() {
        let arr = [];
        this.files.forEach(element => {
            arr.push(element.name);
        });
        return arr.sort();
    };

    write(fileName, fileContents) {
        let elementExists = this.files.filter((e) => {
            return e.name === fileName;
        }).length 

        if (elementExists === 0){
            let afile = new FileDetails(fileName, fileContents);
            this.files.push(afile);
        }
        else {
            this.files.map((element) => {
                if (element.name === fileName) {
                    element.contents = fileContents; 
                }          
            })
        }

    };

    ls_la() {
        let arr = [];
        this.files.forEach(element => {
            arr.push(element.name + ' - ' + element.contents.length);
        });
        return arr.sort();
    };

    cat(fileName) {
        return this.files.filter((element) => {
            return (element.name === fileName);
        }).map((element) => {
            return element.contents;
        }).sort().toString();

    };

    mv(fileNm, updatedFileNm) {
        let result = this.files.filter((element) => {
            if (element.name == fileNm) {
                element.name = updatedFileNm;
                return element;
            }
        });
        this.files = result;
    };

    cp(fileNm1, fileNm2) {
        this.files.filter((element) => {
            return (element.name === fileNm1);
        }).map((element) => {
            let afile = new FileDetails(fileNm2, element.contents);
            this.files.push(afile);
        });
    };

    ln_s(fileNm1, fileNm2){
        this.cp(fileNm1, fileNm2);

    };

};

module.exports = Directory