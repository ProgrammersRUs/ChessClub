package com.example.cms.service;

import com.example.cms.entity.News;
import com.example.cms.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService {

    @Autowired
    NewsRepository newsRepository;


    public News addNew(News news) {
        return newsRepository.save(news);
    }

    public News getNewsById(int id) {
        return newsRepository.findById(id).get();
    }

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }
}
