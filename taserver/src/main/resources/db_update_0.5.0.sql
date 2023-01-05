ALTER TABLE fr_evaluation
  ADD COLUMN year       INT NULL,
  ADD COLUMN is_special BIT NULL;

UPDATE fr_evaluation SET year = 2022 WHERE page IS NOT NULL;

UPDATE fr_evaluation SET is_special = TRUE WHERE id IN (12, 13, 14, 15, 20, 21);