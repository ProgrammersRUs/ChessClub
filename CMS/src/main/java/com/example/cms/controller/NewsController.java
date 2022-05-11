package com.example.cms.controller;

import com.example.cms.entity.News;
import com.example.cms.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("news")
public class NewsController {

    @Autowired
    NewsService newsService;

    //CREATE
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public News postMember(@RequestBody News news) {
        return newsService.addNew(news);
    }

    //READ
    @GetMapping("/{id}")
    public News findById(@PathVariable int id) {
        return newsService.getNewsById(id);
    }
    //READ ALL MEMBERS
    @GetMapping("/all-news")
    public List<News> getAllMembers() {
        return newsService.getAllNews();
    }

}
