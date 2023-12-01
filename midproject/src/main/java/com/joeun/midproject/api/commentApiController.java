package com.joeun.midproject.api;

import java.util.List;

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

import com.joeun.midproject.dto.Comment;
import com.joeun.midproject.service.CommentService;

import groovy.util.logging.Slf4j;

@Slf4j
@RequestMapping("/api/comment")
public class commentApiController {
    
    @Autowired
  private CommentService commentService;

    @GetMapping()
    public ResponseEntity<List<Comment>> getAll(@RequestBody Comment comment) {

        try {
            List<Comment>commentList = commentService.commentList(comment);
            return new ResponseEntity<>(commentList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    
    @PostMapping()
    public ResponseEntity<Integer> create(@RequestBody Comment comment) {
        try {
            int result = commentService.commentInsert(comment);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<Integer> update(@RequestBody Comment comment) {
        try {
            int result = commentService.commentUpdate(comment);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{commentNo}")
    public ResponseEntity<Integer> destroy(@PathVariable Integer commentNo,Comment comment) {
        comment.setCommentNo(commentNo);
        try {
            int result = commentService.commentDelete(comment);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
