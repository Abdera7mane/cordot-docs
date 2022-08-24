  
# Permissions
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Constants
  
- <a name="constant-MANAGE-GUILD"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_GUILD** = 32  
  
	Allows management and editing of the guild.  
________________

- <a name="constant-MANAGE-CHANNELS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_CHANNELS** = 16  
  
	Allows management and editing of channels.  
________________

- <a name="constant-CHANGE-NICKNAME"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **CHANGE\_NICKNAME** = 67108864  
  
	Allows for modification of own nickname.  
________________

- <a name="constant-BAN-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **BAN\_MEMBERS** = 4  
  
	Allows kicking members.
	Allows banning members.  
________________

- <a name="constant-MANAGE-ROLES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_ROLES** = 268435456  
  
	Allows management and editing of roles  
________________

- <a name="constant-KICK-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **KICK\_MEMBERS** = 2  
  
	Allows kicking members.  
________________

- <a name="constant-ADMINISTRATOR"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ADMINISTRATOR** = 8  
  
	Allows all permissions and bypasses channel permission overwrites.  
________________

- <a name="constant-MANAGE-NICKNAMES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_NICKNAMES** = 134217728  
  
	Allows for modification of other users nicknames.  
________________

- <a name="constant-MUTE-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MUTE\_MEMBERS** = 4194304  
  
	Allows for muting members in a voice channel.  
________________

- <a name="constant-DEAFEN-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **DEAFEN\_MEMBERS** = 8388608  
  
	Allows for deafening of members in a voice channel.  
________________

- <a name="constant-MOVE-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MOVE\_MEMBERS** = 16777216  
  
	Allows for moving of members between voice channels.  
________________

- <a name="constant-MODERATE-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MODERATE\_MEMBERS** = 1099511627776  
  
	Allows for timing out users to prevent them from sending
	or reacting to messages in chat and threads, and from speaking in voice
	and stage channels.  
________________

- <a name="constant-CREATE-INSTANT-INVITE"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **CREATE\_INSTANT\_INVITE** = 1  
  
	Allows creation of instant invites.  
________________

- <a name="constant-STREAM"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **STREAM** = 512  
  
	Allows the user to go live.  
________________

- <a name="constant-VIEW-CHANNEL"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **VIEW\_CHANNEL** = 1024  
  
	Allows guild members to view a channel, which includes reading messages
	in text channels and joining voice channels.  
________________

- <a name="constant-ADD-REACTIONS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ADD\_REACTIONS** = 64  
  
	Allows for the addition of reactions to messages.  
________________

- <a name="constant-CONNECT"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **CONNECT** = 1048576  
  
	Allows for joining of a voice channel.  
________________

- <a name="constant-SPEAK"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **SPEAK** = 2097152  
  
	Allows for speaking in a voice channel.  
________________

- <a name="constant-USE-VAD"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_VAD** = 33554432  
  
	Allows for using voice-activity-detection in a voice channel.  
________________

- <a name="constant-MANAGE-WEBHOOKS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_WEBHOOKS** = 536870912  
  
	Allows management and editing of webhooks.  
________________

- <a name="constant-MANAGE-EMOJIS-AND-STICKERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_EMOJIS\_AND\_STICKERS** = 1073741824  
  
	Allows management and editing of emojis and stickers.  
________________

- <a name="constant-USE-APPLICATION-COMMANDS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_APPLICATION\_COMMANDS** = 2147483648  
  
	Allows members to use application commands, including slash commands
	and context menu commands.  
________________

- <a name="constant-REQUEST-TO-SPEAK"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **REQUEST\_TO\_SPEAK** = 4294967296  
  
	Allows for requesting to speak in stage channels.  
________________

- <a name="constant-MANAGE-THREADS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_THREADS** = 17179869184  
  
	Allows for deleting and archiving threads, and viewing all private threads.  
________________

- <a name="constant-USE-PUBLIC-THREADS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_PUBLIC\_THREADS** = 34359738368  
  
	Allows for creating public and announcement threads.  
________________

- <a name="constant-VIEW-AUDIT-LOG"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **VIEW\_AUDIT\_LOG** = 128  
  
	Allows for viewing of audit logs.  
________________

- <a name="constant-SEND-TTS-MESSAGES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **SEND\_TTS\_MESSAGES** = 4096  
  
	Allows for sending of `/tts` messages.  
________________

- <a name="constant-MANAGE-MESSAGES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MANAGE\_MESSAGES** = 8192  
  
	Allows for deletion of other users messages.  
________________

- <a name="constant-EMBED-LINKS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **EMBED\_LINKS** = 16384  
  
	Links sent by users with this permission will be auto-embedded.  
________________

- <a name="constant-ATTACH-FILES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ATTACH\_FILES** = 32768  
  
	Allows for uploading images and files.  
________________

- <a name="constant-READ-MESSAGE-HISTORY"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **READ\_MESSAGE\_HISTORY** = 65536  
  
	Allows for reading of message history.  
________________

- <a name="constant-MENTION-EVERYONE"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **MENTION\_EVERYONE** = 131072  
  
	Allows for using the `@everyone` tag to notify all users in a channel,
	and the `@here` tag to notify all online users in a channel.  
________________

- <a name="constant-USE-EXTERNAL-EMOJIS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_EXTERNAL\_EMOJIS** = 262144  
  
	Allows the usage of custom emojis from other servers.  
________________

- <a name="constant-VIEW-GUILD-INSIGHTS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **VIEW\_GUILD\_INSIGHTS** = 524288  
  
	Allows for viewing guild insights.  
________________

- <a name="constant-USE-PRIVATE-THREADS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_PRIVATE\_THREADS** = 68719476736  
  
	Allows for creating private threads.  
________________

- <a name="constant-USE-EXTERNAL-STICKERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USE\_EXTERNAL\_STICKERS** = 137438953472  
  
	Allows the usage of custom stickers from other servers.  
________________

- <a name="constant-SEND-MESSAGES-IN-THREADS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **SEND\_MESSAGES\_IN\_THREADS** = 274877906944  
  
	Allows for sending messages in threads.  
________________

- <a name="constant-START-EMBEDDED-ACTIVITIES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **START\_EMBEDDED\_ACTIVITIES** = 549755813888  
  
	Allows for using Activities (applications with the `EMBEDDED` flag)
	in a voice channel.  
________________

- <a name="constant-PRIORITY-SPEAKER"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **PRIORITY\_SPEAKER** = 256  
  
	Allows for using priority speaker in a voice channel.  
________________

- <a name="constant-SEND-MESSAGES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **SEND\_MESSAGES** = 2048  
  
	Allows for sending messages in a channel and creating threads in a forum
	(does not allow sending messages in threads).
  
