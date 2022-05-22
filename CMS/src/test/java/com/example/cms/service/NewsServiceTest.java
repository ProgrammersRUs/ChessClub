package com.example.cms.service;

import com.example.cms.entity.News;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.NoSuchElementException;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@Import(NewsService.class)
@DataJpaTest
class NewsServiceTest {

    @Autowired
    NewsService newsService;

    @BeforeEach
    void beforeEach() {


    }

    @Test
    void testIfNewsIsSavedPass() {

        //arrange
        News news = new News();
        news.setNewsHeader("test");
        newsService.addNew(news);

        //act
        News savedNews = newsService.getNewsById(2);

        //assert
        assertEquals("test", savedNews.getNewsHeader());
    }

    @Test
    void testIfNewsIsSavedFailed() {

        //arrange
        News news = new News();
        news.setNewsHeader("test");
        newsService.addNew(news);

        //act
        News savedNews = newsService.getNewsById(1);

        //assert
        assertNotEquals("test-fail", savedNews.getNewsHeader());
    }

    @Test
    void testIfNewsIsDeletedSucces() {

        //arrange
        News news = new News();
        news.setNewsHeader("test");
        newsService.addNew(news);

        //act
        newsService.deleteNews(1);

        //assert
        assertThrows(NoSuchElementException.class, () -> newsService.getNewsById(1) );
    }


}