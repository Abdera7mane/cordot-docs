  
# DiscordApplication
  
**Inherits:** [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                                      | name                                                          |
|-------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [name](#property-name)                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [icon\_hash](#property-icon-hash)                             |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [description](#property-description)                          |
| [PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) | [rpc\_origins](#property-rpc-origins)                         |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                       | [is\_bot\_public](#property-is-bot-public)                    |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)                       | [bot\_require\_code\_grant](#property-bot-require-code-grant) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [tos\_url](#property-tos-url)                                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [privacy\_policy\_url](#property-privacy-policy-url)          |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [owner\_id](#property-owner-id)                               |
| [User](./class_user.md)                                                                   | [owner](#property-owner)                                      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [summary](#property-summary)                                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [verify\_key](#property-verify-key)                           |
| [DiscordTeam](./class_discordteam.md)                                                     | [team](#property-team)                                        |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [guild\_id](#property-guild-id)                               |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)                         | [primary\_sku\_id](#property-primary-sku-id)                  |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [slug](#property-slug)                                        |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html)                   | [cover\_image\_hash](#property-cover-image-hash)              |
| [BitFlag](./class_bitflag.md)                                                             | [flags](#property-flags)                                      |  
  
## Methods
  
| return type                                                             | signature                                                                                                                                         |
|-------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| [DiscordApplication](./class_discordapplication.md)                     | [DiscordApplication](#method-DiscordApplication) **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)** |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_partial](#method-is-partial) **(**  **)**                                                                                                    |
| [User](./class_user.md)                                                 | [get\_owner](#method-get-owner) **(**  **)**                                                                                                      |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                                                                                                      |  
  
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

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-name"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **name**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-icon-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **icon_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-description"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **description**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-rpc-origins"></a>[PoolStringArray](https://docs.godotengine.org/en/3.5/classes/class_poolstringarray.html) **rpc_origins**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-bot-public"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_bot_public**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-bot-require-code-grant"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **bot_require_code_grant**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-tos-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **tos_url**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-privacy-policy-url"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **privacy_policy_url**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-owner-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **owner_id**  
  
	> *There is currently no description for this property.*  
________________

- 	<a name="property-owner"></a>[User](./class_user.md) **owner**  
	  
	|          | method       |
	|----------|--------------|
	| *Getter* | get\_owner() |  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-summary"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **summary**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-verify-key"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **verify_key**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-team"></a>[DiscordTeam](./class_discordteam.md) **team**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-guild-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **guild_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-primary-sku-id"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **primary_sku_id**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-slug"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **slug**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-cover-image-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **cover_image_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-flags"></a>[BitFlag](./class_bitflag.md) **flags**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-DiscordApplication"></a>[DiscordApplication](./class_discordapplication.md) **DiscordApplication** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-is-partial"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is\_partial** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-owner"></a>[User](./class_user.md) **get\_owner** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
