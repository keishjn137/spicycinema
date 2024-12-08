INSERT INTO Account (Username, Password, Gmail, Role)
VALUES
('user12', '123456', 'user1@gmail.com', 'user'),
('admin13', '123456', 'user2@gmail.com', 'admin'),
('user33', '123456', 'user3@gmail.com', 'user'),
('user44', '123456', 'user4@gmail.com', 'admin'),
('admin22', '123456', 'user5@gmail.com', 'user');
SELECT * FROM ACCOUNT
INSERT INTO Movie (Name , Genre, Duration, Price , Directors , Actors , url_image_title, url_image_banner)
VALUES
('TRANSFORMERS', 'Viễn tưởng , Khoa học', 144 , 80000 , 'Tokuda' , 'Megan Fox , Miku Ohashi' 
 , 'https://m.media-amazon.com/images/I/71cAOfmWHhL._AC_UF894,1000_QL80_.jpg' 
, 'https://i.pinimg.com/736x/d7/67/70/d76770962774fbd357aefed75bd3fae4.jpg')

INSERT INTO BranchCompany (Name, Address)
VALUES 
('Chi Nhánh Sala Quận 1' , '299 , Sala Quận 1 , TP.HCM'),
('Chi Nhánh Thảo Điền' , '123 , Quận 12 , TP.HCM')


INSERT INTO ShowtimeManagement (IDBranch, IDMovie , ShowTime)
VALUES 
(1 , 1 , '2024-12-7 19:00:00'),
(1 , 1 , '2024-12-7 22:00:00')

INSERT INTO Bill (IDAccount, IDShowtimeManagement , Seat , Total)
VALUES 
(3 , 1 , 'A1' ,0),
(3 , 1 , 'A2' ,0),
(4 , 1 , 'B2' ,0),
(4 , 1 , 'C2' ,0)

