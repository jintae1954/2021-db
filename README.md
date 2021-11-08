# 2021-db
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;데이터베이스설계

<br><br>

# 3주차 실습과제
<b>1. DATABASE: dbdesign</b>

<b>2. CREATE TABLE: </b>
<pre>
CREATE TABLE student 
(
    studentNumber int not null,
    name char(30) not null,
    major char(30) not null,
    grade char(1) not null,
    admission char(30) not null,
    email char(50) not null,
    PRIMARY KEY(studentNumber)
);
</pre>
<br>
<b>3. INSERT:</b>
<pre>
INSERT INTO student VALUES
    (12161733, 'park', 'com', '3', '2016-03', 'test@gmail.com'),
    (12171733, 'kim', 'com', '3', '2017-03', 'test2@gmail.com');
</pre>
<br>
<b>4. SELECT:</b><br><br>

studentNumber|name|major|grade|admission|email
----------|----------|---|----------|----------|----------|
12161733|park|com|3|2016-03|test@gmail.com
12171733|kim|com|3|2-17-03|test2@gmail.com
<br>

# 8주차 실습과제
<b>1. DATABASE: week8</b>

<b>2. CREATE TABLE: </b>
<pre>
CREATE TABLE DEPARTMENT
( Dname           VARCHAR(15)       NOT NULL,
  Dnumber         INT               NOT NULL,
  Mgr_ssn         CHAR(9)           NOT NULL,
  Mgr_start_date  DATE,
PRIMARY KEY (Dnumber),
UNIQUE      (Dname),
FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn) );

CREATE TABLE EMPLOYEE
( Fname           VARCHAR(10)   NOT NULL,
  Minit           CHAR,
  Lname           VARCHAR(20)      NOT NULL,
  Ssn             CHAR(9)          NOT NULL,
  Bdate           DATE,
  Address         VARCHAR(30),
  Sex             CHAR(1),
  Salary          DECIMAL(5),
  Super_ssn       CHAR(9),
  Dno             INT               NOT NULL,
PRIMARY KEY   (Ssn));
</pre>
<br>

<b>3. INSERT:</b>
<pre>
INSERT INTO DEPARTMENT VALUES
    ('정보통신공학', 1, '12161733', '2016-03-02'),
    ('정치학과', 2, '12161700', '1999-09-09');
    ('국제통상학과', 3, '12161734', '2016-03-02');

INSERT INTO EMPLOYEE VALUES
    ('SQUID', 'G', 'AME', '00000001','1945-08-15','SEOUL','남', 9999, '12161733', 1),
    ...
    ('Pink', 'T', 'Soldier', '12161737', '1997-03-12', 'SEOUL', '남', 1300, '12161733', 1);
</pre>
<br>

<b>4. SELECT:</b><br><br>

DEPARTMENT TABLE
Dname|Dnumber|Mgr_ssn|Mgr_start_date
|---|---|---|---|
|정보통신공학과|1|12161733| 2016-03-02
|정치학과|2|12161700|1999-09-09
|국제통상학과|3|12161734|2016-03-02
<br>

EMPLOYEE TABLE
Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno
|---|---|---|---|---|---|---|---|---|---|
|SQUID|G|AME|00000001|1945-08-15|SEOUL|남|9999|12161733|1
|John|F|Kennedy|12161700|1971-05-09|USA|남|500||2
|PARK|Y|JINTAE|12161733|1997-10-11|SEOUL|남|1000||1
|Jin|K|Park|12161734|1997-03-12|SEOUL|남|1200||3
|Pink|T|Soldier|12161737|1997-03-12|SEOUL|남|1300|12161733|1
<br>

# 10주차 실습과제
<b>1. DATABASE: week10</b>

<b>2. CREATE TABLE: </b>
<pre>
CREATE TABLE INVESTMENT
( Id           INT              NOT NULL,
  Name         VARCHAR(20)      NOT NULL,
  Raing        VARCHAR(5)       NOT NULL,
PRIMARY KEY (Dnumber),
);
</pre>
<br>

<b>3. INSERT:</b>
<pre>
INSERT INTO INVESTMENT VALUES
    (1, 'APPLE', 'GOOD'),
    (2, 'QCOM', 'GOOD'),
    (3, 'FACEBOOK', 'BAD),
    (4, 'SAMSUNG', 'SOSO'),
    (5, 'BOEING', 'SOSO');
</pre>

<b>4. SELECT:</b><br><br>
INVESTMENT TABLE
Id|Name|Rating
|---|---|---|
|1|APPLE|GOOD
|2|QCOM|GOOD
|3|FACEBOOK|BAD
|4|SAMSUNG|SOSO
|5|BOEING|SOSO

<br><br>

