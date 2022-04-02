USE icdev;
LOAD DATA LOCAL INFILE 'C:/Users/admin/Desktop/APP/task-assessment/taserver/src/main/resources/csv/user.csv'
  INTO TABLE user
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (dept_id,name,user_id);

USE icdev;
LOAD DATA LOCAL INFILE 'C:/Users/admin/Desktop/APP/task-assessment/taserver/src/main/resources/csv/dept.csv'
  INTO TABLE department
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  ( name, dept_id);

USE icdev;
LOAD DATA LOCAL INFILE 'C:/Users/admin/Desktop/APP/task-assessment/taserver/src/main/resources/csv/station.csv'
  INTO TABLE station
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (dept,dept_id,name,station_id);

USE icdev;
LOAD DATA LOCAL INFILE 'C:/Users/admin/Desktop/APP/task-assessment/taserver/src/main/resources/csv/userstation.csv'
  INTO TABLE user_station
  FIELDS TERMINATED BY ','
  LINES TERMINATED BY '\n'
  IGNORE 1 LINES
  (station_id ,user_id);