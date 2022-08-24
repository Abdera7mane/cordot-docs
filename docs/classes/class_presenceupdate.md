  
# PresenceUpdate
  
**Inherits:** [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Presence update builder.  
  
## Methods
  
| return type                                 | signature                                                                                                              |
|---------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [PresenceUpdate](./class_presenceupdate.md) | [since](#method-since) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) unix\_timestamp **)**   |
| [PresenceUpdate](./class_presenceupdate.md) | [add\_activity](#method-add-activity) **(** [DiscordActivity](./class_discordactivity.md) activity **)**               |
| [PresenceUpdate](./class_presenceupdate.md) | [set\_status](#method-set-status) **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) status **)** |
| [PresenceUpdate](./class_presenceupdate.md) | [set\_afk](#method-set-afk) **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) afk **)**        |  
  
## Method Descriptions
  
- <a name="method-since"></a>[PresenceUpdate](./class_presenceupdate.md) **since** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) unix\_timestamp **)**  
  
	Sets the unix time (in milliseconds) of when the client went idle, or null
	if the client is not idle.  
________________

- <a name="method-add-activity"></a>[PresenceUpdate](./class_presenceupdate.md) **add\_activity** **(** [DiscordActivity](./class_discordactivity.md) activity **)**  
  
	Adds an activity status.  
________________

- <a name="method-set-status"></a>[PresenceUpdate](./class_presenceupdate.md) **set\_status** **(** [int](https://docs.godotengine.org/en/3.5/classes/class_int.html) status **)**  
  
	Sets the user status, status takes an `DiscordActivity.Type` enum value.  
________________

- <a name="method-set-afk"></a>[PresenceUpdate](./class_presenceupdate.md) **set\_afk** **(** [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) afk **)**  
  
	Sets whether or not the client is afk.  
________________

  
