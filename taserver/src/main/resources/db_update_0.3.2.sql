INSERT INTO
  fr_three (id, integer1, request_user_id, request_title, request_source, request_content, request_date, decision_title, decision_result, decision_content, decision_control)
SELECT
  o.id,
  o.integer1,
  o.dest_user_id,
  o.content1,
  o.content2,
  o.long_content1,
  o.time1,
  o.content4,
  o.content5,
  o.long_content2,
  o.content6
FROM
  fr_ordinal_form o
WHERE
  o.form_type = 'THREE';

UPDATE attach a
  LEFT JOIN fr_ordinal_form o ON a.source_ordinal_form_id = o.id
SET
  a.source_three_decision_id = a.source_ordinal_form_id
WHERE
  o.form_type = 'THREE';

UPDATE attach a
  LEFT JOIN fr_ordinal_form o ON a.source_ordinal_form_id = o.id
SET
  a.source_ordinal_form_id = NULL
WHERE
  o.form_type = 'THREE';

INSERT INTO
  approval (request_user_id, approval_type, approve_user_id, three_id)
SELECT
  t.request_user_id,
  'three',
  1,
  t.id
FROM
  fr_three t;

INSERT INTO approval_step (status, approval_id, approve_user_id)
select 'REVIEWED', a.id, 1
from approval a
where a.three_id is not null;