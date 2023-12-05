package com.joeun.midproject.api;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joeun.midproject.dto.PageInfo;
import com.joeun.midproject.dto.Team;
import com.joeun.midproject.dto.TeamApp;
import com.joeun.midproject.mapper.TeamMapper;
import com.joeun.midproject.service.CommentService;
import com.joeun.midproject.service.TeamAppService;
import com.joeun.midproject.service.TeamService;

import lombok.extern.slf4j.Slf4j;


@Slf4j
@RequestMapping("/api/user/team")
@RestController
public class MypageTeamApiController {


    @Autowired
    private TeamService teamService;

    @Autowired
    private TeamAppService teamAppService;

    @Autowired
    private TeamMapper teamMapper;

    @Autowired
    private CommentService commentService;


    @GetMapping("/listByLeader")
    public ResponseEntity<List<TeamApp>> listByLeader( TeamApp teamApp, Principal principal) {

        log.info(teamApp.toString());
        try {
            // teamApp.setUsername(principal.getName());
            List<TeamApp> teamAppList = teamAppService.listByLeader(teamApp);
            log.info(teamAppList.toString());
            return new ResponseEntity<>(teamAppList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/listByMember")
    public ResponseEntity<List<TeamApp>> listByMember(@RequestBody TeamApp teamApp, Principal principal) {

        try {
            teamApp.setUsername(principal.getName());
            List<TeamApp> teamAppList = teamAppService.listByMember(teamApp);
            return new ResponseEntity<>(teamAppList, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/pageInfo")
    public ResponseEntity<PageInfo> pageInfo(@RequestBody PageInfo pageInfo) {
        pageInfo.setTable("confirmed_live");
        pageInfo.setTotalCount(teamMapper.totalCount(pageInfo));

        try {
            PageInfo pageInfoResult = teamService.pageInfo(pageInfo);
            return new ResponseEntity<>(pageInfoResult, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/confirmedLiveList")
    public ResponseEntity<List<Team>> confirmedLiveList(@RequestBody Team team) {
        List<Team> pageListResult = teamService.listByConfirmedLive2(team);

        try {
            return new ResponseEntity<>(pageListResult, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/readApp")
    public ResponseEntity<TeamApp> readApp(@RequestBody TeamApp teamApp) {
        
        try {
            TeamApp readApp = teamAppService.read(teamApp);
            return new ResponseEntity<>(readApp, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
