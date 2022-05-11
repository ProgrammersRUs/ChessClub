package com.example.cms.service;

import com.example.cms.entity.News;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
@Import(NewsService.class)

class NewsServiceTest {

    @Autowired
    NewsService newsService;

    @BeforeEach
    void beforeEach(){


    }

    @Test
    void testIfNewsIsSavedPass() {

        News news = new News();
        news.setNewsHeader("test");

        newsService.addNew(news);

        News savedNews = newsService.getNewsById(2);

        assertEquals("test",savedNews.getNewsHeader());
    }

    @Test
    void testIfNewsIsSavedFailed() {

        News news = new News();
        News news2 = new News();

        newsService.addNew(news);

        News savedNews = newsService.getNewsById(1);

        assertNotEquals(savedNews,news2);
    }


}