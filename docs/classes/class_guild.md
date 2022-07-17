  
# Guild
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                                | name                                                                       |
|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [name](#property-name)                                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)             | [description](#property-description)                                       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                   | [owner\_id](#property-owner-id)                                            |
| [DiscordTeam.Member](./class_discordteam.md#member)                                 | [owner](#property-owner)                                                   |
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
  
| return type                                                               | signature                                                                                                                                                                                                                                                                                                                 |
|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild](./class_guild.md)                                                 | [Guild](#method-Guild) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**                                                                                                                                                                                                   |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_feature](#method-has-feature) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) feature **)**                                                                                                                                                                                                 |
| [Channel](./class_channel.md)                                             | [get\_channel](#method-get-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**                                                                                                                                                                                             |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_channels](#method-get-channels) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sort=false **)**                                                                                                                                                                                          |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)             | [get\_afk\_channel](#method-get-afk-channel) **(**  **)**                                                                                                                                                                                                                                                                 |
| [Channel](./class_channel.md)                                             | [get\_widget\_channel](#method-get-widget-channel) **(**  **)**                                                                                                                                                                                                                                                           |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_system\_channel](#method-get-system-channel) **(**  **)**                                                                                                                                                                                                                                                           |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_rules\_channel](#method-get-rules-channel) **(**  **)**                                                                                                                                                                                                                                                             |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)               | [get\_public\_updates\_channel](#method-get-public-updates-channel) **(**  **)**                                                                                                                                                                                                                                          |
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [get\_member](#method-get-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**                                                                                                                                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_members](#method-get-members) **(**  **)**                                                                                                                                                                                                                                                                          |
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [get\_owner](#method-get-owner) **(**  **)**                                                                                                                                                                                                                                                                              |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_roles](#method-get-roles) **(**  **)**                                                                                                                                                                                                                                                                              |
| [Guild.Role](./class_guild.md#role)                                       | [get\_role](#method-get-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**                                                                                                                                                                                                      |
| [Guild.Role](./class_guild.md#role)                                       | [get\_default\_role](#method-get-default-role) **(**  **)**                                                                                                                                                                                                                                                               |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_emojis](#method-get-emojis) **(**  **)**                                                                                                                                                                                                                                                                            |
| [Guild.GuildEmoji](./class_guild.md#guildemoji)                           | [get\_emoji](#method-get-emoji) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) emoji\_id **)**                                                                                                                                                                                                   |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_threads](#method-get-threads) **(**  **)**                                                                                                                                                                                                                                                                          |
| [Guild.ThreadChannel](./class_guild.md#threadchannel)                     | [get\_thread](#method-get-thread) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) thread\_id **)**                                                                                                                                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_stage\_instances](#method-get-stage-instances) **(**  **)**                                                                                                                                                                                                                                                         |
| [Guild.StageInstance](./class_guild.md#stageinstance)                     | [get\_stage\_instance](#method-get-stage-instance) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) stage\_id **)**                                                                                                                                                                                |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_stickers](#method-get-stickers) **(**  **)**                                                                                                                                                                                                                                                                        |
| [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)   | [get\_sticker](#method-get-sticker) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**                                                                                                                                                                                             |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_scheduled\_events](#method-get-scheduled-events) **(**  **)**                                                                                                                                                                                                                                                       |
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)         | [get\_scheduled\_event](#method-get-scheduled-event) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) event\_id **)**                                                                                                                                                                              |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_icon\_url](#method-get-icon-url) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**                                                                                                       |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [get\_icon](#method-get-icon) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**                                                                                                                |
| [Guild](./class_guild.md)                                                 | [edit](#method-edit) **(** [GuildEditData](./class_guildeditdata.md) data **)**                                                                                                                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete](#method-delete) **(**  **)**                                                                                                                                                                                                                                                                                     |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_channels](#method-fetch-channels) **(**  **)**                                                                                                                                                                                                                                                                    |
| [Channel](./class_channel.md)                                             | [create\_channel](#method-create-channel) **(** [ChannelCreateData](./class_channelcreatedata.md) data **)**                                                                                                                                                                                                              |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_channel\_positions](#method-edit-channel-positions) **(** [ChannelPositionsEditData](./class_channelpositionseditdata.md) data **)**                                                                                                                                                                               |
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [fetch\_member](#method-fetch-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**                                                                                                                                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_members](#method-fetch-members) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)**                                                                                                                  |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [search\_members](#method-search-members) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)**                                                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [add\_member](#method-add-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) access\_token **)**                                                                                                           |
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [edit\_current\_member](#method-edit-current-member) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)**                                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_bans](#method-fetch-bans) **(**  **)**                                                                                                                                                                                                                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_ban](#method-fetch-ban) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**                                                                                                                                                                                                    |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_roles](#method-fetch-roles) **(**  **)**                                                                                                                                                                                                                                                                          |
| [Guild.Role](./class_guild.md#role)                                       | [create\_role](#method-create-role) **(** [RoleCreateData](./class_rolecreatedata.md) data **)**                                                                                                                                                                                                                          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [edit\_role\_positions](#method-edit-role-positions) **(** [RolePositionsEditData](./class_rolepositionseditdata.md) data **)**                                                                                                                                                                                           |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_prune\_count](#method-fetch-prune-count) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) role\_ids=[ ] **)**                                                                            |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [begin\_prune](#method-begin-prune) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) return\_count=true, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) role\_ids=[ ] **)** |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_voice\_regions](#method-fetch-voice-regions) **(**  **)**                                                                                                                                                                                                                                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [fetch\_invites](#method-fetch-invites) **(**  **)**                                                                                                                                                                                                                                                                      |
| [Guild.Invite](./class_guild.md#invite)                                   | [fetch\_vanity\_url](#method-fetch-vanity-url) **(**  **)**                                                                                                                                                                                                                                                               |
| [Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) | [fetch\_widget\_image](#method-fetch-widget-image) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)**                                                                                                                                                                     |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_member](#method-has-member) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**                                                                                                                                                                                                |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_icon](#method-has-icon) **(**  **)**                                                                                                                                                                                                                                                                                |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                                                                                                                                                                                                              |  
  
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

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **ExplicitContentFilterLevel**  
  
	- **DISABLED** = 0  

	- **MEMBERS\_WITHOUT\_ROLES** = 1  

	- **ALL\_MEMBERS** = 2  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **MFALevel**  
  
	- **NONE** = 0  

	- **ELEVATED** = 1  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **SystemChannelFlags**  
  
	- **SUPPRESS\_JOIN\_NOTIFICATIONS** = 1  

	- **SUPPRESS\_PREMIUM\_SUBSCRIPTIONS** = 2  

	- **SUPPRESS\_GUILD\_REMINDER\_NOTIFICATIONS** = 4  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **VerificationLevel**  
  
	- **NONE** = 0  

	- **LOW** = 1  

	- **MEDIUM** = 2  

	- **HIGH** = 3  

	- **VERY\_HIGH** = 4  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **NSFWLevel**  
  
	- **DEFAULT** = 0  

	- **EXPLICIT** = 1  

	- **SAFE** = 2  

	- **AGE\_RESTRICTED** = 3  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **MessageNotificationLevel**  
  
	- **ALL\_MESSAGES** = 0  

	- **ONLY\_MENTIONS** = 1  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PremiumTier**  
  
	- **NONE** = 0  

	- **TIER\_1** = 1  

	- **TIER\_2** = 2  

	- **TIER\_3** = 3  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-owner"></a>[DiscordTeam.Member](./class_discordteam.md#member) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-splash-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **splash_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-discovery-splash-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **discovery_splash_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-afk-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **afk_channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-afk-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **afk_channel**  
	  
	|          | method              |
	|----------|---------------------|
	| *Getter* | get\_afk\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-afk-timeout"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **afk_timeout**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-widget-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **widget_enabled**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-widget-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **widget_channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-widget-channel"></a>[Channel](./class_channel.md) **widget_channel**  
	  
	|          | method                 |
	|----------|------------------------|
	| *Getter* | get\_widget\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-verification-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **verification_level**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-default-message-notifications"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **default_message_notifications**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-explicit-content-filter"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **explicit_content_filter**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-emojis"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **emojis**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_emojis() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-features"></a>[PoolIntArray](https://docs.godotengine.org/en/3.5/classes/class_poolintarray.html) **features**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-mfa-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **mfa_level**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-application-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **application_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-system-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **system_channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-system-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **system_channel**  
	  
	|          | method                 |
	|----------|------------------------|
	| *Getter* | get\_system\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-system-channel-flags"></a>[BitFlag](./class_bitflag.md) **system_channel_flags**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-rules-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **rules_channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-rules-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **rules_channel**  
	  
	|          | method                |
	|----------|-----------------------|
	| *Getter* | get\_rules\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-large"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_large**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-unavailable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **unavailable**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-voice-states"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **voice_states**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **members**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_members() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channels-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **channels_ids**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-threads-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **threads_ids**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **channels**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_channels() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-max-presences"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_presences**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-max-members"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_members**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-vanity-url-code"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **vanity_url_code**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-banner-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **banner_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-premium-tier"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_tier**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-premium-subscription-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_subscription_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-preferred-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **preferred_locale**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-public-updates-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **public_updates_channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-public-updates-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **public_updates_channel**  
	  
	|          | method                          |
	|----------|---------------------------------|
	| *Getter* | get\_public\_updates\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-max-video-channel-users"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **max_video_channel_users**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-welcome-screen"></a>[WelcomeScreen](./class_welcomescreen.md) **welcome_screen**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-nsfw-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **nsfw_level**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-threads"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **threads**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_threads() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-stage-instances"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **stage_instances**  
	  
	|          | method                  |
	|----------|-------------------------|
	| *Getter* | get\_stage\_instances() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-stickers"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **stickers**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_stickers() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-scheduled-events"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **scheduled_events**  
	  
	|          | method                   |
	|----------|--------------------------|
	| *Getter* | get\_scheduled\_events() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-progress-bar-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **progress_bar_enabled**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Guild"></a>[Guild](./class_guild.md) **Guild** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-feature"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_feature** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) feature **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[Channel](./class_channel.md) **get\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channels"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_channels** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) sort=false **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-afk-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **get\_afk\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-widget-channel"></a>[Channel](./class_channel.md) **get\_widget\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-system-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_system\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-rules-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_rules\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-public-updates-channel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_public\_updates\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **get\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-members"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_members** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-owner"></a>[DiscordTeam.Member](./class_discordteam.md#member) **get\_owner** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-role"></a>[Guild.Role](./class_guild.md#role) **get\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-default-role"></a>[Guild.Role](./class_guild.md#role) **get\_default\_role** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-emojis"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_emojis** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-emoji"></a>[Guild.GuildEmoji](./class_guild.md#guildemoji) **get\_emoji** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) emoji\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-threads"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_threads** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-thread"></a>[Guild.ThreadChannel](./class_guild.md#threadchannel) **get\_thread** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) thread\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-stage-instances"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_stage\_instances** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-stage-instance"></a>[Guild.StageInstance](./class_guild.md#stageinstance) **get\_stage\_instance** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) stage\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-stickers"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_stickers** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-sticker"></a>[Object](https://docs.godotengine.org/en/3.5/classes/class_object.html) **get\_sticker** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) sticker\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-scheduled-events"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_scheduled\_events** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-scheduled-event"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **get\_scheduled\_event** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) event\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-icon-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_icon\_url** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-icon"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **get\_icon** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) format="png", [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) size=128 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[Guild](./class_guild.md) **edit** **(** [GuildEditData](./class_guildeditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-channels"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_channels** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-channel"></a>[Channel](./class_channel.md) **create\_channel** **(** [ChannelCreateData](./class_channelcreatedata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-channel-positions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_channel\_positions** **(** [ChannelPositionsEditData](./class_channelpositionseditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **fetch\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-members"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_members** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) after=0 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-search-members"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **search\_members** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) query, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) limit=1 **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-add-member"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **add\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id, [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) access\_token **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-current-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **edit\_current\_member** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) nickname **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-bans"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_bans** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-ban"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_ban** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) user\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-roles"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_roles** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-create-role"></a>[Guild.Role](./class_guild.md#role) **create\_role** **(** [RoleCreateData](./class_rolecreatedata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit-role-positions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **edit\_role\_positions** **(** [RolePositionsEditData](./class_rolepositionseditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-prune-count"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_prune\_count** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) role\_ids=[ ] **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-begin-prune"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **begin\_prune** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) days=7, [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) return\_count=true, [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) role\_ids=[ ] **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-voice-regions"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_voice\_regions** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-invites"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **fetch\_invites** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-vanity-url"></a>[Guild.Invite](./class_guild.md#invite) **fetch\_vanity\_url** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-fetch-widget-image"></a>[Texture](https://docs.godotengine.org/en/3.5/classes/class_texture.html) **fetch\_widget\_image** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) style="shield" **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-member"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_member** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) member\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-icon"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_icon** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
  
## Sub Classes
  
________________
  
  
# Member
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
  
| return type                                                               | signature                                                                                                                           |
|---------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [Member](#method-Member) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**           |
| [Guild](./class_guild.md)                                                 | [get\_guild](#method-get-guild) **(**  **)**                                                                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_mention](#method-get-mention) **(**  **)**                                                                                    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_nickname\_mention](#method-get-nickname-mention) **(**  **)**                                                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_nickname](#method-get-nickname) **(**  **)**                                                                                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_avatar\_hash](#method-get-avatar-hash) **(**  **)**                                                                           |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)     | [get\_roles](#method-get-roles) **(**  **)**                                                                                        |
| [User](./class_user.md)                                                   | [get\_user](#method-get-user) **(**  **)**                                                                                          |
| [Presence](./class_presence.md)                                           | [get\_presence](#method-get-presence) **(**  **)**                                                                                  |
| [Guild.VoiceState](./class_guild.md#voicestate)                           | [get\_partial\_voice\_state](#method-get-partial-voice-state) **(**  **)**                                                          |
| [Guild.VoiceState](./class_guild.md#voicestate)                           | [get\_voice\_state](#method-get-voice-state) **(**  **)**                                                                           |
| [BitFlag](./class_bitflag.md)                                             | [get\_permissions](#method-get-permissions) **(**  **)**                                                                            |
| [BitFlag](./class_bitflag.md)                                             | [permissions\_in](#method-permissions-in) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)** |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [is\_owner](#method-is-owner) **(**  **)**                                                                                          |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)       | [has\_role](#method-has-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                      |
| [DiscordTeam.Member](./class_discordteam.md#member)                       | [edit](#method-edit) **(** [GuildMemberEditData](./class_guildmembereditdata.md) data **)**                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [assign\_role](#method-assign-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [revoke\_role](#method-revoke-role) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**          |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [kick](#method-kick) **(**  **)**                                                                                                   |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [ban](#method-ban) **(**  **)**                                                                                                     |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                                        |  
  
## Property Descriptions
  
- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-nickname"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **nickname**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_nickname() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-avatar-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **avatar_hash**  
	  
	|          | method              |
	|----------|---------------------|
	| *Getter* | get\_avatar\_hash() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-roles-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles_ids**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-presence"></a>[Presence](./class_presence.md) **presence**  
	  
	|          | method          |
	|----------|-----------------|
	| *Getter* | get\_presence() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-join-date"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **join_date**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-premium-since"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_since**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-deafened"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_deafened**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-muted"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_muted**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-pending"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **pending**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **Member** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-nickname-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_nickname\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-nickname"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_nickname** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-avatar-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_avatar\_hash** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-presence"></a>[Presence](./class_presence.md) **get\_presence** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-partial-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **get\_partial\_voice\_state** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-voice-state"></a>[Guild.VoiceState](./class_guild.md#voicestate) **get\_voice\_state** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-permissions"></a>[BitFlag](./class_bitflag.md) **get\_permissions** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-permissions-in"></a>[BitFlag](./class_bitflag.md) **permissions\_in** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) channel\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-owner"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_owner** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-role"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[DiscordTeam.Member](./class_discordteam.md#member) **edit** **(** [GuildMemberEditData](./class_guildmembereditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-assign-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **assign\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-revoke-role"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **revoke\_role** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) role\_id **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-kick"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **kick** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-ban"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **ban** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# Widget
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                | name                                |
|---------------------------------------------------------------------|-------------------------------------|
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) | [enabled](#property-enabled)        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)   | [channel\_id](#property-channel-id) |  
  
## Methods
  
| return type                                                             | signature                                    |
|-------------------------------------------------------------------------|----------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)** |  
  
## Property Descriptions
  
- <a name="property-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **enabled**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*
  
________________
  
  
# ChannelCategory
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                            | name                               |
|---------------------------------------------------------------------------------|------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)         | [name](#property-name)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [guild\_id](#property-guild-id)    |
| [Guild](./class_guild.md)                                                       | [guild](#property-guild)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)               | [position](#property-position)     |
| [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) | [overwrites](#property-overwrites) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                   |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [ChannelCategory](#method-ChannelCategory) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                                |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [edit](#method-edit) **(** [GuildChannelEditData](./class_guildchanneleditdata.md) data **)**                                               |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ChannelCategory"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **ChannelCategory** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **edit** **(** [GuildChannelEditData](./class_guildchanneleditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# BaseGuildTextChannel
  
**Inherits:** [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildTextChannel](./class_guild.md#guildtextchannel), [Guild.ThreadChannel](./class_guild.md#threadchannel)  
  
## Properties
  
| type                                                                    | name                                                    |
|-------------------------------------------------------------------------|---------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                         |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [position](#property-position)                          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [rate\_limit\_per\_user](#property-rate-limit-per-user) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                             |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel)     | [BaseGuildTextChannel](#method-BaseGuildTextChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                                          |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                          |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-rate-limit-per-user"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **rate_limit_per_user**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-BaseGuildTextChannel"></a>[Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) **BaseGuildTextChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildTextChannel
  
**Inherits:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildNewsChannel](./class_guild.md#guildnewschannel)  
  
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
  
| return type                                                             | signature                                                                                                                                     |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)             | [GuildTextChannel](#method-GuildTextChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [has\_parent](#method-has-parent) **(**  **)**                                                                                                |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [get\_parent](#method-get-parent) **(**  **)**                                                                                                |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                  |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)             | [edit](#method-edit) **(** [GuildTextChannelEditData](./class_guildtextchanneleditdata.md) data **)**                                         |  
  
## Property Descriptions
  
- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-nsfw"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **nsfw**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-auto-archive-duration"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **auto_archive_duration**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildTextChannel"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **GuildTextChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-has-parent"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **has\_parent** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **edit** **(** [GuildTextChannelEditData](./class_guildtextchanneleditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildNewsChannel
  
**Inherits:** [Guild.GuildTextChannel](./class_guild.md#guildtextchannel) < [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Methods
  
| return type                                                             | signature                                                                                                                                     |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildNewsChannel](./class_guild.md#guildnewschannel)             | [GuildNewsChannel](#method-GuildNewsChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                  |  
  
## Method Descriptions
  
- <a name="method-GuildNewsChannel"></a>[Guild.GuildNewsChannel](./class_guild.md#guildnewschannel) **GuildNewsChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*
  
________________
  
  
# ThreadChannel
  
**Inherits:** [Guild.BaseGuildTextChannel](./class_guild.md#baseguildtextchannel) < [TextChannel](./class_textchannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                              | name                                      |
|-------------------------------------------------------------------|-------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [owner\_id](#property-owner-id)           |
| [DiscordTeam.Member](./class_discordteam.md#member)               | [owner](#property-owner)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [parent\_id](#property-parent-id)         |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)       | [parent](#property-parent)                |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [message\_count](#property-message-count) |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [member\_count](#property-member-count)   |
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata)           | [metadata](#property-metadata)            |  
  
## Methods
  
| return type                                                             | signature                                                                                                                               |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ThreadChannel](./class_guild.md#threadchannel)                   | [ThreadChannel](#method-ThreadChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [DiscordTeam.Member](./class_discordteam.md#member)                     | [get\_owner](#method-get-owner) **(**  **)**                                                                                            |
| [Guild.GuildTextChannel](./class_guild.md#guildtextchannel)             | [get\_parent](#method-get-parent) **(**  **)**                                                                                          |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                            |  
  
## Property Descriptions
  
- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-owner"></a>[DiscordTeam.Member](./class_discordteam.md#member) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-parent"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-message-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **message_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-metadata"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **metadata**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ThreadChannel"></a>[Guild.ThreadChannel](./class_guild.md#threadchannel) **ThreadChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-owner"></a>[DiscordTeam.Member](./class_discordteam.md#member) **get\_owner** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-parent"></a>[Guild.GuildTextChannel](./class_guild.md#guildtextchannel) **get\_parent** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# ThreadMetaData
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
  
| return type                                                             | signature                                                                                                                                 |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata)                 | [ThreadMetaData](#method-ThreadMetaData) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild.ThreadMetaData](./class_guild.md#threadmetadata)                 | [clone](#method-clone) **(**  **)**                                                                                                       |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                              |  
  
## Property Descriptions
  
- <a name="property-archived"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **archived**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-auto-archive-duration"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **auto_archive_duration**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-archive-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **archive_timestamp**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-locked"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **locked**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-invitable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **invitable**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-create-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **create_timestamp**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ThreadMetaData"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **ThreadMetaData** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-clone"></a>[Guild.ThreadMetaData](./class_guild.md#threadmetadata) **clone** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildStoreChannel
  
**Inherits:** [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
  
| return type                                                             | signature                                                                                                                                       |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildStoreChannel](./class_guild.md#guildstorechannel)           | [GuildStoreChannel](#method-GuildStoreChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                                    |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [get\_parent](#method-get-parent) **(**  **)**                                                                                                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                    |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-overwrites"></a>[Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **overwrites**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildStoreChannel"></a>[Guild.GuildStoreChannel](./class_guild.md#guildstorechannel) **GuildStoreChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# BaseGuildVoiceChannel
  
**Inherits:** [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
**Inherited By:** [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel), [Guild.StageChannel](./class_guild.md#stagechannel)  
  
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
  
| return type                                                             | signature                                                                                                                                               |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel)   | [BaseGuildVoiceChannel](#method-BaseGuildVoiceChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                                            |
| [Guild.ChannelCategory](./class_guild.md#channelcategory)               | [get\_parent](#method-get-parent) **(**  **)**                                                                                                          |
| [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel)   | [edit](#method-edit) **(** [GuildVoiceChannelEditData](./class_guildvoicechanneleditdata.md) data **)**                                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                            |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-parent-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **parent_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **parent**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_parent() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-overwrites"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **overwrites**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-BaseGuildVoiceChannel"></a>[Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) **BaseGuildVoiceChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-parent"></a>[Guild.ChannelCategory](./class_guild.md#channelcategory) **get\_parent** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) **edit** **(** [GuildVoiceChannelEditData](./class_guildvoicechanneleditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildVoiceChannel
  
**Inherits:** [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) < [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                              | name                                      |
|-------------------------------------------------------------------|-------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [user\_limit](#property-user-limit)       |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) | [video\_quality](#property-video-quality) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                       |
|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)           | [GuildVoiceChannel](#method-GuildVoiceChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                    |  
  
## Property Descriptions
  
- <a name="property-user-limit"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_limit**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-video-quality"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **video_quality**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildVoiceChannel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **GuildVoiceChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# StageChannel
  
**Inherits:** [Guild.BaseGuildVoiceChannel](./class_guild.md#baseguildvoicechannel) < [VoiceChannel](./class_voicechannel.md) < [Channel](./class_channel.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                           |
|-------------------------------------------------------------------------|--------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [topic](#property-topic)       |
| [Guild.StageInstance](./class_guild.md#stageinstance)                   | [instance](#property-instance) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                             |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.StageChannel](./class_guild.md#stagechannel)                     | [StageChannel](#method-StageChannel) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                          |  
  
## Property Descriptions
  
- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-instance"></a>[Guild.StageInstance](./class_guild.md#stageinstance) **instance**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-StageChannel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **StageChannel** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# StageInstance
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                      |
|-------------------------------------------------------------------------|-------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)           |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)       |
| [Guild.StageChannel](./class_guild.md#stagechannel)                     | [channel](#property-channel)              |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [topic](#property-topic)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [privacy\_level](#property-privacy-level) |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [discoverable](#property-discoverable)    |  
  
## Methods
  
| return type                                         | signature                                        |
|-----------------------------------------------------|--------------------------------------------------|
| [Guild](./class_guild.md)                           | [get\_guild](#method-get-guild) **(**  **)**     |
| [Guild.StageChannel](./class_guild.md#stagechannel) | [get\_channel](#method-get-channel) **(**  **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PrivacyLevel**  
  
	- **PUBLIC** = 0  

	- **GUILD\_ONLY** = 1  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-channel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-topic"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **topic**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-privacy-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **privacy_level**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-discoverable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **discoverable**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[Guild.StageChannel](./class_guild.md#stagechannel) **get\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# Role
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_mention](#method-get-mention) **(**  **)**                                                                      |
| [Guild.Role](./class_guild.md#role)                                       | [edit](#method-edit) **(** [RoleEditData](./class_roleeditdata.md) data **)**                                         |
| [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) | [delete](#method-delete) **(**  **)**                                                                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)   | [get\_class](#method-get-class) **(**  **)**                                                                          |  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-color"></a>[Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) **color**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-hoist"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **hoist**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-position"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **position**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-permissions"></a>[BitFlag](./class_bitflag.md) **permissions**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-managed"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_managed**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-mentionable"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **mentionable**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-tags"></a>[Guild.Role.Tags](./class_guild.md#tags) **tags**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Role"></a>[Guild.Role](./class_guild.md#role) **Role** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-edit"></a>[Guild.Role](./class_guild.md#role) **edit** **(** [RoleEditData](./class_roleeditdata.md) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-delete"></a>[Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) **delete** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
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
  
| return type                                                             | signature                                                                                                             |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| [Guild.Role.Tags](./class_guild.md#tags)                                | [Tags](#method-Tags) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild.Role.Tags](./class_guild.md#tags)                                | [duplicate](#method-duplicate) **(**  **)**                                                                           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                          |  
  
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
  
- <a name="method-Tags"></a>[Guild.Role.Tags](./class_guild.md#tags) **Tags** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-duplicate"></a>[Guild.Role.Tags](./class_guild.md#tags) **duplicate** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildEmoji
  
**Inherits:** [Emoji](./class_emoji.md) < [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
  
| return type                                                             | signature                                                                                                                         |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildEmoji](./class_guild.md#guildemoji)                         | [GuildEmoji](#method-GuildEmoji) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_mention](#method-get-mention) **(**  **)**                                                                                  |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                      |
| [Array](https://docs.godotengine.org/en/3.5/classes/class_array.html)   | [get\_roles](#method-get-roles) **(**  **)**                                                                                      |
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(**  **)**                                                                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [url\_encoded](#method-url-encoded) **(**  **)**                                                                                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                      |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-roles-ids"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles_ids**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **roles**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_roles() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-managed"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_managed**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-animated"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_animated**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-available"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **available**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildEmoji"></a>[Guild.GuildEmoji](./class_guild.md#guildemoji) **GuildEmoji** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-roles"></a>[Array](https://docs.godotengine.org/en/3.5/classes/class_array.html) **get\_roles** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-url-encoded"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **url\_encoded** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# VoiceState
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                             |
|-------------------------------------------------------------------------|--------------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                  |
| [Guild](./class_guild.md)                                               | [guild](#property-guild)                         |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)              |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)           | [channel](#property-channel)                     |
| [User](./class_user.md)                                                 | [user](#property-user)                           |
| [DiscordTeam.Member](./class_discordteam.md#member)                     | [member](#property-member)                       |
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
  
| return type                                                             | signature                                                                                                                         |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| [Guild.VoiceState](./class_guild.md#voicestate)                         | [VoiceState](#method-VoiceState) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [Guild](./class_guild.md)                                               | [get\_guild](#method-get-guild) **(**  **)**                                                                                      |
| [Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel)           | [get\_channel](#method-get-channel) **(**  **)**                                                                                  |
| [User](./class_user.md)                                                 | [get\_user](#method-get-user) **(**  **)**                                                                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                      |
| [DiscordTeam.Member](./class_discordteam.md#member)                     | [get\_member](#method-get-member) **(**  **)**                                                                                    |  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_guild() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **channel**  
	  
	|          | method         |
	|----------|----------------|
	| *Getter* | get\_channel() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-user"></a>[User](./class_user.md) **user**  
	  
	|          | method      |
	|----------|-------------|
	| *Getter* | get\_user() |  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **member**  
	  
	|          | method        |
	|----------|---------------|
	| *Getter* | get\_member() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-session-id"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **session_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-deafened"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_deafened**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-muted"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_muted**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-self-deaf"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_deaf**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-self-mute"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_mute**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-self-stream"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_stream**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-self-video"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **self_video**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-suppress"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **suppress**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-request-to-speak"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **request_to_speak**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-VoiceState"></a>[Guild.VoiceState](./class_guild.md#voicestate) **VoiceState** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-guild"></a>[Guild](./class_guild.md) **get\_guild** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-channel"></a>[Guild.GuildVoiceChannel](./class_guild.md#guildvoicechannel) **get\_channel** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-user"></a>[User](./class_user.md) **get\_user** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-member"></a>[DiscordTeam.Member](./class_discordteam.md#member) **get\_member** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# Invite
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
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
| [StageInstanceInvite](./class_stageinstanceinvite.md)                   | [stage\_instance](#property-stage-instance)         |
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)       | [scheduled\_event](#property-scheduled-event)       |  
  
## Methods
  
| return type                                                             | signature                                                                                                                 |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| [Guild.Invite](./class_guild.md#invite)                                 | [Invite](#method-Invite) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                              |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **TargetType**  
  
	- **STREAM** = 1  

	- **EMBEDDED\_APPLICATION** = 2  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-code"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **code**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild"></a>[Guild](./class_guild.md) **guild**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel"></a>[PartialChannel](./class_partialchannel.md) **channel**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-inviter"></a>[User](./class_user.md) **inviter**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-target-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **target_type**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-target-user"></a>[User](./class_user.md) **target_user**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-target-application"></a>[DiscordApplication](./class_discordapplication.md) **target_application**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-presence-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **presence_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-member-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **member_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-expires-at"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **expires_at**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-stage-instance"></a>[StageInstanceInvite](./class_stageinstanceinvite.md) **stage_instance**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-scheduled-event"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **scheduled_event**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-Invite"></a>[Guild.Invite](./class_guild.md#invite) **Invite** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# GuildScheduledEvent
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                          |
|-------------------------------------------------------------------------|-----------------------------------------------|
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [channel\_id](#property-channel-id)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [creator\_id](#property-creator-id)           |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [start\_time](#property-start-time)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [end\_time](#property-end-time)               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [privacy\_level](#property-privacy-level)     |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [status](#property-status)                    |
| [User](./class_user.md)                                                 | [creator](#property-creator)                  |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [user\_count](#property-user-count)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [entity\_id](#property-entity-id)             |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [entity\_type](#property-entity-type)         |
| [Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) | [entity\_metadata](#property-entity-metadata) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                           |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent)       | [GuildScheduledEvent](#method-GuildScheduledEvent) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                        |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PrivacyLevel**  
  
	- **GUILD\_ONLY** = 2  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **EntityType**  
  
	- **STAGE\_INSTANCE** = 1  

	- **VOICE** = 2  

	- **EXTERNAL** = 3  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **EventStatus**  
  
	- **SCHEDULED** = 1  

	- **ACTIVE** = 2  

	- **COMPLETED** = 3  

	- **CANCELED** = 4  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-channel-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **channel_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-creator-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **creator_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-start-time"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **start_time**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-end-time"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **end_time**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-privacy-level"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **privacy_level**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-status"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **status**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-creator"></a>[User](./class_user.md) **creator**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-user-count"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **user_count**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-entity-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **entity_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-entity-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **entity_type**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-entity-metadata"></a>[Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) **entity_metadata**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-GuildScheduledEvent"></a>[Guild.GuildScheduledEvent](./class_guild.md#guildscheduledevent) **GuildScheduledEvent** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
________________
  
  
# ScheduledEventMetadata
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                           |
|-------------------------------------------------------------------------|--------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [location](#property-location) |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                                 |
|-------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) | [ScheduledEventMetadata](#method-ScheduledEventMetadata) **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_location **)** |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                              |  
  
## Property Descriptions
  
- <a name="property-location"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **location**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-ScheduledEventMetadata"></a>[Guild.ScheduledEventMetadata](./class_guild.md#scheduledeventmetadata) **ScheduledEventMetadata** **(** [Variant](https://docs.godotengine.org/en/3.5/classes/class_variant.html) \_location **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
