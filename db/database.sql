create database if not exists companydb;

use companydb;

create table employee(
    id int(11) not null auto_increment primary key,
    name varchar(45) default null,
    salary int(5) default null,
     
)

insert into employee values(
    (1, "juan", 1000),
    (2, "henry", 2000),
    (3, "mario", 2500),
    (4, "tito", 30000)
)