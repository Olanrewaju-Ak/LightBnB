INSERT INTO users (name,email,password)
VALUES ('Bolaji James','bj@yahoo.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u'),('Taiwo Gate','tg@yahoo.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u')
,('Ayinde Wasiu','wa@yahoo.com','$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u');


INSERT INTO properties (owner_id,title,description,thumbnail_photo_url,cover_photo_url,cost_per_night,parking_spaces,number_of_bathrooms,number_of_bedrooms,country,street,city,province,post_code,active) 
VALUES
(1,'Speed lamp','description','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg',930,6,4,3,'Canada','Whalley','Surrey','BC','ewr1123',true),
(2,'Blank corner','description','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg',90,1,1,2,'cambodia','sss','Calgary','Alberta','33er3',false),
(3,'Habit mix','description','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg','https://images.pexels.com/photos/2086676/pexels-photo-2086676.jpeg',600,2,2.5,3,'Naij','Oyewole','Gbagada','Lagos','10012',true);

INSERT INTO reservations (start_date,end_date,property_id,guest_id) VALUES 
('2018-09-11', '2018-09-26',1, 1),
('2023-09-11', '2023-09-26',1, 2),
('2019-09-11', '2019-09-26',1,3 );

INSERT INTO property_reviews (guest_id,property_id,reservation_id,rating,message ) VALUES (3,1,1,3,'messages'),
(2,1,2,4,'messages'),(3,1,1,3,'messagses')