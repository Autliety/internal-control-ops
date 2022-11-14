package com.hcit.taserver.fr.excel;

import com.alibaba.excel.annotation.ExcelIgnore;
import com.alibaba.excel.annotation.ExcelProperty;
import com.hcit.taserver.common.BasicPersistable;
import lombok.*;
import org.hibernate.annotations.Proxy;

import javax.persistence.*;
import java.time.LocalDateTime;

@Proxy(lazy = false)

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
/* 红色预警信息*/
public class Redwarning implements BasicPersistable {
  @Id
  @ExcelIgnore
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ExcelProperty(value = "cwh")
  private String cwh;

  @ExcelProperty(value = "cwhxzqh")
  private String cwhxzqh;

  @ExcelProperty(value = "szf")
  private String szf;

  @ExcelProperty(value = "szfbm")
  private String szfbm;

  @ExcelProperty(value = "xzf")
  private String xzf;

  /* 县镇府编码 */
  @ExcelProperty(value = "xzfbm")
  private String xzfbm;

  @ExcelProperty(value = "zzf")
  private String zzf;

  @ExcelProperty(value = "zzfbm")
  private String zzfbm;

  @ExcelProperty(value = "model_id")
  private String modelId;

  /* 红色预警编码 */
  @ExcelProperty(value = "yswtbm")
  private String yswtbm;

  /* 红色预警发现时间 */
  @ExcelProperty(value = "yswtfxsj")
  @Transient
  private String yswtfxsjExl;

  @ExcelIgnore
  private LocalDateTime yswtfxsj;

  @ExcelProperty(value = "sslyejfl")
  private String sslyejfl;

  @ExcelProperty(value = "yjdwmc")
  private String yjdwmc;

  /* 一级单位企业统一信用代码 */
  @ExcelProperty(value = "yjdwqytixydm")
  private String yjdwqytixydm;

  @ExcelProperty(value = "ejdwmc")
  private String ejdwmc;

  @ExcelProperty(value = "ejdwqytixydm")
  private String ejdwqytixydm;

  @ExcelProperty(value = "sjdwmc")
  private String sjdwmc;

  @ExcelProperty(value = "sjdwqytixydm")
  private String sjdwqytixydm;

  @ExcelProperty(value = "dxxm")
  private String dxxm;

  @ExcelProperty(value = "sfz")
  private String sfz;

  @ExcelProperty(value = "dxzw")
  private String dwzw;

  @ExcelProperty(value = "dxzwcj")
  private String dxzwcj;

  @ExcelProperty(value = "dxdw")
  private String dxdw;

  @ExcelProperty(value = "dxbm")
  private String dxbm;

  @ExcelProperty(value = "hsyjblfs")
  private String hsyjblfs;

  @ExcelProperty(value = "hsyjblzt")
  private String hsyjblzt;

  /* Text ? */
  @ExcelProperty(value = "thsy")
  private String thsy;

  @Column(columnDefinition = "LONGTEXT")
  @ExcelProperty(value = "yswtnr")
  private String yswtnr;

  @ExcelProperty(value = "sfss")
  private String sfss;

  @ExcelProperty(value = "bssqksm")
  private String bssqksm;

  @ExcelProperty(value = "sfczwjwgxw")
  private String sfczjwgxw;

  @ExcelProperty(value = "xxhchczqksm")
  private String xxhchczqksm;

  @ExcelProperty(value = "sfyzhzj")
  private String sfyzhzj;

  @ExcelProperty(value = "zhzjs")
  private String zhzjs;

  @ExcelProperty(value = "sfcfj")
  private String sfcfj;

  @ExcelProperty(value = "bjsj")
  private String bjsj;

  @ExcelProperty(value = "ssff")
  private String ssff;

}

