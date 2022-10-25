  
# DiscordApplication
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Description
  
Represents an application on Discord.  
  
## Properties
  
| type                                                                    | name                                                          |
|-------------------------------------------------------------------------|---------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [name](#property-name)                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [icon\_hash](#property-icon-hash)                             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [description](#property-description)                          |
| PoolStringArray                                                         | [rpc\_origins](#property-rpc-origins)                         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_bot\_public](#property-is-bot-public)                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [bot\_require\_code\_grant](#property-bot-require-code-grant) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [tos\_url](#property-tos-url)                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [privacy\_policy\_url](#property-privacy-policy-url)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [owner\_id](#property-owner-id)                               |
| [User](./class_user.md)                                                 | [owner](#property-owner)                                      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | ~~[summary](#property-summary)~~                              |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [verify\_key](#property-verify-key)                           |
| [DiscordTeam](./class_discordteam.md)                                   | [team](#property-team)                                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [guild\_id](#property-guild-id)                               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [primary\_sku\_id](#property-primary-sku-id)                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [slug](#property-slug)                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [cover\_image\_hash](#property-cover-image-hash)              |
| [BitFlag](./class_bitflag.md)                                           | [flags](#property-flags)                                      |  
  
## Methods
  
| return type             | signature                                    |
|-------------------------|----------------------------------------------|
| [User](./class_user.md) | [get\_owner](#method-get-owner) **(**  **)** |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Flags**  
  
	- **GATEWAY\_PRESENCE** = 4096  

	- **GATEWAY\_PRESENCE\_LIMITED** = 8192  

	- **GATEWAY\_GUILD\_MEMBERS** = 16384  

	- **GATEWAY\_GUILD\_MEMBERS\_LIMITED** = 32768  

	- **VERIFICATION\_PENDING\_GUILD\_LIMIT** = 65536  

	- **EMBEDDED** = 131072  

	- **GATEWAY\_MESSAGE\_CONTENT** = 262144  

	- **GATEWAY\_MESSAGE\_CONTENT\_LIMITED** = 524288  

  
	Application public flags.
  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	The name of the application.  
________________

- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	The icon hash of the application.  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	The description of the application.  
________________

- <a name="property-rpc-origins"></a>PoolStringArray **rpc_origins**  
  
	Array of rpc origin urls, if rpc is enabled.  
________________

- <a name="property-is-bot-public"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_bot_public**  
  
	When `false` only application owner can join the application's bot to guilds.  
________________

- <a name="property-bot-require-code-grant"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **bot_require_code_grant**  
  
	When `true` the application's bot will only join upon completion of the full
	oauth2 code grant flow.  
________________

- <a name="property-tos-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **tos_url**  
  
	The url of the application's terms of service.  
________________

- <a name="property-privacy-policy-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **privacy_policy_url**  
  
	The url of the application's privacy policy.  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	User owner id of the application.  
________________

- 	<a name="property-owner"></a>[User](./class_user.md) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	User object containing info on the owner of the application. Can be partial.  
________________

- <a name="property-summary"></a>***deprecated*** [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **summary**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-verify-key"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **verify_key**  
  
	Hex encoded verification key.  
________________

- <a name="property-team"></a>[DiscordTeam](./class_discordteam.md) **team**  
  
	The team this application belongs to, if it is owned by a team.  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	If this application is a game sold on Discord, this field will be the guild to
	which it has been linked.  
________________

- <a name="property-primary-sku-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **primary_sku_id**  
  
	If this application is a game sold on Discord, this field will be the id of
	the "Game SKU" that is created, if exists.  
________________

- <a name="property-slug"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **slug**  
  
	If this application is a game sold on Discord, this field will be the URL slug
	that links to the store page.  
________________

- <a name="property-cover-image-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **cover_image_hash**  
  
	The application's default rich presence invite cover image hash.  
________________

- <a name="property-flags"></a>[BitFlag](./class_bitflag.md) **flags**  
  
	The application's public flags.
  
  
## Method Descriptions
  
- <a name="method-get-owner"></a>[User](./class_user.md) **get\_owner** **(**  **)**  
  
	`owner` getter.  
________________

  
