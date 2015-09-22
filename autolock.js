var Topics = module.parent.require('./topics');

module.exports.autolock = function (data, callback) {
	var callback = callback || function () {};
	
	Topics.getPostCount(data.tid, function (err, postCount) {
		if(err) {
			callback(err);
		} else if(postCount >= 1000) {
			Topics.setTopicField(data.tid, 'locked', 1, callback);
		} else {
			callback();
		}
	});
}