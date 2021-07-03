use rollout;
UPDATE rollout SET name = 'rollout-0' WHERE id = 100;
UPDATE rollout SET name = 'rollout-1' WHERE id = 101;
UPDATE rollout SET name = 'rollout-2' WHERE id = 102;
UPDATE rollout SET name = 'rollout-3' WHERE id = 103;
UPDATE rollout SET name = 'rollout-4' WHERE id = 104;
UPDATE rollout SET name = 'rollout-5' WHERE id = 105;

commit;
