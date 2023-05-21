USE internet_tv;

CREATE TABLE programs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE genres (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE program_genres (
    program_id BIGINT,
    genre_id INT,
    PRIMARY KEY (program_id, genre_id),
    FOREIGN KEY (program_id) REFERENCES programs(id),
    FOREIGN KEY (genre_id) REFERENCES genres(id)
);

CREATE TABLE channels (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE program_seasons (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    program_id BIGINT NOT NULL,
    season_number INT,
    FOREIGN KEY (program_id) REFERENCES programs(id),
    UNIQUE(season_number, program_id)
);

CREATE TABLE episodes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    episode_number INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    duration INT NOT NULL,
    release_date DATE NOT NULL,
    views BIGINT NOT NULL DEFAULT 0,
    program_season_id BIGINT NOT NULL,
    FOREIGN KEY (program_season_id) REFERENCES program_seasons(id),
    UNIQUE(episode_number, program_season_id)
);

CREATE TABLE program_slots (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    start_time DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    channel_id INT NOT NULL,
    episode_id BIGINT NOT NULL,
    views BIGINT NOT NULL DEFAULT 0,
    FOREIGN KEY (channel_id) REFERENCES channels(id),
    FOREIGN KEY (episode_id) REFERENCES episodes(id),
    UNIQUE(start_time, end_time, channel_id)
);