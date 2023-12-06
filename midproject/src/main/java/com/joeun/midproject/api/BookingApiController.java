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

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RestController
@RequestMapping("/api/booking")
public class BookingApiController {

    @Autowired
    private FacilityRentalService facilityRentalService;
    
    
    @GetMapping("/rreq")
    public ResponseEntity<List<BookingRequests>> rreqList(String username) {
        try {
            List<BookingRequests> rreqList = facilityRentalService.rreqList(username);
            return new ResponseEntity<>(rreqList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/rr")
    public ResponseEntity<List<BookingRequests>> rrList(String username) {

        try {
            List<BookingRequests> rrList = facilityRentalService.rrList(username);
            return new ResponseEntity<>(rrList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<String> reservation(@RequestBody BookingRequests bookingRequests) {
        log.info(bookingRequests.toString());
        try {
            int result = facilityRentalService.reservation(bookingRequests);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping("/denied")
    public ResponseEntity<String> reqDenied(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqDenied(bookingRequests);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/accept")
    public ResponseEntity<String> reqAccept(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqAccept(bookingRequests);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/confirm")
    public ResponseEntity<String> reqConfirm(@RequestBody BookingRequests bookingRequests) {
        try {
            int result = facilityRentalService.reqConfirm(bookingRequests);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{brNo}")
    public ResponseEntity<String> destroy(@PathVariable Integer brNo, BookingRequests bookingRequests) {
        bookingRequests.setBrNo(brNo);
        try {
            int result = facilityRentalService.delReq(bookingRequests);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
