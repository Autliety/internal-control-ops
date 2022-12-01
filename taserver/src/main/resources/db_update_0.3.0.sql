ALTER TABLE fr_measure
  ADD COLUMN progress LONGTEXT NULL;

UPDATE fr_measure me
  LEFT JOIN fr_progress fp ON fp.id = me.progress_id
SET
  me.progress = fp.content
WHERE
    fp.content IS NOT NULL
AND fp.status != 'NONE_REVIEW';

ALTER TABLE fr_measure
  DROP FOREIGN KEY fk6ryvg9pyxn7nnxdtvq9yex0jy,
  DROP COLUMN progress_id,
  DROP COLUMN start_date,
  DROP COLUMN end_date,
  DROP FOREIGN KEY fk4qpryomqol5f9fen1on62usi2,
  DROP COLUMN user_id;

SET @old_foreign_key_checks = @@foreign_key_checks, FOREIGN_KEY_CHECKS = 0;

DELETE a.*, `as`.*
FROM
  approval a
    LEFT JOIN approval_step `as` ON a.id = `as`.approval_id
WHERE
  a.progress_id IS NOT NULL;

SET @old_foreign_key_checks = @@foreign_key_checks, FOREIGN_KEY_CHECKS = 1;

ALTER TABLE approval
  DROP FOREIGN KEY fkcjr7k2sm8gortnb855r7lgws3,
  DROP COLUMN progress_id,
  ADD COLUMN progress_matter_form_id BIGINT NULL,
  ADD FOREIGN KEY (progress_matter_form_id) REFERENCES fr_matter_form (id);

INSERT INTO
  approval (id, approve_user_id, request_user_id, approval_type, progress_matter_form_id, create_time)
SELECT
  (a.id + 170),
  a.approve_user_id,
  a.request_user_id,
  'progressMatterForm',
  a.matter_form_id,
  a.update_time
FROM
  approval a
WHERE
    a.matter_form_id IS NOT NULL
AND a.approval_type = 'matterForm';

INSERT INTO
  approval_step (id, status, approval_id, approve_user_id, update_time)
SELECT
  (s.id + 170),
  'NONE_REVIEW',
  (a.id + 170),
  a.approve_user_id,
  a.update_time
FROM
  approval_step s
    LEFT JOIN approval a ON a.id = s.approval_id
WHERE
    a.matter_form_id IS NOT NULL
AND a.approval_type = 'matterForm';

ALTER TABLE attach
  ADD COLUMN source_progress_matter_id BIGINT NULL,
  ADD FOREIGN KEY (source_progress_matter_id) REFERENCES fr_matter (id),
  DROP FOREIGN KEY fkm16lx43npbrmfknj2yahtgd2d,
  drop COLUMN source_progress_id;

DROP TABLE IF EXISTS fr_progress;