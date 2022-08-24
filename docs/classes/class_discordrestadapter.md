  
# DiscordRESTAdapter
  
**Inherits:** [Node](https://docs.godotengine.org/en/3.5/classes/class_node.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Standalone Discord REST API client.  
  
## Properties
  
| type                                                    | name                                 |
|---------------------------------------------------------|--------------------------------------|
| [DiscordRESTRequester](./class_discordrestrequester.md) | [requester](#property-requester)     |
| [DiscordRESTMediator](./class_discordrestmediator.md)   | [mediator](#property-mediator)       |
| [ApplicationRESTAPI](./class_applicationrestapi.md)     | [application](#property-application) |
| [ChannelRESTAPI](./class_channelrestapi.md)             | [channel](#property-channel)         |
| [GuildRESTAPI](./class_guildrestapi.md)                 | [guild](#property-guild)             |
| [InteractionRESTAPI](./class_interactionrestapi.md)     | [interaction](#property-interaction) |
| [UserRESTAPI](./class_userrestapi.md)                   | [user](#property-user)               |
| [WebhookRESTAPI](./class_webhookrestapi.md)             | [webhook](#property-webhook)         |  
  
## Methods
  
| return type                                         | signature                                                                                                                                                                                                                                                                                                                           |
|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordRESTAdapter](./class_discordrestadapter.md) | [DiscordRESTAdapter](#method-DiscordRESTAdapter) **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [DiscordEntityManager](./class_discordentitymanager.md) entity\_manager=DiscordEntityManager.new(), [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)** |  
  
## Property Descriptions
  
- <a name="property-requester"></a>[DiscordRESTRequester](./class_discordrestrequester.md) **requester**  
  
	REST API requester instance.  
________________

- <a name="property-mediator"></a>[DiscordRESTMediator](./class_discordrestmediator.md) **mediator**  
  
	Mediator of this client.  
________________

- <a name="property-application"></a>[ApplicationRESTAPI](./class_applicationrestapi.md) **application**  
  
	Application REST API client.  
________________

- <a name="property-channel"></a>[ChannelRESTAPI](./class_channelrestapi.md) **channel**  
  
	Channel REST API client.  
________________

- <a name="property-guild"></a>[GuildRESTAPI](./class_guildrestapi.md) **guild**  
  
	Guild REST API client.  
________________

- <a name="property-interaction"></a>[InteractionRESTAPI](./class_interactionrestapi.md) **interaction**  
  
	Interaction REST API client.  
________________

- <a name="property-user"></a>[UserRESTAPI](./class_userrestapi.md) **user**  
  
	User REST API client.  
________________

- <a name="property-webhook"></a>[WebhookRESTAPI](./class_webhookrestapi.md) **webhook**  
  
	Webhook REST API client.
  
  
## Method Descriptions
  
- <a name="method-DiscordRESTAdapter"></a>[DiscordRESTAdapter](./class_discordrestadapter.md) **DiscordRESTAdapter** **(** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) token, [DiscordEntityManager](./class_discordentitymanager.md) entity\_manager=DiscordEntityManager.new(), [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) use\_pool=false **)**  
  
	Constructs a new `DiscordRESTAdapter` with a bot `token`. You can optionally
	pass an `entity_manager` for different caching settings. `use_pool` enables
	the use of a HTTP connection pool (experimental unstable feature).  
________________

  
  
## Sub Classes
  
