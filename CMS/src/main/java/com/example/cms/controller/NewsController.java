package com.example.cms.controller;

import com.example.cms.entity.News;
import com.example.cms.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("news")
public class NewsController {

    @Autowired
    NewsService newsService;

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public News postNews(@RequestBody News news) {
        return newsService.addNew(news);
    }

    @GetMapping("/{id}")
    public News findById(@PathVariable int id) {
        return newsService.getNewsById(id);
    }

    @GetMapping("/all-news")
    public List<News> getAllNews() {
        return newsService.getAllNews();
    }



    @PutMapping("/{id}")
    public ResponseEntity<News> updateNews(@PathVariable int id, @RequestBody News news){
        Optional<News> optNews = newsService.findByisOpt(id);
        if (optNews.isPresent()){
            newsService.addNew(news);
            return  new ResponseEntity<>(news, HttpStatus.OK);
        } else {
            News newsNotFound = new News();
            newsNotFound.setNewsHeader("No news with id: " + id);
            return  new ResponseEntity<>(news, HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteNews(@PathVariable int id) {
        try {
            newsService.deleteNews(id);
            return new ResponseEntity<>("Member Deleted with id: " + id, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
        }

    }

}
