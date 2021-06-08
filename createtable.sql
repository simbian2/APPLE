CREATE TABLE `items` (`id` INTEGER NOT NULL auto_increment , `item_serial_number` VARCHAR(100) NOT NULL, `item_name` VARCHAR(100) NOT NULL, `item_price` VARCHAR(100) NOT NULL, `item_image` VARCHAR(200) NOT NULL, `item_size` VARCHAR(100) NOT NULL, `item_color` VARCHAR(100) NOT NULL, `item_capacity` VARCHAR(100) NOT NULL, UNIQUE `item_serial_number` (`item_serial_number`), PRIMARY KEY (`id`)) ENGINE=InnoDB;