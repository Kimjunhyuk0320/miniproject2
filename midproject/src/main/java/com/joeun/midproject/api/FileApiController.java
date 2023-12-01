package com.joeun.midproject.api;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.joeun.midproject.dto.Files;
import com.joeun.midproject.service.FileService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/file")
public class FileApiController {
    @Autowired
    private FileService fileService;

    
    /**
     * 파일 다운로드
     * @param fileNo
     * @param response
     * @throws Exception
     */
    @GetMapping("/{fileNo}")
    public ResponseEntity<?> fileDownload(@PathVariable("fileNo") int fileNo
                             ,HttpServletResponse response) throws Exception {

        int result = fileService.download(fileNo, response);

        if(result == 0) {
            response.setStatus(response.SC_BAD_REQUEST);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }

    }
    // 이미지 띄우기
    @GetMapping("/img/{fileNo}")
    public ResponseEntity<?> thumbnail(@PathVariable("fileNo") int fileNo, 
                                HttpServletResponse response ) throws Exception{
        int result = fileService.thumbnail(fileNo, response);
        if( result == 0 ){
            response.setStatus(response.SC_BAD_REQUEST);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }else{
            return new ResponseEntity<>(HttpStatus.OK);
        }                          
    }

    // 파일 업로드
    @PostMapping("")
    public ResponseEntity<?> uploadImg(List<MultipartFile> file) throws Exception {
        Integer fileNo = fileService.uploadImg(file);
        return new ResponseEntity<Integer>(fileNo, HttpStatus.OK);
    }
    


    /**
     * 파일 삭제
     * @param file
     * @return
     * @throws Exception
     */
    @DeleteMapping("")
    public ResponseEntity<?> deleteFile(Files file) throws Exception {
        log.info("[DELETE] - /file");
        int fileNo = file.getFileNo();
        log.info("fileNo : " + fileNo);
        if(fileNo == 0)
            return new ResponseEntity<String>("FAIL", HttpStatus.BAD_REQUEST);

        int result = fileService.delete(fileNo);

        if(result == 0)
            return new ResponseEntity<String>("FAIL", HttpStatus.OK);
        
        return new ResponseEntity<String>("SUCCESS", HttpStatus.OK);
    }




}
