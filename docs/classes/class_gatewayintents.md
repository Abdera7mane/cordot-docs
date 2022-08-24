  
# GatewayIntents
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Gateway intents specifies the group of events that are sent by Discord to the
client.  
  
## Constants
  
- <a name="constant-UNPRIVILEGED"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **UNPRIVILEGED** = 32509  
  
	Unprivileged intents.  
________________

- <a name="constant-GUILDS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILDS** = 1  
  
	Enabled events:
	- `guild_created`
	- `guild_updated`
	- `guild_deleted`
	- `guild_role_created`
	- `guild_role_updated`
	- `guild_role_deleted`
	- `channel_created`
	- `channel_updated`
	- `channel_deleted`
	- `channel_pins_updated`
	- `thread_created`
	- `thread_updated`
	- `thread_deleted`
	- `thread_list_sync`
	- `thread_member_updated`
	- `thread_members_updated`
	- `stage_instance_created`
	- `stage_instance_updated`
	- `stage_instance_deleted`  
________________

- <a name="constant-GUILD-MEMBERS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_MEMBERS** = 2  
  
	Enabled events:
	- `member_joined`
	- `guild_member_updated`
	- `member_left`
	- `thread_members_update`  
________________

- <a name="constant-GUILD-BANS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_BANS** = 4  
  
	Enabled events:
	- `guild_ban_added`
	- `guild_ban_removed`  
________________

- <a name="constant-GUILD-EMOJIS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_EMOJIS** = 8  
  
	Enabled events:
	- `guild_emojis_updated`
	- `guild_stickers_updated`  
________________

- <a name="constant-GUILD-INTEGRATIONS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_INTEGRATIONS** = 16  
  
	Enabled events:
	- `guild_integrations_updated`
	- `integration_created`
	- `integration_updated`
	- `integration_deleted`  
________________

- <a name="constant-GUILD-WEBHOOKS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_WEBHOOKS** = 32  
  
	Enabled events:
	- `webhooks_updated`  
________________

- <a name="constant-GUILD-INVITES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_INVITES** = 64  
  
	Enabled events:
	- `invite_created`
	- `invite_deleted`  
________________

- <a name="constant-GUILD-VOICE-STATES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_VOICE\_STATES** = 128  
  
	Enabled events:
	- `voice_state_updated`  
________________

- <a name="constant-GUILD-PRESENCES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_PRESENCES** = 256  
  
	Enabled events:
	- `presence_updated`  
________________

- <a name="constant-GUILD-MESSAGES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_MESSAGES** = 512  
  
	Enabled events:
	- `message_sent` 
	- `message_updated`
	- `message_deleted`
	- `message_bulk_deleted`  
________________

- <a name="constant-GUILD-MESSAGE-REACTIONS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_MESSAGE\_REACTIONS** = 1024  
  
	Enabled events:
	- `reaction_added`
	- `reaction_removed`
	- `reactions_cleared`
	- `reactions_cleared_emoji`  
________________

- <a name="constant-GUILD-MESSAGE-TYPING"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD\_MESSAGE\_TYPING** = 2048  
  
	Enabled events:
	- `typing_started`  
________________

- <a name="constant-DIRECT-MESSAGES"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **DIRECT\_MESSAGES** = 4096  
  
	Enabled events:
	- `message_sent` 
	- `message_updated`
	- `message_deleted`
	- `channel_pins_updated`  
________________

- <a name="constant-DIRECT-MESSAGE-REACTIONS"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **DIRECT\_MESSAGE\_REACTIONS** = 8192  
  
	Enabled events:
	- `reaction_added`
	- `reaction_removed`
	- `reactions_cleared`
	- `reactions_cleared_emoji`  
________________

- <a name="constant-DIRECT-MESSAGE-TYPING"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **DIRECT\_MESSAGE\_TYPING** = 16384  
  
	Enabled events:
	- `typing_started`  
________________

- <a name="constant-PRIVILEGED"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **PRIVILEGED** = 258  
  
	Privileged intents.  
________________

- <a name="constant-ALL"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **ALL** = 32767  
  
	All intents.
  
