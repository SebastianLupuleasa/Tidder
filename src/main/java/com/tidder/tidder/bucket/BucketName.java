package com.tidder.tidder.bucket;

public enum BucketName {

    PROFILE_IMAGE("tidderbucket2");

    private final String bucketName;

    BucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getBucketName() {
        return bucketName;
    }
}
