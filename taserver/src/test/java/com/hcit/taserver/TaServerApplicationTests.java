package com.hcit.taserver;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.nio.ByteBuffer;
import java.nio.charset.StandardCharsets;

@SpringBootTest
class TaServerApplicationTests {

  @Test
  void contextLoads() {
    ByteBuffer byteBuffer = ByteBuffer.allocate(1024);

    System.out.println("初始时-->limit--->" + byteBuffer.limit());
    System.out.println("初始时-->position--->" + byteBuffer.position());
    System.out.println("初始时-->capacity--->" + byteBuffer.capacity());
    System.out.println("初始时-->mark--->" + byteBuffer.mark());

    String s = "hello";
    byteBuffer.put(s.getBytes());



    System.out.println("-----------");
    System.out.println("之后-->limit--->" + byteBuffer.limit());
    System.out.println("之后-->position--->" + byteBuffer.position());
    System.out.println("之后-->capacity--->" + byteBuffer.capacity());
    System.out.println("之后-->mark--->" + byteBuffer.mark());


//    // 创建一个limit()大小的字节数组(因为就只有limit这么多个数据可读)
//    byte[] bytes = new byte[byteBuffer.limit()];
//
//    // 将读取的数据装进我们的字节数组中
//    byteBuffer.get(bytes);
//
//    // 输出数据
//    System.out.println(new String(bytes, 0, bytes.length));



  }

}
