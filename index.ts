#!/usr/bin/env node
//Shabang

//class book

class Book {
    title: string;
    author: string;
    isbn: string;
    isBorrowed: boolean;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isBorrowed = false;
    }

    toString(): string {
        return `${this.title} by ${this.author} (ISBN: ${this.isbn})`;
    }

    borrowBook(): boolean {
        if (!this.isBorrowed) {
            this.isBorrowed = true;
            return true;
        }
        return false;
    }

    returnBook(): boolean {
        if (this.isBorrowed) {
            this.isBorrowed = false;
            return true;
        }
        return false;
    }
}

// cli Member class

class Member {
    name: string;
    memberId: string;
    borrowedBooks: Book[];

    constructor(name: string, memberId: string) {
        this.name = name;
        this.memberId = memberId;
        this.borrowedBooks = [];
    }

    toString(): string {
        return `Member: ${this.name} (ID: ${this.memberId})`;
    }

    borrowBook(book: Book): boolean {
        if (book.borrowBook()) {
            this.borrowedBooks.push(book);
            return true;
        }
        return false;
    }

    returnBook(book: Book): boolean {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1 && book.returnBook()) {
            this.borrowedBooks.splice(index, 1);
            return true;
        }
        return false;
    }
}

//Library

class Library {
    books: Book[];
    members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    addMember(member: Member): void {
        this.members.push(member);
    }

    findBookByTitle(title: string): Book | undefined {
        return this.books.find(book => book.title === title);
    }

    findMemberById(memberId: string): Member | undefined {
        return this.members.find(member => member.memberId === memberId);
    }

    displayBooks(): void {
        this.books.forEach(book => console.log(book.toString()));
    }

    displayMembers(): void {
        this.members.forEach(member => console.log(member.toString()));
    }
}

//Library management system

function main() {
    const library = new Library();

    // Add books to the library
    const book1 = new Book(" Jannat Kay Pattay ", "Nemrah Ahmed", "1234567890");
    const book2 = new Book(" Namal ", " Nemrah Ahmed ", "0987654321");
    const book3 = new Book(" Haalim ", " Nemrah Ahmed", "133456789" );
    const book4 = new Book(" Maala", " Nemrah Ahmed" , "134567890");
    const book5 = new Book(" Peer e Kamil" , "Umerah Ahmed" , "13567890");
    const book6 = new Book("Abe Hayat" , "Umerah Ahmed" , "136789056");
    const book7 = new Book(" Amar Bail" , "Umerah Ahmed" , "13789000");
    const book8 = new Book("Karakoram Ka Taj Mahal ", "Nemrah Ahmed" , "13890765");
    const book9 = new Book("Pahari Ka Qaidi", "Nemrah Ahmed" , "14567890000");
    const book10 =new Book("Tamseel ul Nur","Tayyaba Naseer Ahmed" , "148912345");
    library.addBook(book1);
    library.addBook(book2);
    library.addBook(book3);
    library.addBook(book4);
    library.addBook(book5);
    library.addBook(book6);
    library.addBook(book7);
    library.addBook(book8);
    library.addBook(book9);
    library.addBook(book10);

    // Add members to the library
    const member1 = new Member("Hassan", "M001");
    const member2 = new Member("Tayyaba", "M002");
    const member3 = new Member("Faris", "M003");
    const member4 = new Member("Haya", "M004");
    library.addMember(member1);
    library.addMember(member2);
    library.addMember(member3);
    library.addMember(member4);
    // Display books and members
    console.log("Books in the library:");
    library.displayBooks();
    console.log("\nMembers of the library:");
    library.displayMembers();

    // Borrow and return books
    console.log("\nBorrowing book:");
    if (member1.borrowBook(book1)) {
        console.log(`${member1.name} successfully borrowed '${book7.title}'`);
    } else {
        console.log(`${member1.name} could not borrow '${book7.title}'`);
    }

    console.log("\nReturning book:");
    if (member1.returnBook(book1)) {
        console.log(`${member2.name} successfully returned '${book2.title}'`);
    } else {
        console.log(`${member2.name} could not return '${book2.title}'`);
    }

    console.log("\nBorrowing book:");
    if (member1.borrowBook(book1)) {
        console.log(`${member3.name} successfully borrowed '${book10.title}'`);
    } else {
        console.log(`${member3.name} could not borrow '${book10.title}'`);
    }
    console.log("\nReturning book:");
    if (member1.returnBook(book1)) {
        console.log(`${member4.name} successfully returned '${book9.title}'`);
    } else {
        console.log(`${member4.name} could not return '${book9.title}'`);
    }

}

main();
