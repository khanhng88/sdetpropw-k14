export default class Book {
    protected isbn: string
    protected title: string
    protected author: string
    protected year: number

    constructor(isbn:string, title:string, author:string, year:number) {
        this.isbn = isbn
        this.title = title
        this.author = author
        this.year = year
    }


    getISBN():string {
        return this.isbn
    }

    getTitle(): string {
        return this.title
    }

    getAuthor():string {
        return this.author
    }

    getYear(): number {
        return this.year
    }

}