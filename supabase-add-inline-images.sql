-- Add inline image columns to articles table
-- Run this SQL in your Supabase SQL Editor

ALTER TABLE articles
ADD COLUMN inline_image_1 TEXT,
ADD COLUMN inline_image_2 TEXT;
