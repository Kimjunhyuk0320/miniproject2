package com.joeun.midproject.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.Team;
import com.joeun.midproject.dto.TeamApp;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.TeamAppService;
import com.joeun.midproject.service.TeamService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/team/app")
public class TeamAppApiController {

    @Autowired
    private TeamService teamService;

    @Autowired
    private TeamAppService teamAppService;

    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private CommentService commentService;

    // @GetMapping("/{teamNo}")
    // public ResponseEntity<Team> getOne(@PathVariable Integer teamNo) {
    // try {
    // Team appAboutTeam =
    // return new ResponseEntity<>("GetOne Result", HttpStatus.OK);
    // } catch (Exception e) {
    // return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    // }
    // }

    // 🤞🤞🤞🤞
    // ★★★★★★★★★★★★★★★★★★★★
    // 컴포넌트 측에서 props로 temaNo를 registration으로 내려줘야합니다.
    // ★★★★★★★★★★★★★★★★★★
    // 🤞🤞🤞🤞

    @PreAuthorize("hasRole('ROLE_BAND')")
    @PostMapping()
    public ResponseEntity<String> create(@RequestBody TeamApp teamApp) {

        log.info("--------------------------------");
        log.info(teamApp.toString());
        try {
            int result = teamAppService.insert(teamApp);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_BAND')")
    @PutMapping("/accept")
    public ResponseEntity<String> accept(@RequestBody TeamApp teamApp) {
        try {
            int result = teamAppService.accept(teamApp);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_BAND')")
    @PutMapping("/denied")
    public ResponseEntity<String> denied(@RequestBody TeamApp teamApp) {
        try {
            int result = teamAppService.denied(teamApp);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_BAND')")
    @PutMapping("/confirmed")
    public ResponseEntity<String> confirmed(@RequestBody TeamApp teamApp) {
        try {
            int result = teamAppService.confirmed(teamApp);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PreAuthorize("hasRole('ROLE_BAND')")
    @DeleteMapping("/{teamAppNo}")
    public ResponseEntity<String> destroy(@PathVariable Integer teamAppNo, TeamApp teamApp) {
        teamApp.setAppNo(teamAppNo);
        try {
            int result = teamAppService.delete(teamApp);
            return new ResponseEntity<>(Integer.toString(result), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
