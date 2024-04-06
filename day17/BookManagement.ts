import Book from "./Book";
const readLine = require("readline-sync")
// import * as readLine from "readline-sync";

export default class BookManagement {
    static bookList: Book[]

    static startBooks():void {
        this.bookList = []
    }

    static getBooks():Book[] {
        return this.bookList
    }

    static addNewBook():void {
       
        let isbn:string = readLine.question("Please input isbn: ")
        // let  title:string = readLine.question("Please input title: ")
        // let author:string = readLine.question("Please input author: ")
        // let year: number= parseInt(readLine.question("Please input year: "),10)

        let newBook:Book = new Book("isbn", "title", "author", 12345)
        BookManagement.bookList.push(newBook)
    }
}
