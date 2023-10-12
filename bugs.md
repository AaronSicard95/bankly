//Only saw the hint after, that's like the most obvious one lol
authUser never verified token.

("users/") was returning personal info

(PATCH "/users/:username") would never wotrk with same user who's not admin since auth checks for admin
Would test by sending a valid patch request with the matching non-admin user token

No schema for Patch
Would test by sending invalid patch requests with admin token






Can No longer test as even adding white space and deleting it will cause all the tests to become open handles that fail. I have to hit undo to remove the white space as just deleting it will cause the issue to persist. Not part of the assignment so I'm not going to spend another 5 hours trying to fix something because this course is over 4 years old.