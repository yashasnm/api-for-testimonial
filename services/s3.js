const fs = require("fs");
const S3 = require("aws-sdk/clients/s3");
const {BUCKET,region,AccessKeyID,SecretAccessKey}=require("../config/config")
// aws config

const s3 = new S3({
    region,
    accessKeyId:AccessKeyID,
    secretAccessKey:SecretAccessKey
});
async function uploadFile(file) {
    // console.log(aws_bucket_name,aws_bucket_region,aws_bucket_access_key,aws_bucket_secret_access_key)
  const fileStream = fs.createReadStream(file.path);
  const uploadParams = {
    Bucket: BUCKET,
    Body: fileStream,
    Key: file.filename,
    acl: "public-read",
		ContentType: "image/*"
  };
//   console.log(uploadParams);
  return await s3.upload(uploadParams).promise();
}
exports.uploadFile = uploadFile;





