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

import com.joeun.midproject.dto.Team;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.TeamAppService;
import com.joeun.midproject.service.TeamService;

import groovy.util.logging.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/team")
public class TeamController {
    
    @Autowired
    private TeamService teamService;

    @Autowired
    private TeamAppService teamAppService;

    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private CommentService commentService;

    @GetMapping()
    public ResponseEntity<List<Team>> getAll(Team team) {
        try {
            List<Team> teamList = teamService.pageList(team);
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
