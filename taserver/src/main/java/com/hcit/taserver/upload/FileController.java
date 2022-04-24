package com.hcit.taserver.upload;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


@RequiredArgsConstructor
@RestController
@RequestMapping("/file")
public class FileController {

  public final FileService fileService;

  @PostMapping("/upload") /*上传文件*/
  public File UpLoad(@RequestParam("file")MultipartFile file,ServerProperties servlet) {
    return fileService.upload(file,servlet);
  }

  @GetMapping("/download/{filename}") /*下载文件*/
  public Resource Download(@PathVariable("filename") String filename){
    return fileService.download(filename);
  }

}
