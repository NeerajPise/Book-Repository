package com.neerajscanbuy.app.rest.Repo;

import com.neerajscanbuy.app.rest.Models.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepository extends JpaRepository<Book, Long> {

    Book findByIsbn(long isbn);
    
}
