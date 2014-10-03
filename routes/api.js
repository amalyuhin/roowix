/**
 * Created by amalyuhin on 01.10.14.
 */

module.exports = function(app) {
    var CommonManager = {
        getPostData: function (req, res, callback) {
            // Check if this is a form post or a stream post via REST client.
            if (req.readable) {
                // REST post.
                var content = '';

                req.on('data', function (data) {
                    if (content.length > 1e6) {
                        // Flood attack or faulty client, nuke request.
                        res.json({ error: 'Request entity too large.' }, 413);
                    }

                    // Append data.
                    content += data;
                });

                req.on('end', function () {
                    // Return the posted data.
                    callback(JSON.parse(content));
                });
            }
            else {
                // Form post.
                callback(req.body);
            }
        }
    };

    app.post('/api/message', function(req, res) {
        CommonManager.getPostData(req, res, function(data) {
            console.log(data);
            res.json(data);
        });
    });
};