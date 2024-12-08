CREATE TABLE Account (
    ID SERIAL PRIMARY KEY,
    Username VARCHAR(50) NOT NULL CHECK (LENGTH(Username) > 5),
    Password VARCHAR(255) NOT NULL CHECK (LENGTH(Password) > 5),
    Gmail VARCHAR(255) UNIQUE NOT NULL,
    Role VARCHAR(10) DEFAULT 'user' CHECK (Role IN ('user', 'admin'))
);

CREATE TABLE Movie (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL UNIQUE,
    Genre VARCHAR(50) NOT NULL,
    Duration TIMESTAMP(0) NOT NULL, 
    Price INT NOT NULL CHECK (Price > 0) ,
    Directors VARCHAR(255),
    Actors VARCHAR(255),
    url_image_title TEXT,
    url_image_banner TEXT
);

CREATE TABLE BranchCompany (
    ID SERIAL PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
);

CREATE TABLE ShowtimeManagement (
    ID SERIAL PRIMARY KEY,
    IDBranch INT NOT NULL REFERENCES BranchCompany(ID) ON DELETE CASCADE,
    IDMovie INT NOT NULL REFERENCES Movie(ID) ON DELETE CASCADE,
    Showtime TIMESTAMP(0) NOT NULL
);

CREATE TABLE EventPromotion(
	ID SERIAL PRIMARY KEY,
	NameEvent  VARCHAR(255) NOT NULL,
	CodeDiscount VARCHAR(10) NOT NULL ,
	Percentage INT Check (Percentage > 0 and Percentage <= 100)
)

CREATE TABLE Bill (
    ID SERIAL PRIMARY KEY,
    IDAccount INT NOT NULL REFERENCES Account(ID) ON DELETE CASCADE,
	IDShowtimeManagement INT NOT NULL REFERENCES ShowtimeManagement(ID) ON DELETE CASCADE,
    InvoicingTime TIMESTAMP(0) NOT NULL DEFAULT NOW(),
    Seat VARCHAR(50) NOT NULL, -- Lưu thông tin ghế
    Total INT NOT NULL CHECK (Total > -1)
);

SELECT CURRENT_TIMESTAMP


