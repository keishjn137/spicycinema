SELECT * FROM MOVIE
SELECT * FROM BranchCompany

SELECT * FROM  SHOWTIMEMANAGEMENT


-- Cái này truy vấn những ghế đã đặt 
SELECT SEAT FROM BILL WHERE IDShowtimeManagement IN
(
SELECT ID FROM ShowtimeManagement 
WHERE IDBranch = (SELECT ID FROM BranchCompany WHERE Name = 'Chi Nhánh Sala Quận 1')
AND IDMovie = (SELECT ID FROM MOVIE WHERE Name = 'TRANSFORMERS')
)

