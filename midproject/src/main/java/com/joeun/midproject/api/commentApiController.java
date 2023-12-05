package com.joeun.midproject.api;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.Comment;
import com.joeun.midproject.mapper.CommentMapper;
import com.joeun.midproject.service.CommentService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/api/comment")
public class commentApiController {
    
    @Autowired
    private CommentService commentService;

    @Autowired
    private CommentMapper commentMapper;

    @GetMapping()
    public ResponseEntity<?> getAll(Comment comment) {
        
        try {
            List<Comment>commentList = commentService.commentList(comment);
            return new ResponseEntity<List<Comment>>(commentList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @PostMapping()
    public ResponseEntity<?> create(@RequestBody Comment comment) {
        log.info("[POST] - /api/comment   ");
        try {
            int result = commentService.commentInsert(comment);
            Comment comment2 = commentMapper.select(result);

            return new ResponseEntity<Comment>(comment2, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<?> update(@RequestBody Comment comment) {
        try {
            int result = commentService.commentUpdate(comment);
            return new ResponseEntity<Integer>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{no}")
    public ResponseEntity<?> destroy(@PathVariable Integer no) {
        Comment comment =new Comment();
        comment.setCommentNo(no);
        try {
            int result = commentService.commentDelete(comment);
            return new ResponseEntity<Integer>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
