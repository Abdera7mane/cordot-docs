  
# DiscordREST
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Discord REST API constants  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **ENDPOINTS**  
  
	- **INVITE** = "/invites/{invite_code}"  

	- **STICKER** = "/stickers/{sticker_id}"  

	- **STICKER\_PACKS** = "/sticker-packs"  

	- **STAGE\_INSTANCES** = "/stage-instances"  

	- **STAGE\_INSTANCE** = "/stage-instances/{channel_id}"  

	- **VOICE\_REGIONS** = "/voice/regions"  

	- **CHANNEL** = "/channels/{channel_id}"  

	- **CHANNEL\_MESSAGE** = "/channels/{channel_id}/messages/{message_id}"  

	- **CHANNEL\_MESSAGES** = "/channels/{channel_id}/messages"  

	- **CHANNEL\_PERMISSIONS** = "/channels/{channel_id}/permissions/{overwrite_id}"  

	- **CHANNEL\_INVITES** = "/channels/{channel_id}/invites"  

	- **CHANNEL\_FOLLOW** = "/channels/{channel_id}/followers"  

	- **CHANNEL\_TYPING** = "/channels/{channel_id}/typing"  

	- **CHANNEL\_PINS** = "/channels/{channel_id}/pins"  

	- **CHANNEL\_PIN** = "/channels/{channel_id}/pins/{message_id}"  

	- **CHANNEL\_RECIPIENT** = "/channels/{channel_id}/pins/recipients/{user_id}"  

	- **CHANNEL\_WEBHOOKS** = "/channels/{channel_id}/webhooks"  

	- **CROSSPOST\_MESSAGE** = "/channels/{channel_id}/messages/{message_id}/crosspost"  

	- **MESSAGE\_REACTION** = "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}"  

	- **MESSAGE\_OWN\_REACTION** = "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/@me"  

	- **MESSAGE\_USER\_REACTION** = "/channels/{channel_id}/messages/{message_id}/reactions/{emoji}/{user_id}"  

	- **MESSAGE\_REACTIONS** = "/channels/{channel_id}/messages/{message_id}/reactions"  

	- **MESSAGE\_BULK\_DELETE** = "/channels/{channel_id}/messages/bulk-delete"  

	- **THREAD\_WITH\_MESSAGE** = "/channels/{channel_id}/messages/{message_id}/threads"  

	- **THREAD\_WITHOUT\_MESSAGE** = "/channels/{channel_id}/threads"  

	- **THREAD\_CURRENT\_MEMBER** = "/channels/{channel_id}/thread-members/@me"  

	- **THREAD\_MEMBERS** = "/channels/{channel_id}/thread-members"  

	- **THREAD\_MEMBER** = "/channels/{channel_id}/thread-members/{user_id}"  

	- **ACTIVE\_THREADS** = "/channels/{channel_id}/threads/active"  

	- **PUBLIC\_ARCHIVED\_THREADS** = "/channels/{channel_id}/threads/archived/public"  

	- **PRIVATE\_ARCHIVED\_THREADS** = "/channels/{channel_id}/threads/archived/private"  

	- **JOINED\_PRIVATE\_ARCHIVED\_THREADS** = "/channels/{channel_id}/users/@me/threads/archived/private"  

	- **GUILDS** = "/guilds"  

	- **GUILD** = "/guilds/{guild_id}"  

	- **GUILD\_PREVIEW** = "/guilds/{guild_id}/preview"  

	- **GUILD\_CHANNELS** = "/guilds/{guild_id}/channels"  

	- **GUILD\_EMOJIS** = "/guilds/{guild_id}/emojis"  

	- **GUILD\_EMOJI** = "/guilds/{guild_id}/emojis/{emoji_id}"  

	- **GUILD\_STICKERS** = "/guilds/{guild_id}/stickers"  

	- **GUILD\_STICKER** = "/guilds/{guild_id}/stickers/{stickers_id}"  

	- **GUILD\_WEBHOOKS** = "/guilds/{guild_id}/webhooks"  

	- **GUILD\_ACTIVE\_THREADS** = "/guilds/{guild_id}/threads/active"  

	- **GUILD\_MEMBERS** = "/guilds/{guild_id}/members"  

	- **GUILD\_MEMBER** = "/guilds/{guild_id}/members/{user_id}"  

	- **GUILD\_MEMBERS\_SEARCH** = "/guilds/{guild_id}/members/search"  

	- **GUILD\_MEMBER\_ROLE** = "/guilds/{guild_id}/members/{user_id}/roles/{role_id}"  

	- **GUILD\_BANS** = "/guilds/{guild_id}/bans"  

	- **GUILD\_BAN** = "/guilds/{guild_id}/bans/{user_id}"  

	- **GUILD\_ROLES** = "/guilds/{guild_id}/roles"  

	- **GUILD\_ROLE** = "/guilds/{guild_id}/roles/{role_id}"  

	- **GUILD\_PRUNE** = "/guilds/{guild_id}/prune"  

	- **GUILD\_VOICE\_REGIONS** = "/guilds/{guild_id}/regions"  

	- **GUILD\_INVITES** = "/guilds/{guild_id}/invites"  

	- **GUILD\_INTEGRATIONS** = "/guilds/{guild_id}/integrations"  

	- **GUILD\_INTEGRATION** = "/guilds/{guild_id}/integrations/{integration_id}"  

	- **GUILD\_INTEGRATION\_SYNC** = "/guilds/{guild_id}/integrations/{integration_id}/sync"  

	- **GUILD\_WIDGET** = "/guilds/{guild_id}/widget.json"  

	- **GUILD\_WIDGET\_SETTINGS** = "/guilds/{guild_id}/widget"  

	- **GUILD\_WIDGET\_IMAGE** = "/guilds/{guild_id}/widget.png"  

	- **GUILD\_VANITY\_URL** = "/guilds/{guild_id}/vanity-url"  

	- **GUILD\_WELCOME\_SCREEN** = "/guilds/{guild_id}/welcome-screen"  

	- **GUILD\_TEMPLATES** = "/guilds/{guild_id}/templates"  

	- **GUILD\_TEMPLATE** = "/guilds/templates/{template_code}"  

	- **GUILD\_TEMPLATE\_FROM\_GUILD** = "/guilds/{guild_id}/templates/{template_code}"  

	- **GUILD\_AUDIT\_LOG** = "/guilds/{guild_id}/audit-logs"  

	- **GUILD\_SCHEDULED\_EVENTS** = "/guilds/{guild_id}/scheduled-events"  

	- **GUILD\_SCHEDULED\_EVENT** = "/guilds/{guild_id}/scheduled-events/{event_id}"  

	- **CURRENT\_MEMBER** = "/guilds/{guild_id}/members/@me"  

	- **CURRENT\_MEMBER\_VOICE\_STATE** = "/guilds/{guild_id}/voice-states/@me"  

	- **MEMBER\_VOICE\_STATE** = "/guilds/{guild_id}/voice-states/{user_id}"  

	- **CURRENT\_USER** = "/users/@me"  

	- **CURRENT\_USER\_GUILDS** = "/users/@me/guilds"  

	- **CURRENT\_USER\_GUILD** = "/users/@me/guilds/{guild_id}"  

	- **CURRENT\_USER\_CONNECTIONS** = "/users/@me/connections"  

	- **USER** = "/users/{user_id}"  

	- **USER\_DM** = "/users/@me/channels"  

	- **WEBHOOK** = "/webhooks/{webhook_id}"  

	- **WEBHOOK\_WITH\_TOKEN** = "/webhooks/{webhook_id}/{webhook_token}"  

	- **WEBHOOK\_MESSAGE** = "/webhooks/{webhook_id}/{webhook_token}/messages/{message_id}"  

	- **WEBHOOK\_SLACK** = "/webhooks/{webhook_id}/{webhook_token}/slack"  

	- **WEBHOOK\_GITHUB** = "/webhooks/{webhook_id}/{webhook_token}/github"  

	- **CUSTOM\_EMOJI** = "/emojis/{emoji_id}"  

	- **GUILD\_ICON** = "/icons/{guild_id}/{hash}"  

	- **GUILD\_SPLASH** = "/splashes/{guild_id}/{hash}"  

	- **GUILD\_DISCOVERY\_SPLASH** = "/discovery-splashes/{guild_id}/{hash}"  

	- **BANNER** = "/banners/{entity_id}/{hash}"  

	- **DEFAULT\_USER\_AVATAR** = "/embed/avatars/{discriminator}"  

	- **USER\_AVATAR** = "/avatars/{user_id}/{hash}"  

	- **GUILD\_MEMBER\_AVATAR** = "/guilds/{guild_id}/users/{user_id}/avatars/{hash}"  

	- **APPLICATION\_ICON** = "/app-icons/{application_id}/{hash}"  

	- **APPLICATION\_ASSET** = "/app-assets/{application_id}/{asset_id}"  

	- **ACHIEVEMENT\_ID** = "/app-assets/{application_id}/achievements/{achievement_id}/icons/{hash}"  

	- **STICKER\_PACK\_BANNER** = "/app-assets/710982414301790216/store/{asset_id}"  

	- **TEAM\_ICON** = "/team-icons/{team_id}/{hash}"  

	- **STICKER\_RESOURCE** = "/stickers/{sticker_id}"  

	- **ROLE\_ICON** = "/role-icons/{role_id}/{hash}"  

	- **APPLICATION\_COMMANDS** = "/applications/{application_id}/commands"  

	- **APPLICATION\_COMMAND** = "/applications/{application_id}/commands/{command_id}"  

	- **GUILD\_APPLICATION\_COMMANDS** = "/applications/{application_id}/guilds/{guild_id}/commands"  

	- **GUILD\_APPLICATION\_COMMAND** = "/applications/{application_id}/guilds/{guild_id}/commands/{command_id}"  

	- **INTERACTION\_CALLBACK** = "/interactions/{interaction_id}/{token}/callback"  

	- **INTERACTION\_ORIGINAL\_RESPONSE** = "/webhooks/{application_id}/{token}/messages/@original"  

	- **CREATE\_FOLLOWUP\_MESSAGE** = "/webhooks/{application_id}/{token}"  

	- **FOLLOWUP\_MESSAGE** = "/webhooks/{application_id}/{token}/messages/{message_id}"  

  
	Discord REST API endpoints.  
________________

- <a name="constant-GUILD"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **GUILD** = 2  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-CHANNEL"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **CHANNEL** = 1  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-CDN-FILE-FORMATS"></a>PoolStringArray **CDN\_FILE\_FORMATS** = [jpg, jpeg, png, webp, gif, json]  
  
	Discord CDN file formats.  
________________

- <a name="constant-INTERACTION"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **INTERACTION** = 3  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-APPLICATION"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **APPLICATION** = 0  
  
	Discord REST API types.  
________________

- <a name="constant-USER"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **USER** = 4  
  
	> *There is currently no description for this constant.*  
________________

- <a name="constant-WEBHOOK"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **WEBHOOK** = 5  
  
	> *There is currently no description for this constant.*
  
