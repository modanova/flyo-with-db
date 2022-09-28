PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO user VALUES 
    (1, 'Alex'),
    (2, 'Abby'),
    (3, 'Manoela'),
    (4, 'Suraj')
ON CONFLICT DO NOTHING;

INSERT INTO music VALUES
    -- Alex
    (1, 1, 'Test', 'Test', 'Test', 5),

    -- Abby
    (2, 2, 'Test', 'Test', 'Test', 5),

    -- Manoela
    (3, 3, 'RnB', 'John Legend', 'All of me', 5),

    -- Suraj
    (4, 4, 'Indie', 'Bon Iver', 'Stacks', 5)
ON CONFLICT DO NOTHING;

COMMIT;

PRAGMA foreign_keys = ON;
