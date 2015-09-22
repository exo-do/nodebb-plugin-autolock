var Topics = module.parent.require('./topics');

module.exports.autolock = function (data, callback) {
	var callback = callback || function () {};
	
	Topics.getPostCount(data.tid, function (err, postCount) {
		if(err) {
			callback(err);
		} if(postCount >= 2) {
			Topics.setTopicField(data.tid, 1, callback);
		} else {
			callback();
		}
	})
	//Topics.tools.lock(tid, uid (1), callback);
	//Topics.getPostCount(tid, callback);
	//Topics.setTopicField(tid, 'locked', lock ? 1 : 0, next);
	//db.setObjectField('topic:' + tid, field, value, callback);
}