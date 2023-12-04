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
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.BookingRequests;
import com.joeun.midproject.dto.FacilityRental;
import com.joeun.midproject.dto.Files;
import com.joeun.midproject.dto.PageInfo;
import com.joeun.midproject.dto.Team;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.FacilityRentalService;
import com.joeun.midproject.service.FileService;
import com.joeun.midproject.service.TeamService;

import groovy.util.logging.Slf4j;

@Slf4j
@RequestMapping("/api/fr")
@RestController
public class FacilityRentalApiController {

    @Autowired
    private FacilityRentalService facilityRentalService;
    
    @Autowired
    private FileService fileService;
    
    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private TeamService teamService;


    @GetMapping("/pageInfo")
    public ResponseEntity<PageInfo> pageInfo( PageInfo pageInfo) {

        try {
            pageInfo.setTable("facility_rental");
            pageInfo.setTotalCount(teamMapper.totalCount(pageInfo));

            PageInfo pageInfoResult = teamService.pageInfo(pageInfo);
            return new ResponseEntity<>(pageInfoResult, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<FacilityRental>> getAll( Team team) {
        try {
            List<FacilityRental> pageListResult = facilityRentalService.pageFrList(team);
            return new ResponseEntity<>(pageListResult, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{frNo}")
    public ResponseEntity<FacilityRental> getOne(@PathVariable Integer frNo,Files files) {
        try {
            FacilityRental facilityRental = facilityRentalService.select(frNo);     // 게시글 정보
            files.setParentTable("facilityRental");
            files.setParentNo(frNo);
            facilityRental.setFileList(fileService.listByParent(files));
            return new ResponseEntity<>(facilityRental, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<Integer> create(@RequestBody FacilityRental facilityRental) {
        facilityRental.setAccount(facilityRental.getAccount1()+"/"+facilityRental.getAccount2());
        try {
            int result = facilityRentalService.insert(facilityRental);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PutMapping()
    public ResponseEntity<Integer> update(@RequestBody FacilityRental facilityRental) {
        facilityRental.setAccount(facilityRental.getAccount1()+"/"+facilityRental.getAccount2());
        try {
            int result = facilityRentalService.update(facilityRental);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{frNo}")
    public ResponseEntity<?> destroy(@PathVariable Integer frNo) {
        try {
            int result = facilityRentalService.delete(frNo);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    



}
