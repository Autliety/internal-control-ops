package com.hcit.taserver.fr.yunshao;

import com.alibaba.excel.annotation.ExcelIgnore;
import com.alibaba.excel.annotation.ExcelProperty;
import com.hcit.taserver.common.BasicPersistable;
import java.time.LocalDateTime;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Proxy;

@Proxy(lazy = false)

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@AllArgsConstructor
@Builder

@Entity
public class Yellowwarning implements BasicPersistable {

  @Id
  @ExcelIgnore
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ExcelProperty(value = "ssz")
  private String ssz;

  @ExcelProperty(value = "yjdx")
  private String yjdx;

  @ExcelProperty(value = "yjdxssdw")
  private String yjdxssdw;

  @ExcelProperty(value = "yjdxzw")
  private String yjdxzw;

  @ExcelProperty(value = "zwcj")
  private String zwcj;

  @ExcelProperty(value = "yjsj")
  @Transient
  private String yjsjExl;

  @ExcelIgnore
  private LocalDateTime yjsj;

  @ExcelProperty(value = "model_id")
  @Transient
  private String moudelidExl;

  @ExcelIgnore
  private Integer modelid;

  @ExcelProperty(value = "yjlx")
  @Transient
  private String yjlxExl;

  @ExcelIgnore
  private Integer yjlx;

  @ExcelProperty(value = "yjdj")
  private String yjdj;

  @ExcelProperty(value = "yjgz")
  private String yjgz;

  @ExcelProperty(value = "yjms")
  private String yjms;

  @ExcelProperty(value = "yjhj")
  private String yjhj;

  @ExcelProperty(value = "sfclwc")
  private String sfclwc;

  @ExcelProperty(value = "clsj")
  private String clsj;

  @ExcelProperty(value = "cljg")
  private String cljg;

  @ExcelProperty(value = "sfjz")
  private String sfjz;

  @ExcelProperty(value = "cwh")
  private String cwh;

  @ExcelProperty(value = "cwhxzqh")
  private String cwhxzqh;

  @ExcelProperty(value = "zzfbm")
  private String zzfbm;

  @ExcelProperty(value = "zzfmc")
  private String zzfmc;

  @ExcelProperty(value = "xzfbm")
  private String xzfbm;

  @ExcelProperty(value = "xzfmc")
  private String xzfmc;

  @ExcelProperty(value = "szfbm")
  private String szfbm;

  @ExcelProperty(value ="szfmc")
  private String szfmc;
}
