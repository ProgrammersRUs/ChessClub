package com.example.cms.controller;

import com.example.cms.entity.News;
import com.example.cms.model.User;
import com.example.cms.service.NewsService;
import com.example.cms.service.UserService;
import com.example.cms.wrapper.UserNewsWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("news")
public class NewsController {

    @Autowired
    NewsService newsService;

    @Autowired
    UserService userService;

    @PostMapping("/new")
    public ResponseEntity<News> postNews(@RequestBody UserNewsWrapper userNewsWrapper) {
        if(userNewsWrapper.getUser() != null){
            if(!userService.validateUser(userNewsWrapper.getUser())){
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            News response = newsService.addNew(userNewsWrapper.getNews());
            return new ResponseEntity<>(response, HttpStatus.CREATED);

        }return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
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
    public ResponseEntity<News> updateNews(@PathVariable int id, @RequestBody UserNewsWrapper userNewsWrapper) {
        if (userNewsWrapper.getUser() != null) {
            if (!userService.validateAdmin(userNewsWrapper.getUser())) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            Optional<News> optNews = newsService.findByisOpt(id);
            if (optNews.isPresent()) {
                newsService.addNew(userNewsWrapper.getNews());
                return new ResponseEntity<>(userNewsWrapper.getNews(), HttpStatus.OK);
            } else {
                News newsNotFound = new News();
                newsNotFound.setNewsHeader("No news with id: " + id);
                return new ResponseEntity<>(newsNotFound, HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNews(@PathVariable int id, @RequestBody User user) {
        if (user != null) {
            System.out.println(user.getUserEmail() + " : "+user.getId() + ": "+ user.isAdminStatus());
            boolean access = userService.validateAdmin(user);
            System.out.println(access);
            if (!access) {
                return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
            }
            try {
                newsService.deleteNews(id);
                return new ResponseEntity<>("Member Deleted with id: " + id, HttpStatus.OK);
            } catch (Exception e) {
                return new ResponseEntity<>(e.getMessage(), HttpStatus.NOT_FOUND);
            }
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

}
