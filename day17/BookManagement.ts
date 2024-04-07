import { exit } from "process";
import Book from "./Book";
const readLine = require("readline-sync")
// import * as readLine from "readline-sync";

export default class BookManagement {
    static bookList: Book[]

    static selectMenu() {
        this.initBooks()
        console.log('1. New book');
        console.log('2. Find a book(ISBN)');
        console.log('3. Update a book');
        console.log('4. Delete a book');
        console.log('5. Print the book list');
        console.log('0. Exit');
        
        let isCont = true
        while(isCont) {
        let choice: string= readLine.question("\nPlease select your choice: ")
        switch(choice){
            case "1":
                this.addNewBook()
                break

            case "2":
                let isbnFindBook:string =  readLine.question("Please input isbn: ")
                let targetBook:Book|undefined = this.findBook(isbnFindBook)
                if(targetBook) {
                    console.log(`Found book ${JSON.stringify(targetBook)}`);
                    
                }else{
                    console.log('NO book found');                    
                }
                break

            case "3":
                let isbnUpdate =  readLine.question("Please input isbn to update book: ")
                this.updateBook(isbnUpdate)
                break

            case "4":
                let isbnDelete =  readLine.question("Please input isbn to delete book: ")
                this.deleteBook(isbnDelete)
                break

            case "5":
                this.printBookList()
                break

            case "0":
                isCont = false
        }
    }
    }

    static  initBooks():void {
        this.bookList = []
    }

    static getBooks():Book[] {
        return this.bookList
    }

    static  addNewBook():void {
        let isbn:string =  readLine.question("Please input isbn: ")
        let  title:string = readLine.question("Please input title: ")
        let author:string = readLine.question("Please input author: ")
        let year: number= Number(readLine.question("Please input year: "))

        let newBook:Book = new Book(isbn, title, author, year)
        BookManagement.bookList.push(newBook)
        console.log('Added');
        
    }

    static  findBook(isbn:string):Book|undefined {
        let targetBook:Book|undefined= BookManagement.bookList.find(function(book:Book){
            return book.getISBN() == isbn

        })
        return targetBook

    }

    static updateBook(isbn:string):void {
        let currentBook = this.findBook(isbn)
        if(currentBook){
            let  title:string = readLine.question("Please input title: ")
            let author:string = readLine.question("Please input author: ")
            let year: number= Number(readLine.question("Please input year: "))
            currentBook.setBookInfo(title, author, year)
            console.log(`The updated book is ${JSON.stringify(currentBook)}`);
            
        }else{
            console.log('No book found to update');
            
        }
    }

    static deleteBook(isbn:string) {
        let deleteBook = this.findBook(isbn)
        if(deleteBook) {
            let deleteIndex = BookManagement.bookList.indexOf(deleteBook)
            BookManagement.bookList.splice(deleteIndex, 1)
            if(!this.findBook(isbn)) {
                console.log('Deleted!');
            }     
        }else{
            console.log('No book found to delete');
            
        }
    }

    static printBookList() {
        console.log(this.getBooks());
    }

}
