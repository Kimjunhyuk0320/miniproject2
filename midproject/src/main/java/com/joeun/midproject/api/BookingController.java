package com.joeun.midproject.api;

import java.security.Principal;
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
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.BookingRequests;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.FacilityRentalService;
import com.joeun.midproject.service.FileService;
import com.joeun.midproject.service.TeamService;

import groovy.util.logging.Slf4j;

@Slf4j
@RestController
@RequestMapping("/booking")
public class BookingController {

    @Autowired
    private FacilityRentalService facilityRentalService;
    
    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private TeamService teamService;

    @Autowired
    private FileService fileService;

    @Autowired
    private CommentService commentService;
    
    @GetMapping()
    public ResponseEntity<List<BookingRequests>> rreqList(Principal principal) {
        try {
            List<BookingRequests> rreqList = facilityRentalService.rreqList(principal.getName());
            return new ResponseEntity<>(rreqList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<BookingRequests>> rrList(Principal principal) {

        try {
            List<BookingRequests> rrList = facilityRentalService.rrList(principal.getName());
            return new ResponseEntity<>(rrList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<Integer> reservation(@RequestBody BookingRequests bookingRequests) {

        try {
            int result = facilityRentalService.reservation(bookingRequests);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("/denied")
    public ResponseEntity<Integer> reqDenied(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqDenied(bookingRequests);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/accept")
    public ResponseEntity<Integer> reqAccept(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqAccept(bookingRequests);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/confirm")
    public ResponseEntity<Integer> reqConfirm(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqConfirm(bookingRequests);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{brNo}")
    public ResponseEntity<Integer> destroy(@PathVariable Integer brNo, BookingRequests bookingRequests) {
        bookingRequests.setBrNo(brNo);
        try {
            int result = facilityRentalService.delReq(bookingRequests);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
