  
# Guild
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a guild on Discord also known as a server.  
  
## Properties
  
| type                                                                                | name                                                                       |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [name](#property-name)                                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [description](#property-description)                                       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [owner\_id](#property-owner-id)                                            |
| [Guild.Member](./class_guild.md#member)                                             | [owner](#property-owner)                                                   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [icon\_hash](#property-icon-hash)                                          |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [splash\_hash](#property-splash-hash)                                      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [discovery\_splash\_hash](#property-discovery-splash-hash)                 |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [afk\_channel\_id](#property-afk-channel-id)                               |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)                       | [afk\_channel](#property-afk-channel)                                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [afk\_timeout](#property-afk-timeout)                                      |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                 | [widget\_enabled](#property-widget-enabled)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [widget\_channel\_id](#property-widget-channel-id)                         |
| [Channel](./class_channel.md)                                                       | [widget\_channel](#property-widget-channel)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [verification\_level](#property-verification-level)                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [default\_message\_notifications](#property-default-message-notifications) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [explicit\_content\_filter](#property-explicit-content-filter)             |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [roles](#property-roles)                                                   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [emojis](#property-emojis)                                                 |
| [PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) | [features](#property-features)                                             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [mfa\_level](#property-mfa-level)                                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [application\_id](#property-application-id)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [system\_channel\_id](#property-system-channel-id)                         |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)                         | [system\_channel](#property-system-channel)                                |
| [BitFlag](./class_bitflag.md)                                                       | [system\_channel\_flags](#property-system-channel-flags)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [rules\_channel\_id](#property-rules-channel-id)                           |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)                         | [rules\_channel](#property-rules-channel)                                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                 | [is\_large](#property-is-large)                                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                 | [unavailable](#property-unavailable)                                       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [member\_count](#property-member-count)                                    |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html)     | [voice\_states](#property-voice-states)                                    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [members](#property-members)                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [channels\_ids](#property-channels-ids)                                    |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [threads\_ids](#property-threads-ids)                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [channels](#property-channels)                                             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [max\_presences](#property-max-presences)                                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [max\_members](#property-max-members)                                      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [vanity\_url\_code](#property-vanity-url-code)                             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [banner\_hash](#property-banner-hash)                                      |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [premium\_tier](#property-premium-tier)                                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [premium\_subscription\_count](#property-premium-subscription-count)       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [preferred\_locale](#property-preferred-locale)                            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [public\_updates\_channel\_id](#property-public-updates-channel-id)        |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)                         | [public\_updates\_channel](#property-public-updates-channel)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [max\_video\_channel\_users](#property-max-video-channel-users)            |
| [WelcomeScreen](./class_welcomescreen.md)                                           | [welcome\_screen](#property-welcome-screen)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [nsfw\_level](#property-nsfw-level)                                        |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [threads](#property-threads)                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [stage\_instances](#property-stage-instances)                              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [stickers](#property-stickers)                                             |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)               | [scheduled\_events](#property-scheduled-events)                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                 | [progress\_bar\_enabled](#property-progress-bar-enabled)                   |  
  
## Methods
  
| return type                                                               | signature                                                                                                                                                                                                                                                          |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild](./class_guild.md)                                                 | [Guild](#method-Guild) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                                                            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_feature](#method-has-feature) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) feature **)**                                                                                                                                          |
| [Channel](./class_channel.md)                                             | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**                                                                                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_channels](#method-get-channels) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sort=false **)**                                                                                                                                   |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)             | [get\_afk\_channel](#method-get-afk-channel) **(**  **)**                                                                                                                                                                                                          |
| [Channel](./class_channel.md)                                             | [get\_widget\_channel](#method-get-widget-channel) **(**  **)**                                                                                                                                                                                                    |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_system\_channel](#method-get-system-channel) **(**  **)**                                                                                                                                                                                                    |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_rules\_channel](#method-get-rules-channel) **(**  **)**                                                                                                                                                                                                      |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_public\_updates\_channel](#method-get-public-updates-channel) **(**  **)**                                                                                                                                                                                   |
| [Guild.Member](./class_guild.md#member)                                   | [get\_member](#method-get-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**                                                                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_members](#method-get-members) **(**  **)**                                                                                                                                                                                                                   |
| [Guild.Member](./class_guild.md#member)                                   | [get\_owner](#method-get-owner) **(**  **)**                                                                                                                                                                                                                       |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_roles](#method-get-roles) **(**  **)**                                                                                                                                                                                                                       |
| [Guild.Role](./class_guild.md#role)                                       | [get\_role](#method-get-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                                                                                                                                               |
| [Guild.Role](./class_guild.md#role)                                       | [get\_default\_role](#method-get-default-role) **(**  **)**                                                                                                                                                                                                        |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_emojis](#method-get-emojis) **(**  **)**                                                                                                                                                                                                                     |
| [Guild.GuildEmoji](./class_guild.md#guildemoji)                           | [get\_emoji](#method-get-emoji) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) emoji\_id **)**                                                                                                                                            |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_threads](#method-get-threads) **(**  **)**                                                                                                                                                                                                                   |
| [Guild.ThreadChannel](./class_guild.md#threadchannel)                     | [get\_thread](#method-get-thread) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) thread\_id **)**                                                                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_stage\_instances](#method-get-stage-instances) **(**  **)**                                                                                                                                                                                                  |
| [Guild.StageInstance](./class_guild.md#stageinstance)                     | [get\_stage\_instance](#method-get-stage-instance) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) stage\_id **)**                                                                                                                         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_stickers](#method-get-stickers) **(**  **)**                                                                                                                                                                                                                 |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_sticker](#method-get-sticker) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**                                                                                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_scheduled\_events](#method-get-scheduled-events) **(**  **)**                                                                                                                                                                                                |
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)         | [get\_scheduled\_event](#method-get-scheduled-event) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) event\_id **)**                                                                                                                       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_icon\_url](#method-get-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**                                                |
| [Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) | [get\_icon](#method-get-icon) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)** <u>_coroutine_</u>                                      |
| [Guild](./class_guild.md)                                                 | [edit](#method-edit) **(** [GuildEditData](./class_guildeditdata.md) data **)** <u>_coroutine_</u>                                                                                                                                                                 |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [delete](#method-delete) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_channels](#method-fetch-channels) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                          |
| [Channel](./class_channel.md)                                             | [create\_channel](#method-create-channel) **(** [ChannelCreateData](./class_channelcreatedata.md) data **)** <u>_coroutine_</u>                                                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [edit\_channel\_positions](#method-edit-channel-positions) **(** [ChannelPositionsEditData](./class_channelpositionseditdata.md) data **)** <u>_coroutine_</u>                                                                                                     |
| [Guild.Member](./class_guild.md#member)                                   | [fetch\_member](#method-fetch-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)** <u>_coroutine_</u>                                                                                                                  |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_members](#method-fetch-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)** <u>_coroutine_</u>                                        |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [search\_members](#method-search-members) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)** <u>_coroutine_</u>                                  |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [add\_member](#method-add-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) access\_token **)** <u>_coroutine_</u>                                 |
| [Guild.Member](./class_guild.md#member)                                   | [edit\_current\_member](#method-edit-current-member) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)** <u>_coroutine_</u>                                                                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_bans](#method-fetch-bans) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                                  |
| [GuildBan](./class_guildban.md)                                           | [fetch\_ban](#method-fetch-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>                                                                                                                          |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_roles](#method-fetch-roles) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                                |
| [Guild.Role](./class_guild.md#role)                                       | [create\_role](#method-create-role) **(** [RoleCreateData](./class_rolecreatedata.md) data **)** <u>_coroutine_</u>                                                                                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [edit\_role\_positions](#method-edit-role-positions) **(** [RolePositionsEditData](./class_rolepositionseditdata.md) data **)** <u>_coroutine_</u>                                                                                                                 |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [fetch\_prune\_count](#method-fetch-prune-count) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, PoolStringArray role\_ids=[ ] **)** <u>_coroutine_</u>                                                                            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)         | [begin\_prune](#method-begin-prune) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) return\_count=true, PoolStringArray role\_ids=[ ] **)** <u>_coroutine_</u> |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_voice\_regions](#method-fetch-voice-regions) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [fetch\_invites](#method-fetch-invites) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                            |
| [Guild.Invite](./class_guild.md#invite)                                   | [fetch\_vanity\_url](#method-fetch-vanity-url) **(**  **)** <u>_coroutine_</u>                                                                                                                                                                                     |
| [Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) | [fetch\_widget\_image](#method-fetch-widget-image) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)** <u>_coroutine_</u>                                                                                           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_member](#method-has-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**                                                                                                                                         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_icon](#method-has-icon) **(**  **)**                                                                                                                                                                                                                         |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Features**  
  
	- **ANIMATED\_ICON** = 0  

	- **BANNER** = 1  

	- **COMMERCE** = 2  

	- **COMMUNITY** = 3  

	- **DISCOVERABLE** = 4  

	- **FEATURABLE** = 5  

	- **INVITE\_SPLASH** = 6  

	- **MEMBER\_VERIFICATION\_GATE\_ENABLED** = 7  

	- **MONETIZATION\_ENABLED** = 8  

	- **MORE\_STICKERS** = 9  

	- **NEWS** = 10  

	- **PARTNERED** = 11  

	- **PREVIEW\_ENABLED** = 12  

	- **PRIVATE\_THREADS** = 13  

	- **ROLE\_ICONS** = 14  

	- **SEVEN\_DAY\_THREAD\_ARCHIVE** = 15  

	- **THREE\_DAY\_THREAD\_ARCHIVE** = 16  

	- **TICKETED\_EVENTS\_ENABLED** = 17  

	- **VANITY\_URL** = 18  

	- **VERIFIED** = 19  

	- **VIP\_REGIONS** = 20  

	- **WELCOME\_SCREEN\_ENABLED** = 21  

  
	Guild features.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **ExplicitContentFilterLevel**  
  
	- **DISABLED** = 0  

	- **MEMBERS\_WITHOUT\_ROLES** = 1  

	- **ALL\_MEMBERS** = 2  

  
	Explicit content filter options.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **MFALevel**  
  
	- **NONE** = 0  

	- **ELEVATED** = 1  

  
	MFA level options.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PremiumTier**  
  
	- **NONE** = 0  

	- **TIER\_1** = 1  

	- **TIER\_2** = 2  

	- **TIER\_3** = 3  

  
	Nitro boost tiers.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **NSFWLevel**  
  
	- **DEFAULT** = 0  

	- **EXPLICIT** = 1  

	- **SAFE** = 2  

	- **AGE\_RESTRICTED** = 3  

  
	NSFW level options.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **MessageNotificationLevel**  
  
	- **ALL\_MESSAGES** = 0  

	- **ONLY\_MENTIONS** = 1  

  
	Notification level options.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **SystemChannelFlags**  
  
	- **SUPPRESS\_JOIN\_NOTIFICATIONS** = 1  

	- **SUPPRESS\_PREMIUM\_SUBSCRIPTIONS** = 2  

	- **SUPPRESS\_GUILD\_REMINDER\_NOTIFICATIONS** = 4  

  
	System channel flags.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **VerificationLevel**  
  
	- **NONE** = 0  

	- **LOW** = 1  

	- **MEDIUM** = 2  

	- **HIGH** = 3  

	- **VERY\_HIGH** = 4  

  
	Verification level options.
  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Name of the guild.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	Description of the guild.  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	The guild's owner id.  
________________

- 	<a name="property-owner"></a>[Guild.Member](./class_guild.md#member) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	Owner of the guild.  
________________

- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	Icon hash string. Empty if the guild has no icon.  
________________

- <a name="property-splash-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **splash_hash**  
  
	Invite splash screen hash string.
	Empty if the guild has no Invite splash screen.  
________________

- <a name="property-discovery-splash-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **discovery_splash_hash**  
  
	Discovery splash screen hash string.
	Empty if the guild has no Discovery splash screen.  
________________

- <a name="property-afk-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **afk_channel_id**  
  
	AFK voice channel id.  
________________

- 	<a name="property-afk-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **afk_channel**  
	  
	|          | method              |
	|----------|---------------------|
	| *Getter* | get\_afk\_channel() |  
  
	AFK voice channel.  
________________

- <a name="property-afk-timeout"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **afk_timeout**  
  
	Voice inactivity timeout in seconds.  
________________

- <a name="property-widget-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **widget_enabled**  
  
	`true` if the server widget is enabled.  
________________

- <a name="property-widget-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **widget_channel_id**  
  
	The channel id that the widget will generate an invite to,
	or `0` if set to no invite.  
________________

- 	<a name="property-widget-channel"></a>[Channel](./class_channel.md) **widget_channel**  
	  
	|          | method                 |
	|----------|------------------------|
	| *Getter* | get\_widget\_channel() |  
  
	Reference to the widget channel.  
________________

- <a name="property-verification-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **verification_level**  
  
	The guild's `VerificationLevel`.  
________________

- <a name="property-default-message-notifications"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **default_message_notifications**  
  
	The guild's default `MessageNotificationLevel`.  
________________

- <a name="property-explicit-content-filter"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **explicit_content_filter**  
  
	The guild's `ExplicitContentFilterLevel`.  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	Roles in the guild.  
________________

- 	<a name="property-emojis"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **emojis**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_emojis() |  
  
	Custom emojis in the guild.  
________________

- <a name="property-features"></a>[PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) **features**  
  
	Enabled guild `Features`.  
________________

- <a name="property-mfa-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **mfa_level**  
  
	The guild's `MFALevel`.  
________________

- <a name="property-application-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **application_id**  
  
	Application id of the guild creator if it is bot-created.  
________________

- <a name="property-system-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **system_channel_id**  
  
	System channel id.  
________________

- 	<a name="property-system-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **system_channel**  
	  
	|          | method                 |
	|----------|------------------------|
	| *Getter* | get\_system\_channel() |  
  
	System channel.  
________________

- <a name="property-system-channel-flags"></a>[BitFlag](./class_bitflag.md) **system_channel_flags**  
  
	The guild's `SystemChannelFlags`.  
________________

- <a name="property-rules-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **rules_channel_id**  
  
	Rules channel id.  
________________

- 	<a name="property-rules-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **rules_channel**  
	  
	|          | method                |
	|----------|-----------------------|
	| *Getter* | get\_rules\_channel() |  
  
	Rules channel.  
________________

- <a name="property-is-large"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_large**  
  
	`true` if this is considered a large guild.  
________________

- <a name="property-unavailable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **unavailable**  
  
	`true` if this guild is unavailable due to an outage.  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	Total number of members in this guild.  
________________

- <a name="property-voice-states"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **voice_states**  
  
	States of members currently in voice channels.  
________________

- 	<a name="property-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **members**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_members() |  
  
	Members of the guild. This does not include all members if the guild is large 
	or the members cache is disabled.  
	Use `member_count` to get the total number of members.  
	Use `get_member` to get a member by id from cache.  
	Use `fetch_member` to get a member by id.  
	Use `fetch_members` to get a chunk of the members list.  
________________

- <a name="property-channels-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **channels_ids**  
  
	List of channel ids in the guild.  
________________

- <a name="property-threads-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **threads_ids**  
  
	List of thread ids in the guild.  
________________

- 	<a name="property-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **channels**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_channels() |  
  
	Channels in the guild.  
________________

- <a name="property-max-presences"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_presences**  
  
	The maximum number of presences for the guild,
	only set on the largest of guilds.  
________________

- <a name="property-max-members"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_members**  
  
	The maximum number of members for the guild.  
________________

- <a name="property-vanity-url-code"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **vanity_url_code**  
  
	The vanity url code for the guild. Empty if the guild has no vanity url.  
________________

- <a name="property-banner-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **banner_hash**  
  
	Banner hash string. Empty if the guild has no banner.  
________________

- <a name="property-premium-tier"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_tier**  
  
	The guilds's `PremiumTier` (Server Boost level).  
________________

- <a name="property-premium-subscription-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_subscription_count**  
  
	The number of boosts this guild currently has.  
________________

- <a name="property-preferred-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **preferred_locale**  
  
	The preferred locale of a Community guild, defaults to `en-US`.  
________________

- <a name="property-public-updates-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **public_updates_channel_id**  
  
	The id of community updates channel.  
________________

- 	<a name="property-public-updates-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **public_updates_channel**  
	  
	|          | method                          |
	|----------|---------------------------------|
	| *Getter* | get\_public\_updates\_channel() |  
  
	Community updates channel.  
________________

- <a name="property-max-video-channel-users"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_video_channel_users**  
  
	The maximum amount of users in a video channel.  
________________

- <a name="property-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **welcome_screen**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-nsfw-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **nsfw_level**  
  
	The guild's `NSFWFilterLevel`.  
________________

- 	<a name="property-threads"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **threads**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_threads() |  
  
	All active threads in the guild that current user has permission to view.  
________________

- 	<a name="property-stage-instances"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **stage_instances**  
	  
	|          | method                  |
	|----------|-------------------------|
	| *Getter* | get\_stage\_instances() |  
  
	Stage instances in the guild.  
________________

- 	<a name="property-stickers"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **stickers**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_stickers() |  
  
	Custom stickers in the guild.  
________________

- 	<a name="property-scheduled-events"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **scheduled_events**  
	  
	|          | method                   |
	|----------|--------------------------|
	| *Getter* | get\_scheduled\_events() |  
  
	The scheduled events in the guild.  
________________

- <a name="property-progress-bar-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **progress_bar_enabled**  
  
	Whether the guild has the boost progress bar enabled
  
  
## Method Descriptions
  
- <a name="method-has-feature"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_feature** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) feature **)**  
  
	Checks whether the guild has the given `feature`.  
________________

- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	Gets a channel by `channel_id` that is part of the guild.  
________________

- <a name="method-get-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_channels** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sort=false **)**  
  
	`channels` getter. `sort` can be `true` to sort the channels by position.  
________________

- <a name="method-get-afk-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **get\_afk\_channel** **(**  **)**  
  
	`afk_channel` getter.  
________________

- <a name="method-get-widget-channel"></a>[Channel](./class_channel.md) **get\_widget\_channel** **(**  **)**  
  
	`widget_channel` getter.  
________________

- <a name="method-get-system-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_system\_channel** **(**  **)**  
  
	`system_channel` getter.  
________________

- <a name="method-get-rules-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_rules\_channel** **(**  **)**  
  
	`rules_channel` getter.  
________________

- <a name="method-get-public-updates-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_public\_updates\_channel** **(**  **)**  
  
	`public_updates_channel` getter.  
________________

- <a name="method-get-member"></a>[Guild.Member](./class_guild.md#member) **get\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**  
  
	Gets a member by `member_id` from cache.  
________________

- <a name="method-get-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_members** **(**  **)**  
  
	`members` getter (retrieves from cache).  
________________

- <a name="method-get-owner"></a>[Guild.Member](./class_guild.md#member) **get\_owner** **(**  **)**  
  
	`owner` getter.  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	`roles` getter.  
________________

- <a name="method-get-role"></a>[Guild.Role](./class_guild.md#role) **get\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	Gets a role by `role_id`.  
________________

- <a name="method-get-default-role"></a>[Guild.Role](./class_guild.md#role) **get\_default\_role** **(**  **)**  
  
	Gets default role (`@everyone`).  
________________

- <a name="method-get-emojis"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_emojis** **(**  **)**  
  
	`emojis` getter.  
________________

- <a name="method-get-emoji"></a>[Guild.GuildEmoji](./class_guild.md#guildemoji) **get\_emoji** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) emoji\_id **)**  
  
	Get emoji by `emoji_id`.  
________________

- <a name="method-get-threads"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_threads** **(**  **)**  
  
	`threads` getter.  
________________

- <a name="method-get-thread"></a>[Guild.ThreadChannel](./class_guild.md#threadchannel) **get\_thread** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) thread\_id **)**  
  
	Gets thread by `thread_id`.  
________________

- <a name="method-get-stage-instances"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_stage\_instances** **(**  **)**  
  
	`stage_instances` getter.  
________________

- <a name="method-get-stage-instance"></a>[Guild.StageInstance](./class_guild.md#stageinstance) **get\_stage\_instance** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) stage\_id **)**  
  
	Gets stage instance by `stage_id`.  
________________

- <a name="method-get-stickers"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_stickers** **(**  **)**  
  
	`stickers` getter.  
________________

- <a name="method-get-sticker"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_sticker** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**  
  
	Gets sticker by `sticker_id`.  
________________

- <a name="method-get-scheduled-events"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_scheduled\_events** **(**  **)**  
  
	`scheduled_events` getter.  
________________

- <a name="method-get-scheduled-event"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **get\_scheduled\_event** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) event\_id **)**  
  
	Gets scheduled event by `event_id`.  
________________

- <a name="method-get-icon-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**  
  
	Gets the guild's icon URL or an empty string if the guild has no icon.  
	`format` can be `jpg`, `jpeg`, `png`, `webp` or `gif`, defaults to `png`.  
	`size` is the image size and can be any power of two between `16` and `4096`
	(inclusive), defaults to `128`.  
________________

- <a name="method-get-icon"></a>[Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) **get\_icon** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)** <u>_coroutine_</u>  
  
	Downloads the icon of the guild.  
________________

- <a name="method-edit"></a>[Guild](./class_guild.md) **edit** **(** [GuildEditData](./class_guildeditdata.md) data **)** <u>_coroutine_</u>  
  
	Modify a guild's settings. Requires the `MANAGE_GUILD` permission.
	Returns the updated guild object on success.  
________________

- <a name="method-delete"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **delete** **(**  **)** <u>_coroutine_</u>  
  
	Deletes the guild permanently. User must be the owner.
	Returns `true` on success.  
________________

- <a name="method-fetch-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_channels** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the guild channels from Discord API.  
________________

- <a name="method-create-channel"></a>[Channel](./class_channel.md) **create\_channel** **(** [ChannelCreateData](./class_channelcreatedata.md) data **)** <u>_coroutine_</u>  
  
	Creates a new channel in the guild.  
________________

- <a name="method-edit-channel-positions"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **edit\_channel\_positions** **(** [ChannelPositionsEditData](./class_channelpositionseditdata.md) data **)** <u>_coroutine_</u>  
  
	Edits channel positions.  
________________

- <a name="method-fetch-member"></a>[Guild.Member](./class_guild.md#member) **fetch\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)** <u>_coroutine_</u>  
  
	Fetches a guild member by `member_id` from Discord API.  
________________

- <a name="method-fetch-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)** <u>_coroutine_</u>  
  
	Fetches guild members from Discord API.
	`limit` is the maximum number of members to fetch with a maximum of `1000`.
	`after` is the id of the member to start fetching after.  
________________

- <a name="method-search-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **search\_members** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)** <u>_coroutine_</u>  
  
	Searches for guild members whose name starts with `query`.
	`limit` is the maximum number of members to fetch with a maximum of `1000`.  
________________

- <a name="method-add-member"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **add\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) access\_token **)** <u>_coroutine_</u>  
  
	Adds a member to the guild. Requires a valid oauth2 access token for the user
	with the `guilds.join` scope. Returns an array where the first element is 
	a boolean of whether the member was added and the second element is the member
	object.  
________________

- <a name="method-edit-current-member"></a>[Guild.Member](./class_guild.md#member) **edit\_current\_member** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)** <u>_coroutine_</u>  
  
	Edits the current member in the guild.  
________________

- <a name="method-fetch-bans"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_bans** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the ban list of the guild. Returns an array of `GuildBan` objects.  
________________

- <a name="method-fetch-ban"></a>[GuildBan](./class_guildban.md) **fetch\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)** <u>_coroutine_</u>  
  
	Fetches the ban of a user from the guild. Returns a `GuildBan` object.  
________________

- <a name="method-fetch-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_roles** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the roles of the guild.  
________________

- <a name="method-create-role"></a>[Guild.Role](./class_guild.md#role) **create\_role** **(** [RoleCreateData](./class_rolecreatedata.md) data **)** <u>_coroutine_</u>  
  
	Creates a role in the guild.  
________________

- <a name="method-edit-role-positions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **edit\_role\_positions** **(** [RolePositionsEditData](./class_rolepositionseditdata.md) data **)** <u>_coroutine_</u>  
  
	Edits role positions in the guild.  
________________

- <a name="method-fetch-prune-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **fetch\_prune\_count** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, PoolStringArray role\_ids=[ ] **)** <u>_coroutine_</u>  
  
	Fetches the prune count which indicates the number of members that would be 
	removed by a prune operation. Requires the `KICK_MEMBERS` permission.  
________________

- <a name="method-begin-prune"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **begin\_prune** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) return\_count=true, PoolStringArray role\_ids=[ ] **)** <u>_coroutine_</u>  
  
	Begin	pruning the guild. Requires the `KICK_MEMBERS` permission.
	For large guilds it's recommended to set the `return_count` option to `false`.
	Use `role_ids` to include members who have a subset of the roles specified.
	Returns the number of members that would be removed if `return_count` is `true`
	else `-1`.  
________________

- <a name="method-fetch-voice-regions"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_voice\_regions** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the voice regions of the guild.
	Returns an array of `DiscordVoiceRegion` objects of VIP servers when the guild
	is VIP-enabled.  
________________

- <a name="method-fetch-invites"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **fetch\_invites** **(**  **)** <u>_coroutine_</u>  
  
	Fetches the guild invites. Requires the `MANAGE_GUILD` permission.
	Returns an array of `Invite` objects.  
________________

- <a name="method-fetch-vanity-url"></a>[Guild.Invite](./class_guild.md#invite) **fetch\_vanity\_url** **(**  **)** <u>_coroutine_</u>  
  
	Returns a partial invite object for guilds with that feature enabled.
	Requires the `MANAGE_GUILD` permission.  
________________

- <a name="method-fetch-widget-image"></a>[Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) **fetch\_widget\_image** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)** <u>_coroutine_</u>  
  
	Fetches the guild's widget image.
	Use `style` to set the style of the widget image returned.

	Widget style options:

	- `shield`: shield style widget with Discord icon and guild members online
	count.
	- `banner1`: large image with guild icon, name and online count.
	"POWERED BY DISCORD" as the footer of the widget.
	- `banner2`: smaller widget style with guild icon, name and online count.
	Split on the right with Discord logo.
	- `banner3`: large image with guild icon, name and online count. In the footer,
	Discord logo on the left and "Chat Now" on the right.
	- `banner4`: large Discord logo at the top of the widget. Guild icon, name and
	online count in the middle portion of the widget and a "JOIN MY SERVER" button
	at the bottom.  
________________

- <a name="method-has-member"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**  
  
	Checks if a member with the given `member_id` is inside the guild members cache.  
________________

- <a name="method-has-icon"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_icon** **(**  **)**  
  
	Checks if the guild has an icon.  
________________

  
  
## Sub Classes
  
________________
  
  
# Member
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a member of a guild.  
  
## Properties
  
| type                                                                    | name                                      |
|-------------------------------------------------------------------------|-------------------------------------------|
| [User](./class_user.md)                                                 | [user](#property-user)                    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [nickname](#property-nickname)            |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [avatar\_hash](#property-avatar-hash)     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)           |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                  |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [roles\_ids](#property-roles-ids)         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [roles](#property-roles)                  |
| [Presence](./class_presence.md)                                         | [presence](#property-presence)            |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [join\_date](#property-join-date)         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [premium\_since](#property-premium-since) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_deafened](#property-is-deafened)     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_muted](#property-is-muted)           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [pending](#property-pending)              |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                     |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.Member](./class_guild.md#member)                                 | [Member](#method-Member) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                     |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | ~~[get\_nickname\_mention](#method-get-nickname-mention) **(**  **)**~~                                                                       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_nickname](#method-get-nickname) **(**  **)**                                                                                            |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_avatar\_hash](#method-get-avatar-hash) **(**  **)**                                                                                     |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_roles](#method-get-roles) **(**  **)**                                                                                                  |
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(**  **)**                                                                                                    |
| [Presence](./class_presence.md)                                         | [get\_presence](#method-get-presence) **(**  **)**                                                                                            |
| [Guild.VoiceState](./class_guild.md#voicestate)                         | [get\_partial\_voice\_state](#method-get-partial-voice-state) **(**  **)**                                                                    |
| [Guild.VoiceState](./class_guild.md#voicestate)                         | [get\_voice\_state](#method-get-voice-state) **(**  **)**                                                                                     |
| [BitFlag](./class_bitflag.md)                                           | [get\_permissions](#method-get-permissions) **(**  **)**                                                                                      |
| [BitFlag](./class_bitflag.md)                                           | [permissions\_in](#method-permissions-in) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**           |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_owner](#method-is-owner) **(**  **)**                                                                                                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [has\_role](#method-has-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                          |
| [Guild.Member](./class_guild.md#member)                                 | [edit](#method-edit) **(** [GuildMemberEditData](./class_guildmembereditdata.md) data **)** <u>_coroutine_</u>                                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [assign\_role](#method-assign-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)** <u>_coroutine_</u> |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [revoke\_role](#method-revoke-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)** <u>_coroutine_</u> |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [kick](#method-kick) **(**  **)** <u>_coroutine_</u>                                                                                          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [ban](#method-ban) **(**  **)** <u>_coroutine_</u>                                                                                            |  
  
## Property Descriptions
  
- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	The user this guild member represents.  
________________

- 	<a name="property-nickname"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **nickname**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_nickname() |  
  
	The member's nickname. Equals to `user.username` if no nickname is set.  
________________

- 	<a name="property-avatar-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **avatar_hash**  
	  
	|          | method              |
	|----------|---------------------|
	| *Getter* | get\_avatar\_hash() |  
  
	the avatar hash of the member in the guild. Equals to `user.avatar_hash`
	if the member has no avatar set on the guild.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the member.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	Guild id of the member.
	The guild this member is in.  
________________

- <a name="property-roles-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles_ids**  
  
	Assigned role ids of the member.  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	Assigned roles of the member.  
________________

- 	<a name="property-presence"></a>[Presence](./class_presence.md) **presence**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_presence() |  
  
	The current presence state of the member.  
________________

- <a name="property-join-date"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **join_date**  
  
	When the member joined the guild in unix timestamp (seconds).  
________________

- <a name="property-premium-since"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_since**  
  
	When the member started boosting the guild in unix timestamp (seconds).  
________________

- <a name="property-is-deafened"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_deafened**  
  
	Whether the user is deafened in voice channels.  
________________

- <a name="property-is-muted"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_muted**  
  
	Whether the user is muted in voice channels.  
________________

- <a name="property-pending"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **pending**  
  
	Whether the user has not yet passed the guild's Membership Screening 
	Requirements
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-nickname-mention"></a>***deprecated*** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_nickname\_mention** **(**  **)**  
  
	Deprecated. will be removed in the future.  
________________

- <a name="method-get-nickname"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_nickname** **(**  **)**  
  
	`nickname` getter.  
________________

- <a name="method-get-avatar-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_avatar\_hash** **(**  **)**  
  
	`avatar_hash` getter.  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	`roles` getter.  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	`user` getter.  
________________

- <a name="method-get-presence"></a>[Presence](./class_presence.md) **get\_presence** **(**  **)**  
  
	`presence` getter.  
________________

- <a name="method-get-partial-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **get\_partial\_voice\_state** **(**  **)**  
  
	Gets a partial `VoiceState` object for the member.
	Only contains `is_deafened` and `is_muted` properties.  
________________

- <a name="method-get-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **get\_voice\_state** **(**  **)**  
  
	Gets the member's voice state. If the member is not in a voice channel, 
	returns a partial `VoiceState` object. See `get_partial_voice_state()`.  
________________

- <a name="method-get-permissions"></a>[BitFlag](./class_bitflag.md) **get\_permissions** **(**  **)**  
  
	Gets the member's permissions.  
________________

- <a name="method-permissions-in"></a>[BitFlag](./class_bitflag.md) **permissions\_in** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	Gets the member's permissions in a specific channel.  
________________

- <a name="method-is-owner"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_owner** **(**  **)**  
  
	Checks if the member is the guild owner.  
________________

- <a name="method-has-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	Checks if the member has the given `role_id`.  
________________

- <a name="method-edit"></a>[Guild.Member](./class_guild.md#member) **edit** **(** [GuildMemberEditData](./class_guildmembereditdata.md) data **)** <u>_coroutine_</u>  
  
	Modify attributes of a guild member.  
________________

- <a name="method-assign-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **assign\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)** <u>_coroutine_</u>  
  
	Assigns a role to the member. Requires the `MANAGE_ROLES` permission.
	Returns `true` on success.  
________________

- <a name="method-revoke-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **revoke\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)** <u>_coroutine_</u>  
  
	Revokes a role from the member. Requires the `MANAGE_ROLES` permission.
	Returns `true` on success.  
________________

- <a name="method-kick"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **kick** **(**  **)** <u>_coroutine_</u>  
  
	Kicks the member from the guild. Requires the `KICK_MEMBERS` permission.
	Returns `true` on success.  
________________

- <a name="method-ban"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **ban** **(**  **)** <u>_coroutine_</u>  
  
	Bans the member from the guild. Requires the `BAN_MEMBERS` permission.
	Returns `true` on success.  
________________

  
________________
  
  
# Widget
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                | name                                |
|---------------------------------------------------------------------|-------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [enabled](#property-enabled)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [channel\_id](#property-channel-id) |  
  
## Property Descriptions
  
- <a name="property-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **enabled**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*
  
________________
  
  
# ChannelCategory
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a category channel on a guild. Holds a list of guild channels.  
  
## Properties
  
| type                                                                            | name                               |
|---------------------------------------------------------------------------------|------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [name](#property-name)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [guild\_id](#property-guild-id)    |
| [Guild](./class_guild.md)                                                       | [guild](#property-guild)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [position](#property-position)     |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [overwrites](#property-overwrites) |  
  
## Methods
  
| return type                                               | signature                                                                                                                                   |
|-----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ChannelCategory](./class_guild.md#channelcategory) | [ChannelCategory](#method-ChannelCategory) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                 | [get\_guild](#method-get-guild) **(**  **)**                                                                                                |
| [Guild.ChannelCategory](./class_guild.md#channelcategory) | [edit](#method-edit) **(** [GuildChannelEditData](./class_guildchanneleditdata.md) data **)** <u>_coroutine_</u>                            |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Channel name.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the channel.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The Guild the channel is in.  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	The channel position.  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	Explicit permission overwrites for members and roles.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-edit"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **edit** **(** [GuildChannelEditData](./class_guildchanneleditdata.md) data **)** <u>_coroutine_</u>  
  
	Update a channel's settings.  
________________

  
________________
  
  
# BaseGuildTextChannel
  
**Inherits:** [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildTextChannel](./class_guild.md#guildtextchannel), [Guild.ThreadChannel](./class_guild.md#threadchannel)  
  
## Description
  
Abstract base class for guild text channel.  
  
## Properties
  
| type                                                                    | name                                                    |
|-------------------------------------------------------------------------|---------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                         |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [position](#property-position)                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [rate\_limit\_per\_user](#property-rate-limit-per-user) |  
  
## Methods
  
| return type                                                         | signature                                                                                                                                             |
|---------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) | [BaseGuildTextChannel](#method-BaseGuildTextChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                           | [get\_guild](#method-get-guild) **(**  **)**                                                                                                          |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Channel name.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the channel.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The Guild the channel is in.  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	The channel position.  
________________

- <a name="property-rate-limit-per-user"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **rate_limit_per_user**  
  
	Amount of seconds a user has to wait before sending another message; 
	bots, as well as users with the permission `MANAGE_MESSAGES or 
	`MANAGE_CHANNELS` are unaffected.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

  
________________
  
  
# GuildTextChannel
  
**Inherits:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildNewsChannel](./class_guild.md#guildnewschannel)  
  
## Description
  
Represents a guild text channel.  
  
## Properties
  
| type                                                                            | name                                                       |
|---------------------------------------------------------------------------------|------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [topic](#property-topic)                                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [parent\_id](#property-parent-id)                          |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)                       | [parent](#property-parent)                                 |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [overwrites](#property-overwrites)                         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)             | [nsfw](#property-nsfw)                                     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [auto\_archive\_duration](#property-auto-archive-duration) |  
  
## Methods
  
| return type                                                         | signature                                                                                                                                     |
|---------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)         | [GuildTextChannel](#method-GuildTextChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [has\_parent](#method-has-parent) **(**  **)**                                                                                                |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)           | [get\_parent](#method-get-parent) **(**  **)**                                                                                                |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)         | [edit](#method-edit) **(** [GuildTextChannelEditData](./class_guildtextchanneleditdata.md) data **)** <u>_coroutine_</u>                      |  
  
## Property Descriptions
  
- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	Channel topic.  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	The parent category channel id. `0` if the channel is not in a category.  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	The parent category channel. `null` if the channel is not in a category.  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	Explicit permission overwrites for members and roles.  
________________

- <a name="property-nsfw"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **nsfw**  
  
	Whether the channel is nsfw.  
________________

- <a name="property-auto-archive-duration"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **auto_archive_duration**  
  
	The default auto archive duration for newly created threads in this channel.
  
  
## Method Descriptions
  
- <a name="method-has-parent"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_parent** **(**  **)**  
  
	Checks if the channel has a parent (inside a category channel).  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	`parent` getter.  
________________

- <a name="method-edit"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **edit** **(** [GuildTextChannelEditData](./class_guildtextchanneleditdata.md) data **)** <u>_coroutine_</u>  
  
	Update a channel's settings.  
________________

  
________________
  
  
# GuildNewsChannel
  
**Inherits:** [Guild.GuildTextChannel](./class_guild.md#guildtextchannel) < [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a guild news channel.  
  
## Methods
  
| return type                                                 | signature                                                                                                                                     |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildNewsChannel](./class_guild.md#guildnewschannel) | [GuildNewsChannel](#method-GuildNewsChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Method Descriptions
  
  
________________
  
  
# ThreadChannel
  
**Inherits:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a thread channel.  
  
## Properties
  
| type                                                              | name                                      |
|-------------------------------------------------------------------|-------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [owner\_id](#property-owner-id)           |
| [Guild.Member](./class_guild.md#member)                           | [owner](#property-owner)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [parent\_id](#property-parent-id)         |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)       | [parent](#property-parent)                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [message\_count](#property-message-count) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [member\_count](#property-member-count)   |
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata)           | [metadata](#property-metadata)            |  
  
## Methods
  
| return type                                                 | signature                                                                                                                               |
|-------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ThreadChannel](./class_guild.md#threadchannel)       | [ThreadChannel](#method-ThreadChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild.Member](./class_guild.md#member)                     | [get\_owner](#method-get-owner) **(**  **)**                                                                                            |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel) | [get\_parent](#method-get-parent) **(**  **)**                                                                                          |  
  
## Property Descriptions
  
- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	The owner id of the thread.  
________________

- 	<a name="property-owner"></a>[Guild.Member](./class_guild.md#member) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	The owner of the thread.  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	The guild text channel id the thread was created in.  
________________

- 	<a name="property-parent"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	The guild text channel the thread was created in.  
________________

- <a name="property-message-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **message_count**  
  
	An approximate count of messages in a thread.
	If the thread was created before July 1, 2022, it stops counting at `50`.  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	An approximate count of users in a thread, stops counting at `50`.  
________________

- <a name="property-metadata"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **metadata**  
  
	Thread metadata.
  
  
## Method Descriptions
  
- <a name="method-get-owner"></a>[Guild.Member](./class_guild.md#member) **get\_owner** **(**  **)**  
  
	`owner` getter.  
________________

- <a name="method-get-parent"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_parent** **(**  **)**  
  
	`parent` getter.  
________________

  
________________
  
  
# ThreadMetaData
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Contains a number of thread-specific channel data.  
  
## Properties
  
| type                                                                | name                                                       |
|---------------------------------------------------------------------|------------------------------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [archived](#property-archived)                             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [auto\_archive\_duration](#property-auto-archive-duration) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [archive\_timestamp](#property-archive-timestamp)          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [locked](#property-locked)                                 |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [invitable](#property-invitable)                           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [create\_timestamp](#property-create-timestamp)            |  
  
## Methods
  
| return type                                             | signature                                                                                                                                 |
|---------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata) | [ThreadMetaData](#method-ThreadMetaData) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata) | [clone](#method-clone) **(**  **)**                                                                                                       |  
  
## Property Descriptions
  
- <a name="property-archived"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **archived**  
  
	Whether the thread is archived  
________________

- <a name="property-auto-archive-duration"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **auto_archive_duration**  
  
	The duration in minutes to automatically archive the thread after the
	last activity.  
________________

- <a name="property-archive-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **archive_timestamp**  
  
	Unix timestamp when the thread's archive status was last changed, used for
	calculating recent activity.  
________________

- <a name="property-locked"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **locked**  
  
	Whether the thread is locked; when a thread is locked, only users with
	`MANAGE_THREADS` can unarchive it.  
________________

- <a name="property-invitable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **invitable**  
  
	Whether non-moderators can add other non-moderators to a thread; only
	available on private threads  
________________

- <a name="property-create-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **create_timestamp**  
  
	Unix timestamp when the thread was created; only available for threads
	created after January 9, 2022.
  
  
## Method Descriptions
  
- <a name="method-clone"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **clone** **(**  **)**  
  
	Clones the thread metadata.  
________________

  
________________
  
  
# GuildStoreChannel
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a guild store channel.  
  
## Properties
  
| type                                                                            | name                               |
|---------------------------------------------------------------------------------|------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [name](#property-name)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [guild\_id](#property-guild-id)    |
| [Guild](./class_guild.md)                                                       | [guild](#property-guild)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [position](#property-position)     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [parent\_id](#property-parent-id)  |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)                       | [parent](#property-parent)         |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [overwrites](#property-overwrites) |  
  
## Methods
  
| return type                                                   | signature                                                                                                                                       |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildStoreChannel](./class_guild.md#guildstorechannel) | [GuildStoreChannel](#method-GuildStoreChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                     | [get\_guild](#method-get-guild) **(**  **)**                                                                                                    |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)     | [get\_parent](#method-get-parent) **(**  **)**                                                                                                  |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Channel name.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the channel.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The Guild the channel is in.  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	Channel position.  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	The parent category channel id. `0` if the channel is not in a category.  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	The parent category channel. `null` if the channel is not in a category.  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	Explicit permission overwrites for members and roles.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	`parent` getter.  
________________

  
________________
  
  
# BaseGuildVoiceChannel
  
**Inherits:** [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel), [Guild.StageChannel](./class_guild.md#stagechannel)  
  
## Description
  
Abstract base class for voice guild channels.  
  
## Properties
  
| type                                                                    | name                               |
|-------------------------------------------------------------------------|------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)    |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [position](#property-position)     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [parent\_id](#property-parent-id)  |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [parent](#property-parent)         |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [overwrites](#property-overwrites) |  
  
## Methods
  
| return type                                                           | signature                                                                                                                                               |
|-----------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) | [BaseGuildVoiceChannel](#method-BaseGuildVoiceChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                             | [get\_guild](#method-get-guild) **(**  **)**                                                                                                            |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)             | [get\_parent](#method-get-parent) **(**  **)**                                                                                                          |
| [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) | [edit](#method-edit) **(** [GuildVoiceChannelEditData](./class_guildvoicechanneleditdata.md) data **)** <u>_coroutine_</u>                              |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Channel name.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the channel.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The Guild the channel is in.  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	Channel position.  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	The parent category channel id. `0` if the channel is not in a category.  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	The parent category channel. `null` if the channel is not in a category.  
________________

- <a name="property-overwrites"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **overwrites**  
  
	Explicit permission overwrites for members and roles.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	`parent` getter.  
________________

- <a name="method-edit"></a>[Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) **edit** **(** [GuildVoiceChannelEditData](./class_guildvoicechanneleditdata.md) data **)** <u>_coroutine_</u>  
  
	Update a channel's settings.  
________________

  
________________
  
  
# GuildVoiceChannel
  
**Inherits:** [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) < [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a guild voice channel.  
  
## Properties
  
| type                                                              | name                                      |
|-------------------------------------------------------------------|-------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [user\_limit](#property-user-limit)       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [video\_quality](#property-video-quality) |  
  
## Methods
  
| return type                                                   | signature                                                                                                                                       |
|---------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) | [GuildVoiceChannel](#method-GuildVoiceChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Property Descriptions
  
- <a name="property-user-limit"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_limit**  
  
	The user limit of the voice channel, `0` if unlimited.  
________________

- <a name="property-video-quality"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **video_quality**  
  
	The camera video quality mode of the voice channel, 
	`VoiceChannel.VideoQualityModes.AUTO` when not present.
  
  
## Method Descriptions
  
  
________________
  
  
# StageChannel
  
**Inherits:** [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) < [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a stage voice channel.  
  
## Properties
  
| type                                                                    | name                           |
|-------------------------------------------------------------------------|--------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [topic](#property-topic)       |
| [Guild.StageInstance](./class_guild.md#stageinstance)                   | [instance](#property-instance) |  
  
## Methods
  
| return type                                         | signature                                                                                                                             |
|-----------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.StageChannel](./class_guild.md#stagechannel) | [StageChannel](#method-StageChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Property Descriptions
  
- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	The channel topic  
________________

- <a name="property-instance"></a>[Guild.StageInstance](./class_guild.md#stageinstance) **instance**  
  
	Reference to the stage instance information.
  
  
## Method Descriptions
  
  
________________
  
  
# StageInstance
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Holds information about a live stage.  
  
## Properties
  
| type                                                                    | name                                       |
|-------------------------------------------------------------------------|--------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)            |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)        |
| [Guild.StageChannel](./class_guild.md#stagechannel)                     | [channel](#property-channel)               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [topic](#property-topic)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [privacy\_level](#property-privacy-level)  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | ~~[discoverable](#property-discoverable)~~ |  
  
## Methods
  
| return type                                         | signature                                        |
|-----------------------------------------------------|--------------------------------------------------|
| [Guild](./class_guild.md)                           | [get\_guild](#method-get-guild) **(**  **)**     |
| [Guild.StageChannel](./class_guild.md#stagechannel) | [get\_channel](#method-get-channel) **(**  **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PrivacyLevel**  
  
	- **PUBLIC** = 0  

	- **GUILD\_ONLY** = 1  

  
	Stage instance privacy level options.
  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the stage instance.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The guild the stage is hosted.  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	The stage channel id of the stage instance.  
________________

- 	<a name="property-channel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	The stage channel where the stage is hosted.  
________________

- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	Stage topic.  
________________

- <a name="property-privacy-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **privacy_level**  
  
	The privacy level of the Stage instance.  
________________

- <a name="property-discoverable"></a>***deprecated*** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **discoverable**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-channel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **get\_channel** **(**  **)**  
  
	`channel` getter.  
________________

  
________________
  
  
# Role
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a set of permissions attached to a group of users.  
  
## Properties
  
| type                                                                    | name                                 |
|-------------------------------------------------------------------------|--------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)               |
| [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html)   | [color](#property-color)             |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [hoist](#property-hoist)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [position](#property-position)       |
| [BitFlag](./class_bitflag.md)                                           | [permissions](#property-permissions) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_managed](#property-is-managed)  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [mentionable](#property-mentionable) |
| [Guild.Role.Tags](./class_guild.md#tags)                                | [tags](#property-tags)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)      |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)             |  
  
## Methods
  
| return type                                                               | signature                                                                                                             |
|---------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [Guild.Role](./class_guild.md#role)                                       | [Role](#method-Role) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                                 | [get\_guild](#method-get-guild) **(**  **)**                                                                          |
| [Guild.Role](./class_guild.md#role)                                       | [edit](#method-edit) **(** [RoleEditData](./class_roleeditdata.md) data **)** <u>_coroutine_</u>                      |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete](#method-delete) **(**  **)**                                                                                 |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	Role name.  
________________

- <a name="property-color"></a>[Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) **color**  
  
	Role color.  
________________

- <a name="property-hoist"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **hoist**  
  
	If this role is pinned in the user listing.  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	Role position.  
________________

- <a name="property-permissions"></a>[BitFlag](./class_bitflag.md) **permissions**  
  
	Permissions of the role.  
________________

- <a name="property-is-managed"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_managed**  
  
	Whether this role is managed by an integration.  
________________

- <a name="property-mentionable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **mentionable**  
  
	Whether this role is mentionable.  
________________

- <a name="property-tags"></a>[Guild.Role.Tags](./class_guild.md#tags) **tags**  
  
	The tags this role has.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the role.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The guild the role is in.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-edit"></a>[Guild.Role](./class_guild.md#role) **edit** **(** [RoleEditData](./class_roleeditdata.md) data **)** <u>_coroutine_</u>  
  
	Modify the role. Requires the `MANAGE_ROLES` permission.  
________________

- <a name="method-delete"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete** **(**  **)**  
  
	Delete the role. Requires the `MANAGE_ROLES` permission.  
________________

  
  
## Sub Classes
  
________________
  
  
# Tags
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                | name                                                |
|---------------------------------------------------------------------|-----------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [bot\_id](#property-bot-id)                         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [integration\_id](#property-integration-id)         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [premium\_subscriber](#property-premium-subscriber) |  
  
## Methods
  
| return type                              | signature                                                                                                             |
|------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [Guild.Role.Tags](./class_guild.md#tags) | [Tags](#method-Tags) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild.Role.Tags](./class_guild.md#tags) | [duplicate](#method-duplicate) **(**  **)**                                                                           |  
  
## Property Descriptions
  
- <a name="property-bot-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **bot_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-integration-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **integration_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-premium-subscriber"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **premium_subscriber**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-duplicate"></a>[Guild.Role.Tags](./class_guild.md#tags) **duplicate** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildEmoji
  
**Inherits:** [Emoji](./class_emoji.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a custom guild emoji.  
  
## Properties
  
| type                                                                  | name                                  |
|-----------------------------------------------------------------------|---------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [guild\_id](#property-guild-id)       |
| [Guild](./class_guild.md)                                             | [guild](#property-guild)              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [roles\_ids](#property-roles-ids)     |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [roles](#property-roles)              |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)     | [user\_id](#property-user-id)         |
| [User](./class_user.md)                                               | [user](#property-user)                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [is\_managed](#property-is-managed)   |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [is\_animated](#property-is-animated) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)   | [available](#property-available)      |  
  
## Methods
  
| return type                                                           | signature                                                                                                                         |
|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildEmoji](./class_guild.md#guildemoji)                       | [GuildEmoji](#method-GuildEmoji) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                             | [get\_guild](#method-get-guild) **(**  **)**                                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) | [get\_roles](#method-get-roles) **(**  **)**                                                                                      |
| [User](./class_user.md)                                               | [get\_user](#method-get-user) **(**  **)**                                                                                        |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the emoji.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The guild the emoji is from.  
________________

- <a name="property-roles-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles_ids**  
  
	Role ids of the roles that can use the emoji.  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	Roles allowed to use this emoji.  
________________

- <a name="property-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_id**  
  
	User id that created this emoji.  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	The user that created this emoji.  
________________

- <a name="property-is-managed"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_managed**  
  
	Whether this emoji is managed by an integration.  
________________

- <a name="property-is-animated"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_animated**  
  
	Whether this emoji is animated.  
________________

- <a name="property-available"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **available**  
  
	Whether this emoji can be used, may be `false` due to loss of Server Boosts
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	`roles` getter.  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	`user` getter.  
________________

  
________________
  
  
# VoiceState
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a user's voice connection status.  
  
## Properties
  
| type                                                                    | name                                             |
|-------------------------------------------------------------------------|--------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                  |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)              |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)           | [channel](#property-channel)                     |
| [User](./class_user.md)                                                 | [user](#property-user)                           |
| [Guild.Member](./class_guild.md#member)                                 | [member](#property-member)                       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [session\_id](#property-session-id)              |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_deafened](#property-is-deafened)            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_muted](#property-is-muted)                  |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [self\_deaf](#property-self-deaf)                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [self\_mute](#property-self-mute)                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [self\_stream](#property-self-stream)            |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [self\_video](#property-self-video)              |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [suppress](#property-suppress)                   |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [request\_to\_speak](#property-request-to-speak) |  
  
## Methods
  
| return type                                                   | signature                                                                                                                         |
|---------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [Guild.VoiceState](./class_guild.md#voicestate)               | [VoiceState](#method-VoiceState) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                     | [get\_guild](#method-get-guild) **(**  **)**                                                                                      |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) | [get\_channel](#method-get-channel) **(**  **)**                                                                                  |
| [User](./class_user.md)                                       | [get\_user](#method-get-user) **(**  **)**                                                                                        |
| [Guild.Member](./class_guild.md#member)                       | [get\_member](#method-get-member) **(**  **)**                                                                                    |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	Guild id of the voice state.  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	The guild the voice state is from.  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	The voice channel id this user is connected to.  
________________

- 	<a name="property-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	The voice channel this user is connected to.  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	The user id this voice state is for.  
________________

- 	<a name="property-member"></a>[Guild.Member](./class_guild.md#member) **member**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_member() |  
  
	The guild member this voice state is for.  
________________

- <a name="property-session-id"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **session_id**  
  
	The session id for this voice state.  
________________

- <a name="property-is-deafened"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_deafened**  
  
	Whether this user is deafened by the server.  
________________

- <a name="property-is-muted"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_muted**  
  
	Whether this user is muted by the server.  
________________

- <a name="property-self-deaf"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_deaf**  
  
	Whether this user is locally deafened.  
________________

- <a name="property-self-mute"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_mute**  
  
	Whether this user is locally muted.  
________________

- <a name="property-self-stream"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_stream**  
  
	Whether this user is streaming.  
________________

- <a name="property-self-video"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_video**  
  
	Whether this user's camera is enabled.  
________________

- <a name="property-suppress"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **suppress**  
  
	Whether this user is muted by the current user.  
________________

- <a name="property-request-to-speak"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **request_to_speak**  
  
	The unix time at which the user requested to speak.
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	`guild` getter.  
________________

- <a name="method-get-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **get\_channel** **(**  **)**  
  
	`channel` getter.  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	`user` getter.  
________________

- <a name="method-get-member"></a>[Guild.Member](./class_guild.md#member) **get\_member** **(**  **)**  
  
	`member` getter.  
________________

  
________________
  
  
# Invite
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents an invitation to a guild.  
  
## Properties
  
| type                                                                    | name                                                |
|-------------------------------------------------------------------------|-----------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [code](#property-code)                              |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                            |
| [PartialChannel](./class_partialchannel.md)                             | [channel](#property-channel)                        |
| [User](./class_user.md)                                                 | [inviter](#property-inviter)                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [target\_type](#property-target-type)               |
| [User](./class_user.md)                                                 | [target\_user](#property-target-user)               |
| [DiscordApplication](./class_discordapplication.md)                     | [target\_application](#property-target-application) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [presence\_count](#property-presence-count)         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [member\_count](#property-member-count)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [expires\_at](#property-expires-at)                 |
| [StageInstanceInvite](./class_stageinstanceinvite.md)                   | ~~[stage\_instance](#property-stage-instance)~~     |
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)       | [scheduled\_event](#property-scheduled-event)       |  
  
## Methods
  
| return type                             | signature                                                                                                                 |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Guild.Invite](./class_guild.md#invite) | [Invite](#method-Invite) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **TargetType**  
  
	- **STREAM** = 1  

	- **EMBEDDED\_APPLICATION** = 2  

  
	Invite target types.
  
  
## Property Descriptions
  
- <a name="property-code"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **code**  
  
	the invite code (unique ID).  
________________

- <a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
  
	The guild this invite is for.  
________________

- <a name="property-channel"></a>[PartialChannel](./class_partialchannel.md) **channel**  
  
	The channel this invite is for.  
________________

- <a name="property-inviter"></a>[User](./class_user.md) **inviter**  
  
	The user who created the invite.  
________________

- <a name="property-target-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **target_type**  
  
	The type of target for this voice channel invite.  
________________

- <a name="property-target-user"></a>[User](./class_user.md) **target_user**  
  
	The user whose stream to display for this voice channel stream invite.  
________________

- <a name="property-target-application"></a>[DiscordApplication](./class_discordapplication.md) **target_application**  
  
	The embedded application to open for this voice channel embedded
	application invite.  
________________

- <a name="property-presence-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **presence_count**  
  
	Approximate count of online members.  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	Approximate count of total members.  
________________

- <a name="property-expires-at"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **expires_at**  
  
	the expiration date of this invite.  
________________

- <a name="property-stage-instance"></a>***deprecated*** [StageInstanceInvite](./class_stageinstanceinvite.md) **stage_instance**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-scheduled-event"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **scheduled_event**  
  
	Guild scheduled event data, only included if thee is a scheduled event in
	the channel this invite is for.
  
  
## Method Descriptions
  
  
________________
  
  
# GuildScheduledEvent
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents a scheduled event in a guild.  
  
## Properties
  
| type                                                                    | name                                          |
|-------------------------------------------------------------------------|-----------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [creator\_id](#property-creator-id)           |
| [User](./class_user.md)                                                 | [creator](#property-creator)                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [start\_time](#property-start-time)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [end\_time](#property-end-time)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [privacy\_level](#property-privacy-level)     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [status](#property-status)                    |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [user\_count](#property-user-count)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [entity\_id](#property-entity-id)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [entity\_type](#property-entity-type)         |
| [Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) | [entity\_metadata](#property-entity-metadata) |  
  
## Methods
  
| return type                                                       | signature                                                                                                                                           |
|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) | [GuildScheduledEvent](#method-GuildScheduledEvent) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PrivacyLevel**  
  
	- **GUILD\_ONLY** = 2  

  
	Event privacy levels.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **EntityType**  
  
	- **STAGE\_INSTANCE** = 1  

	- **VOICE** = 2  

	- **EXTERNAL** = 3  

  
	Event entity types.  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **EventStatus**  
  
	- **SCHEDULED** = 1  

	- **ACTIVE** = 2  

	- **COMPLETED** = 3  

	- **CANCELED** = 4  

  
	Event status.
  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	The guild id which the scheduled event belongs to.  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	The channel id in which the scheduled event will be hosted,
	or `0` if `entity_type` is `EntityType.EXTERNAL`.  
________________

- <a name="property-creator-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **creator_id**  
  
	The id of the user that created the scheduled event.  
________________

- <a name="property-creator"></a>[User](./class_user.md) **creator**  
  
	The user that created the scheduled event.  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	The name of the scheduled event.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	The description of the scheduled event.  
________________

- <a name="property-start-time"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **start_time**  
  
	The unix time the scheduled event will start  
________________

- <a name="property-end-time"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **end_time**  
  
	The time the scheduled event will end,
	required if `entity_type` is `EntityType.EXTERNAL`.  
________________

- <a name="property-privacy-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **privacy_level**  
  
	The privacy level of the scheduled event.  
________________

- <a name="property-status"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **status**  
  
	The status of the scheduled event.  
________________

- <a name="property-user-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_count**  
  
	The number of users subscribed to the scheduled event.  
________________

- <a name="property-entity-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **entity_id**  
  
	The id of an entity associated with a guild scheduled event.  
________________

- <a name="property-entity-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **entity_type**  
  
	The type of the scheduled event.  
________________

- <a name="property-entity-metadata"></a>[Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) **entity_metadata**  
  
	Additional metadata for the guild scheduled event.
  
  
## Method Descriptions
  
  
________________
  
  
# ScheduledEventMetadata
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Contains additional information for a guild scheduled event.  
  
## Properties
  
| type                                                                    | name                           |
|-------------------------------------------------------------------------|--------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [location](#property-location) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                 |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) | [ScheduledEventMetadata](#method-ScheduledEventMetadata) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_location **)** |  
  
## Property Descriptions
  
- <a name="property-location"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **location**  
  
	Location of the event.
  
  
## Method Descriptions
  
  
