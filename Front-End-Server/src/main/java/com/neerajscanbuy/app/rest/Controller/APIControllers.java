package com.neerajscanbuy.app.rest.Controller;

import com.neerajscanbuy.app.rest.Models.Book;
import com.neerajscanbuy.app.rest.Repo.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class APIControllers {

    @Autowired
    private BookRepository bookRepository;

    @GetMapping(value="/")
    public String getHome() {
        return "Welcome";
    }

    @GetMapping(value="/api/v1/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }

    @GetMapping(value="/api/v1/books/{isbn}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Book getBookByISBN(@PathVariable long isbn) {
        return bookRepository.findByIsbn(isbn);
    }

    @PostMapping(value="/api/v1/save")
    @CrossOrigin(origins = "http://localhost:3000")
    public String saveBook(@RequestBody Book book) {
        bookRepository.save(book);
        return "Saved...";
    }

    @PutMapping(value="/api/v1/update/{isbn}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String updateBook(@PathVariable long isbn, @RequestBody Book book) {
        Book updatedBook =  bookRepository.findByIsbn(isbn);
        updatedBook.setBookCompleted(book.isBookCompleted());
        updatedBook.setBookName(book.getBookName());
        updatedBook.setNotes(book.getNotes());
        updatedBook.setAuthorName(book.getAuthorName());
        updatedBook.setNumPages(book.getNumPages());
        updatedBook.setISBN(book.getISBN());
        bookRepository.save(updatedBook);
        return "Saved";
    }

    @DeleteMapping(value="/api/v1/delete/{isbn}")
    @CrossOrigin(origins = "http://localhost:3000")
    public String deleteBookByISBN(@PathVariable long isbn) {
        Book bookToDelete = bookRepository.findByIsbn(isbn);
        bookRepository.delete(bookToDelete);
        return "Deleted";
    }
}
