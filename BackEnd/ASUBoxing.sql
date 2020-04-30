SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `ASUBoxing` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ASUBoxing`;

DROP TABLE IF EXISTS `workouts`;
CREATE TABLE IF NOT EXISTS `workouts` (
  `days` varchar(255) NOT NULL,
  `exercise` char(50) DEFAULT NULL,
  `set` char(50) DEFAULT NULL,
  `rep` char(50) DEFAULT NULL,
  `rest` char(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `workouts` (`days`, `exercise`, `set`, `rep`, `rest`) VALUES
('Day-1', 'Jump Rope', '3', '3 Mins', '60 Seconds'),
('Day-1', 'Speed Bag', '-', '3', '60 Seconds'),
('Day-1', 'Shadowbox', '3', '3 Mins', '60 Seconds'),
('Day-1', 'Heavy Bag', '3', '3 Mins', '60 Seconds'),
('Day-1', 'Squat Thrusts', '4', '20', '-'),
('Day-1', 'Thrust', '4', '20', '-'),
('Day-1', 'Lateral Leap and Hop', '4', '20', '-'),
('Day-1', 'Pushup', '6', 'To Failure', '60 Seconds'),
('Day-1', 'Shoulder Raise', '3', '3', '60 Seconds'),
('Day-1', 'Situp', '3', '3', '60 Seconds'),
('Day-2', 'BARBELL DEADLIFT', '4', '10', '--'),
('Day-2', 'SINGLE-ARM DUMBBELL ROW', '4', '10', '--'),
('Day-2', 'WIDE-GRIP LAT PULLDOWN', '4', '10', '--'),
('Day-2', 'BARBELL SQUAT', '4', '10', '--'),
('Day-2', 'LYING LEG CURL', '3', '10', '--'),
('Day-2', 'SEATED CALF RAISE', '3', '10', '--'),
('Day-4', 'Jump Rope', '3', '3 Mins', '60 Seconds'),
('Day-4', 'Speed Bag', '-', '3', '60 Seconds'),
('Day-4', 'Shadowbox', '3', '3 Mins', '60 Seconds'),
('Day-4', 'Heavy Bag', '3', '3 Mins', '60 Seconds'),
('Day-4', 'Squat Thrusts', '4', '20', '-'),
('Day-4', 'Thrust', '4', '20', '-'),
('Day-4', 'Lateral Leap and Hop', '4', '20', '-'),
('Day-4', 'Pushup', '6', 'To Failure', '60 Seconds'),
('Day-4', 'Shoulder Raise', '3', '3', '60 Seconds'),
('Day-4', 'Situp', '3', '3', '60 Seconds'),
('Day-5', 'DUMBBELL BENCH PRESS', '4', '10', '--'),
('Day-5', 'INCLINE DUMBBELL BENCH PRESS', '4', '10', '--'),
('Day-5', 'INCLINE DUMBBELL FLYE', '3', '10', '--'),
('Day-5', 'BODYWEIGHT DIP', '3', 'TO FAILURE', '--'),
('Day-5', 'STANDING DUMBBELL BICEPS CURL', '3', '10', '--'),
('Day-7', 'JUMP ROPE', '3', '3 MINS', '60 Seconds'),
('Day-7', 'Shadowbox', '3', '3 Mins', '60 Seconds'),
('Day-7', 'BOXER PUSHUPS', '5', '10', '60 Seconds'),
('Day-7', 'Double Jab, Cross, Jab, Cover', '10 Per Side', '5 Mins', '--'),
('Day-7', 'Bicycle Crunches', '5', '20', '--');
COMMIT;

DROP TABLE IF EXISTS `meals`;
CREATE TABLE `meals` (
  `weekday` varchar(255) NOT NULL,
  `time` char(100) DEFAULT NULL,
  `food` char(100) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `meals` (`weekday`, `time`, `food`) VALUES
('Monday', 'Breakfast ', 'Whey Protein Flapjacks'),
('Monday', 'Pre-Workout', '15g Dextrose, 15g Maltodextrin, 10g Essential Amino Acids'),
('Monday', 'During Workout', '2x Kiwi Fruit'),
('Monday', 'Lunch', '200g Chicken, 125g Brown Rice, 1 tbsp Olive Oil and Vegetables'),
('Monday', 'Dinner', '100g Quinoa, 90g Mackerel and Vegetables'),
('Tuesday', 'Breakfast', '30g Vegan Protein Powder, 30g Peanut Butter, 75g Oats, Cinnamon'),
('Tuesday', 'Pre-Workout', '15g Dextrose,15g Maltodextrin, 10g Essential Amino Acids'),
('Tuesday', 'During Workout', 'Banana'),
('Tuesday', 'Lunch', '200g Salmon, 125g Buckwheat & Vegetables'),
('Tuesday', 'Dinner', '200g Sweet Potato, 100g Lamb & Vegetables'),
('Wednesday', 'Breakfast', '4 egg omelette, tomatoes, mushrooms'),
('Wednesday', 'Mid-Morning Snack', '170g Greek Yoghurt, 150g Strawberries, 10g Coconut Flakes'),
('Wednesday', 'Lunch', '30g Vegan Protein Powder, 40g Peanut Butter, 75g Oats'),
('Wednesday', 'Dinner', '200g Salmon, 50g Pasta, Olive Oil & Vegetables'),
('Thursday', 'Breakfast', '100g Oatmeal, 2 Large Eggs'),
('Thursday', 'Pre-Workout', '15g Dextrose, 15g Maltodextrin, 10g Essential Amino Acids'),
('Thursday', 'During Workout', '2x Oranges'),
('Thursday', 'Lunch', '200g Chicken, 100g Brown Rice, Olive Oil & Vegetables'),
('Thursday', 'Dinner', '300g Sweet Potato, 150g Lamb & Vegetables'),
('Friday', 'Breakfast', '100g Oatmeal, 2 Large Eggs'),
('Friday', 'Pre-Workout', '15g Dextrose, 15g Maltodextrin, 10g Essential Amino Acids'),
('Friday', 'During Workout', '2x Oranges'),
('Friday', 'Lunch', '200g Chicken, 100g Brown Rice, Olive Oil & Vegetables'),
('Friday', 'Dinner', '30g Vegan Protein Powder, 30g Peanut Butter, 75g Oats'),
('Saturday', 'Breakfast', '40g Macadamia Nuts, 200g Beef'),
('Saturday', 'Lunch', '300g Sweet Potato, 150g Turkey, Olive Oil & Vegetables'),
('Saturday', 'Dinner', 'Whey Protein Flapjacks'),
('Sunday', 'Breakfast', '4 egg omelette, tomatoes, mushrooms'),
('Sunday', 'Mid-Morning Snack', '170g Greek Yoghurt, 150g Blueberries, 10g Coconut Flakes'),
('Sunday', 'Lunch', 'One Avocado, 90g Mackerel, 100g Tomatoes'),
('Sunday', 'Dinner', '50g Cous Cous, 180g Chicken, 240g Chick Peas, 20g Sunflower Seeds'),
('Sunday', 'Pre-Bed', '100g Cottage Cheese, 30g Peanut Butter');

COMMIT;