  
# GuildEditAction
  
**Inherits:** [DiscordRESTAction](./class_discordrestaction.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Action to edit a guild settings.  
  
## Methods
  
| return type                                   | signature                                                                                                                                                   |
|-----------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Guild](./class_guild.md)                     | [submit](#method-submit) **(**  **)** <u>_coroutine_</u>                                                                                                    |
| [GuildEditAction](./class_guildeditaction.md) | [set\_name](#method-set-name) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**                                      |
| [GuildEditAction](./class_guildeditaction.md) | [set\_verification\_level](#method-set-verification-level) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**              |
| [GuildEditAction](./class_guildeditaction.md) | [set\_notifications\_level](#method-set-notifications-level) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**            |
| [GuildEditAction](./class_guildeditaction.md) | [set\_nsfw\_level](#method-set-nsfw-level) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**                              |
| [GuildEditAction](./class_guildeditaction.md) | [set\_afk\_channel](#method-set-afk-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                               |
| [GuildEditAction](./class_guildeditaction.md) | [set\_afk\_timeout](#method-set-afk-timeout) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) seconds **)**                          |
| [GuildEditAction](./class_guildeditaction.md) | [set\_icon](#method-set-icon) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**                                       |
| [GuildEditAction](./class_guildeditaction.md) | [set\_owner](#method-set-owner) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                                            |
| [GuildEditAction](./class_guildeditaction.md) | [set\_splash](#method-set-splash) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**                                   |
| [GuildEditAction](./class_guildeditaction.md) | [set\_discovery\_splash](#method-set-discovery-splash) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**              |
| [GuildEditAction](./class_guildeditaction.md) | [set\_banner](#method-set-banner) **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**                                   |
| [GuildEditAction](./class_guildeditaction.md) | [set\_system\_channel](#method-set-system-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                         |
| [GuildEditAction](./class_guildeditaction.md) | [set\_system\_channel\_flags](#method-set-system-channel-flags) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) flags **)**         |
| [GuildEditAction](./class_guildeditaction.md) | [set\_rules\_channel](#method-set-rules-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**                           |
| [GuildEditAction](./class_guildeditaction.md) | [set\_public\_updates\_channel](#method-set-public-updates-channel) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**        |
| [GuildEditAction](./class_guildeditaction.md) | [set\_preferred\_locale](#method-set-preferred-locale) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) local **)**            |
| [GuildEditAction](./class_guildeditaction.md) | [set\_features](#method-set-features) **(** PoolStringArray features **)**                                                                                  |
| [GuildEditAction](./class_guildeditaction.md) | [set\_description](#method-set-description) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)**                 |
| [GuildEditAction](./class_guildeditaction.md) | [enable\_premium\_progress\_bar](#method-enable-premium-progress-bar) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)** |
| [GuildEditAction](./class_guildeditaction.md) | [remove\_afk\_channel](#method-remove-afk-channel) **(**  **)**                                                                                             |
| [GuildEditAction](./class_guildeditaction.md) | [remove\_system\_channel](#method-remove-system-channel) **(**  **)**                                                                                       |
| [GuildEditAction](./class_guildeditaction.md) | [remove\_rules\_channel](#method-remove-rules-channel) **(**  **)**                                                                                         |
| [GuildEditAction](./class_guildeditaction.md) | [remove\_public\_updates\_channel](#method-remove-public-updates-channel) **(**  **)**                                                                      |
| [GuildEditAction](./class_guildeditaction.md) | [reason](#method-reason) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**                                            |  
  
## Method Descriptions
  
- <a name="method-GuildEditAction"></a>[GuildEditAction](./class_guildeditaction.md) **GuildEditAction** **(** [DiscordRESTMediator](./class_discordrestmediator.md) rest, [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) guild\_id **)**  
  
	Constructs a new `GuildEditAction` instance.  
________________

- <a name="method-submit"></a>[Guild](./class_guild.md) **submit** **(**  **)** <u>_coroutine_</u>  
  
	Edits the guild settings.  
________________

- <a name="method-set-name"></a>[GuildEditAction](./class_guildeditaction.md) **set\_name** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) name **)**  
  
	Sets the guild name.  
________________

- <a name="method-set-verification-level"></a>[GuildEditAction](./class_guildeditaction.md) **set\_verification\_level** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**  
  
	Sets the member verfication level.
	`level` takes a `Guild.VerificationLevel` value.  
________________

- <a name="method-set-notifications-level"></a>[GuildEditAction](./class_guildeditaction.md) **set\_notifications\_level** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**  
  
	Sets the default message notifications level.
	`level` takes a `Guild.MessageNotificationLevel` value.  
________________

- <a name="method-set-nsfw-level"></a>[GuildEditAction](./class_guildeditaction.md) **set\_nsfw\_level** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) level **)**  
  
	Sets the NSFW level.
	`level` takes a `Guild.ExplicitContentFilterLevel` value.  
________________

- <a name="method-set-afk-channel"></a>[GuildEditAction](./class_guildeditaction.md) **set\_afk\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Sets the afk channel in the guild.
	`id` must point to a voice channel.  
________________

- <a name="method-set-afk-timeout"></a>[GuildEditAction](./class_guildeditaction.md) **set\_afk\_timeout** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) seconds **)**  
  
	Sets the afk timeout in seconds, can be set to: `60`, `300`, `900`, `1800` or `3600`.  
________________

- <a name="method-set-icon"></a>[GuildEditAction](./class_guildeditaction.md) **set\_icon** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the guild icon, `image` size has to be equal to `1024x1024`.  
________________

- <a name="method-set-owner"></a>[GuildEditAction](./class_guildeditaction.md) **set\_owner** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Transfers guild ownership to an other user.
	The user executing this must be the guild owner.  
________________

- <a name="method-set-splash"></a>[GuildEditAction](./class_guildeditaction.md) **set\_splash** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the guild splash screen.
	Requires the guild to have `INVITE_SPLASH` feature.  
________________

- <a name="method-set-discovery-splash"></a>[GuildEditAction](./class_guildeditaction.md) **set\_discovery\_splash** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the guild discovery splash image.
	Requires the guild to have `DISCOVERABLE` feature.  
________________

- <a name="method-set-banner"></a>[GuildEditAction](./class_guildeditaction.md) **set\_banner** **(** [Image](https://docs.godotengine.org/en/3.5/classes/class_image.html) image **)**  
  
	Sets the guild banner image.
	Requires the guild to have `BANNER` feature.  
________________

- <a name="method-set-system-channel"></a>[GuildEditAction](./class_guildeditaction.md) **set\_system\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Sets the system channel in the guild.
	`id` must point to a text channel.  
________________

- <a name="method-set-system-channel-flags"></a>[GuildEditAction](./class_guildeditaction.md) **set\_system\_channel\_flags** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) flags **)**  
  
	Sets the system channel flags in the guild.  
________________

- <a name="method-set-rules-channel"></a>[GuildEditAction](./class_guildeditaction.md) **set\_rules\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Sets the afk channel in the guild.
	`id` must point to a text channel.  
________________

- <a name="method-set-public-updates-channel"></a>[GuildEditAction](./class_guildeditaction.md) **set\_public\_updates\_channel** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) id **)**  
  
	Sets the afk channel in the guild.
	`id` must point to a text channel.  
________________

- <a name="method-set-preferred-locale"></a>[GuildEditAction](./class_guildeditaction.md) **set\_preferred\_locale** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) local **)**  
  
	Sets the preferred locale of a community guild.
	See [Locales](https://discord.com/developers/docs/reference#locales).  
________________

- <a name="method-set-features"></a>[GuildEditAction](./class_guildeditaction.md) **set\_features** **(** PoolStringArray features **)**  
  
	Sets the enabled guild features.  
________________

- <a name="method-set-description"></a>[GuildEditAction](./class_guildeditaction.md) **set\_description** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) description **)**  
  
	Sets the guild description.  
________________

- <a name="method-enable-premium-progress-bar"></a>[GuildEditAction](./class_guildeditaction.md) **enable\_premium\_progress\_bar** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) value **)**  
  
	Whether the guild's boost progress bar should be enabled.  
________________

- <a name="method-remove-afk-channel"></a>[GuildEditAction](./class_guildeditaction.md) **remove\_afk\_channel** **(**  **)**  
  
	Removes the afk channel.  
	**Note:** does not delete the channel.  
________________

- <a name="method-remove-system-channel"></a>[GuildEditAction](./class_guildeditaction.md) **remove\_system\_channel** **(**  **)**  
  
	Removes the system channel.  
	**Note:** does not delete the channel.  
________________

- <a name="method-remove-rules-channel"></a>[GuildEditAction](./class_guildeditaction.md) **remove\_rules\_channel** **(**  **)**  
  
	Removes the rules channel.  
	**Note:** does not delete the channel.  
________________

- <a name="method-remove-public-updates-channel"></a>[GuildEditAction](./class_guildeditaction.md) **remove\_public\_updates\_channel** **(**  **)**  
  
	Removes the public updates channel.  
	**Note:** does not delete the channel.  
________________

- <a name="method-reason"></a>[GuildEditAction](./class_guildeditaction.md) **reason** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) why **)**  
  
	Sets the reason for editing the guild.  
________________

  
