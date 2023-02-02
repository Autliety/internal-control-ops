package com.hcit.taserver.common.captcha;

import com.wf.captcha.SpecCaptcha;
import com.wf.captcha.base.Captcha;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.awt.*;
import java.io.IOException;

@Slf4j
@Controller
public class CaptchaController {

  @RequestMapping("/api/getCode")
  @ResponseBody
  public void getCode(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // 设置请求头为输出图片类型
    response.setContentType("image/png");
    response.setHeader("Pragma", "No-cache");
    response.setHeader("Cache-Control", "no-cache");
    response.setDateHeader("Expires", 0);

    // 三个参数分别为宽、高、位数
    SpecCaptcha specCaptcha = new SpecCaptcha(120, 40, 5);
    specCaptcha.toBase64();
    // 设置字体
    specCaptcha.setFont(new Font("Verdana", Font.PLAIN, 32));
    // 设置类型，纯数字、纯字母、字母数字混合
    specCaptcha.setCharType(Captcha.TYPE_ONLY_NUMBER);
    // 验证码存入session
    request.getSession().setAttribute("captcha", specCaptcha.text().toLowerCase());
    // 输出图片流
    specCaptcha.out(response.getOutputStream());
  }

}

