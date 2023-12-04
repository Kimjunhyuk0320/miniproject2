package com.joeun.midproject.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.PageInfo;
import com.joeun.midproject.dto.Team;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.TeamAppService;
import com.joeun.midproject.service.TeamService;

import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
@RequestMapping("/api/team")
public class TeamApiController {
    
    @Autowired
    private TeamService teamService;

    @Autowired
    private TeamMapper teamMapper;

    @GetMapping("/pageInfo")
    public ResponseEntity<PageInfo> getPage( PageInfo pageInfo) {
        pageInfo.setTable("team_recruitments");
        pageInfo.setTotalCount(teamMapper.totalCount(pageInfo));

        try {
            PageInfo pageInfoResult = teamService.pageInfo(pageInfo);
            return new ResponseEntity<>(pageInfoResult, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping()
    public ResponseEntity<List<Team>> getAll( Team team) {
        log.info("this is /api/team");
        try {
            List<Team> teamList = teamService.pageList(team);
            log.info(teamList.toString());
            return new ResponseEntity<>(teamList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @GetMapping("/{teamNo}")
    public ResponseEntity<Team> getOne(@PathVariable Integer teamNo,Team team) {
        try {
            team.setTeamNo(teamNo);
            Team readTeam = teamService.read(team);
            return new ResponseEntity<>(readTeam, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @PostMapping()
    public ResponseEntity<Integer> create(@RequestBody Team team) {
        try {
            team.setAccount(team.getAccount1()+"/"+team.getAccount2());
            int result = teamService.insert(team);
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping()
    public ResponseEntity<Integer> update(@RequestBody Team team) {
        log.info("접근성공");
        team.setAccount(team.getAccount1()+"/"+team.getAccount2());
        int result = teamService.update(team);
        try {
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    @DeleteMapping("/{teamNo}")
    public ResponseEntity<Integer> destroy(@PathVariable Integer teamNo,Team team) {
        team.setTeamNo(teamNo);
        int result = teamService.delete(team);

        try {
            return new ResponseEntity<>(result, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
