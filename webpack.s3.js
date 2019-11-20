/**
 * RDS Webpack Config
 */

require('dotenv').config();
const S3Plugin = require('webpack-s3-plugin');

const ver = '0.14.1';

module.exports = {
	plugins: [
		new S3Plugin({
			include: /.*\.(css.gz|js.gz|map.gz)/,
			s3Options: {
				accessKeyId: process.env.AWS_ACCESS_KEY,
				secretAccessKey: process.env.AWS_SECRET_KEY,
				region: 'us-east-1',
			},
			s3UploadOptions: {
				Bucket: process.env.AWS_CDN_BUCKET,

				// Set content encoding for gzip files
				ContentEncoding(fileName) {
					if (/\.gz/.test(fileName)) {
						return 'gzip';
					}
				},

				// Set content types for css and js
				ContentType(fileName) {
					if (/\.css/.test(fileName)) {
						return 'text/css';
					}
					if (/\.js/.test(fileName)) {
						return 'application/javascript';
					}
				},

				// Set expiry date on all items
				Expires() {
					return new Date(Date.now() + 63072000000);
				},

				//Set permission level on all items
				ACL() {
					return 'public-read';
				},
			},
			directory: 'dist/' + ver,
			basePath: 'rds/' + ver,
		}),
	],
};
