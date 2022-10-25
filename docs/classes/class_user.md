  
# User
  
**Inherits:** [MentionableEntity](./class_mentionableentity.md) < [DiscordEntity](./class_discordentity.md) < [Reference](https://docs.godotengine.org/en/3.5/classes/class_reference.html) < [Object](https://docs.godotengine.org/en/3.5/classes/class_object.html)  
  
  
## Properties
  
| type                                                                    | name                                     |
|-------------------------------------------------------------------------|------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [username](#property-username)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [discriminator](#property-discriminator) |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [avatar\_hash](#property-avatar-hash)    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [email](#property-email)                 |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [locale](#property-locale)               |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_bot](#property-is-bot)              |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [is\_system](#property-is-system)        |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [mfa\_enabled](#property-mfa-enabled)    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [banner\_hash](#property-banner-hash)    |
| [Color](https://docs.godotengine.org/en/3.5/classes/class_color.html)   | [accent](#property-accent)               |
| [bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html)     | [verified](#property-verified)           |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [premium\_type](#property-premium-type)  |
| [BitFlag](./class_bitflag.md)                                           | [flags](#property-flags)                 |
| [BitFlag](./class_bitflag.md)                                           | [public\_flags](#property-public-flags)  |  
  
## Methods
  
| return type                                                             | signature                                                           |
|-------------------------------------------------------------------------|---------------------------------------------------------------------|
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_tag](#method-get-tag) **(**  **)**                            |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_mention](#method-get-mention) **(**  **)**                    |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_nickname\_mention](#method-get-nickname-mention) **(**  **)** |
| [int](https://docs.godotengine.org/en/3.5/classes/class_int.html)       | [join\_date\_timestamp](#method-join-date-timestamp) **(**  **)**   |
| [String](https://docs.godotengine.org/en/3.5/classes/class_string.html) | [get\_class](#method-get-class) **(**  **)**                        |  
  
## Constants
  
- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **Flags**  
  
	- **DISCORD\_EMPLOYEE** = 1  

	- **PARTNER** = 2  

	- **HYPESQUAD** = 4  

	- **BUG\_HUNTER\_LEVEL1** = 8  

	- **HOUSE\_BRAVERY** = 64  

	- **HOUSE\_BRILLIANCE** = 128  

	- **HOUSE\_BALANCE** = 256  

	- **EARLY\_SUPPORTER** = 512  

	- **TEAM\_PSEUDO\_USER** = 1024  

	- **BUG\_HUNTER\_LEVEL2** = 16384  

	- **VERIFIED\_BOT** = 65536  

	- **VERIFIED\_DEVELOPER** = 131072  

	- **CERTIFIED\_MODERATOR** = 262144  

	- **BOT\_HTTP\_INTERACTIONS** = 524288  

  
	> *There is currently no description for this constant.*  
________________

- [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) **PremiumType**  
  
	- **NONE** = 0  

	- **NITRO\_CLASSIC** = 1  

	- **NITRO** = 2  

  
	> *There is currently no description for this constant.*
  
  
## Property Descriptions
  
- <a name="property-username"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **username**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-discriminator"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **discriminator**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-avatar-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **avatar_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-email"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **email**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-locale"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **locale**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-bot"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_bot**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-is-system"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **is_system**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-mfa-enabled"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **mfa_enabled**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-banner-hash"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **banner_hash**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-accent"></a>[Color](https://docs.godotengine.org/en/3.5/classes/class_color.html) **accent**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-verified"></a>[bool](https://docs.godotengine.org/en/3.5/classes/class_bool.html) **verified**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-premium-type"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **premium_type**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-flags"></a>[BitFlag](./class_bitflag.md) **flags**  
  
	> *There is currently no description for this property.*  
________________

- <a name="property-public-flags"></a>[BitFlag](./class_bitflag.md) **public_flags**  
  
	> *There is currently no description for this property.*
  
  
## Method Descriptions
  
- <a name="method-User"></a>[User](./class_user.md) **User** **(** [Dictionary](https://docs.godotengine.org/en/3.5/classes/class_dictionary.html) data **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-tag"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_tag** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-nickname-mention"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_nickname\_mention** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-join-date-timestamp"></a>[int](https://docs.godotengine.org/en/3.5/classes/class_int.html) **join\_date\_timestamp** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

- <a name="method-get-class"></a>[String](https://docs.godotengine.org/en/3.5/classes/class_string.html) **get\_class** **(**  **)**  
  
	> *There is currently no description for this method.*  
________________

  
