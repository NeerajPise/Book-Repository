package com.neerajscanbuy.app.rest.Models;

import javax.persistence.*;

@Entity
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column
    private long isbn;
    @Column
    private String bookName;
    @Column
    private String authorName;
    @Column
    private int numPages;
    @Column
    private boolean bookRead;
    @Column
    private String notes;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }

    public int getNumPages() {
        return numPages;
    }

    public void setNumPages(int numPages) {
        this.numPages = numPages;
    }

    public boolean isBookCompleted() {
        return bookRead;
    }

    public void setBookCompleted(boolean bookCompleted) {
        this.bookRead = bookCompleted;
    }

    public long getISBN() {
        return isbn;
    }

    public void setISBN(long ISBN) {
        this.isbn = ISBN;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
